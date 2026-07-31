import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'How is a Sapphire\'s Origin Determined? — Serendib Gemstones',
  description: 'Gemological laboratories determine sapphire origin using trace element chemistry and inclusion analysis. Learn how labs assign geographic origin, why Ceylon origin adds value, and what the certificate actually says.',
}

const faqItems = [
  {
    q: 'Can origin determination be wrong?',
    a: 'Origin determination is a scientific opinion, not an absolute fact. Laboratories assign origin based on the balance of evidence — trace element profiles and inclusion characteristics — and express varying degrees of confidence. In the majority of cases for well-studied origins like Ceylon, the determination is highly reliable. For less well-characterised origins, or for stones with ambiguous chemistry, a laboratory may decline to assign a specific origin or note the uncertainty explicitly on the report.',
  },
  {
    q: 'Does origin affect a sapphire\'s price?',
    a: 'Yes, significantly. For blue sapphires, Ceylon (Sri Lanka) and Kashmir origins command meaningful premiums over stones of unknown, Thai, or Australian origin at equivalent colour and clarity. A Ceylon-origin designation on a GIA or GRS certificate typically adds 30 to 100% to the value of a fine stone. Kashmir origin adds multiples beyond that — but Kashmir stones are effectively unobtainable today except at auction.',
  },
  {
    q: 'What makes Ceylon origin distinctive to a laboratory?',
    a: 'Sri Lankan sapphires form in Precambrian metamorphic rocks with a characteristic trace element signature. Ceylon sapphires typically show low iron content relative to titanium — which contributes to their vivid, bright blues — and are associated with characteristic inclusion types including long rutile silk needles, zircon crystals with halo fractures, and specific fluid inclusions. This combination of chemistry and inclusions is well-documented and generally distinguishable from other major origins.',
  },
  {
    q: 'Do all sapphire certificates include origin?',
    a: 'Not always. GIA offers both an Identification report (no origin) and an Identification and Origin report. The origin report is more expensive and takes longer but is the one that carries commercial value for premium stones. GRS, Gübelin, and SSEF routinely include origin determination as part of their standard coloured stone reports. For any stone where origin is a value factor — which it is for Ceylon and Kashmir sapphires — always request or confirm that the report includes a geographic origin opinion.',
  },
  {
    q: 'Can I get an origin report for an old family stone?',
    a: 'Yes. Any sapphire can be submitted to GIA, GRS, Gübelin, or SSEF for origin determination regardless of its age or history. The stone is assessed on its current physical and chemical properties — historical records or family provenance are not required (though they may be interesting context). The laboratory report is issued based solely on what the stone itself reveals. Stones that have been set in jewellery can typically be submitted in their setting, though loose stones are easier to assess fully.',
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
        { '@type': 'ListItem', position: 3, name: 'How is a Sapphire\'s Origin Determined?', item: 'https://serendibgemstones.com/learn/how-is-sapphire-origin-determined' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'How is a Sapphire\'s Geographic Origin Determined?',
      description: 'Laboratories determine sapphire origin through trace element chemistry and inclusion analysis — two independent lines of evidence that together identify the geological environment where the stone formed.',
      author: { '@type': 'Organization', name: 'Serendib Gemstones' },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones' },
      datePublished: '2026-07-30',
      url: 'https://serendibgemstones.com/learn/how-is-sapphire-origin-determined',
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

export default function SapphireOriginPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative bg-dark pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 70%, rgba(201,168,76,0.35) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <nav className="flex items-center gap-2 font-jost text-xs tracking-wider uppercase text-offwhite/30 mb-8">
              <Link href="/" className="hover:text-teal/60 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-teal/60 transition-colors">Knowledge Centre</Link>
              <span>/</span>
              <span className="text-teal/60">Origin Determination</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">Certification</span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              How is a sapphire&apos;s origin determined?
            </h1>
            <p className="font-jost text-sm text-offwhite/40">4 min read · Serendib Gemstones</p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-warm px-6 lg:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-2 border-teal pl-6 mb-12">
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-teal mb-2">Summary</p>
            <p className="font-cormorant text-xl text-dark leading-relaxed">
              Gemological laboratories determine a sapphire&apos;s geographic origin by analysing two independent lines of evidence: its trace element chemistry and the character of its inclusions. Together, these reveal the specific geological environment in which the crystal formed — allowing laboratories to assign a country of origin with a high degree of confidence for well-studied deposits like Sri Lanka (Ceylon), Kashmir, and Burma.
            </p>
          </div>

          <div className="font-jost text-sm text-dark/70 leading-relaxed space-y-8">
            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Why origin matters</h2>
              <p>Geographic origin is one of the primary value drivers in the fine coloured stone market. The same species of gemstone — corundum, in the case of sapphires — can vary enormously in value depending on where it formed. A Ceylon-origin blue sapphire of fine colour commands a meaningful premium over an equivalent stone from Australia or Thailand. A Kashmir sapphire commands a premium over Ceylon. The premium reflects both geological rarity and the accumulated prestige of each origin in the collector market.</p>
              <p className="mt-4">This price differential makes origin determination commercially significant — and it also creates an incentive for misrepresentation. Laboratory certification of origin is the only reliable check against false claims.</p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Trace element analysis</h2>
              <p>Every corundum crystal incorporates trace quantities of elements from the host rock in which it formed. The specific balance of elements — iron, titanium, vanadium, chromium, gallium, magnesium, and others — depends on the chemistry of the local geological environment. Different sapphire-producing regions have measurably different trace element profiles.</p>
              <p className="mt-4">Laboratories use laser ablation inductively coupled plasma mass spectrometry (LA-ICP-MS) to measure these elements at concentrations as low as parts per billion. The resulting chemical fingerprint is compared against reference databases built from stones of known origin. Sri Lankan sapphires, for example, typically show low iron and characteristic titanium-to-iron ratios that distinguish them from Thai, Australian, or East African material.</p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Inclusion fingerprinting</h2>
              <p>Inclusions — the mineral crystals, fluid pockets, and structural features trapped inside a sapphire as it grew — are equally diagnostic. Different origins produce characteristic inclusion assemblages:</p>
              <ul className="mt-4 space-y-3 list-disc list-inside">
                <li><strong>Ceylon sapphires</strong> characteristically contain long, fine rutile silk needles, zircon crystals with surrounding halo fractures, colour-zoned growth, and specific two-phase fluid inclusions.</li>
                <li><strong>Kashmir sapphires</strong> contain distinctive minute particulate inclusions — sometimes called &ldquo;snowflake&rdquo; inclusions — that produce the characteristic velvety colour scattering.</li>
                <li><strong>Burmese sapphires</strong> often contain calcite inclusions and have a different fluid inclusion character reflecting the marble host rock environment.</li>
              </ul>
              <p className="mt-4">A gemologist examining these features under magnification builds up a picture that, combined with the chemistry, allows an origin opinion to be formed with stated confidence.</p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">The certificate&apos;s origin statement</h2>
              <p>On a GIA Colored Stone Identification and Origin Report, origin is stated as a geographic designation — &ldquo;Sri Lanka&rdquo; for Ceylon stones — in the origin field. GRS uses the trade name &ldquo;Ceylon&rdquo; on their reports, which carries particular significance in the coloured stone market. Both Gübelin and SSEF issue detailed origin reports with extended commentary on the evidence basis.</p>
              <p className="mt-4">The key phrase to look for is a definitive statement of origin rather than hedged language. &ldquo;Sri Lanka&rdquo; or &ldquo;Ceylon&rdquo; stated as the origin is the premium designation. &ldquo;Consistent with Sri Lanka&rdquo; or similar qualified language indicates the evidence is present but not conclusive — a distinction that matters commercially.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-10">Frequently asked questions</h2>
          </FadeUp>
          <div className="space-y-6">
            {faqItems.map((f, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="border-t border-white/8 pt-6">
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-3">{f.q}</h3>
                  <p className="font-jost text-sm text-offwhite/55 leading-relaxed">{f.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Ceylon origin, fully documented</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">Every stone we offer carries a GIA or GRS report with full origin and heat treatment documentation. No ambiguity.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/gemstones" className="px-8 py-3 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors">Our Collection</Link>
            <Link href="/contact" className="px-8 py-3 border border-teal/40 text-teal-light font-jost text-sm tracking-widest uppercase hover:bg-teal hover:text-white hover:border-teal transition-all">Enquire</Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
