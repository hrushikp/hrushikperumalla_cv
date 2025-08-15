import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Search, 
  Filter,
  Target,
  TrendingUp,
  Clock,
  Users,
  Award,
  Brain,
  Database,
  BarChart3,
  Shield
} from "lucide-react";
import { useState } from "react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Personalized Gym Application",
    category: "Machine Learning",
    description: "Developed a comprehensive ML-based fitness application that predicts personalized exercise and diet plans. Using user demographic data (age, weight, height, fitness goals), the system generates customized workout routines and nutrition recommendations.",
    image: "/images/projects/gym-app.jpg",
    tags: ["Python", "Machine Learning", "Heroku", "Flask", "Scikit-learn"],
    metrics: [
      { label: "User Accuracy", value: "92%", icon: Target },
      { label: "User Engagement", value: "+68%", icon: TrendingUp },
      { label: "Response Time", value: "0.8s", icon: Clock }
    ],
    technologies: ["Python", "Scikit-learn", "Flask", "Heroku", "NumPy", "Pandas"],
    challenges: "Creating accurate predictions with limited user input while ensuring scalable deployment",
    outcomes: "Successfully deployed on Heroku with 500+ active users and 92% prediction accuracy",
    duration: "3 months",
    team: "Individual Project",
    links: {
      demo: "#",
      github: "#",
      case_study: "#"
    },
    featured: true
  },
  {
    id: 2,
    title: "Real Estate Price Prediction",
    category: "Data Science",
    description: "Built an advanced machine learning model to predict house prices using comprehensive feature engineering. The model analyzes location data, property characteristics, market trends, and neighborhood amenities to provide accurate price estimates.",
    image: "/images/projects/house-prediction.jpg", 
    tags: ["Python", "Regression", "Feature Engineering", "Real Estate", "API"],
    metrics: [
      { label: "Prediction Accuracy", value: "87%", icon: Target },
      { label: "Features Analyzed", value: "25+", icon: Database },
      { label: "Market Coverage", value: "5 Cities", icon: BarChart3 }
    ],
    technologies: ["Python", "XGBoost", "Random Forest", "Feature Engineering", "API Development"],
    challenges: "Handling diverse property types and regional market variations",
    outcomes: "Achieved 87% prediction accuracy across multiple real estate markets",
    duration: "4 months",
    team: "2 Data Scientists",
    links: {
      demo: "#",
      github: "#", 
      case_study: "#"
    },
    featured: true
  },
  {
    id: 3,
    title: "Real-time Drowsiness Detection",
    category: "Computer Vision",
    description: "Implemented an intelligent safety system using computer vision and machine learning to detect driver drowsiness in real-time. The system monitors facial features and eye movements to prevent accidents caused by fatigue.",
    image: "/images/projects/drowsiness-detection.jpg",
    tags: ["OpenCV", "Computer Vision", "Real-time", "Safety", "Machine Learning"],
    metrics: [
      { label: "Detection Rate", value: "96%", icon: Target },
      { label: "Response Time", value: "0.3s", icon: Clock },
      { label: "False Positives", value: "<2%", icon: Shield }
    ],
    technologies: ["OpenCV", "Python", "CNN", "Facial Recognition", "Real-time Processing"],
    challenges: "Achieving real-time performance while maintaining high accuracy in varying lighting conditions",
    outcomes: "96% detection accuracy with sub-second response time for safety alerts",
    duration: "2 months",
    team: "Individual Project",
    links: {
      demo: "#",
      github: "#",
      case_study: "#"
    },
    featured: true
  },
  {
    id: 4,
    title: "E-commerce Sentiment Analytics",
    category: "NLP",
    description: "Developed a comprehensive NLP solution to analyze customer reviews and extract business insights. The system processes large volumes of e-commerce review data to identify sentiment patterns, product feedback, and customer satisfaction trends.",
    image: "/images/projects/ecommerce-analytics.jpg",
    tags: ["NLP", "Sentiment Analysis", "Business Intelligence", "Text Mining"],
    metrics: [
      { label: "Sentiment Accuracy", value: "94%", icon: Target },
      { label: "Reviews Processed", value: "100K+", icon: Database },
      { label: "Business Insights", value: "50+", icon: Brain }
    ],
    technologies: ["Python", "NLTK", "spaCy", "TextBlob", "Tableau", "AWS"],
    challenges: "Processing multilingual reviews and handling sarcasm/context in text analysis",
    outcomes: "Delivered actionable insights leading to 15% improvement in customer satisfaction",
    duration: "3 months",
    team: "3 Data Scientists + Business Analyst",
    links: {
      demo: "#",
      github: "#",
      case_study: "#"
    },
    featured: false
  },
  {
    id: 5,
    title: "Sales Forecasting Dashboard",
    category: "Analytics",
    description: "Created an end-to-end sales prediction system with comprehensive data cleaning, feature selection, and time series modeling. The solution helps businesses with demand planning, inventory management, and revenue forecasting.",
    image: "/images/projects/sales-prediction.jpg",
    tags: ["Time Series", "Forecasting", "Business Analytics", "Dashboard"],
    metrics: [
      { label: "Forecast Accuracy", value: "89%", icon: Target },
      { label: "Planning Efficiency", value: "+45%", icon: TrendingUp },
      { label: "Cost Reduction", value: "23%", icon: Award }
    ],
    technologies: ["Python", "ARIMA", "Prophet", "Power BI", "SQL", "Time Series Analysis"],
    challenges: "Handling seasonal variations and external market factors affecting sales patterns",
    outcomes: "Improved demand planning accuracy by 45% and reduced inventory costs by 23%",
    duration: "4 months",
    team: "2 Data Scientists + Business Analyst",
    links: {
      demo: "#",
      github: "#",
      case_study: "#"
    },
    featured: false
  },
  {
    id: 6,
    title: "IoT Device Security Framework",
    category: "Cybersecurity",
    description: "Research and development of a hybrid security approach for IoT devices, implementing advanced encryption and authentication mechanisms. Published in IJITEE journal with focus on scalable security solutions.",
    image: "/images/projects/iot-security.jpg",
    tags: ["IoT", "Cybersecurity", "Encryption", "Research", "Authentication"],
    metrics: [
      { label: "Security Score", value: "98%", icon: Shield },
      { label: "Performance Impact", value: "<5%", icon: Clock },
      { label: "Device Types", value: "10+", icon: Database }
    ],
    technologies: ["Python", "Cryptography", "IoT Protocols", "Security Testing", "Research"],
    challenges: "Balancing security strength with device performance limitations",
    outcomes: "Published research paper and implemented framework for 10+ IoT device types",
    duration: "6 months",
    team: "Research Team (4 members)",
    links: {
      demo: "#",
      github: "#",
      case_study: "#"
    },
    featured: false
  }
];

