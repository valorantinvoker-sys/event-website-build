"use client"

import { useEffect, useRef, useState } from "react"

const schedule = [
  {
    day: "Day 1",
    date: "February 13, 2026",
    events: [
      { time: "09:00", title: "Opening Ceremony", description: "Welcome speech and event kickoff" },
      { time: "10:00", title: "Challenge Reveal", description: "Business cases presented by partner companies" },
      { time: "11:00", title: "Team Formation", description: "Teams are assigned and begin strategizing" },
      { time: "12:30", title: "Lunch Break", description: "Networking lunch with mentors" },
      { time: "14:00", title: "Work Session I", description: "Teams start working on their solutions" },
      { time: "17:00", title: "Mentor Check-in", description: "First round of mentor consultations" },
      { time: "20:00", title: "Dinner & Night Work", description: "Continue working through the evening" },
    ],
  },
  {
    day: "Day 2",
    date: "February 14, 2026",
    events: [
      { time: "08:00", title: "Breakfast", description: "Morning refreshments" },
      { time: "09:00", title: "Work Session II", description: "Final push on solutions" },
      { time: "12:00", title: "Submissions Due", description: "All presentations must be submitted" },
      { time: "13:00", title: "Lunch Break", description: "Break before presentations" },
      { time: "14:30", title: "Final Presentations", description: "Teams present to the jury" },
      { time: "17:30", title: "Jury Deliberation", description: "Judges evaluate presentations" },
      { time: "18:30", title: "Awards Ceremony", description: "Winners announced and prizes distributed" },
    ],
  },
]

export function ProgramSection() {
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
      id="program"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5FAFD] px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-charcoal">
              Event Schedule
            </span>
            <h2 className="text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                48 Hours of <span className="text-charcoal">Intense Challenge</span>
              </span>
            </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {schedule.map((day, dayIndex) => (
            <div
              key={day.day}
              className={`transition-all duration-700 ease-in-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${dayIndex * 200}ms` }}
            >
              {/* Day Header */}
              <div className="mb-6 rounded-xl border border-charcoal/20 bg-charcoal p-4">
                <h3 className="text-2xl font-bold text-white">{day.day}</h3>
                <p className="text-white/80">{day.date}</p>
              </div>

              {/* Events */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[23px] top-0 h-full w-px bg-charcoal/20" />

                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={`${day.day}-${event.time}`}
                      className={`relative flex gap-4 transition-all duration-500 ease-in-out ${
                        isVisible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                      }`}
                      style={{ transitionDelay: `${(dayIndex * 200) + (eventIndex * 50)}ms` }}
                    >
                      {/* Timeline dot */}
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-charcoal/30 bg-white">
                        <span className="text-xs font-bold text-charcoal">{event.time}</span>
                      </div>

                      {/* Event content */}
                      <div className="flex-1 rounded-lg border border-charcoal/10 bg-white p-4 shadow-sm transition-all duration-300 hover:border-charcoal/20 hover:shadow-md">
                        <h4 className="font-semibold text-charcoal">{event.title}</h4>
                        <p className="text-sm text-gray-medium">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
