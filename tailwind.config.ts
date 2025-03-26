
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk theme colors
				cyber: {
					'black': '#0A0A0B',
					'dark': '#121318',
					'purple': '#9B30FF',
					'pink': '#FF00FF',
					'blue': '#00FFFF',
					'green': '#00FF9F',
					'yellow': '#FFE202',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1) blur(0px)'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2) blur(3px)'
					}
				},
				'glitch': {
					'0%': {
						clipPath: 'inset(40% 0 61% 0)',
						transform: 'translate(-2px, 2px)',
					},
					'20%': {
						clipPath: 'inset(92% 0 1% 0)',
						transform: 'translate(1px, 1px)',
					},
					'40%': {
						clipPath: 'inset(43% 0 1% 0)',
						transform: 'translate(0, -1px)',
					},
					'60%': {
						clipPath: 'inset(25% 0 58% 0)',
						transform: 'translate(-1px, -1px)',
					},
					'80%': {
						clipPath: 'inset(54% 0 7% 0)',
						transform: 'translate(2px, -2px)',
					},
					'100%': {
						clipPath: 'inset(58% 0 43% 0)',
						transform: 'translate(-2px, 2px)',
					},
				},
				'scanline': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'floating': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'cycle-background': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'text-reveal': {
					'0%': {
						width: '0%',
						opacity: '0'
					},
					'100%': {
						width: '100%',
						opacity: '1'
					}
				},
				// New keyframes
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'data-flow': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '100% 100%' }
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100%)' }
				},
				'hue-rotate': {
					'0%': { filter: 'hue-rotate(0deg)' },
					'100%': { filter: 'hue-rotate(360deg)' }
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'blink-caret': {
					'50%': { borderColor: 'transparent' }
				},
				'cybr-glitch': {
					'0%': { transform: 'none', opacity: '1' },
					'7%': { transform: 'skew(-0.5deg, -0.9deg)', opacity: '0.75' },
					'10%': { transform: 'none', opacity: '1' },
					'27%': { transform: 'none', opacity: '1' },
					'30%': { transform: 'skew(0.8deg, -0.1deg)', opacity: '0.75' },
					'35%': { transform: 'none', opacity: '1' },
					'52%': { transform: 'none', opacity: '1' },
					'55%': { transform: 'skew(-1deg, 0.2deg)', opacity: '0.75' },
					'50%': { transform: 'none', opacity: '1' },
					'72%': { transform: 'none', opacity: '1' },
					'75%': { transform: 'skew(0.4deg, 1deg)', opacity: '0.75' },
					'80%': { transform: 'none', opacity: '1' },
					'100%': { transform: 'none', opacity: '1' },
				},
				'scanner': {
					'0%, 100%': { 
						background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 255, 255, 0.2) 50%, transparent 100%)',
						transform: 'translateY(-100%)' 
					},
					'50%': { transform: 'translateY(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'glitch': 'glitch 500ms infinite',
				'scanline': 'scanline 6s linear infinite',
				'floating': 'floating 3s ease-in-out infinite',
				'cycle-background': 'cycle-background 10s ease infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'text-reveal': 'text-reveal 1s cubic-bezier(0.77, 0, 0.18, 1) forwards',
				// New animations
				'float': 'float 3s ease-in-out infinite',
				'pulse': 'pulse 2s infinite',
				'data-flow': 'data-flow 15s linear infinite',
				'matrix-rain': 'matrix-rain 20s linear infinite',
				'hue-rotate': 'hue-rotate 10s linear infinite',
				'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
				'cybr-glitch': 'cybr-glitch 4s ease infinite',
				'scanner': 'scanner 6s linear infinite'
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
				'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
				'glitch-overlay': 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVVSURBVGhD7ZpNiBxFGIbfqu6Z/ZnZ7G7IhqwHEUFU1KhgxKjgQSQKQcGbBxEEFRFUFEEPHjyIFw+CF/+CBw+CiAoGQRBJwB+CJJiYsDFZs7vZ387szHR3le9rZzwk2Z5Oa7Y2lBce0l31fVXdT1V/1R1ja2tra2sXhTYlV4wrujLz8YL4Sm6e13eNrqnnXMFiqjBVQBfcEuO9EieFD8VTlYHDG8Uzcl+ICsXkGrOmucSCbArFBUFV8dPcZ1+JA84YiMslfVxsMQuSsRwrEy9YIYyAP8UvxcFmGuQa0wUmC+bJSISoBCsEVSFpvlhsJvZjMPxDMxvEK8jPNUvtfzNk6GNdF29CsRqoxo3G7yd3RZXPR23Zu1wsUCwLiuY1L4hRi1o0x2p9kNk0wVUXz8dXrYZzf7ZDMb4ymOSq5hUviCFrKZa0YJHDyXK7GqnXj51aE2OdP9YM7W9CiAGsXRBXrScmXhPJ9VfHYFWvXnm5MnDe6K5Yd1PYnQ58s19Cti94SQRaoyZcQ0wzc0UMVnp5/WiU+a+l9dpzEhLF6O9qJuJH7YgYX45OjIkgpJnNKG6a8A2NGGWY2k+ysaQzUrq6YaYnKLsaK/6oXBvF+/W8w7Qz7wjxkHhNvFdslrHi+SgTQbJ9zz75mIo3xNzIZS1U1zNTN7UuYwfOOFuL1/Rd9eXwF8ncLt4QbxabYTwHnRvmCNEbmgnEm0aN1kCzT4oui3CWEFeFbT9/WnXvU6Y3xZvEZhmfzwsiXM2NcpjcZ6RkpjGHJlWVCxERCtrZ+jPp4N5TUfLUcJS8e2o2+2Q+s5O9KprxHHRuuCDlODMVFHdYVPVTMVfVirZt2jdZKTtmdFXDsFsf6Zo+rEnxlMwTBdnZhQtSiNL1lrFXTWRiZvKnYkUYTvbGJRzP1bS9RlVreHn3iblL7R1xU8FH+4FoXBDJfKfSN69TjGVGpK4KyVPGXDUZl9aL4r3icsEajXr+nHzM5PtETWzpvGRvRaetpD/7vDDG/5FQ7ckXwoaZ0eZXzXQ1HsV9PuLc5vgZ6GpFoiTFG+n0HTNpYlyiO3nUVvX6JQaGJAaSvaMEh+FGYMRmptVMb54wyDWjGvHKhBEzdlwcVcCZ5OLbVDMnyJbiHYVsKCZFLOoJ0GlTpifp6gPCjD+XpFHxRtl1W03tUZq8XT6PCfaQdDZ4HtoF8ZboTibwQKzfqWPERrFoxFAkcknm6GxMGqoW/SNcJ9BzwgMiFvNImjGi9GzLqhCvamZXVNyKM+M9o5q5SLWzLZ3NXulb3KvLO4XEKy1XM9rlMIMlc1i66nPa9g/BgxjvFBdTWDPHlG0Hq13+YC3KV2Q7D1Sc+JpMtVJNzCZ/p2lnj+r2F91mHoC4D8uD2OMEIqgSmfEMdG7YIKHW9vF00HlG8S7J84Dyh2TLM2Y/IzkfaYqwRk0wecvBGxONzhFnvHkPfNGFNVKS/IrS+7FbPzOWVFtXdWJzf3+c/ZlknQOSt0uuJX40AZcLztg+ByUeSZJ5BjpX2CBUlQdBtbuutQrpSknDq0lvrHVr5+H9k99/F+fpXtmwQzRFPzJ+4+hE9nXXazcq8xwY+1r/rrjjHFHWacn0hMRrYm3YIPRMPAgu6pFjzPXvkRekAo53xA3BrQUPgr0Klzfex3VZrTwmvhRsJe/4N+F/hA3C44M9OV39OdHqO8YHxJuCVfmeYLfL80o7YmN9QTwgDmidxcB5xAuFHHxU4KH4kMiL/ry09aMNwlZl1M9La2tra2tr/8LY30Fd/4TaFx+gAAAAAElFTkSuQmCC")',
				'cyber-matrix': 'linear-gradient(180deg, rgba(0, 255, 255, 0.15) 0%, rgba(0, 255, 255, 0) 100%)'
			},
			fontSize: {
				'xxs': '0.625rem',
			},
			boxShadow: {
				'neon-purple': '0 0 5px theme("colors.cyber.purple"), 0 0 20px theme("colors.cyber.purple")',
				'neon-blue': '0 0 5px theme("colors.cyber.blue"), 0 0 20px theme("colors.cyber.blue")',
				'neon-pink': '0 0 5px theme("colors.cyber.pink"), 0 0 20px theme("colors.cyber.pink")',
				'neon-green': '0 0 5px theme("colors.cyber.green"), 0 0 20px theme("colors.cyber.green")',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
