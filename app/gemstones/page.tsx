import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'

export const metadata: Metadata = {
  title: 'Gemstone Library — Ceylon Gem Guides',
  description: 'Guides to every gemstone Sri Lanka produces — blue sapphire, padparadscha, ruby, alexandrite, spinel and more. What to look for and what makes each valuable.',
  openGraph: { url: 'https://www.serendibgemstones.com/gemstones' },
  alternates: { canonical: 'https://www.serendibgemstones.com/gemstones' },
}

const featuredGuides = [
  {
    href: '/gemstones/blue-sapphire',
    title: 'Blue Sapphire',
    subtitle: 'The Complete Guide to Ceylon Blue Sapphires',
    badge: 'Most Popular',
    colour: '#1a5f9e',
    description: 'Everything you need to know about blue sapphires — colour grades, origins, heated vs unheated, investment value, and how to buy with confidence.',
    stats: [
      { label: 'Mineral', value: 'Corundum' },
      { label: 'Hardness', value: '9 / 10' },
      { label: 'Top Origin', value: 'Sri Lanka' },
    ],
  },
  {
    href: '/gemstones/padparadscha-sapphire',
    title: 'Padparadscha Sapphire',
    subtitle: 'The Complete Guide to the Rarest Sapphire',
    badge: 'Rarest',
    colour: '#e8855e',
    description: 'The pink-orange sapphire that defies definition. Explore the colour debate, why Sri Lanka is the original source, and why collectors pay record prices.',
    stats: [
      { label: 'Mineral', value: 'Corundum' },
      { label: 'Rarity', value: 'Extremely Rare' },
      { label: 'Origin', value: 'Sri Lanka' },
    ],
  },
  {
    href: '/gemstones/ruby',
    title: 'Ruby',
    subtitle: 'The Complete Guide to Natural & Ceylon Rubies',
    badge: 'The King',
    colour: '#c0392b',
    description: 'The king of gemstones. Learn about pigeon blood colour, the lead-glass filling epidemic, investment performance, and why Sri Lankan rubies are prized for fluorescence.',
    stats: [
      { label: 'Mineral', value: 'Corundum' },
      { label: 'Hardness', value: '9 / 10' },
      { label: 'Record', value: 'Sunrise Ruby' },
    ],
  },
  {
    href: '/gemstones/yellow-sapphire',
    title: 'Yellow Sapphire',
    subtitle: 'The Complete Guide to Ceylon Yellow Sapphires',
    badge: 'Pukhraj',
    colour: '#d4af37',
    description: 'The sacred Pukhraj of Vedic astrology and the world\'s benchmark yellow sapphire. Sri Lanka dominates the top of the market — learn about colour, treatments, beryllium diffusion, and Pukhraj criteria.',
    stats: [
      { label: 'Mineral', value: 'Corundum' },
      { label: 'Hardness', value: '9 / 10' },
      { label: 'Vedic Name', value: 'Pukhraj' },
    ],
  },
  {
    href: '/gemstones/pink-sapphire',
    title: 'Pink Sapphire',
    subtitle: 'The Complete Guide to Ceylon Pink Sapphires',
    badge: 'Rising Star',
    colour: '#d46b9a',
    description: 'The romantic corundum, coloured pink by chromium. Ceylon pinks range from delicate baby pink to vivid hot pink — and sit on the famous pink/ruby debate. Learn about the classification boundary, colour range, treatments, and why pink sapphire engagement rings are surging.',
    stats: [
      { label: 'Mineral', value: 'Corundum' },
      { label: 'Hardness', value: '9 / 10' },
      { label: 'Origin', value: 'Sri Lanka' },
    ],
  },
  {
    href: '/gemstones/star-sapphire',
    title: 'Star Sapphire',
    subtitle: 'The Complete Guide to Ceylon Star Sapphires',
    badge: 'Asterism',
    colour: '#3a6fa8',
    description: 'A cabochon-cut sapphire displaying a six-rayed star of light gliding across its dome. Sri Lanka dominates the category — home of the Star of India, Star of Bombay, and Star of Adam. Learn about asterism, star quality, diffusion, and famous stones.',
    stats: [
      { label: 'Mineral', value: 'Corundum' },
      { label: 'Effect', value: 'Asterism' },
      { label: 'Top Origin', value: 'Sri Lanka' },
    ],
  },
  {
    href: '/gemstones/spinel',
    title: 'Spinel',
    subtitle: 'The Complete Guide to Ceylon & World Spinels',
    badge: 'Rediscovered',
    colour: '#c0392b',
    description: 'Historically mistaken for ruby — the Black Prince\'s Ruby and Timur Ruby are both spinels. A distinct mineral, almost always untreated. Sri Lanka produces red, pink, purple, and rare cobalt-blue spinel across the full colour range.',
    stats: [
      { label: 'Mineral', value: 'Spinel' },
      { label: 'Hardness', value: '8 / 10' },
      { label: 'Treatment', value: 'None (typical)' },
    ],
  },
]

