"use client"

import { motion } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si"

/* ---------------- ICON MAP (DEPLOYMENT SAFE) ---------------- */

const iconMap = {
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  node: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
}

type IconKey = keyof typeof iconMap

/* ---------------- SKILL DATA ---------------- */

const skillCategories: {
  name: string
  skills: {
    name: string
    icon: IconKey
    color: string
  }[]
}[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "react", color: "#61dafb" },
      { name: "Next.js", icon: "nextjs", color: "#ffffff" },
      { name: "JavaScript", icon: "javascript", color: "#f7df1e" },
      { name: "TypeScript", icon: "typescript", color: "#3178c6" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#06b6d4" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "node", color: "#68a063" },
      { name: "Express", icon: "express", color: "#ffffff" },
      { name: "MongoDB", icon: "mongodb", color: "#00ed64" },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "git", color: "#f1502f" },
      { name: "GitHub", icon: "github", color: "#ffffff" },
    ],
  },
]

/* ---------------- SKILL CARD ---------------- */

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skillCategories)[0]["skills"][0]
  index: number
}) {
  const IconComponent = iconMap[skill.icon]

  if (!IconComponent) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
        <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300">
          <IconComponent
            size={32}
            color={skill.color}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 text-center">
          {skill.name}
        </p>
      </div>
    </motion.div>
  )
}

/* ---------------- MAIN SECTION ---------------- */

export default function SkillsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and frameworks I use to build scalable, modern applications.
          </p>
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                <h3 className="text-xl font-semibold text-purple-400 whitespace-nowrap">
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-purple-600/0 via-purple-600 to-purple-600/0 mt-16 origin-center"
        />
      </div>
    </section>
  )
}
