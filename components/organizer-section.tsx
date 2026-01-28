"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export function OrganizerSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="organizer"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5FAFD] px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div
            className={`flex flex-col transition-all duration-700 ease-in-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* White Logo - smaller, above text */}
            <div className="mb-8">
              <Image
                src="/images/logo-20mmt-20horizontal-bleu.png"
                alt="Marketing Méditerranée Tunisie"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-charcoal">
              Organized By
            </span>
            <h2 className="mb-6 text-3xl font-bold text-charcoal sm:text-4xl">
              <span className="text-balance">
                Marketing Méditerranée
                <br />
                <span className="text-charcoal">Tunisie</span>
              </span>
            </h2>
            <div className="space-y-4 text-left text-gray-medium">
              <p className="text-lg leading-relaxed">
                Marketing Méditerranée Tunisie (MMT) is a Junior-Entreprise based at IHEC Carthage, one of Tunisia's most prestigious business schools.
              </p>
              <p className="text-lg leading-relaxed">
                As a student-led organization, MMT bridges the gap between academic theory and professional practice, offering consulting services while providing students with hands-on business experience.
              </p>
              <p className="text-lg leading-relaxed">
                With a track record of successful events and partnerships with leading companies, MMT continues to shape the next generation of business leaders in Tunisia.
              </p>
            </div>

            <a
              href="https://mmt.tn/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-charcoal transition-colors hover:text-[#00C9FF]"
            >
              Learn more about MMT
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Right Column - Google Maps */}
          <div
            className={`transition-all delay-200 duration-700 ease-in-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00C9FF]/20 via-transparent to-[#00C9FF]/10 shadow-[0_0_30px_rgba(0,201,255,0.3)]" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1596.1044203790566!2d10.338705299999999!3d36.8614197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b4a4ac2d1849%3A0x77b97e7d7ee396e4!2sMarketing%20M%C3%A9diterran%C3%A9e%20Tunisie!5e0!3m2!1sfr!2stn!4v1768920943971!5m2!1sfr!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IHEC Carthage Location"
                className="absolute inset-0"
              />
            </div>
            <p className="mt-4 text-center text-sm text-gray-medium">
              IHEC Carthage, Tunisia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
