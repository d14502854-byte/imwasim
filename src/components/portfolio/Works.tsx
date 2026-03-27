import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "iCareManager EHR Platform",
    category: "Healthcare",
    description: "Comprehensive Electronic Health Record system with eMAR, EMR, scheduling, and medical billing modules serving healthcare facilities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    tags: ["Angular", "Ruby on Rails", "AWS", "Micro-services"],
  },
  {
    title: "eMAR Module Revamp",
    category: "Healthcare",
    description: "Rebuilt the electronic Medication Administration Record with micro-services architecture, improving reliability by 90%.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    tags: ["CQRS", "Clean Architecture", "Node.js"],
  },
  {
    title: "Mobile EHR App",
    category: "Mobile",
    description: "Cross-platform iOS & Android application for EHR/EMAR, giving healthcare providers mobile access to patient records.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    title: "Staff Time & Attendance",
    category: "Enterprise",
    description: "Refactored time tracking module using pub-sub and clean architecture, improving maintainability by 50%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Angular", "Node.js", "DynamoDB"],
  },
  {
    title: "Credibal Platform",
    category: "Fintech",
    description: "Donation management platform for non-profit organizations with donor portal and impact reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Ruby on Rails", "Angular", "PostgreSQL"],
  },
  {
    title: "Freight Management MVP",
    category: "Logistics",
    description: "Freight management platform featuring integrated chatbot, fintech module, and real-time bidding system.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    tags: ["Full Stack", ".Net C#", "System Design"],
  },
];

const Works = () => {
  return (
    <div className="p-5 sm:p-8 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground whitespace-nowrap">Portfolio</h2>
          <div className="flex-1 h-1 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="group rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all"
            >
              <div className="relative h-32 sm:h-36 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-lg bg-primary/90 text-primary-foreground text-[10px] sm:text-xs font-medium">
                  {project.category}
                </span>
              </div>
              <div className="p-3.5 sm:p-4">
                <h3 className="font-display font-semibold text-foreground mb-1 text-sm sm:text-base">{project.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2.5 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-muted text-[10px] sm:text-xs text-muted-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Works;
