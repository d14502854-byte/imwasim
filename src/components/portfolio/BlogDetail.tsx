import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blogData";

interface BlogDetailProps {
  slug: string;
  onBack: () => void;
}

const BlogDetail = ({ slug, onBack }: BlogDetailProps) => {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="p-5 sm:p-8 md:p-10 text-center">
        <p className="text-muted-foreground">Post not found.</p>
        <button onClick={onBack} className="mt-4 text-primary font-medium text-sm hover:underline">
          ← Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="p-5 sm:p-8 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>

        {/* Hero image */}
        <div className="w-full h-40 sm:h-52 md:h-64 rounded-2xl overflow-hidden bg-muted mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <User className="w-3.5 h-3.5" />
            Wasim Arshad
          </span>
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground leading-tight mb-6">
          {post.title}
        </h1>

        {/* Content — rendered as simple markdown-like sections */}
        <div className="prose-custom space-y-4">
          {post.content.split("\n").map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={i} className="text-lg sm:text-xl font-display font-bold text-foreground mt-8 mb-3">
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={i} className="text-base sm:text-lg font-display font-semibold text-foreground mt-6 mb-2">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }
            if (trimmed.startsWith("- **")) {
              const match = trimmed.match(/- \*\*(.+?)\*\*\s*[—–-]\s*(.+)/);
              if (match) {
                return (
                  <div key={i} className="flex gap-2 pl-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                    <span><strong className="text-foreground font-medium">{match[1]}</strong> — {match[2]}</span>
                  </div>
                );
              }
              const simpleMatch = trimmed.match(/- \*\*(.+?)\*\*\s*(.*)/);
              if (simpleMatch) {
                return (
                  <div key={i} className="flex gap-2 pl-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                    <span><strong className="text-foreground font-medium">{simpleMatch[1]}</strong> {simpleMatch[2]}</span>
                  </div>
                );
              }
            }
            if (/^\d+\.\s\*\*/.test(trimmed)) {
              const match = trimmed.match(/^\d+\.\s\*\*(.+?)\*\*\s*[—–-]\s*(.+)/);
              if (match) {
                return (
                  <div key={i} className="flex gap-2 pl-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <span className="text-primary font-semibold flex-shrink-0">{trimmed.match(/^\d+/)?.[0]}.</span>
                    <span><strong className="text-foreground font-medium">{match[1]}</strong> — {match[2]}</span>
                  </div>
                );
              }
            }
            if (trimmed.startsWith("- ")) {
              return (
                <div key={i} className="flex gap-2 pl-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                  <span>{trimmed.replace("- ", "")}</span>
                </div>
              );
            }
            if (/^\d+\.\s/.test(trimmed)) {
              return (
                <div key={i} className="flex gap-2 pl-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <span className="text-primary font-semibold flex-shrink-0">{trimmed.match(/^\d+/)?.[0]}.</span>
                  <span>{trimmed.replace(/^\d+\.\s/, "")}</span>
                </div>
              );
            }

            // Bold text replacement
            const rendered = trimmed.replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-medium">$1</strong>');
            return (
              <p
                key={i}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: rendered }}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetail;
