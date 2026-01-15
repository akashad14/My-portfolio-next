"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Zap, Award } from "lucide-react"

/* ===================== TYPES ===================== */

interface EducationItem {
  id: string
  title: string
  institution: string
  description?: string
  highlights?: string[]
}

interface ExperienceItem {
  id: string
  title: string
  company: string
  description: string
  achievements: string[]
  skills?: string[]
}

/* ===================== DATA ===================== */

const educationData: EducationItem[] = [
  {
    id: "master",
    title: "Master of Computer Applications",
    institution: "DAV Institute of Engineering And Technology",
    description:
      "Advanced studies in computer applications with a focus on software development and emerging technologies.",
    highlights: ["Advanced Software Engineering"],
  },
  {
    id: "bachelor",
    title: "Bachelor of Computer Applications",
    institution: "DAV College",
    description:
      "Comprehensive foundation in computer science and application development.",
    highlights: ["Core Computer Science"],
  },
]

const experienceData: ExperienceItem[] = [
  {
    id: "frontend-intern",
    title: "Frontend Developer Intern",
    company: "Coders Boutique",
    description:
      "Worked on responsive web applications and collaborated with senior developers on real-world projects.",
    achievements: [
      "Built responsive UIs using React and Next.js",
      "Improved performance by optimizing components",
      "Resolved UI/UX issues across browsers",
      "Worked with Tailwind CSS for consistent design",
    ],
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "mern-trainee",
    title: "MERN Stack Trainee",
    company: "Devex Hub Pvt. Ltd",
    description:
      "Developed full-stack applications using React, Node.js, Express, and MongoDB.",
    achievements: [
      "Built full-stack MERN applications",
      "Implemented REST APIs",
      "Integrated frontend with backend services",
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
]

/* ===================== MAIN COMPONENT ===================== */

export function ExperienceTimeline() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Education &{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          My journey of continuous learning and professional growth
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Education */}
        <div className="space-y-6">
          <SectionHeader icon={<GraduationCap />} title="EDUCATION" />

          {educationData.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>

        {/* Experience */}
        <div className="space-y-6">
          <SectionHeader icon={<Briefcase />} title="EXPERIENCE" />

          {experienceData.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===================== SUB COMPONENTS ===================== */

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode
  title: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-purple-400">{title}</h2>
    </div>
  )
}

function EducationCard({ item }: { item: EducationItem }) {
  return (
    <Card className="p-6 bg-slate-900/80 border border-purple-500/20">
      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      <p className="text-sm text-purple-300">{item.institution}</p>

      {item.description && (
        <p className="text-sm text-gray-300 mt-3">{item.description}</p>
      )}

      {item.highlights && (
        <div className="flex flex-wrap gap-2 mt-4">
          {item.highlights.map((h, i) => (
            <Badge
              key={i}
              className="bg-purple-500/20 text-purple-300 border border-purple-500/40"
            >
              <Award className="w-3 h-3 mr-1" />
              {h}
            </Badge>
          ))}
        </div>
      )}
    </Card>
  )
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <Card className="p-6 bg-slate-900/80 border border-purple-500/20">
      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      <p className="text-sm text-purple-300">{item.company}</p>

      <p className="text-sm text-gray-300 mt-3">{item.description}</p>

      <div className="space-y-2 mt-4">
        {item.achievements.map((a, i) => (
          <div key={i} className="flex gap-2 text-sm text-gray-300">
            <Zap className="w-4 h-4 text-purple-400 shrink-0" />
            <span>{a}</span>
          </div>
        ))}
      </div>

      {item.skills && (
        <div className="flex flex-wrap gap-2 mt-4">
          {item.skills.map((skill, i) => (
            <Badge
              key={i}
              className="bg-purple-500/20 text-purple-300 border border-purple-500/40"
            >
              {skill}
            </Badge>
          ))}
        </div>
      )}
    </Card>
  )
}
