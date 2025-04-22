"use client"

import type React from "react"

import { useState } from "react"
import { PlaneIcon as PaperPlane } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
      // In a real app, you would send this to your API
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="relative py-20 overflow-hidden bg-ghibli-gradient-blue-to-pink section-transition">
      {/* Background with cherry blossom meadow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/cherry-blossom-meadow.gif')] bg-cover bg-center opacity-10"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-ghibli text-ghibli-blue-deep mb-6">Join Our Magical Journey</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Receive monthly magic from the world of Ghibli-inspired creators.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-6 py-3 rounded-full border-2 border-ghibli-blue focus:border-ghibli-blue-deep focus:outline-none pr-12 bg-white/80 backdrop-blur-sm"
            required
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-ghibli-blue-deep hover:text-ghibli-blue transition-colors duration-300"
            aria-label="Subscribe"
          >
            <PaperPlane className="h-5 w-5" />
          </button>
        </form>

        {isSubmitted && (
          <div className="mt-4 text-ghibli-blue-deep animate-fade-in">
            Thank you for subscribing to our magical updates!
          </div>
        )}
      </div>
    </section>
  )
}
