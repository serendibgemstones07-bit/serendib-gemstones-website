'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import GemCard from '@/components/GemCard'
import GemSVG from '@/components/GemSVG'
import FadeUp from '@/components/FadeUp'
import LogoImage from '@/components/LogoImage'
import { stoneSpecies } from '@/lib/gems'

const HeroGems = dynamic(() => import('@/components/HeroGems'), { ssr: false })

const gemCards = [
  {
    title: 'Unheated Fine Gemstones',
    subtitle: 'GIA / GRS Certified',
    description: 'Our finest collection of unheated sapphires, rubies and chrysoberyls — each accompanied by a leading laboratory certificate confirming no heat enhancement.',
    accentColour: '#c9a84c',
    borderColour: '#c9a84c',
    bgClass: 'bg-dark-card',
  },
  {
    title: 'Unheated Multicolour Stones',
    subtitle: 'Alexandrite · Padparadscha',
    description: 'Rare colour-change alexandrites and lotus-blossom padparadschas. The most coveted and scarce gemstones Sri Lanka offers, entirely natural.',
    accentColour: '#9b5dc8',
    borderColour: '#6b2d8b',
    bgClass: 'bg-[#0d1525]',
  },
  {
    title: 'Heated Calibrated Gemstones',
    subtitle: 'Ready for Setting',
    description: 'Premium calibrated sapphires and rubies, gently heat-enhanced for optimal colour. Precision-cut for seamless jewellery setting worldwide.',
    accentColour: '#e0bc6e',
    borderColour: '#e0bc6e',
    bgClass: 'bg-[#0a1422]',
  },
]

const services = [
  { title: 'Custom Gemstone Sourcing', description: 'Tell us your specifications — species, colour, carat weight, budget. We source directly from Sri Lanka\'s finest gem fields and deliver worldwide.', href: '/custom-sourcing' },
  { title: 'Jeweller & Trade Supply', description: 'Calibrated parcels, certified loose stones, and long-term supply arrangements for jewellery manufacturers and retailers internationally.', href: '/for-jewellers' },
  { title: 'Export & Worldwide Shipping', description: 'Secure, insured shipping to any destination. Full export documentation, customs guidance, and tracked delivery for every shipment.', href: '/export-shipping' },
  { title: 'Investment Consultation', description: 'Guidance on building a gemstone portfolio with strong provenance. Which stones hold value, what to look for, and current market insight.', href: '/contact' },
  { title: 'Custom Jewellery', description: 'Commission a bespoke piece built around a certified Sri Lankan gemstone — from design consultation to international delivery.', href: '/custom-jewellery' },
  { title: 'Gemstone Matching', description: 'Need matched pairs or calibrated sets? We source stones with matching colour, size, and clarity for your manufacturing requirements.', href: '/contact' },
]

const libraryGems = [
  { name: 'Blue Sapphire', colour: '#1a5f9e', href: '/gemstones/blue-sapphire', tag: 'Most Popular' },
  { name: 'Padparadscha', colour: '#e8855e', href: '/gemstones/padparadscha-sapphire', tag: 'Rarest' },
  { name: 'Ruby', colour: '#c0392b', href: '/gemstones/ruby', tag: 'The King' },
  { name: 'Yellow Sapphire', colour: '#d4af37', href: '/gemstones/yellow-sapphire', tag: 'Pukhraj' },
  { name: 'Pink Sapphire', colour: '#d46b9a', href: '/gemstones/pink-sapphire', tag: 'Rising Star' },
  { name: 'Star Sapphire', colour: '#3a6fa8', href: '/gemstones/star-sapphire', tag: 'Asterism' },
]

const knowledgeArticles = [
  { title: 'What is an unheated sapphire?', category: 'Sapphires', href: '/learn/what-is-an-unheated-sapphire' },
  { title: 'GIA vs GRS: which certificate is better?', category: 'Certification', href: '/learn/gia-vs-grs-certificate' },
  { title: 'Are unheated sapphires worth more?', category: 'Buying', href: '/learn/are-unheated-sapphires-worth-more' },
  { title: 'Ceylon vs Kashmir sapphire', category: 'Sapphires', href: '/learn/ceylon-vs-kashmir-sapphire' },
]

