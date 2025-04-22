import Link from "next/link"
import { Cat, Umbrella, TreePine, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-ghibli-pink-light py-12 border-t border-ghibli-pink">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Ghibli-style icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <Link
              href="#"
              className="text-ghibli-mint-deep hover:text-ghibli-mint transition-colors duration-300 transform hover:scale-110"
            >
              <Cat className="h-8 w-8" />
              <span className="sr-only">Cat</span>
            </Link>
            <Link
              href="#"
              className="text-ghibli-blue-deep hover:text-ghibli-blue transition-colors duration-300 transform hover:scale-110"
            >
              <Umbrella className="h-8 w-8" />
              <span className="sr-only">Umbrella</span>
            </Link>
            <Link
              href="#"
              className="text-ghibli-mint-deep hover:text-ghibli-mint transition-colors duration-300 transform hover:scale-110"
            >
              <TreePine className="h-8 w-8" />
              <span className="sr-only">Tree</span>
            </Link>
            <Link
              href="#"
              className="text-ghibli-yellow-deep hover:text-ghibli-yellow transition-colors duration-300 transform hover:scale-110"
            >
              <Sparkles className="h-8 w-8" />
              <span className="sr-only">Sparkles</span>
            </Link>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-ghibli-pink-deep hover:underline underline-offset-4 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-ghibli-pink-deep hover:underline underline-offset-4 transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-ghibli-pink-deep hover:underline underline-offset-4 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-ghibli-pink-deep hover:underline underline-offset-4 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </nav>

          {/* Social media links */}
          <div className="flex justify-center space-x-6 mb-8">
            {["Twitter", "Instagram", "Facebook", "YouTube"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-sm text-gray-600 hover:text-ghibli-pink-deep hover:underline underline-offset-4 transition-colors duration-300"
              >
                {social}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Ghibli Art Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
