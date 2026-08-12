import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Are Unheated Sapphires Worth More? — Serendib Gemstones',
  description: 'Yes — unheated sapphires command a significant premium over comparable heated stones. This guide explains why the premium exists, how it varies by category, and whether it is likely to hold long term.',
}

const faqItems = [
  {
    q: 'How much more valuable is an unheated sapphire compared to a heated one?',
    a: 'The premium varies with quality, size, and origin, but as a broad principle: a fine unheated sapphire commands a significant premium over a comparable heated stone of the same colour grade and carat weight. For exceptional stones — vivid cornflower blue above 5 carats with strong Ceylon origin — the differential at major auction can be dramatic. The premium is higher for larger stones and for origins like Ceylon where the no-heat status is particularly prized.',
  },
  {
    q: 'Has the premium for unheated sapphires always existed?',
    a: 'The premium has grown significantly since the 1970s when commercial heat treatment became widespread. Before the modern treatment era, most sapphires on the market were unheated simply because large-scale treatment facilities did not exist. As heated stones came to dominate the market, unheated material became the exception — and the premium followed scarcity. Over the past two decades, the premium has expanded further as laboratory certification has made no-heat status reliably verifiable and as collector demand for natural, untreated stones has grown globally.',
  },
  {
    q: 'Does the no-heat premium apply to all sapphire colours?',
    a: 'Yes, though the magnitude varies. The premium is most pronounced and well-documented for blue sapphires, where the no-heat market is deepest and most liquid. For Padparadscha sapphires, no-heat status is intrinsic to the variety definition — a heated stone cannot be certified as Padparadscha by GIA or GRS. For pink, yellow, and other colour varieties, the premium exists but may be less predictable. Star sapphires are almost always unheated by definition (heating destroys the star), so the premium is built into their pricing structure.',
  },
  {
    q: 'Will heated sapphires lose value over time?',
    a: 'Not necessarily — heated sapphires have their own substantial market and will continue to be bought and sold. However, the trajectory of the premium between heated and unheated material has been consistently upward over the past thirty years, and there is no structural reason to expect that to reverse. Supply of no-heat material can only decline; demand from collectors and investors in Asia and Europe continues to grow. The relative position of heated stones — valued on their colour alone rather than their treatment status — is unlikely to improve against fine unheated material.',
  },
  {
    q: 'Does a no-heat certificate alone make a sapphire valuable?',
    a: 'No. No-heat status enhances value but does not create it independently. A poorly coloured, heavily included, or very small sapphire with a no-heat certificate is still a poor-quality stone. The premium is most meaningful when applied to a stone that would already be considered fine on its own merits — good colour, reasonable clarity, attractive cut. The combination of fine natural colour and confirmed no-heat status is what commands the premium; either factor alone is insufficient.',
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
        { '@type': 'ListItem', position: 3, name: 'Are Unheated Sapphires Worth More?', item: 'https://serendibgemstones.com/learn/are-unheated-sapphires-worth-more' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Are Unheated Sapphires Worth More Than Heated Ones?',
      description: 'Unheated sapphires command a significant premium over comparable heated stones — often dramatically so at auction. This guide explains the structural reasons the premium exists and why it is likely to hold.',
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://serendibgemstones.com' },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones' },
      datePublished: '2026-07-30',
      dateModified: '2026-08-12',
      url: 'https://serendibgemstones.com/learn/are-unheated-sapphires-worth-more',
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

export default function UnheatedWorthMorePage() {
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
              <span className="text-teal/60">Unheated Value</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">Buying</span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              Are unheated sapphires worth more?
            </h1>
            <p className="font-jost text-sm text-offwhite/40">4 min read · Serendib Gemstones</p>
            <ArticleByline updated="2026-08-12" />
          </FadeUp>
        </div>
      </section>

      <section className="bg-warm px-6 lg:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-2 border-teal pl-6 mb-12">
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-teal mb-2">Summary</p>
            <p className="font-cormorant text-xl text-dark leading-relaxed">
              Yes — significantly. A fine unheated sapphire with a credible laboratory certificate commands a substantial premium over a comparable heated stone of equivalent colour, clarity, and carat weight. At major international auction, the differential can be dramatic for exceptional stones. The premium is structural: supply of no-heat material can only decrease, while demand from serious collectors and investors continues to grow.
            </p>
          </div>

          <div className="font-jost text-sm text-dark/70 leading-relaxed space-y-8">
            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">The market evidence</h2>
              <p>The premium for unheated sapphires over comparable heated stones is not theoretical — it is consistently documented across the major auction records. At Sotheby&apos;s Geneva and Hong Kong sales, unheated Ceylon blue sapphires above 5 carats of fine colour regularly achieve multiples of the hammer prices realised by comparable heated stones of the same colour grade in the same rooms. The gap is not hidden — auction estimates and hammer prices explicitly reflect treatment status as stated on the accompanying laboratory report.</p>
              <p className="mt-4">At the dealer level, the premium is equally present but less uniformly documented, since private transactions are not publicly recorded. Dealers who specialise in unheated material — and who can demonstrate it with current GIA or GRS certificates — price accordingly, and buyers accept the premium because they have independent verification.</p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Why the premium exists</h2>
              <p>Three structural factors underpin the no-heat premium:</p>
              <ol className="mt-4 space-y-4 list-decimal list-inside">
                <li>
                  <strong>Scarcity.</strong> Fewer than 5% of the sapphires recovered from Sri Lanka&apos;s gem fields display fine colour without any enhancement. Of these, only a fraction meet the colour, clarity, and size thresholds where the premium is meaningful. This is not a marginal rarity — it is genuine geological scarcity.
                </li>
                <li>
                  <strong>Irreversibility.</strong> Heating cannot be undone. A heated stone is permanently heated, reducing the pool of available no-heat material every year as more rough is treated for commercial improvement. Supply can only decline; there is no mechanism that increases it.
                </li>
                <li>
                  <strong>Growing collector demand.</strong> Serious collectors in Asia — particularly Hong Kong, China, and Singapore — have increasingly focused on no-heat, certified, origin-documented stones over the past decade. This demand base is large, growing, and price-inelastic for exceptional material.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Premium benchmarks by category</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-dark/15">
                      <th className="text-left py-3 pr-6 font-semibold text-dark/80">Category</th>
                      <th className="text-left py-3 pr-6 font-semibold text-dark/80">Typical no-heat premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark/8">
                    {[
                      ['Fine blue sapphire, 1–3ct', 'Meaningful premium'],
                      ['Fine blue sapphire, 3–5ct', 'Substantial premium'],
                      ['Fine blue sapphire, 5ct+', 'Dramatic premium at auction'],
                      ['Padparadscha sapphire', 'Intrinsic — no-heat required for designation'],
                      ['Star sapphire', 'Intrinsic — heating destroys the star'],
                      ['Pink / yellow sapphire', 'Moderate premium (less liquid market)'],
                    ].map(([cat, premium]) => (
                      <tr key={cat}>
                        <td className="py-3 pr-6 text-dark/70">{cat}</td>
                        <td className="py-3 text-dark/70 font-medium">{premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Is the premium likely to hold?</h2>
              <p>The long-term trajectory for the no-heat premium is widely considered positive. The structural supply constraint — no new no-heat material is being created, and existing material is being steadily depleted through both treatment and absorption into collections — is not reversible. Unlike diamonds, where lab-grown alternatives have complicated the investment case by creating effectively unlimited supply, no-heat sapphires have no synthetic equivalent: a lab-grown sapphire cannot carry a GIA or GRS no-heat certificate for a natural stone.</p>
              <p className="mt-4">This does not mean no-heat sapphires are without risk as a store of value. Coloured stone markets are less liquid than equities or real estate, and individual stone values depend heavily on quality, certification, and prevailing collector tastes. But for fine, certified, unheated Ceylon sapphires of established quality, the price history over the past thirty years has been consistently upward.</p>
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

      <section className="bg-dark px-6 lg:px-10 pb-16">
        <div className="max-w-3xl mx-auto">
          <SourcesReferences sources={[
            { label: 'GIA — Gemological Institute of America', detail: 'Heat-treatment disclosure and no-heat determinations for sapphires', href: 'https://www.gia.edu' },
            { label: 'GRS — GemResearch Swisslab', detail: '"No heat" designation and colour grading recognised at auction', href: 'https://www.gemresearch.ch' },
            { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and treatment detection', href: 'https://www.ssef.ch' },
            { label: 'Gübelin Gem Lab', detail: 'Inclusion analysis and provenance research', href: 'https://www.gubelin.com/en/gemlab' },
            { label: 'CIBJO — The World Jewellery Confederation', detail: 'International disclosure standards affecting the no-heat market', href: 'https://www.cibjo.org' },
            { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on auction pricing and treatment premiums', href: 'https://www.gia.edu/gems-gemology' },
          ]} />
        </div>
      </section>

      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Invest in certified, unheated Ceylon sapphires</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">Our stones are mine-direct, GIA or GRS certified, and accompanied by full documentation of origin and treatment status.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/gemstones" className="px-8 py-3 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors">Our Collection</Link>
            <Link href="/contact" className="px-8 py-3 border border-teal/40 text-teal-light font-jost text-sm tracking-widest uppercase hover:bg-teal hover:text-white hover:border-teal transition-all">Enquire</Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
