"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, Network, GraduationCap, Target, Handshake, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Lightbulb,
    title: "Develop Critical Skills",
    description: "Sharpen your analytical thinking, problem-solving, and presentation skills under real-world pressure.",
  },
  {
    icon: Handshake,
    title: "Expert Mentoring",
    description: "Receive guidance from experienced consultants and industry professionals throughout the challenge.",
  },
  {
    icon: Network,
    title: "Expand Your Network",
    description: "Connect with corporate partners, potential employers, and like-minded ambitious students.",
  },
  {
    icon: Target,
    title: "Real-World Experience",
    description: "Work on actual business cases from leading companies, not theoretical exercises.",
  },
  {
    icon: GraduationCap,
    title: "Boost Your CV",
    description: "Stand out to recruiters with a unique experience that demonstrates your capabilities.",
  },
  {
    icon: TrendingUp,
    title: "Career Opportunities",
    description: "Get noticed by top companies and open doors to internships and job opportunities.",
  },
]

export function WhyParticipate() {
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
            Why Join Us
          </span>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Transform Your Future in <span className="text-charcoal">48 Hours</span>
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group rounded-xl border border-charcoal/10 bg-[#F5FAFD] p-5 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-charcoal/20 hover:shadow-xl sm:p-6 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex rounded-lg bg-charcoal/10 p-3">
                <reason.icon className="h-6 w-6 text-charcoal transition-all duration-300 group-hover:scale-110 group-hover:text-[#00C9FF]" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-charcoal sm:text-xl">
                {reason.title}
              </h3>
              <p className="text-gray-medium leading-relaxed text-sm sm:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
