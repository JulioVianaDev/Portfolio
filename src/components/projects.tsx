"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import SectionHeading from "./section-heading"
import { useLanguage } from "@/contexts/LanguageContext"

const projectKeys = [
  "realvidas",
  "forms",
  "xyFlow",
  "goCloud",
  "whatsmeow",
  "clinicas",
  "chat",
  "telemetria",
  "rxjsFix",
  "kanban",
  "cart",
  "email",
  "mynds",
  "apiDocs",
  "splitPayment",
  "lmsConectae",
] as const

type ProjectKey = (typeof projectKeys)[number]

type MediaItem = { src: string; video?: boolean }

const projectMedia: Record<ProjectKey, MediaItem[]> = {
  realvidas: [
    { src: "/images/realvidas/estoque.png" },
    { src: "/images/realvidas/fornecedores.png" },
  ],
  forms: [{ src: "/forms/image.png" }],
  xyFlow: [{ src: "/images/xyFlow/flow.mp4", video: true }],
  goCloud: [{ src: "/images/gocloud/image.png" }],
  whatsmeow: [{ src: "/whatsmeow/image.png" }],
  clinicas: [
    { src: "/clinicas/calendario_view.png" },
    { src: "/clinicas/calendarios.png" },
    { src: "/clinicas/recorrencia.png" },
  ],
  chat: [{ src: "/chat/image.png" }],
  telemetria: [
    { src: "/telemetry/dashboard.png" },
    { src: "/telemetry/infos_trace.png" },
    { src: "/telemetry/logs.png" },
    { src: "/telemetry/traces.png" },
  ],
  rxjsFix: [{ src: "/images/rxjsFix/image.png" }],
  kanban: [
    { src: "/images/kanban/dark.png" },
    { src: "/images/kanban/light.png" },
  ],
  cart: [
    { src: "/images/cart/food.png" },
    { src: "/images/cart/payment.png" },
    { src: "/images/cart/select.png" },
    { src: "/images/cart/services.png" },
    { src: "/images/cart/services_choice.png" },
  ],
  email: [{ src: "/email/image.png" }],
  mynds: [],
  apiDocs: [{ src: "/images/apiDocs/image.png" }],
  splitPayment: [{ src: "/splitPayment/image.png" }],
  lmsConectae: [{ src: "/lmsConectae/image.png" }],
}

function ProjectMedia({
  media,
  alt,
  onOpen,
}: {
  media: MediaItem[]
  alt: string
  onOpen: (index: number) => void
}) {
  if (media.length === 0) {
    return (
      <img
        src="/placeholder.svg?height=300&width=500"
        alt={alt}
        width={500}
        height={300}
        className="h-48 w-full object-cover"
      />
    )
  }

  if (media.length === 1) {
    const item = media[0]
    return (
      <button
        type="button"
        onClick={() => onOpen(0)}
        className="block h-48 w-full cursor-zoom-in"
        aria-label={alt}
      >
        {item.video ? (
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className="h-48 w-full object-cover"
          />
        ) : (
          <img
            src={item.src}
            alt={alt}
            width={500}
            height={300}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </button>
    )
  }

  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent className="ml-0">
        {media.map((item, i) => (
          <CarouselItem key={i} className="pl-0">
            <button
              type="button"
              onClick={() => onOpen(i)}
              className="block h-48 w-full cursor-zoom-in"
              aria-label={`${alt} ${i + 1}`}
            >
              {item.video ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-48 w-full object-cover"
                />
              ) : (
                <img
                  src={item.src}
                  alt={alt}
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover"
                />
              )}
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 top-1/2 h-7 w-7 -translate-y-1/2" />
      <CarouselNext className="right-2 top-1/2 h-7 w-7 -translate-y-1/2" />
    </Carousel>
  )
}

function Lightbox({
  title,
  media,
  index,
  onIndexChange,
  onClose,
}: {
  title: string
  media: MediaItem[]
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
}) {
  const total = media.length
  const showNav = total > 1
  const current = media[index]

  const showPrev = () => onIndexChange((index - 1 + total) % total)
  const showNext = () => onIndexChange((index + 1) % total)

  useEffect(() => {
    if (!showNav) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  })

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="flex h-[92vh] w-[96vw] max-w-[96vw] flex-col items-center justify-center gap-2 border-none bg-black/95 p-2 sm:p-4">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">
          {`${title} - image ${index + 1} of ${total}`}
        </DialogDescription>

        <div className="relative flex h-full w-full items-center justify-center">
          {current.video ? (
            <video
              src={current.src}
              controls
              autoPlay
              loop
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <img
              src={current.src}
              alt={title}
              className="max-h-full max-w-full object-contain"
            />
          )}

          {showNav && (
            <>
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next image"
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {showNav && (
          <p className="text-sm text-white/70">
            {index + 1} / {total}
          </p>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default function Projects() {
  const { translations, language } = useLanguage()
  const t = translations[language].projectsSection
  const [lightbox, setLightbox] = useState<{ key: ProjectKey; index: number } | null>(null)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading title={t.title} subtitle={t.subtitle} />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectKeys.map((key, index) => {
            const project = t.items[key]
            const media = projectMedia[key]

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="overflow-hidden">
                    <ProjectMedia
                      media={media}
                      alt={project.title}
                      onOpen={(mediaIndex) => setLightbox({ key, index: mediaIndex })}
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string, tagIndex: number) => (
                        <Badge key={tagIndex} variant="secondary" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          title={t.items[lightbox.key].title}
          media={projectMedia[lightbox.key]}
          index={lightbox.index}
          onIndexChange={(newIndex) =>
            setLightbox((prev) => (prev ? { ...prev, index: newIndex } : prev))
          }
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
