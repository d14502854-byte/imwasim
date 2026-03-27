import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "Migrating from Monolithic to Modular Monolithic Architecture",
    excerpt: "Lessons learned from re-architecting a legacy healthcare platform into a modular monolithic solution, balancing scalability with team productivity.",
    date: "Mar 2025",
    readTime: "8 min read",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop",
  },
  {
    title: "Building Reliable eMAR Systems with Micro-services",
    excerpt: "How we achieved 90% reliability improvement in our electronic Medication Administration Record by adopting micro-services and event-driven architecture.",
    date: "Jan 2025",
    readTime: "6 min read",
    category: "Healthcare Tech",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop",
  },
  {
    title: "Clean Architecture in Practice: Staff Time Module",
    excerpt: "Applying clean architecture and pub-sub patterns to improve maintainability by 50% in an enterprise time & attendance system.",
    date: "Nov 2024",
    readTime: "7 min read",
    category: "Clean Code",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop",
  },
  {
    title: "Leading Engineering Teams in Healthcare Software",
    excerpt: "Key insights on managing cross-functional teams, navigating compliance requirements, and fostering innovation in regulated industries.",
    date: "Sep 2024",
    readTime: "5 min read",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=300&fit=crop",
  },
  {
    title: "React Native for Healthcare: Lessons from the Field",
    excerpt: "Building cross-platform mobile apps for EHR systems — challenges, patterns, and best practices from real-world deployments.",
    date: "Jul 2024",
    readTime: "6 min read",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=300&fit=crop",
  },
];

const Blog = () => {
  return (
    <div className="p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-display font-bold text-foreground">Blog</h2>
          <div className="flex-1 h-1 rounded-full bg-primary" />
        </div>

        <div className="space-y-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="group flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-border hover:shadow-card transition-all cursor-pointer"
            >
              <div className="sm:w-48 h-32 sm:h-auto rounded-xl overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-2">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
