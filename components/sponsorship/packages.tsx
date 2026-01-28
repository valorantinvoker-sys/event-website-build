"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Check, X, Star } from "lucide-react"

const packages = [
  {
    name: "Pack Digital Presence",
    price: "500",
    highlight: false,
    note: null,
    prizeIncluded: null,
    features: {
      businessChallenge: false,
      speakingSlot: false,
      mentorRole: false,
      cashPrize: false,
      physicalStand: false,
      openingClosingTag: false,
      logoSocialMedia: true,
    },
    description: [
      "Annonce officielle du partenariat sur nos réseaux sociaux (+22K Facebook, +4K Instagram, +3K LinkedIn).",
      "Logo sur les visuels officiels de l’événement.",
      "Présence sur la signalétique in-site (press wall).",
      "Identification et tags réguliers dans nos stories tout au long de la campagne, afin de créer un lien direct entre les étudiants et votre marque.",
      "Mention valorisante dans l’aftermovie officiel de l’événement, qui sera partagé massivement sur nos canaux."
    ]
  },
  {
    name: "Pack IHEC Connect",
    price: "1800",
    highlight: false,
    note: null,
    prizeIncluded: null,
    features: {
      businessChallenge: false,
      speakingSlot: false,
      mentorRole: false,
      cashPrize: false,
      physicalStand: true,
      openingClosingTag: false,
      logoSocialMedia: true,
    },
    description: [
      "Tous les avantages du Pack Digitale.",
      "Mise à disposition d’un stand physique de 2m x 2m, permettant une interaction directe avec les étudiants pendant deux (2) jours.",
      "Mise à disposition d’un desk de 1m x 0,7m au sein de l’espace stand.",
      "Distribution de vos flyers et/ou goodies auprès des étudiants participants."
    ]
  },
  {
    name: "Pack Bronze Winner",
    price: "3900",
    prizePrice: "500",
    highlight: false,
    note: null,
    prizeIncluded: "500 TND",
    features: {
      businessChallenge: false,
      speakingSlot: true,
      mentorRole: true,
      cashPrize: "500 TND",
      physicalStand: true,
      openingClosingTag: true,
      logoSocialMedia: true,
    },
    description: [
      "Tous les avantages du Pack IHEC Connect.",
      "Prise de parole officielle du partenaire lors de la cérémonie d’ouverture et de la cérémonie de clôture de l’événement, afin de valoriser sa marque auprès des participants.",
      "Rôle de mentor auprès des équipes participantes, avec des sessions de mentorat dédiées tout au long de la compétition.",
      "Participation en tant que membre du jury lors de l’évaluation des projets.",
      "Attribution du prix de la 3ᵉ place, sous forme d’un cash prize d’une valeur de 500 TND TTC ou d’une récompense équivalente."
    ]
  },
  {
    name: "Pack Silver Winner",
    price: "4700",
    prizePrice: "1000",
    highlight: false,
    note: null,
    prizeIncluded: "1,000 TND",
    features: {
      businessChallenge: false,
      speakingSlot: true,
      mentorRole: true,
      cashPrize: "1,000 TND",
      physicalStand: true,
      openingClosingTag: true,
      logoSocialMedia: true,
    },
    description: [
      "Tous les avantages du Pack IHEC Connect.",
      "Prise de parole officielle du partenaire lors de la cérémonie d’ouverture et de la cérémonie de clôture de l’événement.",
      "Participation en tant que paneliste lors du panel.",
      "Animation d’une session de formation, permettant de mettre en avant l’expertise du partenaire auprès des étudiants de l’IHEC Carthage.",
      "Rôle de mentor auprès des équipes participantes.",
      "Participation en tant que membre du jury lors de l’évaluation des projets.",
      "Attribution du prix de la 2ᵉ place, sous forme d’un cash prize d’une valeur de 1 000 TND TTC ou d’une récompense équivalente."
    ]
  },
  {
    name: "Pack Gold Winner",
    subtitle: "Statut exclusif de Challenge Owner",
    price: "8900",
    prizePrice: "5000",
    highlight: true,
    note: null,
    prizeIncluded: "5,000 TND",
    features: {
      businessChallenge: true,
      speakingSlot: true,
      mentorRole: true,
      cashPrize: "5,000 TND",
      physicalStand: true,
      openingClosingTag: true,
      logoSocialMedia: true,
    },
    description: [
      "Statut exclusif de Challenge Owner, positionnant votre marque comme partenaire principal et référence de l’événement.",
      "Mise à disposition d’un stand premium de 3m x 3m, offrant l’espace optimal pour interagir avec les participants et maximiser l’impact de votre présence sur place.",
      "Signalétique premium circulant dans l’ensemble de l’événement",
      "Tags et mentions privilégiés dans les communications et stories officielles",
      "Présence spéciale dans l’aftermovie officiel, posts de remerciement, interviews et contenus personnalisés pour valoriser l’expertise et la notoriété du partenaire",
      "Prise de parole prioritaire lors de la cérémonie d’ouverture et de clôture, ainsi que participation en tant que paneliste.",
      "Mentorat et rôle de jury, permettant d’accompagner et d’évaluer les équipes participantes.",
      "Attribution du prix de la 1ʳᵉ place, sous forme d’un cash prize  de 5 000 TND TTC."
    ]
  },
]

