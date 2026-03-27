import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogData";

interface BlogProps {
  onReadPost?: (slug: string) => void;
}

const Blog = ({ onReadPost }: BlogProps) => {
  return (
    <div className="p-5 sm:p-8 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground whitespace-nowrap">Blog</h2>
          <div className="flex-1 h-1 rounded-full bg-primary" />
        </div>

        <div className="space-y-4">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              onClick={() => onReadPost?.(post.slug)}
              className="group flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl border border-border hover:shadow-card transition-all cursor-pointer"
            >
              <div className="w-full sm:w-44 h-28 sm:h-28 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5">
                  <span className="px-2 py-0.5 rounded-lg bg-primary/10 text-primary text-[11px] sm:text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] sm:text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] sm:text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-sm sm:text-base text-foreground mb-1 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-2">
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
