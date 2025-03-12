
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ProjectRidEase: React.FC = () => {
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
                RidEase: A Carpooling Experience
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full">
                  APP DESIGN
                </span>
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full">
                  UX RESEARCH
                </span>
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full">
                  UI DESIGN
                </span>
              </div>
              
              <p className="text-lg text-white/90 max-w-2xl">
                A comprehensive UX case study for designing a carpooling application with a focus on safety, convenience, and user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Screenshots */}
        <section className="py-12 bg-indigo-50">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/105fb5cc-751e-4071-ab86-132e8a99bac0.png" 
                alt="RidEase App Mockups" 
                className="w-full max-w-4xl rounded-lg"
              />
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
                  Design a carpooling app that addresses safety concerns and creates a seamless experience for both drivers and passengers, while promoting sustainable transportation.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">My Role</h3>
                <p className="text-muted-foreground">
                  Lead UX Designer responsible for research, user interviews, wireframing, prototyping, and final UI design.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">TIMELINE</h4>
                <p className="font-medium">8 Weeks</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">TOOLS</h4>
                <p className="font-medium">Figma, Maze, Miro</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">DELIVERABLES</h4>
                <p className="font-medium">Research, Wireframes, Prototype, UI Design</p>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Problem & Opportunity */}
        <section className="py-16 md:py-20 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">1. Problem & Opportunity</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-medium mb-4">Problems</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The digital age connects us yet causes social isolation</li>
                  <li>Increasing car ownership contributes to environmental damage</li>
                  <li>Traffic congestion worsens in urban areas</li>
                  <li>Existing carpooling options lack safety features</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Opportunities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create a platform that builds community through shared rides</li>
                  <li>Reduce carbon footprint by encouraging ride sharing</li>
                  <li>Decrease traffic through carpooling incentives</li>
                  <li>Design a user-centered solution with enhanced safety features</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Overview Blue Section */}
        <section className="py-16 bg-indigo-50">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-medium mb-4">Research Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Understand user pain points with current carpooling solutions</li>
                  <li>Identify key safety concerns for both drivers and passengers</li>
                  <li>Determine what motivates people to carpool</li>
                  <li>Discover opportunities for innovation in the market</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Research Methods</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>User interviews with current carpoolers</li>
                  <li>Competitive analysis of existing solutions</li>
                  <li>Survey of potential users</li>
                  <li>Market research on transportation trends</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Process/Discovery */}
        <section className="py-16 md:py-20 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">2. Process/Discovery</h2>
            
            <div className="mb-12">
              <div className="bg-white/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-medium mb-4">User Journey Map</h3>
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80" 
                  alt="User Journey Map" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <p className="text-lg mb-8">
                I mapped the entire user journey to identify pain points and opportunities for both drivers and passengers, 
                from discovering the app to completing a carpooling trip.
              </p>
            </div>
          </div>
        </section>

        {/* 3. User Research */}
        <section className="py-16 md:py-20 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">3. User Research</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-medium mb-6">User Journey Map</h3>
              <div className="bg-white/10 p-4 rounded-lg mb-8">
                <img 
                  src="/lovable-uploads/105fb5cc-751e-4071-ab86-132e8a99bac0.png" 
                  alt="User Research Journey Map" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-lg font-medium mb-3">Key Findings - P1</h4>
                  <p>Users are primarily concerned with safety when considering carpooling with strangers.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Key Findings - P2</h4>
                  <p>Cost savings is the main motivator for considering carpooling options.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Key Findings - P3</h4>
                  <p>Users want transparency in driver/passenger ratings and verification.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Key Findings - P4</h4>
                  <p>Flexibility in pickup and dropoff locations is important to users.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Design */}
        <section className="py-16 md:py-20 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">4. Design</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-medium mb-6">Sketches & Low-fidelity Wireframes</h3>
              <div className="bg-white/10 p-4 rounded-lg mb-8">
                <img 
                  src="/lovable-uploads/105fb5cc-751e-4071-ab86-132e8a99bac0.png" 
                  alt="Sketches and Wireframes" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <p className="text-lg mb-8">
                I started with sketches to explore different navigation patterns and core features before moving 
                to low-fidelity wireframes to test the basic user flow.
              </p>
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
                  <li>Created a user-centered carpooling app design that prioritizes safety and ease of use</li>
                  <li>Developed a streamlined booking process that reduces friction and increases conversion</li>
                  <li>Designed enhanced safety features that address key user concerns</li>
                  <li>Implemented profile verification that builds trust between drivers and passengers</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Learnings</h3>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li>Safety is paramount in shared transportation and should be addressed at every step</li>
                  <li>Different user groups (drivers vs. passengers) have distinct needs that must be balanced</li>
                  <li>User testing is critical for validating assumptions and uncovering unexpected pain points</li>
                  <li>Iteration based on user feedback leads to significantly improved designs</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
              <h3 className="text-xl font-medium mb-4">Impact & Metrics</h3>
              <p className="text-muted-foreground mb-6">
                The redesigned app showed significant improvements in user testing:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2 text-primary">94%</div>
                  <p className="text-muted-foreground">Task Completion Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2 text-primary">48%</div>
                  <p className="text-muted-foreground">Faster Booking Process</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2 text-primary">92%</div>
                  <p className="text-muted-foreground">User Satisfaction</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Next Steps</h3>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                <li>Develop a functional prototype for further testing</li>
                <li>Conduct additional user research with specific demographic groups</li>
                <li>Explore additional safety features like emergency contacts and route sharing</li>
                <li>Create accessibility guidelines to ensure the app is usable by everyone</li>
              </ul>
            </div>
          </div>
        </section>

        {/* More Projects */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">More Projects</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Explore more of my UX design work and see how I approach different design challenges.
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

export default ProjectRidEase;
