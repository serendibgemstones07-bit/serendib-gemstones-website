import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'

export const metadata: Metadata = {
  title: 'For Jewellers & Trade Buyers',
  description: 'Reliable Ceylon gemstone supply for jewellers, manufacturers, and retailers worldwide. Calibrated parcels, matched sets, certified loose stones, and long-term trade relationships from Sri Lanka.',
  alternates: { canonical: 'https://serendibgemstones.com/for-jewellers' },
}

const tradeServices = [
  {
    title: 'Calibrated Parcels',
    description: 'Consistent colour-matched sapphires and rubies in standard calibrated sizes, ready for production setting. Available in heated and unheated grades.',
  },
  {
    title: 'Matched Pairs & Sets',
    description: 'Precisely matched stones for earrings, suites, and multi-stone designs. We source from the same rough or deposit for optimal colour consistency.',
  },
  {
    title: 'Certified Loose Stones',
    description: 'Individual GIA or GRS certified gemstones for high-value custom pieces. Full documentation including origin, treatment status, and measurements.',
  },
  {
    title: 'Regular Supply Arrangements',
    description: 'Ongoing supply relationships with consistent quality, priority access to new material, and trade pricing for repeat orders.',
  },
  {
    title: 'Custom Cutting',
    description: 'Specific cuts, dimensions, and proportions to your requirements. Our cutting network handles precision calibration for manufacturing specifications.',
  },
  {
    title: 'Stone Selection Visits',
    description: 'Arrange to view and select stones in Sri Lanka. We facilitate visits to our offices and, where possible, to sourcing locations.',
  },
]

const gemstoneTypes = [
  { name: 'Blue Sapphire', colour: '#1a5f9e', note: 'Heated & unheated, 0.5–50ct' },
  { name: 'Padparadscha', colour: '#e8855e', note: 'Unheated only, extremely limited' },
  { name: 'Ruby', colour: '#c0392b', note: 'Heated & unheated, Mozambique & Ceylon' },
  { name: 'Yellow Sapphire', colour: '#e6b800', note: 'Heated & unheated, excellent availability' },
  { name: 'Pink Sapphire', colour: '#d4668e', note: 'Natural pink, various saturations' },
  { name: 'White Sapphire', colour: '#c8d6e5', note: 'Eye-clean, diamond alternatives' },
  { name: 'Alexandrite', colour: '#2d8b6e', note: 'Strong colour change, very rare' },
  { name: 'Spinel', colour: '#8e4585', note: 'Various colours, rising demand' },
]

const processSteps = [
  { n: '01', title: 'Discuss Requirements', body: 'Tell us what you need — species, sizes, colour range, quantities, budget, and timeline. We assess availability and provide a realistic quote.' },
  { n: '02', title: 'Source & Select', body: 'We source from our existing inventory and Sri Lanka\'s gem network. Every stone is assessed against your specifications before shortlisting.' },
  { n: '03', title: 'Review & Approve', body: 'We send high-resolution photographs, measurements, and — where applicable — laboratory reports. You approve before we proceed.' },
  { n: '04', title: 'Certify & Document', body: 'GIA or GRS certification arranged for stones that require it. Full export documentation prepared for international shipment.' },
  { n: '05', title: 'Secure Delivery', body: 'Insured worldwide shipping with tracking. Customs documentation included. Stones arrive safely, anywhere in the world.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'For Jewellers & Trade' },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'For Jewellers & Trade Buyers — Serendib Gemstones',
      description: 'Reliable Ceylon gemstone supply for jewellers, manufacturers, and retailers worldwide.',
      url: 'https://serendibgemstones.com/for-jewellers',
    },
  ],
}

