
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: 'low' | 'medium' | 'high';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  chromatic?: boolean;
}

export const GlitchText = ({ 
  text, 
  className, 
  glitchIntensity = 'medium',
  tag: Component = 'h1',
  chromatic = false
}: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [textOffset, setTextOffset] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      
      // Random position offset during glitch
      setTextOffset({
        x: (Math.random() * 4) - 2,
        y: (Math.random() * 4) - 2
      });
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setIsGlitching(false);
        setTextOffset({ x: 0, y: 0 });
        
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
      style={{
        transform: isGlitching ? `translate(${textOffset.x}px, ${textOffset.y}px)` : 'none'
      }}
    >
      {chromatic && isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-cyber-pink opacity-70" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', transform: 'translate(-2px, 1px)' }}>
            {text}
          </span>
          <span className="absolute top-0 left-0 text-cyber-blue opacity-70" style={{ clipPath: 'polygon(0 45%, 100% 45%, 100% 100%, 0 100%)', transform: 'translate(2px, -1px)' }}>
            {text}
          </span>
        </>
      )}
      {text}
    </Component>
  );
};
