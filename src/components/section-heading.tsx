"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      <p className="text-lg text-muted-foreground">{subtitle}</p>
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-20 rounded bg-primary"></div>
      </div>
    </motion.div>
  )
}
