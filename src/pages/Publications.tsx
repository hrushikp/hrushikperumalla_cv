import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Calendar, BookOpen, Users, Award } from "lucide-react";

const publications = [
  {
    id: 1,
    title: "Hybrid approach for securing IOT DEVICES",
    journal: "International Journal of Innovative Technology and Exploring Engineering (IJITEE)",
    volume: "Vol-8, Issue-4",
    year: "2019",
    month: "February",
    type: "Journal Article",
    description: "A comprehensive study on implementing hybrid security approaches for Internet of Things devices, focusing on encryption and device authentication mechanisms.",
    authors: ["Hrushik Perumalla", "et al."],
    keywords: ["IoT Security", "Hybrid Encryption", "Device Authentication", "Cybersecurity"],
    links: {
      view: "#",
      download: "#",
    },
    status: "Published"
  },
  {
    id: 2,
    title: "Leveraging Artificial Intelligence for Sustainable Business Innovation: Advancing Data Management and User Engagement in European Enterprises",
    journal: "European Conference on Digital Innovation",
    volume: "Proceedings 2024",
    year: "2024",
    month: "December",
    type: "Conference Paper",
    description: "Research on implementing AI-driven solutions for sustainable business practices, focusing on data management optimization and enhanced user engagement strategies in European enterprises.",
    authors: ["Hrushik Perumalla", "EELISA Research Team"],
    keywords: ["Artificial Intelligence", "Sustainable Business", "Data Management", "User Engagement", "European Enterprises"],
    links: {
      view: "#",
      download: "#",
    },
    status: "In Press"
  },
  {
    id: 3,
    title: "Emotion Detection in Speech: A Comparative Analysis of CNN-LSTM Hybrid Models Using the EmoDB Dataset",
    journal: "IEEE International Conference on Machine Learning and Applications",
    volume: "Proceedings 2025",
    year: "2025",
    month: "March",
    type: "Conference Paper",
    description: "Comparative analysis of Convolutional Neural Network and Long Short-Term Memory hybrid models for emotion detection in speech using the EmoDB dataset, demonstrating improved accuracy in real-time applications.",
    authors: ["Hrushik Perumalla", "Research Collaborators"],
    keywords: ["Emotion Detection", "CNN-LSTM", "Speech Processing", "Machine Learning", "EmoDB"],
    links: {
      view: "#",
      download: "#",
    },
    status: "Published"
  },
  {
    id: 4,
    title: "Behavioral Competencies in Virtual Teams",
    journal: "Medium - Technology & Business",
    volume: "Online Publication",
    year: "2023",
    month: "September",
    type: "Article",
    description: "An in-depth analysis of behavioral competencies required for effective virtual team management, exploring communication patterns, leadership strategies, and performance optimization in remote work environments.",
    authors: ["Hrushik Perumalla"],
    keywords: ["Virtual Teams", "Behavioral Competencies", "Remote Work", "Team Management", "Leadership"],
    links: {
      view: "#",
      download: "#",
    },
    status: "Published"
  }
];

const stats = [
  { value: "4", label: "Publications", icon: BookOpen },
  { value: "3", label: "Journals", icon: Award },
  { value: "15+", label: "Citations", icon: Users },
  { value: "2025", label: "Latest Publication", icon: Calendar },
];

const researchAreas = [
  "Artificial Intelligence & Machine Learning",
  "IoT Security & Cybersecurity",
  "Data Management & Analytics",
  "Business Innovation & Sustainability",
  "Emotion Detection & Speech Processing",
  "Virtual Team Management",
];

export default function Publications() {
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
              Publications & Research
            </h1>
            <p className="text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
              Contributing to the advancement of technology through peer-reviewed research 
              in artificial intelligence, IoT security, data science, and business innovation.
            </p>
          </motion.div>

          {/* Research Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center glass-card rounded-2xl p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <stat.icon className="w-8 h-8 text-aurora-primary mx-auto mb-3" />
                <div className="text-3xl font-sora font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-text-medium text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20">
        <div className="container-custom mx-auto px-6">
          <div className="space-y-8">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.id}
                className="glass-card rounded-2xl p-8 hover:shadow-glow transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        publication.status === 'Published' 
                          ? 'bg-status-success/10 text-status-success border border-status-success/20'
                          : publication.status === 'In Press'
                          ? 'bg-aurora-secondary/10 text-aurora-secondary border border-aurora-secondary/20'
                          : 'bg-aurora-accent/10 text-aurora-accent border border-aurora-accent/20'
                      }`}>
                        {publication.status}
                      </span>
                      <span className="px-3 py-1 bg-surface-elevated text-text-medium text-xs font-medium rounded-full border border-border">
                        {publication.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-sora font-bold text-text-high mb-3 leading-tight">
                      {publication.title}
                    </h3>
                    
                    <div className="text-aurora-primary font-medium mb-2">
                      {publication.journal}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-text-medium text-sm mb-4">
                      <span>{publication.volume}</span>
                      <span>•</span>
                      <span>{publication.month} {publication.year}</span>
                      <span>•</span>
                      <span>{publication.authors.join(", ")}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mt-4 lg:mt-0">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button variant="glass" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </div>

                <p className="text-text-medium leading-relaxed mb-6">
                  {publication.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-text-high mb-3">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {publication.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 text-xs font-medium bg-aurora-primary/10 text-aurora-primary rounded-lg border border-aurora-primary/20"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-surface/30">
        <div className="container-custom mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-sora font-bold text-text-high mb-6">
              Research Areas
            </h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              My research spans multiple interdisciplinary areas, combining technical innovation 
              with practical business applications.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {researchAreas.map((area, index) => (
              <motion.div
                key={area}
                className="glass-card rounded-xl p-6 text-center hover:border-aurora-primary/40 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-background" />
                </div>
                <h3 className="font-sora font-semibold text-text-high">
                  {area}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-sora font-bold text-text-high mb-6">
              Interested in Collaboration?
            </h2>
            <p className="text-text-medium mb-8 max-w-2xl mx-auto">
              I'm always interested in collaborating on cutting-edge research projects 
              in AI, data science, and technology innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Research Collaboration
                <ExternalLink className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="lg">
                Download CV
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}