import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'What Does "No Heat" Mean on a Gem Certificate? — Serendib Gemstones',
  description: '"No heat" on a gemological certificate confirms that laboratory examination found no evidence of heat treatment in the stone. It is the single most commercially significant statement on a coloured stone report.',
}

const faqItems = [
  {
    q: 'Can a stone be "no heat" on a certificate but still have been treated in other ways?',
    a: '"No heat" refers specifically to the absence of thermal enhancement. A stone can carry a valid no-heat designation and still have been fracture-filled, beryllium-diffused, or irradiated — these are different treatments with their own disclosures. A comprehensive laboratory report will address each treatment type separately. Always read the full report, not just the heat treatment line.',
  },
  {
    q: 'Is "No indications of heating" the same as "No heat"?',
    a: 'They are equivalent in meaning. GIA uses the phrase "No indications of heating" in the comments section of their Colored Stone reports. GRS uses the designation "No heat" on their type line. Both mean the laboratory found no microscopic evidence of thermal enhancement. Both are accepted by major auction houses and the serious gem trade as equivalent certifications.',
  },
  {
    q: 'Does every sapphire certificate mention heat treatment?',
    a: 'Reputable laboratory reports from GIA, GRS, Gübelin, and SSEF always include a heat treatment assessment for sapphires. However, simpler grading reports, dealer certificates, and certificates from lesser-known laboratories may omit this information or use vague language. If a certificate does not explicitly address heat treatment status, it should be treated as if no determination was made.',
  },
  {
    q: 'What happens if I buy an unheated stone without a certificate?',
    a: 'Without a current laboratory certificate from an accredited institution, there is no verifiable basis for a no-heat claim. A seller\'s word, no matter how trusted, is not a substitute for laboratory analysis. You may pay a no-heat premium for a stone that does not qualify — and you will have no recourse. For any significant purchase of an unheated stone, insist on a current GIA or GRS report.',
  },
  {
    q: 'Can a heated stone ever be re-certified as "no heat"?',
    a: 'No. Heat treatment leaves permanent microscopic changes within the crystal structure of a sapphire — altered inclusions, modified silk patterns, and characteristic fracture healing. These changes cannot be reversed or erased. A heated stone will always test as heated by a competent gemological laboratory, regardless of how it has been stored or handled since treatment.',
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
        { '@type': 'ListItem', position: 3, name: 'What does "no heat" mean on a gem certificate?', item: 'https://serendibgemstones.com/learn/what-does-no-heat-mean-on-certificate' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'What Does "No Heat" Mean on a Gem Certificate?',
      description: '"No heat" on a gemological certificate is the single most commercially significant statement on a coloured stone report — confirming no evidence of thermal enhancement was found.',
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://serendibgemstones.com' },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones' },
      datePublished: '2026-07-30',
      dateModified: '2026-08-12',
      url: 'https://serendibgemstones.com/learn/what-does-no-heat-mean-on-certificate',
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

export default function NoHeatCertificatePage() {
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
              <span className="text-teal/60">No Heat Certificate</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">Certification</span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              What does &ldquo;no heat&rdquo; mean on a gem certificate?
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
              &ldquo;No heat&rdquo; — or &ldquo;No indications of heating&rdquo; in GIA language — is a designation on a gemological laboratory report confirming that microscopic examination found no evidence of thermal enhancement in the stone. It is the single most commercially significant statement on a coloured stone report because it directly determines whether a stone commands a no-heat price premium.
            </p>
          </div>

          <div className="font-jost text-sm text-dark/70 leading-relaxed space-y-8">
            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Where to find it on the report</h2>
              <p>On a GIA Colored Stone Identification and Origin Report, the heat treatment assessment appears in the <em>Comments</em> section — typically the final line of the report. The exact phrase is either <em>&ldquo;No indications of heating&rdquo;</em> or <em>&ldquo;Indications of heating.&rdquo;</em> On a GRS report, the treatment designation appears prominently on the face of the certificate under a dedicated <em>Type</em> or <em>Treatment</em> field, stating either <em>&ldquo;No heat&rdquo;</em> or a heating grade from H(a) to H(c).</p>
              <p className="mt-4">Gübelin and SSEF — two Swiss laboratories also highly regarded in the coloured stone trade — use similar language and present it in similar positions on their reports (see our comparison of <Link href="/learn/gia-vs-grs-certificate" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">GIA vs GRS</Link> for the two most commonly encountered). All four are considered definitive authorities on heat treatment status.</p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">How laboratories detect heat treatment</h2>
              <p>Heat treatment leaves permanent evidence inside the crystal that trained gemologists can identify at high magnification. The diagnostic signs include:</p>
              <ul className="mt-4 space-y-3 list-disc list-inside">
                <li><strong>Dissolved or coarsened silk.</strong> Rutile needle inclusions (silk) that are present in unheated stones dissolve at high temperatures, leaving distinctive patterns — either absent silk or coarsened, broken needles — that flag treatment.</li>
                <li><strong>Discoid fractures around inclusions.</strong> Solid mineral inclusions expand at different rates than the host corundum when heated, creating characteristic stress fractures — sometimes called &ldquo;halos&rdquo; — around zircon or other mineral crystals.</li>
                <li><strong>Healed fractures with glassy flux residues.</strong> Open fractures in rough sapphire can seal during heating, sometimes trapping flux or creating glassy films along the healed plane.</li>
                <li><strong>Colour concentration zones.</strong> In heavily heated stones, colour may concentrate along growth zones or fractures in ways inconsistent with natural formation.</li>
              </ul>
              <p className="mt-4">When none of these features are present and the stone&apos;s internal character is consistent with natural formation at ambient geological temperatures, the laboratory issues a no-heat determination.</p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Why it matters commercially</h2>
              <p>The no-heat designation is not merely a technical footnote — it is a value driver. In the international coloured stone market, <Link href="/learn/what-is-an-unheated-sapphire" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">certified no-heat stones</Link> command a <Link href="/learn/are-unheated-sapphires-worth-more" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">significant premium</Link> over equivalent heated stones. For exceptional stones at major auction, the differential can be dramatic.</p>
              <p className="mt-4">The reason is straightforward: supply is structurally limited. Heating cannot be reversed to increase the pool of no-heat certified stones. Every year, some portion of the remaining no-heat material in the world is heated by someone seeking a short-term colour improvement — permanently removing that stone from the no-heat category. The pool can only shrink.</p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">When no certificate exists</h2>
              <p>A verbal assurance of no-heat status — from a dealer, seller, or previous owner — is not verifiable and carries no market standing. If you are buying a stone on the basis of its unheated status and paying accordingly, a <Link href="/learn/certification" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">current laboratory report</Link> from GIA, GRS, Gübelin, or SSEF is not optional. The cost of certification is modest relative to the premium being paid. Without it, there is no basis for the premium.</p>
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
            { label: 'GIA — Gemological Institute of America', detail: '"No indications of heating" designation and detection methodology', href: 'https://www.gia.edu' },
            { label: 'GRS — GemResearch Swisslab', detail: '"No heat" designation and H(a)-H(c) heat-treatment grading', href: 'https://www.gemresearch.ch' },
            { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy for heat-treatment detection', href: 'https://www.ssef.ch' },
            { label: 'Gübelin Gem Lab', detail: 'Inclusion analysis for treatment determination', href: 'https://www.gubelin.com/en/gemlab' },
            { label: 'CIBJO — The World Jewellery Confederation', detail: 'International disclosure standards for treated gemstones', href: 'https://www.cibjo.org' },
            { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on heat-treatment detection features', href: 'https://www.gia.edu/gems-gemology' },
          ]} />
        </div>
      </section>

      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Every stone comes with its report</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">All our gemstones are certified by GIA or GRS. The laboratory report accompanies every purchase.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/gemstones" className="px-8 py-3 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors">Our Collection</Link>
            <Link href="/contact" className="px-8 py-3 border border-teal/40 text-teal-light font-jost text-sm tracking-widest uppercase hover:bg-teal hover:text-white hover:border-teal transition-all">Enquire</Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
