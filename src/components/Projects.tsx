
import { ArrowRight, Code, ShoppingCart, BarChart3, Lightbulb } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Startup Landing Page & Business Strategy",
      description: "Developed a comprehensive business plan and marketing strategy for a tech startup, including website design, user acquisition strategy, and revenue model.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      tags: ["Entrepreneurship", "Business Strategy", "Web Design", "Marketing"],
      link: "#",
    },
    {
      title: "E-Commerce Platform with Payment Gateway",
      description: "Developed an online store with secure PayPal payment integration, interactive shopping cart system with order tracking & analytics for a small business.",
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      tags: ["Python", "Flask", "PayPal API", "Business Model"],
      link: "#",
    },
    {
      title: "Business Analytics Dashboard",
      description: "Created an analytics platform for small businesses to track KPIs, visualize sales data, and make data-driven decisions for growth and optimization.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      tags: ["Python", "Dash", "Data Visualization", "Business Intelligence"],
      link: "#",
    },
    {
      title: "Personal Portfolio Website",
      description: "Designed a fully responsive and interactive portfolio website with resume download, project showcase, and contact form integration.",
      icon: <Code className="h-8 w-8 text-primary" />,
      tags: ["HTML", "CSS", "JavaScript", "Flask"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-accent/30">
      <div className="section-container">
        <h2 className="section-title">Projects & Ventures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
