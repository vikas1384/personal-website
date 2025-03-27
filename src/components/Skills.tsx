
import { Code, Database, FileText, Image, Laptop, Users, Globe, ArrowUpRight } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "Python (Flask, Django)", "MySQL", "Firebase", "Git", "GitHub", "AWS", "Netlify"],
    },
    {
      title: "Data & Business Analytics",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["Data Visualization", "Python (Matplotlib, Seaborn, Dash)", "Tableau", "Power BI", "Advanced Excel", "Google Sheets"],
    },
    {
      title: "Digital Marketing & Product",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: ["SEO", "Website Optimization", "Social Media Branding", "Content Strategy", "Instagram & LinkedIn Marketing", "Market Research", "Competitive Analysis"],
    },
    {
      title: "Soft Skills & Leadership",
      icon: <Users className="h-6 w-6 text-primary" />,
      skills: ["Public Speaking", "Team Leadership", "Problem-Solving", "Analytical Thinking", "Entrepreneurial Mindset"],
    }
  ];

  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 shadow-sm card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">My Strengths</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Technical Expertise", 
                icon: <Code className="h-10 w-10 text-primary mb-4" />,
                description: "Strong foundation in web development, Python programming, and data analytics."
              },
              { 
                title: "Problem Solving", 
                icon: <Database className="h-10 w-10 text-primary mb-4" />,
                description: "Analytical approach to finding innovative solutions for complex challenges."
              },
              { 
                title: "Leadership", 
                icon: <Users className="h-10 w-10 text-primary mb-4" />,
                description: "Experience in team leadership, project management, and effective communication."
              },
              { 
                title: "Creative Eye", 
                icon: <Image className="h-10 w-10 text-primary mb-4" />,
                description: "Award-winning photography skills and design sensibility."
              }
            ].map((strength, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 text-center shadow-sm card-hover animate-fade-in"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex justify-center">{strength.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{strength.title}</h4>
                <p className="text-muted-foreground">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
