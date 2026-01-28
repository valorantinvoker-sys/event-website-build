"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Medal, Award } from "lucide-react"

const prizes = [
  {
    place: "1st Place",
    icon: Trophy,
    amount: "5,000 TND",
    benefits: [
      "Grand Prize",
      "Exclusive internship opportunity",
      "Featured in partner media",
      "Professional development workshop",
    ],
  },
  {
    place: "2nd Place",
    icon: Medal,
    amount: "1,000 TND",
    benefits: [
      "Silver Prize",
      "Priority interview access",
      "Networking dinner invitation",
      "Certificate of excellence",
    ],
  },
  {
    place: "3rd Place",
    icon: Award,
    amount: "500 TND",
    benefits: [
      "Bronze Prize",
      "Career coaching session",
      "Event recognition",
      "Certificate of achievement",
    ],
  },
]

export function PrizesSection() {
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
      id="prizes"
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-charcoal">
              Rewards
            </span>
            <h2 className="text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                Compete for <span className="text-charcoal">Prestigious Prizes</span>
              </span>
            </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-medium">
            Outstanding performance deserves outstanding rewards. Our winners receive cash prizes and invaluable career opportunities.
          </p>
        </div>

        {/* Prizes Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {prizes.map((prize, index) => {
            const IconComponent = prize.icon
            const isFirst = index === 0

            return (
              <div
                key={prize.place}
                className={`group relative overflow-hidden rounded-2xl border border-charcoal/10 bg-[#F5FAFD] p-6 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-charcoal/20 hover:shadow-xl sm:p-8 ${
                  isFirst ? "md:-mt-4 md:mb-4" : ""
                } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 inline-flex rounded-full bg-charcoal/10 p-4">
                    <IconComponent className="h-8 w-8 text-charcoal sm:h-10 sm:w-10" />
                  </div>

                  {/* Place */}
                  <h3 className="mb-2 text-xl font-bold text-charcoal">{prize.place}</h3>

                  {/* Amount */}
                  <p className="mb-6 text-3xl font-bold text-charcoal sm:text-4xl">{prize.amount}</p>

                  {/* Benefits */}
                  <ul className="space-y-2 sm:space-y-3">
                    {prize.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-charcoal">
                        <div className="h-1.5 w-1.5 rounded-full bg-charcoal" />
                        <span className="text-sm sm:text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
