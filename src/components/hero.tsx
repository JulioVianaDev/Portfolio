"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] dark:opacity-[0.05]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">{t.hero.greeting}</span>
            <span className="mt-2 block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Julio Viana 1
            </span>
          </h1>

          <div className="mb-8 h-12 text-xl font-medium sm:text-2xl md:text-3xl">
            <TypeAnimation
              sequence={[
                language === "en-US"
                  ? "Full-Stack Developer"
                  : "Desenvolvedor Full-Stack",
                1000,
                language === "en-US"
                  ? "Performance Specialist"
                  : "Especialista em Performance",
                1000,
                language === "en-US"
                  ? "Software Architect"
                  : "Arquiteto de Software",
                1000,
                language === "en-US"
                  ? "Robotics Enthusiast"
                  : "Entusiasta de Robótica",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-muted-foreground"
            />
          </div>

          <p className="mb-8 text-lg text-muted-foreground">
            {language === "en-US"
              ? "Optimizing applications to handle millions of requests with 8 years of programming experience"
              : "Otimizando aplicações para lidar com milhões de requisições com 8 anos de experiência em programação"}
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">{t.hero.cta}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <a href="#experience">
                {language === "en-US" ? "View Experience" : "Ver Experiência"}
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/juliovianadev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-background p-3 shadow-lg transition-colors hover:bg-muted"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/julio-viana-dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-background p-3 shadow-lg transition-colors hover:bg-muted"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:juliovianadev@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-background p-3 shadow-lg transition-colors hover:bg-muted"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
