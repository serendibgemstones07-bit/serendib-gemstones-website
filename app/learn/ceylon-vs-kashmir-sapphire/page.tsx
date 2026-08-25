import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Ceylon vs Kashmir Sapphire: What\'s the Difference? — Serendib Gemstones',
  description: 'Kashmir and Ceylon (Sri Lanka) are the two most prestigious sapphire origins. Kashmir stones — mined briefly in the 1880s — are now virtually unobtainable and command record auction prices. Ceylon sapphires represent the finest accessible alternative.',
}

const faqItems = [
  {
    q: 'Why are Kashmir sapphires so expensive?',
    a: 'Kashmir sapphires command extraordinary prices because supply is completely exhausted. The primary deposit in the Zanskar Range was discovered in 1881 after a landslide exposed the gem-bearing rock, mined intensively for roughly two decades, and then largely depleted. No significant new production has emerged since approximately 1930. Every Kashmir sapphire on the market today is a secondary-market stone with a fixed, finite total supply — and collector demand has only grown.',
  },
  {
    q: 'Can I still buy a Kashmir sapphire today?',
    a: 'Occasionally, yes — but they appear almost exclusively at major international auction houses (Sotheby\'s, Christie\'s, Bonhams) or through a small number of specialist dealers. Certified fine examples above 3 carats sit at the very top of the sapphire market and are among the most expensive coloured gemstones on earth. Laboratory-confirmed Kashmir origin from Gübelin, SSEF, or GRS is essential — the premium depends entirely on it.',
  },
  {
    q: 'How do I know if a sapphire is from Ceylon or Kashmir?',
    a: 'Origin determination requires analysis by an accredited gemological laboratory. GIA, GRS, Gübelin, and SSEF can assess origin based on trace element chemistry and inclusion characteristics. Ceylon sapphires have a well-understood chemical fingerprint from decades of laboratory analysis. Kashmir sapphires have equally well-documented characteristics — but because the supply is exhausted, every stone claiming Kashmir origin must be verified by laboratory report before any premium is paid.',
  },
  {
    q: 'Is a Ceylon sapphire as good as a Kashmir sapphire in terms of quality?',
    a: 'In terms of inherent gem quality — colour, clarity, transparency — the finest Ceylon sapphires are comparable to the finest Kashmir examples. Both origins produce vivid, velvety blue sapphires of exceptional beauty. The Kashmir premium is primarily a function of rarity and historical prestige rather than a categorical quality difference. Many Ceylon sapphires of fine colour and no-heat status rival Kashmir stones visually; their advantage is that they can actually be sourced.',
  },
  {
    q: 'What colour are Kashmir sapphires compared to Ceylon sapphires?',
    a: 'Kashmir sapphires are renowned for a particular "velvety" or "sleepy" quality of blue — a soft, cornflower blue with a subtle haze caused by microscopic inclusion scattering that gives the colour an almost powdery, non-reflective depth. Fine Ceylon sapphires also produce vivid cornflower blues, often with greater transparency and brightness. The Kashmir "velvety" quality is considered unique and is one of the defining characteristics that labs use to identify Kashmir origin.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://www.serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'Ceylon vs Kashmir Sapphire', item: 'https://www.serendibgemstones.com/learn/ceylon-vs-kashmir-sapphire' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Ceylon vs Kashmir Sapphire: What\'s the Difference?',
      description: 'Kashmir and Ceylon are the two most prestigious sapphire origins. This guide explains their colour differences, market position, and why Ceylon remains the finest accessible option.',
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://www.serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones' },
      datePublished: '2026-07-30',
      dateModified: '2026-08-12',
      url: 'https://www.serendibgemstones.com/learn/ceylon-vs-kashmir-sapphire',
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

export default function CeylonVsKashmirPage() {
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
              <span className="text-teal/60">Ceylon vs Kashmir</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">Sapphires</span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              Ceylon vs Kashmir sapphire — what is the difference?
            </h1>
            <p className="font-jost text-sm text-offwhite/40">5 min read · Serendib Gemstones</p>
            <ArticleByline updated="2026-08-12" reviewer="Thusira Ranasinghe" />
          </FadeUp>
        </div>
      </section>

      <section className="bg-warm px-6 lg:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-2 border-teal pl-6 mb-12">
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-teal mb-2">Summary</p>
            <p className="font-cormorant text-xl text-dark leading-relaxed">
              Ceylon (Sri Lanka) and Kashmir are the two most prestigious origins for blue sapphires in the world. Kashmir stones — mined from a remote Himalayan valley between 1881 and approximately 1930 — are now virtually impossible to source and sit at the very top of the sapphire market when fine examples appear at auction. Ceylon sapphires, equally celebrated for their vivid cornflower blue, remain available from active mines and represent the pre-eminent accessible option for serious collectors and investors.
            </p>
          </div>

          <div className="font-jost text-sm text-dark/70 leading-relaxed space-y-8">
            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">The Kashmir story</h2>
              <p>In 1881, a landslide in the Zanskar Range of the western Himalayas — in what is now the Indian state of Jammu &amp; Kashmir — exposed a deposit of blue sapphire-bearing rock at an altitude of approximately 4,500 metres. The stones that emerged from the rubble were unlike anything the gem trade had seen: a soft, intensely blue corundum with a quality of colour that was immediately recognised as exceptional.</p>
              <p className="mt-4">Mining continued under various operators through the 1880s and 1890s, but the deposit was small and the terrain brutal. By around 1930, meaningful production had largely ceased. In the century since, occasional finds have been reported but no new deposit has emerged to provide significant supply. The total quantity of Kashmir sapphire ever mined is finite and fixed — every stone that exists today was found over a period of roughly forty years more than a century ago.</p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">The Kashmir colour</h2>
              <p>Kashmir sapphires are defined by a specific colour character that gemologists and collectors describe as &ldquo;velvety&rdquo; or &ldquo;sleepy.&rdquo; The blue is a soft, medium-toned cornflower — neither too dark nor too pale — with a subtle haziness caused by microscopic fluid and crystal inclusions that scatter the light and give the colour a diffused, almost powdery depth. This quality is distinct from the brilliance of a fine Ceylon sapphire or the intensity of a Burmese stone.</p>
              <p className="mt-4">The velvety character is so consistent among Kashmir sapphires that it has become a diagnostic feature — laboratories use it alongside chemical analysis to confirm origin. It is also the source of the origin&apos;s extraordinary prestige: the colour is genuinely beautiful in a way that resists easy comparison.</p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Ceylon today</h2>
              <p><Link href="/ceylon-sapphires" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">Ceylon sapphires</Link> — the trade name for sapphires from <Link href="/learn/sri-lanka" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">Sri Lanka</Link>, derived from the island&apos;s former name — have been mined continuously for over two millennia. The gem fields of Ratnapura, Elahera, Eheliyagoda, and Beruwala remain active, producing <Link href="/gemstones/blue-sapphire" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">blue sapphires</Link> across a wide range of colours. The finest Ceylon blues display a vivid, bright cornflower blue with excellent transparency — a colour character that is distinct from Kashmir&apos;s velvety quality but equally celebrated in its own right.</p>
              <p className="mt-4">Ceylon origin commands a significant premium over other sapphire sources for fine material. Combined with <Link href="/learn/what-does-no-heat-mean-on-certificate" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">no-heat certification</Link>, a fine <Link href="/learn/what-is-an-unheated-sapphire" className="text-teal hover:text-teal-light underline underline-offset-2 decoration-teal/40">unheated Ceylon sapphire</Link> is among the most sought-after coloured stone investments available.</p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl text-dark font-semibold mb-4">Price comparison</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-dark/15">
                      <th className="text-left py-3 pr-6 font-semibold text-dark/80"></th>
                      <th className="text-left py-3 pr-6 font-semibold text-dark/80">Kashmir</th>
                      <th className="text-left py-3 font-semibold text-dark/80">Ceylon</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark/8">
                    {[
                      ['Supply', 'Exhausted c.1930', 'Active mines, ongoing production'],
                      ['Availability', 'Auction only', 'Mine-direct & dealer market'],
                      ['Certificate required', 'Gübelin / SSEF / GRS', 'GIA / GRS'],
                      ['Investment case', 'Ultra-rare, illiquid', 'Rare, liquid collector market'],
                    ].map(([label, kashmir, ceylon]) => (
                      <tr key={label}>
                        <td className="py-3 pr-6 text-dark/60 font-medium">{label}</td>
                        <td className="py-3 pr-6 text-dark/70">{kashmir}</td>
                        <td className="py-3 text-dark/70">{ceylon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
            { label: 'GIA — Gemological Institute of America', detail: 'Sapphire identification, treatment disclosure, and origin reports', href: 'https://www.gia.edu' },
            { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and origin determination for blue sapphires', href: 'https://www.gemresearch.ch' },
            { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and Kashmir/Ceylon origin determination', href: 'https://www.ssef.ch' },
            { label: 'Gübelin Gem Lab', detail: 'Historic authority on Kashmir sapphire inclusion characteristics and origin', href: 'https://www.gubelin.com/en/gemlab' },
            { label: 'National Gem & Jewellery Authority of Sri Lanka (NGJA)', detail: 'Sri Lankan gem industry regulation and export certification', href: 'https://www.ngja.gov.lk' },
            { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on Kashmir and Ceylon sapphire chemistry and inclusions', href: 'https://www.gia.edu/gems-gemology' },
          ]} />
        </div>
      </section>

      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Mine-direct Ceylon sapphires</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">Every stone in our collection is sourced from Sri Lanka&apos;s active gem fields and certified by GIA or GRS with full origin documentation.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/gemstones" className="px-8 py-3 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors">Our Collection</Link>
            <Link href="/contact" className="px-8 py-3 border border-teal/40 text-teal-light font-jost text-sm tracking-widest uppercase hover:bg-teal hover:text-white hover:border-teal transition-all">Enquire</Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
