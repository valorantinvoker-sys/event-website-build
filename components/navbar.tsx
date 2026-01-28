"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, Instagram, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = {
  instagram: "https://www.instagram.com/marketingmed_tunisie/",
  facebook: "https://www.facebook.com/MMT.JE.IHEC.Carthage",
  linkedin: "https://www.linkedin.com/company/marketing-m%C3%A9diterran%C3%A9e-tunisie/posts/",
  website: "https://mmt.tn/",
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isSponsorshipPage = pathname === "/sponsorship"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#program", label: "Program" },
    { href: "#prizes", label: "Prizes" },
    { href: "#organizer", label: "Organizer" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isSponsorshipPage
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={isScrolled || isSponsorshipPage ? "/images/logo-20mmt-20horizontal-bleu.png" : "/images/logo-20mmt-20horizontal-blanc.png"}
              alt="Marketing Méditerranée Tunisie"
              width={160}
              height={48}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled || isSponsorshipPage ? "text-charcoal hover:text-[#00C9FF]" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Social & CTA - Social icons hidden on mobile */}
          <div className="hidden items-center gap-4 md:flex">
            {/* Social icons - visible on tablet and desktop only */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isScrolled || isSponsorshipPage ? "text-charcoal/60 hover:text-[#00C9FF]" : "text-white/60 hover:text-white"
                }`}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isScrolled || isSponsorshipPage ? "text-charcoal/60 hover:text-[#00C9FF]" : "text-white/60 hover:text-white"
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isScrolled || isSponsorshipPage ? "text-charcoal/60 hover:text-[#00C9FF]" : "text-white/60 hover:text-white"
                }`}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <Button
              asChild
              className={`${
                isScrolled || isSponsorshipPage
                  ? "bg-[#00C9FF] text-white shadow-[0_2px_10px_rgba(0,201,255,0.3)] hover:bg-[#00B4D8] hover:shadow-[0_4px_15px_rgba(0,201,255,0.5)]" 
                  : "bg-[#00C9FF]/90 backdrop-blur-sm text-white shadow-[0_2px_10px_rgba(0,201,255,0.4)] hover:bg-[#00C9FF] hover:shadow-[0_4px_15px_rgba(0,201,255,0.6)]"
              }`}
            >
              <Link href="#register">Register Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${
              isScrolled || isSponsorshipPage ? "text-charcoal" : "text-white"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - No social icons */}
        {isMobileMenuOpen && (
          <div className="border-t border-charcoal/10 bg-white/95 backdrop-blur-md shadow-lg md:hidden">
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-charcoal transition-colors hover:text-navy-dark"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 w-full bg-charcoal text-white hover:bg-navy-dark"
              >
                <Link href="#register">Register Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
