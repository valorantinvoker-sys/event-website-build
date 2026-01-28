"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Users, Trophy, Clock } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "48 Hours",
    description: "An intensive consulting simulation",
  },
  {
    icon: Briefcase,
    title: "Real Challenges",
    description: "Business problems from leading companies",
  },
  {
    icon: Users,
    title: "Professional Jury",
    description: "Industry experts evaluate your solutions",
  },
  {
    icon: Trophy,
    title: "Win Prizes",
    description: "Compete for substantial cash rewards",
  },
]

export function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div
            className={`transition-all duration-700 ease-in-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-charcoal">
              About the Event
            </span>
            <h2 className="mb-6 text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                The Ultimate
                <br />
                <span className="text-charcoal">Consulting Experience</span>
              </span>
            </h2>
            <div className="space-y-4 text-charcoal">
              <p className="text-lg leading-relaxed">
                IHEC Consulting Days is an immersive 48-hour simulation where university students step into the shoes of junior consultants, tackling real business challenges provided by leading companies.
              </p>
              <p className="text-lg leading-relaxed">
                Teams compete to develop innovative solutions, present to a jury of industry professionals, and prove their strategic thinking capabilities. This is not just a competition it is a transformative experience that bridges academia and the corporate world.
              </p>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all delay-200 duration-700 ease-in-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-charcoal/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-charcoal/20 hover:shadow-md sm:p-6"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <feature.icon className="mb-4 h-7 w-7 text-charcoal transition-all duration-300 group-hover:scale-110 group-hover:text-[#00C9FF] sm:h-8 sm:w-8" />
                <h3 className="mb-2 text-lg font-bold text-charcoal sm:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
