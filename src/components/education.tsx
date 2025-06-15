"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./section-heading";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Education() {
  const { translations, language } = useLanguage();
  const t = translations[language].educationSection;

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title={t.title} subtitle={t.subtitle} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl space-y-6"
        >
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <div className="mt-1 rounded-full bg-primary/10 p-2 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold">
                  {t.mba.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{t.mba.period}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t.mba.description}
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t.mba.modules.solutionsArchitecture.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {t.mba.modules.solutionsArchitecture.items.map(
                      (item: string, index: number) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t.mba.modules.softwareArchitecture.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {t.mba.modules.softwareArchitecture.items.map(
                      (item: string, index: number) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t.mba.modules.devops.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {t.mba.modules.devops.items.map(
                      (item: string, index: number) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t.mba.modules.softSkills.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {t.mba.modules.softSkills.items.map(
                      (item: string, index: number) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
