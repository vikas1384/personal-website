
import { ArrowDown } from "lucide-react";

const Hero = () => {
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
              Electronics and Communication Engineer
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter mb-4">
              Hi, I'm <span className="text-primary">Vikas Vishwakarma</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
              A passionate engineer and developer based in Bangalore, India with a keen interest in technology, entrepreneurship, and innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-accent text-accent-foreground hover:bg-accent/80 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-scale-up">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
                <img
                  src="/lovable-uploads/89b40197-aedd-4e39-b16f-041336c94138.png"
                  alt="Vikas Vishwakarma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full shadow-[0_0_30px_10px_rgba(var(--primary-rgb),0.1)] -z-10"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="rounded-full bg-card/80 backdrop-blur-sm p-2 shadow-lg">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
