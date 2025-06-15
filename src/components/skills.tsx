"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import SectionHeading from "./section-heading";
import { useLanguage } from "@/contexts/LanguageContext";

const skillCategories = [
  {
    key: "programmingLanguages",
    skills: [
      { name: "JavaScript", years: 8, level: 95 },
      { name: "TypeScript", years: 5, level: 90 },
      { name: "Ruby", years: 5, level: 85 },
      { name: "Golang", years: 2, level: 70 },
      { name: "Python", years: 7, level: 85 },
    ],
  },
  {
    key: "frameworksLibraries",
    skills: [
      { name: "React JS", years: 6, level: 95 },
      { name: "React Native", years: 4, level: 90 },
      { name: "Ruby on Rails", years: 4, level: 85 },
      { name: "Next.js", years: 4, level: 90 },
      { name: "NestJS", years: 3, level: 85 },
      { name: "Tailwind CSS", years: 4, level: 90 },
    ],
  },
  {
    key: "databasesStorage",
    skills: [
      { name: "MongoDB", years: 5, level: 85 },
      { name: "PostgreSQL", years: 6, level: 90 },
      { name: "Mariadb", years: 3, level: 90 },
      { name: "MySQL", years: 5, level: 85 },
      { name: "Redis", years: 3, level: 80 },
      { name: "Elasticsearch", years: 2, level: 80 },
      { name: "DynamoDB", years: 1, level: 70 },
    ],
  },
  {
    key: "cloudDevOps",
    skills: [
      { name: "AWS", years: 3, level: 80 },
      { name: "Docker", years: 4, level: 85 },
      { name: "Kubernetes", years: 2, level: 75 },
      { name: "Terraform", years: 2, level: 70 },
    ],
  },
  {
    key: "performanceObservability",
    skills: [
      { name: "Grafana", years: 2, level: 80 },
      { name: "Prometheus", years: 2, level: 75 },
      { name: "New Relic", years: 2, level: 75 },
      { name: "Jeager", years: 2, level: 75 },
      { name: "Datadog", years: 1, level: 70 },
      { name: "OpenTelemetry", years: 1, level: 70 },
    ],
  },
];

export default function Skills() {
  const { translations, language } = useLanguage();
  const t = translations[language].skillsSection;

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading title={t.title} subtitle={t.subtitle} />

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="border-none shadow-lg h-full">
                <CardContent className="pt-6">
                  <h3 className="mb-6 text-xl font-bold">
                    {t.categories[category.key]}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="mb-2 flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="ml-2 text-xs text-muted-foreground">
                              ({skill.years}{" "}
                              {skill.years === 1
                                ? t.years.singular
                                : t.years.plural}
                              )
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
