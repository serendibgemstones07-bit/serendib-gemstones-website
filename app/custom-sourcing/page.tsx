import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'Custom Gemstone Sourcing',
  description: 'Tell us exactly what you need — species, colour, carat, budget — and we source it from Sri Lanka. GIA/GRS certified, fully documented, shipped worldwide.',
  openGraph: { url: 'https://www.serendibgemstones.com/custom-sourcing' },
  alternates: { canonical: 'https://www.serendibgemstones.com/custom-sourcing' },
}

const whatWeSource = [
  { title: 'Specific Stones', description: 'A particular species, colour, carat weight, and quality grade. We search our network until we find it.' },
  { title: 'Matched Sets', description: 'Pairs or suites with consistent colour, clarity, and dimensions for earrings, necklaces, or multi-stone settings.' },
  { title: 'Calibrated Parcels', description: 'Production quantities of calibrated stones in standard sizes. Consistent colour range and quality grade.' },
  { title: 'Investment Stones', description: 'Exceptional unheated specimens with strong provenance, laboratory certification, and long-term value potential.' },
  { title: 'Rare Varieties', description: 'Padparadscha sapphires, colour-change alexandrites, cat\'s eye chrysoberyl, and other rare Sri Lankan varieties.' },
  { title: 'Custom Cuts', description: 'Specific cutting styles, proportions, or dimensions to your requirements. Precision cutting for bespoke designs.' },
]

const howItWorks = [
  { n: '01', title: 'Tell Us What You Need', body: 'Describe your requirements — gemstone type, colour preferences, size range, budget, and timeline. The more specific, the better we can search.' },
  { n: '02', title: 'We Search Sri Lanka', body: 'We search our existing inventory, our network of trusted dealers, and — where appropriate — directly at cutting centres and gem markets across the island.' },
  { n: '03', title: 'Review Options', body: 'We present shortlisted stones with high-resolution photographs, measurements, and any existing certification. You review and select without obligation.' },
  { n: '04', title: 'Certification', body: 'Once approved, we arrange GIA or GRS certification if not already in place. You receive the report digitally before shipment.' },
  { n: '05', title: 'Worldwide Delivery', body: 'Secure, insured shipping to your location. Full export documentation, customs guidance where needed, and tracked delivery.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Custom Sourcing' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Custom Gemstone Sourcing',
      description: 'Bespoke gemstone sourcing service from Sri Lanka for international buyers.',
      provider: {
        '@type': 'Organization',
        name: 'Serendib Gemstones (Pvt) Ltd',
        url: 'https://www.serendibgemstones.com',
      },
      areaServed: 'Worldwide',
      url: 'https://www.serendibgemstones.com/custom-sourcing',
    },
  ],
}

export default function CustomSourcingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative bg-dark pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(107,45,139,0.25) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5">Bespoke Service</p>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              Tell Us What You&apos;re<br />Looking For
            </h1>
            <p className="font-jost text-sm text-offwhite/55 max-w-2xl mx-auto leading-relaxed mb-10">
              Describe the gemstone you need — species, colour, carat weight, quality, budget — and we&apos;ll source it directly from <Link href="/learn/sri-lanka" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">Sri Lanka</Link>. Every stone is <Link href="/learn/certification" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">certified</Link>, fully documented, and shipped worldwide.
            </p>
            <Link href="/contact" className="px-8 py-3.5 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
              Start a Gemstone Search
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* WHAT WE SOURCE */}
      <section className="bg-dark-card py-24 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Capabilities</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite">What We Can Source</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeSource.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="bg-dark border border-white/6 p-7 h-full">
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-3">{item.title}</h3>
                  <p className="font-jost text-xs text-offwhite/45 leading-relaxed">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-t border-teal/10">
        <div className="bg-dark-card px-10 lg:px-16 py-20 border-r border-teal/15">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Process</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold leading-tight mb-6">
              How Custom<br />Sourcing Works
            </h2>
            <p className="font-jost text-sm text-offwhite/55 leading-relaxed mb-8">
              A transparent process from your initial request to secure worldwide delivery. You approve every step before we proceed. Common requests include <Link href="/gemstones/blue-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">blue sapphire</Link>, <Link href="/gemstones/padparadscha-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">padparadscha</Link>, <Link href="/gemstones/star-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">star sapphire</Link>, <Link href="/gemstones/yellow-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">yellow</Link> or <Link href="/gemstones/pink-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">pink sapphire</Link>, and <Link href="/gemstones/ruby" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">ruby</Link>.
            </p>
            <div className="space-y-3">
              <Link href="/how-we-source" className="block font-jost text-sm tracking-widest uppercase text-teal/70 hover:text-teal transition-colors">
                How we source gemstones &rarr;
              </Link>
              <Link href="/how-we-verify" className="block font-jost text-sm tracking-widest uppercase text-teal/70 hover:text-teal transition-colors">
                How we verify authenticity &rarr;
              </Link>
            </div>
          </FadeUp>
        </div>
        <div className="bg-dark px-10 lg:px-16 py-20">
          <div className="space-y-8">
            {howItWorks.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.09}>
                <div className="flex gap-5 items-start">
                  <span className="font-cormorant text-2xl text-teal/40 font-light leading-none mt-1 shrink-0 w-7">{step.n}</span>
                  <div>
                    <h4 className="font-cormorant text-lg text-offwhite font-semibold mb-1">{step.title}</h4>
                    <p className="font-jost text-sm text-offwhite/50 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO INCLUDE */}
      <section className="bg-dark py-24 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4 text-center">Helpful Information</p>
            <h2 className="font-cormorant text-4xl text-offwhite font-semibold mb-10 text-center">What to Include in Your Request</h2>
            <div className="bg-dark-card border border-teal/20 p-8">
              <ul className="space-y-4">
                {[
                  { label: 'Gemstone type', detail: 'Species and variety (e.g. blue sapphire, padparadscha, ruby, alexandrite)' },
                  { label: 'Colour preferences', detail: 'Specific colour descriptions or reference images' },
                  { label: 'Size range', detail: 'Desired carat weight or dimensions' },
                  { label: 'Treatment preference', detail: 'Unheated only, heated acceptable, or no preference' },
                  { label: 'Budget range', detail: 'A realistic budget helps us focus the search efficiently' },
                  { label: 'Purpose', detail: 'Jewellery setting, collection, investment, or manufacturing — this affects our recommendations' },
                  { label: 'Certification', detail: 'GIA, GRS, or other laboratory preferences' },
                  { label: 'Timeline', detail: 'When you need the stone — some requests take days, others weeks' },
                ].map((item) => (
                  <li key={item.label} className="flex gap-4 items-start">
                    <span className="block w-1.5 h-1.5 rounded-full bg-teal/50 mt-2 shrink-0" />
                    <div>
                      <span className="font-cormorant text-base text-offwhite font-semibold">{item.label}</span>
                      <span className="font-jost text-sm text-offwhite/50"> — {item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-dark overflow-hidden py-24 px-6 text-center border-t border-teal/10">
        <div className="absolute inset-0 pointer-events-none opacity-25" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.3) 0%, rgba(107,45,139,0.3) 100%)' }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <FadeUp>
            <p className="font-cormorant italic text-xl text-offwhite/60 mb-4">Every search starts with a conversation</p>
            <p className="font-jost text-sm text-offwhite/45 mb-8 max-w-md mx-auto leading-relaxed">
              Tell us what you&apos;re looking for. There is no obligation, no minimum order, and every enquiry receives a personal response.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
              Request a Gemstone Search
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
