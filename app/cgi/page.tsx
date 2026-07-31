import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'

export const metadata: Metadata = {
  title: 'Ceylon Gem Identity (CGI) — Digital Provenance for Sri Lankan Gemstones',
  description: 'CGI (Ceylon Gem Identity) creates a trusted digital identity for every gemstone — combining provenance documentation, laboratory certification, and verifiable sourcing history into one transparent record.',
  alternates: { canonical: 'https://serendibgemstones.com/cgi' },
}

const pillars = [
  {
    title: 'Provenance Documentation',
    description: 'Every CGI-registered gemstone carries a documented chain of custody from mine to market — origin region, mining method, and sourcing timeline.',
    colour: '#2e8b57',
    icon: 'origin',
  },
  {
    title: 'Laboratory Certification',
    description: 'Independent laboratory reports from GIA, GRS, or Gubelin are linked directly to each stone, providing verifiable analysis of species, treatment status, and origin.',
    colour: '#1a5f9e',
    icon: 'cert',
  },
  {
    title: 'Treatment Transparency',
    description: 'Full disclosure of any treatments or enhancements — or confirmation of unheated, natural status — recorded permanently against each gemstone.',
    colour: '#c9a84c',
    icon: 'treatment',
  },
  {
    title: 'Digital Verification',
    description: 'Each gemstone receives a unique Gem Identity Number (GIN) that allows buyers, jewellers, and laboratories to verify its identity and history at any time.',
    colour: '#6b2d8b',
    icon: 'verify',
  },
]

const cgiPages = [
  {
    href: '/cgi/why-digital-gem-identity',
    title: 'Why Digital Gem Identity Matters',
    description: 'The gemstone industry faces a trust gap. CGI addresses it by making provenance, treatment history, and certification verifiable — not just claimed.',
    readTime: '5 min',
  },
  {
    href: '/cgi/how-gin-works',
    title: 'How the Gem Identity Number Works',
    description: 'Every CGI-registered gemstone receives a unique GIN — a structured identifier that links physical stones to their complete digital record.',
    readTime: '4 min',
  },
  {
    href: '/cgi/cgi-passport',
    title: 'The CGI Passport',
    description: 'A comprehensive digital identity document for each gemstone — combining certification, provenance, imagery, and treatment disclosure in one verifiable record.',
    readTime: '4 min',
  },
  {
    href: '/cgi/verification',
    title: 'CGI Verification Portal',
    description: 'How buyers and trade professionals can verify a gemstone using its Gem Identity Number — instant access to provenance and certification data.',
    readTime: '3 min',
  },
]

const benefits = [
  { buyer: 'Jewellers & Trade', benefit: 'Demonstrate verified provenance to end customers, differentiate inventory with documented origin, and reduce return risk.' },
  { buyer: 'Collectors & Investors', benefit: 'Permanent digital record of acquisition, treatment status, and certification — strengthening resale value and insurance documentation.' },
  { buyer: 'Luxury Brands', benefit: 'Supply chain transparency that meets corporate sustainability requirements and consumer expectations for ethical sourcing.' },
  { buyer: 'Laboratories', benefit: 'Linked digital records that complement physical certificates, enabling faster verification and reducing fraud risk.' },
]

