import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6 bg-muted/50">
      <div className="container max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-2 block">Education</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Academic <span className="text-gradient-accent">Background</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all"
          >
            <GraduationCap className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-display font-bold text-foreground mb-1">Masters of Computer Science</h3>
            <p className="text-muted-foreground text-sm mb-2">Bahaudin Zakaria University, Multan</p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
              2008 — 2010
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all"
          >
            <GraduationCap className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-xl font-display font-bold text-foreground mb-1">Bachelor (Double Maths & Physics)</h3>
            <p className="text-muted-foreground text-sm mb-2">Govt. Degree College, Burewala</p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary/10 text-secondary">
              2006 — 2008
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-2xl p-8 shadow-card max-w-md mx-auto text-center"
        >
          <BookOpen className="w-8 h-8 text-accent mx-auto mb-3" />
          <h3 className="text-lg font-display font-bold text-foreground mb-1">Project Management Course</h3>
          <p className="text-muted-foreground text-sm mb-2">Lumx</p>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent-foreground">
            Mar 2025 — May 2025
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
