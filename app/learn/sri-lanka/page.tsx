import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Sri Lanka — The Island of Gems and Its Legendary Gemstone Heritage',
  description: 'Sri Lanka has produced the world\'s finest sapphires for over 2,500 years. Explore the mining regions, geology, and heritage that make Ceylon the most celebrated gemstone origin on earth.',
  alternates: { canonical: 'https://serendibgemstones.com/learn/sri-lanka' },
}

const regionGuides = [
  {
    slug: 'ceylon-vs-kashmir-sapphire',
    category: 'Origins',
    title: 'Ceylon vs Kashmir sapphire — what is the difference?',
    description: 'Two legendary origins compared on colour, rarity, price, and long-term value for serious collectors and investors.',
  },
  {
    slug: 'how-is-sapphire-origin-determined',
    category: 'Science',
    title: 'How is a sapphire\'s origin determined?',
    description: 'Trace element chemistry and inclusion analysis — the laboratory science behind geographic origin certification.',
  },
]

const comingSoon = [
  'Ratnapura — the City of Gems: a complete guide',
  'How Sri Lankan sapphires are mined',
  'The geology of Ceylon gemstones',
  'Why Sri Lanka produces the world\'s finest sapphires',
]

const categoryColour: Record<string, string> = {
  Origins: 'text-teal/70 border-teal/25',
  Science: 'text-purple-mid/80 border-purple-mid/30',
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'Sri Lanka', item: 'https://serendibgemstones.com/learn/sri-lanka' },
      ],
    },
    {
      '@type': 'CollectionPage',
      name: 'Sri Lanka — The Island of Gems and Its Legendary Gemstone Heritage',
      description: 'Sri Lanka has produced the world\'s finest sapphires for over 2,500 years. Mining regions, geology, and the heritage of Ceylon gemstones.',
      url: 'https://serendibgemstones.com/learn/sri-lanka',
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://serendibgemstones.com' },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones' },
      dateModified: '2026-08-12',
    },
  ],
}

