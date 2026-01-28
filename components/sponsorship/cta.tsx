"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SponsorshipCTA() {
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
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5FAFD] px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="relative mx-auto max-w-4xl text-center">
        <div
          className={`transition-all duration-700 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-charcoal">
            Ready to Partner?
          </span>
          <h2 className="mb-6 text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Contact MMT for <span className="text-charcoal">Sponsorship</span>
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-medium">
            Ready to become a partner? Our team is here to answer your questions and help you choose the right sponsorship package for your objectives.
          </p>

          {/* Contact Options */}
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="mailto:contact.marketingmed@gmail.com"
              className="flex w-full items-center gap-3 rounded-lg border border-charcoal/20 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:border-charcoal/40 hover:shadow-md sm:w-auto"
            >
              <Mail className="h-5 w-5 text-charcoal" />
              <div className="text-left">
                <p className="text-xs text-gray-medium sm:text-sm">Email us</p>
                <p className="text-sm font-medium text-charcoal sm:text-base">contact.marketingmed@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+21629281333"
              className="flex w-full items-center gap-3 rounded-lg border border-charcoal/20 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:border-charcoal/40 hover:shadow-md sm:w-auto"
            >
              <Phone className="h-5 w-5 text-charcoal" />
              <div className="text-left">
                <p className="text-xs text-gray-medium sm:text-sm">Call us</p>
                <p className="text-sm font-medium text-charcoal sm:text-base">+216 29 281 333</p>
              </div>
            </a>
          </div>

          <Button
            asChild
            size="lg"
            className="group w-full bg-[#00C9FF] px-8 py-5 text-base font-bold text-white shadow-[0_4px_20px_rgba(0,201,255,0.4)] transition-all duration-300 hover:bg-[#00B4D8] hover:scale-105 hover:shadow-[0_6px_30px_rgba(0,201,255,0.6)] sm:w-auto sm:px-10 sm:py-6 sm:text-lg"
          >
            <a href="mailto:contact.marketingmed@gmail.com" className="flex items-center justify-center gap-2">
              Get in Touch
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>

          <p className="mt-8 text-sm text-gray-medium">
            Sponsorship commitments should be confirmed by January 15, 2026
          </p>
        </div>
      </div>
    </section>
  )
}
