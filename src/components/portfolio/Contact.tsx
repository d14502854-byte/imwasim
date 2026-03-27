import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-display font-bold text-foreground">Contact</h2>
          <div className="flex-1 h-1 rounded-full bg-primary" />
        </div>

        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Mail, label: "Email", value: "chouhdarywasim@gmail.com", href: "mailto:chouhdarywasim@gmail.com", color: "text-secondary", bg: "bg-secondary/10" },
              { icon: Phone, label: "Phone", value: "+92 345 7155505", href: "tel:+923457155505", color: "text-accent", bg: "bg-accent/10" },
              { icon: MapPin, label: "Location", value: "Bahria Town Lahore, Pakistan", color: "text-secondary", bg: "bg-secondary/10" },
              { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://linkedin.com", color: "text-primary", bg: "bg-primary/10" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                className="flex items-center gap-3 p-4 rounded-2xl border border-border hover:shadow-card transition-all"
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <a
              href="mailto:chouhdarywasim@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send Me an Email
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
