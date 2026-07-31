import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'Why Are Ceylon Sapphires So Expensive?',
  description: 'Ceylon sapphires command premium prices due to exceptional natural colour, high unheated availability, 2,500 years of reputation, and diminishing supply from Sri Lankan mines.',
  alternates: { canonical: 'https://serendibgemstones.com/learn/faq/why-are-ceylon-sapphires-so-expensive' },
}

const faqItems = [
  {
    q: 'Are Ceylon sapphires more expensive than sapphires from other origins?',
    a: 'Yes. A sapphire confirmed as Sri Lankan (Ceylon) origin by GIA or GRS typically commands a 20–50% premium over an equivalent stone from Madagascar, Australia, or Thailand. Only Kashmir sapphires — which are now virtually unobtainable from the original mines — consistently command higher prices. The premium reflects both the quality characteristics of Ceylon sapphires and the centuries-old reputation of the Sri Lankan gemstone trade.',
  },
  {
    q: 'Will Ceylon sapphire prices continue to rise?',
    a: 'The structural factors supporting Ceylon sapphire values — finite geological deposits, increasingly difficult mining conditions, growing global demand from collectors and investors, and the irreplaceable reputation of the origin — suggest that prices for fine unheated Ceylon sapphires will continue to appreciate. Historical auction data over the past two decades supports this trend, with prices for top-quality unheated Ceylon stones rising 5–10% annually.',
  },
  {
    q: 'Is a Ceylon sapphire worth the premium over a Madagascar sapphire?',
    a: 'For investment, yes — origin premium translates directly to resale value. For a piece of jewellery you intend to wear and enjoy, a fine Madagascar sapphire at a lower price point can be an excellent choice. The key is to buy certified stones regardless of origin, so you know exactly what you are getting. A beautiful stone is a beautiful stone — origin adds value, but it should not be the only consideration.',
  },
  {
    q: 'How can I verify that a sapphire is really from Sri Lanka?',
    a: 'Geographic origin is determined by gemological laboratories through trace element chemistry (using techniques like LA-ICP-MS) and inclusion analysis. GIA, GRS, Gübelin, and SSEF all provide origin determination services. The report will state "Sri Lanka" or "Ceylon" if the laboratory can confirm the origin. Without a laboratory report, origin claims are unverifiable and should not be relied upon.',
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
        { '@type': 'ListItem', position: 3, name: 'Why Ceylon Sapphires Are Expensive' },
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

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative bg-dark pt-36 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(26,95,158,0.2) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8 flex-wrap">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/learn" className="hover:text-teal transition-colors">Knowledge Centre</Link>
            <span>/</span>
            <span className="text-offwhite/60">FAQ</span>
          </nav>
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Frequently Asked Question</p>
            <h1 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-light leading-tight mb-6">
              Why are Ceylon sapphires so expensive?
            </h1>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark px-6 lg:px-10 py-10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="bg-dark-card border border-teal/20 p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Quick Answer</p>
              <p className="font-jost text-sm text-offwhite/70 leading-relaxed">
                Ceylon sapphires are expensive because Sri Lanka produces an <strong className="text-offwhite">unusually high proportion of naturally fine-coloured stones</strong> that don&apos;t require heat treatment, the island has <strong className="text-offwhite">2,500 years of gemstone heritage</strong> that adds provenance value, and <strong className="text-offwhite">supply is finite and diminishing</strong> while global collector demand grows steadily.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark px-6 lg:px-10 pb-16">
        <div className="max-w-3xl mx-auto prose-gem">
          <FadeUp>
            <h2>The Full Answer</h2>
            <p>
              Sri Lanka &mdash; known as Ceylon in the gemstone trade &mdash; has been the world&apos;s most celebrated sapphire origin for millennia. Ptolemy mentioned the island&apos;s gems in the 2nd century. Marco Polo called it &ldquo;the finest island of its size in all the world.&rdquo; Today, &ldquo;Ceylon origin&rdquo; on a laboratory report adds measurable value to any sapphire.
            </p>
            <h3>Exceptional natural colour</h3>
            <p>
              Sri Lanka&apos;s unique geology &mdash; specifically the Highland Complex metamorphic terrane &mdash; produces sapphires with a distinctive colour profile: bright, vivid blues with a characteristic &ldquo;velvety&rdquo; quality caused by fine rutile silk. These stones tend to have lighter tones and higher brilliance than sapphires from many other origins, making them desirable for jewellery.
            </p>
            <h3>Unheated availability</h3>
            <p>
              Sri Lanka produces a higher percentage of gem-quality rough that is attractive without heat treatment than almost any other origin. While over 95% of global sapphire production is heated, Sri Lanka consistently yields stones that are beautiful in their natural state. This means the supply of fine unheated Ceylon sapphires &mdash; while still rare &mdash; is more reliable than from most sources.
            </p>
            <h3>Provenance and reputation</h3>
            <p>
              The &ldquo;Ceylon&rdquo; designation carries centuries of accumulated prestige. Major auction houses &mdash; Christie&apos;s, Sotheby&apos;s, Bonhams &mdash; consistently achieve higher prices for stones identified as Sri Lankan origin. The Blue Belle of Asia, a 392.52-carat Ceylon sapphire, sold for USD 17.3 million at Christie&apos;s in 2014. This provenance premium is well-documented across decades of market data.
            </p>
            <h3>Diminishing supply</h3>
            <p>
              Sri Lanka&apos;s alluvial gem deposits are finite. The most productive mining areas around Ratnapura and Elahera have been worked for centuries, and finding significant new deposits is increasingly difficult. Environmental regulations and land-use changes further constrain production. With supply tightening and demand growing &mdash; particularly from Asian collectors &mdash; the structural case for continued price appreciation is strong.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark-card px-6 lg:px-10 py-16 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-2xl text-offwhite font-semibold mb-8">Related Questions</h2>
            <div className="space-y-3">
              {faqItems.map((faq) => (
                <details key={faq.q} className="faq-item border border-white/6 bg-dark">
                  <summary className="px-6 py-4 cursor-pointer font-jost text-sm text-offwhite/70">{faq.q}</summary>
                  <div className="faq-answer px-6">{faq.a}</div>
                </details>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark px-6 lg:px-10 py-12 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-xl text-offwhite font-semibold mb-5">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/learn/ceylon-vs-kashmir-sapphire" className="group block bg-dark-card border border-white/6 hover:border-teal/25 transition-colors p-5">
                <p className="font-cormorant text-base text-offwhite font-semibold group-hover:text-teal-light transition-colors leading-snug">Ceylon vs Kashmir sapphire</p>
                <span className="font-jost text-xs text-teal/50 mt-2 inline-block">Read guide &rarr;</span>
              </Link>
              <Link href="/learn/sri-lanka" className="group block bg-dark-card border border-white/6 hover:border-teal/25 transition-colors p-5">
                <p className="font-cormorant text-base text-offwhite font-semibold group-hover:text-teal-light transition-colors leading-snug">Sri Lanka &amp; Origins</p>
                <span className="font-jost text-xs text-teal/50 mt-2 inline-block">Read guide &rarr;</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark-card py-16 px-6 text-center border-t border-teal/10">
        <FadeUp>
          <p className="font-cormorant italic text-xl text-offwhite/60 mb-4">Looking for a certified Ceylon sapphire?</p>
          <p className="font-jost text-sm text-offwhite/45 mb-6 max-w-md mx-auto leading-relaxed">
            Tell us your requirements and we&apos;ll source suitable options directly from Sri Lanka.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-teal hover:bg-teal-light text-white font-jost text-xs tracking-widest uppercase transition-colors duration-300">
            Start a Conversation
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
