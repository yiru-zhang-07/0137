
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from 'lucide-react';

const galleries = [
  {
    id: 1,
    title: "Volume 01",
    subtitle: "Explorations in Form",
    images: [
      {
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
        alt: "Coding environment",
        caption: "Digital workspaces"
      },
      {
        src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
        alt: "Tech workspace",
        caption: "Creative technology"
      },
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        alt: "Circuit board macro",
        caption: "Detailed engineering"
      },
      {
        src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
        alt: "Designer working",
        caption: "Design in progress"
      }
    ]
  },
  {
    id: 2,
    title: "Volume 02",
    subtitle: "Color Studies",
    images: [
      {
        src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
        alt: "Working on laptop",
        caption: "Modern workspaces"
      },
      {
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
        alt: "Programming",
        caption: "Digital crafting"
      },
      {
        src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
        alt: "Computer setup",
        caption: "Technical setup"
      },
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        alt: "Electronic components",
        caption: "Technology details"
      }
    ]
  },
  {
    id: 3,
    title: "Volume 03",
    subtitle: "Texture & Pattern",
    images: [
      {
        src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
        alt: "Designer at work",
        caption: "Creative process"
      },
      {
        src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
        alt: "Laptop workflow",
        caption: "Digital environment"
      },
      {
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
        alt: "Code on screen",
        caption: "Programming art"
      },
      {
        src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
        alt: "Monitor display",
        caption: "Tech aesthetics"
      }
    ]
  }
];

const Lookbook: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string; alt: string; caption: string} | null>(null);
  
  return (
    <>
      <Navigation />
      
      <main className="pt-20 pb-16">
        <section className="section">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider rounded-full bg-secondary mb-4">
                VISUAL DESIGN LOOKBOOK
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Ideas, Moments & Inspiration</h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                A curated collection of visual explorations, design experiments, and creative sparks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
              {galleries.map((gallery) => (
                <div key={gallery.id} className="bg-white rounded-lg shadow-md overflow-hidden interactive-card">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-bold">{gallery.title}</h2>
                    <p className="text-muted-foreground">{gallery.subtitle}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 p-2">
                    {gallery.images.map((image, index) => (
                      <div 
                        key={index} 
                        className="aspect-square overflow-hidden rounded cursor-hover"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Enlarged Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] p-1 sm:p-2 overflow-hidden">
          <div className="relative w-full h-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
            {selectedImage && (
              <div className="h-full flex flex-col">
                <div className="flex-1 overflow-hidden">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt} 
                    className="w-full h-full object-contain"
                  />
                </div>
                {selectedImage.caption && (
                  <div className="p-4 bg-white">
                    <p className="text-center text-muted-foreground">{selectedImage.caption}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Lookbook;
