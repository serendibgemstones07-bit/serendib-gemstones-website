import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'Gemstone Treatments — Heat Treatment, Enhancement & What \'No Heat\' Means',
  description: 'Expert guide to gemstone treatments: heat treatment, beryllium diffusion, lead-glass filling, flux healing, and oiling. Learn what "no heat" means, how labs detect treatments, and why it matters for value.',
  alternates: { canonical: 'https://serendibgemstones.com/learn/treatments' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'Treatments & Enhancements', item: 'https://serendibgemstones.com/learn/treatments' },
      ],
    },
    {
      '@type': 'CollectionPage',
      name: 'Gemstone Treatments — Heat Treatment, Enhancement & What \'No Heat\' Means',
      description: 'Expert guide to gemstone treatments: heat treatment, beryllium diffusion, lead-glass filling, flux healing, and oiling. Understand what each treatment does, how it is detected, and how it affects value.',
      url: 'https://serendibgemstones.com/learn/treatments',
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones' },
    },
  ],
}

const treatments = [
  {
    name: 'Heat Treatment',
    prevalence: 'Extremely common — over 95% of sapphires',
    description: 'The most widespread enhancement in the coloured stone trade. Rough sapphire is heated to between 1,200 and 1,800 degrees Celsius, causing trace elements to migrate within the crystal lattice and rutile silk to dissolve. The result is improved colour saturation and clarity. Heat treatment is permanent, stable, and considered an accepted trade practice — but it must be disclosed, and unheated stones command a significant premium.',
    impact: 'Reduces value by 2 to 5 times compared to an equivalent unheated stone.',
  },
  {
    name: 'Beryllium Diffusion',
    prevalence: 'Moderate — particularly in yellow and orange sapphires',
    description: 'A more aggressive form of heat treatment in which beryllium is introduced into the furnace atmosphere. The beryllium atoms diffuse into the crystal lattice, creating or intensifying yellow, orange, and padparadscha-like colours that were not present in the original rough. Unlike standard heating, beryllium diffusion can create colours that the stone never possessed naturally.',
    impact: 'Dramatically reduces value. Beryllium-diffused stones are worth a fraction of naturally coloured equivalents.',
  },
  {
    name: 'Lead-Glass Filling',
    prevalence: 'Common in low-grade ruby',
    description: 'Heavily fractured, near-opaque ruby is filled with high-refractive-index lead glass to improve transparency and apparent colour. The glass fills fractures and cavities, creating the illusion of a clean, transparent stone. This treatment is not stable — the glass can deteriorate with exposure to acids, heat, and even household chemicals. Lead-glass-filled rubies are not considered genuine gemstones by most reputable dealers.',
    impact: 'Stones are effectively worthless as natural gems. Must be disclosed as composite material.',
  },
  {
    name: 'Flux Healing',
    prevalence: 'Occasional — primarily in ruby and some sapphires',
    description: 'During high-temperature heating, a flux (typically borax) is added to the furnace. The flux dissolves into surface-reaching fractures and, as the stone cools, recrystallises as synthetic corundum within those fractures — effectively "healing" them. The result is a stone with improved clarity, but one that now contains small amounts of synthetic material along its former fracture planes.',
    impact: 'Significant value reduction. Flux residues are a diagnostic marker that laboratories specifically report.',
  },
  {
    name: 'Oiling & Resin Filling',
    prevalence: 'Standard practice for emeralds; occasional in other stones',
    description: 'Oil or resin is introduced into surface-reaching fractures to reduce their visibility and improve apparent clarity. This is the traditional treatment for emerald and is considered an accepted trade practice for that gem species. In sapphires and rubies, oiling is far less common and is generally viewed less favourably. The treatment is not permanent — oil can dry out or be removed by cleaning.',
    impact: 'Accepted for emeralds when disclosed; viewed negatively in corundum and reduces value accordingly.',
  },
]

const guides = [
  {
    slug: 'what-is-an-unheated-sapphire',
    title: 'What is an unheated sapphire?',
    description: 'Over 95% of commercial sapphires are heat-treated. An unheated stone is the rare exception — here is why that matters for buyers and investors.',
    readTime: '5 min',
    category: 'Sapphires',
    categoryStyle: 'text-teal/70 border-teal/25',
  },
  {
    slug: 'what-does-no-heat-mean-on-certificate',
    title: 'What does "no heat" mean on a gem certificate?',
    description: 'The single most commercially significant statement on a coloured stone report — what it means, how labs determine it, and why it matters.',
    readTime: '4 min',
    category: 'Certification',
    categoryStyle: 'text-purple-mid/80 border-purple-mid/30',
  },
  {
    slug: 'are-unheated-sapphires-worth-more',
    title: 'Are unheated sapphires worth more?',
    description: 'Yes — by 2 to 5 times a comparable heated stone, and more at auction. Here is the market data and the structural reasons the premium holds.',
    readTime: '4 min',
    category: 'Buying',
    categoryStyle: 'text-offwhite/50 border-white/15',
  },
]

