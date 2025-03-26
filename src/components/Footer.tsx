
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold tracking-tighter">
              Vikas<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground mt-2">
              Electronics and Communication Engineer
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors mb-4"
            >
              <ArrowUp className="h-5 w-5 text-primary" />
            </button>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Vikas Vishwakarma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
