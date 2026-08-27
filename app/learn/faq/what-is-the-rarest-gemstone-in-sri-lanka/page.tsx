import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'

export const metadata: Metadata = {
  title: 'Rarest Gemstone in Sri Lanka',
  description:
    'The Padparadscha sapphire is Sri Lanka\'s rarest gemstone, followed by alexandrite and fine unheated rubies. Taaffeite is among Earth\'s rarest minerals.',
  openGraph: { url: 'https://www.serendibgemstones.com/learn/faq/what-is-the-rarest-gemstone-in-sri-lanka' },
  alternates: { canonical: 'https://www.serendibgemstones.com/learn/faq/what-is-the-rarest-gemstone-in-sri-lanka' },
}

const faqItems = [
  {
    q: 'How rare is a Padparadscha sapphire?',
    a: 'Extremely rare. Padparadscha sapphires represent a tiny fraction of all sapphires mined in Sri Lanka — well under one percent of total corundum production. The rarity is compounded by strict colour requirements: only stones displaying the characteristic pink-orange "lotus blossom" colour qualify, and the colour boundaries are narrow. A stone that is too pink is classified as pink sapphire; too orange, as orange sapphire. The specific combination of chromium and iron trace elements needed for the Padparadscha colour is a geological anomaly that occurs almost exclusively in Sri Lanka\'s gem gravels.',
  },
  {
    q: 'Is taaffeite found anywhere else besides Sri Lanka?',
    a: 'Yes, taaffeite (now formally known as magnesiotaaffeite) has been found in Sri Lanka, Myanmar, Tanzania, and China. However, gem-quality taaffeite of cuttable size is extraordinarily rare from any source. The mineral was first identified in 1945 by Count Edward Taaffe, who noticed it among a parcel of spinels — making it the only mineral first identified from a cut gemstone rather than a rough crystal. Fewer than a hundred gem-quality specimens are believed to exist in collections worldwide.',
  },
  {
    q: 'Why does Sri Lanka produce so many rare gemstones?',
    a: 'Sri Lanka\'s extraordinary gem diversity is the result of its complex geological history. The island\'s Highland Complex — a belt of high-grade metamorphic rocks over 500 million years old — underwent extreme heat and pressure conditions that produced a wide variety of gem minerals. These include corundum (sapphire and ruby), chrysoberyl (alexandrite and cat\'s eye), spinel, garnet, tourmaline, zircon, and many others. Subsequent erosion concentrated these gem minerals in alluvial gravel deposits, particularly around Ratnapura, Elahera, and Kanthale, creating some of the richest gem-bearing gravels on Earth.',
  },
  {
    q: 'Are Sri Lankan rubies rarer than Sri Lankan sapphires?',
    a: 'Yes, by a significant margin. While Sri Lanka is world-famous for blue sapphires, fine ruby production from the island is very limited. Sri Lankan rubies tend to be pinkish-red rather than the "pigeon blood" red associated with Burmese rubies, and finding stones with sufficient red saturation to qualify as ruby (rather than pink sapphire) is uncommon. An unheated Sri Lankan ruby of fine colour above 2 carats is genuinely rare and commands strong prices, though the market for them is less developed than for Ceylon blue sapphires.',
  },
  {
    q: 'What about alexandrite from Sri Lanka?',
    a: 'Sri Lanka produces some of the finest alexandrite in the world, and it is exceptionally rare. Alexandrite is the colour-change variety of chrysoberyl, displaying green in daylight and red-purple under incandescent light. Sri Lankan alexandrite is particularly valued for its strong, clean colour change — better than most Brazilian and Indian material. Fine Sri Lankan alexandrite above 1 carat is arguably rarer than Padparadscha sapphire and commands extremely high prices, often exceeding fine sapphire values.',
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
        { '@type': 'ListItem', position: 3, name: 'Rarest Gemstone in Sri Lanka', item: 'https://www.serendibgemstones.com/learn/faq/what-is-the-rarest-gemstone-in-sri-lanka' },
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

export default function RarestGemstoneSriLankaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 70%, rgba(201,168,76,0.35) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <nav className="flex items-center gap-2 font-jost text-xs tracking-wider uppercase text-offwhite/30 mb-8">
              <Link href="/" className="hover:text-teal/60 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-teal/60 transition-colors">Knowledge Centre</Link>
              <span>/</span>
              <span className="text-teal/60">Rare Gemstones</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">FAQ</span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              What is the rarest gemstone in Sri Lanka?
            </h1>
            <p className="font-jost text-sm text-offwhite/40">5 min read · Serendib Gemstones</p>
          </FadeUp>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="bg-dark px-6 lg:px-10 py-12">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="bg-dark-card border border-teal/20 p-6">
              <p className="font-jost text-xs tracking-[0.2em] uppercase text-teal mb-3">Quick Answer</p>
              <p className="font-cormorant text-xl text-offwhite leading-relaxed">
                The Padparadscha sapphire — a pink-orange corundum named after the lotus blossom — is Sri Lanka&apos;s rarest commercially significant gemstone. It is found almost exclusively on the island and commands extraordinary prices. Alexandrite and fine unheated rubies follow closely in rarity. Taaffeite, first identified from a Sri Lankan stone, is among the rarest minerals on Earth.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Full Answer */}
      <section className="bg-dark px-6 lg:px-10 pb-20">
        <div className="max-w-3xl mx-auto prose-gem">
          <ArticleByline updated="2026-08-12" />
          <FadeUp>
            <h2>Padparadscha sapphire: the lotus of Sri Lanka</h2>
            <p>
              The Padparadscha sapphire occupies a unique position in the gemstone world. Named from the Sinhalese word for the colour of the lotus blossom (<em>padma raga</em>), it displays a delicate blend of pink and orange that has no equivalent in any other gemstone variety. The colour is produced by a specific combination of chromium (which contributes pink) and iron (which contributes yellow-orange) in trace amounts within the corundum crystal — a combination that occurs naturally almost exclusively in Sri Lanka&apos;s gem-bearing gravels.
            </p>
            <p>
              What makes the Padparadscha genuinely rare, beyond geological scarcity, is the narrowness of the colour range that qualifies. Gemological laboratories apply strict colour boundaries: a stone that is too pink is classified as a pink sapphire; too orange, as an orange sapphire. Only the specific pink-orange blend — with neither colour dominating excessively — earns the Padparadscha designation. This means that even among the small production of pink-orange corundum from Sri Lanka, only a fraction qualifies as true Padparadscha.
            </p>
            <p>
              Furthermore, GIA requires that a sapphire must be unheated to receive the Padparadscha designation on their report. A heated stone that displays Padparadscha colour will be described as &ldquo;heated pink-orange sapphire&rdquo; rather than &ldquo;Padparadscha.&rdquo; This restriction further constrains supply and adds to the rarity. Fine Padparadscha sapphires above 5 carats are among the rarest and most valuable gemstones on Earth, regularly setting benchmark auction results at Sotheby&apos;s and Christie&apos;s.
            </p>
          </FadeUp>

          <FadeUp>
            <h2>Alexandrite: the colour-change marvel</h2>
            <p>
              Sri Lanka produces some of the world&apos;s finest alexandrite — the colour-change variety of the mineral chrysoberyl. Alexandrite appears green in daylight and shifts to red or purplish-red under incandescent light, a phenomenon caused by the way chromium-doped chrysoberyl absorbs light at different wavelengths. Fine Sri Lankan alexandrite is prized for the strength and clarity of its colour change — often superior to the more commonly available Brazilian material.
            </p>
            <p>
              Alexandrite from any source is rare, but Sri Lankan material is particularly scarce. Fine stones above 1 carat with a strong, clean colour change are encountered less frequently than Padparadscha sapphires of equivalent size. Exceptional Sri Lankan alexandrite regularly commands prices that rival or exceed fine sapphire, and museum-quality specimens sit at the very top of the coloured-gemstone market.
            </p>
          </FadeUp>

          <FadeUp>
            <h2>Unheated ruby: the overlooked rarity</h2>
            <p>
              While Sri Lanka is not typically associated with ruby, the island does produce small quantities of the red corundum variety. Sri Lankan rubies tend toward a pinkish-red hue rather than the deep &ldquo;pigeon blood&rdquo; red of the finest Burmese stones, but the best examples display a rich, vivid red that fully qualifies as ruby. Finding such stones in an unheated state, with clean clarity and above 2 carats, is genuinely rare — arguably comparable in difficulty to finding fine Padparadscha.
            </p>
            <p>
              The market for Sri Lankan rubies is less developed than for Ceylon sapphires, which means prices can occasionally represent relative value for collectors who know what they are looking at. An unheated Ceylon ruby with a GIA or GRS certificate confirming natural red colour is a stone of genuine scarcity and historical significance.
            </p>
          </FadeUp>

          <FadeUp>
            <h2>Taaffeite: the collector&apos;s unicorn</h2>
            <p>
              Taaffeite (magnesiotaaffeite-2N&apos;2S, to give its current mineralogical name) holds the distinction of being the only mineral species first identified from a faceted gemstone rather than a rough crystal. In 1945, Count Edward Taaffe of Dublin noticed that a stone in a parcel of Sri Lankan spinels showed double refraction — a property that spinel, being cubic, should not display. Laboratory analysis confirmed it as a previously unknown mineral.
            </p>
            <p>
              Gem-quality taaffeite of cuttable size remains extraordinarily rare. Fewer than a hundred faceted specimens are believed to exist worldwide, and most are small — under 1 carat. While it is not a gemstone most buyers will encounter, its association with Sri Lanka underscores the island&apos;s remarkable mineralogical diversity. For collectors of rare minerals, a faceted Sri Lankan taaffeite is among the most coveted possessions in the field.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Related Questions */}
      <section className="bg-dark-card py-20 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-10">Related questions</h2>
          </FadeUp>
          <div className="space-y-1 border-t border-white/6">
            {faqItems.map((f, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <details className="faq-item border-b border-white/6">
                  <summary>{f.q}</summary>
                  <div className="faq-answer">{f.a}</div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="bg-dark py-16 px-6 lg:px-10 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-2xl text-offwhite font-semibold mb-8">Related guides</h2>
            <div className="grid gap-4">
              <Link href="/learn/what-is-padparadscha-sapphire" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">What Is a Padparadscha Sapphire?</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">The rarest sapphire variety, named for the lotus blossom — and Sri Lanka is its most celebrated source.</p>
              </Link>
              <Link href="/gemstones/padparadscha-sapphire" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">Padparadscha Sapphire — Gemstone Guide</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">Colour science, origin, certification, and value of the world&apos;s rarest sapphire variety.</p>
              </Link>
              <Link href="/gemstones/ruby" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">Ruby — Gemstone Guide</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">The king of red gemstones and sapphire&apos;s sibling in the corundum family.</p>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Access rare Ceylon gemstones</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">
            From Padparadscha sapphires to fine unheated rubies — sourced mine-direct from Sri Lanka and certified by GIA or GRS.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/gemstones" className="px-8 py-3 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors">Our Collection</Link>
            <Link href="/contact" className="px-8 py-3 border border-teal/40 text-teal-light font-jost text-sm tracking-widest uppercase hover:bg-teal hover:text-white hover:border-teal transition-all">Enquire</Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
