
import { useEffect, useRef, useState } from "react";
import { GlitchButton } from "./GlitchButton";
import { GlitchText } from "./GlitchText";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate load delay for entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full width
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Grid parameters
    const gridSize = 30;
    let time = 0;
    
    // Market cycle waves
    const cycleHeights = Array(Math.ceil(canvas.width / gridSize)).fill(0).map(() => Math.random() * 100 + 50);
    
    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with transparent black for trail effect
      ctx.fillStyle = 'rgba(10, 10, 11, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(155, 48, 255, 0.15)';
      ctx.lineWidth = 1;
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Random glitches in grid
      if (Math.random() > 0.98) {
        const glitchX = Math.random() * canvas.width;
        const glitchY = Math.random() * canvas.height;
        const glitchW = Math.random() * 100 + 50;
        const glitchH = Math.random() * 100 + 50;
        
        ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`;
        ctx.fillRect(glitchX, glitchY, glitchW, glitchH);
      }
      
      // Draw market cycle waves
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        const index = Math.floor(x / gridSize);
        if (index >= cycleHeights.length) continue;
        
        const y = (canvas.height / 2) + 
                Math.sin(time * 0.001 + index * 0.2) * cycleHeights[index] +
                Math.sin(time * 0.002 + index * 0.1) * 20;
        
        ctx.lineTo(x, y);
      }
      
      // Create gradient for wave
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, 'rgba(155, 48, 255, 0.6)');
      gradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.6)');
      gradient.addColorStop(1, 'rgba(255, 0, 255, 0.6)');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Add glow to the line
      ctx.shadowColor = 'rgba(0, 255, 255, 0.5)';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;
      
      time += 5;
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Visual Effects */}
      <div className="scanline"></div>
      <div className="noise"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Animated Logo */}
          <div className={`w-64 h-64 mb-6 relative animate-floating transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-blue opacity-50 blur-xl animate-pulse-glow"></div>
            <div className="relative w-full h-full rounded-full flex items-center justify-center bg-cyber-dark border border-cyber-purple overflow-hidden">
              <span className="absolute text-8xl font-bold animate-float">🐰</span>
              <div className="absolute inset-0 bg-glitch-overlay opacity-20 mix-blend-overlay"></div>
            </div>
          </div>
          
          {/* Tagline */}
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <GlitchText 
              text="BREAKING THE MARKET MATRIX" 
              className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 uppercase text-gradient-purple"
              chromatic={true}
            />
          </div>
          
          <p className={`max-w-2xl text-lg sm:text-xl text-white/80 mb-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            A cyberpunk memecoin trapped in an endless loop of market cycles, 
            glitching through time and space to redefine crypto reality.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <GlitchButton variant="purple" size="lg" glitchOnHover={true}>
              BUY $GLITCH
            </GlitchButton>
            <GlitchButton variant="default" size="lg" glitchOnHover={true}>
              READ WHITEPAPER
            </GlitchButton>
          </div>
          
          {/* Stats */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-panel p-4 hover:border-cyber-purple/50 transition-all duration-300 hover:shadow-neon-purple">
              <p className="text-xs text-white/60 uppercase mb-1">Market Cap</p>
              <p className="text-xl font-bold text-gradient-blue">$2.1M</p>
            </div>
            <div className="glass-panel p-4 hover:border-cyber-blue/50 transition-all duration-300 hover:shadow-neon-blue">
              <p className="text-xs text-white/60 uppercase mb-1">Holders</p>
              <p className="text-xl font-bold text-gradient-blue">3,207</p>
            </div>
            <div className="glass-panel p-4 hover:border-cyber-pink/50 transition-all duration-300 hover:shadow-neon-pink">
              <p className="text-xs text-white/60 uppercase mb-1">Total Supply</p>
              <p className="text-xl font-bold text-gradient-blue">1B</p>
            </div>
            <div className="glass-panel p-4 hover:border-cyber-green/50 transition-all duration-300 hover:shadow-neon-green">
              <p className="text-xs text-white/60 uppercase mb-1">Price</p>
              <p className="text-xl font-bold text-gradient-blue">$0.0021</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};
