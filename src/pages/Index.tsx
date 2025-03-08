
import React, { useEffect, useRef, useState } from 'react';
import WipeableImage from '../components/WipeableImage';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);
  const [cursorHover, setCursorHover] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const hoveredElementRef = useRef<Element | null>(null);
  
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
  
  // Hide default cursor on desktop
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      document.body.style.cursor = 'none';
      
      // Reset cursor when component unmounts
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, []);
  
  // Only render custom cursor on larger screens
  const shouldRenderCursor = typeof window !== 'undefined' && window.innerWidth >= 1024;
  
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
        />
      )}
      
      <Navigation />
      
      <main>
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative">
          <WipeableImage
            topImage="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2000&q=80"
            className="w-full h-screen absolute inset-0"
            bottomContent={
              <div className="flex flex-col items-center justify-center text-center p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider rounded-full bg-secondary mb-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  DESIGNER & DEVELOPER
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-scale-in" style={{ animationDelay: '0.7s' }}>
                  Creating Digital Experiences
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                  I design and build digital products that help businesses grow and create meaningful connections with their users.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '1.1s' }}>
                  <a href="#projects" className="btn-primary">
                    View My Work
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium border border-input hover:bg-secondary transition-colors">
                    Contact Me
                  </a>
                </div>
              </div>
            }
          />
        </section>
        
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
