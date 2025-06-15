"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import SectionHeading from "./section-heading";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Awards() {
  const { translations, language } = useLanguage();
  const t = translations[language].awardsSection;

  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title={t.title} subtitle={t.subtitle} />

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
                <CardTitle className="text-xl font-bold">
                  {t.rookieAward.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {t.rookieAward.year}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t.rookieAward.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
