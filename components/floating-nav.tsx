"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="SLR Auto Care Logo" width={40} height={40} className="w-10 h-10" />
          <span
            className={cn(
              "font-bold text-xl transition-colors duration-300",
              isScrolled ? "text-red-900" : "text-white",
            )}
          >
            SLR Auto Care
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "font-medium transition-colors duration-300 hover:text-red-500",
              isScrolled ? "text-gray-900" : "text-white",
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "font-medium transition-colors duration-300 hover:text-red-500",
              isScrolled ? "text-gray-900" : "text-white",
            )}
          >
            About
          </Link>
          <Link
            href="/services"
            className={cn(
              "font-medium transition-colors duration-300 hover:text-red-500",
              isScrolled ? "text-gray-900" : "text-white",
            )}
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className={cn(
              "font-medium transition-colors duration-300 hover:text-red-500",
              isScrolled ? "text-gray-900" : "text-white",
            )}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className={cn(
              "font-medium transition-colors duration-300 hover:text-red-500",
              isScrolled ? "text-gray-900" : "text-white",
            )}
          >
            Contact
          </Link>
          <Button
            className={cn(
              "ml-4 transition-all duration-300",
              isScrolled ? "bg-red-900 hover:bg-red-800 text-white" : "bg-white hover:bg-gray-100 text-red-900",
            )}
          >
            Book Now
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn("md:hidden", isScrolled ? "text-gray-900" : "text-white")}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between py-4 border-b">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/images/logo.png"
                    alt="SLR Auto Care Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="font-bold text-xl text-red-900">SLR Auto Care</span>
                </Link>
              </div>
              <nav className="flex flex-col gap-4 py-8">
                <Link href="/" className="text-lg font-medium px-4 py-2 hover:bg-gray-100 rounded-md">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-medium px-4 py-2 hover:bg-gray-100 rounded-md">
                  About
                </Link>
                <Link href="/services" className="text-lg font-medium px-4 py-2 hover:bg-gray-100 rounded-md">
                  Services
                </Link>
                <Link href="/pricing" className="text-lg font-medium px-4 py-2 hover:bg-gray-100 rounded-md">
                  Pricing
                </Link>
                <Link href="/contact" className="text-lg font-medium px-4 py-2 hover:bg-gray-100 rounded-md">
                  Contact
                </Link>
              </nav>
              <div className="mt-auto pb-8">
                <Button className="w-full bg-red-900 hover:bg-red-800">Book Now</Button>
                <div className="mt-4 px-4">
                  <p className="text-sm text-gray-500 mb-2">Contact Us</p>
                  <p className="text-sm mb-1">
                    <a href="tel:0352025884" className="hover:underline">
                      03 5202 5884
                    </a>
                  </p>
                  <p className="text-sm">
                    <a href="mailto: slrgroupptyltd@gmail.com" className="hover:underline">
                       slrgroupptyltd@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
