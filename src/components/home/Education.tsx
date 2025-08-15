import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Data Science, AI, Digital Business",
    institution: "University of Potsdam",
    location: "Potsdam, Germany",
    period: "2023 - 2025",
    status: "Completed",
    gpa: "2.3 (German Scale)",
    highlights: [
      "Specialization in Machine Learning and Statistical Computing",
      "Advanced coursework in Deep Learning and Neural Networks",
      "Thesis: Predictive Analytics in Business Intelligence",
      "Research focus on Time Series Forecasting and NLP"
    ],
    courses: [
      "Advanced Machine Learning",
      "Deep Learning & Neural Networks", 
      "Statistical Computing with R",
      "Business Intelligence Systems",
      "Data Mining & Knowledge Discovery",
      "Computational Statistics"
    ]
  },
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "KL University (Koneru Lakshmaiah Education Foundation)",
    location: "Guntur, India",
    period: "2015 - 2019",
    status: "Completed",
    gpa: "7.7/10 CGPA",
    highlights: [
      "Graduated with Distinction in Computer Science",
      "Published research in IoT Security (IJITEE Journal)",
      "Led multiple student technical projects",
      "Active participant in coding competitions and hackathons"
    ],
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Web Technologies"
    ]
  }
];

const achievements = [
  {
    title: "Research Publication",
    year: "2021", 
    description: "Published paper on IoT Security Framework in IJITEE Journal"
  },
  {
    title: "Innovation Leadership Course",
    year: "2022",
    description: "Completed at EELISA - European University Alliance"
  }
];

export default function Education() {
  return (
    <section className="py-20">
      <div className="container-custom mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-sora font-bold gradient-text mb-6">
            Education Journey
          </h2>
          <p className="text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
            From curious engineering student in India to pursuing advanced data science in Germany—
            each step shaped my analytical mindset and passion for turning data into insights.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-12 mb-20">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  {/* Institution Icon */}
                  <div className="flex-shrink-0 mb-6 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-background" />
                    </div>
                  </div>

                  {/* Education Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-sora font-bold text-text-high mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center space-x-4 text-aurora-primary font-medium mb-2">
                          <span>{edu.institution}</span>
                          {edu.status === "Current" && (
                            <span className="px-3 py-1 bg-status-success/10 text-status-success text-sm rounded-full border border-status-success/20">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-text-medium">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0 text-right">
                        <div className="text-lg font-semibold gradient-ember">
                          {edu.gpa}
                        </div>
                        <div className="text-text-medium text-sm">
                          GPA/CGPA
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-lg font-sora font-semibold text-text-high mb-3">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Award className="w-4 h-4 text-aurora-primary mt-1 flex-shrink-0" />
                            <span className="text-text-medium">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Coursework */}
                    <div>
                      <h4 className="text-lg font-sora font-semibold text-text-high mb-3">
                        Relevant Coursework
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {edu.courses.map((course, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <BookOpen className="w-3 h-3 text-aurora-accent" />
                            <span className="text-text-medium text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-sora font-bold text-text-high mb-8 text-center">
            Academic Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="glass-card rounded-xl p-6 text-center hover:shadow-glow transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-background" />
                </div>
                <h4 className="font-sora font-semibold text-text-high mb-2">
                  {achievement.title}
                </h4>
                <div className="text-aurora-primary font-medium mb-2">
                  {achievement.year}
                </div>
                <p className="text-text-medium text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}