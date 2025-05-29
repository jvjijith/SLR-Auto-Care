"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ModernNav } from "@/components/modern-nav"
import { BookingModal } from "@/components/booking-modal"
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }

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
          animationDelay: `${Math.random() * 5}s`
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
        We're Here To Help
      </span>
      
      <div className="relative">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-6 leading-tight">
          Contact <span className="relative inline-block">
            <span className="relative z-10">Us</span>
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
        Get in touch with our team for inquiries, bookings, or assistance
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
            Book a Service
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
          <a href="#contact-form">
            <span className="relative z-10 flex items-center justify-center">
              Send Message
              <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0 sm:mb-1">24/7</div>
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Online Booking</div>
        </div>
        <div className="text-center">
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0 sm:mb-1">1hr</div>
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Response Time</div>
        </div>
        <div className="text-center">
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0 sm:mb-1">1</div>
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Locations</div>
        </div>
        <div className="text-center">
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0 sm:mb-1">5+</div>
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Expert Mechanics</div>
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

      {/* Contact Information Section */}
      <section id="contact-form" className="py-20 bg-white relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our services or need to schedule an appointment? Fill out the form and we'll get
                  back to you as soon as possible. Alternatively, you can reach us directly using the contact
                  information below.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-red-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Our Location</h3>
                      <p className="text-gray-600">5/32-44 Tarkin court Bell Park Vic 3215 Australia.</p>
                      <a
                        href="https://www.google.com/maps/place/SLR+Auto+Care/@-38.0963612,144.3391871,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad411d148311cc7:0x44d8a121cac18183!8m2!3d-38.0963612!4d144.341762!16s%2Fg%2F11khf3drz0?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-900 font-medium flex items-center mt-2 hover:underline"
                      >
                        Get Directions
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-red-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone Numbers</h3>
                      <p className="text-gray-600 mb-1">
                        <a href="tel:0352025884" className="hover:text-red-900">
                          03 5202 5884
                        </a>{" "}
                        (Office)
                      </p>
                      <p className="text-gray-600">
                        <a href="tel:61447430065" className="hover:text-red-900">
                          61 447 430 065
                        </a>{" "}
                        (Mobile)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-red-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email Address</h3>
                      <p className="text-gray-600">
                        <a href="mailto: slrgroupptyltd@gmail.com" className="hover:text-red-900">
                           slrgroupptyltd@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-red-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                      <p className="text-gray-600 mb-1">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600"></p>
                      <p className="text-gray-600">Sunday by Appointent</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-900 hover:text-white transition-colors duration-300"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-900 hover:text-white transition-colors duration-300"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-900 hover:text-white transition-colors duration-300"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-red-900 to-red-800 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Send Us a Message</h3>
                  <p className="text-white/80">Fill out the form below and we'll get back to you shortly</p>
                </div>
                <div className="p-6">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-8 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                      >
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">Message Sent Successfully</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out! We'll respond to your inquiry as soon as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input
                            id="first-name"
                            placeholder="John"
                            required
                            className="border-gray-300 focus:border-red-900 focus:ring-red-900"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input
                            id="last-name"
                            placeholder="Doe"
                            required
                            className="border-gray-300 focus:border-red-900 focus:ring-red-900"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          required
                          className="border-gray-300 focus:border-red-900 focus:ring-red-900"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="0400 000 000"
                          required
                          className="border-gray-300 focus:border-red-900 focus:ring-red-900"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="How can we help you?"
                          required
                          className="border-gray-300 focus:border-red-900 focus:ring-red-900"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide details about your inquiry..."
                          className="min-h-[120px] border-gray-300 focus:border-red-900 focus:ring-red-900"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-red-900 hover:bg-red-800 group relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                      </Button>
                    </form>
                  )}
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
              <Clock className="mr-2 h-4 w-4" /> Mon-Sat: 9AM-5pm
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

      {/* Footer */}
            <Footer/>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  )
}
