"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface PageHeaderProps {
  title: string
  description: string
  backgroundImage?: string
  ctaButton?: React.ReactNode
}

export function PageHeader({ title, description, backgroundImage, ctaButton }: PageHeaderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const defaultBg = "from-red-900 to-red-800"
  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
    : {}

  return (
    <section
      ref={ref}
      className={`pt-32 pb-16 relative overflow-hidden ${!backgroundImage ? `bg-gradient-to-r ${defaultBg}` : ""}`}
      style={bgStyle}
    >
      {/* Overlay for background image if present */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-800/80 backdrop-blur-sm"></div>
      )}

      {/* Animated shapes */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-red-500/10 rounded-full blur-xl"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="text-white"
          >
            <motion.div
              className="overflow-hidden mb-2"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <motion.div
                variants={{
                  hidden: { y: 100 },
                  visible: { y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center"
              >
                <span className="inline-block text-sm font-medium text-white/70 uppercase tracking-wider mb-2">
                  SLR Auto Care
                </span>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-2 relative">
                  {title}
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></span>
                </h1>
              </motion.div>
            </motion.div>

            <motion.div
              className="overflow-hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <motion.p
                variants={{
                  hidden: { y: 50 },
                  visible: { y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-xl text-white/80 mb-8 text-center max-w-2xl mx-auto"
              >
                {description}
              </motion.p>
            </motion.div>

            {ctaButton && (
              <motion.div
                className="flex justify-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {ctaButton}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
