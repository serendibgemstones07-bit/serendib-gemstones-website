import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'

export const metadata: Metadata = {
  title: 'Why Digital Gem Identity Matters — The Trust Gap in Gemstone Trading',
  description: 'The international gemstone trade relies on trust, but lacks a universal system for verifying provenance, treatment history, and chain of custody. CGI addresses this gap with a digital identity framework for Sri Lankan gemstones.',
  alternates: { canonical: 'https://serendibgemstones.com/cgi/why-digital-gem-identity' },
}

const challenges = [
  {
    title: 'Provenance Claims Are Often Unverifiable',
    description: 'A gemstone labelled "Ceylon origin" may have passed through multiple intermediaries before reaching the buyer. Without documented chain of custody, origin claims rest on trust alone — and trust varies widely across the trade.',
    colour: '#c0392b',
  },
  {
    title: 'Treatment Disclosure Is Inconsistent',
    description: 'Heat treatment, beryllium diffusion, and other enhancements are common in the gemstone industry. Disclosure standards vary between countries, dealers, and marketplaces — creating risk for buyers who expect transparent information.',
    colour: '#e8855e',
  },
  {
    title: 'Certificates Exist in Isolation',
    description: 'A GIA or GRS certificate verifies what a stone is at one moment in time. It does not record where the stone came from, who handled it, or what happened between mine and market. Critical context is lost.',
    colour: '#1a5f9e',
  },
  {
    title: 'No Standardised Digital Record',
    description: 'Physical certificates can be separated from stones, photocopied, or misrepresented. The industry lacks a unified digital system that links certification, provenance, and transaction history into one verifiable record.',
    colour: '#6b2d8b',
  },
  {
    title: 'ESG and Compliance Pressure Is Growing',
    description: 'Luxury brands, institutional investors, and public companies increasingly require documented ethical sourcing. The gemstone industry lags behind diamonds, precious metals, and other sectors in providing this documentation.',
    colour: '#2e8b57',
  },
]

const stakeholders = [
  {
    who: 'End Consumers',
    problem: 'Cannot verify the origin or treatment claims made by retailers. Rely entirely on the seller\'s word and whatever paper certificate accompanies the stone.',
  },
  {
    who: 'Jewellers & Retailers',
    problem: 'Must trust upstream suppliers about provenance and treatment. Cannot independently verify claims, creating liability and reputational risk.',
  },
  {
    who: 'Collectors & Investors',
    problem: 'Need documented provenance for insurance, resale, and estate purposes. Paper records are fragile, and verbal history is lost when stones change hands.',
  },
  {
    who: 'Laboratories',
    problem: 'Issue certificates that describe a stone at one point in time but cannot track what happens to it afterwards. Re-cutting, re-treatment, and certificate misuse are ongoing concerns.',
  },
  {
    who: 'Mining Communities',
    problem: 'Receive a fraction of the value when stones leave their region. Lack the documentation infrastructure to establish direct connections with international markets.',
  },
]

export default function WhyDigitalGemIdentityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Why Digital Gem Identity Matters',
            description: 'The international gemstone trade relies on trust, but lacks a universal system for verifying provenance and treatment history. CGI addresses this gap.',
            url: 'https://serendibgemstones.com/cgi/why-digital-gem-identity',
            author: {
              '@type': 'Organization',
              name: 'Serendib Gemstones',
              url: 'https://serendibgemstones.com',
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
              { '@type': 'ListItem', position: 2, name: 'Ceylon Gem Identity', item: 'https://serendibgemstones.com/cgi' },
              { '@type': 'ListItem', position: 3, name: 'Why Digital Gem Identity Matters', item: 'https://serendibgemstones.com/cgi/why-digital-gem-identity' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-24 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(192,57,43,0.3) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeUp>
            <div className="flex items-center gap-3 justify-center mb-6">
              <Link href="/cgi" className="font-jost text-xs tracking-[0.2em] uppercase text-purple-mid/60 hover:text-purple-mid transition-colors">
                Ceylon Gem Identity
              </Link>
              <span className="text-offwhite/20">/</span>
            </div>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6 text-center">
              Why Digital Gem Identity Matters
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl mx-auto leading-relaxed text-center">
              The gemstone industry moves billions of dollars annually on trust. But trust without verification creates risk — for buyers, sellers, and the communities that mine these stones.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* The Trust Gap */}
      <section className="bg-dark-card py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5 text-center">The Problem</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold mb-12 text-center">
              The Trust Gap
            </h2>
          </FadeUp>
          <div className="space-y-7">
            <FadeUp>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
When a jeweller in London buys a sapphire described as &ldquo;<Link href="/learn/what-is-an-unheated-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">unheated</Link> <Link href="/ceylon-sapphires" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">Ceylon origin</Link>,&rdquo; they are relying on a chain of verbal assurances that stretches from a mine in <Link href="/learn/sri-lanka" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">Ratnapura</Link>, through one or more dealers in Colombo, possibly through a trading hub in Bangkok or Hong Kong, and finally to their supplier.
              </p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                At each step, information is passed verbally or on paper. There is no universal system for recording, verifying, or accessing the provenance and treatment history of a coloured gemstone. The <Link href="/learn/certification" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">laboratory certificate</Link> — if one exists — confirms what the stone <em className="text-offwhite/70">is</em>, but not where it <em className="text-offwhite/70">came from</em> or how it <em className="text-offwhite/70">got there</em>.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                This is the trust gap. It affects every participant in the trade — from the miner who cannot prove direct sourcing to the end consumer who cannot verify origin claims. It suppresses prices for honest dealers, creates opportunity for misrepresentation, and makes the gemstone industry one of the last major luxury sectors without a standardised provenance infrastructure.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Five Challenges */}
      <section className="bg-dark py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Industry Challenges</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold text-center mb-16">
              Five Challenges CGI Addresses
            </h2>
          </FadeUp>

          <div className="space-y-5">
            {challenges.map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.06}>
                <div className="flex flex-col sm:flex-row gap-5 bg-dark-card border border-white/6 p-7">
                  <div className="flex items-start gap-4 sm:w-72 shrink-0">
                    <GemSVG colour={c.colour} size={32} className="mt-0.5 shrink-0" />
                    <h3 className="font-cormorant text-lg text-offwhite font-semibold leading-snug">{c.title}</h3>
                  </div>
                  <p className="font-jost text-xs text-offwhite/45 leading-[1.85]">{c.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is Affected */}
      <section className="bg-dark-card py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Impact</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold text-center mb-6">
              Who the Trust Gap Affects
            </h2>
            <p className="font-jost text-sm text-offwhite/40 text-center max-w-xl mx-auto leading-relaxed mb-16">
              Every participant in the gemstone supply chain is affected by the lack of standardised digital provenance — from the mine face to the retail counter.
            </p>
          </FadeUp>

          <div className="space-y-4">
            {stakeholders.map((s, i) => (
              <FadeUp key={s.who} delay={i * 0.05}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 bg-dark border border-white/6 p-6">
                  <div className="sm:w-44 shrink-0">
                    <p className="font-cormorant text-base text-teal-light font-semibold">{s.who}</p>
                  </div>
                  <p className="font-jost text-xs text-offwhite/45 leading-[1.85]">{s.problem}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* The CGI Approach */}
      <section className="bg-dark py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5 text-center">The Solution</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold mb-12 text-center">
              The CGI Approach
            </h2>
          </FadeUp>
          <div className="space-y-7">
            <FadeUp>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                Ceylon Gem Identity does not replace laboratory certification. It <em className="text-offwhite/70">extends</em> it — adding the context that certificates alone cannot provide: documented provenance, treatment transparency, chain of custody, and a unique digital identity that stays with the stone throughout its life.
              </p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                By starting in Sri Lanka — a country with 2,500 years of gemstone heritage and a well-regulated mining industry overseen by the National Gem &amp; Jewellery Authority — CGI builds on existing infrastructure rather than creating parallel systems.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                The goal is not to control the trade but to make it more transparent. When every stone carries a verifiable digital identity, honest dealers can prove their claims, buyers can make informed decisions, and the entire industry benefits from the trust that transparency creates.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-dark-card py-20 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FadeUp>
              <Link href="/cgi/how-gin-works" className="group block bg-dark border border-white/6 hover:border-teal/25 transition-colors p-7">
                <p className="font-jost text-[10px] tracking-wider uppercase text-teal/50 mb-2">Next</p>
                <h3 className="font-cormorant text-lg text-offwhite font-semibold group-hover:text-teal-light transition-colors mb-2">
                  How the Gem Identity Number Works
                </h3>
                <p className="font-jost text-xs text-offwhite/35 leading-relaxed">
                  Learn how GIN creates a unique, structured identifier for every CGI-registered gemstone.
                </p>
              </Link>
            </FadeUp>
            <FadeUp delay={0.06}>
              <Link href="/cgi/cgi-passport" className="group block bg-dark border border-white/6 hover:border-teal/25 transition-colors p-7">
                <p className="font-jost text-[10px] tracking-wider uppercase text-teal/50 mb-2">Also</p>
                <h3 className="font-cormorant text-lg text-offwhite font-semibold group-hover:text-teal-light transition-colors mb-2">
                  The CGI Passport
                </h3>
                <p className="font-jost text-xs text-offwhite/35 leading-relaxed">
                  See what a gemstone&apos;s complete digital identity record looks like.
                </p>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-dark overflow-hidden py-28 px-6 text-center border-t border-teal/10">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'linear-gradient(135deg, rgba(107,45,139,0.35) 0%, rgba(201,168,76,0.3) 100%)' }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <FadeUp>
            <p className="font-cormorant italic text-2xl text-offwhite/60 mb-5">
              Transparency is not a feature. It is the foundation.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
              Enquire About CGI
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
