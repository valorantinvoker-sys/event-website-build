"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Award, Eye, Briefcase, MessageSquare, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Access Top Talent",
    description: "Connect directly with Tunisia's brightest business students from IHEC Carthage. Identify and recruit exceptional candidates for internships and full-time positions.",
  },
  {
    icon: Award,
    title: "Employer Branding",
    description: "Position your company as an employer of choice among the next generation of business leaders. Build brand recognition and affinity with future professionals.",
  },
  {
    icon: Eye,
    title: "Strategic Visibility",
    description: "Gain exposure across multiple channels - on-site branding, digital presence, social media coverage, and PR opportunities throughout the event.",
  },
  {
    icon: Briefcase,
    title: "Real Business Impact",
    description: "Submit your own business challenge and receive fresh perspectives and innovative solutions from motivated student teams.",
  },
  {
    icon: MessageSquare,
    title: "Mentorship & Jury",
    description: "Your executives can participate as mentors and jury members, directly engaging with participants and identifying promising talent.",
  },
  {
    icon: TrendingUp,
    title: "CSR & Community",
    description: "Demonstrate your commitment to education and youth development while supporting the entrepreneurial ecosystem in Tunisia.",
  },
]

export function SponsorshipBenefits() {
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
            Why Partner With Us
          </span>
          <h2 className="mb-4 text-3xl font-bold text-charcoal sm:text-4xl">
            Benefits of Sponsorship
          </h2>
          <p className="mx-auto max-w-2xl text-gray-medium">
            Your investment in IHEC Consulting Days delivers tangible returns across multiple dimensions
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group rounded-xl border border-charcoal/10 bg-[#F5FAFD] p-5 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-charcoal/20 hover:shadow-lg sm:p-6 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex rounded-lg bg-charcoal/10 p-3">
                <benefit.icon className="h-6 w-6 text-charcoal transition-all duration-300 group-hover:scale-110 group-hover:text-[#00C9FF]" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-charcoal sm:text-xl">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-medium leading-relaxed sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
