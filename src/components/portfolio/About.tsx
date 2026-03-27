import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Code2 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Elevate your online presence with expert Web Development services and high-performance websites tailored to your needs.",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Code2,
    title: "Software Design",
    description: "Transform your ideas into seamless, intuitive software solutions with cutting-edge Software Design services.",
    iconColor: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Bring your vision to life with custom App Development services, creating powerful, user-friendly apps for any platform.",
    iconColor: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Transform user experiences with intuitive, visually stunning UI/UX Design solutions that captivate and engage.",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const About = () => {
  return (
    <div className="p-5 sm:p-8 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground whitespace-nowrap">About Me</h2>
          <div className="flex-1 h-1 rounded-full bg-primary" />
        </div>

        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          <p className="text-muted-foreground leading-relaxed">
            I'm a manager of software engineering with extensive experience in software development, project management, and leading cross-functional teams. Proven track record of delivering complex software solutions for major clients, including healthcare organizations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I enjoy turning complex problems into simple, beautiful and intuitive designs and software. Expert in eMAR, EMR, scheduling, Payroll management, LMS, Appointments and medical billing systems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My aim is to bring across your message and identity in the most creative way with hands-on experience in Angular, React Native, Ruby on Rails, Node.js, React and micro-services architecture.
          </p>
        </div>

        <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-4 sm:mb-6">What I do!</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="p-4 sm:p-5 rounded-2xl border border-border hover:shadow-card transition-all group"
            >
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${service.bgColor} flex items-center justify-center mb-2.5 sm:mb-3`}>
                <service.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${service.iconColor}`} />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">{service.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
