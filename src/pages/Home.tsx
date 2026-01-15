"use client";

import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Akashdeep-singh resume.pdf";
    link.download = "Akashdeep-singh resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="Home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-between overflow-hidden px-6 md:px-12 lg:px-20 py-20"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 space-y-8 max-w-2xl">
          <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              I&apos;m Akashdeep Singh
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            React.js Frontend Developer
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I break down complex user experience problems to create integrity
            focused solutions that connect billions of people. Passionate about
            crafting beautiful, performant web experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleDownloadCV}
              className="group relative px-8 py-3 font-semibold rounded-full bg-accent text-accent-foreground"
            >
              <span className="flex items-center gap-2">
                <Download size={18} />
                Download CV
              </span>
            </button>

            <button className="group relative px-8 py-3 font-semibold rounded-full border-2 border-primary">
              <span className="flex items-center gap-2">
                Let&apos;s Talk
                <ArrowRight size={18} />
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4">
            <p className="text-sm text-muted-foreground">Find me on:</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/akashad14"
                aria-label="GitHub"
                className="p-3 rounded-full bg-primary/10 text-accent"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/akashdeep-singh-613644224/"
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-primary/10 text-accent"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <div className="relative h-96 md:h-[500px] w-full">
            <Image
              src="/hero.png"
              alt="Developer workspace with multiple monitors"
              fill
              priority
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
