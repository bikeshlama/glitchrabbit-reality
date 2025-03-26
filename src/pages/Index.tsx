
import { useEffect, useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tokenomics } from "@/components/Tokenomics";
import { Roadmap } from "@/components/Roadmap";
import { Community } from "@/components/Community";
import { HowToBuy } from "@/components/HowToBuy";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading for entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Random glitch effect on page elements
  useEffect(() => {
    if (!isLoaded) return;
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        const sections = document.querySelectorAll('section');
        const randomSection = sections[Math.floor(Math.random() * sections.length)];
        
        if (randomSection) {
          randomSection.classList.add('animate-cybr-glitch');
          setTimeout(() => {
            randomSection.classList.remove('animate-cybr-glitch');
          }, 500);
        }
      }
    }, 5000);
    
    // Additional random glitch effect for logo images
    const logoGlitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        const logoImages = document.querySelectorAll('img[alt="GlitchRabbit Logo"], img[alt="GlitchRabbit"]');
        const randomLogo = logoImages[Math.floor(Math.random() * logoImages.length)];
        
        if (randomLogo) {
          randomLogo.classList.add('animate-micro-glitch');
          setTimeout(() => {
            randomLogo.classList.remove('animate-micro-glitch');
          }, 500);
        }
      }
    }, 3000);
    
    return () => {
      clearInterval(glitchInterval);
      clearInterval(logoGlitchInterval);
    };
  }, [isLoaded]);

  return (
    <div className="min-h-screen relative">
      <div className={`fixed inset-0 bg-cyber-black z-50 transition-opacity duration-1000 pointer-events-none ${isLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
      
      <NavBar />
      
      <main className="relative">
        <Hero />
        <About />
        <Tokenomics />
        <Roadmap />
        <Community />
        <HowToBuy />
      </main>
      
      <Footer />
      
      {/* Global scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-30 scanline"></div>
      
      {/* Occasional full-screen glitch overlay */}
      <div id="glitch-overlay" className="fixed inset-0 pointer-events-none z-40 opacity-0 bg-glitch-overlay mix-blend-overlay"></div>
    </div>
  );
};

export default Index;