export default function SriLankaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 70%, rgba(201,168,76,0.35) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <nav className="flex items-center gap-2 font-jost text-xs tracking-wider uppercase text-offwhite/30 mb-8">
              <Link href="/" className="hover:text-teal/60 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-teal/60 transition-colors">Knowledge Centre</Link>
              <span>/</span>
              <span className="text-teal/60">Sri Lanka</span>
            </nav>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              The Island of Gems
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-xl leading-relaxed">
              The ancient Arabs called it Serendib. Marco Polo wrote that it possessed &quot;the finest rubies in the world, and sapphires, topazes, amethysts, and many other stones.&quot; For over 2,500 years, Sri Lanka has been the world&apos;s most celebrated source of fine coloured gemstones — and today, it remains the single most important origin for collector-grade, unheated sapphires.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Byline */}
      <section className="bg-dark px-6 lg:px-10 pb-4">
        <div className="max-w-3xl mx-auto">
          <ArticleByline updated="2026-08-12" />
        </div>
      </section>

      {/* History */}
      <section className="bg-dark-card border-b border-teal/10 px-6 lg:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">2,500 years of heritage</p>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-6">A gemstone history like no other</h2>
          </FadeUp>
          <FadeUp delay={0.05}>
            <div className="font-jost text-sm text-offwhite/50 leading-relaxed space-y-4">
              <p>
                Gem mining in Sri Lanka predates written history. The Mahavamsa, the island&apos;s great chronicle compiled in the 5th century CE, records gem-bearing rivers and royal treasuries filled with sapphires and rubies. Ptolemy&apos;s 2nd-century Geography refers to the island as Taprobane and mentions its precious stones. By the time Arab traders established maritime routes through the Indian Ocean, Sri Lankan gems were reaching the courts of Baghdad, Constantinople, and eventually Renaissance Europe.
              </p>
              <p>
                The city of Ratnapura — literally &quot;City of Gems&quot; in Sinhala — has been the epicentre of Sri Lankan gem mining for centuries. Located in the Sabaragamuwa Province at the foot of the central highlands, Ratnapura sits on some of the richest alluvial gem deposits on earth. The rivers and streams that drain the Highland Complex carry gem-bearing gravels — called illam — that contain sapphires, rubies, alexandrite, cat&apos;s eyes, spinels, garnets, and dozens of other species in concentrations found nowhere else.
              </p>
              <p>
                What makes Sri Lanka remarkable is not just the quality of its gems but the sheer diversity. More than 75 distinct mineral species have been identified in Sri Lankan gem gravels. No other single country produces such a breadth of gemstone varieties from its alluvial deposits. This geological abundance is the reason the island earned its ancient epithet — Ratna Dweepa, the Island of Gems.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Mining Regions */}
      <section className="bg-dark px-6 lg:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Where the gems come from</p>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-10">Mining regions</h2>
          </FadeUp>

          <div className="space-y-8">
            <FadeUp delay={0.05}>
              <div className="border-l-2 border-teal/30 pl-6">
                <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-2">Ratnapura</h3>
                <p className="font-jost text-sm text-offwhite/50 leading-relaxed">
                  The undisputed capital of Sri Lankan gem mining. Ratnapura&apos;s alluvial deposits — carried down from the Highland Complex by rivers over millions of years — yield the island&apos;s most celebrated blue sapphires, along with Padparadscha sapphires, rubies, star sapphires, cat&apos;s eye chrysoberyl, and alexandrite. Traditional pit mining here follows methods that have been used for centuries: shallow shafts sunk into the gem-bearing gravel layer, with material washed and sorted by hand. The finest unheated Ceylon blue sapphires reaching the international market today are overwhelmingly from Ratnapura-area deposits.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="border-l-2 border-teal/30 pl-6">
                <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-2">Elahera</h3>
                <p className="font-jost text-sm text-offwhite/50 leading-relaxed">
                  Located in the North Central and Central Provinces, Elahera has emerged as a major sapphire source since the 1980s. The area produces fine blue sapphires that are often lighter in tone than Ratnapura material — a delicate cornflower blue that is highly prized in the European market. Elahera is also known for producing exceptional yellow sapphires and the occasional fine pink. The geology here differs from Ratnapura; deposits are both alluvial and found in situ within the host rock, sometimes requiring harder-rock mining techniques.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="border-l-2 border-teal/30 pl-6">
                <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-2">Balangoda</h3>
                <p className="font-jost text-sm text-offwhite/50 leading-relaxed">
                  South of Ratnapura in the Sabaragamuwa Province, Balangoda produces sapphires, rubies, and garnets from alluvial deposits. The area is particularly noted for producing star sapphires of fine quality — the rutile needle inclusions that create asterism are common in stones from this region. Balangoda material tends toward deeper blue tones, and the area has historically been a source of large, specimen-grade star sapphires that find their way into museum collections and exceptional private holdings.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="border-l-2 border-teal/30 pl-6">
                <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-2">Kanthale</h3>
                <p className="font-jost text-sm text-offwhite/50 leading-relaxed">
                  In the Eastern Province, Kanthale is known primarily for aquamarine and blue topaz, though sapphires are also found. The deposits here are less extensively mined than those in the central highlands, and the area represents one of the frontiers of Sri Lankan gem exploration. Tourmaline, zircon, and moonstone are also recovered from Kanthale-area gravels, contributing to the extraordinary mineral diversity that characterises Sri Lanka&apos;s gem production.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What Makes Sri Lankan Gems Special */}
      <section className="bg-dark-card border-t border-b border-teal/10 px-6 lg:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Geology and quality</p>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-6">What makes Sri Lankan gems special</h2>
          </FadeUp>
          <FadeUp delay={0.05}>
            <div className="font-jost text-sm text-offwhite/50 leading-relaxed space-y-4">
              <p>
                Sri Lanka&apos;s gemstone wealth is a consequence of deep geological time. The island&apos;s central highlands are composed of Precambrian metamorphic rocks — the Highland Complex — formed approximately 2 billion years ago and subjected to extreme heat and pressure during the Pan-African orogeny around 550 million years ago. These conditions were ideal for crystallising corundum (sapphire and ruby), chrysoberyl, spinel, and dozens of other gem minerals within the metamorphic host rock.
              </p>
              <p>
                Over hundreds of millions of years, erosion has liberated these crystals from their host rock and concentrated them in alluvial deposits — river gravels, flood plains, and buried paleochannels. The result is the gem-bearing illam layer that miners target: a concentrated placer deposit containing an extraordinary variety of gem species in a single stratum. This alluvial concentration is why Sri Lankan gem mining is predominantly shallow pit mining rather than hard-rock extraction — the rivers have done the work of separating gem crystals from waste rock over geological time.
              </p>
              <p>
                The trace element chemistry of Sri Lankan corundum is distinctive and well-characterised by the major gemological laboratories. Ceylon sapphires typically show a specific ratio of iron, titanium, vanadium, and chromium that produces their characteristic vivid, bright blue — a colour profile that laboratories like GIA and GRS can reliably distinguish from sapphires of other origins. This chemical fingerprint is what makes <Link href="/learn/how-is-sapphire-origin-determined" className="text-teal/70 hover:text-teal transition-colors underline underline-offset-2">laboratory origin determination</Link> possible and gives &quot;Ceylon origin&quot; its commercial weight.
              </p>
              <p>
                Perhaps most significantly, Sri Lankan deposits produce a disproportionate share of the world&apos;s unheated, fine-colour sapphires. The geological conditions that formed these crystals — particularly the slow cooling rates in the Highland Complex metamorphic environment — created corundum with natural colour quality that requires no enhancement. This is the foundation of Sri Lanka&apos;s reputation: not just that it produces sapphires, but that it produces sapphires whose natural colour is already exceptional. For collectors and investors seeking certified, unheated stones with documented origin, Ceylon remains the most reliable and prolific source on earth.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Sri Lanka Guides */}
      <section className="bg-dark px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">In-depth reading</p>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-8">Sri Lanka guides</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {regionGuides.map((g, i) => (
              <FadeUp key={g.slug} delay={i * 0.07}>
                <Link href={`/learn/${g.slug}`} className="group block bg-dark-card border border-white/6 p-7 hover:border-teal/30 transition-colors h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`font-jost text-xs tracking-wider uppercase border px-2.5 py-0.5 ${categoryColour[g.category]}`}>{g.category}</span>
                  </div>
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-3 group-hover:text-teal-light transition-colors leading-snug">{g.title}</h3>
                  <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-5">{g.description}</p>
                  <span className="font-jost text-xs tracking-widest uppercase text-teal/50 group-hover:text-teal transition-colors">Read guide →</span>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.15}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link href="/how-we-source" className="group block bg-dark-card border border-white/6 p-7 hover:border-teal/30 transition-colors">
                <p className="font-jost text-xs tracking-wider uppercase text-teal/50 mb-3">From our company</p>
                <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-2 group-hover:text-teal-light transition-colors leading-snug">How we source our gemstones</h3>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed">Our direct access to Sri Lanka&apos;s mining regions and how we select stones for our clients.</p>
              </Link>
              <Link href="/gemstones/blue-sapphire" className="group block bg-dark-card border border-white/6 p-7 hover:border-teal/30 transition-colors">
                <p className="font-jost text-xs tracking-wider uppercase text-teal/50 mb-3">Our collection</p>
                <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-2 group-hover:text-teal-light transition-colors leading-snug">Ceylon blue sapphires</h3>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed">Browse our current selection of certified, unheated blue sapphires from Sri Lanka.</p>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-dark-card border-t border-teal/10 px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Coming soon</p>
            <h2 className="font-cormorant text-3xl text-offwhite mb-8">More Sri Lanka guides on the way</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {comingSoon.map((title, i) => (
              <FadeUp key={title} delay={i * 0.05}>
                <div className="flex items-start gap-4 bg-dark border border-white/4 px-5 py-4">
                  <span className="font-jost text-[10px] tracking-wider uppercase border px-2 py-0.5 shrink-0 mt-0.5 text-offwhite/50 border-white/15">Sri Lanka</span>
                  <p className="font-jost text-sm text-offwhite/40 leading-snug">{title}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-dark px-6 lg:px-10 pb-16 pt-16 border-t border-teal/10">
        <div className="max-w-5xl mx-auto">
          <SourcesReferences sources={[
            { label: 'National Gem & Jewellery Authority of Sri Lanka (NGJA)', detail: 'Sri Lankan gem industry regulation, mining oversight, and export certification', href: 'https://www.ngja.gov.lk' },
            { label: 'GIA — Gemological Institute of America', detail: 'Ceylon sapphire origin determination and gemological research', href: 'https://www.gia.edu' },
            { label: 'GRS — GemResearch Swisslab', detail: 'Origin determination and colour grading for Ceylon sapphires', href: 'https://www.gemresearch.ch' },
            { label: 'Gübelin Gem Lab', detail: 'Origin research and inclusion characteristics of Sri Lankan corundum', href: 'https://www.gubelin.com/en/gemlab' },
            { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on Sri Lankan gemstone geology and chemistry', href: 'https://www.gia.edu/gems-gemology' },
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Source your sapphire from the Island of Gems</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">
            We source directly from Sri Lanka&apos;s mining regions — Ratnapura, Elahera, and beyond. Every stone is certified by GIA or GRS with confirmed Ceylon origin.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contact" className="px-8 py-3 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors">Start a Conversation</Link>
            <Link href="/gemstones" className="px-8 py-3 border border-teal/40 text-teal-light font-jost text-sm tracking-widest uppercase hover:bg-teal hover:text-white hover:border-teal transition-all">View Collection</Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
