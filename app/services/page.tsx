"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ModernNav } from "@/components/modern-nav"
import { BookingModal } from "@/components/booking-modal"
import { ServiceModal, type ServiceDetails } from "@/components/service-modal"
import {
  ArrowRight,
  Car,
  Wrench,
  FileCheck,
  ThermometerSnowflake,
  Zap,
  Gauge,
  CheckCircle,
  Search,
  Activity,
} from "lucide-react"
import { motion } from "framer-motion"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null)

  const services: ServiceDetails[] = [
    {
      id: "roadworthy",
      title: "Roadworthy Inspection",
      description:
        "Our comprehensive roadworthy inspections ensure your vehicle meets all safety standards required by VicRoads. Whether you're selling your vehicle, re-registering it, or transferring ownership, our licensed vehicle testers will provide a thorough inspection and issue a roadworthy certificate if your vehicle passes.",
      icon: <Car className="h-10 w-10" />,
      image: "/images/hero-1.jpg",
      features: [
        "Comprehensive safety inspection",
        "Licensed vehicle testers",
        "Quick turnaround time",
        "Detailed inspection report",
        "Certificate issued on the spot if passed",
        "Repairs available if needed",
      ],
    },
    {
      id: "mechanical",
      title: "General Mechanical Services",
      description:
        "Our experienced mechanics provide comprehensive mechanical services for all makes and models. From routine maintenance to complex repairs, we have the expertise and equipment to keep your vehicle running smoothly and safely.",
      icon: <Wrench className="h-10 w-10" />,
      image: "/images/workshop.jpg",
      features: [
        "Comprehensive vehicle diagnostics",
        "Engine repairs and maintenance",
        "Transmission service and repair",
        "Brake system inspection and repair",
        "Suspension and steering repairs",
        "Electrical system diagnosis and repair",
      ],
    },
    {
      id: "logbook",
      title: "Logbook Service",
      description:
        "Maintain your new car warranty with our manufacturer-specified logbook services. We follow all manufacturer guidelines and use genuine or equivalent parts to ensure your warranty remains valid while providing excellent value.",
      icon: <FileCheck className="h-10 w-10" />,
      image: "/images/hero-2.jpg",
      features: [
        "Manufacturer-specified service",
        "Genuine or equivalent parts",
        "Digital service record",
        "Warranty-compliant servicing",
        "Comprehensive vehicle inspection",
        "Stamp in service logbook",
      ],
    },
    {
      id: "ac",
      title: "Car AC Regas",
      description:
        "Keep your vehicle cool and comfortable with our air conditioning service and regas. We'll check for leaks, repair any issues, and recharge your system with the correct refrigerant to ensure optimal performance.",
      icon: <ThermometerSnowflake className="h-10 w-10" />,
      image: "/images/hero-3.jpg",
      features: [
        "System leak check",
        "Refrigerant recharge",
        "Performance testing",
        "Component inspection",
        "Filter replacement if needed",
        "Odor elimination",
      ],
    },
    {
      id: "ev",
      title: "EV Services",
      description:
        "Our technicians are trained in the latest electric and hybrid vehicle technologies. We provide maintenance and repairs to keep your EV running efficiently and safely.",
      icon: <Zap className="h-10 w-10" />,
      image: "/images/parallax-bg.jpg",
      features: [
        "EV-specific diagnostics",
        "Battery health check",
        "Charging system inspection",
        "Regenerative braking service",
        "Electric motor maintenance",
        "Software updates",
      ],
    },
    {
      id: "tyres",
      title: "Tyre Change & Wheel Balancing",
      description:
        "Ensure optimal performance, safety, and tire life with our professional tyre fitting and wheel balancing services. We offer a wide range of quality tires at competitive prices.",
      icon: <Gauge className="h-10 w-10" />,
      image: "/images/tyre-service.png",
      features: [
        "Professional tyre fitting",
        "Computerized wheel balancing",
        "Tire rotation",
        "Wheel alignment check",
        "Tire pressure monitoring",
        "Puncture repairs",
      ],
    },
    {
      id: "suspension",
      title: "Suspension Repair and Replacement",
      description:
        "Our suspension repair and replacement services ensure your vehicle handles properly and provides a comfortable ride. We diagnose and repair all suspension components to restore your vehicle's handling and stability.",
      icon: <Activity className="h-10 w-10" />,
      image: "/images/workshop.jpg",
      features: [
        "Shock absorber replacement",
        "Strut replacement",
        "Spring repair and replacement",
        "Control arm replacement",
        "Bushing replacement",
        "Comprehensive suspension inspection",
      ],
    },
    {
      id: "diagnostic",
      title: "Diagnostic Scanning",
      description:
        "Our advanced diagnostic scanning services can quickly identify issues with your vehicle's systems. We use the latest diagnostic equipment to pinpoint problems and provide effective solutions.",
      icon: <Search className="h-10 w-10" />,
      image: "/images/hero-2.jpg",
      features: [
        "Engine management system diagnostics",
        "ABS and traction control diagnostics",
        "Airbag system diagnostics",
        "Transmission control system diagnostics",
        "Electrical system diagnostics",
        "Check engine light diagnosis",
      ],
    },
  ]

  const handleServiceClick = (service: ServiceDetails) => {
    setSelectedService(service)
    setIsServiceModalOpen(true)
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
        Professional Auto Care
      </span>

      <div className="relative">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-6 leading-tight">
          Our{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Services</span>
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
        Comprehensive automotive services to keep your vehicle in peak condition
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
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0 sm:mb-1">6+</div>
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Service Types</div>
        </div>
        <div className="text-center">
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0 sm:mb-1">10k+</div>
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Vehicles Serviced</div>
        </div>
        <div className="text-center">
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0 sm:mb-1">100%</div>
          <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">Satisfaction</div>
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

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-4">
                Comprehensive Automotive Services
              </h2>
              <p className="text-gray-600">
                At SLR Auto Care, we offer a wide range of automotive services to keep your vehicle running
                smoothly and safely.
              </p>
            </div>
          </ScrollReveal>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 p-1 bg-gray-100 rounded-full">
                <TabsTrigger
                  value="all"
                  className="rounded-full data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all duration-300"
                >
                  All Services
                </TabsTrigger>
                <TabsTrigger
                  value="inspection"
                  className="rounded-full data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all duration-300"
                >
                  Inspections
                </TabsTrigger>
                <TabsTrigger
                  value="maintenance"
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

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <ScrollReveal key={service.id} delay={index * 0.1}>
                    <div
                      className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-red-100 cursor-pointer"
                      onClick={() => handleServiceClick(service)}
                    >
                      <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 text-red-900 transition-all duration-300 group-hover:bg-red-900 group-hover:text-white">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description.split(" ").slice(0, 15).join(" ")}...</p>
                      {/* <div className="flex items-center text-red-900 font-medium">
                        <span>View Details</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div> */}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="inspection" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services
                  .filter((service) => ["roadworthy"].includes(service.id))
                  .map((service, index) => (
                    <ScrollReveal key={service.id} delay={index * 0.1}>
                      <div
                        className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-red-100 cursor-pointer"
                        onClick={() => handleServiceClick(service)}
                      >
                        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 text-red-900 transition-all duration-300 group-hover:bg-red-900 group-hover:text-white">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description.split(" ").slice(0, 15).join(" ")}...</p>
                        <div className="flex items-center text-red-900 font-medium">
                          <span>View Details</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="maintenance" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services
                  .filter((service) => ["logbook", "ac", "tyres"].includes(service.id))
                  .map((service, index) => (
                    <ScrollReveal key={service.id} delay={index * 0.1}>
                      <div
                        className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-red-100 cursor-pointer"
                        onClick={() => handleServiceClick(service)}
                      >
                        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 text-red-900 transition-all duration-300 group-hover:bg-red-900 group-hover:text-white">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description.split(" ").slice(0, 15).join(" ")}...</p>
                        <div className="flex items-center text-red-900 font-medium">
                          <span>View Details</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="repairs" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services
                  .filter((service) => ["mechanical", "ev", "suspension", "diagnostic"].includes(service.id))
                  .map((service, index) => (
                    <ScrollReveal key={service.id} delay={index * 0.1}>
                      <div
                        className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-red-100 cursor-pointer"
                        onClick={() => handleServiceClick(service)}
                      >
                        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 text-red-900 transition-all duration-300 group-hover:bg-red-900 group-hover:text-white">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description.split(" ").slice(0, 15).join(" ")}...</p>
                        <div className="flex items-center text-red-900 font-medium">
                          <span>View Details</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-6">
                  Roadworthy Inspections
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our comprehensive roadworthy inspections ensure your vehicle meets all safety standards required by
                    VicRoads.
                  </p>
                  <p>
                    Whether you're selling your vehicle, re-registering it, or transferring ownership, our licensed
                    vehicle testers will provide a thorough inspection and issue a roadworthy certificate if your
                    vehicle passes.
                  </p>
                  <p>
                    If your vehicle doesn't pass, we'll provide a detailed report of the issues that need to be
                    addressed and can perform the necessary repairs to get your vehicle roadworthy.
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
                <div className="mt-8 flex gap-4">
                  <Button
                    className="bg-red-900 hover:bg-red-800 group relative overflow-hidden"
                    onClick={() => setIsBookingModalOpen(true)}
                  >
                    <span className="relative z-10 flex items-center">
                      Book Inspection
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-900 text-red-900 hover:bg-red-900 hover:text-white"
                    asChild
                  >
                    <Link href="/roadworthy-inspections">Learn More</Link>
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

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-4">Our Service Process</h2>
              <p className="text-gray-600">
                We follow a streamlined process to ensure your vehicle receives the best care possible.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-gray-50 p-6 rounded-lg text-center relative">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-900"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Book Appointment</h3>
                <p className="text-gray-600">Schedule your service online or by phone at a time that suits you.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-gray-50 p-6 rounded-lg text-center relative">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-900"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Vehicle Inspection</h3>
                <p className="text-gray-600">Our technicians perform a thorough inspection of your vehicle.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-gray-50 p-6 rounded-lg text-center relative">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-900"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Service & Repairs</h3>
                <p className="text-gray-600">We perform the necessary services or repairs with your approval.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="bg-gray-50 p-6 rounded-lg text-center relative">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-900"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Vehicle Return</h3>
                <p className="text-gray-600">We return your vehicle in optimal condition with a detailed report.</p>
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

      {/* Service Modal */}
      <ServiceModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        service={selectedService}
        onBookNow={() => {
          setIsServiceModalOpen(false)
          setIsBookingModalOpen(true)
        }}
      />

      {/* Footer */}
            <Footer/>
      
    </div>
  )
}