"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Globe, Rocket, Zap } from "lucide-react";
import SectionHeading from "./section-heading";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t.aboutSection.title}
          subtitle={t.aboutSection.subtitle}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-3xl mb-12 text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.aboutSection.description}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-background">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {t.aboutSection.cards.performance.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.aboutSection.cards.performance.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-background">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {t.aboutSection.cards.fullstack.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.aboutSection.cards.fullstack.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-background">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {t.aboutSection.cards.architecture.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.aboutSection.cards.architecture.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-background">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {t.aboutSection.cards.robotics.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.aboutSection.cards.robotics.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
