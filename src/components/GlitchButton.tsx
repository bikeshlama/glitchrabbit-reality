
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, useState } from "react";

interface GlitchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'purple' | 'blue' | 'pink' | 'green';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  glitchOnHover?: boolean;
}

export const GlitchButton = forwardRef<HTMLButtonElement, GlitchButtonProps>(({
  className,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  glitchOnHover = true,
  children,
  ...props
}, ref) => {
  const [isHovering, setIsHovering] = useState(false);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });
  
  const variantStyles = {
    default: 'border-white border bg-transparent hover:bg-white hover:text-cyber-black',
    purple: 'bg-cyber-purple border-cyber-purple text-white hover:bg-cyber-purple/80 shadow-neon-purple',
    blue: 'bg-cyber-blue border-cyber-blue text-cyber-black hover:bg-cyber-blue/80 shadow-neon-blue',
    pink: 'bg-cyber-pink border-cyber-pink text-white hover:bg-cyber-pink/80 shadow-neon-pink',
    green: 'bg-cyber-green border-cyber-green text-cyber-black hover:bg-cyber-green/80 shadow-neon-green',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-8 py-3 text-lg',
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (glitchOnHover) {
      // Trigger random glitch animations on hover
      const glitchInterval = setInterval(() => {
        setGlitchOffset({
          x: (Math.random() * 4) - 2,
          y: (Math.random() * 4) - 2
        });
      }, 100);
      
      (window as any).glitchTimeout = setTimeout(() => {
        clearInterval(glitchInterval);
        setGlitchOffset({ x: 0, y: 0 });
      }, 500);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setGlitchOffset({ x: 0, y: 0 });
    if ((window as any).glitchTimeout) {
      clearTimeout((window as any).glitchTimeout);
    }
  };

  return (
    <button
      ref={ref}
      className={cn(
        "relative font-bold border uppercase tracking-wider transition-all duration-300",
        "after:absolute after:inset-0 after:z-[-1] after:translate-x-1 after:translate-y-1 after:border after:border-white/20 after:transition-transform",
        "hover:after:translate-x-0.5 hover:after:translate-y-0.5",
        sizeStyles[size],
        variantStyles[variant],
        fullWidth ? 'w-full' : '',
        isHovering && glitchOnHover && 'animate-pulse',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span 
        className="relative z-10"
        style={{
          transform: isHovering && glitchOnHover ? `translate(${glitchOffset.x}px, ${glitchOffset.y}px)` : 'none'
        }}
      >
        {isHovering && glitchOnHover && (
          <>
            <span className="absolute top-0 left-0 text-cyber-blue opacity-70" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', transform: 'translate(-1px, 0px)' }}>
              {children}
            </span>
            <span className="absolute top-0 left-0 text-cyber-pink opacity-70" style={{ clipPath: 'polygon(0 45%, 100% 45%, 100% 100%, 0 100%)', transform: 'translate(1px, 0px)' }}>
              {children}
            </span>
          </>
        )}
        {children}
      </span>
    </button>
  );
});

GlitchButton.displayName = 'GlitchButton';
