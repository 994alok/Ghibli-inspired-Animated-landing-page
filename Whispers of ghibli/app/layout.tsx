import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Quicksand, Noto_Serif_JP, Cinzel_Decorative, Dancing_Script } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
})
const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-noto-serif-jp",
})
const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
})
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
})

export const metadata: Metadata = {
  title: "Whispers of Ghibli | Magical Art Gallery",
  description: "An enchanted gallery of Ghibli-inspired art and imagination",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${quicksand.variable} ${notoSerifJP.variable} ${cinzelDecorative.variable} ${dancingScript.variable} font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
