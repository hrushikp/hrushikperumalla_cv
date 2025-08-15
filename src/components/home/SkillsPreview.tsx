import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    name: "Data Science & ML",
    skills: ["Python", "Machine Learning", "Deep Learning", "Statistical Analysis", "Predictive Modeling"],
    proficiency: 95,
    color: "aurora-primary",
  },
  {
    name: "Data Engineering & Cloud",
    skills: ["ETL/ELT", "Azure", "AWS", "GCP", "Snowflake", "Oracle DB"],
    proficiency: 88,
    color: "aurora-secondary",
  },
  {
    name: "Business Intelligence",
    skills: ["Power BI", "Tableau", "DAX", "SQL", "Data Visualization"],
    proficiency: 92,
    color: "aurora-accent",
  },
  {
    name: "AI & Advanced Analytics",
    skills: ["NLP", "Computer Vision", "LLMs", "Time Series", "Azure ML"],
    proficiency: 90,
    color: "status-success",
  },
];

const achievements = [
  { label: "Programming Languages", value: "8+" },
  { label: "Cloud Platforms", value: "3" },
  { label: "Years Experience", value: "5+" },
];

export default function SkillsPreview() {
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
            Technical Expertise
          </h2>
          <p className="text-xl text-text-medium max-w-2xl mx-auto">
            A comprehensive skill set spanning data science, machine learning, and cloud 
            computing with proven expertise in delivering scalable analytics solutions 
            and AI-powered applications across multiple domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Skills Radar Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="space-y-8">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-sora font-semibold text-text-high">
                        {category.name}
                      </h3>
                      <div className="text-aurora-primary font-mono text-sm font-semibold">
                        {category.proficiency}%
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-surface-elevated text-text-medium rounded-lg border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-surface-elevated rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute left-0 top-0 h-full bg-gradient-primary rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.proficiency}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <motion.div
              className="absolute -top-4 -right-4 glass-card rounded-xl p-4 border border-aurora-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                opacity: { delay: 0.8, duration: 0.5 },
                scale: { delay: 0.8, duration: 0.5 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-aurora-primary" />
                <div>
                  <div className="text-aurora-primary font-mono font-bold">94%</div>
                  <div className="text-xs text-text-medium">Avg. Accuracy</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Content */}
            <div>
              <h3 className="text-2xl font-sora font-bold text-text-high mb-4">
                Turning data into{" "}
                <span className="gradient-ember">intelligent solutions</span>
              </h3>
              <p className="text-text-medium leading-relaxed mb-6">
                My expertise spans the complete data science lifecycle—from data engineering 
                and machine learning to cloud deployment and business intelligence. I combine 
                deep technical skills with business acumen to deliver AI-powered solutions 
                that create measurable impact across industries.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2" />
                  <div>
                    <strong className="text-text-high">Machine Learning & AI:</strong>{" "}
                    <span className="text-text-medium">
                      Predictive modeling, deep learning, NLP, and computer vision solutions
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2" />
                  <div>
                    <strong className="text-text-high">Cloud & Data Engineering:</strong>{" "}
                    <span className="text-text-medium">
                      ETL pipelines, Azure/AWS/GCP, Snowflake, and scalable data architectures
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2" />
                  <div>
                    <strong className="text-text-high">Business Intelligence:</strong>{" "}
                    <span className="text-text-medium">
                      Power BI, Tableau, advanced analytics, and data-driven decision making
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl font-sora font-bold gradient-text mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-text-medium text-sm font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Button variant="hero" size="lg" className="group">
              Explore Full Skill Set
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}