const sourcingSteps = [
  { n: '01', title: 'Mine Selection', body: 'We work directly with trusted operators in Ratnapura, Elahera, and Sri Lanka\'s major gem regions.' },
  { n: '02', title: 'Quality Inspection', body: 'Every stone is assessed for colour, clarity, and integrity. Most rough is passed over — only the best is cut.' },
  { n: '03', title: 'Laboratory Certification', body: 'Independent GIA or GRS reports confirm identity, origin, and treatment status for every significant stone.' },
  { n: '04', title: 'Export Worldwide', body: 'Secure, insured shipping to any destination. Full export documentation and the person who selected the stone answers your questions directly.' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen bg-dark flex items-center justify-center overflow-hidden">
        <HeroGems />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,168,76,0.12) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeUp delay={0.1}>
            <p className="font-jost text-xs tracking-[0.4em] uppercase text-teal/60 mb-6">Ceylon Gemstone Sourcing &amp; Export</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] text-offwhite mb-6">
              Natural Ceylon Gemstones.{' '}
              <em style={{ color: '#e0bc6e', fontStyle: 'italic' }}>Trusted Worldwide.</em>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-jost font-light text-offwhite/55 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              We help jewellers, collectors, luxury brands, and gemstone investors source certified natural Sri Lankan gemstones — with transparency, expert guidance, and worldwide export.
            </p>
          </FadeUp>
          <FadeUp delay={0.32}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/custom-sourcing"
                className="px-8 py-3.5 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300"
              >
                Request a Gemstone Search
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 border border-purple/60 text-purple-mid hover:border-purple hover:bg-purple/10 font-jost text-sm tracking-widest uppercase transition-all duration-300"
              >
                Discuss Your Requirements
              </Link>
            </div>
          </FadeUp>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-jost text-xs tracking-widest uppercase text-offwhite">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-offwhite/60 to-transparent" />
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeStrip />

      {/* WHY CHOOSE SERENDIB */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
        <div className="bg-dark-card px-10 lg:px-16 py-20 flex items-center border-r border-teal/20">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Why Serendib</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold text-offwhite leading-tight mb-6">
              Your sourcing partner<br />in Sri Lanka.
            </h2>
            <p className="font-jost text-sm text-offwhite/55 leading-relaxed mb-6">
              We work directly with international jewellers, wholesalers, collectors, and investors — sourcing certified natural gemstones from Sri Lanka&apos;s finest deposits and exporting worldwide with full documentation.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-teal/15 pt-6">
              {[
                { val: 'Direct', label: 'From Source' },
                { val: 'GIA/GRS', label: 'Certified' },
                { val: 'Worldwide', label: 'Export' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="font-cormorant text-xl font-semibold text-teal">{val}</p>
                  <p className="font-jost text-xs text-offwhite/40 uppercase tracking-wider mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
        <div className="bg-dark px-10 lg:px-16 py-20 flex items-center">
          <FadeUp delay={0.15}>
            <div className="space-y-6">
              {[
                { title: 'Unheated & Untreated', body: 'We specialise in naturally beautiful gemstones — no hidden enhancements, no undisclosed treatments. Every claim is verified by an independent GIA or GRS laboratory report.' },
                { title: 'Transparent Provenance', body: 'Full disclosure on every stone: origin, treatment status, certification, and sourcing chain. The transparency international buyers require.' },
                { title: 'Export-Ready Process', body: 'From stone selection to secure worldwide delivery — we handle laboratory certification, export documentation, insured shipping, and customs guidance.' },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="block w-1.5 h-1.5 rounded-full bg-teal/50 mt-2 shrink-0" />
                  <div>
                    <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-1">{item.title}</h3>
                    <p className="font-jost text-sm text-offwhite/50 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* GEMSTONE LIBRARY PREVIEW */}
      <section className="bg-offwhite py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal mb-3">Gemstone Library</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-dark mb-4">Know Your Gemstones</h2>
            <p className="font-jost text-sm text-dark/55 max-w-xl mx-auto leading-relaxed">
              Comprehensive guides to every gemstone we carry — what to look for, what to avoid, and what makes each stone exceptional.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {libraryGems.map((gem, i) => (
              <FadeUp key={gem.name} delay={i * 0.1}>
                <Link href={gem.href} className="group block bg-white border border-dark/8 hover:border-teal/40 p-8 transition-all duration-300 text-center">
                  <div className="flex justify-between items-start mb-6">
                    <GemSVG colour={gem.colour} size={56} />
                    <span className="font-jost text-[10px] tracking-wider uppercase text-teal/60 border border-teal/20 px-2 py-0.5">{gem.tag}</span>
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold text-dark group-hover:text-teal transition-colors mb-2 text-left">{gem.name}</h3>
                  <p className="font-jost text-xs text-teal/60 tracking-widest uppercase text-left group-hover:text-teal transition-colors">Read full guide →</p>
                </Link>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="text-center">
            <Link href="/gemstones" className="font-jost text-sm tracking-widest uppercase text-teal hover:text-teal-dark transition-colors">
              Browse all gemstones →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* GEM CATEGORY CARDS */}
      <section className="bg-dark py-24 px-6 lg:px-10">
        <FadeUp className="text-center mb-14">
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Our Collection</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite">Three Distinct Categories</h2>
        </FadeUp>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {gemCards.map((card, i) => (
            <GemCard key={card.title} {...card} index={i} />
          ))}
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-offwhite py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal mb-3">Who We Work With</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-dark mb-4">International Buyers We Serve</h2>
            <p className="font-jost text-sm text-dark/55 max-w-xl mx-auto leading-relaxed">
              We work with professionals and serious buyers across the globe — each with different requirements, all receiving the same standard of service.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Jewellers & Manufacturers', body: 'Calibrated parcels, matched sets, consistent supply, and competitive trade pricing for jewellery production.', href: '/for-jewellers' },
              { title: 'Collectors & Connoisseurs', body: 'Rare unheated specimens with exceptional provenance — blue sapphires, padparadschas, alexandrites, and more.', href: '/gemstones' },
              { title: 'Investors', body: 'Investment-grade certified gemstones with documented provenance. Guidance on which stones hold and grow in value.', href: '/contact' },
              { title: 'Luxury Brands & Retailers', body: 'Quality-controlled, ethically sourced Ceylon gemstones with full traceability for high-end retail and brand requirements.', href: '/custom-sourcing' },
            ].map((persona, i) => (
              <FadeUp key={persona.title} delay={i * 0.08}>
                <Link href={persona.href} className="group block bg-white border border-dark/8 hover:border-teal/40 p-7 h-full transition-all duration-300">
                  <h3 className="font-cormorant text-xl text-dark font-semibold mb-3 group-hover:text-teal transition-colors">{persona.title}</h3>
                  <p className="font-jost text-xs text-dark/50 leading-relaxed mb-4">{persona.body}</p>
                  <span className="font-jost text-xs text-teal/60 tracking-widest uppercase group-hover:text-teal transition-colors">Learn more &rarr;</span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE SOURCE — PREVIEW */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-dark-card px-10 lg:px-16 py-20 border-r border-teal/15">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Transparency</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold leading-tight mb-6">
              From Mine<br />to Your Hands
            </h2>
            <p className="font-jost text-sm text-offwhite/55 leading-relaxed mb-8">
              Every stone follows the same transparent path. No hidden steps, no invisible middlemen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/how-we-source" className="font-jost text-sm tracking-widest uppercase text-teal/70 hover:text-teal transition-colors">
                See our full process →
              </Link>
              <Link href="/how-we-verify" className="font-jost text-sm tracking-widest uppercase text-teal/70 hover:text-teal transition-colors">
                How we verify every stone →
              </Link>
            </div>
          </FadeUp>
        </div>
        <div className="bg-dark px-10 lg:px-16 py-20">
          <div className="space-y-8">
            {sourcingSteps.map((step, i) => (
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

      {/* SERVICES */}
      <section className="bg-dark-purple py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">What We Offer</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite">Our Services</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <FadeUp key={service.title} delay={i * 0.07}>
                <Link href={service.href} className="group block bg-dark/40 border border-white/6 hover:border-teal/30 p-7 h-full transition-colors">
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-3 group-hover:text-teal-light transition-colors">{service.title}</h3>
                  <p className="font-jost text-xs text-offwhite/45 leading-relaxed">{service.description}</p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* KNOWLEDGE CENTRE PREVIEW */}
      <section className="bg-dark py-24 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Knowledge Centre</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite mb-4">Learn Before You Buy</h2>
            <p className="font-jost text-sm text-offwhite/45 max-w-xl mx-auto leading-relaxed">
              Expert guides on Ceylon sapphires, certification, and gemstone investment — written by people who source these stones at the mine.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {knowledgeArticles.map((article, i) => (
              <FadeUp key={article.href} delay={i * 0.07}>
                <Link href={article.href} className="group flex items-start gap-4 bg-dark-card border border-white/6 hover:border-teal/30 p-6 transition-colors">
                  <span className="font-jost text-[10px] tracking-wider uppercase text-teal/50 border border-teal/20 px-2 py-0.5 shrink-0 mt-0.5">{article.category}</span>
                  <p className="font-cormorant text-lg text-offwhite font-semibold group-hover:text-teal-light transition-colors leading-snug">{article.title}</p>
                </Link>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="text-center">
            <Link href="/learn" className="font-jost text-sm tracking-widest uppercase text-teal/70 hover:text-teal transition-colors">
              Browse all articles →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* GEMSTONE SPECIES GRID */}
      <section className="bg-offwhite py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal mb-3">What we carry</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-dark">Gemstone Species</h2>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stoneSpecies.map((stone, i) => (
              <FadeUp key={stone.name} delay={i * 0.06}>
                <div className="group bg-white border border-dark/8 hover:border-teal/40 hover:bg-[#f0f7f7] transition-all duration-300 p-6 flex flex-col items-center text-center cursor-default">
                  <GemSVG colour={stone.colour} size={64} className="mb-4" />
                  <h4 className="font-cormorant text-base font-semibold text-dark">{stone.name}</h4>
                  <p className="font-jost text-xs text-dark/40 mt-0.5 tracking-wide">{stone.family}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div
          className="flex items-center justify-center py-20 px-10 border-r border-teal/10"
          style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201,168,76,0.18) 0%, rgba(180,140,50,0.10) 35%, rgba(15,28,46,0.95) 75%, #0f1c2e 100%)' }}
        >
          <LogoImage size={220} />
        </div>
        <div className="bg-warm px-10 lg:px-16 py-20 flex items-center">
          <FadeUp className="max-w-lg">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal mb-4">Our Story</p>
            <h2 className="font-cormorant text-4xl text-dark font-semibold mb-6 leading-snug">
              Born from the land of sapphires
            </h2>
            <p className="font-jost text-sm text-dark/65 leading-relaxed mb-5">
              Serendib Gemstones was founded by Mr. Thusira Ranasinghe, Mr. Meril Peiris and Mr. Rangana Silva — three individuals united by a deep passion for Sri Lanka&apos;s extraordinary gem heritage and a commitment to serving the global gemstone trade.
            </p>
            <p className="font-jost text-sm text-dark/65 leading-relaxed mb-8">
              Based in Sri Lanka, we work directly with international jewellers, wholesalers, collectors, and investors — sourcing exceptional stones from the island&apos;s legendary gem fields and exporting with the transparency and documentation that serious buyers require.
            </p>
            <Link href="/about" className="font-jost text-sm tracking-widest uppercase text-teal hover:text-teal-dark transition-colors">
              Read our full story →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <section className="bg-offwhite py-24 px-6 text-center">
        <FadeUp className="max-w-3xl mx-auto">
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal mb-4">What Our Clients Say</p>
          <blockquote
            className="font-cormorant italic text-3xl sm:text-4xl leading-snug mb-6"
            style={{ color: '#c9a84c' }}
          >
            &ldquo;Sri Lanka has given the world some of its most coveted gemstones for over two thousand years. We carry that legacy forward.&rdquo;
          </blockquote>
          <cite className="font-jost text-xs tracking-[0.25em] uppercase text-dark/40 not-italic">
            The Founders — Serendib Gemstones (Pvt) Ltd
          </cite>
        </FadeUp>
      </section>

      {/* ENQUIRY CTA */}
      <section className="relative bg-dark overflow-hidden py-28 px-6 text-center">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.3) 0%, rgba(107,45,139,0.3) 100%)' }}
        />
        <div className="relative z-10 max-w-xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/70 mb-4">International Buyers</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite mb-5">
              Tell Us What You&apos;re Looking For
            </h2>
            <p className="font-jost text-sm text-offwhite/55 mb-10 leading-relaxed">
              Whether you&apos;re a jeweller sourcing calibrated sapphires, a collector seeking an exceptional unheated stone, or an investor building a portfolio — describe your requirements and we&apos;ll source it from Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/custom-sourcing"
                className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300"
              >
                Request a Gemstone Search
              </Link>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 border border-teal/40 text-teal-light hover:bg-teal/10 font-jost text-sm tracking-widest uppercase transition-all duration-300"
              >
                Speak with a Specialist
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
