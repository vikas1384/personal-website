
import { ArrowRight, Code, ShoppingCart, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A sleek and responsive portfolio website showcasing skills, projects, and resume. Built with modern web technologies for optimal user experience.",
      icon: <Code className="h-8 w-8 text-primary" />,
      tags: ["HTML", "CSS", "Python"],
      link: "#",
    },
    {
      title: "E-Commerce Website",
      description: "A simple e-commerce website with product listings, shopping cart, and checkout functionality. Includes payment gateway integration.",
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      tags: ["HTML", "CSS", "Python", "Entrepreneurship"],
      link: "#",
    },
    {
      title: "Business Analytics Dashboard",
      description: "A dashboard to track business metrics like sales, customer engagement, and more. Uses Python libraries to display data analytics.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      tags: ["Python", "Entrepreneurship"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-accent/30">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-sm card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
