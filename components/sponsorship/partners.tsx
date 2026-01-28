"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

// Partner logos from the partners logos folder
const partnerLogos = [
  "/images/partners logos/Blue and White Minimalist Digital Marketing Project Proposal (3).png",
  "/images/partners logos/Blue and White Minimalist Digital Marketing Project Proposal (5).png",
  "/images/partners logos/Blue and White Minimalist Digital Marketing Project Proposal (6).png",
  "/images/partners logos/Blue and White Minimalist Digital Marketing Project Proposal (7).png",
  "/images/partners logos/Blue and White Minimalist Digital Marketing Project Proposal (8).png",
  "/images/partners logos/Blue and White Minimalist Digital Marketing Project Proposal (9).png",
  "/images/partners logos/Blue and White Minimalist Digital Marketing Project Proposal (10).png",
  "/images/partners logos/Blue and White Minimalist Digital Marketing Project Proposal (11).png",
  "/images/partners logos/Blue and White Minimalist Digital Marketing Project Proposal (12).png",
  "/images/partners logos/Blue and White Minimalist Digital Marketing Project Proposal (13).png",
  "/images/partners logos/Blue and White Minimalist Digital Marketing Project Proposal (14).png",
  "/images/partners logos/Blue and White Minimalist Digital Marketing Project Proposal (15).png",
]

export function SponsorshipPartners() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`mb-12 text-center transition-all duration-700 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold text-charcoal sm:text-5xl lg:text-6xl">
            Ils nous ont fait confiance
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-medium sm:text-xl">
            Grands comptes, PME, Startups, nous répondons aux attentes de chacun.
          </p>
        </div>

        {/* Partners Grid - Clean, minimal design */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {partnerLogos.map((logo, index) => (
            <div
              key={logo}
              className={`group flex items-center justify-center p-6 transition-all duration-500 ${
                isVisible 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 60}ms`,
              }}
            >
              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={250}
                height={120}
                className="h-auto max-h-24 w-full object-contain transition-all duration-300 group-hover:opacity-100 sm:max-h-32 md:max-h-36 lg:max-h-40"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${index * 60}ms`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
