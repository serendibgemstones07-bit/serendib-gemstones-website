import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'

export const metadata: Metadata = {
  title: 'Ceylon Sapphire Wholesale — Direct-from-Sri-Lanka Trade Supply',
  description:
    'Wholesale Ceylon sapphires, rubies, and fancy corundum direct from Sri Lanka. Certified, unheated, calibrated, and single-stone parcels for jewellery manufacturers, retailers, designers, and trade buyers worldwide. NGJA-licensed. Full export documentation.',
  alternates: { canonical: 'https://www.serendibgemstones.com/wholesale' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Wholesale', item: 'https://www.serendibgemstones.com/wholesale' },
      ],
    },
    {
      '@type': 'Service',
      serviceType: 'Wholesale gemstone supply',
      name: 'Ceylon Sapphire Wholesale — Direct from Sri Lanka',
      provider: {
        '@type': 'Organization',
        name: 'Serendib Gemstones (Pvt) Ltd',
        url: 'https://www.serendibgemstones.com',
      },
      areaServed: 'Worldwide',
      description:
        'Wholesale supply of certified natural Ceylon sapphires, rubies, and fancy corundum to jewellery manufacturers, retailers, designers, and trade buyers worldwide. Calibrated parcels, single-stone selections, unheated GIA/GRS-certified material, and long-term supply arrangements. NGJA-licensed exporter.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          description: 'Trade pricing on enquiry — parcel and single-stone quotes provided within one business day',
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you sell wholesale to trade buyers only?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our wholesale programme is for verified trade buyers: jewellery manufacturers, retailers with brick-and-mortar or online storefronts, designers, wholesale gem dealers, and other licensed trade participants. We ask for basic trade documentation (business registration, tax ID, or gem-trade license) on account opening. Serendib Gemstones (Pvt) Ltd is an NGJA-licensed exporter in Sri Lanka.',
          },
        },
        {
          '@type': 'Question',
          name: 'What minimum order quantity do you require?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For single-stone trade sales there is no MOQ — trade buyers can order one certified stone or hundreds. For calibrated parcels we typically start at a $2,000 minimum on first order to make sourcing, cutting, and shipping economics work for both sides. Long-term supply arrangements are individually negotiated.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you supply calibrated parcels?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — this is a significant part of our wholesale business. We supply calibrated Ceylon sapphires, rubies, and fancy corundum in standard sizes and matched-colour parcels for jewellery manufacturers. Common sizes include 3–4 mm rounds, 4×3 mm ovals, 5×3 mm pears, and larger. Custom calibration to specification is available for longer lead times.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do wholesale stones come with certificates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Single-stone and larger certified stones (typically 0.5 ct and above, or any stone of significant value) come with independent laboratory certificates from GIA, GRS, or another top-tier laboratory as specified. Calibrated parcels of smaller stones (below approximately 0.5 ct each) are supplied with our own in-house identification and origin declaration; independent lab reports on request for a per-stone fee.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is your export process?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We handle all Sri Lankan export documentation, including NGJA export permits, customs clearance, and insured international shipping. Standard shipping is via FedEx, DHL, or Malca-Amit for larger consignments, with full insurance coverage and tracked delivery. Documentation includes commercial invoice, packing list, NGJA export certificate, and (where applicable) laboratory reports. Delivery to most major markets in 3–5 business days after payment clearance.',
          },
        },
        {
          '@type': 'Question',
          name: 'What payment terms do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'First-order buyers pay in advance by wire transfer or in-person cash-on-collection in Sri Lanka. Established trade accounts (typically after 3–4 orders in good standing) can move to 50% deposit / 50% before shipment, and eventually to net-30 terms for long-standing manufacturer relationships. All prices are in USD unless otherwise agreed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you source specific stones on request?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Custom sourcing is one of our core services. Tell us species, colour, carat weight, treatment preference, certification requirement, and budget, and we source directly from our network of Ratnapura and Elahera mine operators, cutters, and dealers. Typical turnaround is 2–6 weeks depending on rarity; padparadscha, unheated alexandrite, and cobalt-blue spinel take longer. Custom sourcing carries no obligation to purchase — you review the sourced stones and select what you want.',
          },
        },
      ],
    },
  ],
}

