"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"
import SectionHeading from "./section-heading"

export default function Awards() {
  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Awards" subtitle="Recognitions & Achievements" />

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
                <Award className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold">ROOKIE ALL STAR FIRST ROBOTICS COMPETITION IN USA</CardTitle>
                <p className="text-sm text-muted-foreground">2019</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Best Rookie Project – As the team leader, I programmed the robot and led the entire process, from
                software development to hardware integration, ensuring seamless collaboration between the programming
                and mechanics teams. Thanks to our efforts, we defeated a NASA team and won the Best Rookie Team award
                in Little Rock, Arkansas regional. This victory secured us a spot in the World Robotics Championship in
                Houston, Texas. We ranked 28th out of nearly 8,000 teams, showcasing our innovation and technical
                excellence on a global scale.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
