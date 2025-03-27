
import { ArrowRight, Mail, User, Award, MapPin, Phone, Briefcase } from "lucide-react";

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
            <p className="text-lg">
              I'm passionate about building innovative solutions, from responsive web applications to e-commerce platforms and business analytics dashboards. I have experience in web development, product marketing, and entrepreneurship.
            </p>
            <p className="text-lg">
              When I'm not coding or working on projects, I enjoy sports (especially cricket, tennis, and badminton), photography, and exploring new technologies. I've participated in entrepreneurship events and volunteered at cultural festivals, reflecting my interest in community engagement and business innovation.
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
                    <span className="text-muted-foreground">Runner-up in State-Level Cricket Tournament</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-1.5 mr-2"></span>
                    <span className="text-muted-foreground">Winner of college photography competitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-1.5 mr-2"></span>
                    <span className="text-muted-foreground">Selected for Wadhwani LiftOff cohort</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold mb-3 flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-primary" />
                Interests
              </h3>
              <div className="flex flex-wrap">
                {["Artificial Intelligence", "Tech Trends", "Entrepreneurship", "Business Strategy", "Reading", "Photography", "Traveling"].map((interest) => (
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
