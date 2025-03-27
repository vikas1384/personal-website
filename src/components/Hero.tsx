
import { ArrowDown } from "lucide-react";
import ProfileCarousel from "./ProfileCarousel";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_30%,hsl(var(--primary)/0.1),transparent_40%)]"></div>
      <div className="section-container py-16 md:py-20 flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Electronics Engineer & Tech Entrepreneur
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter mb-2">
              Hi, I'm <span className="text-primary">Vikas Vishwakarma</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 italic mb-4">
              A Sportsman, leader and a passionate entrepreneur
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
              A passionate engineer, entrepreneur, and developer with expertise in web development, product management, and digital marketing. Building innovative solutions while pursuing BE in Electronics and Communication Engineering.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-6 py-3"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-scale-up">
            <ProfileCarousel />
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection("about")}
            className="rounded-full bg-card/80 backdrop-blur-sm p-2 shadow-lg"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
