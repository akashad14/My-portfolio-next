import AnimatedSection from "@/components/ui/AnimatedSection"

import HeroSection from "@/pages/Home"
import AboutPage from "@/pages/About"
import { ExperienceTimeline } from "@/components/Educationexpe"
import SkillsSection from "@/pages/Skills"
import Projects from "@/pages/Project-section"
import Contact from "@/pages/Contact"

export default function Home() {
  return (
    <>
 

      <main className="min-h-screen bg-background text-foreground">
        {/* Home */}
        <AnimatedSection id="home">
          <HeroSection />
        </AnimatedSection>

        {/* About */}
        <AnimatedSection id="about">
          <AboutPage />
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection id="experience">
          <div className="mx-auto my-10 max-w-6xl px-4">
            <ExperienceTimeline />
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection id="skills">
          <SkillsSection />
        </AnimatedSection>

        {/* Projects */}
        <AnimatedSection id="projects">
          <Projects />
        </AnimatedSection>
        <AnimatedSection id="Contact">
          <Contact />
        </AnimatedSection>
      </main>
    </>
  )
}
