
import { GlitchButton } from "./GlitchButton";
import { GlitchText } from "./GlitchText";

export const HowToBuy = () => {
  const steps = [
    {
      title: "SET UP A WALLET",
      description: "Download MetaMask or Trust Wallet to your device and set up a new wallet or import your existing one.",
      icon: "💼",
      highlight: "MetaMask / Trust Wallet"
    },
    {
      title: "PURCHASE ETH",
      description: "Buy Ethereum directly through your wallet or transfer from an exchange to your wallet address.",
      icon: "💰",
      highlight: "ETH"
    },
    {
      title: "CONNECT TO DEX",
      description: "Visit Uniswap or another decentralized exchange and connect your wallet to the platform.",
      icon: "🔄",
      highlight: "Uniswap"
    },
    {
      title: "SWAP FOR $GLITCH",
      description: "Enter the $GLITCH contract address and swap your ETH for GlitchRabbit tokens.",
      icon: "🐰",
      highlight: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F" // Example address
    }
  ];

  return (
    <section id="buy" className="py-24 relative overflow-hidden">
      <div className="scanline"></div>
      <div className="noise"></div>
      
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyber-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-40 w-72 h-72 bg-cyber-blue/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-cyber-blue text-sm uppercase tracking-wider mb-2">Join The Revolution</p>
          <GlitchText 
            text="HOW TO BUY" 
            className="text-3xl sm:text-5xl font-bold"
            glitchIntensity="low"
          />
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Follow these simple steps to get your hands on $GLITCH tokens and become part of our community.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="glass-panel p-6 border border-cyber-blue/30 relative group">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center bg-cyber-blue text-cyber-black font-bold text-sm">
                {index + 1}
              </div>
              
              {/* Connected Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cyber-blue/50 z-20"></div>
              )}
              
              {/* Icon */}
              <div className="text-4xl mb-4">{step.icon}</div>
              
              {/* Content */}
              <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-white/70 mb-4">{step.description}</p>
              
              {/* Highlight */}
              <div className="bg-cyber-black/50 p-2 border border-cyber-blue/30 text-center text-sm">
                <span className="font-mono text-cyber-blue font-semibold">{step.highlight}</span>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-cyber-blue/0 group-hover:border-cyber-blue/50 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Contract Address */}
        <div className="glass-panel p-8 border border-cyber-blue/30 text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-xl font-bold mb-4 text-gradient-blue">Contract Address</h3>
          <div className="bg-cyber-black/50 p-4 flex items-center justify-between rounded-md overflow-hidden">
            <code className="font-mono text-white/80 truncate text-sm">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</code>
            <button 
              className="ml-4 p-2 hover:bg-cyber-blue/20 transition-colors rounded-md"
              aria-label="Copy to clipboard"
            >
              <svg className="w-5 h-5 text-cyber-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
              </svg>
            </button>
          </div>
          <p className="mt-4 text-white/50 text-sm">
            Always verify the contract address to avoid scams and fake tokens.
          </p>
        </div>
        
        {/* Available Exchanges */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8 text-white">Available On</h3>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="glass-panel p-4 border border-white/10 w-40 h-24 flex items-center justify-center hover:border-cyber-blue/50 transition-colors">
              <img 
                src="https://cryptologos.cc/logos/uniswap-uni-logo.png" 
                alt="Uniswap" 
                className="h-12"
                loading="lazy"
              />
            </div>
            <div className="glass-panel p-4 border border-white/10 w-40 h-24 flex items-center justify-center hover:border-cyber-blue/50 transition-colors">
              <img 
                src="https://cryptologos.cc/logos/1inch-1inch-logo.png" 
                alt="1inch" 
                className="h-12"
                loading="lazy"
              />
            </div>
            <div className="glass-panel p-4 border border-white/10 w-40 h-24 flex items-center justify-center hover:border-cyber-blue/50 transition-colors">
              <img 
                src="https://cryptologos.cc/logos/sushiswap-sushi-logo.png" 
                alt="SushiSwap" 
                className="h-12"
                loading="lazy"
              />
            </div>
            <div className="glass-panel p-4 border border-white/10 w-40 h-24 flex items-center justify-center hover:border-cyber-blue/50 transition-colors">
              <p className="text-gradient-blue font-bold text-xl">Coming Soon</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Ready to Break the Matrix?</h3>
          <GlitchButton variant="green" size="lg">BUY $GLITCH NOW</GlitchButton>
        </div>
      </div>
    </section>
  );
};
