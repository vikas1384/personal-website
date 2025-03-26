
import { Book } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Sir M. Visvesvaraya Institute of Technology",
      degree: "Bachelors of Engineering in Electronics and Communication Engg.",
      period: "2021 - 2025",
      location: "Bangalore, India",
      details: "CGPA: 7.1",
    },
    {
      institution: "Modern Academy Senior Secondary School",
      degree: "Senior Secondary (12th) - Science",
      period: "2019 - 2020",
      location: "",
      details: "Percentage: 69%",
    },
    {
      institution: "Modern Academy Senior Secondary School",
      degree: "Secondary (10th)",
      period: "2018",
      location: "",
      details: "Percentage: 85%",
    },
  ];

  const certificates = [
    {
      title: "Sports Excellence",
      details: "Recognized for outstanding performance and active participation in school and college sports.",
    },
    {
      title: "VTU Sports Awards",
      details: "Runner-up in State-Level Cricket Tournament; recognized for exceptional performance and active participation in sports throughout school and college.",
    },
    {
      title: "Photography Excellence",
      details: "College-Level Awards for Photography & Winner of Photography Competition hosted by Eco Club - Nisarga.",
    },
    {
      title: "Entrepreneurship & Cultural Fest Volunteering",
      details: "Represented college in various entrepreneurship events and volunteered at Kalangali Cultural Fest, SIRMVIT & Also We're part of the prestigious Wadhwani LiftOff cohort.",
    },
  ];

  return (
    <section id="education" className="bg-accent/30">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="section-title">Education</h2>
            <div className="space-y-8 mt-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-sm animate-fade-in card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="p-2 bg-accent rounded-full">
                        <Book className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {edu.period}
                      </div>
                      <h3 className="text-xl font-semibold mb-1">
                        {edu.institution}
                      </h3>
                      <div className="text-primary font-medium mb-2">
                        {edu.degree}
                      </div>
                      <p className="text-muted-foreground">
                        {edu.details} {edu.location && `• ${edu.location}`}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-title">Certificates</h2>
            <div className="space-y-6 mt-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-sm animate-fade-in card-hover"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
