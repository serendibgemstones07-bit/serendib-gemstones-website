import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'How Much Is a Blue Sapphire Worth?',
  description:
    'Blue sapphire prices range from $50 to over $50,000 per carat depending on origin, colour, heat treatment, clarity, and size. Ceylon unheated stones command the highest premiums.',
  alternates: { canonical: 'https://serendibgemstones.com/learn/faq/how-much-is-a-blue-sapphire-worth' },
}

const faqItems = [
  {
    q: 'What is the most expensive blue sapphire ever sold?',
    a: 'The Blue Belle of Asia, a 392.52-carat Ceylon sapphire, sold at Christie\'s Geneva in 2014 for approximately USD 17.3 million. At the per-carat level, the record for a blue sapphire exceeds USD 200,000 per carat for exceptional Kashmir stones at Sotheby\'s and Christie\'s. Ceylon sapphires regularly achieve USD 30,000 to 60,000 per carat for fine unheated stones above 10 carats.',
  },
  {
    q: 'Why is the same carat weight priced so differently between sapphires?',
    a: 'Unlike diamonds, blue sapphires do not follow a standardised pricing grid. Two 3-carat blue sapphires can differ in price by a factor of 100 because quality factors — colour saturation, tone, clarity, cut proportions, treatment status, and geographic origin — all compound. A poorly coloured, heavily included, heated sapphire of unknown origin might sell for USD 50 per carat, while a vivid cornflower-blue, eye-clean, unheated Ceylon stone of the same weight could command USD 10,000 or more.',
  },
  {
    q: 'Does origin really affect a blue sapphire\'s price?',
    a: 'Yes, significantly. Sri Lanka (Ceylon) and Kashmir are the most valued origins, followed by Myanmar (Burma) and Madagascar. A stone confirmed as Ceylon origin by GIA or GRS typically commands a 20 to 50 percent premium over an equivalent stone from a less prestigious source, even when all other factors are identical. Kashmir origin — for the very rare stones that appear on the market — can double or triple the price. This premium is well documented in auction records over multiple decades.',
  },
  {
    q: 'How much should I spend on a sapphire engagement ring?',
    a: 'There is no fixed rule, but most buyers of sapphire engagement rings spend between USD 1,000 and USD 10,000 on the centre stone. A fine heated Ceylon sapphire of 1 to 2 carats in a good cornflower blue can be found in the USD 2,000 to 5,000 range. For an unheated stone with a GIA or GRS certificate, expect to pay roughly 2 to 5 times more. The stone\'s beauty, durability, and provenance — not an arbitrary spending rule — should guide the budget.',
  },
  {
    q: 'Are smaller sapphires worth proportionally less per carat?',
    a: 'Generally yes. Blue sapphires exhibit per-carat price jumps at key weight thresholds — notably 1 carat, 2 carats, 3 carats, and 5 carats. A 2.9-carat sapphire may cost noticeably less per carat than a 3.1-carat stone of the same quality, because the market assigns a premium to crossing the 3-carat threshold. Below 1 carat, fine sapphires are relatively affordable; above 5 carats with good quality, prices escalate steeply because supply drops off dramatically.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'How Much Is a Blue Sapphire Worth?', item: 'https://serendibgemstones.com/learn/faq/how-much-is-a-blue-sapphire-worth' },
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

export default function HowMuchBlueSapphireWorthPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 70%, rgba(26,95,158,0.35) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <nav className="flex items-center gap-2 font-jost text-xs tracking-wider uppercase text-offwhite/30 mb-8">
              <Link href="/" className="hover:text-teal/60 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-teal/60 transition-colors">Knowledge Centre</Link>
              <span>/</span>
              <span className="text-teal/60">Blue Sapphire Pricing</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">FAQ</span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              How much is a blue sapphire worth?
            </h1>
            <p className="font-jost text-sm text-offwhite/40">5 min read · Serendib Gemstones</p>
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
                Blue sapphire prices range from around USD 50 per carat for commercial heated stones to over USD 50,000 per carat for exceptional unheated Ceylon or Kashmir gems. The five primary value drivers are colour, origin, heat treatment status, carat weight, and clarity — with origin and treatment status often outweighing size.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Full Answer */}
      <section className="bg-dark px-6 lg:px-10 pb-20">
        <div className="max-w-3xl mx-auto prose-gem">
          <FadeUp>
            <h2>Price ranges by quality tier</h2>
            <p>
              The blue sapphire market operates across several distinct quality tiers, each with its own price structure. At the commercial level — heated sapphires of decent colour but unremarkable origin, sold without premium laboratory certification — prices range from roughly USD 50 to USD 500 per carat. These stones are widely available and typically originate from Thailand, Australia, or undisclosed sources.
            </p>
            <p>
              The mid-market tier covers heated sapphires of good to very good colour, often with confirmed origins from Sri Lanka or Madagascar, and accompanied by a recognised laboratory report. These stones typically trade between USD 500 and USD 3,000 per carat, depending on size and colour quality. This is the tier where most engagement-ring sapphires are purchased.
            </p>
            <p>
              At the fine tier — unheated sapphires of strong colour from prestigious origins, certified by GIA or GRS — prices range from USD 3,000 to USD 15,000 per carat. These stones represent the market that serious buyers and investors focus on.
            </p>
            <p>
              At the top of the market sit exceptional unheated Ceylon and Kashmir sapphires, typically above 5 carats, with vivid colour and clean clarity. These stones achieve USD 15,000 to USD 50,000 per carat at international auction, with occasional records above USD 100,000 per carat for truly extraordinary pieces.
            </p>
          </FadeUp>

          <FadeUp>
            <h2>The five factors that determine price</h2>
            <h3>1. Colour — the dominant factor</h3>
            <p>
              Colour accounts for roughly 50 to 70 percent of a blue sapphire&apos;s value. The most prized shade is a vivid, saturated blue — often described as &ldquo;cornflower&rdquo; or &ldquo;royal blue&rdquo; — with medium tone (not too dark, not too pale) and strong saturation. GRS uses specific colour grades such as &ldquo;Vivid Blue&rdquo; and &ldquo;Royal Blue&rdquo; on their reports, and these designations carry quantifiable price premiums. A stone graded &ldquo;Vivid Blue&rdquo; by GRS can command 30 to 50 percent more than one graded simply &ldquo;Blue&rdquo; of the same size and clarity.
            </p>

            <h3>2. Origin</h3>
            <p>
              Geographic origin is the second most influential pricing factor. Ceylon (Sri Lanka) sapphires command the strongest premiums in the current market, driven by the island&apos;s centuries-long reputation, the high proportion of unheated material, and the characteristic vivid yet luminous blue that Sri Lankan geology produces. Kashmir sapphires, though functionally unobtainable from mine production, trade at even higher premiums when older estate stones appear at auction. Myanmar, Madagascar, and Tanzania produce excellent sapphires, but without the origin premium attached to Ceylon and Kashmir material.
            </p>

            <h3>3. Heat treatment status</h3>
            <p>
              Whether a sapphire is heated or unheated is the single most binary pricing factor. An unheated sapphire with a &ldquo;no indications of heating&rdquo; statement from GIA or GRS commands a premium of 2 to 5 times the price of a comparable heated stone. For fine material above 5 carats, the premium can reach 8 to 10 times at auction. This premium exists because fewer than 5 percent of mined sapphires display fine colour without any enhancement.
            </p>

            <h3>4. Carat weight</h3>
            <p>
              Price per carat does not scale linearly. The market assigns premiums at key weight thresholds — 1 carat, 2 carats, 3 carats, 5 carats, and 10 carats. Crossing each threshold causes a step-change in per-carat price. A 5.1-carat sapphire of given quality may cost 20 to 40 percent more per carat than a 4.8-carat stone of identical appearance, simply because it crosses the 5-carat psychological threshold.
            </p>

            <h3>5. Clarity</h3>
            <p>
              Sapphires are graded more leniently for clarity than diamonds. Eye-clean stones (no inclusions visible without magnification) command full market value. Stones with minor silk or feathers that do not detract from beauty trade at modest discounts. Heavily included stones — where inclusions affect transparency or brilliance — can lose 30 to 60 percent of their value relative to clean counterparts.
            </p>
          </FadeUp>

          <FadeUp>
            <h2>The Ceylon premium</h2>
            <p>
              Sri Lanka has been the world&apos;s most celebrated sapphire source for over two thousand years. The &ldquo;Ceylon premium&rdquo; is not mere branding — it reflects genuine geological advantages. Sri Lankan sapphires tend to display an exceptionally vivid and open blue colour that does not darken in lower light conditions, a quality sometimes called &ldquo;life&rdquo; in the trade. The island also produces a disproportionately high percentage of unheated gem-quality material compared to other sources. These factors, combined with verifiable origin documentation from GIA and GRS, create a premium that is consistently supported by auction records and private treaty sales.
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
              <Link href="/gemstones/blue-sapphire" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">Blue Sapphire — The Complete Guide</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">Everything you need to know about Ceylon blue sapphires, from quality factors to investment value.</p>
              </Link>
              <Link href="/learn/are-unheated-sapphires-worth-more" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">Are Unheated Sapphires Worth More?</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">Market data on the no-heat premium and why it is likely to hold long term.</p>
              </Link>
              <Link href="/learn/ceylon-vs-kashmir-sapphire" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">Ceylon vs Kashmir Sapphire</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">How the two most prestigious sapphire origins compare in colour, availability, and price.</p>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Find a sapphire within your budget</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">
            Tell us your budget and preferences. We will source certified Ceylon sapphires that offer the best value at your price point.
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
