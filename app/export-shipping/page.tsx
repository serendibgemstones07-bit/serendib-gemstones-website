import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'Export & Worldwide Shipping',
  description: 'Secure, insured gemstone shipping from Sri Lanka to anywhere in the world. Full export documentation, customs guidance, tracked delivery, and professional packaging.',
  alternates: { canonical: 'https://serendibgemstones.com/export-shipping' },
}

const shippingFeatures = [
  {
    title: 'Secure Packaging',
    description: 'Every gemstone is professionally packaged in tamper-evident, cushioned containers designed for international transit. Stones are individually wrapped and protected.',
  },
  {
    title: 'Fully Insured',
    description: 'All shipments are insured for the full declared value. Coverage begins the moment the stone leaves our hands and continues until it reaches yours.',
  },
  {
    title: 'Export Documentation',
    description: 'Complete export paperwork prepared by our team: commercial invoices, packing lists, certificates of origin, and any additional documentation your country requires.',
  },
  {
    title: 'Tracked Delivery',
    description: 'Real-time tracking from Sri Lanka to your door. We use established international couriers with proven records for high-value goods.',
  },
  {
    title: 'Customs Guidance',
    description: 'We provide guidance on import duties, taxes, and customs procedures for your destination country. No surprises on arrival.',
  },
  {
    title: 'Laboratory Reports',
    description: 'GIA or GRS certificates travel with every significant stone. Digital copies are sent ahead of shipment so you can review before arrival.',
  },
]

const destinations = [
  'United States', 'United Kingdom', 'Germany', 'France', 'Switzerland',
  'Hong Kong', 'Singapore', 'Japan', 'Australia', 'Canada',
  'United Arab Emirates', 'Thailand', 'India', 'Italy', 'Belgium',
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Export & Shipping' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Gemstone Export & Worldwide Shipping',
      description: 'Secure, insured gemstone shipping from Sri Lanka to anywhere in the world.',
      provider: {
        '@type': 'Organization',
        name: 'Serendib Gemstones (Pvt) Ltd',
        url: 'https://serendibgemstones.com',
      },
      areaServed: 'Worldwide',
      url: 'https://serendibgemstones.com/export-shipping',
    },
  ],
}

