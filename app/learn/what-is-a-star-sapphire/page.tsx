import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'What is a Star Sapphire? — Serendib Gemstones',
  description: 'A star sapphire displays asterism — a six-rayed star of light caused by microscopic rutile needles inside the crystal. Sri Lanka is the world\'s most important source, producing both blue and black star sapphires of exceptional quality.',
}

const faqItems = [
  {
    q: 'Are star sapphires valuable?',
    a: 'Fine star sapphires are among the most collectible of all coloured gemstones. Value is driven by the sharpness and centring of the star, the body colour of the stone, transparency, size, and origin. A large blue star sapphire from Sri Lanka with a sharp, centred six-ray star and good translucency commands a significant premium at collector level. The Black Star of Queensland — 733 carats — is considered priceless.',
  },
  {
    q: 'Why do some star sapphires have 6 rays and some 12?',
    a: 'Standard star sapphires display six rays, produced by three sets of rutile needles oriented 60 degrees apart following the trigonal crystal symmetry of corundum. Twelve-rayed stars — sometimes called "star of David" sapphires — occur when two different sets of inclusions are present at different depths within the crystal, each producing its own six-ray star. Twelve-rayed stones are rarer and considered especially prized by collectors.',
  },
  {
    q: 'Can a star sapphire be unheated?',
    a: 'Yes — and unheated star sapphires are significantly more valuable than heated ones. Heat treatment dissolves the rutile silk inclusions that create the star, which is why most heated sapphires do not display asterism. To preserve the star, the stone must remain unheated. A star sapphire with a sharp asterism is therefore, by definition, almost always unheated — making it naturally exempt from heat treatment and eligible for no-heat certification.',
  },
  {
    q: 'What is the most famous star sapphire?',
    a: 'The Star of India — a 563-carat blue-grey star sapphire from Sri Lanka — is perhaps the most famous, currently displayed at the American Museum of Natural History in New York. The Black Star of Queensland (733 carats) and the Star of Asia (330 carats, Smithsonian Institution) are other notable examples. Many of the world\'s most celebrated star sapphires are of Sri Lankan origin.',
  },
  {
    q: 'How do I evaluate a star sapphire\'s quality?',
    a: 'The key quality factors for a star sapphire are: (1) Star sharpness — rays should be crisp, not diffuse; (2) Star centring — the star should be centred on the dome of the stone when viewed in direct light; (3) Completeness — all six rays should extend fully to the girdle; (4) Body colour — a rich, even blue is preferred; (5) Transparency — stones range from opaque to translucent, with greater transparency generally preferred; and (6) Symmetry of the cabochon cut.',
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
        { '@type': 'ListItem', position: 3, name: 'What is a Star Sapphire?', item: 'https://serendibgemstones.com/learn/what-is-a-star-sapphire' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'What is a Star Sapphire?',
      description: 'A star sapphire displays asterism — a six-rayed star caused by rutile needle inclusions inside the crystal. Sri Lanka is the world\'s most important source.',
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://serendibgemstones.com' },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones' },
      datePublished: '2026-07-30',
      dateModified: '2026-08-12',
      url: 'https://serendibgemstones.com/learn/what-is-a-star-sapphire',
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

export default function StarSapphirePage() {
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
              <span className="text-teal/60">Star Sapphire</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">Sapphires</span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              What is a star sapphire?
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
              A <Link href="/gemstones/star-sapphire" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">star sapphire</Link> is a variety of corundum that displays asterism — a six-rayed star of light that glides across the surface of the stone when viewed under a direct light source. The star is caused by microscopic rutile needle inclusions arranged in three intersecting directions within the crystal. <Link href="/learn/sri-lanka" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">Sri Lanka</Link> is the world&apos;s most celebrated source, producing blue, black, and grey star sapphires of exceptional quality — including some of the largest and finest on record.
            </p>
          </div>

          <div className="font-jost text-sm text-dark/70 leading-relaxed space-y-8">
            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">What causes the star</h2>
              <p>The phenomenon of asterism in sapphire is produced by inclusions of rutile — a titanium dioxide mineral — that crystallise as fine needles within the corundum host. These needles orient themselves in three directions, each 60 degrees apart, following the trigonal symmetry of the corundum crystal. When light enters the cabochon-cut stone, each set of needles scatters the light into a band. Three bands of scattered light crossing each other produce the characteristic six-rayed star.</p>
              <p className="mt-4">The same needles, when present in sufficient quantity but in a transparent faceted stone, produce the silky phenomenon known as &ldquo;silk&rdquo; — visible as a cloudy sheen within blue sapphires. In star sapphires, the concentration is higher and the stone is cut as a cabochon (dome-shaped) specifically to optimise the star display. The dome height matters: too flat and the star disappears; too tall and it loses its centring.</p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Types of star sapphire</h2>
              <p>Sri Lanka produces star sapphires across a wide colour spectrum:</p>
              <ul className="mt-4 space-y-3 list-disc list-inside">
                <li><strong>Blue star sapphire.</strong> The most sought-after variety, ranging from pale grey-blue to a rich royal blue. The finest examples combine a vivid body colour with a sharp, centred star and good translucency.</li>
                <li><strong>Black star sapphire.</strong> An opaque, near-black stone that displays a striking silvery or golden star. Sri Lanka is a primary source; Thailand also produces significant quantities. The opacity comes from heavy concentrations of inclusions.</li>
                <li><strong>Grey star sapphire.</strong> A translucent to semi-transparent stone with a silver body colour and white star — often more affordable than blue stars and sometimes exhibiting particularly sharp asterism.</li>
                <li><strong>Pink and purple star sapphire.</strong> Rarer colour variants that follow the same asterism mechanism. Pastel pink star sapphires from Sri Lanka are occasionally encountered and sought by specialist collectors.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Sri Lanka&apos;s pre-eminence</h2>
              <p>Sri Lanka&apos;s gem fields have produced star sapphires for over two thousand years. The alluvial gravels of the Ratnapura district and the metamorphic rocks of the island&apos;s central highlands yield rutile-rich corundum that, when properly cut, displays some of the finest asterism in the world. Several of the most celebrated star sapphires in existence — including the Star of India (563 carats, American Museum of Natural History), the Star of Asia (330 carats, Smithsonian Institution), and the Rosser Reeves Star (138 carats, Smithsonian) — are of Sri Lankan origin.</p>
              <p className="mt-4">The depth of Sri Lanka&apos;s geological environment is particularly conducive to the formation of rutile-rich corundum. The long geological history of the island&apos;s Precambrian metamorphic terrain has allowed multiple growth cycles in which rutile needles crystallise and orient within host sapphire crystals in sufficient quantity to produce reliable asterism.</p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Star sapphires and heat treatment</h2>
              <p>Heat treatment and star sapphires are mutually exclusive in a meaningful sense: the very inclusions that create the star are destroyed by heating. Rutile silk dissolves at the temperatures used for heat treatment, eliminating the asterism and converting the stone into a transparent (if flawed) facetable sapphire. A star sapphire with a well-defined star is therefore almost invariably <Link href="/learn/what-is-an-unheated-sapphire" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">unheated</Link> — a point worth understanding when comparing prices.</p>
              <p className="mt-4">GIA and GRS will still assess and report on heat treatment status for star sapphires, but the presence of a sharp star is itself strong evidence of no heat. Buyers can request the <Link href="/learn/what-does-no-heat-mean-on-certificate" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">no-heat certification</Link> for additional market documentation.</p>
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
            { label: 'GIA — Gemological Institute of America', detail: 'Asterism in corundum and star sapphire identification', href: 'https://www.gia.edu' },
            { label: 'GRS — GemResearch Swisslab', detail: 'Star sapphire evaluation and treatment disclosure', href: 'https://www.gemresearch.ch' },
            { label: 'Gübelin Gem Lab', detail: 'Inclusion research on rutile silk and asterism', href: 'https://www.gubelin.com/en/gemlab' },
            { label: 'National Gem & Jewellery Authority of Sri Lanka (NGJA)', detail: 'Sri Lankan gem industry regulation and export certification', href: 'https://www.ngja.gov.lk' },
            { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on star sapphire optical phenomena', href: 'https://www.gia.edu/gems-gemology' },
          ]} />
        </div>
      </section>

      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Enquire about star sapphire availability</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">We source star sapphires directly from Sri Lanka&apos;s gem fields. Contact us to discuss what is currently available.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/gemstones" className="px-8 py-3 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors">Our Collection</Link>
            <Link href="/contact" className="px-8 py-3 border border-teal/40 text-teal-light font-jost text-sm tracking-widest uppercase hover:bg-teal hover:text-white hover:border-teal transition-all">Enquire</Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
