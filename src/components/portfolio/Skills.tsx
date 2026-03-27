import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Leadership & Management",
    skills: ["Technical Project Management", "Team Leadership", "Agile Methodologies", "Communication", "Time Management", "Analytical Thinking", "Creative Problem Solving"],
    gradient: "bg-gradient-primary",
  },
  {
    title: "Frontend",
    skills: ["Angular", "AngularJS", "React", "React Native", "IONIC"],
    gradient: "bg-gradient-accent",
  },
  {
    title: "Backend & Cloud",
    skills: ["Ruby on Rails", "Node.js", "PHP", ".Net C#", "AWS", "DevOps", "Micro-services"],
    gradient: "bg-gradient-primary",
  },
  {
    title: "Data & Architecture",
    skills: ["SQL", "MySQL", "DynamoDB", "System Design", "CQRS", "Clean Architecture", "AI Tools"],
    gradient: "bg-gradient-accent",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 bg-muted/50">
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-2 block">Skills</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Technical <span className="text-gradient-accent">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all"
            >
              <div className={`inline-block px-4 py-1.5 rounded-full ${cat.gradient} text-primary-foreground text-xs font-semibold mb-5`}>
                {cat.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-muted text-sm text-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
