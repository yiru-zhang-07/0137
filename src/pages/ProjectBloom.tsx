
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ProjectBloom: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />

      <main className="bg-paper pt-24 pb-16">
        {/* Hero Section */}
        <section className="w-full bg-primary py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="flex flex-col items-start">
              <Link 
                to="/" 
                className="mb-8 inline-flex items-center text-white/80 hover:text-white"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mr-2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Bloom App Design
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full">
                  INTERACTION DESIGN
                </span>
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full">
                  UI DESIGN
                </span>
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full">
                  USER RESEARCH
                </span>
              </div>
              
              <p className="text-lg text-white/90 max-w-2xl">
                A mobile application that connects gardeners in a social network to share and grow together.
              </p>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="text-lg font-medium mb-3">The Challenge</h3>
                <p className="text-muted-foreground">
                  Design a mobile application that creates a community for gardeners to connect, share knowledge, and trade plants and produce while promoting sustainable gardening practices.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">My Role</h3>
                <p className="text-muted-foreground">
                  Lead UX/UI Designer responsible for research, interaction design, visual design, and usability testing.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">TIMELINE</h4>
                <p className="font-medium">12 Weeks</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">TOOLS</h4>
                <p className="font-medium">Figma, Miro, Lookback</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">DELIVERABLES</h4>
                <p className="font-medium">Research, Wireframes, Prototype, Design System</p>
              </div>
            </div>
            
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80" 
                alt="Bloom App Preview" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* 1. Problem & Opportunity */}
        <section className="py-16 md:py-20 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">1. Problem & Opportunity</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-medium mb-4">Problems</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Gardening knowledge is often fragmented across multiple sources</li>
                  <li>New gardeners struggle to find mentorship and guidance</li>
                  <li>Urban gardeners have limited space and resources</li>
                  <li>Excess produce often goes to waste</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Opportunities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create a centralized platform for gardening knowledge sharing</li>
                  <li>Build community through plant and produce trading</li>
                  <li>Promote sustainable gardening practices</li>
                  <li>Reduce food waste through local sharing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes & Learnings */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Outcomes & Learnings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="text-xl font-medium mb-4">Key Outcomes</h3>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li>Created an intuitive platform for gardeners to connect and share knowledge</li>
                  <li>Designed a plant identification feature using image recognition</li>
                  <li>Developed a local trade/share marketplace for plants and produce</li>
                  <li>Implemented gamification elements to encourage sustainable practices</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Learnings</h3>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li>Geographic location significantly impacts gardening needs and practices</li>
                  <li>Community features need careful moderation to maintain quality</li>
                  <li>Seasonal changes require flexible content strategies</li>
                  <li>Balancing simplicity for beginners with depth for experts is crucial</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
              <h3 className="text-xl font-medium mb-4">Impact & Metrics</h3>
              <p className="text-muted-foreground mb-6">
                The app design showed promising results in user testing:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2 text-green-600">96%</div>
                  <p className="text-muted-foreground">Task Completion Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2 text-green-600">87%</div>
                  <p className="text-muted-foreground">User Satisfaction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2 text-green-600">92%</div>
                  <p className="text-muted-foreground">Would Recommend</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Next Steps</h3>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                <li>Develop a functional prototype for beta testing</li>
                <li>Explore partnerships with local gardening organizations</li>
                <li>Add climate-specific gardening recommendations</li>
                <li>Integrate with weather APIs for garden care reminders</li>
              </ul>
            </div>
          </div>
        </section>

        {/* More Projects */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">More Projects</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Explore more of my design work and see how I approach different challenges.
            </p>
            
            <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary/90">
              Back to Portfolio
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectBloom;
