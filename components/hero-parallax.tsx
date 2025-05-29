"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollY = window.scrollY
      const parallaxElement = containerRef.current

      // Move the background image at a different rate than the scroll
      parallaxElement.style.transform = `translateY(${scrollY * 0.5}px)`
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div ref={containerRef} className="w-full h-[120%] absolute top-0 left-0">
        <Image src="/images/hero-bg.jpg" alt="SLR Auto Care" fill priority className="object-cover" />
      </div>
    </div>
  )
}
