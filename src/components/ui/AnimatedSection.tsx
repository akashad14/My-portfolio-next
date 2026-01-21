"use client"

import { motion } from "framer-motion"

export default function AnimatedSection({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-20 pt-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  )
}
