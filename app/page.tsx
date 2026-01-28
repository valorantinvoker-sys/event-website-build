import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SponsorsScroll } from "@/components/sponsors-scroll"
import { WhyParticipate } from "@/components/why-participate"
import { ProgramSection } from "@/components/program-section"
import { PrizesSection } from "@/components/prizes-section"
import { OrganizerSection } from "@/components/organizer-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SponsorsScroll />
      <WhyParticipate />
      <ProgramSection />
      <PrizesSection />
      <OrganizerSection />
      <CTASection />
      <Footer />
    </main>
  )
}
