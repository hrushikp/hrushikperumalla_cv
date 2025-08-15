import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Calendar, Github, Linkedin, Instagram, Send, Coffee } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hrushikperumalla@gmail.com",
    link: "mailto:hrushikperumalla@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+49 17672520284",
    link: "tel:+4917672520284"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Potsdam / Berlin, Germany",
    link: null
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    username: "@hrushikperumalla",
    link: "https://github.com/hrushikperumalla"
  },
  {
    icon: Linkedin,
    label: "LinkedIn", 
    username: "Hrushik Perumalla",
    link: "https://linkedin.com/in/hrushikperumalla"
  },
  {
    icon: Instagram,
    label: "Instagram",
    username: "@hrushik_perumalla",
    link: "https://instagram.com/hrushik_perumalla"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Hi Hrushik,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:hrushikperumalla@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-custom mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-sora font-bold gradient-text mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
              Whether you're interested in data science collaboration, business insights, 
              or just want to chat about technology and innovation, I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-custom mx-auto px-6">
          {/* Schedule Meeting - Full Width */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-background" />
                </div>
                <div>
                  <h2 className="text-3xl font-sora font-bold text-text-high">
                    Schedule a Meeting
                  </h2>
                  <p className="text-text-medium">
                    Online sessions or coffee chats - let's discuss your ideas!
                  </p>
                </div>
              </div>

              <div className="max-w-2xl mx-auto space-y-6">
                <p className="text-text-medium leading-relaxed">
                  Ready to discuss data science projects, machine learning solutions, or potential collaborations? 
                  Choose between an online video call or, if you're in Potsdam/Berlin, let's meet for coffee!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.open('#', '_blank')}
                    variant="hero" 
                    size="lg"
                  >
                    Book Online Meeting
                    <Calendar className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="glass" 
                    size="lg"
                  >
                    Coffee Chat ☕
                    <Coffee className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-text-low text-sm">
                    Available Monday - Friday, 9 AM - 6 PM CET
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info - Full Width Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-sora font-bold text-text-high mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-aurora-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-aurora-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-text-medium font-medium">
                          {info.label}
                        </div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-text-high hover:text-aurora-primary transition-colors font-medium text-lg"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-text-high font-medium text-lg">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Connect Online & Coffee Chat */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 h-full">
                {/* Social Links */}
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-2xl font-sora font-bold text-text-high mb-6">
                    Connect Online
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-surface/30 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <social.icon className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <div className="text-text-high font-medium text-lg">
                            {social.label}
                          </div>
                          <div className="text-text-medium">
                            {social.username}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Coffee Chat Note */}
                <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-aurora-primary/10 to-aurora-secondary/10 border-aurora-primary/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-aurora-secondary/20 rounded-lg flex items-center justify-center">
                      <Coffee className="w-6 h-6 text-aurora-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-sora font-bold text-text-high mb-2">
                        Coffee Chat in Berlin/Potsdam?
                      </h3>
                      <p className="text-text-medium leading-relaxed">
                        Living in the area? I know the best coffee spots! Let's grab a cup at 
                        Coffee Fellows in Potsdam or any cozy cafe in Berlin and chat about data, tech, 
                        or even my latest cycling routes around Sanssouci. Fair warning: I might 
                        accidentally slip into Telugu when I get excited about a project! 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-20 bg-surface/30">
        <div className="container-custom mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-16 h-16 text-aurora-primary mx-auto mb-6" />
            <h2 className="text-3xl font-sora font-bold text-text-high mb-6">
              Current Availability
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-text-high mb-2">Consulting</h3>
                <p className="text-text-medium text-sm">
                  Available for data science and analytics consulting projects
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-text-high mb-2">Research</h3>
                <p className="text-text-medium text-sm">
                  Open to academic collaborations and research partnerships
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-text-high mb-2">Full-time</h3>
                <p className="text-text-medium text-sm">
                  Seeking full-time opportunities post-graduation (June 2025)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}