
import { Book, Award, Medal, Trophy } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Sir M. Visvesvaraya Institute of Technology",
      degree: "Bachelors of Engineering in Electronics and Communication Engg.",
      period: "2021 - 2025",
      location: "Bangalore, India",
      details: "CGPA: 8.4",
      coursework: [
        "Embedded Systems & Microcontrollers: Hands-on experience with Arduino, Raspberry Pi, and 8051 Microcontrollers.",
        "Digital Electronics & Signal Processing: Understanding of logic design, VHDL, MATLAB applications.",
        "Communication Networks: Strong foundation in networking protocols, IoT & wireless communication.",
        "Python Programming & AI Concepts: Practical exposure to machine learning basics, data analysis, and automation."
      ]
    },
    {
      institution: "Modern Academy Senior Secondary School",
      degree: "Senior Secondary (12th) - Science (Physics, Chemistry, Mathematics)",
      period: "2019 - 2020",
      location: "",
      details: "Percentage: 69%",
      coursework: [
        "Developed a keen interest in engineering problem-solving and practical applications.",
        "Active in extracurricular activities, including leadership roles in academic clubs."
      ]
    },
    {
      institution: "Modern Academy Senior Secondary School",
      degree: "Secondary (10th)",
      period: "2018",
      location: "",
      details: "Percentage: 85%",
      coursework: [
        "Strong foundation in Mathematics, Science, and Computer Applications.",
        "Engaged in science fairs, sports events, and leadership programs."
      ]
    },
  ];

  const certificates = [
    {
      title: "Sports Excellence Award",
      details: "Recognized for outstanding performance in cricket, tennis, and badminton.",
      icon: <Trophy className="h-6 w-6 text-primary" />
    },
    {
      title: "Microsoft Excel & Word Certification",
      details: "Proficiency in data analytics, document management, and reporting.",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      title: "Business Management Certification",
      details: "Understanding of corporate strategies, finance, and growth hacking.",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      title: "HTML, CSS, JavaScript Certification",
      details: "Expertise in web development & UI/UX design.",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      title: "Sales & Marketing Certification",
      details: "Deep knowledge of customer engagement & digital marketing.",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      title: "Team Leadership & Communication Certification",
      details: "Experience in managing teams and leading projects.",
      icon: <Award className="h-6 w-6 text-primary" />
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
                      {edu.coursework && (
                        <div className="mt-3 space-y-2">
                          {edu.coursework.map((course, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              • {course}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-title">Certifications</h2>
            <div className="space-y-6 mt-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-sm animate-fade-in card-hover"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex items-center mb-2">
                    {cert.icon}
                    <h3 className="text-xl font-semibold ml-3">{cert.title}</h3>
                  </div>
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
