"use client"

import Image from "next/image"
import { useState } from "react"

type Artist = {
  id: number
  name: string
  description: string
  avatarUrl: string
  following: boolean
}

export function ArtistSection() {
  const [artists, setArtists] = useState<Artist[]>([
    {
      id: 1,
      name: "Miyako Tanaka",
      description: "Weaver of forest dreams and guardian of ancient spirits.",
      avatarUrl: "/images/artist-miyako.png",
      following: false,
    },
    {
      id: 2,
      name: "Hiroshi Yamada",
      description: "Architect of floating worlds and impossible landscapes.",
      avatarUrl: "/images/artist-hiroshi.png",
      following: false,
    },
    {
      id: 3,
      name: "Akiko Nakamura",
      description: "Painter of wind whispers and storyteller of silent journeys.",
      avatarUrl: "/images/artist-akiko.png",
      following: false,
    },
    {
      id: 4,
      name: "Takashi Mori",
      description: "Chronicler of feline adventures and midnight wanderings.",
      avatarUrl: "/images/artist-takashi.png",
      following: false,
    },
  ])

  const toggleFollow = (id: number) => {
    setArtists(artists.map((artist) => (artist.id === id ? { ...artist, following: !artist.following } : artist)))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {artists.map((artist) => (
        <div key={artist.id} className="flex flex-col items-center text-center">
          <div className="relative mb-4 group">
            {/* Artist avatar with animated border */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-ghibli-yellow group-hover:border-ghibli-yellow-deep transition-colors duration-300">
              <Image
                src={artist.avatarUrl || "/placeholder.svg"}
                alt={artist.name}
                fill
                className="object-cover"
                sizes="160px"
                style={{ objectPosition: "center top" }}
              />
            </div>

            {/* Animated glow effect on hover */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-ghibli-pink via-ghibli-yellow to-ghibli-mint opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-500"></div>
          </div>

          <h3 className="text-xl font-ghibli text-ghibli-purple-deep mb-2">{artist.name}</h3>
          <p className="text-gray-600 italic mb-4 px-4">{artist.description}</p>

          <button
            onClick={() => toggleFollow(artist.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              artist.following
                ? "bg-ghibli-purple-deep text-white shadow-md"
                : "bg-ghibli-yellow text-ghibli-purple-deep hover:bg-ghibli-yellow-deep hover:text-white shadow-sm hover:shadow-md"
            }`}
          >
            {artist.following ? "Following" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  )
}