export default function CGIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Ceylon Gem Identity (CGI) — Digital Provenance for Sri Lankan Gemstones',
            description: 'CGI creates a trusted digital identity for every gemstone — combining provenance, certification, and sourcing history into one transparent record.',
            url: 'https://serendibgemstones.com/cgi',
            isPartOf: {
              '@type': 'WebSite',
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
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-24 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(107,45,139,0.35) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-purple-mid/70 mb-4">An Initiative by Serendib Gemstones</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight mb-6">
              Ceylon Gem Identity
            </h1>
            <p className="font-jost text-lg text-teal-light/80 tracking-wide mb-4">CGI</p>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl mx-auto leading-relaxed mb-10">
              A trusted digital identity for every gemstone — combining provenance documentation, laboratory certification, treatment disclosure, and verifiable sourcing history into one transparent, accessible record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cgi/why-digital-gem-identity" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
                Why It Matters
              </Link>
              <Link href="/cgi/how-gin-works" className="inline-block px-10 py-4 border border-teal/40 text-teal-light hover:bg-teal/10 font-jost text-sm tracking-widest uppercase transition-all duration-300">
                How It Works
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* At a Glance — for AI/GEO optimisation */}
      <section className="bg-dark-card py-16 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <h2 className="sr-only">CGI at a Glance</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
              {[
                'CGI stands for Ceylon Gem Identity — a digital provenance initiative by Serendib Gemstones',
                'Every registered gemstone receives a unique Gem Identity Number (GIN)',
                'Links laboratory certification (GIA, GRS, Gubelin) to sourcing documentation',
                'Full treatment disclosure: unheated status or enhancement details recorded permanently',
                'Chain of custody from Sri Lankan mine to international buyer',
                'Designed for jewellers, collectors, luxury brands, and institutional investors',
                'Supports ethical sourcing transparency and ESG compliance requirements',
                'Verification portal allows instant authentication using the GIN',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal/50 shrink-0" />
                  <span className="font-jost text-xs text-offwhite/45 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="bg-dark py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Foundation</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold text-center mb-6">
              Four Pillars of Trust
            </h2>
            <p className="font-jost text-sm text-offwhite/40 text-center max-w-xl mx-auto leading-relaxed mb-16">
              CGI is built on four interconnected pillars — each addressing a critical gap in how gemstones are documented, verified, and traded internationally.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <FadeUp key={pillar.title} delay={i * 0.06}>
                <div className="h-full bg-dark-card border border-white/6 p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <GemSVG colour={pillar.colour} size={40} />
                    <h3 className="font-cormorant text-xl text-offwhite font-semibold">{pillar.title}</h3>
                  </div>
                  <p className="font-jost text-xs text-offwhite/45 leading-[1.85]">{pillar.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="bg-dark-card py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">For Every Buyer</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold text-center mb-16">
              Who Benefits from CGI
            </h2>
          </FadeUp>

          <div className="space-y-5">
            {benefits.map((b, i) => (
              <FadeUp key={b.buyer} delay={i * 0.06}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 bg-dark border border-white/6 p-7">
                  <div className="sm:w-48 shrink-0">
                    <p className="font-cormorant text-lg text-teal-light font-semibold">{b.buyer}</p>
                  </div>
                  <p className="font-jost text-xs text-offwhite/45 leading-[1.85]">{b.benefit}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Explore CGI */}
      <section className="bg-dark py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Learn More</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold text-center mb-16">
              Explore CGI
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cgiPages.map((page, i) => (
              <FadeUp key={page.href} delay={i * 0.06}>
                <Link href={page.href} className="group block h-full">
                  <div className="flex flex-col h-full bg-dark-card border border-white/6 hover:border-purple-mid/30 transition-colors p-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-jost text-[10px] tracking-wider uppercase text-purple-mid/70 border border-purple-mid/25 px-2.5 py-0.5">CGI</span>
                      <span className="font-jost text-[10px] text-offwhite/25">{page.readTime} read</span>
                    </div>
                    <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-3 group-hover:text-teal-light transition-colors leading-snug">
                      {page.title}
                    </h3>
                    <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-5 flex-1">
                      {page.description}
                    </p>
                    <span className="font-jost text-xs tracking-widest uppercase text-teal/50 group-hover:text-teal transition-colors">
                      Read more &rarr;
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="bg-dark-card py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-teal/20 bg-dark">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="font-jost text-xs tracking-widest uppercase text-teal/60">In Development</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold mb-8">
              Building the Future of Gemstone Trust
            </h2>
            <p className="font-jost text-sm text-offwhite/50 leading-[1.85] mb-6">
              CGI is currently in active development. We are building the infrastructure, partnerships, and processes needed to deliver a gemstone identity system that meets the highest standards of accuracy, transparency, and reliability.
            </p>
            <p className="font-jost text-sm text-offwhite/50 leading-[1.85] mb-10">
              Early-access registration will be available to select trade partners. If you are a jeweller, dealer, or institution interested in being among the first to use CGI, we would welcome your enquiry.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
              Register Interest
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-dark overflow-hidden py-28 px-6 text-center border-t border-teal/10">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'linear-gradient(135deg, rgba(107,45,139,0.35) 0%, rgba(201,168,76,0.3) 100%)' }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <FadeUp>
            <p className="font-cormorant italic text-2xl text-offwhite/60 mb-5">
              Every gemstone has a story. CGI makes it verifiable.
            </p>
            <p className="font-jost text-sm text-offwhite/40 mb-10 max-w-md mx-auto leading-relaxed">
              From the mines of Ratnapura to jewellers worldwide — CGI bridges centuries of gemstone heritage with the transparency the modern market demands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="inline-block px-10 py-4 border border-teal/40 text-teal-light hover:bg-teal/10 font-jost text-sm tracking-widest uppercase transition-all duration-300">
                About Serendib Gemstones
              </Link>
              <Link href="/contact" className="inline-block px-10 py-4 border border-teal/40 text-teal-light hover:bg-teal/10 font-jost text-sm tracking-widest uppercase transition-all duration-300">
                Get in Touch
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
