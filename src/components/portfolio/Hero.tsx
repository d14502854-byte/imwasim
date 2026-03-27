import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, User, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/8 blur-3xl" />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-elevated"
          >
            <User className="w-14 h-14 text-primary-foreground" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-4"
          >
            <span className="text-gradient-primary">Muhammad Wasim</span>
            <br />
            <span className="text-foreground">Arshad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl font-display font-medium text-secondary mb-6"
          >
            Manager Software Engineering
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Engineering Manager with 15 years in healthcare software, leading teams to build and modernize EHR products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a href="mailto:chouhdarywasim@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card text-sm text-foreground hover:shadow-elevated transition-shadow">
              <Mail className="w-4 h-4 text-primary" />
              chouhdarywasim@gmail.com
            </a>
            <a href="tel:+923457155505" className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card text-sm text-foreground hover:shadow-elevated transition-shadow">
              <Phone className="w-4 h-4 text-secondary" />
              +92 345 7155505
            </a>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card text-sm text-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              Lahore, Pakistan
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="#about"
              className="px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-display font-semibold shadow-soft hover:shadow-elevated transition-all hover:-translate-y-0.5"
            >
              Explore My Work
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-card text-primary hover:shadow-elevated transition-all hover:-translate-y-0.5"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs mb-1">Scroll Down</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
