"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

export function AnimatedTitle() {
  const title = "Whispers of Ghibli"
  const subtitle = "ジブリのささやき"
  const [visibleLetters, setVisibleLetters] = useState<number>(0)
  const titleControls = useAnimation()
  const subtitleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleLetters((prev) => {
          if (prev < title.length) {
            return prev + 1
          }
          clearInterval(interval)
          titleControls.start({ opacity: 1, scale: 1 })
          return prev
        })
      }, 70)

      return () => clearInterval(interval)
    }, 300)

    return () => clearTimeout(timer)
  }, [titleControls])

  return (
    <div className="text-center">
      <h1 className="relative text-5xl md:text-[4.8rem] lg:text-[6.4rem] font-ghibli text-white mb-4 drop-shadow-lg tracking-wider">
        {title.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.8,
              filter: "blur(8px)",
              textShadow: "0 0 0px rgba(255,255,255,0)",
            }}
            animate={
              index < visibleLetters
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    textShadow: "0 0 15px rgba(255,255,255,0.5), 0 0 30px rgba(255,192,203,0.3)",
                  }
                : {
                    opacity: 0,
                    y: -30,
                    scale: 0.8,
                    filter: "blur(8px)",
                    textShadow: "0 0 0px rgba(255,255,255,0)",
                  }
            }
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: index * 0.05,
            }}
            className="inline-block relative animate-sketch-to-color"
          >
            {letter === " " ? "\u00A0" : letter}

            {/* Shimmer gradient */}
            <motion.span
              className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-pink-200"
              animate={{
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>

            {/* Floating particle effect */}
            {index < visibleLetters && index % 3 === 0 && (
              <motion.span
                className="absolute -top-2 left-1/2 w-1 h-1 bg-white/40 rounded-full pointer-events-none"
                initial={{ opacity: 0.8, y: 0, x: "-50%" }}
                animate={{
                  opacity: 0,
                  y: -20,
                  x: ["-50%", "-40%", "-60%", "-50%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  delay: index * 0.05 + 0.2,
                  x: {
                    duration: 2,
                    repeat: 0,
                    ease: "easeInOut",
                  },
                }}
              />
            )}
          </motion.span>
        ))}
      </h1>

      {/* Japanese subtitle ~6% smaller with glowing effect */}
      <motion.h2
        ref={subtitleRef}
        className="relative text-[2.05rem] md:text-[3.1rem] lg:text-[4.1rem] font-semibold font-handwritten text-white mb-8 tracking-wider"
        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1.2,
          delay: title.length * 0.05 + 0.3,
          ease: "easeOut",
        }}
      >
        {subtitle.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: title.length * 0.05 + 0.5 + index * 0.04,
              ease: "easeOut",
            }}
            className="inline-block relative"
          >
            {char}
            {/* Soft glow overlay */}
            <motion.span
              className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-white pointer-events-none"
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 2.8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              {char}
            </motion.span>
          </motion.span>
        ))}
      </motion.h2>
    </div>
  )
}
