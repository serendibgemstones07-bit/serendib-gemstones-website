import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'

export const metadata: Metadata = {
  title: 'Are Sapphires a Good Investment?',
  description:
    'Yes — for the right stones. Unheated, certified Ceylon sapphires with fine colour have historically held and grown in value. What makes one investment-grade.',
  openGraph: { url: 'https://www.serendibgemstones.com/learn/faq/are-sapphires-a-good-investment' },
  alternates: { canonical: 'https://www.serendibgemstones.com/learn/faq/are-sapphires-a-good-investment' },
}

const faqItems = [
  {
    q: 'How have sapphire prices performed historically?',
    a: 'Fine blue sapphires have shown consistent long-term price appreciation, particularly at the top of the market. Auction records from Sotheby\'s and Christie\'s show that per-carat prices for exceptional Ceylon sapphires have increased by roughly 5 to 10 percent per year over the past three decades, with periods of stronger growth driven by Asian collector demand. This is not uniform — commercial-grade heated sapphires have seen more modest and less consistent growth. The strongest performance has been in the unheated, certified, fine-colour segment of the market.',
  },
  {
    q: 'What makes a sapphire "investment grade"?',
    a: 'An investment-grade sapphire typically meets four criteria: (1) fine, vivid colour — ideally graded "Vivid Blue" or "Royal Blue" by GRS; (2) unheated status confirmed by GIA or GRS with "no indications of heating"; (3) confirmed prestigious origin, ideally Ceylon or Kashmir; and (4) meaningful size — generally above 3 carats for practical investment purposes. Clarity should be at least eye-clean. The combination of all four factors in a single stone is what creates rarity and long-term value; a stone that is merely large or merely unheated without the other qualities is not investment-grade.',
  },
  {
    q: 'Are sapphires better investments than diamonds?',
    a: 'For investment purposes, fine sapphires arguably offer structural advantages over diamonds. The diamond market has been disrupted by lab-grown diamonds that are chemically identical and available at a fraction of the price, undermining the long-term value proposition of natural diamonds. Sapphires face no equivalent threat — a lab-grown sapphire cannot obtain a GIA or GRS certificate for a natural stone with confirmed geographic origin and no-heat status. Additionally, the sapphire market is less centrally controlled (there is no equivalent of De Beers), which some investors view as creating more transparent price discovery. However, sapphires are less liquid than diamonds, and the market requires more expertise to navigate.',
  },
  {
    q: 'What are the risks of sapphire investment?',
    a: 'The primary risks are illiquidity, expertise requirements, and certification dependence. Unlike stocks or bonds, sapphires cannot be sold instantly at a known market price — finding the right buyer at the right time can take weeks or months. Sapphire valuation requires genuine expertise; without it, a buyer may overpay or select stones that lack the quality characteristics needed for appreciation. And the value of an investment sapphire is heavily dependent on its laboratory certification — a stone without a current GIA or GRS report is worth substantially less, regardless of its intrinsic quality.',
  },
  {
    q: 'How do I sell an investment sapphire?',
    a: 'The most common channels are international auction houses (Sotheby\'s, Christie\'s, Bonhams) for exceptional stones; specialist coloured gemstone dealers who buy for resale; and private treaty sales facilitated by industry contacts. For any sale, a current GIA or GRS certificate is essential — buyers will not pay investment-grade prices without laboratory confirmation of the stone\'s identity, treatment status, and origin. Stones above 5 carats with exceptional colour and no-heat status tend to be the most liquid, as they attract the broadest range of potential buyers.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://www.serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'Are Sapphires a Good Investment?', item: 'https://www.serendibgemstones.com/learn/faq/are-sapphires-a-good-investment' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function SapphiresGoodInvestmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 70%, rgba(201,168,76,0.35) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <nav className="flex items-center gap-2 font-jost text-xs tracking-wider uppercase text-offwhite/30 mb-8">
              <Link href="/" className="hover:text-teal/60 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-teal/60 transition-colors">Knowledge Centre</Link>
              <span>/</span>
              <span className="text-teal/60">Sapphire Investment</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">FAQ</span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              Are sapphires a good investment?
            </h1>
            <p className="font-jost text-sm text-offwhite/40">6 min read · Serendib Gemstones</p>
          </FadeUp>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="bg-dark px-6 lg:px-10 py-12">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="bg-dark-card border border-teal/20 p-6">
              <p className="font-jost text-xs tracking-[0.2em] uppercase text-teal mb-3">Quick Answer</p>
              <p className="font-cormorant text-xl text-offwhite leading-relaxed">
                Yes — for the right stones. Fine, unheated, certified Ceylon sapphires with vivid colour have historically appreciated at 5 to 10 percent annually over the past three decades. But not all sapphires are investment-grade: only stones combining fine colour, no-heat status, confirmed origin, and meaningful size have demonstrated reliable long-term value growth.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Full Answer */}
      <section className="bg-dark px-6 lg:px-10 pb-20">
        <div className="max-w-3xl mx-auto prose-gem">
          <ArticleByline updated="2026-08-12" />
          <FadeUp>
            <h2>The investment case for sapphires</h2>
            <p>
              Fine coloured gemstones occupy a distinct niche in the alternative investment landscape. Unlike stocks and bonds, they are tangible, portable, and not correlated with financial markets. Unlike real estate, they require no maintenance, generate no property taxes, and can be moved across borders discreetly. And unlike gold, they combine investment potential with aesthetic pleasure and wearability.
            </p>
            <p>
              Within the coloured gemstone category, blue sapphires — particularly unheated Ceylon stones — have the strongest investment track record. Auction records at Sotheby&apos;s and Christie&apos;s show consistent long-term appreciation for fine material, with vivid unheated Ceylon blue sapphires above 5 carats delivering compound growth over the past two decades that is comparable to or better than many traditional asset classes over the same period.
            </p>
          </FadeUp>

          <FadeUp>
            <h2>What makes sapphire values hold</h2>
            <p>
              Three structural factors support sapphire values over time:
            </p>
            <ul>
              <li><strong>Finite supply.</strong> Unlike diamonds, which are now produced synthetically at scale, natural sapphires come only from the earth. The major sources — Sri Lanka, Kashmir, Myanmar, Madagascar — are all finite geological deposits. As the most accessible alluvial gravels are progressively worked out, the supply of fine material can only decrease. There is no mechanism that increases the supply of natural, unheated, fine-colour sapphires.</li>
              <li><strong>Growing demand.</strong> Collector and investor demand for fine coloured gemstones has grown significantly over the past two decades, driven particularly by buyers in Asia — Hong Kong, mainland China, Singapore, and increasingly India. This demand base is large, growing, and in many cases price-insensitive for exceptional material.</li>
              <li><strong>No synthetic substitute for the investment market.</strong> While lab-grown sapphires exist, they cannot replicate the investment characteristics of natural stones. A synthetic sapphire will never carry a GIA report stating natural, unheated, Ceylon origin. The certification infrastructure that underpins investment sapphire values has no synthetic equivalent.</li>
            </ul>
          </FadeUp>

          <FadeUp>
            <h2>The four criteria for investment-grade sapphires</h2>
            <h3>1. Fine, vivid colour</h3>
            <p>
              Colour is the primary value driver. Investment-grade sapphires should display vivid, saturated blue — ideally meriting a &ldquo;Vivid Blue&rdquo; or &ldquo;Royal Blue&rdquo; designation from GRS. Stones with weak colour, greyish tones, or excessive darkness do not appreciate reliably, regardless of their other qualities. The colour standard is not merely aesthetic — it is the characteristic that creates collector demand and auction competitiveness.
            </p>

            <h3>2. Unheated status</h3>
            <p>
              A GIA or GRS certificate stating &ldquo;no indications of heating&rdquo; is essential for investment sapphires. The no-heat premium — a significant uplift over comparable heated stones — has grown consistently over the past thirty years and shows no sign of reversing. This premium is structural: supply of unheated material can only decrease, while demand continues to grow.
            </p>

            <h3>3. Confirmed prestigious origin</h3>
            <p>
              Ceylon (Sri Lanka) and Kashmir are the most valued origins. A confirmed Ceylon origin on a GIA or GRS report adds a quantifiable premium — typically 20 to 50 percent over equivalent stones from less prestigious sources. For investment purposes, origin documentation provides provenance that supports liquidity: buyers in the investment market pay premium prices partly because they can verify exactly what they are acquiring.
            </p>

            <h3>4. Meaningful size</h3>
            <p>
              For practical investment purposes, sapphires should generally be above 3 carats. The per-carat price acceleration at the 3-carat and 5-carat thresholds, combined with the relative scarcity of fine unheated stones above these weights, creates a supply-demand dynamic that favours appreciation. Stones in the 5 to 15 carat range with exceptional quality represent the most investable segment, combining rarity with sufficient liquidity for eventual sale.
            </p>
          </FadeUp>

          <FadeUp>
            <h2>What to avoid</h2>
            <p>
              Not every sapphire is an investment. Avoid commercial-grade heated sapphires — while perfectly beautiful for jewellery, they do not have the scarcity characteristics needed for investment appreciation. Avoid stones without laboratory certification from GIA or GRS — without independent verification, a stone&apos;s identity, treatment status, and origin cannot be confirmed, and it will trade at a discount when you attempt to sell. And avoid very small stones — sapphires under 1 carat, regardless of quality, lack the per-carat price leverage that drives investment returns.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Related Questions */}
      <section className="bg-dark-card py-20 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-10">Related questions</h2>
          </FadeUp>
          <div className="space-y-1 border-t border-white/6">
            {faqItems.map((f, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <details className="faq-item border-b border-white/6">
                  <summary>{f.q}</summary>
                  <div className="faq-answer">{f.a}</div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="bg-dark py-16 px-6 lg:px-10 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-2xl text-offwhite font-semibold mb-8">Related guides</h2>
            <div className="grid gap-4">
              <Link href="/learn/are-unheated-sapphires-worth-more" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">Are Unheated Sapphires Worth More?</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">Market data on the no-heat premium and why it is likely to hold long term.</p>
              </Link>
              <Link href="/gemstones/blue-sapphire" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">Blue Sapphire — The Complete Guide</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">Everything you need to know about Ceylon blue sapphires, including investment value.</p>
              </Link>
              <Link href="/learn/gia-vs-grs-certificate" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">GIA vs GRS: Which Certificate Is Better?</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">Choosing the right laboratory certification for an investment-grade sapphire.</p>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Invest in certified Ceylon sapphires</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">
            Mine-direct, unheated, and certified by GIA or GRS. We source investment-grade stones from Sri Lanka&apos;s premier gem fields.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/gemstones" className="px-8 py-3 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors">Our Collection</Link>
            <Link href="/contact" className="px-8 py-3 border border-teal/40 text-teal-light font-jost text-sm tracking-widest uppercase hover:bg-teal hover:text-white hover:border-teal transition-all">Enquire</Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
