import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  BarChart3, 
  Globe, 
  Users, 
  Award,
  ExternalLink,
  Download,
  Zap,
  Target,
  Book,
  Languages
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "aurora-primary",
    skills: [
      { name: "Python", level: 95, description: "NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn" },
      { name: "SQL", level: 90, description: "Advanced queries, optimization, database design" },
      { name: "Java", level: 85, description: "Full-stack development, enterprise applications" },
      { name: "C Programming", level: 80, description: "System programming, embedded systems" },
      { name: "Julia", level: 75, description: "High-performance computing, numerical analysis" },
      { name: "HTML", level: 85, description: "Semantic markup, web standards" },
      { name: "CSS", level: 85, description: "Responsive design, modern styling" },
      { name: "XML", level: 70, description: "Data markup, configuration files" },
      { name: "R", level: 80, description: "Statistical analysis, data visualization" }
    ]
  },
  {
    title: "Data Science & Analytics",
    icon: Brain,
    color: "aurora-secondary",
    skills: [
      { name: "Machine Learning", level: 95, description: "Supervised/Unsupervised learning, model optimization" },
      { name: "Deep Learning", level: 85, description: "Neural networks, CNNs, LSTMs" },
      { name: "NLP", level: 88, description: "Text processing, sentiment analysis, LLMs" },
      { name: "Computer Vision", level: 80, description: "Image processing, object detection" },
      { name: "Time Series", level: 85, description: "Forecasting, trend analysis" },
      { name: "Statistical Analysis", level: 90, description: "Hypothesis testing, regression analysis" },
      { name: "DAX", level: 88, description: "Power BI formulas, complex calculations" }
    ]
  },
  {
    title: "Cloud & Data Engineering",
    icon: Cloud,
    color: "aurora-accent",
    skills: [
      { name: "Azure", level: 85, description: "ML services, data pipelines, cloud deployment" },
      { name: "AWS", level: 80, description: "EC2, S3, ML services" },
      { name: "GCP", level: 75, description: "BigQuery, AI Platform" },
      { name: "Snowflake", level: 88, description: "Data warehousing, analytics" },
      { name: "ETL Pipelines", level: 90, description: "Data cleaning, transformation, automation" },
      { name: "Docker", level: 75, description: "Containerization, deployment" }
    ]
  },
  {
    title: "DevOps & CI/CD",
    icon: Zap,
    color: "status-warning",
    skills: [
      { name: "CI/CD Pipelines", level: 85, description: "Automated testing, deployment workflows" },
      { name: "Git & GitHub", level: 90, description: "Version control, collaboration workflows" },
      { name: "Jenkins", level: 75, description: "Build automation, continuous integration" },
      { name: "Docker", level: 75, description: "Containerization, microservices" },
      { name: "Kubernetes", level: 70, description: "Container orchestration, scaling" },
      { name: "Infrastructure as Code", level: 75, description: "Terraform, CloudFormation" }
    ]
  },
  {
    title: "Analytics & Visualization",
    icon: BarChart3,
    color: "status-success",
    skills: [
      { name: "Power BI", level: 92, description: "Advanced DAX, custom visualizations" },
      { name: "Tableau", level: 88, description: "Interactive dashboards, storytelling" },
      { name: "Excel", level: 95, description: "Pivot tables, VBA, advanced formulas" },
      { name: "Matplotlib/Seaborn", level: 90, description: "Custom plots, statistical visualization" },
      { name: "Streamlit", level: 85, description: "Interactive web apps for ML models" },
      { name: "Business Intelligence", level: 90, description: "KPI design, performance metrics" }
    ]
  },
  {
    title: "Hardware & IoT",
    icon: Target,
    color: "status-info",
    skills: [
      { name: "Arduino", level: 80, description: "Microcontroller programming, sensor integration" },
      { name: "Aris", level: 70, description: "Business process modeling, enterprise architecture" },
      { name: "Raspberry Pi", level: 75, description: "IoT projects, embedded Linux" },
      { name: "Embedded Systems", level: 75, description: "Low-level programming, hardware interfacing" }
    ]
  }
];

const tools = [
  "Anaconda", "Jupyter", "PyCharm", "VS Code", "GitHub", "Docker",
  "Figma", "StarUML", "Oracle DB", "MySQL", "PostgreSQL", 
  "Salesforce", "Power Apps", "SharePoint", "XAMPP"
];

const certifications = [
  {
    title: "Innovation & Leadership course",
    issuer: "EELISA - European University",
    date: "2022",
    type: "Leadership",
    verified: true
  },
  {
    title: "Snowflake Training (3 Certifications)",
    issuer: "Snowflake Inc.",
    date: "Sep 2022",
    type: "Data Platform",
    verified: true,
    description: "Hands on essentials in Data Applications, Data sharing, Data warehousing"
  },
  {
    title: "AWS Machine Learning Practitioner",
    issuer: "Amazon Web Services",
    date: "Dec 2020",
    type: "Cloud Certification",
    verified: true
  },
  {
    title: "Artificial Intelligence Certification",
    issuer: "Cognizant Academy",
    date: "Aug 2020",
    type: "AI Certification",
    verified: true
  },
  {
    title: "Certified Jr. Developer/App Analyst AD & AVM",
    issuer: "Cognizant Academy",
    date: "Jan 2020",
    type: "Development",
    verified: true
  },
  {
    title: "Certified Machine Learning Engineer",
    issuer: "Bepec Solutions",
    date: "May 2019",
    type: "ML Certification",
    verified: true
  },
  {
    title: "Natural Language Processing Certification",
    issuer: "KL University",
    date: "May 2018",
    type: "NLP",
    verified: true
  },
  {
    title: "Data Science Research Methods Using Python",
    issuer: "CloudSwyft Global Systems",
    date: "2020",
    type: "Research",
    verified: true
  },
  {
    title: "Introduction to Data Analytics with Python",
    issuer: "FutureLearn",
    date: "2020",
    type: "Analytics",
    verified: true
  },
  {
    title: "Introduction to Data Science for Business",
    issuer: "FutureLearn",
    date: "2020",
    type: "Business Analytics",
    verified: true
  }
];

