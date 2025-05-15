
// // import { useTheme } from "next-themes"
// import { useEffect, useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Moon, Sun } from "lucide-react"

// export default function ThemeToggle() {
//   const { resolvedTheme, setTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return (
//       <Button variant="ghost" size="icon" className="rounded-full">
//         <Sun className="h-5 w-5" />
//         <span className="sr-only">Toggle theme</span>
//       </Button>
//     )
//   }

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
//       className="rounded-full transition-all duration-300 hover:scale-110"
//       aria-label="Toggle theme"
//     >
//       {resolvedTheme === "dark" ? (
//         <Sun className="h-5 w-5 text-yellow-300" />
//       ) : (
//         <Moon className="h-5 w-5 text-slate-700" />
//       )}
//     </Button>
//   )
// }
