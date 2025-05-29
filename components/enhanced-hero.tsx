"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

interface EnhancedHeroProps {
  onBookNowClick: () => void
}

export function EnhancedHero({ onBookNowClick }: EnhancedHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const slides = [
    {
      title: "Expert Roadworthy Inspections",
      subtitle: "Fast, thorough, and reliable vehicle inspections",
      image: "/images/hero-1.jpg",
    },
    {
      title: "Complete Mechanical Services",
      subtitle: "Comprehensive care for all makes and models",
      image: "/images/hero-2.jpg",
    },
    {
      title: "EV Services",
      subtitle: "Expert maintenance for electric vehicles",
      image: "/images/hero-3.jpg",
    },
    {
      title: "Tyre Replacement & Wheel Balancing",
      subtitle: "Professional tyre services for optimal performance",
      image: "/images/tyre-service.png",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <motion.div style={{ y, opacity }} className="w-full h-[120%] absolute top-0 left-0">
            <div className="absolute inset-0 bg-black"></div>
            <Image
              src={slides[activeSlide].image || "/placeholder.svg"}
              alt={slides[activeSlide].title}
              fill
              priority
              className="object-cover"
              style={{ opacity: 1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center z-10">
        <div className="container px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 1.2 }}
              className="flex flex-col items-start gap-6 max-w-xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="space-y-4"
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-white">
                  <span className="block">{slides[activeSlide].title}</span>
                  <span className="block text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-red-500">
                    SLR Auto Care
                  </span>
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">{slides[activeSlide].subtitle}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-red-900 hover:bg-red-800 group relative overflow-hidden"
                  onClick={onBookNowClick}
                >
                  <span className="relative z-10 flex items-center">
                    Book Inspection
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white bg-white/10 hover:bg-white/10 group"
                  asChild
                >
                  <a href="/services">
                    <span className="flex items-center">
                      Our Services
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index ? "bg-red-900 w-10" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{
              opacity: [0, 1, 0],
              y: [0, 10],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </div>

      {/* Quick Contact Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md border-t border-white/10 text-white py-4 z-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-900/20 backdrop-blur-sm flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/70">Call Us</p>
                <a href="tel:0352025884" className="hover:text-red-400 transition-colors">
                  03 5202 5884
                </a> | <a href="tel:61 447 430 065" className="hover:text-red-400 transition-colors">
                  61 447 430 065
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-900/20 backdrop-blur-sm flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/70">Find Us</p>
                <span>5/32-44 Tarkin court Bell Park Vic 3215 Australia</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-900/20 backdrop-blur-sm flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/70">Opening Hours</p>
                <span>Mon-Sat: 9:00 AM - 5:00 PM | Sunday by Appointent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
