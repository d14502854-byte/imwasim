import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Leadership & Management",
    skills: ["Technical Project Management", "Team Leadership", "Agile Methodologies", "Communication", "Time Management", "Analytical Thinking", "Creative Problem Solving"],
  },
  {
    title: "Frontend",
    skills: ["Angular", "AngularJS", "React", "React Native", "IONIC"],
  },
  {
    title: "Backend & Cloud",
    skills: ["Ruby on Rails", "Node.js", "PHP", ".Net C#", "AWS", "DevOps", "Micro-services"],
  },
  {
    title: "Data & Architecture",
    skills: ["SQL", "MySQL", "DynamoDB", "System Design", "CQRS", "Clean Architecture", "AI Tools"],
  },
];

const Skills = () => {
  return (
    <div className="p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-display font-bold text-foreground">Skills</h2>
          <div className="flex-1 h-1 rounded-full bg-primary" />
        </div>

        <div className="space-y-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-muted text-sm text-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
