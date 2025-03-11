
import React, { useEffect, useRef, useState } from 'react';

interface WipeableImageProps {
  topImage: string;
  bottomContent: React.ReactNode;
  className?: string;
  containedMode?: boolean;
}

const WipeableImage: React.FC<WipeableImageProps> = ({ 
  topImage, 
  bottomContent,
  className = '',
  containedMode = false 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDrawing, setIsDrawing] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const scratchAreaRef = useRef<HTMLDivElement>(null);
  const wipeCirclesRef = useRef<HTMLDivElement[]>([]);
  const colors = [
    '#FEC6A1', '#E5DEFF', '#FFDEE2', '#FDE1D3', '#D3E4FD',
    '#F2FCE2', '#FEF7CD', '#8B5CF6', '#D946EF', '#F97316'
  ];
  
  // Check if device is mobile or tablet
  useEffect(() => {
    const checkDevice = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  // Handle image loading
  useEffect(() => {
    const image = new Image();
    image.src = topImage;
    image.onload = () => {
      setIsLoaded(true);
    };
  }, [topImage]);

  // Handle mouse/touch movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if ((!containedMode && !containerRef.current) || 
        (containedMode && !scratchAreaRef.current) || 
        !isLoaded) return;
    
    let containerRect;
    
    if (containedMode && scratchAreaRef.current) {
      containerRect = scratchAreaRef.current.getBoundingClientRect();
    } else if (containerRef.current) {
      containerRect = containerRef.current.getBoundingClientRect();
    } else {
      return;
    }
    
    let clientX, clientY;
    
    if ('touches' in e) {
      // Touch event
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      // Mouse event
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const x = clientX - containerRect.left;
    const y = clientY - containerRect.top;
    
    setMousePosition({ x, y });
    
    if (isDrawing) {
      createWatercolorCircle(x, y);
    }
  };
  
  // Create a watercolor circle effect at the given position
  const createWatercolorCircle = (x: number, y: number) => {
    if (!scratchAreaRef.current && !containerRef.current) return;
    
    const circle = document.createElement('div');
    circle.className = 'wipe-circle';
    
    // Use random size between 20-80px
    const size = Math.random() * 60 + 20;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    
    // Set random color from the colors array
    const color = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = color;
    
    // Set position
    circle.style.left = `${x - size/2}px`;
    circle.style.top = `${y - size/2}px`;
    
    // Add opacity animation
    circle.style.opacity = '0.7';
    circle.style.transition = 'opacity 2s';
    
    // Append to container
    const targetContainer = containedMode ? scratchAreaRef.current : containerRef.current;
    targetContainer?.appendChild(circle);
    
    // Store circle reference for cleanup
    wipeCirclesRef.current.push(circle);
    
    // Fade out and remove after animation
    setTimeout(() => {
      circle.style.opacity = '0';
      setTimeout(() => {
        if (targetContainer?.contains(circle)) {
          targetContainer.removeChild(circle);
        }
        wipeCirclesRef.current = wipeCirclesRef.current.filter(c => c !== circle);
      }, 2000);
    }, 100);
  };
  
  // Start drawing
  const handleStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDrawing(true);
    handleMouseMove(e);
  };
  
  // Stop drawing
  const handleEnd = () => {
    setIsDrawing(false);
  };

  // Clean up circles on unmount
  useEffect(() => {
    return () => {
      wipeCirclesRef.current.forEach(circle => {
        const parent = circle.parentNode;
        if (parent) {
          parent.removeChild(circle);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Background Image */}
      {isLoaded && (
        <img 
          src={topImage} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      
      {/* Bottom content */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {bottomContent}
      </div>
      
      {/* Scratch area (if in contained mode) */}
      {containedMode ? (
        <div 
          ref={scratchAreaRef}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-[4/3] z-10 rounded-lg overflow-hidden border-4 border-white/20 shadow-xl cursor-none"
          style={{ maxWidth: "900px" }}
          onMouseMove={handleMouseMove}
          onMouseDown={handleStart}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchMove={handleMouseMove}
          onTouchStart={handleStart}
          onTouchEnd={handleEnd}
        />
      ) : (
        // Full-screen interaction area
        <div 
          className="absolute inset-0 z-10 cursor-none"
          onMouseMove={handleMouseMove}
          onMouseDown={handleStart}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchMove={handleMouseMove}
          onTouchStart={handleStart}
          onTouchEnd={handleEnd}
        />
      )}
      
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse-slow w-6 h-6 bg-primary rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default WipeableImage;
