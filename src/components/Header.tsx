import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationItems = isHomePage
    ? [
        { name: "Home", href: "#home" },
        { name: "Resume", href: "#resume" },
        { name: "Projects", href: "#projects" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Resume", href: "/resume" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
      ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold group">
          <div className="flex items-center gap-3">
            <span className="text-primary tracking-[0.4em] uppercase font-bold 
                           dark:group-hover:text-primary/90 transition-colors
                           relative after:absolute after:bottom-0 after:left-0 after:w-0 
                           after:h-[2px] after:bg-primary/50 after:transition-all 
                           group-hover:after:w-full">
              Sobhit
            </span>
            <span className="text-foreground tracking-[0.4em] uppercase font-bold
                           dark:text-foreground/90 dark:group-hover:text-foreground transition-colors
                           relative after:absolute after:bottom-0 after:left-0 after:w-0 
                           after:h-[2px] after:bg-foreground/50 after:transition-all 
                           group-hover:after:w-full">
              Tripathi
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex space-x-6">
            {navigationItems.map((item) => (
              isHomePage ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-2 py-1 font-medium tracking-wide text-[15px] text-foreground/80 hover:text-primary transition-all duration-300 group font-jakarta"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative px-2 py-1 font-medium tracking-wide text-[15px] text-foreground/80 hover:text-primary transition-all duration-300 group font-jakarta"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </Link>
              )
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg animate-fade-in">
          <nav className="flex flex-col p-4">
            {navigationItems.map((item) => (
              isHomePage ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2 px-4 font-medium tracking-wide text-[15px] text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-300 font-jakarta"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="py-2 px-4 font-medium tracking-wide text-[15px] text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-300 font-jakarta"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
