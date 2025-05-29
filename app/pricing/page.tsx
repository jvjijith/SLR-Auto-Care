"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ModernNav } from "@/components/modern-nav"
import { BookingModal } from "@/components/booking-modal"
import { ArrowRight } from "lucide-react"
import Footer from "@/components/footer"

export default function PricingPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <ModernNav />

      {/* Hero Section - Updated to match About page style */}
      <section className="min-h-[80vh] relative overflow-hidden">
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
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-700/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-900/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
        <div className="relative z-30 container mx-auto px-4 md:px-6 pt-40 pb-32 flex flex-col items-center justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <span className="block text-sm md:text-base uppercase tracking-widest text-red-400 font-medium mb-4 text-center">
              Transparent & Competitive
            </span>
            
            <div className="relative">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white text-center mb-6 leading-tight">
                Our <span className="relative inline-block">
                  <span className="relative z-10">Pricing</span>
                </span>
              </h1>
              
              {/* Updated divider with stronger red */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent max-w-xl mx-auto mb-8"
              ></motion.div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Transparent pricing with no hidden fees or surprises
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              {/* Updated button colors to match the red theme */}
              <Button
                size="lg"
                className="group relative px-8 py-4 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                onClick={() => setIsBookingModalOpen(true)}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Book a Service
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              </Button>
              
              <Button
                size="lg" 
                variant="outline"
                className="group relative px-8 py-4 bg-transparent border-2 border-red-500/30 hover:border-red-500/80 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 backdrop-blur-sm"
                asChild
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center justify-center">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Scroll Indicator - updated to match red theme */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-950/90 to-red-900/90 backdrop-blur-md z-30 py-6 border-t border-red-500/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">$0</div>
                <div className="text-white/70 text-sm">Call-Out Fee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-white/70 text-sm">Price Transparency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">10%</div>
                <div className="text-white/70 text-sm">Senior Discount</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">Best</div>
                <div className="text-white/70 text-sm">Price Guarantee</div>
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
        `}</style>
      </section>

      {/* Pricing Tabs */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-4">Service Pricing</h2>
              <p className="text-gray-600">
                We offer competitive pricing for all our services. Select a category below to view our pricing.
              </p>
            </div>
          </ScrollReveal>

          <Tabs defaultValue="inspections" className="w-full max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 p-1 bg-gray-100 rounded-full">
                <TabsTrigger
                  value="inspections"
                  className="rounded-full data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all duration-300"
                >
                  Inspections
                </TabsTrigger>
                <TabsTrigger
                  value="services"
                  className="rounded-full data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all duration-300"
                >
                  Maintenance
                </TabsTrigger>
                <TabsTrigger
                  value="repairs"
                  className="rounded-full data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all duration-300"
                >
                  Repairs
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="inspections" className="mt-0">
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-red-900 text-white p-4">
                  <h3 className="text-xl font-bold">Inspection Services</h3>
                </div>
                <div className="p-0">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Details
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">Roadworthy Inspection</div>
                          <div className="text-sm text-gray-500">Standard Vehicle</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">$150</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            Comprehensive inspection for certificate of roadworthiness
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <Button
                            size="sm"
                            className="bg-red-900 hover:bg-red-800"
                            onClick={() => setIsBookingModalOpen(true)}
                          >
                            Book Now
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">Roadworthy Inspection</div>
                          <div className="text-sm text-gray-500">Commercial Vehicle</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">$180</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">Comprehensive inspection for commercial vehicles</div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <Button
                            size="sm"
                            className="bg-red-900 hover:bg-red-800"
                            onClick={() => setIsBookingModalOpen(true)}
                          >
                            Book Now
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">Pre-Purchase Inspection</div>
                          <div className="text-sm text-gray-500">Used Vehicle</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">$200</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">Detailed inspection before buying a used vehicle</div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <Button
                            size="sm"
                            className="bg-red-900 hover:bg-red-800"
                            onClick={() => setIsBookingModalOpen(true)}
                          >
                            Book Now
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">Safety Inspection</div>
                          <div className="text-sm text-gray-500">All Vehicles</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">$120</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">Basic safety check for peace of mind</div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <Button
                            size="sm"
                            className="bg-red-900 hover:bg-red-800"
                            onClick={() => setIsBookingModalOpen(true)}
                          >
                            Book Now
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-0">
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-red-900 text-white p-4">
                  <h3 className="text-xl font-bold">Maintenance Services</h3>
                </div>
                <div className="p-0">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Details
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">Basic Service</div>
                          <div className="text-sm text-gray-500">All Vehicles</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">From $180</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">Oil change, filter replacement, basic inspection</div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <Button
                            size="sm"
                            className="bg-red-900 hover:bg-red-800"
                            onClick={() => setIsBookingModalOpen(true)}
                          >
                            Book Now
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">Logbook Service</div>
                          <div className="text-sm text-gray-500">All Vehicles</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">From $250</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            Manufacturer-specified service to maintain warranty
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <Button
                            size="sm"
                            className="bg-red-900 hover:bg-red-800"
                            onClick={() => setIsBookingModalOpen(true)}
                          >
                            Book Now
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">Car AC Regas</div>
                          <div className="text-sm text-gray-500">All Vehicles</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">$150</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">Air conditioning service and refrigerant recharge</div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <Button
                            size="sm"
                            className="bg-red-900 hover:bg-red-800"
                            onClick={() => setIsBookingModalOpen(true)}
                          >
                            Book Now
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">Wheel Alignment</div>
                          <div className="text-sm text-gray-500">All Vehicles</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">$120</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">Precision wheel alignment for optimal handling</div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <Button
                            size="sm"
                            className="bg-red-900 hover:bg-red-800"
                            onClick={() => setIsBookingModalOpen(true)}
                          >
                            Book Now
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="repairs" className="mt-0">
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-red-900 text-white p-4">
                  <h3 className="text-xl font-bold">Repair Services</h3>
                </div>
                <div className="p-0">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Details
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">Brake Replacement</div>
                          <div className="text-sm text-gray-500">Front or Rear</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">From $220</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            Replacement of brake pads and inspection of rotors
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <Button
                            size="sm"
                            className="bg-red-900 hover:bg-red-800"
                            onClick={() => setIsBookingModalOpen(true)}
                          >
                            Book Now
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">Clutch Replacement</div>
                          <div className="text-sm text-gray-500">Manual Vehicles</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">From $800</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            Replacement of clutch kit and associated components
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <Button
                            size="sm"
                            className="bg-red-900 hover:bg-red-800"
                            onClick={() => setIsBookingModalOpen(true)}
                          >
                            Book Now
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">Timing Belt Replacement</div>
                          <div className="text-sm text-gray-500">Most Vehicles</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">From $650</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">Replacement of timing belt and tensioners</div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <Button
                            size="sm"
                            className="bg-red-900 hover:bg-red-800"
                            onClick={() => setIsBookingModalOpen(true)}
                          >
                            Book Now
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">Suspension Repair</div>
                          <div className="text-sm text-gray-500">Per Component</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">From $180</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">Replacement of worn suspension components</div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <Button
                            size="sm"
                            className="bg-red-900 hover:bg-red-800"
                            onClick={() => setIsBookingModalOpen(true)}
                          >
                            Book Now
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h3 className="text-2xl font-bold text-red-900 mb-4">Pricing Notes</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  All prices listed are estimates and may vary depending on the make, model, and condition of your
                  vehicle. We will always provide a detailed quote before proceeding with any work.
                </p>
                <p>
                  Additional parts and labor may be required based on the specific needs of your vehicle. Our
                  technicians will discuss any additional costs with you before proceeding.
                </p>
                <p>
                  We offer a price match guarantee on all our services. If you find a lower price for the same service
                  from a licensed mechanic in Geelong, we'll match it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Ready to Book Your Service?</h2>
              <p className="text-xl text-white/80 mb-8">
                Schedule your appointment today and experience the SLR Auto Care difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-red-900 hover:bg-gray-100"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
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
