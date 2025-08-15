import { Heart, Github, Linkedin, Mail, Instagram } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
  ],
  resources: [
    { name: "Publications", href: "/publications" },
    { name: "Writing", href: "/writing" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/hrushikperumalla", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/hrushikperumalla", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/hrushik_perumalla", label: "Instagram" },
  { icon: Mail, href: "mailto:hrushikperumalla@gmail.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-card border-t border-aurora-primary/20 mt-20">
      <div className="container-custom mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg">H</span>
              </div>
              <span className="text-text-high font-sora font-semibold text-lg">
                Hrushik Perumalla
              </span>
            </div>
            <p className="text-text-medium mb-6 max-w-md">
              Data Scientist & Analyst specializing in machine learning, 
              cloud computing, and business intelligence solutions across 
              technology, education, and business sectors.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-medium hover:text-aurora-primary transition-colors duration-200 p-2 rounded-lg hover:bg-surface-elevated/50"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-text-high font-sora font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-medium hover:text-aurora-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource Links */}
          <div>
            <h3 className="text-text-high font-sora font-semibold mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-medium hover:text-aurora-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-text-medium text-sm mb-4 md:mb-0">
            © {currentYear} Hrushik Perumalla. All rights reserved.
          </p>
          <p className="text-text-medium text-sm text-center md:text-right">
            The information and content provided on this page are for informational purposes only. 
            Unauthorized duplication, distribution, or use of this material without prior consent is strictly prohibited. 
            Thank you for your understanding and cooperation.
          </p>
        </div>
      </div>
    </footer>
  );
}