const upcomingGuides = [
  { name: 'Alexandrite', family: 'Chrysoberyl', colour: '#2e8b57' },
  { name: "Cat's Eye", family: 'Chrysoberyl', colour: '#b8860b' },
  { name: 'Hessonite Garnet', family: 'Garnet', colour: '#c0712b' },
  { name: 'Blue Zircon', family: 'Zircon', colour: '#5eb8d4' },
  { name: 'Star Ruby', family: 'Corundum', colour: '#a93226' },
  { name: 'White Sapphire', family: 'Corundum', colour: '#c8c8c8' },
  { name: 'Green Sapphire', family: 'Corundum', colour: '#2d6a4f' },
  { name: 'Colour-Change Sapphire', family: 'Corundum', colour: '#6b5b95' },
]

export default function GemstonesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Gemstone Library — Complete Guides to Ceylon Gemstones',
            description: 'Comprehensive guides to every gemstone Sri Lanka produces.',
            url: 'https://www.serendibgemstones.com/gemstones',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: featuredGuides.map((g, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `https://www.serendibgemstones.com${g.href}`,
                name: g.title,
              })),
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,168,76,0.3) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Gemstone Library</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight mb-6">
              Know Your Gemstones
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl mx-auto leading-relaxed">
              Comprehensive, expert-written guides to every gemstone Sri Lanka produces. What to look for, what to avoid, and what makes each stone valuable — written by people who handle these gems every day.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="bg-dark px-6 lg:px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Featured Guides</p>
            <h2 className="font-cormorant text-3xl sm:text-4xl text-offwhite font-semibold text-center mb-14">
              In-Depth Gemstone Guides
            </h2>
          </FadeUp>

          <div className="space-y-6">
            {featuredGuides.map((guide, i) => (
              <FadeUp key={guide.href} delay={i * 0.08}>
                <Link href={guide.href} className="group block">
                  <div className="border border-white/6 bg-dark-card hover:border-teal/25 transition-all duration-300 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                      {/* Gem visual */}
                      <div
                        className="relative flex items-center justify-center py-14 lg:py-0 lg:w-64 lg:min-h-[240px] shrink-0"
                        style={{ background: `radial-gradient(ellipse at center, ${guide.colour}20 0%, transparent 70%)` }}
                      >
                        <div className="group-hover:scale-110 transition-transform duration-500">
                          <GemSVG colour={guide.colour} size={100} />
                        </div>
                        <span className="absolute top-4 left-4 px-3 py-1 bg-teal/15 border border-teal/25 font-jost text-[10px] tracking-widest uppercase text-teal">
                          {guide.badge}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-8 sm:p-10">
                        <h3 className="font-cormorant text-2xl sm:text-3xl text-offwhite font-semibold mb-1 group-hover:text-teal-light transition-colors">
                          {guide.title}
                        </h3>
                        <p className="font-jost text-xs text-offwhite/35 tracking-wide mb-4">{guide.subtitle}</p>
                        <p className="font-jost text-sm text-offwhite/55 leading-relaxed mb-6">{guide.description}</p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-6 mb-6">
                          {guide.stats.map((stat) => (
                            <div key={stat.label}>
                              <p className="font-jost text-[10px] uppercase tracking-widest text-offwhite/30 mb-0.5">{stat.label}</p>
                              <p className="font-cormorant text-lg text-offwhite/80 font-semibold">{stat.value}</p>
                            </div>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-2 font-jost text-xs tracking-widest uppercase text-teal group-hover:text-teal-light transition-colors">
                          Read full guide
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* All Species */}
      <section className="bg-dark-card px-6 lg:px-10 py-20 border-t border-teal/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Coming Soon</p>
            <h2 className="font-cormorant text-3xl sm:text-4xl text-offwhite font-semibold text-center mb-4">
              More Guides in Development
            </h2>
            <p className="font-jost text-sm text-offwhite/45 text-center max-w-xl mx-auto leading-relaxed mb-14">
              We&apos;re building comprehensive guides for every gemstone species found in Sri Lanka. Subscribe to be notified when new guides go live.
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {upcomingGuides.map((gem, i) => (
              <FadeUp key={gem.name} delay={i * 0.04}>
                <div className="flex flex-col items-center gap-3 p-6 bg-dark border border-white/6 text-center opacity-70">
                  <GemSVG colour={gem.colour} size={48} />
                  <div>
                    <p className="font-cormorant text-sm font-semibold text-offwhite leading-snug">{gem.name}</p>
                    <p className="font-jost text-[10px] text-offwhite/30 tracking-wide mt-0.5">{gem.family}</p>
                  </div>
                  <span className="font-jost text-[9px] tracking-widest uppercase text-offwhite/20">Guide coming</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-20 px-6 text-center border-t border-teal/10">
        <FadeUp>
          <p className="font-cormorant italic text-2xl text-offwhite/60 mb-4">
            Looking for a specific stone?
          </p>
          <p className="font-jost text-sm text-offwhite/45 mb-8 max-w-lg mx-auto leading-relaxed">
            Our collection includes gemstones beyond what&apos;s listed here. Tell us what you&apos;re looking for — species, colour, carat weight, budget — and we&apos;ll source it directly from Sri Lanka.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Start a Conversation
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