export default function ForJewellersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative bg-dark pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,168,76,0.25) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5">Trade & Wholesale</p>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              Your Reliable Gemstone<br />Supply Partner in Sri Lanka
            </h1>
            <p className="font-jost text-sm text-offwhite/55 max-w-2xl mx-auto leading-relaxed mb-10">
              We supply certified natural <Link href="/ceylon-sapphires" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">Ceylon gemstones</Link> to jewellers, manufacturers, and retailers worldwide. Calibrated parcels, matched sets, or individual <Link href="/learn/certification" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">certified</Link> stones — sourced directly and exported with full documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3.5 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
                Discuss Your Requirements
              </Link>
              <Link href="/custom-sourcing" className="px-8 py-3.5 border border-teal/40 text-teal-light hover:bg-teal/10 font-jost text-sm tracking-widest uppercase transition-all duration-300">
                Request a Search
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* TRADE SERVICES */}
      <section className="bg-dark-card py-24 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">What We Offer</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite">Trade Services</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tradeServices.map((service, i) => (
              <FadeUp key={service.title} delay={i * 0.07}>
                <div className="bg-dark border border-white/6 p-7 h-full">
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-3">{service.title}</h3>
                  <p className="font-jost text-xs text-offwhite/45 leading-relaxed">{service.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABLE GEMSTONES */}
      <section className="bg-dark py-24 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">What We Supply</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite mb-4">Available Gemstones</h2>
            <p className="font-jost text-sm text-offwhite/45 max-w-xl mx-auto leading-relaxed">
              <Link href="/learn/sri-lanka" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">Sri Lanka</Link> produces over 75 varieties of gemstone. These are the species we most commonly supply to trade buyers — read the individual guides for <Link href="/gemstones/blue-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">blue sapphire</Link>, <Link href="/gemstones/yellow-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">yellow sapphire</Link>, <Link href="/gemstones/pink-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">pink sapphire</Link>, <Link href="/gemstones/padparadscha-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">padparadscha</Link>, <Link href="/gemstones/star-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">star sapphire</Link>, and <Link href="/gemstones/ruby" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">ruby</Link>.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gemstoneTypes.map((gem, i) => (
              <FadeUp key={gem.name} delay={i * 0.06}>
                <div className="bg-dark-card border border-white/6 p-6 text-center">
                  <GemSVG colour={gem.colour} size={48} className="mx-auto mb-4" />
                  <h3 className="font-cormorant text-base text-offwhite font-semibold mb-1">{gem.name}</h3>
                  <p className="font-jost text-[11px] text-offwhite/40 leading-relaxed">{gem.note}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK WITH TRADE BUYERS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-t border-teal/10">
        <div className="bg-dark-card px-10 lg:px-16 py-20 border-r border-teal/15">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Our Process</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold leading-tight mb-6">
              How We Work<br />with Trade Buyers
            </h2>
            <p className="font-jost text-sm text-offwhite/55 leading-relaxed mb-8">
              A straightforward process designed for professional buyers who need reliability, consistency, and full documentation.
            </p>
            <Link href="/export-shipping" className="font-jost text-sm tracking-widest uppercase text-teal/70 hover:text-teal transition-colors">
              Export &amp; shipping details &rarr;
            </Link>
          </FadeUp>
        </div>
        <div className="bg-dark px-10 lg:px-16 py-20">
          <div className="space-y-8">
            {processSteps.map((step, i) => (
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

      {/* WHY WORK WITH US */}
      <section className="bg-dark-card py-24 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Why Serendib</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite">Why Trade Buyers Choose Us</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Direct Source Access', body: 'We source directly from Sri Lanka\'s gem fields and cutting centres. No intermediary chain — better prices, better traceability.' },
              { title: 'Consistent Quality', body: 'Established grading standards applied to every stone. Trade buyers receive consistent quality across orders, regardless of size.' },
              { title: 'Full Certification', body: 'GIA and GRS certification available for every stone. Origin reports, treatment disclosure, and measurements documented.' },
              { title: 'Export Experience', body: 'Years of international shipping experience. We handle documentation, insurance, and customs requirements for smooth delivery.' },
              { title: 'Flexible Arrangements', body: 'From single certified stones to regular supply agreements. We adapt to your purchasing cycle and production schedule.' },
              { title: 'Transparent Communication', body: 'Direct contact with our founders. Responsive communication, honest availability updates, and no pressure sales.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="flex gap-4 items-start">
                  <span className="block w-1.5 h-1.5 rounded-full bg-teal/50 mt-2 shrink-0" />
                  <div>
                    <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-1">{item.title}</h3>
                    <p className="font-jost text-xs text-offwhite/45 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-dark overflow-hidden py-24 px-6 text-center border-t border-teal/10">
        <div className="absolute inset-0 pointer-events-none opacity-25" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.3) 0%, rgba(107,45,139,0.3) 100%)' }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/70 mb-4">Start a Trade Relationship</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite mb-5">
              Discuss Your Requirements
            </h2>
            <p className="font-jost text-sm text-offwhite/55 mb-10 leading-relaxed">
              Tell us what you need — stone types, quantities, specifications, and timeline. Every trade enquiry receives a personal response from our founders.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
              Contact Our Trade Team
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
