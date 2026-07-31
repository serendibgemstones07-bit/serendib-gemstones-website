import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'Buying Guide — How to Buy Ceylon Gemstones with Confidence',
  description: 'Expert guidance on buying unheated Ceylon sapphires direct from Sri Lanka. Understand certification, treatments, origin, and pricing before you commit — written by people who source at the mine.',
  alternates: { canonical: 'https://serendibgemstones.com/learn/buying-guide' },
}

const guides = [
  {
    slug: 'are-unheated-sapphires-worth-more',
    category: 'Pricing',
    title: 'Are unheated sapphires worth more?',
    description: 'The no-heat premium explained — market data, structural reasons it exists, and why it is likely to hold long term.',
  },
  {
    slug: 'ceylon-vs-kashmir-sapphire',
    category: 'Comparison',
    title: 'Ceylon vs Kashmir sapphire — what is the difference?',
    description: 'Two legendary origins compared on colour, availability, price, and long-term value for serious collectors.',
  },
  {
    slug: 'gia-vs-grs-certificate',
    category: 'Certification',
    title: 'GIA vs GRS: which certificate is better?',
    description: 'Both labs are internationally respected, but they serve different buyers. How to choose the right certificate for your stone.',
  },
]

const comingSoon = [
  'How to buy your first Ceylon sapphire',
  'Gemstone pricing guide — what drives per-carat prices',
  'Building a gemstone investment portfolio',
  'Red flags when buying gemstones online',
]

const categoryColour: Record<string, string> = {
  Pricing: 'text-teal/70 border-teal/25',
  Comparison: 'text-purple-mid/80 border-purple-mid/30',
  Certification: 'text-offwhite/50 border-white/15',
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'Buying Guide', item: 'https://serendibgemstones.com/learn/buying-guide' },
      ],
    },
    {
      '@type': 'CollectionPage',
      name: 'Buying Guide — How to Buy Ceylon Gemstones with Confidence',
      description: 'Expert guidance on buying unheated Ceylon sapphires direct from Sri Lanka. Certification, treatments, origin, pricing, and investment considerations.',
      url: 'https://serendibgemstones.com/learn/buying-guide',
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones' },
    },
  ],
}

