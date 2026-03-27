import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <div className="p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-display font-bold text-foreground">Education</h2>
          <div className="flex-1 h-1 rounded-full bg-primary" />
        </div>

        <div className="space-y-5">
          {[
            {
              icon: GraduationCap,
              title: "Masters of Computer Science",
              institution: "Bahaudin Zakaria University, Multan",
              period: "2008 — 2010",
              iconColor: "text-primary",
              bgColor: "bg-primary/10",
            },
            {
              icon: GraduationCap,
              title: "Bachelor (Double Maths & Physics)",
              institution: "Govt. Degree College, Burewala",
              period: "2006 — 2008",
              iconColor: "text-secondary",
              bgColor: "bg-secondary/10",
            },
            {
              icon: BookOpen,
              title: "Project Management Course",
              institution: "Lumx",
              period: "Mar 2025 — May 2025",
              iconColor: "text-accent",
              bgColor: "bg-accent/10",
            },
          ].map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex items-start gap-4 p-5 rounded-2xl border border-border hover:shadow-card transition-all"
            >
              <div className={`w-12 h-12 rounded-xl ${edu.bgColor} flex items-center justify-center flex-shrink-0`}>
                <edu.icon className={`w-6 h-6 ${edu.iconColor}`} />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">{edu.title}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <span className="text-xs font-medium text-primary mt-1 inline-block">{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
