import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'

export const metadata: Metadata = {
  title: 'Our Services — Serendib Gemstones',
  description: 'Custom gemstone sourcing, investment consultation, jeweller supply, custom jewellery, certificate review, and gemstone matching — direct from Sri Lanka.',
  alternates: { canonical: 'https://www.serendibgemstones.com/services' },
}

const services = [
  {
    title: 'Custom Gemstone Sourcing',
    description: 'Tell us exactly what you need — species, colour, carat weight, treatment preference, certification, and budget. We source directly from Sri Lanka\'s finest gem regions and present suitable options within days.',
    details: [
      'Access to all major Sri Lankan gem varieties',
      'Specific colour, size, and quality matching',
      'Unheated stones a speciality',
      'GIA or GRS certification arranged',
    ],
    colour: '#1a5f9e',
    cta: 'Request a Sourcing Brief',
  },
  {
    title: 'Investment Consultation',
    description: 'Gemstones are a tangible, portable, and historically reliable alternative asset. We help collectors and investors identify stones most likely to hold and grow in value — with honest guidance on what works and what doesn\'t.',
    details: [
      'Which stones and origins hold value long-term',
      'Understanding the unheated premium',
      'Building a diversified gemstone portfolio',
      'Certification and provenance for resale',
    ],
    colour: '#c9a84c',
    cta: 'Book a Consultation',
  },
  {
    title: 'Jeweller & Trade Supply',
    description: 'We supply jewellery professionals worldwide with calibrated parcels, certified loose stones, and matched sets. Regular supply arrangements available with competitive trade pricing.',
    details: [
      'Calibrated sapphires and rubies in standard sizes',
      'Matched pairs and sets for earrings and suites',
      'Regular supply agreements with consistent quality',
      'Trade pricing for established jewellers',
    ],
    colour: '#e0bc6e',
    cta: 'Enquire About Trade Supply',
  },
  {
    title: 'Custom Jewellery',
    description: 'Commission a bespoke piece built around a certified Sri Lankan gemstone. From stone selection through design, crafting, and delivery — every step is guided by our team and executed by master Sri Lankan gem-setters.',
    details: [
      'Choose from our collection or source a new stone',
      'Design consultation and concept sketches',
      'Hand-crafted by master artisans in Sri Lanka',
      'Insured worldwide delivery with certificate',
    ],
    colour: '#9b5dc8',
    cta: 'Start a Design Consultation',
  },
  {
    title: 'Certificate Review',
    description: 'Already have a gemstone certificate and not sure what it says? Send it to us and we\'ll explain every field in plain language — treatment comments, origin determination, colour grades, and what they mean for the stone\'s value.',
    details: [
      'Free, no-obligation educational service',
      'GIA, GRS, Gubelin, SSEF, and other labs',
      'Treatment disclosure explained in plain terms',
      'Origin and colour grade interpretation',
    ],
    colour: '#2e8b57',
    cta: 'Submit a Certificate',
  },
  {
    title: 'Gemstone Matching',
    description: 'Need two or more stones with identical colour, size, and quality? Matching coloured gemstones is one of the most challenging tasks in the trade. We specialise in finding perfect pairs and suites from our Sri Lankan sources.',
    details: [
      'Matched pairs for earrings',
      'Three-stone sets for rings',
      'Graduated suites for necklaces and bracelets',
      'Colour and clarity matching to your specifications',
    ],
    colour: '#d46b9a',
    cta: 'Request Matching Service',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,168,76,0.3) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-offwhite/60">Services</span>
          </nav>
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">What We Offer</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight mb-6">
              Our Services
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-xl leading-relaxed">
              More than a gemstone supplier — we offer expert guidance, transparent sourcing, and personalised service at every stage of your gemstone journey.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-dark px-6 lg:px-10 py-20">
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((service, i) => (
            <FadeUp key={service.title} delay={i * 0.06}>
              <div className="border border-white/6 bg-dark-card p-8 sm:p-10 hover:border-teal/20 transition-colors">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <GemSVG colour={service.colour} size={40} className="shrink-0 mt-1" />
                      <h2 className="font-cormorant text-2xl sm:text-3xl text-offwhite font-semibold">{service.title}</h2>
                    </div>
                    <p className="font-jost text-sm text-offwhite/55 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0">
                            <circle cx="7" cy="7" r="5" stroke="rgba(201,168,76,0.4)" strokeWidth="1" />
                            <path d="M4.5 7l2 2 3-3" stroke="rgba(201,168,76,0.5)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="font-jost text-xs text-offwhite/45">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="inline-block px-6 py-3 border border-teal/30 text-teal font-jost text-xs tracking-widest uppercase hover:bg-teal hover:text-white transition-all duration-300">
                      {service.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-dark-card py-20 px-6 text-center border-t border-teal/10">
        <FadeUp>
          <p className="font-cormorant italic text-2xl text-offwhite/60 mb-4">
            Not sure which service you need?
          </p>
          <p className="font-jost text-sm text-offwhite/45 mb-8 max-w-lg mx-auto leading-relaxed">
            Just tell us what you&apos;re looking for. Our founders will guide you to the right pathway — no commitment, no pressure.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Start a Conversation
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
