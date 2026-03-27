import ProfileSidebar from "@/components/portfolio/ProfileSidebar";
import SideNav from "@/components/portfolio/SideNav";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Works from "@/components/portfolio/Works";
import Blog from "@/components/portfolio/Blog";
import BlogDetail from "@/components/portfolio/BlogDetail";
import Contact from "@/components/portfolio/Contact";
import { useState } from "react";

const sections = ["about", "skills", "experience", "education", "works", "blog", "contact"] as const;
type Section = typeof sections[number];

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [blogSlug, setBlogSlug] = useState<string | null>(null);

  const handleNavigate = (section: Section) => {
    setActiveSection(section);
    setBlogSlug(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReadPost = (slug: string) => {
    setBlogSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToBlog = () => {
    setBlogSlug(null);
  };

  return (
    <div className="bg-pattern min-h-screen pb-16 md:pb-0">
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-start gap-4 sm:gap-6 px-3 sm:px-4 py-6 sm:py-8 lg:py-10 lg:px-6 xl:px-10 max-w-[1400px] mx-auto min-h-screen">
        {/* Left: Profile Sidebar — hidden on mobile, shown on lg+ */}
        <div className="hidden lg:block w-[280px] xl:w-[320px] flex-shrink-0 sticky top-8">
          <ProfileSidebar />
        </div>

        {/* Center: Content Area */}
        <div className="flex-1 w-full lg:max-w-[780px] min-w-0">
          {/* Mobile/tablet profile card */}
          <div className="lg:hidden mb-4 sm:mb-6">
            <ProfileSidebar />
          </div>

          <div className="bg-card rounded-2xl sm:rounded-3xl shadow-elevated overflow-hidden">
            {activeSection === "about" && <About />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "experience" && <Experience />}
            {activeSection === "education" && <Education />}
            {activeSection === "works" && <Works />}
            {activeSection === "blog" && !blogSlug && <Blog onReadPost={handleReadPost} />}
            {activeSection === "blog" && blogSlug && <BlogDetail slug={blogSlug} onBack={handleBackToBlog} />}
            {activeSection === "contact" && <Contact />}
          </div>
        </div>

        {/* Right: Navigation Icons — hidden on mobile, shown on md+ */}
        <div className="hidden md:block flex-shrink-0 sticky top-1/3">
          <SideNav activeSection={activeSection} onNavigate={handleNavigate} />
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border safe-bottom">
        <div className="flex justify-around px-1 py-1.5">
          {[
            { id: "about" as Section, label: "About", icon: "👤" },
            { id: "skills" as Section, label: "Skills", icon: "⚡" },
            { id: "experience" as Section, label: "Work", icon: "💼" },
            { id: "works" as Section, label: "Works", icon: "📁" },
            { id: "blog" as Section, label: "Blog", icon: "📝" },
            { id: "contact" as Section, label: "Contact", icon: "✉️" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`flex flex-col items-center gap-0.5 px-1.5 py-1 rounded-xl text-[10px] transition-all ${
                activeSection === item.id
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              <span className="text-sm sm:text-base">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
