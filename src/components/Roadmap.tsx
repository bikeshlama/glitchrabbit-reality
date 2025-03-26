
import { useEffect, useRef, useState } from "react";
import { GlitchText } from "./GlitchText";

export const Roadmap = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);
  
  const phases = [
    {
      title: "PHASE 1: INCEPTION",
      quarter: "Q3 2023",
      milestones: [
        "Token Smart Contract Development",
        "Website Launch & Social Media Setup",
        "Community Building Initiative",
        "Initial Marketing Campaign",
        "Token Launch on DEX"
      ]
    },
    {
      title: "PHASE 2: EXPANSION",
      quarter: "Q4 2023",
      milestones: [
        "CoinGecko & CoinMarketCap Listings",
        "Community Growth to 10,000 Members",
        "Partnership with Key Influencers",
        "First CEX Listing",
        "Begin NFT Collection Development"
      ]
    },
    {
      title: "PHASE 3: EVOLUTION",
      quarter: "Q1 2024",
      milestones: [
        "Staking Platform Launch",
        "NFT Collection Mint Event",
        "Major CEX Listings",
        "Cross-Chain Bridge Implementation",
        "Metaverse Experience Beta"
      ]
    },
    {
      title: "PHASE 4: ASCENSION",
      quarter: "Q2 2024",
      milestones: [
        "GlitchRabbit DAO Establishment",
        "Mobile App Development",
        "Ecosystem Expansion",
        "Tier 1 Exchange Listings",
        "Real-World Partnership Announcements"
      ]
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const phase = Number(entry.target.getAttribute('data-phase'));
            setActivePhase(phase);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    const phaseElements = timelineRef.current?.querySelectorAll('.phase-item');
    phaseElements?.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  // Glitch effect for timeline points
  useEffect(() => {
    const interval = setInterval(() => {
      const randomPoint = Math.floor(Math.random() * phases.length);
      const pointElement = document.getElementById(`timeline-point-${randomPoint}`);
      
      if (pointElement) {
        pointElement.classList.add('animate-glitch');
        setTimeout(() => {
          pointElement?.classList.remove('animate-glitch');
        }, 200);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [phases.length]);

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      <div className="scanline"></div>
      <div className="noise"></div>
      
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-cyber-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-cyber-green text-sm uppercase tracking-wider mb-2">Development Timeline</p>
          <GlitchText 
            text="ROADMAP" 
            className="text-3xl sm:text-5xl font-bold"
            glitchIntensity="low"
          />
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Our mission to break the market matrix follows a carefully crafted plan of development, 
            community building, and technological innovation.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-purple via-cyber-blue to-cyber-green"></div>
          
          {phases.map((phase, index) => (
            <div 
              key={index}
              data-phase={index}
              className={`phase-item relative z-10 mb-24 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              {/* Timeline Point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6">
                <div 
                  id={`timeline-point-${index}`}
                  className={`w-6 h-6 rounded-full border-2 ${activePhase >= index ? 'bg-cyber-purple border-cyber-purple' : 'bg-transparent border-white/30'} relative z-10`}
                >
                  <div className={`absolute inset-0 rounded-full ${activePhase >= index ? 'bg-cyber-purple animate-pulse-glow' : ''}`}></div>
                </div>
              </div>
              
              {/* Content - alternating sides */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                <div className={`glass-panel p-6 border ${activePhase >= index ? 'border-cyber-purple/50' : 'border-white/10'} transition-all duration-500`}>
                  <div className={`text-sm font-medium mb-2 ${activePhase >= index ? 'text-cyber-purple' : 'text-white/60'}`}>
                    {phase.quarter}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {phase.title}
                  </h3>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {phase.milestones.map((milestone, i) => (
                      <li key={i} className="text-white/70 flex items-center justify-end gap-2">
                        {index % 2 === 0 ? (
                          <>
                            <span>{milestone}</span>
                            <span className="text-cyber-green">✓</span>
                          </>
                        ) : (
                          <>
                            <span className="text-cyber-green">✓</span>
                            <span>{milestone}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty space for the other side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
        
        {/* Future Development */}
        <div className="text-center mt-12 glass-panel p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-gradient-blue">Future Development</h3>
          <p className="text-white/70 mb-6">
            The GlitchRabbit journey continues beyond our initial roadmap. Our vision includes expanding the 
            ecosystem, introducing innovative DeFi products, and creating a truly decentralized community-driven project.
          </p>
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-blue blur animate-pulse-glow opacity-50"></div>
            <p className="relative font-mono text-white border border-white px-4 py-2">BREAKING_THE_MATRIX_TOGETHER</p>
          </div>
        </div>
      </div>
    </section>
  );
};
