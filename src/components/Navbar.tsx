
import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link that navigates to a section
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container py-0 flex items-center justify-between">
        <div className="flex flex-col">
          <a
            href="#"
            className="text-xl font-bold tracking-tighter hover:text-primary transition-colors"
          >
            Vikas<span className="text-primary">.</span>
          </a>
          <span className="text-xs text-muted-foreground hidden md:block">
            AI-driven Startup Founder, Tech Entrepreneur & Innovator
          </span>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md inline-flex items-center hover:bg-primary/90 transition-colors"
          >
            Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 p-4">
          {/* Close button for mobile menu */}
          <button 
            className="absolute right-4 top-4 p-2 text-foreground hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="mb-4 text-center">
            <div className="text-xl font-bold mb-1">
              Vikas<span className="text-primary">.</span>
            </div>
            <div className="text-sm text-muted-foreground">
              AI-driven Startup Founder, Tech Entrepreneur & Innovator
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={handleNavLinkClick}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-lg font-medium bg-primary text-primary-foreground px-6 py-3 rounded-md inline-flex items-center hover:bg-primary/90 transition-colors"
            onClick={handleNavLinkClick}
          >
            Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
