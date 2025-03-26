import { GlitchText } from "./GlitchText";
import { useEffect, useRef, useState } from "react";

export const Tokenomics = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 300;
    
    // Tokenomics data
    const data = [
      { label: "Liquidity", value: 50, color: "#9B30FF" },
      { label: "Team", value: 10, color: "#FF00FF" },
      { label: "Marketing", value: 20, color: "#00FFFF" },
      { label: "Development", value: 15, color: "#00FF9F" },
      { label: "Community", value: 5, color: "#FFE202" }
    ];
    
    // Calculate total
    const total = data.reduce((acc, item) => acc + item.value, 0);
    
    // Draw animated pie chart
    let currentAngle = 0;
    let animationProgress = 0;
    
    const drawChart = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw center circle (hole)
      ctx.fillStyle = '#121318';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 70, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw segments
      currentAngle = -Math.PI / 2; // Start from top
      
      data.forEach(segment => {
        const segmentAngle = (segment.value / total) * Math.PI * 2 * animationProgress;
        
        // Draw segment
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          120,
          currentAngle,
          currentAngle + segmentAngle
        );
        ctx.closePath();
        
        // Fill with gradient
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          70,
          canvas.width / 2,
          canvas.height / 2,
          120
        );
        gradient.addColorStop(0, segment.color + '80');
        gradient.addColorStop(1, segment.color);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add glowing stroke
        ctx.strokeStyle = segment.color;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Add glow effect
        if (animationProgress >= 1) {
          ctx.shadowColor = segment.color;
          ctx.shadowBlur = 10;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
        
        currentAngle += segmentAngle;
      });
      
      // Increment animation progress only if section is visible
      if (isVisible && animationProgress < 1) {
        animationProgress += 0.02;
        requestAnimationFrame(drawChart);
      } else if (!isVisible) {
        animationProgress = 0;
      }
    };
    
    // Start animation when section becomes visible
    if (isVisible) {
      drawChart();
    }
    
    // Add glitch effect occasionally
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7 && isVisible) {
        canvas.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        setTimeout(() => {
          canvas.style.filter = 'none';
        }, 100);
      }
    }, 2000);
    
    return () => clearInterval(glitchInterval);
  }, [isVisible]);

  return (
    <section id="tokenomics" ref={sectionRef} className="py-24 relative overflow-hidden bg-cyber-dark">
      <div className="scanline"></div>
      <div className="noise"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className={`text-cyber-blue text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Token Economics</p>
          <GlitchText 
            text="TOKENOMICS" 
            className="text-3xl sm:text-5xl font-bold"
            glitchIntensity="low"
            chromatic={true}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Distribution Chart */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-panel p-6 border border-cyber-blue/30 max-w-md mx-auto hover:border-cyber-blue/60 transition-all duration-300">
              <div className="relative">
                <canvas ref={canvasRef} className="mx-auto mb-6"></canvas>
                
                {/* Center logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl animate-floating">
                  🐰
                </div>
              </div>
              
              {/* Legend */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-cyber-purple mr-2"></div>
                  <p className="text-sm text-white/80">Liquidity: 50%</p>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-cyber-pink mr-2"></div>
                  <p className="text-sm text-white/80">Team: 10%</p>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-cyber-blue mr-2"></div>
                  <p className="text-sm text-white/80">Marketing: 20%</p>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-cyber-green mr-2"></div>
                  <p className="text-sm text-white/80">Development: 15%</p>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-cyber-yellow mr-2"></div>
                  <p className="text-sm text-white/80">Community: 5%</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Token Info */}
          <div className={`order-1 lg:order-2 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-panel p-6 border border-cyber-blue/30 hover:border-cyber-purple/60 transition-all duration-300 hover:shadow-neon-purple/20">
              <h3 className="text-lg text-gradient-blue font-bold mb-4">Token Information</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Token Name:</span>
                  <span className="text-white font-medium">GlitchRabbit</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Token Symbol:</span>
                  <span className="text-white font-medium">$GLITCH</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Total Supply:</span>
                  <span className="text-white font-medium">1,000,000,000</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Blockchain:</span>
                  <span className="text-white font-medium">Ethereum (ERC-20)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Tax:</span>
                  <span className="text-white font-medium">
                    <span className="text-cyber-green">0%</span> Buy / <span className="text-cyber-green">0%</span> Sell
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Initial Liquidity:</span>
                  <span className="text-white font-medium">Locked for 6 Months</span>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-6 border border-cyber-blue/30 hover:border-cyber-green/60 transition-all duration-300 hover:shadow-neon-green/20">
              <h3 className="text-lg text-gradient-blue font-bold mb-4">Token Utility</h3>
              
              <ul className="space-y-3">
                <li className="flex">
                  <div className="text-cyber-purple mr-2">✧</div>
                  <span className="text-white/80">Access to exclusive GlitchRabbit NFT collections</span>
                </li>
                <li className="flex">
                  <div className="text-cyber-purple mr-2">✧</div>
                  <span className="text-white/80">Voting rights on future development initiatives</span>
                </li>
                <li className="flex">
                  <div className="text-cyber-purple mr-2">✧</div>
                  <span className="text-white/80">Entry to virtual reality Matrix-themed metaverse experiences</span>
                </li>
                <li className="flex">
                  <div className="text-cyber-purple mr-2">✧</div>
                  <span className="text-white/80">Staking rewards with increasing APY based on holding period</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
