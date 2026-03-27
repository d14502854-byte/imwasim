import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">Contact</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-card rounded-3xl p-10 shadow-elevated"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <a href="mailto:chouhdarywasim@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm">chouhdarywasim@gmail.com</span>
                </a>
                <a href="tel:+923457155505" className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-sm">+92 345 7155505</span>
                </a>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm">Bahria Town Lahore, Pakistan</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
                <Send className="w-10 h-10 text-primary-foreground" />
              </div>
              <a
                href="mailto:chouhdarywasim@gmail.com"
                className="px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-display font-semibold shadow-soft hover:shadow-elevated transition-all hover:-translate-y-0.5"
              >
                Send Me an Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
