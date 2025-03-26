
import { Code, Tag, User } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "Bharat Intern",
      period: "2023",
      description: "Worked on developing responsive web applications and enhancing user interfaces.",
      icon: <Code className="h-10 w-10 text-primary p-2 bg-accent rounded-full" />,
    },
    {
      role: "Product Marketing Intern",
      company: "Vijay Products Pvt Ltd",
      period: "2022",
      description: "Assisted in product marketing strategies and customer engagement initiatives.",
      icon: <Tag className="h-10 w-10 text-primary p-2 bg-accent rounded-full" />,
    },
    {
      role: "Product Manager",
      company: "Neon Visuals",
      period: "2022",
      description: "Managed product development and marketing strategies for digital products.",
      icon: <User className="h-10 w-10 text-primary p-2 bg-accent rounded-full" />,
    },
    {
      role: "Outlier Intern",
      company: "Outlier",
      period: "2021",
      description: "Participated in innovative projects and learned about cutting-edge technologies.",
      icon: <Code className="h-10 w-10 text-primary p-2 bg-accent rounded-full" />,
    },
  ];

  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -ml-0.5 md:ml-0"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -ml-4 md:-ml-5 mt-6 md:mt-0">
                    {exp.icon}
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} ml-16 md:ml-0`}>
                    <div className="bg-card p-6 rounded-lg shadow-sm card-hover">
                      <div className="text-sm font-medium text-muted-foreground mb-1">{exp.period}</div>
                      <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                      <div className="text-primary font-medium mb-3">{exp.company}</div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
