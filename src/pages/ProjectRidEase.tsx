
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
            
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" 
                alt="RidEase App Preview" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Research</h2>
            
            <div className="mb-12">
              <h3 className="text-lg font-medium mb-4">Research Goals</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Understand the pain points of current carpooling solutions</li>
                <li>Identify safety concerns for both drivers and passengers</li>
                <li>Explore user behaviors and motivations for carpooling</li>
                <li>Examine competitive landscape and identify opportunities</li>
              </ul>
            </div>
            
            <div className="mb-12">
              <h3 className="text-lg font-medium mb-4">User Interviews</h3>
              <p className="text-muted-foreground mb-6">
                I conducted 12 interviews with potential users across different demographics to understand their concerns, preferences, and expectations from a carpooling service.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-medium mb-3">Key Findings - Passengers</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Safety is the primary concern</li>
                    <li>Reliability and punctuality are important</li>
                    <li>Price transparency is expected</li>
                    <li>Profile verification increases trust</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-medium mb-3">Key Findings - Drivers</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Seamless payment processing is crucial</li>
                    <li>Route flexibility options are desired</li>
                    <li>Passenger verification is important</li>
                    <li>Clear pickup/dropoff instructions needed</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Competitive Analysis</h3>
              <p className="text-muted-foreground mb-6">
                I analyzed existing carpooling and ridesharing apps to identify best practices and opportunities for differentiation.
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white rounded-lg">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Feature</th>
                      <th className="text-left p-4">Uber</th>
                      <th className="text-left p-4">Lyft</th>
                      <th className="text-left p-4">BlaBlaCar</th>
                      <th className="text-left p-4">RidEase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Real-time tracking</td>
                      <td className="p-4">✅</td>
                      <td className="p-4">✅</td>
                      <td className="p-4">❌</td>
                      <td className="p-4">✅</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Profile verification</td>
                      <td className="p-4">Limited</td>
                      <td className="p-4">Limited</td>
                      <td className="p-4">✅</td>
                      <td className="p-4">Enhanced</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Safety features</td>
                      <td className="p-4">Medium</td>
                      <td className="p-4">Medium</td>
                      <td className="p-4">Basic</td>
                      <td className="p-4">Advanced</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Long-distance</td>
                      <td className="p-4">❌</td>
                      <td className="p-4">❌</td>
                      <td className="p-4">✅</td>
                      <td className="p-4">✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* User Personas */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">User Personas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-primary/10 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl mr-4">
                      👩🏻
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Sarah Chen</h3>
                      <p className="text-muted-foreground">Graduate Student, 26</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Goals</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Find affordable rides to campus</li>
                      <li>Reduce carbon footprint</li>
                      <li>Meet new people in her community</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Frustrations</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Unreliable public transportation</li>
                      <li>Safety concerns when riding with strangers</li>
                      <li>Unpredictable pricing of rideshare apps</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-primary/10 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl mr-4">
                      👨🏽
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Michael Rodriguez</h3>
                      <p className="text-muted-foreground">IT Professional, 34</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Goals</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Share commuting costs</li>
                      <li>Utilize HOV lanes to save time</li>
                      <li>Reduce wear on his personal vehicle</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Frustrations</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Difficulty finding reliable passengers</li>
                      <li>Coordinating pickup/dropoff locations</li>
                      <li>Lack of verification for riders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Design Process</h2>
            
            <div className="space-y-16">
              <div>
                <h3 className="text-xl font-medium mb-6">1. Information Architecture</h3>
                <p className="text-muted-foreground mb-6">
                  Based on user research and competitive analysis, I developed the information architecture for RidEase, organizing the app's features in a user-centered way.
                </p>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=1200&q=80" 
                    alt="Information Architecture Diagram" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-6">2. Wireframes</h3>
                <p className="text-muted-foreground mb-6">
                  I created low-fidelity wireframes to establish the basic structure and layout of key screens.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=500&q=80" 
                      alt="Wireframe - Home Screen" 
                      className="w-full h-auto rounded-lg mb-2"
                    />
                    <p className="text-sm text-center text-muted-foreground">Home Screen</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=500&q=80" 
                      alt="Wireframe - Ride Booking" 
                      className="w-full h-auto rounded-lg mb-2"
                    />
                    <p className="text-sm text-center text-muted-foreground">Ride Booking</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=500&q=80" 
                      alt="Wireframe - Driver Profile" 
                      className="w-full h-auto rounded-lg mb-2"
                    />
                    <p className="text-sm text-center text-muted-foreground">Driver Profile</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-6">3. User Testing</h3>
                <p className="text-muted-foreground mb-6">
                  I conducted usability testing with 8 participants to validate design decisions and identify areas for improvement.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h4 className="font-medium mb-4">Key Insights</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Users wanted more prominent safety features</li>
                    <li>The booking process needed simplification</li>
                    <li>Profile verification badges were highly valued</li>
                    <li>Real-time tracking needed to be more intuitive</li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-3">Success Metrics</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Task Completion Rate</span>
                          <span className="text-sm font-medium">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Time on Task</span>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">User Satisfaction</span>
                          <span className="text-sm font-medium">88%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-3">Iterations Made</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Redesigned the booking flow from 5 to 3 steps</li>
                      <li>Added prominent safety features in the main navigation</li>
                      <li>Enhanced driver/passenger verification visual cues</li>
                      <li>Improved map interaction for easier pickup/dropoff selection</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-6">4. Final Design</h3>
                <p className="text-muted-foreground mb-6">
                  After several iterations based on user feedback, I created the final high-fidelity designs with a focus on safety, usability, and visual appeal.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80" 
                    alt="Final Design - Home Screen" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80" 
                    alt="Final Design - Ride Details" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80" 
                    alt="Final Design - Driver Profile" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80" 
                    alt="Final Design - Safety Features" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
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
            
            <Link to="/" className="btn-primary">
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
