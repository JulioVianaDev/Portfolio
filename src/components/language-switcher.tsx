import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en-US" ? "pt-BR" : "en-US");
  };

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage} className="px-2">
      {language === "en-US" ? "PT-BR" : "EN-US"}
    </Button>
  );
}
