"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function SponsorshipHero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pt-32">
      <div className="relative mx-auto max-w-7xl">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-gray-medium transition-colors hover:text-charcoal"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-3xl">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-charcoal">
            Partnership Opportunities
          </span>
          <h1 className="mb-6 text-4xl font-bold text-charcoal sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              Sponsorship &<br />
              <span className="text-charcoal">Pricing</span>
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-medium sm:text-xl">
            {"Partner with IHEC Consulting Days and position your brand at the forefront of Tunisia's premier business education event. Connect with ambitious students, showcase your company, and discover tomorrow's talent today."}
          </p>
        </div>
      </div>
    </section>
  )
}
