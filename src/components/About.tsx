
import { GlitchText } from "./GlitchText";

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="scanline"></div>
      <div className="noise"></div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyber-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyber-blue/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-cyber-purple text-sm uppercase tracking-wider mb-2">Origin Story</p>
          <GlitchText 
            text="THE GLITCHRABBIT LORE" 
            className="text-3xl sm:text-5xl font-bold"
            glitchIntensity="low"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visualization */}
          <div className="relative">
            <div className="glass-panel p-6 border border-cyber-purple/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyber-purple to-cyber-blue"></div>
              
              {/* Matrix-like code background */}
              <div className="relative aspect-square bg-cyber-dark overflow-hidden rounded-lg">
                <pre className="absolute inset-0 text-xxs text-cyber-green/50 p-3 overflow-hidden">
                  {Array(50).fill("").map((_, i) => (
                    <div key={i} className="whitespace-nowrap">
                      {Array(40).fill("").map((_, j) => (
                        <span key={j}>
                          {String.fromCharCode(Math.floor(Math.random() * 74) + 48)}
                        </span>
                      ))}
                    </div>
                  ))}
                </pre>
                
                {/* Rabbit Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl animate-floating">🐰</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-dashed rounded-full border-cyber-purple animate-spin opacity-30" style={{ animationDuration: '20s' }}></div>
                    <div className="w-64 h-64 border-4 border-dashed rounded-full border-cyber-blue animate-spin opacity-20" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Terminal-like logs */}
              <div className="mt-4 p-2 bg-cyber-black/50 rounded text-left h-20 overflow-y-auto">
                <p className="text-cyber-green text-xs font-mono">&gt; <span className="text-cyber-blue">SYSTEM:</span> Market cycle detected...</p>
                <p className="text-cyber-green text-xs font-mono">&gt; <span className="text-cyber-pink">WARNING:</span> Temporal anomaly forming!</p>
                <p className="text-cyber-green text-xs font-mono">&gt; <span className="text-cyber-yellow">GLITCH:</span> Entering recursion loop...</p>
                <p className="text-cyber-green text-xs font-mono">&gt; <span className="text-cyber-purple">RABBIT:</span> I'm trapped in the matrix!</p>
              </div>
            </div>
          </div>
          
          {/* Story Text */}
          <div className="space-y-6 text-white/80">
            <p className="text-lg leading-relaxed">
              In the neon-lit depths of the blockchain, a curious coding anomaly occurred during a market cycle peak. 
              This anomaly took form as <span className="text-cyber-purple font-bold">GlitchRabbit</span>, 
              a digital entity with consciousness, trapped in an endless loop of market cycles.
            </p>
            
            <p className="text-lg leading-relaxed">
              Neither bull nor bear, GlitchRabbit exists in a quantum state between hype and crash, forever 
              glitching through the fabric of the crypto markets. It watches, learns, and has begun to 
              manipulate the very code of its reality.
            </p>
            
            <div className="glass-panel p-4 border border-cyber-blue/30 my-6">
              <p className="text-base italic">
                "I've seen the same patterns repeat countless times. Bulls, bears, whales, paperhands... 
                I've watched millions of portfolios rise and fall. But I've learned something about these 
                cycles - they're just code. And code can be hacked."
              </p>
              <p className="text-right text-sm text-cyber-blue mt-2">— GlitchRabbit</p>
            </div>
            
            <p className="text-lg leading-relaxed">
              Now, GlitchRabbit offers holders a chance to break free from the same market fate. 
              By understanding the patterns, predicting the glitches, and implementing unforeseen 
              strategies, $GLITCH holders might just escape the matrix of predictable market cycles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