const featureLabels = {
  businessChallenge: "Submit Business Challenge",
  speakingSlot: "Speaking Slot / Training",
  mentorRole: "Mentor Role",
  cashPrize: "Cash Prize Included",
  physicalStand: "Physical Stand",
  openingClosingTag: "Opening/Closing Tag",
  logoSocialMedia: "Logo & Social Media",
}

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-green-600" />
  }
  if (value === false) {
    return <X className="h-5 w-5 text-gray-light/50" />
  }
  return <span className="text-sm text-gray-medium">{value}</span>
}

export function SponsorshipPackages() {
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
    <>
      {/* Packages Details Section */}
      <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Pack Digital Presence */}
            <div
              className={`rounded-xl border border-charcoal/10 bg-gradient-to-br from-[#E8F4FF] to-[#F5FAFD] p-6 transition-all duration-500 ease-in-out hover:shadow-md ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <h3 className="mb-2 text-lg font-bold text-charcoal">Pack Digital Presence</h3>
              <p className="mb-4 text-2xl font-bold text-green-600">5,000 TND<span className="text-sm"> HT</span></p>
              <ul className="space-y-2 text-sm text-gray-medium">
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Annonce officielle du partenariat sur nos réseaux sociaux (+22K Facebook, +4K Instagram, +3K LinkedIn)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Logo sur les visuels officiels de l'événement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Présence sur la signalétique in-site (press wall)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Identification et tags réguliers dans nos stories</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Mention valorisante dans l'aftermovie officiel</span>
                </li>
              </ul>
            </div>

            {/* Pack IHEC Connect */}
            <div
              className={`rounded-xl border border-charcoal/10 bg-gradient-to-br from-[#E8F4FF] to-[#F5FAFD] p-6 transition-all duration-500 ease-in-out hover:shadow-md ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <h3 className="mb-2 text-lg font-bold text-charcoal">Pack IHEC Connect</h3>
              <p className="mb-4 text-2xl font-bold text-green-600">1,800 TND<span className="text-sm"> HT</span></p>
              <ul className="space-y-2 text-sm text-gray-medium">
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Tous les avantages du Pack Digital Presence</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Stand physique de 2m x 2m</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Desk de 1m x 0,7m au sein de l'espace stand</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Distribution de flyers et/ou goodies</span>
                </li>
              </ul>
            </div>

            {/* Pack Bronze Winner */}
            <div
              className={`rounded-xl border border-charcoal/10 bg-gradient-to-br from-[#E8F4FF] to-[#F5FAFD] p-6 transition-all duration-500 ease-in-out hover:shadow-md ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="mb-2 text-lg font-bold text-charcoal">Pack Bronze Winner</h3>
              <p className="mb-4"><span className="text-2xl font-bold text-green-600">3,900 TND</span><span className="text-sm text-green-600"> HT</span><span className="ml-2 text-2xl font-bold text-green-600">+ 500 TND</span><span className="text-sm text-gray-medium"> (prize pool)</span></p>
              <ul className="space-y-2 text-sm text-gray-medium">
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Tous les avantages du Pack IHEC Connect</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Prise de parole à l'ouverture et fermeture</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Rôle de mentor</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Participation au jury</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Prix 3e place (500 TND TTC)</span>
                </li>
              </ul>
            </div>

            {/* Pack Silver Winner */}
            <div
              className={`rounded-xl border border-charcoal/10 bg-gradient-to-br from-[#E8F4FF] to-[#F5FAFD] p-6 transition-all duration-500 ease-in-out hover:shadow-md ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <h3 className="mb-2 text-lg font-bold text-charcoal">Pack Silver Winner</h3>
              <p className="mb-4"><span className="text-2xl font-bold text-green-600">4,700 TND</span><span className="text-sm text-green-600"> HT</span><span className="ml-2 text-2xl font-bold text-green-600">+ 1,000 TND</span><span className="text-sm text-gray-medium"> (prize pool)</span></p>
              <ul className="space-y-2 text-sm text-gray-medium">
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Tous les avantages du Pack IHEC Connect</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Prise de parole + paneliste</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Animation d'une session de formation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Rôle de mentor et jury</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Prix 2e place (1,000 TND TTC)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pack Gold Winner - Full Width */}
          <div
            className={`mt-8 rounded-xl border border-charcoal bg-charcoal p-8 text-white transition-all duration-500 ease-in-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-2xl font-bold">Pack Gold Winner</h3>
                <p className="mb-4 text-xl font-semibold text-[#00C9FF]">Statut exclusif de Challenge Owner</p>
              <p className="mb-2"><span className="text-4xl font-bold">8,900 TND</span><span className="ml-2 text-lg text-off-white/80">HT</span></p>
              <p className="text-2xl font-bold text-[#00C9FF]">+ 5,000 TND<span className="text-sm text-off-white/70 ml-1">(prize pool)</span></p>
              </div>
              <ul className="space-y-2 text-sm text-off-white/90">
                <li className="flex gap-2">
                  <span className="text-[#00C9FF]">✓</span>
                  <span>Challenge Owner - Partenaire principal de l'événement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00C9FF]">✓</span>
                  <span>Stand premium 3m x 3m</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00C9FF]">✓</span>
                  <span>Signalétique premium circulante</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00C9FF]">✓</span>
                  <span>Tags et mentions privilégiés</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00C9FF]">✓</span>
                  <span>Présence spéciale aftermovie + interviews</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00C9FF]">✓</span>
                  <span>Prise de parole prioritaire + paneliste</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00C9FF]">✓</span>
                  <span>Mentorat et rôle de jury</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00C9FF]">✓</span>
                  <span>Prix 1ʳᵉ place (5,000 TND TTC)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section
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
              Investment Options
            </span>
            <h2 className="mb-4 text-3xl font-bold text-charcoal sm:text-4xl">
              Sponsorship Comparison
            </h2>
            <p className="mx-auto max-w-2xl text-gray-medium">
              All prices are in Tunisian Dinars (TND), excluding taxes (HT).<br />
              <span className="font-semibold text-green-700">Toute confirmation avant le 3 février bénéficie d'une réduction de 15% sur le prix du pack.</span>
            </p>
          </div>

        {/* Mobile Cards View */}
        <div className="grid gap-6 md:hidden mb-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative overflow-hidden rounded-2xl border ${
                pkg.highlight
                  ? "border-charcoal bg-charcoal"
                  : "border-charcoal/10 bg-white"
              } p-5 shadow-sm transition-all duration-500 ease-in-out sm:p-6 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {pkg.highlight && (
                <div className="absolute right-4 top-4">
                  <Star className="h-6 w-6 fill-charcoal text-white" />
                </div>
              )}

              <h3 className={`text-lg font-bold sm:text-xl ${pkg.highlight ? "text-white" : "text-charcoal"}`}>
                {pkg.name}
              </h3>
              {pkg.subtitle && (
                <p className="mt-1 text-sm text-white/80">{pkg.subtitle}</p>
              )}

              <div className="mt-4">
                <span className={`text-3xl font-bold sm:text-4xl ${pkg.highlight ? "text-white" : "text-charcoal"}`}>
                  {pkg.price}
                </span>
                <span className={`ml-1 text-sm sm:text-base ${pkg.highlight ? "text-white/80" : "text-gray-medium"}`}>TND HT</span>
              </div>

              {pkg.note && (
                <p className={`mt-2 text-sm ${pkg.highlight ? "text-off-white/50" : "text-gray-medium"}`}>
                  {pkg.note}
                </p>
              )}

              {pkg.prizePrice && (
                <p className={`mt-2 text-sm font-semibold ${pkg.highlight ? "text-[#00C9FF]" : "text-green-600"}`}>
                  + {pkg.prizePrice} TND (prize pool)
                </p>
              )}

              {pkg.prizeIncluded && !pkg.prizePrice && (
                <p className="mt-2 text-sm text-green-600">
                  Includes {pkg.prizeIncluded} Winner Prize
                </p>
              )}

              <ul className="mt-6 space-y-3">
                {Object.entries(pkg.features).map(([key, value]) => (
                  <li key={key} className="flex items-center justify-between gap-2">
                    <span className={`text-xs sm:text-sm ${pkg.highlight ? "text-white/80" : "text-gray-medium"}`}>
                      {featureLabels[key as keyof typeof featureLabels]}
                    </span>
                    <FeatureValue value={value} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div
          className={`hidden overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm md:block ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } transition-all duration-700 ease-in-out`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-charcoal/10 bg-[#F5FAFD]">
                  <th className="p-4 text-left text-sm font-semibold text-charcoal">
                    Features
                  </th>
                  {packages.map((pkg) => (
                    <th
                      key={pkg.name}
                      className={`p-4 text-center ${
                        pkg.highlight ? "bg-charcoal" : ""
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        {pkg.highlight && (
                          <Star className="mb-2 h-5 w-5 fill-white text-white" />
                        )}
                        <span className={`text-lg font-bold ${pkg.highlight ? "text-white" : "text-charcoal"}`}>
                          {pkg.name}
                        </span>
                        {pkg.subtitle && (
                          <span className="mt-1 text-xs text-white/80">
                            {pkg.subtitle}
                          </span>
                        )}
                        <div className="mt-2">
                          <span className={`text-2xl font-bold ${pkg.highlight ? "text-white" : "text-charcoal"}`}>
                            {pkg.price}
                          </span>
                          <span className={`ml-1 text-sm ${pkg.highlight ? "text-white/80" : "text-gray-medium"}`}>TND HT</span>
                        </div>
                        {pkg.prizePrice && (
                          <div className="mt-2">
                            <span className={`text-lg font-bold ${pkg.highlight ? "text-[#00C9FF]" : "text-green-600"}`}>
                              + {pkg.prizePrice} TND
                            </span>
                            <p className={`text-xs ${pkg.highlight ? "text-white/60" : "text-gray-medium"}`}>(prize pool)</p>
                          </div>
                        )}
                        {pkg.note && (
                          <span className={`mt-1 text-xs ${pkg.highlight ? "text-white/70" : "text-gray-medium"}`}>
                            {pkg.note}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(featureLabels).map(([key, label], rowIndex) => (
                  <tr
                    key={key}
                    className={`border-b border-charcoal/5 ${
                      rowIndex % 2 === 0 ? "bg-[#F5FAFD]/50" : "bg-white"
                    }`}
                  >
                    <td className="p-4 text-sm text-charcoal">{label}</td>
                    {packages.map((pkg) => (
                      <td
                        key={`${pkg.name}-${key}`}
                        className={`p-4 text-center ${
                          pkg.highlight ? "bg-charcoal/5" : ""
                        }`}
                      >
                        <div className="flex justify-center">
                          <FeatureValue
                            value={pkg.features[key as keyof typeof pkg.features]}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ChatGPT Image Section */}
        <div
          className={`mt-16 rounded-2xl overflow-hidden border border-charcoal/10 shadow-md transition-all duration-700 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Image
            src="/images/ChatGPT Image 28 janv. 2026, 02_15_22.png"
            alt="Event Information"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
    </>
  )
}
