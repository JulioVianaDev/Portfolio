"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import SectionHeading from "./section-heading"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Education" subtitle="My Academic Background" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <div className="mt-1 rounded-full bg-primary/10 p-2 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold">MBA FULLCYCLE SOFTWARE ARCHITECTURE</CardTitle>
                <p className="text-sm text-muted-foreground">Jan 2023 - Dec 2024</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                I completed an MBA in FullCycle Software Architecture, receiving training from instructors working at
                top tech companies like MongoDB, Google, Meta, Itaú, and Mercado Livre. The program covered advanced
                technologies such as Golang, Next.js, NestJS, RabbitMQ, DDD, Event-Driven Architecture, Hexagonal
                Architecture, Docker, Kubernetes, Kafka, Microservices, and Design Systems. I also gained expertise in
                working with both relational and non-relational databases. The focus was on performance optimization,
                cost reduction, scalability, and building resilient systems. Additionally, I mastered observability
                tools like Grafana, Datadog, and New Relic for real-time tracing and analytics to drive data-driven
                decision-making.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
