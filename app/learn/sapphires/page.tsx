import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Natural Sapphires — Everything You Need to Know About Ceylon Sapphires',
  description: 'The definitive guide to natural sapphires from Sri Lanka. Learn about colour varieties, origins, heat treatment, certification, and what makes Ceylon sapphires the world\'s most sought-after.',
  alternates: { canonical: 'https://serendibgemstones.com/learn/sapphires' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'Natural Sapphires', item: 'https://serendibgemstones.com/learn/sapphires' },
      ],
    },
    {
      '@type': 'CollectionPage',
      name: 'Natural Sapphires — Everything You Need to Know About Ceylon Sapphires',
      description: 'The definitive guide to natural sapphires from Sri Lanka. Learn about colour varieties, origins, heat treatment, certification, and what makes Ceylon sapphires the world\'s most sought-after.',
      url: 'https://serendibgemstones.com/learn/sapphires',
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://serendibgemstones.com' },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones' },
      dateModified: '2026-08-12',
    },
  ],
}

const guides = [
  {
    slug: 'what-is-an-unheated-sapphire',
    title: 'What is an unheated sapphire?',
    description: 'Over 95% of commercial sapphires are heat-treated. An unheated stone is the rare exception — here is why that matters for buyers and investors.',
    readTime: '5 min',
  },
  {
    slug: 'what-is-padparadscha-sapphire',
    title: 'What is a Padparadscha sapphire?',
    description: 'Named for the lotus blossom, the Padparadscha is the rarest of all sapphire varieties — and Sri Lanka is its most celebrated source.',
    readTime: '4 min',
  },
  {
    slug: 'what-is-a-star-sapphire',
    title: 'What is a star sapphire?',
    description: 'A six-rayed star of light glides across the stone\'s surface, caused by microscopic rutile needles. Sri Lanka is the world\'s most celebrated source.',
    readTime: '4 min',
  },
  {
    slug: 'ceylon-vs-kashmir-sapphire',
    title: 'Ceylon vs Kashmir sapphire — what is the difference?',
    description: 'Kashmir stones are virtually unobtainable and command record prices. Ceylon sapphires are the finest accessible alternative — here is how they compare.',
    readTime: '5 min',
  },
]

const topics = [
  {
    heading: 'Colour Varieties',
    text: 'Sri Lanka produces sapphires in virtually every colour of the spectrum — blue, pink, yellow, orange, green, violet, and colourless. Each owes its hue to a different combination of trace elements within the corundum crystal.',
  },
  {
    heading: 'Origins & Geology',
    text: 'Ceylon sapphires form in ancient Precambrian metamorphic rock, then concentrate in alluvial gem gravels through millions of years of erosion. The key mining regions — Ratnapura, Elahera, and Eheliyagoda — each produce stones with subtly different characteristics.',
  },
  {
    heading: 'Treatments & Enhancements',
    text: 'Heat treatment is the most common enhancement, applied to over 95% of commercial sapphires. Understanding treatment status is essential for any buyer — it directly affects value, rarity, and long-term investment potential.',
  },
  {
    heading: 'Investment & Value',
    text: 'Fine unheated Ceylon sapphires have appreciated steadily over the past two decades. Unlike diamonds, their supply is fixed by geology, not by production decisions — making natural scarcity a structural feature of the market.',
  },
  {
    heading: 'Certification',
    text: 'An internationally recognised laboratory report from GIA, GRS, or another accredited institution is the foundation of any serious sapphire purchase. It confirms identity, treatment status, origin, and colour — the four factors that determine value.',
  },
  {
    heading: 'Care & Handling',
    text: 'Sapphire ranks 9 on the Mohs hardness scale, second only to diamond. While exceptionally durable, proper care ensures your stone retains its brilliance for generations — avoid ultrasonic cleaning for stones with significant inclusions.',
  },
]

const coming = [
  'Star sapphire buying guide — how to evaluate asterism',
  'Yellow sapphire — the overlooked Ceylon classic',
  'Pink sapphire vs pink Padparadscha — where is the line?',
  'Sapphire colour chart — understanding saturation, hue, and tone',
]

