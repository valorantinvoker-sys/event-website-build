import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SponsorshipHero } from "@/components/sponsorship/hero"
import { SponsorshipPackages } from "@/components/sponsorship/packages"
import { SponsorshipBenefits } from "@/components/sponsorship/benefits"
import { SponsorshipPartners } from "@/components/sponsorship/partners"
import { SponsorshipCTA } from "@/components/sponsorship/cta"

export const metadata: Metadata = {
  title: "Sponsorship & Pricing | IHEC Consulting Days 2026",
  description: "Partner with IHEC Consulting Days and connect your brand with top student talent. Explore our sponsorship packages and benefits.",
}

export default function SponsorshipPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SponsorshipHero />
      <SponsorshipPackages />
      <SponsorshipBenefits />
      <SponsorshipPartners />
      <SponsorshipCTA />
      <Footer />
    </main>
  )
}
