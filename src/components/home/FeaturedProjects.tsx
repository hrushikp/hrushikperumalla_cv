import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gym Application",
    description: "Machine learning-based application hosted on Heroku to predict personalized exercise and diet plans using user input data such as age, weight, and height.",
    image: "/images/projects/gym-app.jpg",
    tags: ["ML", "Python", "Heroku", "Personalization"],
    metrics: [
      { label: "User Accuracy", value: "92%" },
      { label: "Engagement", value: "+68%" },
    ],
    links: {
      demo: "#",
      github: "#",
    }
  },
  {
    id: 2,
    title: "House Price Prediction",
    description: "Machine learning model to predict house prices based on various features such as location, size, and amenities with advanced data preprocessing and feature engineering.",
    image: "/images/projects/house-prediction.jpg",
    tags: ["ML", "Python", "Real Estate", "Regression"],
    metrics: [
      { label: "Prediction Accuracy", value: "87%" },
      { label: "Features Used", value: "25+" },
    ],
    links: {
      demo: "#",
      github: "#",
    }
  },
  {
    id: 3,
    title: "Drowsiness Detection System",
    description: "Real-time drowsiness detection system using computer vision techniques with OpenCV and machine learning to monitor driver alertness and prevent accidents.",
    image: "/images/projects/drowsiness-detection.jpg",
    tags: ["Computer Vision", "OpenCV", "Safety", "Real-time"],
    metrics: [
      { label: "Detection Rate", value: "96%" },
      { label: "Response Time", value: "0.3s" },
    ],
    links: {
      demo: "#",
      github: "#",
    }
  },
  {
    id: 4,
    title: "E-commerce Data Analytics",
    description: "Analyzed e-commerce review datasets to extract meaningful insights using NLP, including sentiment analysis and visualization of customer feedback for business decisions.",
    image: "/images/projects/ecommerce-analytics.jpg",
    tags: ["NLP", "Sentiment Analysis", "Business Intelligence", "Visualization"],
    metrics: [
      { label: "Sentiment Accuracy", value: "94%" },
      { label: "Reviews Processed", value: "100K+" },
    ],
    links: {
      demo: "#",
      github: "#",
    }
  },
  {
    id: 5,
    title: "Sales Data Prediction",
    description: "Sales forecasting model using historical sales data with comprehensive data cleaning, feature selection, and predictive modeling for demand planning and inventory management.",
    image: "/images/projects/sales-prediction.jpg",
    tags: ["Forecasting", "Time Series", "Business Analytics", "Python"],
    metrics: [
      { label: "Forecast Accuracy", value: "89%" },
      { label: "Planning Efficiency", value: "+45%" },
    ],
    links: {
      demo: "#",
      github: "#",
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function FeaturedProjects() {
  return (
    <section className="py-20 relative">
      <div className="container-custom mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-text-medium max-w-2xl mx-auto">
            Showcasing innovative machine learning, data science, and analytics projects 
            that demonstrate technical expertise across computer vision, NLP, predictive 
            modeling, and business intelligence domains.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-surface overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-text-medium text-6xl opacity-50">
                    {project.id}
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button variant="glass" size="icon">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button variant="glass" size="icon">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-aurora-primary/10 text-aurora-primary rounded-full border border-aurora-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-sora font-semibold text-text-high mb-3 group-hover:text-aurora-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-medium mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-2xl font-bold gradient-ember">
                        {metric.value}
                      </div>
                      <div className="text-xs text-text-medium font-medium">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-aurora-primary/60 group-hover:text-aurora-primary"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button variant="hero" size="lg">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}