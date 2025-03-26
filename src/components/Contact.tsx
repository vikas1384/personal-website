
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formData);
      
      // Show success message
      toast({
        title: "Message Sent",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8">
              I'm interested in freelance opportunities, especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-2 bg-accent rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Bangalore, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-2 bg-accent rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:vikas9833450699@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vikas9833450699@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-2 bg-accent rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a 
                    href="tel:+919833450699"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9833450699
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
                    placeholder="Your email"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
                    placeholder="Your message"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"} 
                  {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
