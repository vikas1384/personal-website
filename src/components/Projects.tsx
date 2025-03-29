
import { ArrowRight, Code, ShoppingCart, BarChart3, Lightbulb, Zap, TrendingUp, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Content Generation Platform",
      description: "Developed a startup that uses NLP and computer vision to automatically generate optimized marketing content for e-commerce businesses.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      tags: ["AI Startup", "Machine Learning", "NLP", "SaaS Business Model"],
      link: "#",
    },
    {
      title: "Neural E-Commerce Platform",
      description: "Built an AI-driven online marketplace with personalized recommendation engines, predictive inventory management, and automated customer service.",
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      tags: ["Artificial Intelligence", "Recommendation Systems", "Business Analytics", "Python"],
      link: "#",
    },
    {
      title: "AI Business Intelligence Dashboard",
      description: "Created a venture that offers predictive analytics platform for startups to forecast market trends, optimize pricing strategies, and identify growth opportunities.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      tags: ["Predictive Analytics", "Machine Learning", "Data Visualization", "Venture Development"],
      link: "#",
    },
    {
      title: "AI-Enhanced Startup Founder Platform",
      description: "Developed a comprehensive platform that uses AI to assist entrepreneurs in business planning, market validation, and investor pitching.",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      tags: ["Entrepreneurship", "AI Tools", "Venture Capital", "React"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-accent/30">
      <div className="section-container">
        <h2 className="section-title">AI Startups & Venture Portfolio</h2>
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
                  Explore Venture <ArrowRight className="ml-2 h-4 w-4" />
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
