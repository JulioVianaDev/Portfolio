import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()


    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <Button variant="outline" className={theme === "dark" ? "" : "bg-transparent border-none hover:bg-white/30"} size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
            )}
        </Button>
    )
}
