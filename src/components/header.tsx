"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import ThemeToggle from "./theme-toggle"
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage, translations } from "@/contexts/LanguageContext";

const navItems = [
  { id: "about", href: "#about" },
  { id: "experience", href: "#experience" },
  { id: "skills", href: "#skills" },
  { id: "education", href: "#education" },
  //{ name: "Projects", href: "#projects" },
  { id: "awards", href: "#awards" },
  //  { name: "Blog", href: "#blog" },
  { id: "contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a
          href="#"
          className="text-xl font-heading font-bold text-portfolio-primary dark:text-portfolio-accent"
        >
          Julio<span className="text-portfolio-secondary"> Viana</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            const translatedName = translations[language][item.id];
            return (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive && "text-primary font-semibold"
                )}
              >
                {translatedName.charAt(0)}
                <span
                  className={cn(
                    "transition-colors",
                    isActive ? "text-primary" : "text-foreground"
                  )}
                >
                  {translatedName.substring(1)}
                </span>
              </a>
            );
          })}
          <LanguageSwitcher />
          <ThemeSwitcher />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-b"
        >
          <div className="container mx-auto py-4 px-4 space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const translatedName = translations[language][item.id];
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive && "text-primary"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-primary">
                    {translatedName.charAt(0)}
                  </span>
                  <span className={isActive ? "text-primary" : ""}>
                    {translatedName.substring(1)}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
