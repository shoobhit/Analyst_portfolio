import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative border-t border-border/40 py-12 mt-16 
                     dark:bg-gradient-to-b dark:from-background dark:to-background/95
                     after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_top,rgba(var(--primary),0.02),transparent)] after:z-[-1]">
      <div className="absolute left-1/2 -translate-x-1/2 -top-5">
        <button
          onClick={scrollToTop}
          className="group bg-background dark:bg-background/80 hover:bg-primary/5 dark:hover:bg-primary/10 
                   border dark:border-border/50 rounded-full p-3 transition-all duration-300 
                   hover:shadow-lg dark:hover:shadow-primary/20 hover:-translate-y-1
                   backdrop-blur-sm relative
                   after:absolute after:inset-0 after:rounded-full after:shadow-[0_0_10px_rgba(var(--primary),0.2)] 
                   after:opacity-0 after:transition-opacity hover:after:opacity-100"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                             dark:group-hover:text-primary/90 transition-colors" />
        </button>
      </div>

      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold group relative">
              <div className="flex items-center gap-3">
                <span className="text-primary tracking-[0.4em] uppercase 
                               dark:group-hover:text-primary/90 transition-colors
                               relative after:absolute after:bottom-0 after:left-0 after:w-0 
                               after:h-[2px] after:bg-primary/50 after:transition-all 
                               group-hover:after:w-full">
                  Sobhit
                </span>
                <span className="text-foreground tracking-[0.4em] uppercase 
                               dark:text-foreground/90 dark:group-hover:text-foreground transition-colors
                               relative after:absolute after:bottom-0 after:left-0 after:w-0 
                               after:h-[2px] after:bg-foreground/50 after:transition-all 
                               group-hover:after:w-full">
                  Tripathi
                </span>
              </div>
            </a>
            <p className="text-foreground/70 dark:text-foreground/50 mt-1 italic">
              Transforming Data into Insights
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/sobhit18/" 
              aria-label="LinkedIn profile"
              className="p-2 rounded-full hover:bg-background/80 dark:hover:bg-foreground/5 
                       transition-all duration-300 hover:text-primary dark:hover:text-primary/90
                       hover:scale-110 hover:shadow-sm dark:hover:shadow-primary/20"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/shoobhit" 
              aria-label="GitHub profile"
              className="p-2 rounded-full hover:bg-background/80 dark:hover:bg-foreground/5 
                       transition-all duration-300 hover:text-primary dark:hover:text-primary/90
                       hover:scale-110 hover:shadow-sm dark:hover:shadow-primary/20"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:cssobhit@gmail.com" 
              aria-label="Email"
              className="p-2 rounded-full hover:bg-background/80 dark:hover:bg-foreground/5 
                       transition-all duration-300 hover:text-primary dark:hover:text-primary/90
                       hover:scale-110 hover:shadow-sm dark:hover:shadow-primary/20"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-6 pt-6 text-center">
          <p className="text-foreground/60 dark:text-foreground/40 text-sm flex items-center justify-center gap-2 
                       hover:text-foreground/80 dark:hover:text-foreground/60 transition-colors">
            © {currentYear} Built with 
            <Heart className="w-4 h-4 text-red-500/70 hover:text-red-500 transition-colors animate-pulse" /> 
            by Sobhit Tripathi
          </p>
        </div>
      </div>
    </footer>
  );
}
