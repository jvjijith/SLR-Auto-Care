"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { BookingModal } from "@/components/booking-modal"

export function ModernNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const openBookingModal = () => {
    setIsBookingModalOpen(true)
    setIsOpen(false) // Close mobile menu if open
  }

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4",
        )}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className="container px-4 md:px-6 flex items-center justify-between"
        >
          <Link href="/" className="flex items-center gap-2 z-50">
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                isScrolled ? "bg-red-900" : "bg-white",
              )}
            >
              <Image
                src="/images/logo.png"
                alt="GCS Autocare Grovedale Logo"
                width={40}
                height={40}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-bold text-xl transition-colors duration-300",
                  isScrolled ? "text-red-900" : "text-white",
                )}
              >
                GCS Autocare
              </span>
              <span
                className={cn(
                  "text-sm font-medium transition-colors duration-300 -mt-1",
                  isScrolled ? "text-gray-600" : "text-white/80",
                )}
              >
                Grovedale
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative px-4 py-2 font-medium transition-all duration-300 rounded-full hover:text-red-500",
                  isScrolled ? "text-gray-900" : "text-white",
                  pathname === item.path
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-red-500"
                    : "",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button
              onClick={openBookingModal}
              className={cn(
                "ml-4 transition-all duration-300 rounded-full",
                isScrolled ? "bg-red-900 hover:bg-red-800 text-white" : "bg-white hover:bg-gray-100 text-red-900",
              )}
            >
              Book Now
            </Button>
          </nav>

          <button
            onClick={toggleMenu}
            className={cn(
              "lg:hidden z-50 w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300",
              isOpen
                ? "bg-white text-red-900"
                : isScrolled
                  ? "bg-red-900 text-white"
                  : "bg-white/20 backdrop-blur-sm text-white",
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed inset-0 bg-red-900 flex flex-col justify-center items-center z-40 lg:hidden"
              >
                <div className="flex flex-col items-center gap-6 px-4">
                  {menuItems.map((item) => (
                    <motion.div key={item.path} variants={itemVariants}>
                      <Link
                        href={item.path}
                        className={cn(
                          "text-white text-2xl font-bold hover:text-red-200 transition-colors duration-300",
                          pathname === item.path ? "border-b-2 border-white pb-1" : "",
                        )}
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div variants={itemVariants} className="mt-6">
                    <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100" onClick={openBookingModal}>
                      Book Now
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="absolute bottom-10 flex flex-col items-center gap-4 text-white/80"
                >
                  <div className="flex gap-6">
                    <a href="tel:0352705676" className="hover:text-white transition-colors duration-300">
                      03 5270 5676
                    </a>
                    <a
                      href="mailto:info@roadworthygeelong.com.au"
                      className="hover:text-white transition-colors duration-300"
                    >
                      info@roadworthygeelong.com.au
                    </a>
                  </div>
                  <p className="text-sm">4/32 Essington St, Grovedale VIC 3216</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  )
}
