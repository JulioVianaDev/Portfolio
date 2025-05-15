"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import SectionHeading from "./section-heading"

const projects = [
  {
    title: "API Performance Optimization",
    description:
      "Optimized API to handle millions of requests by reducing CPU usage from 92% to 18% and improving request handling capacity by up to 42x.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Performance", "Node.js", "Caching", "Microservices"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Learning Management System",
    description:
      "Developed and sold a complete LMS to a university with features for classes, notes, and student management.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Ruby on Rails", "PostgreSQL", "Redux"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Mobile App Optimization",
    description:
      "Enhanced memory efficiency in a React Native app, enabling message lists to run at 60 FPS even on older devices.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React Native", "Performance", "Mobile"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "IoT Farm Solutions",
    description:
      "Built IoT and vision processing solutions for farms, optimizing agricultural processes with automation.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["IoT", "Python", "Computer Vision", "Automation"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "Integrated payment systems and stock management for an e-commerce platform, ensuring seamless transactions.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "Node.js", "MongoDB", "Payment Integration"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Robotics Competition Project",
    description:
      "Led the programming team for a robot that won the Best Rookie Team award in an international competition.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Robotics", "C++", "Embedded Systems", "Sensors"],
    githubUrl: "#",
    liveUrl: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading title="Projects" subtitle="My Recent Work" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
