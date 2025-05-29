"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <Image src="/images/parallax-bg.jpg" alt="Workshop background" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70"></div>
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-6">
                Why Choose SLR Auto Care?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="bg-red-900 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Experienced Technicians</h3>
                    <p className="text-gray-600">
                      Our team consists of fully qualified mechanics with years of experience in the automotive
                      industry.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="bg-red-900 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quick Turnaround</h3>
                    <p className="text-gray-600">
                      We value your time and strive to complete all services efficiently without compromising quality.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="bg-red-900 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">
                      No hidden fees or surprises. We provide clear, upfront pricing for all our services.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="bg-red-900 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Convenient Location</h3>
                    <p className="text-gray-600">
                      Centrally located in  with pick-up and drop-off services available within 5km.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-900 rounded-tl-3xl"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                <Image
                  src="/images/workshop.jpg"
                  alt="SLR Auto Care Workshop"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">State-of-the-Art Facility</h3>
                    <p className="text-white/80">Equipped with the latest diagnostic tools and equipment</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-900 rounded-br-3xl"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
