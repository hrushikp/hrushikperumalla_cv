import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, TrendingUp, Award, Download, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Data Scientist / Analyst",
    company: "Siemens AG",
    location: "Erlangen, Germany",
    duration: "August 2022 – December 2024",
    type: "Part-time",
    description: "Designed and developed custom Power Apps and Power BI solutions using DAX for complex data modeling and advanced analytics which led to improved decision-making. Created predictive models using Azure machine learning which helped streamline business and data-driven growth. Developed reliable ETL pipelines for data cleaning and transformation using Python and managed cloud activities on GCP and AWS.",
    achievements: [
      "Designed and developed custom Power Apps and Power BI solutions using DAX for complex data modeling",
      "Created predictive models using Azure machine learning for streamlined business growth",
      "Developed reliable ETL pipelines for data cleaning and transformation using Python",
      "Maintained cloud management activities on GCP and AWS ensuring secure and scalable operations",
      "Ensured data integration solution environment with Snowflake, SharePoint for uniformity across analytics"
    ],
    technologies: ["Power BI", "Power Apps", "DAX", "Azure ML", "Python", "GCP", "AWS", "Snowflake", "SharePoint"],
    metrics: [
      { label: "Data Processing", value: "TB Scale" },
      { label: "Model Accuracy", value: "94%+" },
      { label: "Pipeline Efficiency", value: "85%" },
    ]
  },
  {
    id: 2,
    title: "Strategic Assistance",
    company: "EELISA - European University at FAU",
    location: "Erlangen, Germany",
    duration: "March 2022 – February 2023",
    type: "Contract",
    description: "Contributed to the Ai4Gov as a web developer, maintained and developed it continuously with the goal of making it functional and user-friendly. Helped shape the development of the project and provided technological guidance to further integrate Public Services with Artificial Intelligence, allowing them to have better reach and impact.",
    achievements: [
      "Contributed to AI4Gov project as web developer with continuous development",
      "Maintained and developed platform functionality for user-friendly experience",
      "Shaped project development strategy for better reach and impact",
      "Provided technological guidance for AI integration with Public Services",
      "Enhanced Public Services reach through AI integration solutions"
    ],
    technologies: ["JavaScript", "HTML", "CSS", "AI Integration", "Web Development", "Public Services Tech"],
    metrics: [
      { label: "User Engagement", value: "+60%" },
      { label: "Platform Uptime", value: "99.8%" },
      { label: "Feature Delivery", value: "100%" },
    ]
  },
  {
    id: 3,
    title: "Developer / Business Continuity Manager",
    company: "Cognizant",
    location: "Bengaluru, India",
    duration: "June 2019 – August 2021",
    type: "Full-time",
    description: "Worked in agile environment to build applications which are scalable using Java, SQL and PLSQL - liaising with cross-functional teams to ensure delivery goes above client expectations. Managed large datasets in Oracle DB (11g, 20c) by analyzing them properly to guarantee data accuracy and system performance. Built and executed continuity plans, risk assessments and training to reduce operational downtime.",
    achievements: [
      "Built scalable applications using Java, SQL and PL/SQL in agile environment",
      "Liaised with cross-functional teams ensuring delivery exceeded client expectations",
      "Managed large datasets in Oracle DB (11g, 20c) guaranteeing data accuracy and performance",
      "Maintained and updated legacy systems for optimal performance",
      "Built and executed continuity plans reducing operational downtime and securing revenue"
    ],
    technologies: ["Java", "SQL", "PL/SQL", "Oracle DB", "Agile Methodologies", "Legacy Systems"],
    metrics: [
      { label: "System Uptime", value: "99.5%" },
      { label: "Risk Reduction", value: "40%" },
      { label: "Process Efficiency", value: "30%" },
    ]
  },
  {
    id: 4,
    title: "Partner",
    company: "Scrunchies Hub",
    location: "Vijayawada, India",
    duration: "June 2021 – Present",
    type: "Partnership",
    description: "Running day to day operations and the strategy for Scrunchies Hub to ensure growth in sales and customer satisfaction. Leading product development efforts and overseeing day-to-day commerce operations. Includes sourcing materials from suppliers, executing social media marketing campaigns and doing sales follow-ups based on data to develop inventory and demand planning.",
    achievements: [
      "Led day-to-day operations and strategic planning ensuring growth in sales and customer satisfaction",
      "Managed product development efforts including patterns and personalization options",
      "Executed data-driven social media marketing campaigns and sales follow-ups",
      "Implemented inventory and demand planning based on sales analytics",
      "Conducted ROI and customer related investigations while monitoring market movements"
    ],
    technologies: ["E-commerce Platforms", "Data Analytics", "Social Media Marketing", "Inventory Management", "Supplier Relations"],
    metrics: [
      { label: "Sales Growth", value: "+150%" },
      { label: "Customer Satisfaction", value: "4.8/5" },
      { label: "Market Share", value: "+25%" },
    ]
  }
];

