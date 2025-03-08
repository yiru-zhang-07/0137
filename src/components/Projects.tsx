
import React, { useEffect, useRef } from 'react';

const projectsData = [
  {
    id: 1,
    title: "E-commerce Redesign",
    category: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    description: "Complete redesign of an e-commerce platform focusing on conversion rate optimization and user experience."
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "Web Application",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    description: "Interactive dashboard for financial data visualization with real-time updates and customizable widgets."
  },
  {
    id: 3,
    title: "Mobile App Design",
    category: "UI Design",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    description: "Designed a health and fitness tracking app with a focus on accessibility and user engagement."
  }
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    projectRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });
    
    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      
      projectRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section id="projects" className="section bg-secondary/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-14 opacity-0 transform translate-y-8"
          ref={headerRef}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider rounded-full bg-white mb-4">
            FEATURED WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="project-card opacity-0 transform translate-y-8"
              ref={el => projectRefs.current[index] = el}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-2 py-1 text-xs bg-white/20 backdrop-blur-sm rounded text-white mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">{project.description}</p>
                <a href="#" className="nav-link mt-4 inline-block text-sm font-medium">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
