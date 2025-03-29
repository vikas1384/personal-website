
import { Code, Tag, User, Briefcase, TrendingUp, Lightbulb, Zap, Brain } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Founder & AI Product Strategist",
      company: "Neon Visuals AI",
      period: "2022 - Present",
      description: "Founded an AI-driven startup focused on visual content creation and automated marketing solutions.",
      icon: <TrendingUp className="h-10 w-10 text-primary p-2 bg-accent rounded-full" />,
      responsibilities: [
        "Launched an AI-powered SaaS product that automates visual content creation for businesses.",
        "Built and led a cross-functional team of engineers, designers, and ML specialists.",
        "Secured early-stage funding through angel investors and pitch competitions.",
        "Developed the company's AI roadmap and technology stack architecture.",
        "Implemented growth strategies resulting in a 200% increase in user acquisition."
      ]
    },
    {
      role: "AI Solutions Developer",
      company: "Bharat Intern",
      period: "2023",
      description: "Led development of AI-powered applications and cognitive solutions for enterprise clients.",
      icon: <Code className="h-10 w-10 text-primary p-2 bg-accent rounded-full" />,
      responsibilities: [
        "Built responsive AI-powered web applications using machine learning frameworks and React.",
        "Integrated NLP capabilities to create advanced search and recommendation features.",
        "Implemented computer vision solutions for image recognition and processing tasks.",
        "Designed AI data pipelines and analytics dashboards for business intelligence."
      ]
    },
    {
      role: "Startup Growth Strategist",
      company: "Vijay Products Pvt Ltd",
      period: "2022",
      description: "Developed AI-enhanced marketing strategies and led digital transformation initiatives.",
      icon: <Tag className="h-10 w-10 text-primary p-2 bg-accent rounded-full" />,
      responsibilities: [
        "Designed and implemented AI-driven market research to identify emerging opportunities.",
        "Created data-backed marketing strategies leveraging predictive analytics and consumer behavior modeling.",
        "Deployed AI tools for customer segmentation and personalized marketing campaigns.",
        "Established metrics frameworks to track business growth and optimize conversion rates."
      ]
    },
    {
      role: "AI Venture Fellow",
      company: "Outlier Accelerator",
      period: "2021",
      description: "Selected for an elite entrepreneurship program focused on AI venture development.",
      icon: <Lightbulb className="h-10 w-10 text-primary p-2 bg-accent rounded-full" />,
      responsibilities: [
        "Developed business models for AI-powered startups with guidance from industry mentors.",
        "Created and pitched an AI venture concept to a panel of venture capitalists and tech leaders.",
        "Collaborated with ML engineers to prototype AI solutions for real-world business challenges.",
        "Studied AI startup funding landscapes and investment strategies for deep tech ventures."
      ]
    },
  ];

  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-title">Entrepreneurial Journey & AI Ventures</h2>
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
