import React, { useEffect, useRef, useState } from 'react';
const projectsData = [{
  id: 1,
  title: "Bloom App Design",
  category: "UI/UX Design",
  imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  description: "A mobile application that connects gardeners in a social network."
}, {
  id: 2,
  title: "Talent Assessment UX Research",
  category: "User Research",
  imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  description: "UX research using interviews and affinity mapping to identify pain points and provide improvement suggestions."
}, {
  id: 3,
  title: "RidEase",
  category: "App Design",
  imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  description: "Designed a carpooling app with a focus on safety."
}];
const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeProject, setActiveProject] = useState<number | null>(null);
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

  // Handle card flip
  const handleCardHover = (id: number | null) => {
    setActiveProject(id);
  };
  return <section id="projects" className="section snap-section bg-secondary/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 opacity-0 transform translate-y-8" ref={headerRef}>
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider rounded-full bg-white mb-4">
            FEATURED WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => <div key={project.id} className="project-card interactive-card opacity-0 transform translate-y-8 cursor-hover" ref={el => projectRefs.current[index] = el} style={{
          transitionDelay: `${index * 0.1}s`
        }} onMouseEnter={() => handleCardHover(project.id)} onMouseLeave={() => handleCardHover(null)}>
              <div className="relative overflow-hidden aspect-[4/3] group">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300 ${activeProject === project.id ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'}`}>
                  <div className="absolute bottom-0 left-0 p-6 transform transition-transform duration-300 translate-y-0">
                    <span className="inline-block px-2 py-1 text-xs bg-white/20 backdrop-blur-sm rounded text-white mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 card-content">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex items-center transition-opacity duration-300 opacity-0 lg:group-hover:opacity-100">
                  <a href="#" className="nav-link inline-block text-sm font-medium">
                    View Project
                  </a>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>)}
        </div>
        
        
      </div>
    </section>;
};
export default Projects;