/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./index.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        draw: {
          '0%': { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 }
        },
        "float-up-down": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "float-left-right": {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(20px)" }
        },
        "float-diagonal": {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(15px, -15px)" }
        },
        'fade-slide': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '10%, 90%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          }
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'fade-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'zoom-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'rotate-in': {
          '0%': {
            opacity: '0',
            transform: 'rotate(-3deg) scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'rotate(0) scale(1)'
          }
        },
        'slide-bounce': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px) scale(0.95)'
          },
          '60%': {
            transform: 'translateX(10px) scale(1.02)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) scale(1)'
          }
        },
        'expand-blur': {
          '0%': {
            opacity: '0',
            filter: 'blur(10px)',
            transform: 'scale(1.2)'
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0)',
            transform: 'scale(1)'
          }
        },
        'glitch-slide': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
            clipPath: 'inset(40% 0 61% 0)'
          },
          '20%': {
            clipPath: 'inset(92% 0 1% 0)'
          },
          '40%': {
            clipPath: 'inset(43% 0 1% 0)'
          },
          '60%': {
            clipPath: 'inset(25% 0 58% 0)'
          },
          '80%': {
            clipPath: 'inset(54% 0 7% 0)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
            clipPath: 'inset(0 0 0 0)'
          }
        },
        'matrix-reveal': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
            textShadow: '2px 2px 0px #00ff00'
          },
          '50%': {
            textShadow: '-2px -2px 0px #00ff00'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            textShadow: 'none'
          }
        },
        'wave-text': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0px) rotate(0deg)'
          },
          '30%': {
            transform: 'translateY(-10px) rotate(-2deg)'
          },
          '60%': {
            transform: 'translateY(5px) rotate(1deg)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) rotate(0deg)'
          }
        },
        'split-reveal': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
            filter: 'blur(5px)',
            clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)'
          },
          '30%': {
            clipPath: 'polygon(0 40%, 100% 40%, 100% 60%, 0 60%)',
            opacity: '0.3'
          },
          '60%': {
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
            filter: 'blur(2px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0)'
          }
        },
        'typewriter': {
          '0%': {
            width: '0%',
            opacity: '0',
            borderRight: '3px solid hsl(var(--primary))'
          },
          '20%': {
            opacity: '1',
            borderRight: '3px solid hsl(var(--primary))'
          },
          '95%': {
            borderRight: '3px solid transparent'
          },
          '100%': {
            width: '100%',
            opacity: '1'
          }
        },
        'neon-pulse': {
          '0%': {
            opacity: '0',
            textShadow: '0 0 0px hsl(var(--primary))',
            transform: 'scale(0.95) translateY(-10px)'
          },
          '50%': {
            textShadow: '0 0 20px hsl(var(--primary))',
            transform: 'scale(1.05) translateY(0)'
          },
          '100%': {
            opacity: '1',
            textShadow: '0 0 0px hsl(var(--primary))',
            transform: 'scale(1) translateY(0)'
          }
        },
        'slice-in': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px) rotate(-5deg)',
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
          },
          '30%': {
            opacity: '0.5',
            transform: 'translateX(0) rotate(-2deg)',
            clipPath: 'polygon(0 0, 30% 0, 30% 100%, 0 100%)'
          },
          '60%': {
            opacity: '0.8',
            transform: 'translateX(10px) rotate(1deg)',
            clipPath: 'polygon(0 0, 60% 0, 60% 100%, 0 100%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) rotate(0)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          }
        },
        'perspective-flip': {
          '0%': {
            opacity: '0',
            transform: 'rotateX(90deg) translateY(30px)',
            transformOrigin: 'bottom'
          },
          '50%': {
            opacity: '0.5',
            transform: 'rotateX(45deg) translateY(15px)',
          },
          '100%': {
            opacity: '1',
            transform: 'rotateX(0deg) translateY(0)',
          }
        }
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-out",
        draw: 'draw 2s ease-out forwards',
        "float-up": "float-up-down 8s ease-in-out infinite",
        "float-side": "float-left-right 12s ease-in-out infinite",
        "float-diag": "float-diagonal 10s ease-in-out infinite",
        'fade-slide': 'fade-slide 5s ease-in-out',
        'fade-up': 'fade-up 0.8s ease-out',
        'fade-down': 'fade-down 0.8s ease-out',
        'fade-left': 'fade-left 0.8s ease-out',
        'fade-right': 'fade-right 0.8s ease-out',
        'zoom-in': 'zoom-in 0.8s ease-out',
        'rotate-in': 'rotate-in 0.8s ease-out',
        'slide-bounce': 'slide-bounce 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'expand-blur': 'expand-blur 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        'glitch-slide': 'glitch-slide 1s cubic-bezier(0.23, 1, 0.32, 1)',
        'matrix-reveal': 'matrix-reveal 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
        'wave-text': 'wave-text 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'split-reveal': 'split-reveal 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
        'typewriter': 'typewriter 2s steps(40, end)',
        'neon-pulse': 'neon-pulse 1.5s cubic-bezier(0.23, 1, 0.32, 1)',
        'slice-in': 'slice-in 1.3s cubic-bezier(0.23, 1, 0.32, 1)',
        'perspective-flip': 'perspective-flip 1s cubic-bezier(0.23, 1, 0.32, 1)'
      },
    },
  },
  plugins: [],
}