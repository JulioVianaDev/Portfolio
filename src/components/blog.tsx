"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import SectionHeading from "./section-heading"

const blogPosts = [
  {
    id: 1,
    title: "Optimizing API Performance: How I Reduced CPU Usage by 74%",
    date: "May 10, 2025",
    excerpt:
      "Learn the techniques I used to optimize an API handling millions of requests, reducing CPU usage from 92% to 18% and improving request capacity by 42x.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Performance",
  },
  {
    id: 2,
    title: "Building Scalable React Native Apps: Lessons from the Trenches",
    date: "April 22, 2025",
    excerpt:
      "Discover how to build React Native applications that perform well even on older devices. I share my experience optimizing memory usage for smooth 60 FPS performance.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Mobile Development",
  },
  {
    id: 3,
    title: "Microservices vs Monoliths: Making the Right Architecture Choice",
    date: "March 15, 2025",
    excerpt:
      "An in-depth comparison of microservices and monolithic architectures, with practical advice on when to choose each approach based on project requirements.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Architecture",
  },
  {
    id: 4,
    title: "My Journey in Robotics: From Coding to Competition",
    date: "February 28, 2025",
    excerpt:
      "The story of how our team built a competition-winning robot, the challenges we faced, and the lessons learned along the way to defeating a NASA team.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Robotics",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Blog" subtitle="My Latest Articles" />

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <>
                    <div className="overflow-hidden h-48">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader className="p-6 pb-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                        <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold hover:text-primary transition-colors duration-200">

                      </h3>
                    </CardHeader>
                    <CardContent className="p-6 pt-2">
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button asChild variant="ghost" className="p-0 hover:bg-transparent group">
                        <>
                          <span className="text-primary">Read More</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-primary" />
                        </>
                      </Button>
                    </CardFooter>
                  </>

                </Card>
              </>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-full">
            <a href="/blog">View All Articles</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
