"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Project = {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveLink: string
  githubLink: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Food Ordering Web-App",
    description:
      "A full-featured food delivery platform with user login & signup, menu management, and seamless checkout experience.",
    image: "/project/food odering website.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "API Integration",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    liveLink: "https://food-ordering-website-lime.vercel.app/",
    githubLink: "https://github.com/akashad14/Food_Ordering_Website",
    featured: true,
  },
  {
    id: 2,
    title: "Graphic Design Portfolio Website",
    description:
      "A stunning personal portfolio website showcasing graphic design work with interactive animations and social integration.",
    image: "/project/graphic-designer-portfolio.png",
    technologies: ["Next.js", "TypeScript", "API", "Tailwind CSS"],
    liveLink: "https://portfolio-nextjs-tegv.vercel.app/",
    githubLink: "https://github.com/akashad14/Portfolio_Nextjs",
    featured: true,
  },
  {
    id: 3,
    title: "Travel Website",
    description:
      "A responsive frontend travel website that presents destinations and booking sections through an interactive user interface built using HTML, CSS, and JavaScript.",
    image: "/project/travel-website.png",
    technologies: ["HTML", "JavaScript", "CSS"],
    liveLink: "https://meek-blancmange-02d768.netlify.app/",
    githubLink: "https://github.com/user/saas-dashboard",
  },
  {
    id: 4,
    title: "Job Posting Website",
    description:
      "A responsive frontend job posting website that provides an intuitive user interface for browsing and viewing job listings.",
    image: "/project/job portal website.png",
    technologies: ["HTML", "JavaScript", "CSS"],
    liveLink: "https://rococo-bunny-6c8f81.netlify.app/",
    githubLink: "https://github.com/user/ecommerce",
  },
]

export default function Projects() {
  return (
    <section
      id="Projects"
      className="w-full min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            My Recent Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            We put your ideas and wishes into unique web projects that inspire
            your customers.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-slate-800 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-slate-700 sm:h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6 sm:p-8">
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mb-6 line-clamp-3 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mb-6 h-px bg-slate-700" />

                  <div className="flex gap-3">
                    <Button
                      asChild
                      className="flex-1 bg-purple-600 hover:bg-purple-700"
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-slate-600 text-slate-300 bg-transparent hover:bg-slate-700"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <h3 className="mb-8 text-2xl font-bold text-white">
          Other Projects
        </h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="group rounded-xl bg-slate-800 p-6 transition-all duration-300 hover:bg-slate-700 hover:shadow-xl"
              >
                <div className="relative mb-4 h-40 overflow-hidden rounded-lg bg-slate-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h4 className="mb-2 text-lg font-bold text-white">
                  {project.title}
                </h4>

                <p className="mb-4 line-clamp-2 text-sm text-slate-400">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-purple-500/20 text-purple-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="outline"
                      className="bg-slate-700 text-slate-300"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      <ExternalLink size={14} />
                      View
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 border-slate-600 text-slate-300 bg-transparent"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
