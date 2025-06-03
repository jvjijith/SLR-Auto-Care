"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface BookingFormProps {
  onComplete?: () => void
  serviceName?: string
}

export function BookingForm({ onComplete, serviceName = "General" }: BookingFormProps) {
  const [date, setDate] = useState<Date>()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [pickupService, setPickupService] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Get form data
  const formData = new FormData(e.currentTarget);
  const formObject: Record<string, string> = {};

  formData.forEach((value, key) => {
    formObject[key] = value.toString();
  });

  // Add timestamp and service name
  formObject.timestamp = new Date().toISOString();
  formObject.serviceName = serviceName;

  try {
    // Send form data to email endpoint
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // to: ['hhh300703@gmail.com'], // For testing
        to: ['slrgroupptyltd@gmail.com'], // Production email
        subject: `New Booking Request: ${serviceName}`,
        formData: formObject,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds if onComplete is provided
    if (onComplete) {
      setTimeout(() => {
        onComplete();
        // Reset the form state after it's closed
        setTimeout(() => {
          setIsSubmitted(false);
        }, 300);
      }, 3000);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    setIsSubmitting(false);
    // Handle error (you might want to show an error message to the user)
    alert('There was an error submitting your booking. Please try again.');
  }
};

  if (isSubmitted) {
    return (
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
        <h3 className="text-xl font-bold mb-2">Booking Request Received</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your booking request. We'll confirm your appointment shortly via email or phone.
        </p>
        {!onComplete && (
          <Button variant="outline" onClick={() => setIsSubmitted(false)}>
            Make Another Booking
          </Button>
        )}
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input
            id="first-name"
            name="firstName"
            placeholder="John"
            required
            className="border-gray-300 focus:border-red-900 focus:ring-red-900"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            id="last-name"
            name="lastName"
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
          name="email"
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
          name="phone"
          type="tel"
          placeholder="0400 000 000"
          required
          className="border-gray-300 focus:border-red-900 focus:ring-red-900"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Required</Label>
        <Select name="service" required>
          <SelectTrigger id="service" className="border-gray-300 focus:border-red-900 focus:ring-red-900">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="roadworthy">Roadworthy Inspection</SelectItem>
            <SelectItem value="mechanical">General Mechanical Service</SelectItem>
            <SelectItem value="logbook">Logbook Service</SelectItem>
            <SelectItem value="ac">Car AC Regas</SelectItem>
            <SelectItem value="ev">EV Service</SelectItem>
            <SelectItem value="tyres">Tyre Change & Wheel Balancing</SelectItem>
            <SelectItem value="suspension">Suspension Repair and Replacement</SelectItem>
            <SelectItem value="diagnostic">Diagnostic Scanning</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Preferred Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal border-gray-300 focus:border-red-900 focus:ring-red-900",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Select a date</span>}
              <input type="hidden" name="preferredDate" value={date ? format(date, "PPP") : ""} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="vehicle">Vehicle Registration or Details</Label>
        <Input
          id="vehicle"
          name="vehicleDetails"
          placeholder="Registration Number or Year, Make, Model"
          required
          className="border-gray-300 focus:border-red-900 focus:ring-red-900"
        />
      </div>

      <div className="flex items-start space-x-2 py-2">
        <Checkbox
          id="pickup-service"
          name="pickupService"
          checked={pickupService}
          onCheckedChange={(checked) => setPickupService(checked as boolean)}
          className="data-[state=checked]:bg-red-900 data-[state=checked]:border-red-900"
        />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="pickup-service"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Pick-up and Drop-off Service (within 5 KM)
          </Label>
          <p className="text-sm text-muted-foreground">We'll collect your vehicle and return it after service</p>
        </div>
      </div>

      <AnimatePresence>
        {pickupService && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2 overflow-hidden"
          >
            <Label htmlFor="pickup-address">Pick-up Address</Label>
            <Input
              id="pickup-address"
              name="pickupAddress"
              placeholder="Enter your full address"
              className="border-gray-300 focus:border-red-900 focus:ring-red-900"
            />
            <p className="text-xs text-gray-500">Note: Pick-up service is only available within 5km of our location</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please provide any additional details about your service requirements."
          className="min-h-[100px] border-gray-300 focus:border-red-900 focus:ring-red-900"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-red-900 hover:bg-red-800 group relative overflow-hidden"
        disabled={isSubmitting}
      >
        <span className="relative z-10 flex items-center">
          {isSubmitting ? "Submitting..." : "Submit Booking Request"}
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
            className={`ml-2 h-4 w-4 transition-transform duration-300 ${isSubmitting ? "" : "group-hover:translate-x-1"}`}
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
      </Button>
    </form>
  )
}
