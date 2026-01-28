"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react"

const socialLinks = {
  instagram: "https://www.instagram.com/marketingmed_tunisie/",
  facebook: "https://www.facebook.com/MMT.JE.IHEC.Carthage",
  linkedin: "https://www.linkedin.com/company/marketing-m%C3%A9diterran%C3%A9e-tunisie/posts/",
  website: "https://mmt.tn/",
}

const footerLinks = {
  event: [
    { label: "About", href: "#about" },
    { label: "Program", href: "#program" },
    { label: "Prizes", href: "#prizes" },
    { label: "Register", href: "#register" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo-20mmt-20horizontal-blanc.png"
              alt="Marketing Méditerranée Tunisie"
              width={180}
              height={54}
              className="mb-4 h-12 w-auto"
            />
            <p className="mb-6 max-w-sm text-off-white/70">
              IHEC Consulting Days is organized by Marketing Méditerranée Tunisie, the Junior-Entreprise of IHEC Carthage.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-off-white/10 p-2 text-off-white/60 transition-colors hover:bg-[#00C9FF]/20 hover:text-[#00C9FF]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-off-white/10 p-2 text-off-white/60 transition-colors hover:bg-[#00C9FF]/20 hover:text-[#00C9FF]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-off-white/10 p-2 text-off-white/60 transition-colors hover:bg-[#00C9FF]/20 hover:text-[#00C9FF]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Event Links */}
          <div>
            <h3 className="mb-4 font-semibold text-off-white">Event</h3>
            <ul className="space-y-3">
              {footerLinks.event.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-off-white/70 transition-colors hover:text-[#00C9FF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-off-white">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+21629281333"
                  className="flex items-center gap-2 text-off-white/70 transition-colors hover:text-[#00C9FF]"
                >
                  <Phone className="h-4 w-4" />
                  29 281 333
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact.marketingmed@gmail.com"
                  className="flex items-center gap-2 text-off-white/70 transition-colors hover:text-[#00C9FF]"
                >
                  <Mail className="h-4 w-4" />
                  contact@mmt.tn
                </a>
              </li>
              <li className="flex items-start gap-2 text-off-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                IHEC Carthage, Tunisia
              </li>
            </ul>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-off-white/50">
            {new Date().getFullYear()} IHEC Consulting Days. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Image
              src="/images/logo-ihec-20-281-29.png"
              alt="IHEC Carthage"
              width={80}
              height={40}
              className="h-8 w-auto brightness-0 invert opacity-60"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
