"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ModernNav } from "@/components/modern-nav"
import { ArrowRight, CheckCircle, Users, Award, Clock, PenToolIcon as Tool } from "lucide-react"
import { motion } from "framer-motion"
import Footer from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { useState } from "react"

export default function AboutPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  return (
    <div className="flex min-h-screen flex-col">
      <ModernNav />

      {/* Hero Section */}
<section className="min-h-[80vh] relative overflow-hidden max-w-[100vw] md:max-w-none">
  {/* Dynamic Background with Parallax Effect */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-black/60 z-10"></div>
    <video 
      autoPlay 
      muted 
      loop 
      playsInline
      className="absolute w-full h-full object-cover"
    >
      <source src="/videos/workshop-bg.mp4" type="video/mp4" />
    </video>
    {/* Updated gradient overlay to match reddish theme */}
    <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-red-900/20 to-black/90 z-20"></div>
  </div>
  
  {/* Updated Animated Geometric Elements with more red tones */}
  <div className="absolute inset-0 z-10">
    <div className="absolute top-10 sm:top-20 left-5 sm:left-10 md:left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-red-700/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 sm:bottom-20 md:bottom-20 right-5 sm:right-10 md:right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-red-900/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/3 right-1/4 w-20 sm:w-30 md:w-40 h-20 sm:h-30 md:h-40 bg-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>
  
  {/* Floating Particles - updated to red tint */}
  <div className="absolute inset-0 z-10">
    {Array.from({ length: 20 }).map((_, i) => (
      <div 
        key={i}
        className="absolute w-1 h-1 bg-red-200 rounded-full opacity-30"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${3 + Math.random() * 7}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`
        }}
      ></div>
    ))}
  </div>
  
  {/* Content Container */}
  <div className="relative z-30 container mx-auto px-4 md:px-6 pt-24 sm:pt-32 md:pt-32 pb-28 sm:pb-24 md:pb-24 flex flex-col items-center justify-center min-h-[80vh]">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <span className="block text-sm md:text-base uppercase tracking-widest text-red-400 font-medium mb-4 text-center">
        Established 2008
      </span>
      
      <div className="relative">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-6 leading-tight">
          About <span className="relative inline-block">
            <span className="relative z-10">SLR Auto Care</span>
          </span> 
        </h1>
        
        {/* Updated divider with stronger red */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent max-w-[90%] sm:max-w-xl md:max-w-xl mx-auto mb-8"
        ></motion.div>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 text-center max-w-[95%] sm:max-w-3xl md:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed"
      >
        Your trusted partner for vehicle inspections and mechanical services in Geelong since 2008
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mb-16 sm:mb-0"
      >
        {/* Updated button colors to match the red theme */}
        <a 
          href="#our-story" 
          className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center w-full sm:w-auto"
        >
          <span className="relative z-10 flex items-center justify-center">
            Our Story
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
        </a>
        
        <a 
          href="/services" 
          className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-red-500/30 hover:border-red-500/80 text-white font-medium rounded-lg transition-all duration-300 backdrop-blur-sm text-center w-full sm:w-auto whitespace-nowrap"
        >
          <span className="relative z-10 flex items-center justify-center">
            Our Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>
      </motion.div>
    </motion.div>
    
    {/* Scroll Indicator - updated to match red theme */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-20 sm:bottom-10 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden sm:flex"
    >
      <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-6 h-10 border-2 border-red-500/30 rounded-full flex justify-center pt-1"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1.5 h-1.5 bg-red-600 rounded-full"
        ></motion.div>
      </motion.div>
    </motion.div>
  </div>
  
  {/* Stats Bar - updated to match the red theme */}
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-950/90 to-red-900/90 backdrop-blur-md z-30 py-3 sm:py-4 md:py-6 border-t border-red-500/20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-8">
        <div className="text-center">
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0 sm:mb-1">15+</div>
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0 sm:mb-1">10k+</div>
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Vehicles Serviced</div>
        </div>
        <div className="text-center">
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0 sm:mb-1">5</div>
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Expert Mechanics</div>
        </div>
        <div className="text-center">
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0 sm:mb-1">4.9</div>
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Customer Rating</div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Add this to your global CSS for the floating animation */}
  <style jsx global>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 0.3;
      }
      50% {
        transform: translateY(-20px) scale(1.5);
        opacity: 0.1;
      }
    }
    
    /* Add this to fix the horizontal scrollbar issue */
    @media (max-width: 768px) {
      .max-w-\[100vw\] {
        max-width: 100vw;
        overflow-x: hidden;
      }
    }
  `}</style>
</section>

      {/* Our Story Section - Added ID for scroll target */}
      <section id="our-story" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-4 sm:mb-6">Our Story</h2>
                <div className="space-y-3 sm:space-y-4 text-gray-600">
                  <p>
                    SLR Auto Care was founded in 2008 with a simple mission: to provide honest, reliable, and
                    professional vehicle inspection and mechanical services to the Geelong community.
                  </p>
                  <p>
                    What started as a small workshop with just two mechanics has grown into a trusted name in the
                    automotive industry, serving thousands of satisfied customers across Geelong and surrounding areas.
                  </p>
                  <p>
                    Our team of experienced technicians is committed to delivering exceptional service, using the latest
                    diagnostic equipment and techniques to ensure your vehicle is safe, reliable, and performing at its
                    best.
                  </p>
                </div>
                {/* <div className="mt-6 sm:mt-8">
                  <Button className="bg-red-900 hover:bg-red-800 group relative overflow-hidden w-full sm:w-auto">
                    <span className="relative z-10 flex items-center">
                      Meet Our Team
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Button>
                </div> */}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="relative mt-8 lg:mt-0">
                <div className="absolute -top-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-red-100 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-red-100 rounded-full"></div>
                <div className="relative z-10">
                  <Image
                    src="/images/workshop.jpg"
                    alt="SLR Auto Care Workshop"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-3 sm:mb-4">Our Values</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                At SLR Auto Care, our values guide everything we do. We're committed to providing exceptional
                service with integrity, expertise, and a customer-first approach.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center h-full flex flex-col items-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <CheckCircle className="h-6 sm:h-8 w-6 sm:w-8 text-red-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Integrity</h3>
                <p className="text-gray-600 text-sm sm:text-base flex-grow">
                  We believe in honest communication and transparent pricing. No hidden fees, no unnecessary repairs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center h-full flex flex-col items-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="h-6 sm:h-8 w-6 sm:w-8 text-red-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Customer Focus</h3>
                <p className="text-gray-600 text-sm sm:text-base flex-grow">
                  Your satisfaction is our priority. We go above and beyond to ensure you receive exceptional service.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center h-full flex flex-col items-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Award className="h-6 sm:h-8 w-6 sm:w-8 text-red-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Excellence</h3>
                <p className="text-gray-600 text-sm sm:text-base flex-grow">
                  We strive for excellence in everything we do, from customer service to technical expertise.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center h-full flex flex-col items-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Clock className="h-6 sm:h-8 w-6 sm:w-8 text-red-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Efficiency</h3>
                <p className="text-gray-600 text-sm sm:text-base flex-grow">
                  We respect your time and work efficiently to get you back on the road as quickly as possible.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      {/* <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-3 sm:mb-4">Meet Our Team</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Our experienced team of certified mechanics and technicians is dedicated to providing you with the
                highest quality service.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-48 sm:h-56 md:h-64 relative">
                  <Image src="/placeholder.svg?height=400&width=600" alt="John Smith" fill className="object-cover" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">John Smith</h3>
                  <p className="text-red-900 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Lead Mechanic</p>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    With over 15 years of experience, John leads our team of mechanics and specializes in diagnostic
                    troubleshooting.
                  </p>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Tool className="h-3 sm:h-4 w-3 sm:w-4 mr-2" />
                    <span>Certified Master Technician</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-48 sm:h-56 md:h-64 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-red-900 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Service Manager</p>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    Sarah ensures that all services are completed to the highest standards and oversees customer
                    satisfaction.
                  </p>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Tool className="h-3 sm:h-4 w-3 sm:w-4 mr-2" />
                    <span>Customer Service Specialist</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-48 sm:h-56 md:h-64 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Michael Brown"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">Michael Brown</h3>
                  <p className="text-red-900 font-medium mb-2 sm:mb-3 text-sm sm:text-base">EV Specialist</p>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    Michael specializes in electric and hybrid vehicles, keeping up with the latest technologies and
                    service techniques.
                  </p>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Tool className="h-3 sm:h-4 w-3 sm:w-4 mr-2" />
                    <span>EV Certified Technician</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button variant="outline" className="border-red-900 text-red-900 hover:bg-red-900 hover:text-white w-full sm:w-auto">
              View All Team Members
            </Button>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl mb-4 sm:mb-6">
                Ready to Experience the Difference?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8">
                Book your vehicle inspection or service today and see why SLR Auto Care is the trusted choice for
                vehicle care in Geelong.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100 w-full sm:w-auto" onClick={() => setIsBookingModalOpen(true)}>
                  Book an Appointment
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/10 w-full sm:w-auto">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  )
}