const services = [
  {
    title: 'Calibrated Parcels',
    body: 'Standard-size Ceylon sapphires and rubies in matched-colour parcels for jewellery manufacturing. Rounds, ovals, cushions, pears, and marquise in standard trade calibrations. Custom sizes on longer lead times.',
  },
  {
    title: 'Single Certified Stones',
    body: 'Individual GIA / GRS-certified Ceylon sapphires, rubies, padparadscha, and fancy corundum for designer pieces and retail centre stones. Unheated material a specialty.',
  },
  {
    title: 'Custom Sourcing',
    body: 'Tell us species, colour, size, treatment, and budget. We source directly from our network of Ratnapura and Elahera operators, cutters, and dealers. No obligation to purchase; review sourced stones and select.',
  },
  {
    title: 'Matched Pairs & Sets',
    body: 'Matched-colour pairs for earrings, three-stone rings, and custom pieces. Larger matched sets for tennis bracelets, necklaces, and manufacturing runs.',
  },
  {
    title: 'Long-Term Supply',
    body: 'Recurring supply arrangements for manufacturers with continuing demand. Pre-committed pricing bands, priority allocation, and monthly or quarterly delivery schedules.',
  },
  {
    title: 'Private-Label Certification',
    body: 'For manufacturer partners: certified stones supplied with Ceylon Gem Identity (CGI) portal linkage, giving your end customers a scan-to-verify provenance trail.',
  },
]

const whyPoints = [
  { title: 'Mine-Direct', body: 'We source directly from operators in Ratnapura, Elahera, Eheliyagoda, and Kanthale. No middlemen, no re-sold parcels.' },
  { title: 'NGJA-Licensed', body: 'Full compliance with Sri Lankan gem export regulation. NGJA license number on request; every export accompanied by official documentation.' },
  { title: 'Unheated Specialty', body: 'Ceylon\'s traditional strength — a comparatively high share of unheated material with fine natural colour. Our stock reflects that.' },
  { title: 'Founder-Level Response', body: 'Trade enquiries are handled directly by our founding team, not by a sales pipeline. Straight answers, direct quotes, no middle-management delay.' },
  { title: 'CGI-Enabled', body: 'Ceylon Gem Identity — our optional per-stone provenance system — gives your retail customers a scan-to-verify link that reads as trust at the point of sale.' },
]

const stoneSpecialties = [
  { name: 'Blue Sapphire', href: '/gemstones/blue-sapphire', colour: '#1a5f9e', tag: 'Core Supply' },
  { name: 'Padparadscha Sapphire', href: '/gemstones/padparadscha-sapphire', colour: '#e8855e', tag: 'On Request' },
  { name: 'Ruby', href: '/gemstones/ruby', colour: '#c0392b', tag: 'Core Supply' },
  { name: 'Yellow Sapphire', href: '/gemstones/yellow-sapphire', colour: '#d4af37', tag: 'Calibrated' },
  { name: 'Pink Sapphire', href: '/gemstones/pink-sapphire', colour: '#d46b9a', tag: 'Calibrated' },
  { name: 'Green Sapphire', href: '/gemstones/green-sapphire', colour: '#3a8c50', tag: 'Trending' },
  { name: 'Star Sapphire', href: '/gemstones/star-sapphire', colour: '#3a6fa8', tag: 'On Request' },
  { name: 'Star Ruby', href: '/gemstones/star-ruby', colour: '#a02b2b', tag: 'On Request' },
  { name: 'Alexandrite', href: '/gemstones/alexandrite', colour: '#6b8a4a', tag: 'Rare' },
  { name: 'Spinel', href: '/gemstones/spinel', colour: '#3c64c8', tag: 'Untreated' },
  { name: 'Hessonite', href: '/gemstones/hessonite', colour: '#c8783c', tag: 'Navaratna' },
  { name: 'Zircon', href: '/gemstones/zircon', colour: '#3a8cbe', tag: 'On Request' },
]

const process = [
  { n: '01', title: 'Enquire', body: 'Tell us what you need — species, size, colour, treatment, certification, quantity, timeline. Or ask us to propose a parcel from current inventory.' },
  { n: '02', title: 'Quote', body: 'We respond within one business day with pricing, current-inventory options, and — for custom sourcing — sourcing timeline and estimate.' },
  { n: '03', title: 'Approve', body: 'For sourcing work, we send images, videos, and lab report scans of specific candidate stones. You select what you want; anything you don\'t like goes back.' },
  { n: '04', title: 'Ship', body: 'Payment cleared, we handle NGJA export documentation, packing, and insured international shipping via FedEx, DHL, or Malca-Amit. 3–5 business days to most markets.' },
]

