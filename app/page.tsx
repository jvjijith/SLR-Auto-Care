"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  Car,
  Wrench,
  FileCheck,
  ThermometerSnowflake,
  Zap,
  Gauge,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedCounter } from "@/components/animated-counter"
import { EnhancedHero } from "@/components/enhanced-hero"
import { ModernNav } from "@/components/modern-nav"
import { BookingForm } from "@/components/booking-form"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import type { ServiceDetails } from "@/components/service-modal"
import { BookingModal } from "@/components/booking-modal"
import Image from "next/image"
import Footer from "@/components/footer"

export default function Home() {
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
      price: "$150",
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
      price: "From $180",
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
      price: "From $250",
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
      price: "$150",
    },
    {
      id: "ev",
      title: "EV Services",
      description:
        "Our technicians are trained in the latest electric and hybrid vehicle technologies. We provide specialized maintenance and repairs to keep your EV running efficiently and safely.",
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
      price: "From $200",
    },
    {
      id: "tyres",
      title: "Tyre Change & Wheel Balancing",
      description:
        "Ensure optimal performance, safety, and tire life with our professional tyre fitting and wheel balancing services. We offer a wide range of quality tires at competitive prices.",
      icon: <Gauge className="h-10 w-10" />,
      image: "/images/workshop.jpg",
      features: [
        "Professional tyre fitting",
        "Computerized wheel balancing",
        "Tire rotation",
        "Wheel alignment check",
        "Tire pressure monitoring",
        "Puncture repairs",
      ],
      price: "From $120",
    },
  ]

  const handleServiceClick = (service: ServiceDetails) => {
    setSelectedService(service)
    setIsServiceModalOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Modern Navigation */}
      <ModernNav />

      {/* Enhanced Hero Section */}
      <EnhancedHero onBookNowClick={() => setIsBookingModalOpen(true)} />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-900">Our Services</h2>
              <div className="w-20 h-1 bg-red-900 my-4 relative">
                <div className="absolute -left-3 -top-1 w-3 h-3 bg-red-900 rounded-full animate-pulse"></div>
                <div className="absolute -right-3 -top-1 w-3 h-3 bg-red-900 rounded-full animate-pulse"></div>
              </div>
              <p className="max-w-[800px] text-gray-600 md:text-xl">
                Comprehensive automotive services to keep your vehicle in peak condition
              </p>
            </div>
          </ScrollReveal>

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
                  <p className="text-gray-600 mb-4">
                    {service.description.split(" ").slice(0, 15).join(" ")}...
                  </p>
                  {/* <div className="flex items-center text-red-900 font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div> */}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.7}>
            <div className="flex justify-center mt-12">
              <Button size="lg" className="bg-red-900 hover:bg-red-800 group relative overflow-hidden" asChild>
                <Link href="/services">
                  <span className="relative z-10 flex items-center">
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-100 rounded-full opacity-20 -mr-32 -mb-32"></div>
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-red-100 rounded-full opacity-20 -ml-16"></div>
      </section>

      {/* Why Choose Us Section with Parallax */}
      <ParallaxSection />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={5000} duration={2} />+
                </div>
                <p className="text-white/80">Vehicles Inspected</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={15} duration={2} />+
                </div>
                <p className="text-white/80">Years Experience</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={98} duration={2} />%
                </div>
                <p className="text-white/80">Customer Satisfaction</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={24} duration={2} />h
                </div>
                <p className="text-white/80">Fast Turnaround</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full opacity-50 -mr-48 -mt-48"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-900">
                What Our Customers Say
              </h2>
              <div className="w-20 h-1 bg-red-900 my-4 relative">
                <div className="absolute -left-3 -top-1 w-3 h-3 bg-red-900 rounded-full animate-pulse"></div>
                <div className="absolute -right-3 -top-1 w-3 h-3 bg-red-900 rounded-full animate-pulse"></div>
              </div>
              <p className="max-w-[800px] text-gray-600 md:text-xl">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Tabs defaultValue="tab1" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8 p-1 bg-gray-100 rounded-full">
                <TabsTrigger
                  value="tab1"
                  className="rounded-full data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all duration-300"
                >
                  John D.
                </TabsTrigger>
                <TabsTrigger
                  value="tab2"
                  className="rounded-full data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all duration-300"
                >
                  Sarah M.
                </TabsTrigger>
                <TabsTrigger
                  value="tab3"
                  className="rounded-full data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all duration-300"
                >
                  Michael T.
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="tab1"
                className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#FFD700"
                        stroke="#FFD700"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-pulse"
                        style={{ animationDelay: `${star * 0.1}s`, animationDuration: "3s" }}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-gray-600 text-lg">
                    "I needed a roadworthy certificate urgently and the team at SLR Auto Care were fantastic. They
                    got me in the same day, completed the inspection thoroughly and efficiently, and had me back on the
                    road in no time. Highly recommend their services!"
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-900 font-bold text-xl">
                      JD
                    </div>
                    <div>
                      <p className="font-bold">John D.</p>
                      <p className="text-sm text-gray-500">Geelong West</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab2"
                className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#FFD700"
                        stroke="#FFD700"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-pulse"
                        style={{ animationDelay: `${star * 0.1}s`, animationDuration: "3s" }}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-gray-600 text-lg">
                    "As a first-time car buyer, I was nervous about getting a roadworthy inspection. The team explained
                    everything clearly and made the process stress-free. They even pointed out a few minor issues that
                    needed attention before they became major problems. Great service!"
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-900 font-bold text-xl">
                      SM
                    </div>
                    <div>
                      <p className="font-bold">Sarah M.</p>
                      <p className="text-sm text-gray-500">Newtown</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab3"
                className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#FFD700"
                        stroke="#FFD700"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-pulse"
                        style={{ animationDelay: `${star * 0.1}s`, animationDuration: "3s" }}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-gray-600 text-lg">
                    "I've been taking my vehicles to SLR Auto Care for years now. Their attention to detail and
                    honest approach is refreshing. They never try to upsell unnecessary services and their prices are
                    fair. The pick-up and drop-off service is a game-changer for busy professionals like me."
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-900 font-bold text-xl">
                      MT
                    </div>
                    <div>
                      <p className="font-bold">Michael T.</p>
                      <p className="text-sm text-gray-500">Belmont</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
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
                  Book Your Inspection
                </h2>
                <p className="text-gray-600 mb-8">
                  Schedule your roadworthy inspection or service appointment online. We'll confirm your booking within 2
                  hours during business hours.
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
                        </a>{" "}
                        or{" "}
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
                    <h3 className="text-xl font-bold mb-2">Book Your Service</h3>
                    <p className="text-white/80">Fill out the form below and we'll get back to you shortly</p>
                  </div>
                  <div className="p-6">
                    <BookingForm />
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
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
