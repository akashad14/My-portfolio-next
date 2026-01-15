"use client"

import HeroSection from "@/pages/Home"
import AboutPage from "@/pages/About"
import { ExperienceTimeline } from "@/components/Educationexpe"
import SkillsSection from "@/pages/Skills"
import Projects from "@/pages/Project-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutPage />

      <div className="mx-auto max-w-6xl my-10">
        <ExperienceTimeline />
      </div>

      <SkillsSection />
      <Projects />
    </main>
  )
}
