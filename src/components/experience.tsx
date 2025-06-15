"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "./section-heading";

const experiences = [
  {
    title: "Mid Level/Senior Fullstack",
    company: "Enterness Easychannel",
    period: "2023 - Present",
    achievements: [
      "Optimized API performance to handle millions of requests by reducing CPU usage from 92% to 18%, significantly lowering infrastructure costs.",
      "Increased request handling capacity by up to 42x in some cases, ensuring the system could scale efficiently under high traffic loads.",
      "Reduced average report generation time from 10 seconds to 210ms, improving user experience and system responsiveness.",
      "Refactored database queries and caching strategies to improve overall system performance, reducing latency and accelerating data retrieval.",
      "Implemented tracing and performance logs across 100+ connected images, improving debugging, monitoring, and overall system observability.",
    ],
  },
  {
    title: "Mid Level Fullstack",
    company: "LMS Platform Development Conectae",
    period: "2021 - 2023",
    achievements: [
      "Developed and sold a Learning Management System (LMS) to a university.",
      "Built a complete system including classes, notes, and student management.",
      "Enhanced memory efficiency in the React Native mobile app, enabling message lists to run at 60 FPS even on older devices, improving accessibility.",
      "Expanded the platform by implementing a React Native mobile app to attract new students.",
      "Ensured high availability and performance, making the platform suitable for academic use.",
    ],
  },
  {
    title: "Mid Level Content Teacher",
    company: "SuperGeeks",
    period: "2020 - 2023",
    achievements: [
      "Recorded technical classes on mobile and web development, covering Rails API, Rails Fullstack, React with Redux Toolkit, Context API, Zustand, and Grafana.",
      "Trained  developers in best practices for architecture, ensuring performance optimization and scalability.",
      "Mentored  developers to prevent performance bottlenecks, improving their ability to design scalable applications.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Freelancer",
    period: "2017 - 2022",
    achievements: [
      "Developed a custom LMS platform from scratch, handling architecture, backend, and frontend implementation.",
      "Built IoT and vision processing solutions for farms, optimizing agricultural processes with automation.",
      "Integrated payment systems and stock management for an e-commerce platform, ensuring seamless transactions.",
      "Worked on multiple projects, delivering scalable and efficient software solutions across different industries.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Experience" subtitle="My Professional Journey" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold">
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg font-medium text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-sm font-medium">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 space-y-2 list-disc">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
