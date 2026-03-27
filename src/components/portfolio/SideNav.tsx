import { motion } from "framer-motion";
import { User, FileText, Briefcase, GraduationCap, Mail, FolderOpen, Newspaper } from "lucide-react";

type Section = "about" | "skills" | "experience" | "education" | "works" | "blog" | "contact";

const navItems: { id: Section; icon: typeof User; label: string }[] = [
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: FileText, label: "Resume" },
  { id: "experience", icon: Briefcase, label: "Work" },
  { id: "works", icon: FolderOpen, label: "Works" },
  { id: "blog", icon: Newspaper, label: "Blog" },
  { id: "education", icon: GraduationCap, label: "Edu" },
  { id: "contact", icon: Mail, label: "Contact" },
];

interface SideNavProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const SideNav = ({ activeSection, onNavigate }: SideNavProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-col gap-3"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`group relative flex flex-col items-center gap-1 w-16 py-3 rounded-2xl transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-foreground shadow-elevated"
                : "bg-card text-muted-foreground shadow-card hover:shadow-elevated hover:text-foreground"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </motion.div>
  );
};

export default SideNav;