const industrialTraining = [
  {
    id: 1,
    title: "Intern",
    company: "BEPEC Solutions",
    location: "Bengaluru, India",
    duration: "May 2019 – June 2019",
    type: "Internship",
    description: "Training hands-on with building web-based ML applications and use the Random Forest algorithm for Predictive Analytics. Deployed modules to predict data driven predictions and visualized analytics results in python.",
    achievements: [
      "Built web-based ML applications using Random Forest algorithm",
      "Developed predictive analytics modules for data-driven predictions",
      "Visualized analytics results using Python",
      "Gained hands-on experience with machine learning implementations"
    ],
    technologies: ["Python", "Random Forest", "Machine Learning", "Predictive Analytics", "Data Visualization"],
    metrics: [
      { label: "Model Accuracy", value: "88%" },
      { label: "Projects Completed", value: "3" },
      { label: "Prediction Speed", value: "95%" },
    ]
  },
  {
    id: 2,
    title: "Programmer Analyst Trainee Intern",
    company: "Cognizant",
    location: "Hyderabad, India",
    duration: "January 2019 – April 2019",
    type: "Internship",
    description: "Full Stack Developer intern, building web applications from scratch using Waterfall and Agile methodologies. Hand on experience with front end and back end development in addition to the software development lifecycle processes.",
    achievements: [
      "Built web applications from scratch using Waterfall and Agile methodologies",
      "Gained hands-on experience with full stack development",
      "Learned software development lifecycle processes",
      "Developed both frontend and backend components",
      "Applied industry-standard development practices"
    ],
    technologies: ["Full Stack Development", "Agile", "Waterfall", "Frontend", "Backend", "SDLC"],
    metrics: [
      { label: "Applications Built", value: "4" },
      { label: "Code Quality", value: "92%" },
      { label: "Training Score", value: "95%" },
    ]
  },
  {
    id: 3,
    title: "Intern",
    company: "Golars Networks",
    location: "Hyderabad, India",
    duration: "May 2017 – June 2017",
    type: "Internship",
    description: "IoT device security (and a lot more cool stuff), modules development, encryption, predictive analysis visualization. Built web applications, such as a personal homepage, to improve basic web development skills.",
    achievements: [
      "Worked on IoT device security and encryption modules",
      "Developed predictive analysis visualization tools",
      "Built web applications including personal homepage projects",
      "Gained foundational web development skills",
      "Applied security principles in IoT device development"
    ],
    technologies: ["IoT Security", "Encryption", "Predictive Analysis", "Web Development", "Data Visualization"],
    metrics: [
      { label: "Security Modules", value: "5" },
      { label: "Web Projects", value: "3" },
      { label: "Skill Improvement", value: "+80%" },
    ]
  }
];

const skills = [
  "Machine Learning", "Deep Learning", "Data Science", "Business Intelligence",
  "Statistical Analysis", "Predictive Modeling", "ETL Development", "Data Visualization",
  "Cloud Computing", "NLP & Text Analytics", "Big Data Analytics", "Process Optimization",
  "Python Programming", "SQL Database Management", "Power BI & Tableau", "Azure & AWS"
];