export default function BuyingGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 70%, rgba(201,168,76,0.35) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <nav className="flex items-center gap-2 font-jost text-xs tracking-wider uppercase text-offwhite/30 mb-8">
              <Link href="/" className="hover:text-teal/60 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-teal/60 transition-colors">Knowledge Centre</Link>
              <span>/</span>
              <span className="text-teal/60">Buying Guide</span>
            </nav>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              How to buy Ceylon gemstones with confidence
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-xl leading-relaxed">
              The coloured gemstone market has no central exchange and no standardised pricing. Unlike diamonds, there is no universally agreed grading scale. That opacity can work against uninformed buyers — but it also creates genuine opportunity for those who understand what they are looking at. This guide covers the principles that matter before you spend a single dollar.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Before You Buy */}
      <section className="bg-dark-card border-b border-teal/10 px-6 lg:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Fundamentals</p>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-10">Before you buy</h2>
          </FadeUp>

          <div className="space-y-8">
            <FadeUp delay={0.05}>
              <div className="border-l-2 border-teal/30 pl-6">
                <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-2">1. Certification first — always</h3>
                <p className="font-jost text-sm text-offwhite/50 leading-relaxed">
                  Never buy a significant gemstone without an independent laboratory report from GIA, GRS, Gubelin, or SSEF. The certificate confirms the stone&apos;s species, treatment status, and geographic origin — the three factors that most influence value. A seller who resists providing certification is not worth your time. Our guide on <Link href="/learn/gia-vs-grs-certificate" className="text-teal/70 hover:text-teal transition-colors underline underline-offset-2">GIA vs GRS certificates</Link> explains how to choose between the two major labs.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="border-l-2 border-teal/30 pl-6">
                <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-2">2. Understand treatments</h3>
                <p className="font-jost text-sm text-offwhite/50 leading-relaxed">
                  Over 95% of sapphires on the commercial market have been heat-treated to improve colour and clarity. Heat treatment is permanent, widely accepted, and not inherently dishonest — but it dramatically affects value. An unheated sapphire of fine colour commands 2 to 5 times the price of a comparable heated stone. The key is not to avoid heated gems, but to know exactly what you are buying and to pay accordingly. Read our explanation of <Link href="/learn/what-does-no-heat-mean-on-certificate" className="text-teal/70 hover:text-teal transition-colors underline underline-offset-2">what &quot;no heat&quot; means on a certificate</Link>.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="border-l-2 border-teal/30 pl-6">
                <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-2">3. Origin matters</h3>
                <p className="font-jost text-sm text-offwhite/50 leading-relaxed">
                  Geographic origin is not cosmetic branding — it reflects geological conditions that determine a stone&apos;s chemical fingerprint, inclusion characteristics, and colour profile. Ceylon (Sri Lankan) sapphires are prized for their vivid, bright saturation and exceptional transparency. Kashmir sapphires carry the highest premiums due to extreme rarity. Origin is verified by laboratory analysis, not by the seller&apos;s word. Our article on <Link href="/learn/how-is-sapphire-origin-determined" className="text-teal/70 hover:text-teal transition-colors underline underline-offset-2">how sapphire origin is determined</Link> explains the science.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="border-l-2 border-teal/30 pl-6">
                <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-2">4. Buy from the source</h3>
                <p className="font-jost text-sm text-offwhite/50 leading-relaxed">
                  Every intermediary between the mine and the buyer adds margin. A sapphire that passes through a rough dealer in Ratnapura, a cutter in Bangkok, a wholesaler in Hong Kong, and a retailer in London has accumulated four layers of markup before it reaches you. Buying direct from a Sri Lankan source with mine-level access eliminates most of that chain. This is not about finding the cheapest price — it is about paying for the stone, not for the logistics of moving it around the world.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="border-l-2 border-teal/30 pl-6">
                <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-2">5. Size vs quality — choose quality</h3>
                <p className="font-jost text-sm text-offwhite/50 leading-relaxed">
                  A common mistake among first-time buyers is prioritising carat weight over colour and clarity. A three-carat sapphire of mediocre colour is worth less — per carat and in total — than a two-carat stone with vivid, even saturation and good transparency. In the unheated market, this gap is magnified. Buy the best colour and clarity you can afford, even if it means accepting a smaller stone. Fine quality holds its value; large mediocre stones do not.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="border-l-2 border-teal/30 pl-6">
                <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-2">6. Set your budget before you look</h3>
                <p className="font-jost text-sm text-offwhite/50 leading-relaxed">
                  Gemstone pricing is non-linear. Prices per carat increase exponentially with size — a 5-carat sapphire does not cost 5 times a 1-carat stone; it may cost 15 to 20 times as much. Establish your budget before you begin looking and let your dealer guide you toward the best stone within that range. A competent source will tell you honestly what your budget can achieve and what falls outside it.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Buying Guides */}
      <section className="bg-dark px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">In-depth reading</p>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-8">Buying guides</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {guides.map((g, i) => (
              <FadeUp key={g.slug} delay={i * 0.07}>
                <Link href={`/learn/${g.slug}`} className="group block bg-dark-card border border-white/6 p-7 hover:border-teal/30 transition-colors h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`font-jost text-xs tracking-wider uppercase border px-2.5 py-0.5 ${categoryColour[g.category]}`}>{g.category}</span>
                  </div>
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-3 group-hover:text-teal-light transition-colors leading-snug">{g.title}</h3>
                  <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-5">{g.description}</p>
                  <span className="font-jost text-xs tracking-widest uppercase text-teal/50 group-hover:text-teal transition-colors">Read guide →</span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Considerations */}
      <section className="bg-dark-card border-t border-b border-teal/10 px-6 lg:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Long-term perspective</p>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-6">Investment considerations</h2>
          </FadeUp>
          <FadeUp delay={0.05}>
            <div className="font-jost text-sm text-offwhite/50 leading-relaxed space-y-4">
              <p>
                Fine coloured gemstones — particularly unheated sapphires with strong provenance — have attracted increasing attention as alternative assets over the past two decades. The investment case rests on straightforward supply-and-demand fundamentals: the geological supply of fine, untreated material is finite and declining, while demand from collectors in Asia and the Middle East continues to grow.
              </p>
              <p>
                Auction records support the thesis. Christie&apos;s and Sotheby&apos;s have recorded consistent price growth for fine unheated sapphires since the early 2000s, with exceptional stones setting new per-carat records in almost every major sale cycle. A fine unheated Ceylon blue sapphire above 10 carats is now an asset class unto itself — scarcer than equivalent diamonds and with a price trajectory that has outperformed most commodity indices over the same period.
              </p>
              <p>
                Important caveats apply. Coloured gemstone markets are less liquid than equities or real estate. There is no spot market and no standardised grading system. Realising value requires access to the right buyers — specialist dealers, auction houses, or private collectors. Certification from a recognised laboratory is essential for resale; a stone without a current GIA or GRS report is worth significantly less on the secondary market regardless of its intrinsic quality.
              </p>
              <p>
                For buyers considering gemstones as a long-term store of value, the emphasis should be on quality over quantity: one exceptional, fully documented, unheated sapphire will outperform a portfolio of lesser stones. Our <Link href="/services" className="text-teal/70 hover:text-teal transition-colors underline underline-offset-2">sourcing and certification services</Link> are designed to help clients acquire stones that meet investment-grade standards.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-dark px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Coming soon</p>
            <h2 className="font-cormorant text-3xl text-offwhite mb-8">More buying guides on the way</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {comingSoon.map((title, i) => (
              <FadeUp key={title} delay={i * 0.05}>
                <div className="flex items-start gap-4 bg-dark-card border border-white/4 px-5 py-4">
                  <span className="font-jost text-[10px] tracking-wider uppercase border px-2 py-0.5 shrink-0 mt-0.5 text-teal/70 border-teal/25">Guide</span>
                  <p className="font-jost text-sm text-offwhite/40 leading-snug">{title}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Ready to buy with confidence?</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">
            Tell us what you are looking for — stone type, size, budget — and we will source it from our network in Sri Lanka with full GIA or GRS certification.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contact" className="px-8 py-3 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors">Start a Conversation</Link>
            <Link href="/gemstones" className="px-8 py-3 border border-teal/40 text-teal-light font-jost text-sm tracking-widest uppercase hover:bg-teal hover:text-white hover:border-teal transition-all">View Collection</Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
