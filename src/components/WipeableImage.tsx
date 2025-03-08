
import React, { useEffect, useRef, useState } from 'react';

interface WipeableImageProps {
  topImage: string;
  bottomContent: React.ReactNode;
  className?: string;
}

const WipeableImage: React.FC<WipeableImageProps> = ({ 
  topImage, 
  bottomContent,
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isErasing, setIsErasing] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const watercolorBrushes = useRef<HTMLCanvasElement[]>([]);
  
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

  // Create watercolor brushes
  useEffect(() => {
    // Create a few different watercolor brush textures
    const createWatercolorBrush = (size: number, opacity: number) => {
      const canvas = document.createElement('canvas');
      canvas.width = size * 2;
      canvas.height = size * 2;
      const ctx = canvas.getContext('2d');
      if (!ctx) return canvas;

      // Drawing a watercolor-like blob
      ctx.globalAlpha = opacity;
      for (let i = 0; i < 20; i++) {
        const radius = Math.random() * size * 0.4 + size * 0.6;
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * (size * 0.4);
        
        ctx.beginPath();
        ctx.arc(
          size + Math.cos(angle) * distance, 
          size + Math.sin(angle) * distance, 
          radius, 0, Math.PI * 2
        );
        ctx.fill();
      }
      
      return canvas;
    };

    // Create a few different brush sizes
    watercolorBrushes.current = [
      createWatercolorBrush(40, 0.4),
      createWatercolorBrush(60, 0.35),
      createWatercolorBrush(80, 0.3),
      createWatercolorBrush(100, 0.25),
    ];
  }, []);

  // Initialize canvas and load image
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) return;
    
    contextRef.current = context;
    
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = topImage;
    imageRef.current = image;
    
    image.onload = () => {
      if (!containerRef.current) return;
      
      // Set canvas dimensions to match container
      const { width, height } = containerRef.current.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      
      // Set display size (css pixels)
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      // Draw image to fill canvas
      context.drawImage(image, 0, 0, width, height);
      setIsLoaded(true);
    };
  }, [topImage]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current || !imageRef.current || !contextRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      const canvas = canvasRef.current;
      const context = contextRef.current;
      
      // Update canvas dimensions
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      // Redraw the image
      context.drawImage(imageRef.current, 0, 0, width, height);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle mouse/touch movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isLoaded) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    
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
    
    if (isErasing && contextRef.current) {
      applyWatercolorErase(x, y);
    }
  };
  
  // Apply watercolor erasing effect
  const applyWatercolorErase = (x: number, y: number) => {
    if (!contextRef.current || watercolorBrushes.current.length === 0) return;
    
    const context = contextRef.current;
    
    // Use a random brush from our collection for variety
    const brushIndex = Math.floor(Math.random() * watercolorBrushes.current.length);
    const brush = watercolorBrushes.current[brushIndex];
    
    // Apply the brush as an eraser
    context.globalCompositeOperation = 'destination-out';
    
    // Add some randomness to each stroke for a more natural feel
    const randomScale = 0.8 + Math.random() * 0.4; // Scale between 0.8 and 1.2
    const size = brush.width / 2 * randomScale;
    
    context.drawImage(
      brush, 
      x - size, 
      y - size, 
      size * 2, 
      size * 2
    );
  };
  
  // Start erasing
  const handleStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsErasing(true);
    handleMouseMove(e);
  };
  
  // Stop erasing
  const handleEnd = () => {
    setIsErasing(false);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={handleMouseMove}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
    >
      {/* Bottom content */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {bottomContent}
      </div>
      
      {/* Canvas overlay */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-10 touch-none"
      />
      
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse-slow w-6 h-6 bg-primary rounded-full"></div>
        </div>
      )}
      
      {/* Instructions */}
      {isLoaded && (
        <div 
          className={`absolute z-20 transition-opacity duration-500 ${isErasing ? 'opacity-0' : 'opacity-100'}`}
          style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="px-4 py-2 rounded-full bg-black/60 text-white text-sm backdrop-blur-sm">
            {isMobileOrTablet ? 'Touch and paint to reveal' : 'Click and paint to reveal'}
          </div>
        </div>
      )}
    </div>
  );
};

export default WipeableImage;
