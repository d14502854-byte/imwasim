import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Manager Software Engineering",
    company: "iCareManager, Lahore",
    period: "Aug 2022 — Present",
    highlights: [
      "Led multiple modules: Staff Time & Attendance, eMAR, EMR, Appointment Management, Medical Billing, and more.",
      "Revamped eMAR module with micro-services architecture — improved reliability by 90%.",
      "Refactored Staff Time module with pub-sub and clean architecture — improved maintainability by 50%.",
      "Re-architected from legacy monolithic to modular monolithic solution.",
    ],
    current: true,
  },
  {
    title: "Solution Architect",
    company: "iCareManager",
    period: "Mar 2018 — Aug 2022",
    highlights: [
      "Developed front-end EHR application using AngularJS and Angular.",
      "Built micro-service for messaging using AWS Lambda and DynamoDB.",
      "Created iOS & Android apps for EHR/EMAR using React Native.",
      "Implemented clean architecture at Credibal.com.",
    ],
  },
  {
    title: "Principal Software Engineer",
    company: "Credibal",
    period: "May 2015 — Mar 2018",
    highlights: [
      "Developed donation management product for a non-profit organization.",
      "Built donor portal for managing donations and impact reports.",
      "Full-stack development with Ruby on Rails and Angular.",
    ],
  },
  {
    title: "Sr. Software Engineer - Team Lead",
    company: "Hashe Computer Solutions",
    period: "2014 — 2015",
    highlights: [
      "Designed MVP for freight management platform with chatbot, fintech module, and bidding system.",
      "Built nearby business discovery web application.",
    ],
  },
  {
    title: "Sr. Software Engineer",
    company: "Fortsolution",
    period: "2011 — 2014",
    highlights: [
      "Developed mobile tracking and vehicle tracking applications.",
      "Led a team to deliver a major software project on time and within budget.",
    ],
  },
  {
    title: "Software Engineer",
    company: "ApniMarket.pk",
    period: "2010 — 2011",
    highlights: [
      "Developed web applications using PHP, JavaScript, HTML, CSS and WordPress.",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">Career</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Professional <span className="text-gradient-primary">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 ${exp.current ? 'bg-primary border-primary shadow-soft' : 'bg-card border-border'}`} />

                <div className="bg-gradient-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Building2 className="w-3.5 h-3.5" />
                        {exp.company}
                      </div>
                    </div>
                    <span className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${exp.current ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
