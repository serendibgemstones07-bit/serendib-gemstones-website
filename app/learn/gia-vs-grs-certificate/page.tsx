import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'GIA vs GRS Certificate: Which is Better? — Serendib Gemstones',
  description: 'GIA and GRS are the two most respected gemological laboratories for sapphires. This guide explains the key differences, which certificate to request, and what each report tells you about heat treatment and origin.',
}

const faqItems = [
  {
    q: 'Which certificate is more trusted for resale — GIA or GRS?',
    a: 'GIA is the most widely recognised certificate globally and is accepted by the broadest range of jewellers and general buyers. GRS carries greater authority among coloured-stone specialists, collectors, and at major auction houses where detailed origin and heat treatment analysis is essential. For investment-grade sapphires, both are highly respected; for Padparadscha or unheated Ceylon sapphires targeted at serious collectors, GRS is often preferred.',
  },
  {
    q: 'Does GRS test for heat treatment?',
    a: 'Yes. GRS provides a specific heat treatment designation on its reports. "No heat" means the laboratory found no evidence of thermal enhancement. "Heated" indicates the stone has been heat-treated. GRS is particularly known for detailed heat treatment analysis and is one of the few laboratories that also grades the degree of heat treatment using a lettered scale (H(a) through H(c)).',
  },
  {
    q: 'Can a sapphire have both a GIA and a GRS certificate?',
    a: 'Yes. Dual certification is common for important stones — particularly those being presented at auction or sold to high-value buyers who may have a preference for one laboratory over the other. Each report tests the stone independently and both are presented together. The cost of dual certification is typically justified only for stones above a certain value threshold.',
  },
  {
    q: 'Is a GRS "No Heat" report the same as GIA "No indications of heating"?',
    a: 'They are equivalent in meaning and market standing, though the language differs. GRS states "No heat" on the designation line of their report. GIA states "No indications of heating" in the comments section of their Colored Stone report. Both represent the respective laboratory\'s conclusion that no evidence of thermal enhancement was found in the stone.',
  },
  {
    q: 'How long does GIA certification take?',
    a: 'GIA processing times vary by service level and location. Standard colored stone reports submitted at a GIA laboratory typically take 3 to 6 weeks. Expedited services can reduce this to 1 to 2 weeks. Stones submitted from outside the US are sent to a regional GIA laboratory and timelines can vary. GRS, based in Lucerne, Switzerland, offers similar service levels and is a common choice for stones sourced in Asia.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Gemstone Guides', item: 'https://serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'GIA vs GRS Certificate', item: 'https://serendibgemstones.com/learn/gia-vs-grs-certificate' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'GIA vs GRS Certificate: Which is Better for Sapphires?',
      description: 'GIA and GRS are the two most respected gemological laboratories for coloured gemstones. This guide explains their key differences and how to choose the right certificate for your stone.',
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://serendibgemstones.com' },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones' },
      datePublished: '2026-07-30',
      dateModified: '2026-08-12',
      url: 'https://serendibgemstones.com/learn/gia-vs-grs-certificate',
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

export default function GiaVsGrsPage() {
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
              <span className="text-teal/60">GIA vs GRS</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">
              Certification
            </span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              GIA vs GRS: which certificate is better?
            </h1>
            <p className="font-jost text-sm text-offwhite/40">4 min read · Serendib Gemstones</p>
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
              Both GIA and GRS are internationally respected gemological laboratories, but they serve different buyers. GIA is the global standard recognised by the broadest market — ideal for jewellery buyers and general trade. GRS is preferred by coloured-stone specialists, auction houses, and serious collectors for its granular origin determination and heat-treatment analysis. For fine Sri Lankan sapphires, both are accepted; the choice often depends on who the eventual buyer will be.
            </p>
          </div>

          <div className="font-jost text-sm text-dark/70 leading-relaxed space-y-8">

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">About GIA</h2>
              <p>
                The Gemological Institute of America, founded in 1931, is the world&apos;s most recognised gemological authority. GIA invented the 4Cs grading system for diamonds and has been issuing colored stone reports for decades. Their Colored Stone Identification and Origin Report covers species, variety, geographic origin, and — in the comments section — heat treatment status using the phrase &ldquo;No indications of heating&rdquo; or &ldquo;Indications of heating.&rdquo;
              </p>
              <p className="mt-4">
                GIA operates laboratories in New York, Carlsbad, Hong Kong, Antwerp, Bangkok, and other major gemstone trading centres. Their brand recognition is unsurpassed — a GIA report is immediately legible to any jewellery buyer or trader worldwide, regardless of their specialism in coloured stones.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">About GRS</h2>
              <p>
                GemResearch Swisslab (GRS), headquartered in Lucerne, Switzerland, was founded in 1996 and has become the laboratory of choice for the serious coloured-stone trade. GRS is particularly well regarded for its origin determination — the ability to assign a specific geographic source (e.g. &ldquo;Ceylon&rdquo; for Sri Lanka) with high confidence — and for its detailed heat treatment analysis.
              </p>
              <p className="mt-4">
                GRS introduced a heat treatment grading scale that goes beyond a binary heated/unheated determination. Their reports may indicate heating intensity using designations from H(a) (evidence of minor heating at low temperature) through H(c) (evidence of significant heating at high temperature), giving buyers a more nuanced picture of the stone&apos;s enhancement history.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Key differences at a glance</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-dark/15">
                      <th className="text-left py-3 pr-6 font-semibold text-dark/80 w-1/3"></th>
                      <th className="text-left py-3 pr-6 font-semibold text-dark/80">GIA</th>
                      <th className="text-left py-3 font-semibold text-dark/80">GRS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark/8">
                    {[
                      ['Founded', '1931, USA', '1996, Switzerland'],
                      ['Best known for', 'Diamond grading, broad market trust', 'Coloured stone origin & heat analysis'],
                      ['Heat treatment', 'Heated / No indications of heating', 'No Heat / H(a) through H(c) scale'],
                      ['Origin determination', 'Yes', 'Yes — highly detailed, trade preferred'],
                      ['Preferred by', 'Jewellery trade, retail buyers', 'Collectors, auction houses, dealers'],
                    ].map(([label, gia, grs]) => (
                      <tr key={label}>
                        <td className="py-3 pr-6 text-dark/60 font-medium">{label}</td>
                        <td className="py-3 pr-6 text-dark/70">{gia}</td>
                        <td className="py-3 text-dark/70">{grs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">When to choose GIA</h2>
              <p>
                GIA is the right choice when your buyer is likely to be a jeweller, a retail customer, or anyone outside the specialist coloured-stone trade who needs immediate recognition of the certification authority. GIA&apos;s name carries weight across the full gemstone and jewellery industry globally.
              </p>
              <p className="mt-4">
                GIA is also the appropriate choice for any stone that will be set into jewellery and sold in a mainstream retail context, where the fine distinctions of GRS&apos;s heat treatment scale would not be relevant to the buyer.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">When to choose GRS</h2>
              <p>
                GRS is the preferred certification for fine, investment-grade coloured stones — particularly <Link href="/learn/what-is-an-unheated-sapphire" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">unheated</Link> <Link href="/ceylon-sapphires" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">Ceylon sapphires</Link>, <Link href="/gemstones/padparadscha-sapphire" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">Padparadscha sapphires</Link>, and Burmese <Link href="/gemstones/ruby" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">rubies</Link> being presented to serious collectors or consigned to major auction houses. Sotheby&apos;s, Christie&apos;s, and Bonhams frequently feature GRS-certified lots, and specialist dealers in Switzerland, Hong Kong, and Bangkok often specify GRS for their most important stones.
              </p>
              <p className="mt-4">
                If provenance and treatment history are the central value drivers of a stone — which they are for <Link href="/learn/what-does-no-heat-mean-on-certificate" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">no-heat material</Link> — GRS&apos;s more detailed reporting provides a stronger narrative.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">What Serendib Gemstones offers</h2>
              <p>
                The stones in our collection are certified by GIA, GRS, or both, depending on the stone and the preferences of the buyer. We work with both laboratories and can advise on which certification best suits the specific stone and your intended purpose — whether that is personal collection, resale, or consignment to auction.
              </p>
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
            { label: 'GIA — Gemological Institute of America', detail: 'Colored Stone Identification and Origin Reports and treatment disclosure', href: 'https://www.gia.edu' },
            { label: 'GRS — GemResearch Swisslab', detail: 'Origin determination, colour grading, and H(a)-H(c) heat-treatment scale', href: 'https://www.gemresearch.ch' },
            { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and origin determination', href: 'https://www.ssef.ch' },
            { label: 'Gübelin Gem Lab', detail: 'Origin determination and inclusion research for coloured stones', href: 'https://www.gubelin.com/en/gemlab' },
            { label: 'CIBJO — The World Jewellery Confederation', detail: 'International gemstone nomenclature and disclosure standards', href: 'https://www.cibjo.org' },
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Every stone comes certified</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">
            Our collection is certified by GIA and GRS. We can advise on the best certification path for your intended purchase.
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
