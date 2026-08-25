import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'What is an Unheated Sapphire? — Serendib Gemstones',
  description: 'An unheated sapphire is a natural sapphire whose colour has never been altered by heat treatment. Fewer than 5% of sapphires qualify. Learn what no-heat means, how it is certified, and why it commands a significant market premium.',
}

const faqItems = [
  {
    q: 'Are unheated sapphires worth more than heated ones?',
    a: 'Yes — significantly. A fine unheated sapphire commands a substantial premium over a comparable heated stone of the same colour and clarity. At major auction houses, stones with laboratory-confirmed "no heat" status and exceptional colour regularly achieve dramatic uplifts beyond typical trade levels.',
  },
  {
    q: 'How do I know if a sapphire has been heat-treated?',
    a: 'Visual inspection alone cannot reliably detect heat treatment in sapphires. The only reliable method is laboratory analysis by an internationally accredited gemological laboratory such as GIA or GRS. These laboratories examine microscopic internal features — altered inclusions, healed fractures, flux residues — that are diagnostic of heating.',
  },
  {
    q: 'What does "No indications of heating" mean on a GIA report?',
    a: '"No indications of heating" is the specific phrase GIA uses when their gemologists find no evidence of heat treatment in the stone\'s internal features. It is the highest standard of no-heat determination and is widely accepted by major dealers and auction houses worldwide.',
  },
  {
    q: 'Are all Ceylon sapphires unheated?',
    a: 'No. While Sri Lanka produces a higher proportion of naturally fine-coloured sapphires than most other origins, the majority of Ceylon sapphires on the commercial market are still heat-treated. An unheated stone from Sri Lanka that shows fine natural colour is genuinely rare.',
  },
  {
    q: 'Is an unheated sapphire a better long-term investment?',
    a: 'Historically, yes. Unheated sapphires with strong provenance, fine colour, and credible laboratory reports have held and grown in value more reliably than heated equivalents. Their scarcity is structural — heating cannot be "undone" to increase supply — and collector demand for natural, untreated stones continues to rise.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Gemstone Guides', item: 'https://www.serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'What is an unheated sapphire?', item: 'https://www.serendibgemstones.com/learn/what-is-an-unheated-sapphire' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'What is an Unheated Sapphire?',
      description: 'An unheated sapphire is a natural sapphire whose colour has never been altered by heat treatment. Fewer than 5% of sapphires on the market qualify, making them exceptionally rare and valuable.',
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://www.serendibgemstones.com' },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones' },
      datePublished: '2026-07-30',
      dateModified: '2026-08-12',
      url: 'https://www.serendibgemstones.com/learn/what-is-an-unheated-sapphire',
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

export default function UnheatedSapphirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 70%, rgba(201,168,76,0.35) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <nav className="flex items-center gap-2 font-jost text-xs tracking-wider uppercase text-offwhite/30 mb-8">
              <Link href="/" className="hover:text-teal/60 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-teal/60 transition-colors">Guides</Link>
              <span>/</span>
              <span className="text-teal/60">Unheated Sapphires</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">
              Sapphires
            </span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              What is an unheated sapphire?
            </h1>
            <p className="font-jost text-sm text-offwhite/40">5 min read · Serendib Gemstones</p>
            <ArticleByline updated="2026-08-12" />
          </FadeUp>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-warm px-6 lg:px-10 py-16">
        <div className="max-w-3xl mx-auto">

          {/* TL;DR */}
          <div className="border-l-2 border-teal pl-6 mb-12">
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-teal mb-2">Summary</p>
            <p className="font-cormorant text-xl text-dark leading-relaxed">
              An unheated sapphire is a natural sapphire whose colour and clarity have never been altered through heat treatment. Because heating is applied to over 95% of commercial sapphires to improve their appearance, a stone that achieves fine colour without any enhancement is genuinely rare — and commands a substantial premium over a heated equivalent.
            </p>
          </div>

          <div className="font-jost text-sm text-dark/70 leading-relaxed space-y-8">

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Why most sapphires are heat-treated</h2>
              <p>
                Heat treatment is the most common enhancement applied to coloured gemstones. Rough sapphire is placed in a furnace and heated to temperatures between 1,200°C and 1,800°C for periods ranging from a few hours to several weeks. At these temperatures, titanium and iron atoms — the elements responsible for blue colour in corundum — migrate and redistribute within the crystal lattice. Silk inclusions (rutile needles) dissolve, improving clarity. Pale or unevenly coloured stones emerge saturated and vivid.
              </p>
              <p className="mt-4">
                The process was pioneered commercially in Thailand in the 1970s and transformed the global sapphire trade. Today it is considered a standard trade practice, disclosed (in reputable trade circles) at the point of sale and on laboratory reports. The vast majority of sapphires you encounter in retail jewellery — at every price point — have been heated.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">What makes an unheated stone rare</h2>
              <p>
                Nature produces fine-coloured sapphires without assistance only in exceptional geological circumstances. For a sapphire to display rich, velvety colour in its natural state, it must form in rock with exactly the right balance of trace elements — specifically iron and titanium in the correct ratio and distribution — over millions of years of metamorphic heat and pressure. The result has to survive alluvial transport and weathering without fracturing or bleaching.
              </p>
              <p className="mt-4">
                <Link href="/learn/sri-lanka" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">Sri Lanka&apos;s Precambrian metamorphic geology</Link> is one of the few environments where this occurs at meaningful scale. The gem gravels of Ratnapura, Elahera, and Eheliyagoda yield a higher proportion of naturally fine-coloured stones than virtually any other sapphire source. Even so, stones that combine fine colour, good clarity, and confirmed no-heat status are rare even in Sri Lanka — perhaps 3 to 5% of the material recovered from alluvial deposits.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">How "no heat" is confirmed</h2>
              <p>
                Heat treatment cannot be reversed, but it leaves permanent microscopic evidence inside the stone. When a sapphire is heated, its internal inclusions are altered in characteristic ways: rutile silk dissolves or coarsens, feathers heal into particular patterns, and sometimes glassy flux residues appear along healed fractures. Trained gemologists using high magnification can identify these signatures — or, critically, confirm their absence.
              </p>
              <p className="mt-4">
                GIA (Gemological Institute of America) reports state <em>&ldquo;No indications of heating&rdquo;</em> when no such evidence is found. GRS (GemResearch Swisslab) uses the designation <em>&ldquo;No heat&rdquo;</em>. Both are internationally recognised and accepted by major auction houses including Sotheby&apos;s, Christie&apos;s, and Bonhams as definitive statements of treatment status.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">The price premium</h2>
              <p>
                The premium for no-heat status is not merely a niche preference — it is a well-documented market phenomenon. At international auction, a fine unheated <Link href="/ceylon-sapphires" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">Ceylon</Link> <Link href="/gemstones/blue-sapphire" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">blue sapphire</Link> of 3 carats or more typically achieves a substantial multiple of the hammer price a comparable <Link href="/learn/are-unheated-sapphires-worth-more" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">heated stone would realise</Link>. For exceptional stones — vivid cornflower blue above 5 carats with prestigious provenance — the differential can be dramatic.
              </p>
              <p className="mt-4">
                The reason is structural scarcity. Unlike diamonds, where lab-grown alternatives have complicated the investment case, unheated sapphires cannot be replicated by treatment or synthesis and still carry a legitimate no-heat certificate. Their supply is fixed by geology. As collector and investor appetite for natural, unenhanced stones grows — particularly in Asia — the long-run price trajectory for fine no-heat material has been consistently upward.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Buying an unheated sapphire</h2>
              <p>
                Three principles guide a sound purchase:
              </p>
              <ol className="mt-4 space-y-3 list-decimal list-inside">
                <li><strong>Insist on a current laboratory report.</strong> GIA or GRS reports issued within the last three to five years are the standard. Older reports are not invalid but the major houses now expect recent documentation for significant stones.</li>
                <li><strong>Verify the source.</strong> Provenance matters — not just for premium but for authenticity. Mine-direct suppliers who can trace a stone&apos;s journey from rough to certified gem offer a level of confidence no secondary market dealer can match.</li>
                <li><strong>Understand that colour drives value, not no-heat alone.</strong> A no-heat stone with poor colour is still a poor stone. The combination of fine natural colour and confirmed no-heat status is what commands the premium.</li>
              </ol>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-dark py-20 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-10">
              Frequently asked questions
            </h2>
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

      {/* Sources */}
      <section className="bg-dark px-6 lg:px-10 pb-16">
        <div className="max-w-3xl mx-auto">
          <SourcesReferences sources={[
            { label: 'GIA — Gemological Institute of America', detail: 'Detection and disclosure of heat treatment in sapphires', href: 'https://www.gia.edu' },
            { label: 'GRS — GemResearch Swisslab', detail: '"No heat" designation and H(a)-H(c) heat-treatment grading scale', href: 'https://www.gemresearch.ch' },
            { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and heat-treatment detection', href: 'https://www.ssef.ch' },
            { label: 'Gübelin Gem Lab', detail: 'Inclusion analysis and detection of heating in corundum', href: 'https://www.gubelin.com/en/gemlab' },
            { label: 'CIBJO — The World Jewellery Confederation', detail: 'International standards for treatment disclosure', href: 'https://www.cibjo.org' },
            { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on heat-treatment detection and market impact', href: 'https://www.gia.edu/gems-gemology' },
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">View our certified unheated stones</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">
            Every stone in our collection is sourced mine-direct in Sri Lanka and independently certified by GIA or GRS.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/gemstones"
              className="px-8 py-3 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors"
            >
              Our Collection
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-teal/40 text-teal-light font-jost text-sm tracking-widest uppercase hover:bg-teal hover:text-white hover:border-teal transition-all"
            >
              Enquire
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
