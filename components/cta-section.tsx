"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="register"
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="relative mx-auto max-w-4xl text-center">
        <div
          className={`transition-all duration-700 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-charcoal">
            Ready to Take the Challenge?
          </span>
          <h2 className="mb-6 text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Join <span className="text-charcoal">IHEC Consulting Days 2026</span>
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-medium">
            {"Don't miss this unique opportunity to prove yourself, network with industry leaders, and kickstart your consulting career. Limited spots available."}
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="group w-full bg-[#00C9FF] px-8 py-5 text-base font-bold text-white shadow-[0_4px_20px_rgba(0,201,255,0.4)] transition-all duration-300 hover:bg-[#00B4D8] hover:scale-105 hover:shadow-[0_6px_30px_rgba(0,201,255,0.6)] sm:w-auto sm:px-10 sm:py-6 sm:text-lg"
            >
              <Link href="#register" className="flex items-center justify-center gap-2">
                Register Now
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-2 border-charcoal/30 bg-transparent px-8 py-5 text-base font-semibold text-charcoal transition-all duration-300 hover:border-charcoal hover:bg-charcoal/5 sm:w-auto sm:px-10 sm:py-6 sm:text-lg"
            >
              <Link href="/sponsorship">Sponsorship Info</Link>
            </Button>
          </div>

          {/* Registration deadline note */}
          <p className="mt-8 text-sm text-gray-medium">
            Registration closes February 10, 2026
          </p>
        </div>
      </div>
    </section>
  )
}
