"use client"

import { Github, Linkedin, Download, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Akashdeep-singh resume.pdf"
    link.download = "Akashdeep-singh resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20 py-20"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-2xl space-y-8">
          <div
            className={`space-y-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest">
              Welcome to my portfolio
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient">
                I'm Akashdeep Singh
              </span>
            </h1>
          </div>

          <div
            className={`space-y-2 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              React.js Frontend Developer
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
          </div>

          <p
            className={`text-base md:text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            I break down complex user experience problems to create integrity-focused
            solutions that connect billions of people. Passionate about crafting
            beautiful, performant web experiences.
          </p>

          {/* CTA BUTTONS */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={handleDownloadCV}
              className="group relative px-8 py-3 font-semibold rounded-full bg-accent text-accent-foreground overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <Download size={18} />
                Download CV
              </span>
            </button>

            <button className="group px-8 py-3 font-semibold rounded-full border-2 border-primary text-foreground hover:bg-primary/10 transition-all hover:shadow-lg hover:shadow-primary/20">
              <span className="flex items-center gap-2">
                Let's Talk
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </button>
          </div>

          {/* SOCIAL LINKS */}
          <div
            className={`flex items-center gap-6 transition-all duration-700 delay-400 pt-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm text-muted-foreground">Find me on:</p>

            <div className="flex gap-4">
              <a
                href="https://github.com/akashad14"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full bg-primary/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 hover:shadow-lg hover:shadow-accent/50"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/akashdeep-singh-613644224/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-primary/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 hover:shadow-lg hover:shadow-accent/50"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`flex-1 relative transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-95 rotate-12"
          }`}
        >
          <div className="relative h-96 md:h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-primary/20 rounded-3xl blur-2xl opacity-60 animate-pulse" />

            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-accent/30 shadow-2xl shadow-accent/20">
              <Image
                src="/hero.png"
                alt="Developer workspace"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl opacity-50" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Scroll to explore
          </p>
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-accent rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  )
}
