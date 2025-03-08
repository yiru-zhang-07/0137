
import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-6 md:px-10 ${
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="text-xl font-semibold tracking-tight">
          Portfolio
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden flex flex-col gap-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#about" className="nav-link text-sm font-medium">About</a>
          <a href="#projects" className="nav-link text-sm font-medium">Projects</a>
          <a href="#contact" className="nav-link text-sm font-medium">Contact</a>
          <a href="#contact" className="btn-primary text-sm">Get In Touch</a>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4">
          <a href="#about" className="py-2 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" className="py-2 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" className="py-2 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a href="#contact" className="btn-primary text-sm w-full text-center" onClick={() => setIsMenuOpen(false)}>Get In Touch</a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
