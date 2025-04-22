"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function Parallax() {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, height } = ref.current.getBoundingClientRect()
        if (top <= 0 && top >= -height) {
          setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={ref} className="absolute inset-0 h-screen overflow-hidden">
      {/* Main background - Cherry blossom meadow */}
      <div className="absolute inset-0 w-full h-full" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <Image
          src="/images/cherry-blossom-meadow.gif"
          alt="Cherry blossom meadow background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Foreground layer with floating petals - can be added later for more depth */}
      <div className="absolute inset-0 w-full h-full" style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
        {/* This layer could be used for floating petals or foreground elements */}
      </div>

      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

      {/* Bottom gradient that transitions to the next section - smoother transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[20vh]"
        style={{
          background: `linear-gradient(to top, 
            hsl(var(--ghibli-pink-light)) 0%, 
            rgba(0, 0, 0, 0) 100%)`,
          opacity: Math.min(1, scrollY / 300),
        }}
      ></div>
    </div>
  )
}
