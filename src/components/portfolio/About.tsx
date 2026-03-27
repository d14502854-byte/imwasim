import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, Users, Zap } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "15+", color: "text-primary" },
  { icon: Code2, label: "Technologies", value: "10+", color: "text-secondary" },
  { icon: Users, label: "Teams Led", value: "Multiple", color: "text-accent" },
  { icon: Zap, label: "Products Built", value: "20+", color: "text-primary" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Crafting Healthcare <span className="text-gradient-primary">Software Solutions</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-16"
        >
          Expert in eMAR, EMR, scheduling, Payroll management, LMS, Appointments and medical billing systems, 
          with hands-on experience in Angular, React Native, Ruby on Rails, Node.js, React and micro-services architecture. 
          Passionate about scalable solutions, agile leadership, and mentoring high-performing teams.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-gradient-card rounded-2xl p-6 text-center shadow-card hover:shadow-elevated transition-all hover:-translate-y-1"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-3xl font-bold font-display text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
