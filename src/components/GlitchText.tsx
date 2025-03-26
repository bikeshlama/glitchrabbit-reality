
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: 'low' | 'medium' | 'high';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const GlitchText = ({ 
  text, 
  className, 
  glitchIntensity = 'medium',
  tag: Component = 'h1' 
}: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setIsGlitching(false);
        
        // Set random interval for next glitch
        const nextGlitchDelay = getRandomDelay();
        timeoutRef.current = setTimeout(triggerGlitch, nextGlitchDelay);
      }, 200); // Glitch duration
    };
    
    const getRandomDelay = () => {
      // Different delays based on intensity
      const delays = {
        low: [3000, 8000],
        medium: [1500, 4000],
        high: [800, 2000]
      };
      
      const [min, max] = delays[glitchIntensity];
      return Math.random() * (max - min) + min;
    };
    
    // Initial timeout
    const initialDelay = getRandomDelay();
    timeoutRef.current = setTimeout(triggerGlitch, initialDelay);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [glitchIntensity]);

  return (
    <Component 
      className={cn(
        "relative inline-block", 
        isGlitching && "animate-glitch",
        className
      )}
      data-text={text}
    >
      {text}
    </Component>
  );
};
