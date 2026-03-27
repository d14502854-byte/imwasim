import ProfileSidebar from "@/components/portfolio/ProfileSidebar";
import SideNav from "@/components/portfolio/SideNav";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import { useState } from "react";

const sections = ["about", "skills", "experience", "education", "contact"] as const;
type Section = typeof sections[number];

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("about");

  return (
    <div className="bg-pattern min-h-screen">
      <div className="relative z-10 flex justify-center items-start gap-6 px-4 py-10 lg:px-8 xl:px-12 max-w-[1400px] mx-auto min-h-screen">
        {/* Left: Profile Sidebar */}
        <div className="hidden lg:block w-[320px] flex-shrink-0 sticky top-10">
          <ProfileSidebar />
        </div>

        {/* Center: Content Area */}
        <div className="flex-1 max-w-[780px] min-w-0">
          {/* Mobile profile */}
          <div className="lg:hidden mb-6">
            <ProfileSidebar />
          </div>

          <div className="bg-card rounded-3xl shadow-elevated overflow-hidden">
            {activeSection === "about" && <About />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "experience" && <Experience />}
            {activeSection === "education" && <Education />}
            {activeSection === "contact" && <Contact />}
          </div>
        </div>

        {/* Right: Navigation Icons */}
        <div className="hidden md:block flex-shrink-0 sticky top-1/3">
          <SideNav activeSection={activeSection} onNavigate={setActiveSection} />
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border px-2 py-2">
        <div className="flex justify-around">
          {[
            { id: "about" as Section, label: "About", icon: "👤" },
            { id: "skills" as Section, label: "Skills", icon: "⚡" },
            { id: "experience" as Section, label: "Work", icon: "💼" },
            { id: "education" as Section, label: "Edu", icon: "🎓" },
            { id: "contact" as Section, label: "Contact", icon: "✉️" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-xs transition-all ${
                activeSection === item.id
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
