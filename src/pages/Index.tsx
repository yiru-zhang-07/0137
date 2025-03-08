
import React, { useEffect, useRef, useState } from 'react';
import WipeableImage from '../components/WipeableImage';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);
  const [cursorHover, setCursorHover] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const hoveredElementRef = useRef<Element | null>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  
  // Handle cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Check if the cursor is hovering over a clickable element
      const element = document.elementFromPoint(e.clientX, e.clientY);
      
      // Check if the element or its parents are clickable
      const isClickable = element && (
        element.tagName === 'A' || 
        element.tagName === 'BUTTON' ||
        element.closest('a') || 
        element.closest('button') ||
        element.getAttribute('role') === 'button' ||
        element.classList.contains('cursor-hover')
      );
      
      if (isClickable && !cursorHover) {
        setCursorHover(true);
        hoveredElementRef.current = element;
      } else if (!isClickable && cursorHover) {
        setCursorHover(false);
        hoveredElementRef.current = null;
      }
      
      // Check if cursor is in hero section
      if (heroSectionRef.current) {
        const heroRect = heroSectionRef.current.getBoundingClientRect();
        setIsInHeroSection(
          e.clientY >= heroRect.top && 
          e.clientY <= heroRect.bottom
        );
      }
    };
    
    const handleMouseDown = () => setCursorActive(true);
    const handleMouseUp = () => setCursorActive(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorHover]);
  
  // Hide default cursor on desktop only in hero section
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      document.body.style.cursor = isInHeroSection ? 'none' : 'auto';
      
      // Reset cursor when component unmounts
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [isInHeroSection]);
  
  // Only render custom cursor on larger screens and when in hero section
  const shouldRenderCursor = typeof window !== 'undefined' && window.innerWidth >= 1024 && isInHeroSection;
  
  return (
    <>
      {shouldRenderCursor && (
        <div 
          ref={cursorRef}
          className={`custom-cursor ${cursorActive ? 'active' : ''} ${cursorHover ? 'hover' : ''}`}
          style={{ 
            left: `${cursorPosition.x}px`, 
            top: `${cursorPosition.y}px`,
          }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="paintbrush-icon"
          >
            <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"></path>
            <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"></path>
            <path d="M14.5 17.5 4.5 15"></path>
          </svg>
        </div>
      )}
      
      <Navigation />
      
      <main>
        <section id="hero" ref={heroSectionRef} className="snap-section min-h-screen flex items-center justify-center px-6 relative">
          <WipeableImage
            topImage="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2000&q=80"
            className="w-full h-screen absolute inset-0"
            containedMode={true}
            bottomContent={
              <div className="flex flex-col items-center justify-center text-center p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider rounded-full bg-secondary mb-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  DESIGNER & DEVELOPER
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-scale-in" style={{ animationDelay: '0.7s' }}>
                  👋 Hi, I'm Yiru!
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                  I design engaging and fun experiences
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '1.1s' }}>
                  <a href="#projects" className="btn-primary">
                    View My Work
                  </a>
                </div>
              </div>
            }
          />
        </section>
        
        <About />
        <Projects />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
