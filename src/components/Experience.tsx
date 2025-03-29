
import { Code, Tag, User, Briefcase, TrendingUp, Lightbulb } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Product Manager & Entrepreneur",
      company: "Neon Visuals",
      period: "2022",
      description: "Led product development and built a team to develop and market digital solutions.",
      icon: <TrendingUp className="h-10 w-10 text-primary p-2 bg-accent rounded-full" />,
      responsibilities: [
        "Launched a tech product from concept to market, following lean startup methodology.",
        "Led product development efforts, collaborating with designers, developers, and business teams.",
        "Defined growth strategies for scaling user acquisition & engagement.",
        "Managed the end-to-end product lifecycle, ensuring a seamless user experience.",
        "Conducted user research and developed marketing strategies to improve product adoption."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Bharat Intern",
      period: "2023",
      description: "Worked on developing responsive web applications and enhancing user interfaces.",
      icon: <Code className="h-10 w-10 text-primary p-2 bg-accent rounded-full" />,
      responsibilities: [
        "Developed responsive and visually appealing websites using HTML, CSS, and JavaScript.",
        "Optimized web applications for faster loading speed and SEO performance.",
        "Assisted in backend development using Flask and Firebase.",
        "Implemented UI/UX improvements based on user feedback and A/B testing."
      ]
    },
    {
      role: "Product Marketing Intern",
      company: "Vijay Products Pvt Ltd",
      period: "2022",
      description: "Assisted in product marketing strategies and customer engagement initiatives.",
      icon: <Tag className="h-10 w-10 text-primary p-2 bg-accent rounded-full" />,
      responsibilities: [
        "Conducted market research to identify potential customers and competitive trends.",
        "Assisted in designing and executing digital marketing strategies (social media, branding).",
        "Created marketing materials, presentations, and email campaigns for business growth.",
        "Analyzed marketing metrics to optimize campaigns and improve customer conversion."
      ]
    },
    {
      role: "Outlier Intern - Entrepreneurship Program",
      company: "Outlier",
      period: "2021",
      description: "Participated in an entrepreneurship-focused program learning startup methodologies.",
      icon: <Lightbulb className="h-10 w-10 text-primary p-2 bg-accent rounded-full" />,
      responsibilities: [
        "Conducted case studies on successful startups & participated in ideation sessions.",
        "Developed a business plan and pitch for a novel product idea.",
        "Worked on real-world business problems, applying analytical thinking and problem-solving skills.",
        "Learned venture capital fundamentals and investment strategy for early-stage startups."
      ]
    },
  ];

  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-title">Professional & Entrepreneurial Experience</h2>
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
                      <p className="text-muted-foreground mb-3">{exp.description}</p>
                      
                      {exp.responsibilities && (
                        <div className="mt-3 space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                              {resp}
                            </p>
                          ))}
                        </div>
                      )}
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