const categories = ["All", "Machine Learning", "Data Science", "Computer Vision", "NLP", "Analytics", "Cybersecurity"];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredProjects = projects.filter(project => project.featured);

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
              Project Portfolio
            </h1>
            <p className="text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
              These are the projects I'm genuinely proud of—some born from curiosity, others from 
              real problems that kept me up at night. Each one taught me something new, 
              and yes, there were plenty of debugging sessions with way too much coffee!
            </p>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {[
              { icon: Target, value: "6", label: "Total Projects" },
              { icon: Award, value: "3", label: "Featured Works" },
              { icon: TrendingUp, value: "92%", label: "Avg Accuracy" },
              { icon: Users, value: "500+", label: "Users Impacted" }
            ].map((stat, index) => (
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

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container-custom mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-sora font-bold text-text-high mb-6">
              Featured Projects
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto">
              Highlighting my most impactful and technically challenging projects that demonstrate 
              expertise across different domains of data science and machine learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Project Header */}
                <div className="relative h-48 bg-gradient-surface overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-text-high text-6xl opacity-30 font-bold">
                      {project.id.toString().padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/80 text-aurora-primary text-sm font-medium rounded-full border border-aurora-primary/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button variant="glass" size="icon">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="glass" size="icon">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-sora font-bold text-text-high mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-medium mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <metric.icon className="w-5 h-5 text-aurora-primary mx-auto mb-2" />
                        <div className="text-lg font-bold gradient-ember">
                          {metric.value}
                        </div>
                        <div className="text-xs text-text-medium font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-aurora-primary/10 text-aurora-primary rounded-full border border-aurora-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group">
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-20 bg-surface/30">
        <div className="container-custom mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-sora font-bold text-text-high mb-6">
              All Projects
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto mb-8">
              Explore my complete portfolio of data science and analytics projects. 
              Use the search and filters to find specific technologies or domains.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-medium w-5 h-5" />
              <Input
                placeholder="Search projects, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-surface/50 border-border"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "hero" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Project Image */}
                <div className="relative h-40 bg-gradient-surface overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-15" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-text-medium text-4xl opacity-40 font-bold">
                      {project.id.toString().padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-background/70 text-aurora-primary text-xs font-medium rounded-md border border-aurora-primary/30">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Award className="w-5 h-5 text-aurora-secondary" />
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-lg font-sora font-semibold text-text-high mb-3 group-hover:text-aurora-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-medium text-sm mb-4 leading-relaxed">
                    {project.description.length > 120 
                      ? `${project.description.substring(0, 120)}...` 
                      : project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-aurora-primary/10 text-aurora-primary rounded-md border border-aurora-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-surface text-text-medium rounded-md border border-border">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Key Metric */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {React.createElement(project.metrics[0].icon, { className: "w-4 h-4 text-aurora-primary" })}
                      <span className="text-sm text-text-medium">{project.metrics[0].label}</span>
                    </div>
                    <span className="text-sm font-bold gradient-ember">
                      {project.metrics[0].value}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View
                    </Button>
                    <Button variant="glass" size="sm">
                      <Github className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Filter className="w-16 h-16 text-text-medium mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-sora font-semibold text-text-high mb-2">
                No projects found
              </h3>
              <p className="text-text-medium">
                Try adjusting your search terms or category filters.
              </p>
            </motion.div>
          )}
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
              Interested in Similar Work?
            </h2>
            <p className="text-text-medium mb-8 max-w-2xl mx-auto">
              Whether you need data science consulting, custom analytics solutions, or ML model development, 
              I'm ready to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="lg">
                View Case Studies
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}