const workshops = [
  {
    title: "Seminar on 'Big Data & Machine Learning'",
    organizer: "Ecovation Solutions Pvt.Ltd at KL University",
    date: "Feb 2018",
    type: "Seminar"
  },
  {
    title: "Workshop on 'AI, Big Data & Machine Learning'",
    organizer: "KL University",
    date: "Feb 2018",
    type: "Workshop"
  }
];

const languages = [
  { name: "English", level: "C1 (Proficient)", progress: 90 },
  { name: "German", level: "A2 (Basic)", progress: 40 },
  { name: "Telugu", level: "Native", progress: 100 }
];

const softSkills = [
  "Analytical Thinking", "Problem Solving", "Data-Driven Decision Making",
  "Stakeholder Communication", "Business Strategy Translation", "Cross-Functional Collaboration",
  "Agile Methodology", "Project Management", "Technical Leadership",
  "Research & Development", "Statistical Reasoning", "Presentation Skills",
  "Risk Assessment", "Business Continuity Planning", "Client Relationship Management",
  "Technical Documentation", "Training & Mentoring", "Innovation Management"
];

export default function Skills() {
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
              Skills & Expertise
            </h1>
            <p className="text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
              From my first "Hello World" in C during college to building production ML pipelines 
              at Siemens—here's what I've picked up along the way. Some skills learned through 
              countless Stack Overflow searches, others through good old trial and error!
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {[
              { icon: Target, value: "6+", label: "Years Experience" },
              { icon: Award, value: "8+", label: "Certifications" },
              { icon: Zap, value: "15+", label: "Technologies" },
              { icon: Book, value: "3", label: "Languages" }
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

      {/* Skills Categories */}
      <section className="py-20">
        <div className="container-custom mx-auto px-6">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-background" />
                  </div>
                  <h2 className="text-3xl font-sora font-bold text-text-high">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="glass-card rounded-xl p-6 hover:shadow-glow transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-sora font-semibold text-text-high">
                          {skill.name}
                        </h3>
                        <span className="text-aurora-primary font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="mb-3 h-2" 
                      />
                      <p className="text-text-medium text-sm">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-surface/30">
        <div className="container-custom mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-sora font-bold text-text-high mb-4">
              Tools & Platforms
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto">
              Technologies and tools I work with regularly across different projects and environments.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                className="px-4 py-2 bg-surface rounded-lg border border-border text-text-high font-medium hover:border-aurora-primary/40 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                viewport={{ once: true }}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container-custom mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-sora font-bold text-text-high mb-4">
              Certifications & Training
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto">
              Professional certifications that validate my expertise across different domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="glass-card rounded-xl p-6 hover:shadow-glow transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className="w-8 h-8 text-aurora-primary" />
                  {cert.verified && (
                    <span className="px-2 py-1 bg-status-success/10 text-status-success text-xs font-medium rounded-full border border-status-success/20">
                      Verified
                    </span>
                  )}
                </div>
                
                <h3 className="font-sora font-semibold text-text-high mb-2 leading-tight">
                  {cert.title}
                </h3>
                
                <p className="text-aurora-primary font-medium mb-2">
                  {cert.issuer}
                </p>
                
                {cert.description && (
                  <p className="text-text-medium text-sm mb-3">
                    {cert.description}
                  </p>
                )}
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-medium">{cert.date}</span>
                  <span className="px-2 py-1 bg-aurora-accent/10 text-aurora-accent rounded-md border border-aurora-accent/20">
                    {cert.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Workshops & Seminars */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-sora font-bold text-text-high mb-8 text-center">
              Workshops & Seminars
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={workshop.title}
                  className="glass-card rounded-xl p-6 hover:shadow-glow transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <Book className="w-6 h-6 text-aurora-secondary mt-1" />
                    <div>
                      <h4 className="font-sora font-semibold text-text-high mb-2 leading-tight">
                        {workshop.title}
                      </h4>
                      <p className="text-aurora-primary font-medium mb-2">
                        {workshop.organizer}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-medium">{workshop.date}</span>
                        <span className="px-2 py-1 bg-aurora-secondary/10 text-aurora-secondary rounded-md border border-aurora-secondary/20">
                          {workshop.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Languages & Soft Skills */}
      <section className="py-20 bg-surface/30">
        <div className="container-custom mx-auto px-6">
          
          {/* Languages */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-8 justify-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Languages className="w-6 h-6 text-background" />
              </div>
              <h2 className="text-3xl font-sora font-bold text-text-high">
                Languages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  className="glass-card rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-sora font-semibold text-text-high">
                      {lang.name}
                    </h3>
                    <span className="text-aurora-primary font-medium">
                      {lang.level}
                    </span>
                  </div>
                  <Progress value={lang.progress} className="h-2" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-8 justify-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-background" />
              </div>
              <h2 className="text-3xl font-sora font-bold text-text-high">
                Soft Skills
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="glass-card rounded-lg p-4 hover:border-aurora-primary/40 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-text-high font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
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
              Ready to Collaborate?
            </h2>
            <p className="text-text-medium mb-8 max-w-2xl mx-auto">
              Whether you need data science expertise, analytics consulting, or technical leadership, 
              I'm here to help bring your projects to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Discuss a Project
                <ExternalLink className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="lg">
                Download Resume
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}