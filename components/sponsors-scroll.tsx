"use client"

import Image from "next/image"

// Placeholder sponsor logos - these would be replaced with actual partner logos
const sponsors = [
  { name: "IHEC Carthage", logo: "/images/logo-ihec-20-281-29.png" },
  { name: "API", logo: "/images/API.jpg" },
  { name: "3P", logo: "/images/3p.jpg" },
  { name: "Opus", logo: "/images/opus.jpg" },
]

export function SponsorsScroll() {
  return (
    <section className="relative overflow-hidden bg-[#F5FAFD] py-16 sm:py-20">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F5FAFD] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F5FAFD] to-transparent" />

      {/* Title */}
      <div className="mb-8 text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-charcoal/60">
          Our Partners
        </span>
      </div>

      {/* Scrolling container - using CSS animation that doesn't pause on hover */}
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_40s_linear_infinite] items-center gap-16 px-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-1-${index}`}
              className="flex h-24 w-48 items-center justify-center sm:h-28 sm:w-56"
            >
              {sponsor.logo ? (
                <div className="transition-transform duration-300 hover:scale-110">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={200}
                    height={80}
                    className="h-auto max-h-20 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 sm:max-h-24"
                  />
                </div>
              ) : (
                <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-charcoal/20 bg-white transition-all duration-300 hover:scale-105 hover:border-charcoal/40 hover:shadow-md sm:h-24 sm:w-48">
                  <span className="text-sm text-charcoal/60">{sponsor.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0 animate-[marquee_40s_linear_infinite] items-center gap-16 px-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-2-${index}`}
              className="flex h-24 w-48 items-center justify-center sm:h-28 sm:w-56"
            >
              {sponsor.logo ? (
                <div className="transition-transform duration-300 hover:scale-110">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={200}
                    height={80}
                    className="h-auto max-h-20 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 sm:max-h-24"
                  />
                </div>
              ) : (
                <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-charcoal/20 bg-white transition-all duration-300 hover:scale-105 hover:border-charcoal/40 hover:shadow-md sm:h-24 sm:w-48">
                  <span className="text-sm text-charcoal/60">{sponsor.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