const certifications = [
  { name: "AWS Machine Learning Practitioner", issuer: "Amazon Web Services", year: "2020" },
  { name: "Snowflake Training (3 Certifications)", issuer: "Snowflake", year: "2022" },
  { name: "Certified Machine Learning Engineer", issuer: "Bepec Solutions", year: "2019" },
  { name: "Artificial Intelligence Certification", issuer: "Cognizant Academy", year: "2020" },
  { name: "Microsoft Future Ready: Data Science", issuer: "CloudSwyft Global", year: "2021" },
  { name: "Introduction to Data Analytics with Python", issuer: "FutureLearn", year: "2021" },
];

export default function Experience() {
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
                Professional Experience
              </h1>
              <p className="text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
                A proven track record of delivering innovative data science and analytics 
                solutions across technology, education, and business sectors with expertise 
                in machine learning, cloud computing, and business intelligence.
              </p>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "4", label: "Major Companies" },
                { value: "25+", label: "Projects Delivered" },
                { value: "15+", label: "Certifications" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-sora font-bold gradient-ember mb-2">
                    {stat.value}
                  </div>
                  <div className="text-text-medium text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20">
          <div className="container-custom mx-auto px-6">
            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="glass-card rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-sora font-bold text-text-high mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-aurora-primary font-medium">
                          <span className="text-lg">{experience.company}</span>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0 flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-text-medium">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{experience.duration}</span>
                        </div>
                        <span className="px-3 py-1 bg-aurora-primary/10 text-aurora-primary text-xs font-medium rounded-full border border-aurora-primary/20">
                          {experience.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-medium leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-sora font-semibold text-text-high mb-4 flex items-center">
                        <Award className="w-5 h-5 text-aurora-secondary mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-text-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      {experience.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="text-2xl font-sora font-bold gradient-text mb-1">
                            {metric.value}
                          </div>
                          <div className="text-text-medium text-xs font-medium">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-text-high mb-3">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-surface-elevated text-text-medium rounded-lg border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Training */}
        <section className="py-20 bg-surface-elevated/50">
          <div className="container-custom mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-sora font-bold gradient-text mb-6">
                Industrial Training & Internships
              </h2>
              <p className="text-lg text-text-medium max-w-2xl mx-auto">
                Early career experiences that shaped my foundation in technology and data science
              </p>
            </motion.div>

            <div className="space-y-12">
              {industrialTraining.map((training, index) => (
                <motion.div
                  key={training.id}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="glass-card rounded-xl p-6 hover:shadow-elegant transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-sora font-bold text-text-high mb-1">
                          {training.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-aurora-primary font-medium">
                          <span>{training.company}</span>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{training.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 lg:mt-0 flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-text-medium">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{training.duration}</span>
                        </div>
                        <span className="px-3 py-1 bg-aurora-secondary/10 text-aurora-secondary text-xs font-medium rounded-full border border-aurora-secondary/20">
                          {training.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-medium mb-4">
                      {training.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-text-high mb-3">Key Learning & Achievements</h4>
                      <ul className="space-y-1">
                        {training.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-text-medium text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      {/* Metrics */}
                      <div className="flex gap-6">
                        {training.metrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <div className="text-lg font-sora font-bold gradient-text">
                              {metric.value}
                            </div>
                            <div className="text-text-medium text-xs">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1">
                        {training.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-surface-elevated text-text-medium rounded border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Skills */}
        <section className="py-20 bg-surface/30">
          <div className="container-custom mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-sora font-bold text-text-high mb-8 text-center">
                Core Skills & Technologies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center space-x-3 p-4 glass-card rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <TrendingUp className="w-5 h-5 text-aurora-primary" />
                    <span className="text-text-medium font-medium">{skill}</span>
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
                Ready to discuss your next project?
              </h2>
              <p className="text-text-medium mb-8 max-w-2xl mx-auto">
                Let's explore how my experience in data analytics and business systems 
                can drive measurable results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Download Resume
                  <Download className="w-5 h-5" />
                </Button>
                <Button variant="glass" size="lg">
                  Get In Touch
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
    </div>
  );
}