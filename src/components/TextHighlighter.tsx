
import React, { useEffect, useRef } from 'react';

interface TextHighlighterProps {
  children: React.ReactNode;
  highlightColor?: string;
  delay?: number;
}

const TextHighlighter: React.FC<TextHighlighterProps> = ({ 
  children, 
  highlightColor = '#FEF7CD', 
  delay = 0 
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && textRef.current) {
            textRef.current.classList.add('highlight-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <span 
      ref={textRef} 
      className="highlighted-text relative inline"
      style={{ 
        '--highlight-color': highlightColor,
        '--highlight-delay': `${delay}s`
      } as React.CSSProperties}
    >
      {children}
    </span>
  );
};

export default TextHighlighter;
