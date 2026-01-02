"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "./section-heading";
import { useLanguage } from "@/contexts/LanguageContext";

interface Experience {
  titleKey: string;
  companyKey: string;
  period: string;
}

const experiences: Experience[] = [
  {
    titleKey: "srFullstack",
    companyKey: "softwareHouse",
    period: "2025 - 2026",
  },
  {
    titleKey: "fullstack",
    companyKey: "enterness",
    period: "2023 - 2025",
  },
  {
    titleKey: "midFullstack",
    companyKey: "conectae",
    period: "2021 - 2023",
  },
  {
    titleKey: "contentTeacher",
    companyKey: "supergeeks",
    period: "2020 - 2023",
  },
  {
    titleKey: "freelancer",
    companyKey: "freelancer",
    period: "2017 - 2022",
  },
]

export default function Experience() {
  const { translations, language } = useLanguage();
  const t = translations[language].experienceSection;

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title={t.title} subtitle={t.subtitle} />

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
                        {t.roles[exp.titleKey]}
                      </CardTitle>
                      <p className="text-lg font-medium text-muted-foreground">
                        {t.companies[exp.companyKey]}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-sm font-medium">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 space-y-2 list-disc">
                    {t.achievements[exp.companyKey].map(
                      (achievement: string, i: number) => (
                        <li key={i} className="text-muted-foreground">
                          {achievement}
                        </li>
                      )
                    )}
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
