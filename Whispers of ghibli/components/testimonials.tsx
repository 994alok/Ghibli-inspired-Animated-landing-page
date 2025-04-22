"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

type Testimonial = {
  id: number
  quote: string
  name: string
  title: string
  avatarUrl: string
}

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Each piece brings the Ghibli magic to life—I could almost hear the wind of the Valley of the Wind in every stroke!",
      name: "Aiko",
      title: "Art Enthusiast",
      avatarUrl: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      quote:
        "The attention to detail is breathtaking. These creations capture that special Ghibli feeling that takes you back to childhood wonder.",
      name: "Takeshi",
      title: "Collector",
      avatarUrl: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      quote:
        "I've never seen artwork that so perfectly balances whimsy and emotion. It's like stepping into Miyazaki's imagination.",
      name: "Mei",
      title: "Studio Ghibli Fan",
      avatarUrl: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-ghibli-gradient-yellow-to-blue overflow-hidden relative">
      {/* Golden glow overlay for testimonials section */}
      <div className="absolute inset-0 bg-golden-glow mix-blend-overlay pointer-events-none opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-ghibli text-center mb-16 text-ghibli-purple-deep drop-shadow-sm">
          Voices of Wonder
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {/* Parchment/storybook card with consistent theming */}
              <div className="relative bg-white/90 rounded-xl p-8 shadow-md border border-ghibli-yellow backdrop-blur-sm">
                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-ghibli-yellow-light w-16 h-16 -translate-y-1/2 -translate-x-1/2"></div>
                </div>

                {/* Quote */}
                <div className="relative z-10 pl-4">
                  <svg
                    className="absolute top-0 left-0 w-8 h-8 text-ghibli-yellow-deep transform -translate-x-4 -translate-y-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1 0.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1 0.9-2 2-2V8z"></path>
                  </svg>

                  <TypewriterText text={testimonial.quote} />
                </div>

                {/* Author info */}
                <div className="mt-6 flex items-center">
                  <div className="relative mr-4">
                    {/* Avatar with first letter of name */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-ghibli-pink via-ghibli-yellow to-ghibli-mint blur-sm"></div>
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-ghibli-yellow-deep flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{testimonial.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-ghibli-purple-deep"> {testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-3 right-3 text-ghibli-yellow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Typewriter effect component (fixed with spaces preserved)
function TypewriterText({ text }: { text: string }) {
  const textRef = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(textRef, { once: true, amount: 0.5 })

  return (
    <p ref={textRef} className="text-lg text-gray-700 italic font-handwritten whitespace-pre-wrap">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.05, delay: index * 0.03 }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  )
}