const coming = [
  'How to detect heated sapphires — what laboratories look for',
  'Treatment disclosure requirements — trade standards and legal obligations',
  'Beryllium diffusion explained — the treatment that changed the sapphire market',
  'Heat treatment vs no heat — a visual comparison guide',
]

export default function TreatmentsHubPage() {
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
              <span className="text-teal/60">Treatments</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">
              Topic Hub
            </span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              Treatments &amp; Enhancements
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl leading-relaxed">
              Over 95% of the sapphires sold commercially have been heat-treated to improve their colour and clarity. Understanding what treatments exist, how they are detected, and how they affect value is not optional knowledge for any serious buyer — it is the foundation of an informed purchase. This hub covers every major treatment applied to coloured gemstones, from the universally accepted to the deeply problematic.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Why Treatments Matter */}
      <section className="bg-dark-card border-y border-teal/10 px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-4">Context</p>
                <h2 className="font-cormorant text-3xl text-offwhite mb-5">Why treatments matter</h2>
                <div className="font-jost text-sm text-offwhite/50 leading-relaxed space-y-4">
                  <p>
                    The coloured gemstone market operates on a principle that is deceptively simple: a stone&apos;s value is determined by its beauty, rarity, and the degree to which that beauty is natural. Two sapphires that look identical to the naked eye can differ in value by a factor of five or more based solely on whether one has been heated and the other has not.
                  </p>
                  <p>
                    This is not arbitrary. An unheated sapphire that displays fine colour achieved its appearance through millions of years of geological process — the precise balance of trace elements, temperature, and pressure required to produce saturated colour without human intervention. That geological rarity is what the market values, and what a laboratory report confirms.
                  </p>
                  <p>
                    For buyers, understanding treatment is the single most important factor in making a sound purchase. For investors, it determines whether a stone will hold and grow in value over decades. For jewellers, it is a matter of professional integrity and legal compliance.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2 flex items-center justify-center border border-teal/10 min-h-[160px]">
                <div className="text-center px-6">
                  <p className="font-cormorant text-6xl text-teal/15 font-light leading-none mb-2">95%</p>
                  <p className="font-jost text-xs text-offwhite/25 leading-relaxed">of sapphires on the market have been heat-treated to improve appearance</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Understanding Treatments */}
      <section className="bg-dark px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-10">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-2">Reference</p>
            <h2 className="font-cormorant text-3xl text-offwhite mb-4">Understanding treatments</h2>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl leading-relaxed">
              Each treatment has different implications for durability, disclosure, and market value. Here is what every buyer should know about the five most common enhancements encountered in coloured gemstones.
            </p>
          </FadeUp>
          <div className="space-y-5">
            {treatments.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.06}>
                <div className="bg-dark-card border border-white/6 p-7">
                  <div className="flex items-start gap-4 flex-wrap mb-3">
                    <h3 className="font-cormorant text-xl text-offwhite font-semibold">{t.name}</h3>
                    <span className="font-jost text-[10px] tracking-wider uppercase border text-offwhite/40 border-white/10 px-2.5 py-0.5">{t.prevalence}</span>
                  </div>
                  <p className="font-jost text-sm text-offwhite/45 leading-relaxed mb-3">{t.description}</p>
                  <p className="font-jost text-xs text-teal/60 leading-relaxed">
                    <span className="font-semibold uppercase tracking-wider">Value impact:</span> {t.impact}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.35}>
            <div className="mt-8 border-l-2 border-teal/30 pl-6">
              <p className="font-jost text-sm text-offwhite/50 leading-relaxed">
                We verify the treatment status of every stone in our collection through independent laboratory testing. To learn more about our verification process, see our <Link href="/how-we-verify" className="text-teal/70 hover:text-teal transition-colors underline underline-offset-2">verification standards</Link>.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Treatment Guides */}
      <section className="bg-dark-card border-y border-teal/10 px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-10">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-2">Guides</p>
            <h2 className="font-cormorant text-3xl text-offwhite">Treatment guides</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {guides.map((g, i) => (
              <FadeUp key={g.slug} delay={i * 0.07}>
                <Link href={`/learn/${g.slug}`} className="group block bg-dark border border-white/6 p-7 hover:border-teal/30 transition-colors h-full">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className={`font-jost text-xs tracking-wider uppercase border px-2.5 py-0.5 ${g.categoryStyle}`}>{g.category}</span>
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
            <h2 className="font-cormorant text-3xl text-offwhite">More treatment guides on the way</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {coming.map((c, i) => (
              <FadeUp key={c} delay={i * 0.05}>
                <div className="flex items-center gap-4 bg-dark-card border border-white/4 px-5 py-4">
                  <span className="font-jost text-[10px] tracking-wider uppercase border text-offwhite/40 border-white/10 px-2 py-0.5 shrink-0">Treatments</span>
                  <p className="font-jost text-sm text-offwhite/40 leading-snug">{c}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Only certified, fully disclosed stones</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">
            Every stone in our collection carries a current GIA or GRS report with full treatment disclosure. No surprises, no ambiguity — just verified gemstones from a trusted source.
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
