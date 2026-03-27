import { motion } from "framer-motion";
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
    ],
  },
  {
    title: "Principal Software Engineer",
    company: "Credibal",
    period: "May 2015 — Mar 2018",
    highlights: [
      "Developed donation management product for a non-profit organization.",
      "Full-stack development with Ruby on Rails and Angular.",
    ],
  },
  {
    title: "Sr. Software Engineer - Team Lead",
    company: "Hashe Computer Solutions",
    period: "2014 — 2015",
    highlights: [
      "Designed MVP for freight management platform with chatbot, fintech module, and bidding system.",
    ],
  },
  {
    title: "Sr. Software Engineer",
    company: "Fortsolution",
    period: "2011 — 2014",
    highlights: [
      "Developed mobile tracking and vehicle tracking applications.",
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
  return (
    <div className="p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-display font-bold text-foreground">Experience</h2>
          <div className="flex-1 h-1 rounded-full bg-primary" />
        </div>

        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-border" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="relative pl-10"
              >
                <div className={`absolute left-1.5 top-2 w-3 h-3 rounded-full border-2 ${
                  exp.current ? 'bg-primary border-primary' : 'bg-card border-muted-foreground/30'
                }`} />

                <div className="p-5 rounded-2xl border border-border hover:shadow-card transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display font-bold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Building2 className="w-3.5 h-3.5" />
                        {exp.company}
                      </div>
                    </div>
                    <span className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${
                      exp.current ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5 mt-3">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
