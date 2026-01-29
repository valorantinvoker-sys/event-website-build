"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

// Background images for the hero slideshow
const heroImages = [
  {
    src: "/images/oxhtctio4tldvpayhemb2gmgoho58krmtpwegguh.jpg",
    alt: "IHEC Conference Hall"
  },
  {
    src: "/images/ihec.jpg",
    alt: "IHEC Carthage Campus"
  },
  {
    src: "/images/2.jpg",
    alt: "Marketing Méditerranée Panel Discussion"
  },
  {
    src: "/images/cropped-13754233-1177431605611292-8017127498632495868-n-1.jpg",
    alt: "MMT Networking Event"
  },
]

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2026-02-14T09:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="flex min-w-[70px] flex-col items-center rounded-lg bg-black/40 px-3 py-3 backdrop-blur-md sm:min-w-[80px] sm:px-4"
        >
          <span className="text-2xl font-bold text-white sm:text-3xl">
            {unit.value.toString().padStart(2, "0")}
          </span>
          <span className="text-xs text-white/80 sm:text-sm">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}

function BackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState<boolean[]>(new Array(heroImages.length).fill(false))

  const handleImageLoad = useCallback((index: number) => {
    setIsLoaded(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 8000) // Change image every 8 seconds - slow, elegant timing

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0">
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className="absolute inset-0 transition-opacity duration-[3000ms] ease-in-out"
          style={{ opacity: currentIndex === index ? 1 : 0 }}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            onLoad={() => handleImageLoad(index)}
            sizes="100vw"
          />
        </div>
      ))}
      {/* Soft black gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden px-4 pt-20 pb-12 sm:min-h-screen sm:px-6 sm:pb-20 lg:px-8">
      {/* Background slideshow */}
      <BackgroundSlideshow />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Main Title - Enhanced contrast */}
          <h1 className="animate-fade-in-up mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-balance">IHEC</span>
            <br />
            <span className="text-white">Consulting Days</span>
          </h1>

          {/* Tagline - Enhanced contrast */}
          <p className="animate-fade-in-up delay-100 mb-6 max-w-2xl text-lg font-medium leading-relaxed text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] sm:mb-8 sm:text-xl lg:text-2xl">
            Where Students Become Consultants.
            <br className="hidden sm:block" />
            48 Hours to Solve Real Business Challenges.
          </p>

          {/* Date & Location */}
          <div className="animate-fade-in-up delay-200 mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center justify-center gap-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] sm:justify-start">
              <Calendar className="h-5 w-5 text-white" />
              <span className="text-base font-semibold sm:text-lg">
                February 14-15, 2026
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] sm:justify-start">
              <MapPin className="h-5 w-5 text-white" />
              <span className="text-base font-semibold sm:text-lg">
                IHEC Carthage, Tunisia
              </span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="animate-fade-in-up delay-300 mb-8 sm:mb-10">
            <CountdownTimer />
          </div>

          {/* CTAs - Mobile optimized */}
          <div className="animate-fade-in-up delay-400 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="w-full bg-[#00C9FF] px-8 py-6 text-base font-bold text-white shadow-[0_4px_20px_rgba(0,201,255,0.4)] transition-all hover:bg-[#00B4D8] hover:scale-105 hover:shadow-[0_6px_30px_rgba(0,201,255,0.6)] sm:w-auto sm:px-10 sm:py-7 sm:text-lg"
            >
              <Link href="#register">Register Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-2 border-white/40 bg-white/10 px-6 py-5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white sm:w-auto sm:px-8 sm:py-6"
            >
              <Link href="/sponsorship">Become a Sponsor</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 animate-bounce sm:bottom-8 sm:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-2">
          <div className="h-2 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  )
}