export default function WholesalePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(61,122,122,0.4) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-offwhite/60">Wholesale</span>
          </nav>

          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Trade Supply</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight mb-6">
              Ceylon Sapphire Wholesale.<br />
              <em style={{ color: '#e0bc6e', fontStyle: 'italic' }}>Direct from Sri Lanka.</em>
            </h1>
            <p className="font-jost text-base text-offwhite/60 max-w-2xl leading-relaxed mb-8">
              Wholesale supply of certified natural Ceylon sapphires, rubies, and fancy corundum to jewellery manufacturers, retailers, designers, and trade buyers worldwide. Calibrated parcels, single-stone certified selections, custom sourcing, long-term supply arrangements. NGJA-licensed exporter. Full export documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300 text-center"
              >
                Open a Trade Account
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 border border-purple/60 text-purple-mid hover:border-purple hover:bg-purple/10 font-jost text-sm tracking-widest uppercase transition-all duration-300 text-center"
              >
                Request a Parcel Quote
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 border-t border-teal/15 pt-8">
              {[
                { label: 'License', value: 'NGJA' },
                { label: 'Delivery', value: 'Worldwide' },
                { label: 'Certification', value: 'GIA / GRS' },
                { label: 'MOQ', value: 'No Minimum (single stones)' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-cormorant text-xl text-teal font-semibold">{s.value}</p>
                  <p className="font-jost text-xs text-offwhite/40 uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why buy wholesale from us */}
      <section className="bg-dark-card px-6 lg:px-10 py-16 border-t border-teal/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-12">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Why Wholesale With Us</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-light leading-tight">
              A sourcing partner in Sri Lanka —<br />
              <em className="italic text-teal-light">not another middleman.</em>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPoints.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.05}>
                <div className="border-l-2 border-teal/40 pl-6">
                  <h3 className="font-cormorant text-2xl text-offwhite font-semibold mb-2">{p.title}</h3>
                  <p className="font-jost text-sm text-offwhite/55 leading-relaxed">{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-dark px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-12">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Trade Services</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-light">What We Supply</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.05}>
                <div className="h-full border border-white/6 bg-dark-card p-6 hover:border-teal/30 transition-colors">
                  <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-3">{s.title}</h3>
                  <p className="font-jost text-sm text-offwhite/55 leading-relaxed">{s.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Stones we specialise in */}
      <section className="bg-dark-card px-6 lg:px-10 py-16 border-t border-teal/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-10">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Trade Inventory</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-light">Ceylon Species &amp; Varieties</h2>
            <p className="font-jost text-sm text-offwhite/50 mt-4 max-w-2xl leading-relaxed">
              Core supply carries continuously; on-request stones sourced to specification. Click any stone to read the full gemmological guide.
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stoneSpecialties.map((s, i) => (
              <FadeUp key={s.name} delay={i * 0.03}>
                <Link href={s.href} className="group block border border-white/6 hover:border-teal/40 bg-dark p-5 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <GemSVG colour={s.colour} size={40} />
                    <span className="font-jost text-[10px] tracking-wider uppercase text-teal/50 border border-teal/15 px-2 py-0.5">{s.tag}</span>
                  </div>
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold group-hover:text-teal-light transition-colors">{s.name}</h3>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-dark px-6 lg:px-10 py-16">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="mb-12">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">How It Works</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-light">Trade Process</h2>
          </FadeUp>

          <div className="space-y-8">
            {process.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.08}>
                <div className="grid grid-cols-[80px_1fr] gap-6">
                  <p className="font-cormorant text-4xl text-teal/40 italic leading-none">{step.n}</p>
                  <div>
                    <h3 className="font-cormorant text-2xl text-offwhite font-semibold mb-2">{step.title}</h3>
                    <p className="font-jost text-sm text-offwhite/55 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed FAQ */}
      <section className="bg-dark-card px-6 lg:px-10 py-16 border-t border-teal/10">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="mb-10">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Trade Buyer FAQ</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-light">Common Trade Questions</h2>
          </FadeUp>

          <ArticleByline updated="2026-08-25" reviewer="Thusira Ranasinghe" />

          <div className="space-y-1 border-t border-white/6 mt-8">
            {[
              {
                q: 'Do you sell wholesale to trade buyers only?',
                a: 'Yes. Our wholesale programme is for verified trade buyers: jewellery manufacturers, retailers with brick-and-mortar or online storefronts, designers, wholesale gem dealers, and other licensed trade participants. We ask for basic trade documentation (business registration, tax ID, or gem-trade license) on account opening. Serendib Gemstones (Pvt) Ltd is an NGJA-licensed exporter in Sri Lanka.',
              },
              {
                q: 'What minimum order quantity do you require?',
                a: 'For single-stone trade sales there is no MOQ — trade buyers can order one certified stone or hundreds. For calibrated parcels we typically start at a $2,000 minimum on first order to make sourcing, cutting, and shipping economics work for both sides. Long-term supply arrangements are individually negotiated.',
              },
              {
                q: 'Can you supply calibrated parcels?',
                a: 'Yes — this is a significant part of our wholesale business. We supply calibrated Ceylon sapphires, rubies, and fancy corundum in standard sizes and matched-colour parcels for jewellery manufacturers. Common sizes include 3–4 mm rounds, 4×3 mm ovals, 5×3 mm pears, and larger. Custom calibration to specification is available for longer lead times.',
              },
              {
                q: 'Do wholesale stones come with certificates?',
                a: 'Single-stone and larger certified stones (typically 0.5 ct and above, or any stone of significant value) come with independent laboratory certificates from GIA, GRS, or another top-tier laboratory as specified. Calibrated parcels of smaller stones (below approximately 0.5 ct each) are supplied with our own in-house identification and origin declaration; independent lab reports on request for a per-stone fee.',
              },
              {
                q: 'What is your export process?',
                a: 'We handle all Sri Lankan export documentation, including NGJA export permits, customs clearance, and insured international shipping. Standard shipping is via FedEx, DHL, or Malca-Amit for larger consignments, with full insurance coverage and tracked delivery. Documentation includes commercial invoice, packing list, NGJA export certificate, and (where applicable) laboratory reports. Delivery to most major markets in 3–5 business days after payment clearance.',
              },
              {
                q: 'What payment terms do you offer?',
                a: 'First-order buyers pay in advance by wire transfer or in-person cash-on-collection in Sri Lanka. Established trade accounts (typically after 3–4 orders in good standing) can move to 50% deposit / 50% before shipment, and eventually to net-30 terms for long-standing manufacturer relationships. All prices are in USD unless otherwise agreed.',
              },
              {
                q: 'Can you source specific stones on request?',
                a: 'Yes. Custom sourcing is one of our core services. Tell us species, colour, carat weight, treatment preference, certification requirement, and budget, and we source directly from our network of Ratnapura and Elahera mine operators, cutters, and dealers. Typical turnaround is 2–6 weeks depending on rarity; padparadscha, unheated alexandrite, and cobalt-blue spinel take longer. Custom sourcing carries no obligation to purchase — you review the sourced stones and select what you want.',
              },
              {
                q: 'What treatments do your stones carry?',
                a: 'We supply the full spectrum: naturally unheated stones (a Ceylon specialty), conventionally heat-treated stones (industry-standard and disclosed), and — on explicit trade request only — heavily-treated commercial material. All treatments are disclosed at time of quote and confirmed on the invoice. We do not stock beryllium-diffused corundum or lead-glass-filled ruby in default inventory; if a buyer specifically requests such material we source it separately with full disclosure.',
              },
              {
                q: 'How do you verify Sri Lankan (Ceylon) origin?',
                a: 'For single stones of significant value, origin is confirmed by the certifying laboratory (GIA, GRS, SSEF, or Gübelin). For calibrated parcels and smaller stones, we provide origin declaration based on our own sourcing chain — every stone we handle enters our inventory directly from Sri Lankan mines, cutters, or NGJA-licensed dealers. Buyers who require third-party origin certification on smaller stones can request it at additional cost.',
              },
              {
                q: 'Do you offer exclusive or region-locked distribution?',
                a: 'For manufacturer partners committing to significant recurring volume, we consider region-locked or product-locked exclusive arrangements on a case-by-case basis. Discuss on enquiry.',
              },
            ].map((faq) => (
              <details key={faq.q} className="faq-item border-b border-white/6">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-20 px-6 text-center border-t border-teal/10">
        <FadeUp>
          <p className="font-cormorant italic text-2xl text-offwhite/60 mb-4">
            Ready to open a trade account?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            Send us your business details and what you&apos;re sourcing — we respond within one business day with pricing, inventory, and a route in.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Contact the Trade Desk
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
