"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Heart, Star, ThumbsDown } from "lucide-react"
import { motion, useInView } from "framer-motion"

type Artwork = {
  id: number
  title: string
  artist: string
  imageUrl: string
  liked: boolean
  disliked: boolean
  bookmarked: boolean
}

export function ArtGallery() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(galleryRef, { once: true, amount: 0.1 })

  const [artworks, setArtworks] = useState<Artwork[]>([
    {
      id: 1,
      title: "Spirit of the Forest",
      artist: "Miyako Tanaka",
      imageUrl: "/images/spirit-forest.png",
      liked: false,
      disliked: false,
      bookmarked: false,
    },
    {
      id: 2,
      title: "Whispers in the Rain",
      artist: "Hiroshi Yamada",
      imageUrl: "/images/rainy-path.jpeg",
      liked: false,
      disliked: false,
      bookmarked: false,
    },
    {
      id: 3,
      title: "The Wind Rises",
      artist: "Akiko Nakamura",
      imageUrl: "/images/wind-rises.webp",
      liked: false,
      disliked: false,
      bookmarked: false,
    },
    {
      id: 4,
      title: "Light of Fireflies",
      artist: "Takashi Mori",
      imageUrl: "/images/fireflies.jpeg",
      liked: false,
      disliked: false,
      bookmarked: false,
    },
    {
      id: 5,
      title: "The Cat's Meadow",
      artist: "Yuki Sato",
      imageUrl: "/images/cat-meadow.jpeg",
      liked: false,
      disliked: false,
      bookmarked: false,
    },
    {
      id: 6,
      title: "Howl's Moving Castle",
      artist: "Kenji Watanabe",
      imageUrl: "/images/moving-castle.jpeg",
      liked: false,
      disliked: false,
      bookmarked: false,
    },
  ])

  const toggleLike = (id: number) => {
    setArtworks(
      artworks.map((art) => {
        if (art.id === id) {
          return { ...art, liked: !art.liked, disliked: false }
        }
        return art
      }),
    )
  }

  const toggleDislike = (id: number) => {
    setArtworks(
      artworks.map((art) => {
        if (art.id === id) {
          return { ...art, disliked: !art.disliked, liked: false }
        }
        return art
      }),
    )
  }

  const toggleBookmark = (id: number) => {
    setArtworks(
      artworks.map((art) => {
        if (art.id === id) {
          return { ...art, bookmarked: !art.bookmarked }
        }
        return art
      }),
    )
  }

  return (
    <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {artworks.map((artwork, index) => (
        <motion.div
          key={artwork.id}
          className="group relative bg-white/80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: "easeOut",
          }}
          whileHover={{ y: -8 }}
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={artwork.imageUrl || "/placeholder.svg"}
              alt={artwork.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Overlay with title on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <motion.h3
                  className="text-xl font-ghibli mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {artwork.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-white/80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  by {artwork.artist}
                </motion.p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-xl font-ghibli text-ghibli-mint-deep mb-1">{artwork.title}</h3>
            <p className="text-sm text-gray-600 mb-4">by {artwork.artist}</p>

            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <button
                  onClick={() => toggleLike(artwork.id)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    artwork.liked
                      ? "bg-ghibli-pink-light text-ghibli-pink-deep transform scale-110"
                      : "bg-gray-100 text-gray-500 hover:bg-ghibli-pink-light hover:text-ghibli-pink-deep"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${artwork.liked ? "fill-current" : ""}`} />

                  {/* Heart float animation */}
                  {artwork.liked && (
                    <motion.div
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 pointer-events-none"
                      initial={{ opacity: 1, y: 0, scale: 0 }}
                      animate={{ opacity: 0, y: -20, scale: 1.5 }}
                      transition={{ duration: 1 }}
                    >
                      <Heart className="h-4 w-4 text-ghibli-pink-deep fill-current" />
                    </motion.div>
                  )}
                </button>

                <button
                  onClick={() => toggleDislike(artwork.id)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    artwork.disliked
                      ? "bg-ghibli-blue-light text-ghibli-blue-deep transform scale-110"
                      : "bg-gray-100 text-gray-500 hover:bg-ghibli-blue-light hover:text-ghibli-blue-deep"
                  }`}
                >
                  <ThumbsDown className={`h-5 w-5 ${artwork.disliked ? "fill-current" : ""}`} />

                  {/* Cloud puff animation */}
                  {artwork.disliked && (
                    <motion.div
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 pointer-events-none text-ghibli-blue-light"
                      initial={{ opacity: 1, scale: 0 }}
                      animate={{ opacity: 0, scale: 1.5 }}
                      transition={{ duration: 0.7 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 14a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2H4zm3-3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2H7zm6-1a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm3 1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2h-1zm-9 4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2H7zm4 0a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2h-1zm4 0a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2h-1z" />
                      </svg>
                    </motion.div>
                  )}
                </button>
              </div>

              <button
                onClick={() => toggleBookmark(artwork.id)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  artwork.bookmarked
                    ? "bg-ghibli-yellow-light text-ghibli-yellow-deep transform scale-110"
                    : "bg-gray-100 text-gray-500 hover:bg-ghibli-yellow-light hover:text-ghibli-yellow-deep"
                }`}
              >
                <Star className={`h-5 w-5 ${artwork.bookmarked ? "fill-current" : ""}`} />

                {/* Sparkle animation */}
                {artwork.bookmarked && (
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 pointer-events-none text-ghibli-yellow-deep"
                    initial={{ opacity: 1, scale: 0 }}
                    animate={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 0.7 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </motion.div>
                )}
              </button>
            </div>
          </div>

          {/* Soft glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent"></div>
            <div className="absolute -inset-1 bg-ghibli-mint/20 blur-xl rounded-lg"></div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
