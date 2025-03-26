
import { useEffect, useState } from "react";
import { GlitchButton } from "./GlitchButton";
import { cn } from "@/lib/utils";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-cyber-black/80 backdrop-blur-lg" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-xl font-bold text-gradient-purple tracking-wide">$GLITCH</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm text-white hover:text-cyber-purple transition-colors">ABOUT</a>
            <a href="#tokenomics" className="text-sm text-white hover:text-cyber-purple transition-colors">TOKENOMICS</a>
            <a href="#roadmap" className="text-sm text-white hover:text-cyber-purple transition-colors">ROADMAP</a>
            <a href="#community" className="text-sm text-white hover:text-cyber-purple transition-colors">COMMUNITY</a>
            <a href="#buy" className="text-sm text-white hover:text-cyber-purple transition-colors">HOW TO BUY</a>
            <GlitchButton variant="purple" size="sm">CONNECT WALLET</GlitchButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4 bg-cyber-black/95 backdrop-blur-lg p-4 rounded">
            <a 
              href="#about" 
              className="text-white hover:text-cyber-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </a>
            <a 
              href="#tokenomics" 
              className="text-white hover:text-cyber-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              TOKENOMICS
            </a>
            <a 
              href="#roadmap" 
              className="text-white hover:text-cyber-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              ROADMAP
            </a>
            <a 
              href="#community" 
              className="text-white hover:text-cyber-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              COMMUNITY
            </a>
            <a 
              href="#buy" 
              className="text-white hover:text-cyber-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOW TO BUY
            </a>
            <GlitchButton variant="purple" size="sm" fullWidth>CONNECT WALLET</GlitchButton>
          </div>
        )}
      </div>
    </header>
  );
};
