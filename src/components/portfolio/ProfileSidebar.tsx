import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar, Download, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const ProfileSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl sm:rounded-3xl shadow-profile overflow-hidden"
    >
      {/* Avatar */}
      <div className="pt-6 sm:pt-8 pb-3 sm:pb-4 px-4 sm:px-6 flex flex-col items-center">
        <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-elevated mb-4 bg-muted">
          <img
            src="https://imwasim.com/images/320680629_933291484747617_1817599036000689260_n.jpg"
            alt="Wasim Arshad"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-lg sm:text-xl font-display font-bold text-foreground text-center">Wasim Arshad</h2>
        <span className="mt-1.5 px-3 sm:px-4 py-1 rounded-lg bg-muted text-[11px] sm:text-xs font-medium text-muted-foreground">
          Manager Software Engineering
        </span>

        {/* Social links */}
        <div className="flex items-center gap-2.5 sm:gap-3 mt-4 sm:mt-5">
          {[
            { icon: Facebook, href: "#", color: "hover:text-primary" },
            { icon: Twitter, href: "#", color: "hover:text-primary" },
            { icon: Instagram, href: "#", color: "hover:text-secondary" },
            { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-primary" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-muted flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
            >
              <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 sm:mx-6 border-t border-border" />

      {/* Contact Info */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        {[
          { icon: Phone, label: "Phone", value: "+923457155505", href: "tel:+923457155505", iconColor: "text-accent" },
          { icon: Mail, label: "Email", value: "Chouhdarywasim@gmail.com", href: "mailto:chouhdarywasim@gmail.com", iconColor: "text-secondary" },
          { icon: MapPin, label: "Location", value: "Lahore, Pakistan", iconColor: "text-secondary" },
          { icon: Calendar, label: "Birthday", value: "April 05, 1988", iconColor: "text-accent" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-2.5 sm:gap-3">
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 ${item.iconColor}`}>
              <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs text-muted-foreground">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors truncate block">
                  {item.value}
                </a>
              ) : (
                <p className="text-xs sm:text-sm font-medium text-foreground">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Download CV */}
      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
        <a
          href="#"
          className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity"
        >
          <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Download CV
        </a>
      </div>
    </motion.div>
  );
};

export default ProfileSidebar;
