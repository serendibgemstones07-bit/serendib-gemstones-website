import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'What is a Padparadscha Sapphire? — Serendib Gemstones',
  description: 'A Padparadscha sapphire is the rarest variety of corundum, displaying a delicate pinkish-orange to orangy-pink colour named for the lotus blossom. Sri Lanka is its most celebrated source. Learn how to identify one and why they command extraordinary prices.',
}

const faqItems = [
  {
    q: 'How rare is a Padparadscha sapphire?',
    a: 'Padparadscha sapphires are among the rarest gemstones in the world. Genuine specimens of fine colour, above 2 carats, with laboratory confirmation of their designation are extremely difficult to source. Far more stones are offered as "Padparadscha" in the market than actually qualify under the strict colour parameters recognised by GIA and GRS. True Padparadschas represent a fraction of Sri Lanka\'s already limited sapphire output.',
  },
  {
    q: 'What is the correct colour of a Padparadscha?',
    a: 'The accepted definition is a delicate pinkish-orange to orangy-pink colour with light to medium saturation. The colour must contain both pink and orange in roughly equal proportions — neither so orange that it reads as a standard orange sapphire, nor so pink that it reads as a pink sapphire. The tone must be light to medium; dark, heavily saturated stones do not qualify. The colour must also be natural and unheated.',
  },
  {
    q: 'Where do Padparadscha sapphires come from?',
    a: 'Sri Lanka is the original and most celebrated source of Padparadscha sapphires. The majority of fine Padparadschas recorded in history — including those in major museum collections and notable private collections — are of Ceylon origin. Tanzania and Madagascar also produce material sold as Padparadscha, but industry consensus holds Ceylon material as the benchmark. Origin is typically confirmed on laboratory reports.',
  },
  {
    q: 'How much does a Padparadscha sapphire cost?',
    a: 'Fine Padparadscha sapphires are among the most valuable coloured gemstones on the market. Value rises steeply with size, colour intensity, and provenance, and unheated Ceylon stones above 5 carats regularly set records at international auction. Because every stone is unique and the market moves, we quote on the actual gemstone rather than publishing figures — please make an enquiry for current pricing on a specific stone.',
  },
  {
    q: 'What is the difference between a pink sapphire and a Padparadscha?',
    a: 'A pink sapphire is predominantly pink with little or no orange component. A Padparadscha must contain a meaningful orange component alongside the pink — the two colours together create the characteristic lotus-blossom hue. If a stone is assessed by a laboratory and found to be predominantly pink without sufficient orange, it will be graded simply as a pink sapphire regardless of trade descriptions applied to it.',
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
        { '@type': 'ListItem', position: 3, name: 'What is a Padparadscha Sapphire?', item: 'https://serendibgemstones.com/learn/what-is-padparadscha-sapphire' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'What is a Padparadscha Sapphire?',
      description: 'A Padparadscha sapphire is the rarest variety of corundum, displaying a pinkish-orange to orangy-pink colour named for the lotus blossom. Sri Lanka is its most celebrated source.',
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://serendibgemstones.com' },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones' },
      datePublished: '2026-07-30',
      dateModified: '2026-08-12',
      url: 'https://serendibgemstones.com/learn/what-is-padparadscha-sapphire',
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

export default function PadparadscharPage() {
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
              <span className="text-teal/60">Padparadscha</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">
              Sapphires
            </span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              What is a Padparadscha sapphire?
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
              A Padparadscha sapphire is a rare variety of corundum displaying a delicate pinkish-orange to orangy-pink colour — named after the Sinhalese word for the lotus blossom. It must be natural, unheated, and contain both pink and orange in a precise balance. Sri Lanka is the original and most celebrated source, and fine specimens above 2 carats are among the rarest and most coveted gemstones in the world.
            </p>
          </div>

          <div className="font-jost text-sm text-dark/70 leading-relaxed space-y-8">

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">The name and its meaning</h2>
              <p>
                The word <em>Padparadscha</em> (sometimes spelled Padparadschah) is derived from the Sinhalese word <em>padmaraga</em> — meaning &ldquo;lotus colour&rdquo; — a reference to the pale salmon-pink of the sacred lotus flower found in Sri Lankan waterways. The name has been in use in the gem trade since at least the nineteenth century, when Ceylon sapphires were first catalogued by European gem dealers and colonial naturalists.
              </p>
              <p className="mt-4">
                The lotus association is apt: the colour is not a bold, saturated hue but something more elusive — a soft interplay of peach, rose, and saffron that shifts subtly under different light sources. This delicacy is both what makes the Padparadscha so prized and what makes accurate identification difficult.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">The colour — and why definition matters</h2>
              <p>
                No other gemstone variety has a more contested colour definition than the Padparadscha. GIA defines it as a corundum of &ldquo;pinkish-orange to orangy-pink hue, with a light to medium tone and saturation.&rdquo; GRS uses the evocative designation <em>padparadscha</em> on their reports when the stone meets their colour standards, which similarly require a balance of pink and orange at light-to-medium saturation.
              </p>
              <p className="mt-4">
                In practice, the definition rules out a large proportion of stones that are marketed using the Padparadscha name. A stone that is predominantly orange — even a beautiful orange sapphire — is not a Padparadscha. A stone that is predominantly <Link href="/gemstones/pink-sapphire" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">pink</Link> is not a Padparadscha. And critically, a stone that has been heated to achieve a pink-orange colour will not receive the Padparadscha designation from a reputable laboratory, because <Link href="/learn/what-does-no-heat-mean-on-certificate" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">heat treatment</Link> disqualifies the natural colour status that is intrinsic to the variety.
              </p>
              <p className="mt-4">
                This means that a certified Padparadscha must be both the right colour <em>and</em> unheated — a combination that is genuinely rare.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Sri Lanka: the benchmark source</h2>
              <p>
                The <Link href="/gemstones/padparadscha-sapphire" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">Padparadscha sapphire</Link> is, historically and geologically, a <Link href="/learn/sri-lanka" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">Sri Lankan</Link> stone. The alluvial gem gravels of Ratnapura, Elahera, and the Sabaragamuwa Province have produced the finest documented examples of the variety across centuries. Major Padparadschas in the Smithsonian Institution, the Natural History Museum in London, and notable private collections in Europe and Asia are of Ceylon origin.
              </p>
              <p className="mt-4">
                The geological reason lies in Sri Lanka&apos;s Precambrian metamorphic terranes. The conditions that produced fine-coloured sapphires across Sri Lanka — the right balance of trace elements at depth, followed by alluvial concentration and natural weathering — also created the specific chromium-influenced corundum that produces the pinkish-orange combination. Tanzania and Madagascar produce material sometimes labelled Padparadscha, but the colour character of Ceylon specimens — in particular the presence of a subtle violet overtone in certain lighting — is generally considered the true standard.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Rarity and price</h2>
              <p>
                A Padparadscha above 2 carats with GIA or GRS confirmation, fine natural colour, and no heat treatment is genuinely one of the rarest objects in the gemstone trade. Supply is effectively fixed — no new Padparadscha deposit has been found that competes with Sri Lanka in quality, and the output from Sri Lankan fields declines each year as the most accessible deposits are depleted.
              </p>
              <p className="mt-4">
                Auction realisations for certified fine Padparadschas have risen significantly over the past decade, with exceptional stones above 5 carats setting benchmark prices at Sotheby&apos;s and Christie&apos;s. The combination of rarity, beauty, and name recognition among collectors globally makes the Padparadscha one of the most compelling coloured-stone investments available.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">How to verify a Padparadscha</h2>
              <p>
                Because the name is loosely applied in retail and online markets, a laboratory report is essential. Look for:
              </p>
              <ul className="mt-4 space-y-3 list-disc list-inside">
                <li>A GIA Colored Stone report specifically stating the variety as <em>Padparadscha</em>, or a GRS report bearing the <em>padparadscha</em> type designation</li>
                <li>A heat treatment finding of &ldquo;No indications of heating&rdquo; (GIA) or &ldquo;No heat&rdquo; (GRS)</li>
                <li>A Ceylon (Sri Lanka) origin determination where provenance is relevant to value</li>
              </ul>
              <p className="mt-4">
                Without these three elements confirmed on a credible laboratory report, a stone described as Padparadscha should be treated with caution regardless of its visual appearance or the reputation of the seller.
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
            { label: 'GIA — Gemological Institute of America', detail: 'Padparadscha variety definition and colour standards', href: 'https://www.gia.edu' },
            { label: 'GRS — GemResearch Swisslab', detail: 'Padparadscha designation and "Lotus" colour grading', href: 'https://www.gemresearch.ch' },
            { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy for fancy sapphire identification', href: 'https://www.ssef.ch' },
            { label: 'Gübelin Gem Lab', detail: 'Detection of beryllium diffusion in padparadscha-coloured corundum', href: 'https://www.gubelin.com/en/gemlab' },
            { label: 'National Gem & Jewellery Authority of Sri Lanka (NGJA)', detail: 'Sri Lankan gem industry regulation and export certification', href: 'https://www.ngja.gov.lk' },
            { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on padparadscha colour and origin', href: 'https://www.gia.edu/gems-gemology' },
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Enquire about Padparadscha availability</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">
            We source directly from Sri Lanka&apos;s gem fields and occasionally have certified Padparadscha sapphires available. Contact us to discuss your requirements.
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
