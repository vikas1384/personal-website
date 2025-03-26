
import { ArrowRight, Mail, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-accent/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              I'm an Electronics and Communication Engineering graduate from Sir M. Visvesvaraya Institute of Technology, Bangalore, with a strong CGPA of 7.1. My academic journey has equipped me with technical skills and problem-solving abilities that I leverage in my professional work.
            </p>
            <p className="text-lg">
              I'm passionate about building innovative solutions, from responsive web applications to e-commerce platforms and business analytics dashboards. I have experience in web development, product marketing, and entrepreneurship.
            </p>
            <p className="text-lg">
              When I'm not coding, I enjoy sports (especially cricket), photography, and exploring new technologies. I've participated in entrepreneurship events and volunteered at cultural festivals, reflecting my interest in community engagement and business innovation.
            </p>
            
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <User className="mr-3 h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Personal Info</h3>
                  <p className="text-muted-foreground">
                    Based in Bangalore, India<br />
                    Phone: 9833450699
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-3 h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Contact Details</h3>
                  <p className="text-muted-foreground mb-1">
                    Email: vikas9833450699@gmail.com
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/vikas-vishwakarma-19237a248" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    LinkedIn Profile
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
