
import { ArrowRight, Mail, User, Award, MapPin, Phone, Briefcase, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-accent/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              I'm an Electronics and Communication Engineering student at Sir M. Visvesvaraya Institute of Technology, Bangalore, with a strong CGPA of 8.4. My academic journey has equipped me with technical skills in embedded systems, digital electronics, communication networks, and programming.
            </p>
            <p className="text-lg font-medium text-primary">
              With an entrepreneurial mindset, I'm passionate about building innovative solutions and scaling businesses through technology. My experience in product management and marketing has given me valuable insights into creating user-centric products that solve real-world problems.
            </p>
            <p className="text-lg">
              When I'm not coding or working on business ideas, I enjoy sports (especially cricket, tennis, and badminton), photography, and exploring new technologies. I've participated in entrepreneurship events and volunteered at cultural festivals, reflecting my interest in community engagement and business innovation.
            </p>
            
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <User className="mr-2 h-5 w-5 text-primary" />
                  Personal Info
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <MapPin className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span className="text-muted-foreground">Bangalore, India</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span className="text-muted-foreground">+91 9833450699</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span className="text-muted-foreground">vikas9833450699@gmail.com</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Award className="mr-2 h-5 w-5 text-primary" />
                  Achievements
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-1.5 mr-2"></span>
                    <span className="text-muted-foreground">Selected for Wadhwani LiftOff entrepreneurship cohort</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-1.5 mr-2"></span>
                    <span className="text-muted-foreground">Runner-up in State-Level Cricket Tournament</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-1.5 mr-2"></span>
                    <span className="text-muted-foreground">Winner of college photography competitions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold mb-3 flex items-center">
                <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                Entrepreneurial Interests
              </h3>
              <div className="flex flex-wrap">
                {["Startup Development", "Business Strategy", "Product Innovation", "Growth Hacking", "Tech Entrepreneurship", "Digital Marketing", "Market Research", "Venture Development"].map((interest) => (
                  <span key={interest} className="chip">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
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
    </section>
  );
};

export default About;
