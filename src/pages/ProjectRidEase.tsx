
import React, { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ProjectRidEase: React.FC = () => {
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section 
          className="w-full relative opacity-0 transform translate-y-8"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <Link to="/" className="text-sm text-muted-foreground mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">RidEase</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  A carpooling application designed with a focus on safety and user experience.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">MY ROLE</h3>
                    <p className="font-medium">UX/UI Designer</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">TIMELINE</h3>
                    <p className="font-medium">3 months (2022)</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">TEAM</h3>
                    <p className="font-medium">4 members</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">TOOLS</h3>
                    <p className="font-medium">Figma, Maze, Miro</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                  alt="RidEase App" 
                  className="w-full h-auto rounded-xl object-cover shadow-lg" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section 
          className="py-16 opacity-0 transform translate-y-8" 
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">Overview</h2>
            <p className="text-lg mb-6">
              RidEase is a carpooling application that connects drivers with empty seats to passengers heading in the same direction. The goal was to create a safer and more user-friendly carpooling experience compared to existing solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-medium mb-3">The Challenge</h3>
                <p className="text-muted-foreground">
                  Existing carpooling solutions often lack safety features and have complicated interfaces that discourage potential users.
                </p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-medium mb-3">The Solution</h3>
                <p className="text-muted-foreground">
                  Design an app that prioritizes safety through verification and creates an intuitive experience that appeals to both drivers and riders.
                </p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-medium mb-3">The Outcome</h3>
                <p className="text-muted-foreground">
                  A highly rated, easy-to-use app with enhanced safety features that has received positive feedback from user testing.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Research Section */}
        <section 
          className="py-16 bg-secondary/30 opacity-0 transform translate-y-8" 
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="text-xl font-medium mb-4">User Interviews</h3>
                <p className="text-muted-foreground mb-4">
                  We conducted 12 interviews with potential users to understand their concerns and requirements when it comes to carpooling.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Safety was the primary concern for 92% of interviewees</li>
                  <li>Cost-saving was mentioned by 78% as a key benefit</li>
                  <li>Environmental impact was important to 65% of participants</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Competitive Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  We analyzed 5 competing carpooling apps to identify strengths and weaknesses in the market.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Most apps lacked robust verification processes</li>
                  <li>Navigation was often complicated and unintuitive</li>
                  <li>User reviews and ratings were underutilized</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4">Key Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-medium mb-2">Safety First</h4>
                  <p className="text-sm text-muted-foreground">
                    Users want verification processes and safety features that make them feel secure.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <h4 className="font-medium mb-2">Simplicity Wins</h4>
                  <p className="text-sm text-muted-foreground">
                    A straightforward process from search to booking increases conversion.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium mb-2">Transparent Pricing</h4>
                  <p className="text-sm text-muted-foreground">
                    Users expect clear pricing with no hidden fees or surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Design Process Section */}
        <section 
          className="py-16 opacity-0 transform translate-y-8" 
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">Design Process</h2>
            <div className="flex flex-col space-y-12">
              <div>
                <h3 className="text-xl font-medium mb-4">1. Wireframing</h3>
                <p className="text-muted-foreground mb-6">
                  Created low-fidelity wireframes to establish the basic structure and flow of the app, focusing on the most crucial user journeys.
                </p>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80" 
                    alt="Wireframes" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">2. Visual Design</h3>
                <p className="text-muted-foreground mb-6">
                  Developed a clean, friendly visual design system with an emphasis on clarity and accessibility. The color scheme was chosen to evoke trust and safety.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80" 
                      alt="Design System" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?auto=format&fit=crop&w=800&q=80" 
                      alt="UI Components" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">3. Prototyping & Testing</h3>
                <p className="text-muted-foreground mb-6">
                  Created interactive prototypes and conducted usability testing with 8 participants to validate design decisions and identify areas for improvement.
                </p>
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h4 className="font-medium mb-3">Key Testing Insights:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Users appreciated the prominent safety features</li>
                    <li>The booking flow was completed successfully by 92% of testers</li>
                    <li>Profile verification process needed simplification</li>
                    <li>Users wanted more detailed driver information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final Design Section */}
        <section 
          className="py-16 bg-secondary/30 opacity-0 transform translate-y-8" 
          ref={(el) => (sectionRefs.current[4] = el)}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">Final Design</h2>
            <p className="text-lg mb-10">
              The final design prioritizes safety, simplicity, and a seamless user experience for both riders and drivers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80" 
                  alt="RidEase App Screens" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Key Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Verified Profiles</h4>
                      <p className="text-sm text-muted-foreground">
                        All users undergo a verification process including ID checks and rating systems.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Real-time Tracking</h4>
                      <p className="text-sm text-muted-foreground">
                        Live tracking allows riders and their trusted contacts to monitor the journey.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Transparent Reviews</h4>
                      <p className="text-sm text-muted-foreground">
                        Detailed review system that helps users make informed decisions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Seamless Payments</h4>
                      <p className="text-sm text-muted-foreground">
                        Secure in-app payment system with clear pricing and no hidden fees.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-6">User Flow</h3>
              <img 
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80" 
                alt="User Flow Diagram" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section 
          className="py-16 opacity-0 transform translate-y-8" 
          ref={(el) => (sectionRefs.current[5] = el)}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">Results & Learnings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="text-xl font-medium mb-4">Impact</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        <strong>95% satisfaction rate</strong> in post-launch user surveys
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        <strong>68% increase</strong> in user retention compared to previous version
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        <strong>4.8/5 stars</strong> average rating in app stores
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Key Learnings</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="text-lg font-bold mr-3">1.</div>
                    <p>
                      Safety features are not just nice-to-have but essential for user adoption in shared transportation services.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-lg font-bold mr-3">2.</div>
                    <p>
                      Simplifying complex processes (like verification) has a direct impact on conversion rates.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-lg font-bold mr-3">3.</div>
                    <p>
                      Early and continuous user testing helped catch issues before they became expensive problems.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-secondary/50 p-8 rounded-xl">
              <h3 className="text-xl font-medium mb-4">Next Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Enhanced Matching</h4>
                  <p className="text-sm text-muted-foreground">
                    Implement AI-based matching to pair riders and drivers based on preferences and behavior patterns.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Group Booking</h4>
                  <p className="text-sm text-muted-foreground">
                    Develop functionality for group travel to accommodate families and friends traveling together.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">International Expansion</h4>
                  <p className="text-sm text-muted-foreground">
                    Adapt the app for international markets with localized features and compliance requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Next Project CTA */}
        <section 
          className="py-16 bg-primary text-white opacity-0 transform translate-y-8" 
          ref={(el) => (sectionRefs.current[6] = el)}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in more projects?</h2>
            <p className="text-xl mb-8 text-white/80">
              Check out my other work or get in touch to discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/" className="bg-white text-primary px-6 py-3 rounded-md font-medium transition-all hover:bg-white/90">
                View All Projects
              </Link>
              <a href="#contact" className="bg-primary-foreground/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-md font-medium transition-all hover:bg-white/20">
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ProjectRidEase;
