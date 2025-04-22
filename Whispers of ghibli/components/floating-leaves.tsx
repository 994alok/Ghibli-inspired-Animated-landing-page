"use client"

import { useEffect, useRef } from "react"

export function FloatingLeaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Leaf class
    class Leaf {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      rotation: number
      rotationSpeed: number
      color: string
      alpha: number
      type: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height - canvas.height
        this.size = Math.random() * 15 + 5
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 1 + 0.5
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = Math.random() * 0.02 - 0.01
        this.color = this.getRandomColor()
        this.alpha = Math.random() * 0.6 + 0.2
        this.type = Math.floor(Math.random() * 3)
      }

      getRandomColor() {
        const colors = [
          "255, 222, 173", // Navajo white
          "255, 228, 196", // Bisque
          "255, 218, 185", // Peach puff
          "255, 240, 245", // Lavender blush
          "255, 250, 205", // Lemon chiffon
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.y += this.speedY
        this.x += Math.sin(this.y * 0.01) + this.speedX
        this.rotation += this.rotationSpeed

        // Reset if out of screen
        if (this.y > canvas.height) {
          this.y = -this.size
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.globalAlpha = this.alpha

        // Draw different leaf shapes
        if (this.type === 0) {
          // Oval leaf
          ctx.beginPath()
          ctx.ellipse(0, 0, this.size / 2, this.size, 0, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`
          ctx.fill()

          // Stem
          ctx.beginPath()
          ctx.moveTo(0, this.size)
          ctx.lineTo(0, -this.size)
          ctx.strokeStyle = `rgba(${this.color}, ${this.alpha})`
          ctx.lineWidth = 1
          ctx.stroke()
        } else if (this.type === 1) {
          // Round leaf
          ctx.beginPath()
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`
          ctx.fill()
        } else {
          // Paper dust
          ctx.beginPath()
          ctx.rect(-this.size / 4, -this.size / 4, this.size / 2, this.size / 2)
          ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`
          ctx.fill()
        }

        ctx.restore()
      }
    }

    // Create leaves
    const leaves: Leaf[] = []
    const leafCount = Math.min(40, Math.floor(window.innerWidth / 30))

    for (let i = 0; i < leafCount; i++) {
      leaves.push(new Leaf())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const leaf of leaves) {
        leaf.update()
        leaf.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />
}
