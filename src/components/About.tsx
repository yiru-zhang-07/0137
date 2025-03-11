import React, { useEffect, useRef } from 'react';
const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Array<HTMLElement | null>>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up', 'opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });
    return () => {
      itemsRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);
  return <section id="about" className="section" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="opacity-0 transform translate-y-8" ref={el => itemsRef.current[0] = el}>
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider rounded-full bg-secondary mb-4">
            ABOUT ME
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Designing digital experiences that matter</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="opacity-0 transform translate-y-8" ref={el => itemsRef.current[1] = el}>
            <p className="text-lg md:text-xl leading-relaxed mb-6">I transform pixels into purpose, bridging physical and digital worlds through design. </p>
            <p className="text-base text-muted-foreground leading-relaxed">With roots in landscape architecture and urban design, I create digital experiences that don't just look beautiful—they connect with users on a deeper level, leaving lasting impressions that truly matter.</p>
          </div>
          
          <div className="opacity-0 transform translate-y-8" ref={el => itemsRef.current[2] = el}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">2+</h3>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">50+</h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">3+</h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">7+</h3>
                <p className="text-sm text-muted-foreground">Awards Received</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 opacity-0 transform translate-y-8" ref={el => itemsRef.current[3] = el}>
          <h3 className="text-xl font-semibold mb-6">My Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-secondary/50 p-4 rounded-lg">
              <h4 className="font-medium mb-1">UI/UX Design</h4>
              <p className="text-sm text-muted-foreground">Creating intuitive interfaces with a focus on user experience</p>
            </div>
            <div className="bg-secondary/50 p-4 rounded-lg">
              <h4 className="font-medium mb-1">Front-end Development</h4>
              <p className="text-sm text-muted-foreground">Building responsive and accessible web applications</p>
            </div>
            <div className="bg-secondary/50 p-4 rounded-lg">
              <h4 className="font-medium mb-1">Interactive Experiences</h4>
              <p className="text-sm text-muted-foreground">Crafting engaging and memorable digital interactions</p>
            </div>
            <div className="bg-secondary/50 p-4 rounded-lg">
              <h4 className="font-medium mb-1">Creative Direction</h4>
              <p className="text-sm text-muted-foreground">Guiding the overall vision and execution of projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;