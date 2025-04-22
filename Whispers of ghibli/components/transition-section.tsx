"use client"

import { useEffect, useRef } from "react"

interface TransitionSectionProps {
  backgroundUrl: string
  text: string
}

export function TransitionSection({ backgroundUrl, text }: TransitionSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const { top, height } = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how much of the section is visible
      const visiblePercentage =
        1 - Math.max(0, top) / windowHeight - Math.max(0, windowHeight - (top + height)) / windowHeight

      if (visiblePercentage > 0) {
        // Apply parallax effect to the background
        const translateY = Math.min(50, 50 * (1 - visiblePercentage))
        section.style.backgroundPositionY = `${translateY}%`

        // Apply opacity based on visibility
        section.style.opacity = Math.min(1, visiblePercentage * 2).toString()
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover transition-opacity duration-500"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30"></div>

      {/* Animated text */}
      <h2 className="relative z-10 text-3xl md:text-5xl font-ghibli text-white text-center px-4 drop-shadow-lg">
        {text}
      </h2>
    </div>
  )
}
