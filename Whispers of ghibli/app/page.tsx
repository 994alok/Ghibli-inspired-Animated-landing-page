import { AnimatedTitle } from "@/components/animated-title"
import { FloatingLeaves } from "@/components/floating-leaves"
import { Parallax } from "@/components/parallax"
import { ArtGallery } from "@/components/art-gallery"
import { OurStory } from "@/components/our-story"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/floating-particles"
import { ArtistSection } from "@/components/artist-section"
import Image from "next/image"

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-ghibli-pink-light">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <Parallax />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <FloatingParticles />
          <FloatingLeaves />

          {/* Animated title */}
          <AnimatedTitle />

          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl drop-shadow-md font-handwritten">
            An enchanted gallery of Ghibli-inspired art and imagination.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#gallery"
              className="px-10 py-4 bg-ghibli-pink/90 hover:bg-ghibli-pink-deep/95 text-white rounded-full font-medium transition-all duration-500 transform hover:scale-105 backdrop-blur-sm animate-button-glow shadow-md"
            >
              🌸 Enter Gallery
            </a>
            <a
              href="#artists"
              className="px-10 py-4 bg-ghibli-mint/90 hover:bg-ghibli-mint-deep/95 text-white rounded-full font-medium transition-all duration-500 transform hover:scale-105 backdrop-blur-sm btn-shimmer shadow-md"
            >
              🌿 Meet the Artists
            </a>
          </div>
        </div>
      </section>

      {/* Background image that extends throughout the page with reduced opacity */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image
          src="/images/cherry-blossom-meadow.gif"
          alt="Cherry blossom meadow background"
          fill
          className="object-cover opacity-5"
        />
      </div>

      {/* Our Magical Story Section */}
      <section id="our-story" className="relative py-24 overflow-hidden bg-ghibli-gradient-pink-to-lavender">
        <OurStory />
        {/* Subtle lavender mist overlay */}
        <div className="absolute inset-0 bg-lavender-mist mix-blend-overlay pointer-events-none z-10 opacity-40"></div>
      </section>

      {/* Art Gallery Section */}
      <section id="gallery" className="py-20 bg-ghibli-gradient-lavender-to-mint relative">
        {/* Subtle warm rose overlay */}
        <div className="absolute inset-0 bg-warm-rose mix-blend-overlay pointer-events-none opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-ghibli text-center mb-16 text-ghibli-lavender-deep">
            Magical Creations
          </h2>
          <ArtGallery />
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20 bg-ghibli-gradient-mint-to-yellow relative">
        {/* Subtle misty jade overlay */}
        <div className="absolute inset-0 bg-misty-jade mix-blend-overlay pointer-events-none opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-ghibli text-center mb-16 text-ghibli-purple-deep">
            Meet Our Artists
          </h2>
          <ArtistSection />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  )
}
