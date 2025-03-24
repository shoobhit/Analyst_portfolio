import { Button } from "./ui/button";
import { 
  BarChart3, Database, LineChart, 
  BrainCircuit,
  Network,
  CircleDot, // Instead of Scatter
  GitBranch, // Fix: Changed from Git to GitBranch
  Code,
  Cpu, // Added for ML/AI representation
  Boxes // Added for data clustering
} from "lucide-react";
import { useState, useEffect } from 'react';

export function HeroSection() {
  const taglines = [
    {
      main: "Crafting Neural Networks",
      highlight: "One Dataset at a Time"
    },
    {
      main: "Where Data Dreams",
      highlight: "Become Digital Reality"
    },
    {
      main: "Architecting Tomorrow's",
      highlight: "AI Solutions Today"
    },
    {
      main: "Quantum Leaps in",
      highlight: "Machine Intelligence"
    },
    {
      main: "Decoding Complexity",
      highlight: "Engineering Simplicity"
    },
    {
      main: "From Raw Data to",
      highlight: "Revolutionary Insights"
    },
    {
      main: "Bridging Human Creativity",
      highlight: "With Machine Precision"
    },
    {
      main: "Transforming Algorithms",
      highlight: "Into Business Value"
    },
    {
      main: "Beyond Traditional",
      highlight: "Data Boundaries"
    },
    {
      main: "Crafting Intelligence",
      highlight: "Pixel by Pixel"
    },
    {
      main: "Where Science Meets",
      highlight: "Digital Artistry"
    },
    {
      main: "Pioneering the Future of",
      highlight: "Intelligent Systems"
    },
    {
      main: "Transforming Chaos into",
      highlight: "Digital Symphony"
    },
    {
      main: "Engineering Dreams in",
      highlight: "Neural Space"
    },
    {
      main: "Architecting Tomorrow's",
      highlight: "Digital Intelligence"
    }
  ];

  const animations = [
    'split-reveal',
    'typewriter',
    'neon-pulse',
    'slice-in',
    'perspective-flip'
  ];

  const [currentTagline, setCurrentTagline] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(animations[0]);
  const [lastAnimation, setLastAnimation] = useState(animations[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
      // Ensure we don't repeat the same animation twice
      let newAnimation;
      do {
        newAnimation = animations[Math.floor(Math.random() * animations.length)];
      } while (newAnimation === lastAnimation);
      
      setLastAnimation(newAnimation);
      setCurrentAnimation(newAnimation);
    }, 10000);

    return () => clearInterval(interval);
  }, [lastAnimation]);

  return (
    <section id="home" className="relative pt-24 data-section overflow-hidden">
      <div className="absolute inset-0 data-grid-pattern opacity-50"></div>
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <div className="h-[3em] md:h-[2.5em] relative overflow-hidden perspective-3d">
                <div
                  key={`${currentTagline}-${currentAnimation}`}
                  className={`absolute w-full animate-${currentAnimation}`}
                  style={{
                    // Add some custom properties for enhanced effects
                    '--highlight-color': 'hsl(var(--primary))',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  } as React.CSSProperties}
                >
                  <span className="block mb-2 opacity-90 whitespace-nowrap overflow-hidden">
                    {taglines[currentTagline].main}
                  </span>
                  <span className="block text-primary whitespace-nowrap overflow-hidden">
                    {taglines[currentTagline].highlight}
                  </span>
                </div>
              </div>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Building smart things with code, teaching machines to think, 
              and making data tell stories worth listening to.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_70%)] animate-pulse duration-[3s]" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(var(--secondary),0.05)_1px,transparent_1px)] bg-[size:20px_20px] animate-[spin_30s_linear_infinite]" />
            </div>

            <div className="absolute top-10 left-1/4 animate-float-up">
              <div className="relative group">
                <Cpu className="w-12 h-12 text-primary/70 drop-shadow-lg" />
                <div className="absolute -inset-2 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
            </div>

            <div className="absolute bottom-1/3 right-10 animate-float-side">
              <div className="relative group">
                <Boxes className="w-14 h-14 text-secondary/70 drop-shadow-lg" />
                <div className="absolute -inset-2 bg-secondary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
            </div>

            <div className="absolute top-0 right-0 animate-float-diag group">
              <BrainCircuit className="w-16 h-16 text-primary opacity-80 drop-shadow-lg group-hover:text-accent transition-colors duration-500" />
            </div>

            <div className="absolute top-1/4 left-0 animate-float-side" style={{ animationDelay: "1s" }}>
              <Database className="w-12 h-12 text-secondary opacity-70 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-0 right-1/4 animate-float-up" style={{ animationDelay: "2s" }}>
              <Network className="w-14 h-14 text-accent opacity-75 drop-shadow-lg" />
            </div>
            <div className="absolute top-1/2 right-1/3 animate-float-diag" style={{ animationDelay: "1.5s" }}>
              <div className="relative w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm shadow-lg hover:shadow-primary/20 transition-all duration-500">
                <BarChart3 className="absolute inset-0 m-auto w-10 h-10 text-primary/50" />
              </div>
            </div>
            <div className="absolute bottom-1/4 left-1/4 animate-float-up" style={{ animationDelay: "2.5s" }}>
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 backdrop-blur-sm shadow-lg hover:shadow-accent/20 transition-all duration-500">
                <CircleDot className="absolute inset-0 m-auto w-8 h-8 text-accent/50" />
              </div>
            </div>
            <div className="absolute top-1/3 right-0 animate-float-side" style={{ animationDelay: "3s" }}>
              <Code className="w-10 h-10 text-secondary/60 drop-shadow-md" />
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full">
                <path 
                  d="M100,100 Q150,150 200,200" 
                  className="stroke-primary/20 stroke-2 fill-none animate-draw"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