export default function ExportShippingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative bg-dark pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(26,95,158,0.25) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5">Worldwide Delivery</p>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              From Sri Lanka<br />to Anywhere in the World
            </h1>
            <p className="font-jost text-sm text-offwhite/55 max-w-2xl mx-auto leading-relaxed mb-10">
              Secure, insured international shipping with full export documentation. We handle everything from professional packaging to customs paperwork — your <Link href="/ceylon-sapphires" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">Ceylon gemstones</Link> arrive safely, wherever you are. See <Link href="/how-we-source" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">how we source</Link> and <Link href="/how-we-verify" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">how we verify</Link> every stone before it ships.
            </p>
            <Link href="/contact" className="px-8 py-3.5 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
              Enquire About Shipping
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-dark-card py-24 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">What&apos;s Included</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite">Every Shipment Includes</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {shippingFeatures.map((feature, i) => (
              <FadeUp key={feature.title} delay={i * 0.07}>
                <div className="bg-dark border border-white/6 p-7 h-full">
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-3">{feature.title}</h3>
                  <p className="font-jost text-xs text-offwhite/45 leading-relaxed">{feature.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-dark py-24 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Export Process</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite mb-4">What Happens After Purchase</h2>
            <p className="font-jost text-sm text-offwhite/45 max-w-xl mx-auto leading-relaxed">
              Many international buyers hesitate because they don&apos;t know what happens after the first email. Here is exactly what to expect.
            </p>
          </FadeUp>
          <div className="space-y-8">
            {[
              { n: '01', title: 'Stone Confirmation', body: 'You approve the selected stone based on photographs, measurements, and certification. Nothing ships until you confirm.' },
              { n: '02', title: 'Payment', body: 'We accept international bank transfers and other secure payment methods. Payment is confirmed before shipment preparation begins.' },
              { n: '03', title: 'Certification', body: 'If the stone requires additional certification, we arrange it. Digital copies of all reports are sent to you before shipping.' },
              { n: '04', title: 'Professional Packaging', body: 'The gemstone is securely packaged in tamper-evident containers with protective cushioning designed for international transit.' },
              { n: '05', title: 'Export Documentation', body: 'Our team prepares all required export paperwork — commercial invoice, packing list, certificate of origin, and any destination-specific documents.' },
              { n: '06', title: 'Insured Shipment', body: 'The package is shipped via established international courier, fully insured for the declared value. You receive a tracking number immediately.' },
              { n: '07', title: 'Delivery & Confirmation', body: 'We monitor the shipment until delivery is confirmed. If any customs queries arise, we assist with documentation and communication.' },
            ].map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.06}>
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

      {/* DESTINATIONS */}
      <section className="bg-dark-card py-24 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Where We Ship</p>
            <h2 className="font-cormorant text-4xl text-offwhite font-semibold mb-3">Shipping Destinations</h2>
            <p className="font-jost text-sm text-offwhite/45 mb-10 max-w-xl mx-auto leading-relaxed">
              We regularly ship to the following countries and can arrange delivery to virtually any destination worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {destinations.map((country) => (
                <span key={country} className="font-jost text-xs text-offwhite/50 border border-white/8 px-4 py-2 tracking-wider">
                  {country}
                </span>
              ))}
            </div>
            <p className="font-jost text-xs text-offwhite/30 italic">
              Don&apos;t see your country? Contact us — we can likely ship to your location.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FAQ-STYLE SECTION */}
      <section className="bg-dark py-24 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center mb-14">
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold">Common Questions</h2>
          </FadeUp>
          <div className="space-y-3">
            {[
              { q: 'How long does shipping take?', a: 'Typical delivery times are 3–7 business days to most major destinations. Express options are available for time-sensitive orders. Certification, if required, adds 2–4 weeks before shipping.' },
              { q: 'Is the shipment insured?', a: 'Yes. Every shipment is fully insured for the declared value from the moment it leaves our hands until it reaches yours. Insurance is included in the shipping cost.' },
              { q: 'What about import duties and taxes?', a: 'Import duties and taxes vary by destination country and are the responsibility of the buyer. We provide accurate customs documentation to ensure smooth clearance and can advise on typical duty rates for your country.' },
              { q: 'What if I\'m not satisfied with the stone?', a: 'We send detailed photographs, measurements, and certification before shipment. Our goal is to ensure you are confident in your purchase before anything ships. Discuss our return policy directly with our team.' },
              { q: 'Can I arrange my own shipping?', a: 'Yes. If you prefer to use your own courier account or logistics provider, we can prepare the stones for collection from our Sri Lanka office.' },
            ].map((faq) => (
              <details key={faq.q} className="faq-item border border-white/6 bg-dark-card">
                <summary className="px-6 py-4 cursor-pointer font-jost text-sm text-offwhite/70">{faq.q}</summary>
                <div className="faq-answer px-6 font-jost text-sm text-offwhite/50 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-dark overflow-hidden py-24 px-6 text-center border-t border-teal/10">
        <div className="absolute inset-0 pointer-events-none opacity-25" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.3) 0%, rgba(107,45,139,0.3) 100%)' }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <FadeUp>
            <p className="font-cormorant italic text-xl text-offwhite/60 mb-4">Ready to source gemstones from Sri Lanka?</p>
            <p className="font-jost text-sm text-offwhite/45 mb-8 max-w-md mx-auto leading-relaxed">
              Tell us what you need. We&apos;ll handle sourcing, certification, documentation, and delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/custom-sourcing" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
                Request a Gemstone Search
              </Link>
              <Link href="/contact" className="inline-block px-10 py-4 border border-teal/40 text-teal-light hover:bg-teal/10 font-jost text-sm tracking-widest uppercase transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
