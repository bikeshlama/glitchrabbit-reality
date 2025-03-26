
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface GlitchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'purple' | 'blue' | 'pink' | 'green';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const GlitchButton = forwardRef<HTMLButtonElement, GlitchButtonProps>(({
  className,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  children,
  ...props
}, ref) => {
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
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
});

GlitchButton.displayName = 'GlitchButton';
