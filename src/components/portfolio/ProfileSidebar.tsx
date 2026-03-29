import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Calendar, Download, Facebook, Twitter, Instagram, Linkedin, ChevronDown } from "lucide-react";

const ProfileSidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl sm:rounded-3xl shadow-profile overflow-hidden"
    >
      {/* Compact mobile header — always visible on mobile */}
      <div
        className="lg:hidden flex items-center gap-3 p-3 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-muted flex-shrink-0">
          <img
            src="https://imwasim.com/images/320680629_933291484747617_1817599036000689260_n.jpg"
            alt="Wasim Arshad"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-display font-bold text-foreground">Wasim Arshad</h2>
          <span className="text-[11px] text-muted-foreground">Manager Software Engineering</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
      </div>

      {/* Expandable details on mobile */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-4 pb-3 flex flex-col items-center">
              <div className="flex items-center gap-2.5 mt-2">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/king.chouhdary", color: "hover:text-primary" },
                  { icon: Twitter, href: "https://x.com/chouhdarywasim?s=21", color: "hover:text-primary" },
                  { icon: Instagram, href: "#", color: "hover:text-secondary" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/wasim-arshad-software-architect/", color: "hover:text-primary" },
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-xl bg-muted flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}>
                    <social.icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mx-4 border-t border-border" />
            <div className="p-4 space-y-3">
              {[
                { icon: Phone, label: "Phone", value: "+923457155505", href: "tel:+923457155505", iconColor: "text-accent" },
                { icon: Mail, label: "Email", value: "Chouhdarywasim@gmail.com", href: "mailto:chouhdarywasim@gmail.com", iconColor: "text-secondary" },
                { icon: MapPin, label: "Location", value: "Lahore, Pakistan", iconColor: "text-secondary" },
                { icon: Calendar, label: "Birthday", value: "April 05, 1988", iconColor: "text-accent" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className={`w-8 h-8 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 ${item.iconColor}`}>
                    <item.icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-xs font-medium text-foreground hover:text-primary transition-colors truncate block">{item.value}</a>
                    ) : (
                      <p className="text-xs font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4 pb-4">
              <a href="/Muhammad_Wasim_Arshad_CV.pdf" download className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 transition-opacity">
                <Download className="w-3.5 h-3.5" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop full sidebar — always visible on lg+ */}
      <div className="hidden lg:block">
        <div className="pt-8 pb-4 px-6 flex flex-col items-center">
          <div className="w-36 h-36 xl:w-40 xl:h-40 rounded-2xl overflow-hidden shadow-elevated mb-4 bg-muted">
            <img src="https://imwasim.com/images/320680629_933291484747617_1817599036000689260_n.jpg" alt="Wasim Arshad" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-display font-bold text-foreground text-center">Wasim Arshad</h2>
          <span className="mt-1.5 px-4 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground">Manager Software Engineering</span>
          <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground text-center px-2">
            Engineering Manager | Software Architect | SaaS | Scalable Healthcare Solutions | EHR | EMR | System Design, DevOps, Agile Leadership | Angular, React, Ruby on Rails, Node.js, MEAN, MERN, .NET C#, AWS, AZURE
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[
              { icon: Facebook, href: "https://www.facebook.com/king.chouhdary", color: "hover:text-primary" },
              { icon: Twitter, href: "https://x.com/chouhdarywasim?s=21", color: "hover:text-primary" },
              { icon: Instagram, href: "#", color: "hover:text-secondary" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/wasim-arshad-software-architect/", color: "hover:text-primary" },
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                className={`w-9 h-9 rounded-xl bg-muted flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}>
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mx-6 border-t border-border" />
        <div className="p-6 space-y-4">
          {[
            { icon: Phone, label: "Phone", value: "+923457155505", href: "tel:+923457155505", iconColor: "text-accent" },
            { icon: Mail, label: "Email", value: "Chouhdarywasim@gmail.com", href: "mailto:chouhdarywasim@gmail.com", iconColor: "text-secondary" },
            { icon: MapPin, label: "Location", value: "Lahore, Pakistan", iconColor: "text-secondary" },
            { icon: Calendar, label: "Birthday", value: "April 05, 1988", iconColor: "text-accent" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`w-9 h-9 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 ${item.iconColor}`}>
                <item.icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block">{item.value}</a>
                ) : (
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 pb-6">
          <a href="/Muhammad_Wasim_Arshad_CV.pdf" download className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSidebar;
