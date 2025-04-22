"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, 1 - top / windowHeight))
        setScrollPosition(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={sectionRef} className="py-24 overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/images/cherry-blossom-meadow.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "soft-light",
        }}
      ></div>

      <ParticleEffect />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-ghibli-pink/70 via-ghibli-yellow/70 to-ghibli-mint/70 rounded-lg blur-md"></div>
              <div className="absolute -inset-1 border-2 border-gray-800/20 rounded-lg"></div>

              <div className="relative rounded-lg overflow-hidden border-4 border-white shadow-lg">
                <div className="absolute inset-0 border-8 border-white/30 z-10 pointer-events-none rounded-lg"></div>
                <Image
                  src="/images/miyazaki-portrait.png"
                  alt="Hayao Miyazaki portrait"
                  width={440}
                  height={660}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-20 h-20 text-ghibli-mint-deep"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM50 90C27.9 90 10 72.1 10 50C10 27.9 27.9 10 50 10C72.1 10 90 27.9 90 50C90 72.1 72.1 90 50 90Z"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M50 20C33.4 20 20 33.4 20 50C20 66.6 33.4 80 50 80C66.6 80 80 66.6 80 50C80 33.4 66.6 20 50 20ZM50 70C39 70 30 61 30 50C30 39 39 30 50 30C61 30 70 39 70 50C70 61 61 70 50 70Z"
                    fill="currentColor"
                    fillOpacity="0.3"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-ghibli text-ghibli-lavender-deep mb-6">Our Magical Story</h2>

            <p className="text-lg text-gray-700 font-serif">
              Inspired by the breathtaking worlds of Studio Ghibli, we craft experiences where fantasy and reality
              merge.
            </p>

            <p className="text-lg text-gray-700 font-serif">
              It all began with a simple idea: to bottle the wonder and imagination that makes Ghibli stories
              unforgettable.
            </p>

            <p className="text-lg text-gray-700 font-serif">
              Each piece is meticulously designed, celebrating simplicity, nature, and emotion. We believe storytelling
              has the power to whisk hearts to places where magic still lives.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function ParticleEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/30 blur-sm"
          style={{
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}
