"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ModernNav } from "@/components/modern-nav"
import { BookingModal } from "@/components/booking-modal"
import { BookingForm } from "@/components/booking-form"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Car, CheckCircle, MapPin, Phone, Mail, Clock, FileCheck, Shield, Award, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Footer from "@/components/footer"

export default function RoadworthyInspectionsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <ModernNav />

      {/* Hero Section - Updated to match About page style */}
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
          animationDelay: `${Math.random() * 5}s`,
        }}
      ></div>
    ))}
  </div>

  {/* Content Container */}
  <div className="relative z-30 container mx-auto px-4 md:px-6 pt-24 sm:pt-32 md:pt-40 pb-28 sm:pb-24 md:pb-32 flex flex-col items-center justify-center min-h-[80vh]">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <span className="block text-sm md:text-base uppercase tracking-widest text-red-400 font-medium mb-4 text-center">
        Licensed Vehicle Testing Station
      </span>

      <div className="relative">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-6 leading-tight">
          Geelong{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Roadworthy</span>
          </span>{" "}
          Inspections
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
        Fast, thorough, and reliable vehicle inspections by licensed testers
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mb-16 sm:mb-0"
      >
        {/* Updated button colors to match the red theme */}
        <Button
          size="lg"
          className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center w-full sm:w-auto"
          onClick={() => setIsBookingModalOpen(true)}
        >
          <span className="relative z-10 flex items-center justify-center">
            Book Inspection
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-red-500/30 hover:border-red-500/80 text-white font-medium rounded-lg transition-all duration-300 backdrop-blur-sm text-center w-full sm:w-auto whitespace-nowrap"
          asChild
        >
          <a href="#contact-us">
            <span className="relative z-10 flex items-center justify-center">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </Button>
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
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Vehicles Inspected</div>
        </div>
        <div className="text-center">
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0 sm:mb-1">100%</div>
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Licensed Testers</div>
        </div>
        <div className="text-center">
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0 sm:mb-1">24h</div>
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Fast Turnaround</div>
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

      {/* About Roadworthy Inspections */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-6">
                  What is a Roadworthy Inspection?
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    A roadworthy inspection (also known as a Certificate of Roadworthiness or RWC) is a thorough
                    assessment of your vehicle's safety and roadworthiness. It ensures that your vehicle meets the
                    minimum safety standards required by VicRoads.
                  </p>
                  <p>
                    At SLR Auto Care, our licensed vehicle testers conduct comprehensive inspections covering
                    all critical safety components of your vehicle, from brakes and steering to lights, tires, and
                    suspension.
                  </p>
                  <p>
                    Whether you're selling your vehicle, re-registering it, or transferring ownership, our team will
                    provide a thorough inspection and issue a roadworthy certificate if your vehicle passes.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-red-900 h-5 w-5" />
                    <span>Licensed Vehicle Testers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-red-900 h-5 w-5" />
                    <span>Quick Turnaround</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-red-900 h-5 w-5" />
                    <span>Detailed Inspection Report</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    className="bg-red-900 hover:bg-red-800 group relative overflow-hidden"
                    onClick={() => setIsBookingModalOpen(true)}
                  >
                    <span className="relative z-10 flex items-center">
                      Book Your Inspection
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-red-100 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-100 rounded-full"></div>
                <div className="relative z-10">
                  <Image
                    src="/images/workshop.jpg"
                    alt="Roadworthy Inspection"
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

      {/* When You Need a Roadworthy Certificate */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-4">
                When Do You Need a Roadworthy Certificate?
              </h2>
              <p className="text-gray-600">
                A roadworthy certificate is required in several situations. Here's when you'll need one:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Car className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Selling Your Vehicle</h3>
                <p className="text-gray-600">
                  When selling a registered vehicle in Victoria, you must provide a roadworthy certificate to the buyer.
                  This certificate must be less than 30 days old at the time of sale.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Re-registering a Vehicle</h3>
                <p className="text-gray-600">
                  If your vehicle registration has lapsed for more than 3 months, you'll need a roadworthy certificate
                  to re-register it with VicRoads.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transferring Registration</h3>
                <p className="text-gray-600">
                  When transferring a vehicle's registration to a new owner, a roadworthy certificate is required unless
                  the vehicle is exempt or being transferred to a spouse or domestic partner.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Clearing a Vehicle Defect Notice</h3>
                <p className="text-gray-600">
                  If your vehicle has been issued a defect notice by police or VicRoads, you may need a roadworthy
                  certificate to clear the notice and continue driving legally.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Interstate Registration Transfer</h3>
                <p className="text-gray-600">
                  When transferring a vehicle's registration from another state to Victoria, you'll need to obtain a
                  Victorian roadworthy certificate.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Car className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Peace of Mind</h3>
                <p className="text-gray-600">
                  Even if not legally required, many vehicle owners choose to get a roadworthy inspection for peace of
                  mind, especially when purchasing a used vehicle or before a long trip.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-4">
                What We Check During a Roadworthy Inspection
              </h2>
              <p className="text-gray-600">
                Our comprehensive roadworthy inspections cover all critical safety components of your vehicle:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-red-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Braking System</h3>
                    <p className="text-gray-600">Brake pads, discs, drums, lines, and parking brake functionality</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-red-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Steering & Suspension</h3>
                    <p className="text-gray-600">Steering components, suspension, shock absorbers, and bushings</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-red-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Wheels & Tires</h3>
                    <p className="text-gray-600">Tire condition, tread depth, wheel alignment, and wheel bearings</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-red-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Lights & Electrical</h3>
                    <p className="text-gray-600">Headlights, indicators, brake lights, horn, and windshield wipers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-red-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Body & Structure</h3>
                    <p className="text-gray-600">Body condition, rust, structural integrity, and seat belts</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-red-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Exhaust System</h3>
                    <p className="text-gray-600">Exhaust emissions, leaks, and catalytic converter condition</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-red-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Windscreen & Mirrors</h3>
                    <p className="text-gray-600">Windscreen condition, visibility, and mirror functionality</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-red-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Fuel System</h3>
                    <p className="text-gray-600">Fuel lines, tank condition, and absence of leaks</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-red-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Vehicle Identification</h3>
                    <p className="text-gray-600">VIN, engine number, and compliance plate verification</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-6">
                  Book Your Roadworthy Inspection
                </h2>
                <p className="text-gray-600 mb-8">
                  Schedule your roadworthy inspection online. We'll confirm your booking within 2 hours during business
                  hours.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="bg-red-900 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">Quick & Convenient</h3>
                      <p className="text-gray-600">Most inspections completed within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="bg-red-900 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">Pick-up & Drop-off</h3>
                      <p className="text-gray-600">Available within 5km of our location</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="bg-red-900 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">Call Us Directly</h3>
                      <p className="text-gray-600">
                        <a href="tel:0352025884" className="hover:underline">
                          03 5202 5884
                        </a><br/>
                        <a href="tel:61447430065" className="hover:underline">
                          61 447 430 065
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card className="overflow-hidden border-0 shadow-xl bg-white rounded-2xl">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-red-900 to-red-800 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Book Your Inspection</h3>
                    <p className="text-white/80">Fill out the form below and we'll get back to you shortly</p>
                  </div>
                  <div className="p-6">
                    <BookingForm serviceName="Roadworthy Inspection" />
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Section */}
      <section id="contact-us" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">Have questions about roadworthy inspections? Get in touch with our team.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-gray-50 p-6 rounded-lg text-center h-full flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Phone</h3>
                <p className="text-gray-600 mb-4">Call us directly for immediate assistance</p>
                <a href="tel:0352025884" className="text-red-900 font-medium hover:underline">
                  03 5202 5884
                </a>
                <a href="tel:61447430065" className="text-red-900 font-medium hover:underline">
                  61 447 430 065
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-gray-50 p-6 rounded-lg text-center h-full flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email</h3>
                <p className="text-gray-600 mb-4">Send us an email for any inquiries</p>
                <a href="mailto:slrgroupptyltd@gmail.com" className="text-red-900 font-medium hover:underline">
                  slrgroupptyltd@gmail.com
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-gray-50 p-6 rounded-lg text-center h-full flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Location</h3>
                <p className="text-gray-600 mb-4">Visit our workshop in </p>
                <address className="not-italic text-red-900 font-medium">5/32-44 Tarkin court Bell Park Vic 3215 Australia.</address>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="bg-gray-50 p-6 rounded-lg text-center h-full flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hours</h3>
                <p className="text-gray-600 mb-4">Our business hours</p>
                <div className="text-red-900 font-medium">
                  <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday by Appointent</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.1644304040566!2d144.3357655!3d-38.1890255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4170e5372e1c7%3A0x78e122b60c2de8d9!2s5%2F32-44%20Tarkin%20Ct%2C%20Bell%20Park%20VIC%203215%2C%20Australia!5e0!3m2!1sen!2sau!4v1716950500000!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SLR Auto Care Location"
        ></iframe>
        <div className="absolute top-4 left-4 bg-white p-6 rounded-lg shadow-xl max-w-sm backdrop-blur-sm bg-white/90 border border-white/20">
          <h3 className="font-bold text-red-900 text-xl mb-4 flex items-center">
            <MapPin className="mr-2 h-5 w-5" /> Find Us
          </h3>
          <p className="mb-4">5/32-44 Tarkin court Bell Park Vic 3215 Australia.</p>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="mr-2 h-4 w-4" /> Mon-Sat: 9:00 AM - 5:00 PM
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="mr-2 h-4 w-4" /> Sunday by Appointent
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="mr-2 h-4 w-4" /> 03 5202 5884
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="mr-2 h-4 w-4" /> 61 447 430 065
            </div>
          </div>
          <Button className="w-full mt-4 bg-red-900 hover:bg-red-800 group relative overflow-hidden" asChild>
            <a href="https://www.google.com/maps/place/SLR+Auto+Care/@-38.0963612,144.3391871,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad411d148311cc7:0x44d8a121cac18183!8m2!3d-38.0963612!4d144.341762!16s%2Fg%2F11khf3drz0?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center">
                Get Directions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Ready to Book Your Inspection?</h2>
              <p className="text-xl text-white/80 mb-8">
                Schedule your roadworthy inspection today and experience the SLR Auto Care difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-red-900 hover:bg-gray-100"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/10" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    
      {/* Footer */}
            <Footer/>
    </div>
  )
}