export default function SapphiresHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 70%, rgba(201,168,76,0.35) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeUp>
            <nav className="flex items-center gap-2 font-jost text-xs tracking-wider uppercase text-offwhite/30 mb-8">
              <Link href="/" className="hover:text-teal/60 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-teal/60 transition-colors">Knowledge Centre</Link>
              <span>/</span>
              <span className="text-teal/60">Sapphires</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">
              Topic Hub
            </span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              Natural Sapphires
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl leading-relaxed">
              Sri Lanka has produced the world&apos;s finest sapphires for over two thousand years. The island&apos;s unique Precambrian geology yields sapphires in every colour of the spectrum — from the legendary cornflower blue to the exceedingly rare Padparadscha — with a higher proportion of naturally fine-coloured, unheated stones than virtually any other source on earth. This hub brings together everything we know about these extraordinary gems.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Byline */}
      <section className="bg-dark px-6 lg:px-10 pb-4">
        <div className="max-w-5xl mx-auto">
          <ArticleByline updated="2026-08-12" />
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-dark-card border-y border-teal/10 px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-10">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-2">Overview</p>
            <h2 className="font-cormorant text-3xl text-offwhite">What you&apos;ll learn</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((t, i) => (
              <FadeUp key={t.heading} delay={i * 0.07}>
                <div className="bg-dark border border-white/6 p-7 h-full">
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-3">{t.heading}</h3>
                  <p className="font-jost text-xs text-offwhite/40 leading-relaxed">{t.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Ceylon Sapphire Varieties */}
      <section className="bg-dark px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-10">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-2">Varieties</p>
            <h2 className="font-cormorant text-3xl text-offwhite mb-4">Ceylon sapphire colours</h2>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl leading-relaxed">
              Sapphire is the gem variety of the mineral corundum (aluminium oxide, Al&#8322;O&#8323;). In its pure state, corundum is colourless. Trace elements incorporated during crystallisation create the extraordinary range of colours that make Ceylon sapphires so celebrated.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FadeUp delay={0.05}>
              <div className="bg-dark-card border border-white/6 p-7">
                <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-2">Blue Sapphire</h3>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">
                  The classic Ceylon blue ranges from a light, bright cornflower to a rich, velvety royal blue. Iron and titanium in the crystal lattice produce the colour. Sri Lankan blues are prized for their brilliance and medium saturation — lighter and more lively than the inky blues of Australian or Thai material.
                </p>
                <Link href="/gemstones/blue-sapphire" className="font-jost text-xs tracking-widest uppercase text-teal/60 hover:text-teal transition-colors">
                  View blue sapphires &rarr;
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-dark-card border border-white/6 p-7">
                <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-2">Padparadscha</h3>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">
                  A delicate pink-orange that recalls the colour of a tropical lotus blossom at sunrise. The Padparadscha is the rarest and most valuable sapphire variety, and Sri Lanka remains its most celebrated and historically significant source. Chromium and iron together create its unique hue.
                </p>
                <Link href="/gemstones/padparadscha-sapphire" className="font-jost text-xs tracking-widest uppercase text-teal/60 hover:text-teal transition-colors">
                  View Padparadscha sapphires &rarr;
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="bg-dark-card border border-white/6 p-7">
                <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-2">Star Sapphire</h3>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed">
                  When dense, oriented rutile needles (silk) are preserved within the corundum crystal, they produce asterism — a six-rayed star that glides across the domed cabochon surface. Sri Lanka produces the world&apos;s finest star sapphires, including the legendary Star of India (563 carats) and the Star of Adam (1,404 carats).
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-dark-card border border-white/6 p-7">
                <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-2">Pink, Yellow & Fancy Colours</h3>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed">
                  Ceylon yields vibrant pink sapphires (coloured by chromium), golden yellows (coloured by iron), rich violets, soft greens, and the increasingly popular teal or parti-coloured sapphires that show two or more colours simultaneously. Each variety has its own collector following and market dynamics.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Sapphire Guides */}
      <section className="bg-dark-card border-y border-teal/10 px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-10">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-2">Guides</p>
            <h2 className="font-cormorant text-3xl text-offwhite">Sapphire guides</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {guides.map((g, i) => (
              <FadeUp key={g.slug} delay={i * 0.07}>
                <Link href={`/learn/${g.slug}`} className="group block bg-dark border border-white/6 p-7 hover:border-teal/30 transition-colors h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-jost text-xs tracking-wider uppercase border text-teal/70 border-teal/25 px-2.5 py-0.5">Sapphires</span>
                    <span className="font-jost text-xs text-offwhite/25">{g.readTime} read</span>
                  </div>
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-3 group-hover:text-teal-light transition-colors leading-snug">{g.title}</h3>
                  <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">{g.description}</p>
                  <span className="font-jost text-xs tracking-widest uppercase text-teal/50 group-hover:text-teal transition-colors">Read article &rarr;</span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-dark px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-8">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-2">Coming Soon</p>
            <h2 className="font-cormorant text-3xl text-offwhite">More sapphire guides on the way</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {coming.map((c, i) => (
              <FadeUp key={c} delay={i * 0.05}>
                <div className="flex items-center gap-4 bg-dark-card border border-white/4 px-5 py-4">
                  <span className="font-jost text-[10px] tracking-wider uppercase border text-teal/70 border-teal/25 px-2 py-0.5 shrink-0">Sapphires</span>
                  <p className="font-jost text-sm text-offwhite/40 leading-snug">{c}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-dark px-6 lg:px-10 pb-16">
        <div className="max-w-5xl mx-auto">
          <SourcesReferences sources={[
            { label: 'GIA — Gemological Institute of America', detail: 'Sapphire identification, treatment disclosure, and origin reports', href: 'https://www.gia.edu' },
            { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and origin determination for sapphires', href: 'https://www.gemresearch.ch' },
            { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and origin determination', href: 'https://www.ssef.ch' },
            { label: 'Gübelin Gem Lab', detail: 'Origin determination and provenance research for sapphires', href: 'https://www.gubelin.com/en/gemlab' },
            { label: 'National Gem & Jewellery Authority of Sri Lanka (NGJA)', detail: 'Sri Lankan gem industry regulation and export certification', href: 'https://www.ngja.gov.lk' },
            { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on sapphire origin, chemistry, and treatments', href: 'https://www.gia.edu/gems-gemology' },
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Explore our sapphire collection</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">
            Every stone in our collection is sourced mine-direct in Sri Lanka and independently certified by GIA or GRS. Enquire about a specific stone or tell us what you are looking for.
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
