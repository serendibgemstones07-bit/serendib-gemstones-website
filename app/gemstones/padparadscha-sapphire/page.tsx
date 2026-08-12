import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Padparadscha Sapphire — The Complete Guide to the Rarest Sapphire',
  description:
    'A padparadscha sapphire is an extremely rare pink-orange variety of corundum, named after the Sri Lankan lotus blossom. Discover why Ceylon padparadschas are the most sought-after coloured sapphires in the world — covering colour standards, origins, treatments, investment value, and buying advice.',
  alternates: { canonical: 'https://serendibgemstones.com/gemstones/padparadscha-sapphire' },
}

const faqItems = [
  {
    q: 'What exactly is a padparadscha sapphire?',
    a: 'A padparadscha sapphire is an extremely rare variety of corundum (aluminium oxide) that displays a delicate blend of pink and orange hues, reminiscent of the Sri Lankan lotus blossom (Nelumbo nucifera) from which it takes its name. It is classified as a "fancy sapphire" and is widely regarded as the rarest and most valuable sapphire variety after top-quality Kashmir blue sapphires.',
  },
  {
    q: 'Why are padparadscha sapphires so expensive?',
    a: 'Padparadscha sapphires are expensive because of extreme rarity. The precise combination of pink and orange required to qualify as a padparadscha occurs in only a tiny fraction of corundum production worldwide. Fine unheated padparadschas from Sri Lanka above 2 carats are so scarce that many experienced gem dealers go years without encountering one. Top-quality unheated Ceylon padparadschas sit at the very top of the coloured-gemstone market and regularly set record prices at major auctions.',
  },
  {
    q: 'What colour should a padparadscha sapphire be?',
    a: 'A padparadscha should display a harmonious blend of pink and orange, often described as a "sunset" or "lotus blossom" colour. Neither the pink nor the orange component should overwhelmingly dominate. The most prized stones show a delicate balance where both hues are clearly visible, with medium tone and vivid saturation. Stones that are too pink are reclassified as pink sapphires; those too orange become orange sapphires.',
  },
  {
    q: 'Do all gemological laboratories agree on what qualifies as padparadscha?',
    a: 'No. There is no universal, standardised definition. GRS (GemResearch SwissLab) tends to apply the term more broadly, accepting stones with a wider range of pink-to-orange ratios. GIA (Gemological Institute of America) historically applies a narrower definition, requiring a more balanced pink-orange blend. Gubelin and SSEF also have their own criteria. This means a stone certified as "padparadscha" by one laboratory may not receive that designation from another — a fact buyers should understand before purchasing.',
  },
  {
    q: 'Where do the best padparadscha sapphires come from?',
    a: 'Sri Lanka (Ceylon) is the original and most celebrated source of padparadscha sapphires. The island has produced these gems for centuries, and "Ceylon padparadscha" remains the benchmark against which all others are measured. Madagascar has emerged as an important secondary source since the early 2000s, producing stones that can rival Sri Lankan material. Tanzania produces occasional padparadschas as well, though in smaller quantities.',
  },
  {
    q: 'Are padparadscha sapphires a good investment?',
    a: 'Fine padparadscha sapphires — particularly unheated Ceylon stones with balanced colour, clean clarity, and credible laboratory certification — are among the most investment-worthy coloured gemstones. Their extreme rarity, combined with growing global demand and diminishing supply from traditional Sri Lankan deposits, creates strong long-term value fundamentals. However, the narrow colour definition means only stones that clearly qualify as padparadscha (not borderline pink or orange sapphires) will hold their premium over time.',
  },
  {
    q: 'How can I tell if a padparadscha sapphire is heated or unheated?',
    a: 'You cannot reliably determine treatment status by visual inspection alone. Only an accredited gemological laboratory (GIA, GRS, Gubelin, SSEF) can confirm whether a padparadscha has been heated by examining microscopic features such as altered inclusions, dissolved rutile silk, and stress fractures around crystal inclusions. Always insist on a laboratory report for any significant padparadscha purchase.',
  },
  {
    q: 'How much more valuable is an unheated padparadscha?',
    a: 'Unheated padparadscha sapphires command a very significant premium over comparable heated stones — typically even higher than the unheated premium for blue sapphires. This is because the natural occurrence of the precise pink-orange colour without heat enhancement is extraordinarily rare. At auction, unheated Ceylon padparadschas have achieved some of the highest prices of any coloured gemstone.',
  },
  {
    q: 'What is Princess Eugenie\'s padparadscha ring?',
    a: 'In October 2018, Princess Eugenie of York received an engagement ring featuring a padparadscha sapphire surrounded by diamonds, designed by Zarkdera. The ring brought global attention to this previously lesser-known gemstone variety, significantly increasing public awareness and market demand for padparadschas. The stone is believed to be approximately 3-4 carats.',
  },
  {
    q: 'Can padparadscha sapphires be lab-created?',
    a: 'Yes. Synthetic padparadscha sapphires can be produced by flame fusion and other methods, with identical chemical composition to natural stones. However, they have no rarity value and are worth a tiny fraction of natural padparadschas. A credible laboratory report from GIA or GRS will confirm whether a stone is natural or synthetic. Given the high value of natural padparadschas, laboratory verification is essential.',
  },
  {
    q: 'What size padparadscha sapphire should I buy?',
    a: 'For jewellery, padparadschas in the 1-3 carat range offer the best balance of visual impact and availability. For investment, stones above 2 carats with fine colour and unheated status are the most sought-after. Padparadschas above 5 carats with top colour are genuinely museum-quality rarities. Unlike blue sapphires, which are commonly available in larger sizes, fine padparadschas become exponentially rarer and more valuable above 3 carats.',
  },
  {
    q: 'How should I care for a padparadscha sapphire?',
    a: 'Padparadscha sapphires have the same hardness as all corundum — 9 on the Mohs scale — making them extremely durable. Clean with warm soapy water and a soft brush. Avoid ultrasonic cleaners for stones with visible inclusions or fracture fillings. Store separately from softer gems. With basic care, a padparadscha sapphire will last generations without any deterioration in beauty.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Gemstones', item: 'https://serendibgemstones.com/gemstones' },
        { '@type': 'ListItem', position: 3, name: 'Padparadscha Sapphire', item: 'https://serendibgemstones.com/gemstones/padparadscha-sapphire' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Padparadscha Sapphire — The Complete Guide to the Rarest Sapphire',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-07-31',
      dateModified: '2026-08-12',
      mainEntityOfPage: 'https://serendibgemstones.com/gemstones/padparadscha-sapphire',
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

const relatedGems = [
  { name: 'Blue Sapphire', href: '/gemstones/blue-sapphire', colour: '#1a5f9e', desc: 'The world\'s most prized blue gemstone — vivid cornflower hues from Ceylon.' },
  { name: 'Ruby', href: '/gemstones/ruby', colour: '#c0392b', desc: 'Padparadscha\'s sibling in the corundum family — the king of red gemstones.' },
  { name: 'Pink Sapphire', href: '/gemstones/pink-sapphire', colour: '#d46b9a', desc: 'The purely pink cousin — where padparadscha\'s orange fades, pink sapphire begins.' },
]

const toc = [
  { id: 'what-is', label: 'What Is a Padparadscha?' },
  { id: 'colour', label: 'The Colour Debate' },
  { id: 'origins', label: 'Where Are They Found?' },
  { id: 'ceylon', label: 'Sri Lanka\'s Padparadschas' },
  { id: 'quality', label: 'Quality Factors' },
  { id: 'treatments', label: 'Heated vs Unheated' },
  { id: 'investment', label: 'Investment Value' },
  { id: 'famous', label: 'Famous Padparadschas' },
  { id: 'jewellery', label: 'Jewellery Guide' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'faq', label: 'FAQ' },
]

export default function PadparadschaSapphirePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(232,133,94,0.4) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gemstones" className="hover:text-teal transition-colors">Gemstones</Link>
            <span>/</span>
            <span className="text-offwhite/60">Padparadscha Sapphire</span>
          </nav>

          <FadeUp>
            <div className="flex items-start gap-6 mb-8">
              <GemSVG colour="#e8855e" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Padparadscha Sapphire
                </h1>
              </div>
            </div>
          </FadeUp>

          {/* Quick Answer */}
          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                A padparadscha sapphire is an exceptionally rare variety of corundum (aluminium oxide) displaying a delicate blend of pink and orange — named after the Sinhalese word for the lotus blossom. Sri Lanka is the original and most celebrated source. Padparadschas are widely regarded as the rarest and most collectible sapphire variety, with fine unheated Ceylon stones among the most valuable coloured gemstones on the market.
              </p>
            </div>
          </FadeUp>

          {/* Key Stats */}
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Mineral', value: 'Corundum' },
                { label: 'Hardness', value: '9 / 10' },
                { label: 'Top Origin', value: 'Sri Lanka' },
                { label: 'Rarity', value: 'Extremely Rare' },
              ].map((s) => (
                <div key={s.label} className="bg-dark-card border border-white/6 p-4 text-center">
                  <p className="font-cormorant text-xl text-offwhite font-semibold">{s.value}</p>
                  <p className="font-jost text-xs text-offwhite/35 uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="bg-dark px-6 lg:px-10 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
          {/* Main content */}
          <div className="prose-gem">
            <ArticleByline updated="2026-08-12" reviewer="Thusira Ranasinghe" />

            {/* Table of Contents (mobile) */}
            <div className="lg:hidden border border-white/6 bg-dark-card p-6 mb-12">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-4">Contents</p>
              <ul className="space-y-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="font-jost text-sm text-offwhite/50 hover:text-teal transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <h2 id="what-is">What Is a Padparadscha Sapphire?</h2>
            <p>
              The padparadscha sapphire is a rare and extraordinary variety of the mineral corundum — crystalline aluminium oxide (Al&#8322;O&#8323;) — distinguished by its unique blend of pink and orange hues. It belongs to the broader family of &ldquo;fancy sapphires,&rdquo; which encompasses every colour of corundum except red (ruby) and blue (simply called sapphire). Among all fancy sapphires, the padparadscha stands alone as the only variety considered precious enough to carry its own trade name.
            </p>
            <p>
              The name derives from the Sinhalese word <em>padmar&#257;ga</em> (sometimes rendered <em>padmar&#257;dsha</em>), meaning &ldquo;lotus colour&rdquo; — a reference to the delicate pink-orange petals of the tropical lotus blossom (<em>Nelumbo nucifera</em>) that grows across Sri Lanka&apos;s lakes and waterways. This poetic origin is fitting: just as the lotus is revered across Asian cultures as a symbol of purity and beauty, the padparadscha is revered among gemologists and collectors as perhaps the most romantic and elusive of all gemstones.
            </p>
            <p>
              The pink-orange colour of a padparadscha is caused by a combination of trace elements within the corundum crystal. Chromium produces the pink component (the same element responsible for ruby&apos;s red), while a combination of iron and lattice-related colour centres contributes the orange. The precise balance of these trace elements — occurring naturally in exactly the right proportions — is what makes padparadschas so extraordinarily rare.
            </p>
            <p>
              With a hardness of 9 on the Mohs scale, padparadscha sapphires share the exceptional durability of all corundum. They are second only to diamond in hardness, making them perfectly suited for all forms of jewellery, including daily-wear engagement rings. This combination of extreme rarity, romantic colour, and outstanding physical toughness places the padparadscha in a category of its own among coloured gemstones.
            </p>

            <hr />

            <h2 id="colour">The Colour Debate</h2>
            <p>
              No aspect of padparadscha sapphires generates more discussion — and more disagreement — than the definition of their colour. Unlike blue sapphires, where &ldquo;blue&rdquo; is self-evidently blue, the padparadscha occupies a narrow and subjective colour space between pink sapphire and orange sapphire. Where exactly the boundaries fall is a matter of ongoing debate among gemological laboratories, dealers, and collectors.
            </p>
            <p>
              <strong>The classical definition:</strong> Traditionally, a padparadscha is described as a sapphire displaying a delicate, harmonious blend of pink and orange — sometimes likened to the colour of a sunset reflecting on a salmon-pink sky, or the interior petals of a Sri Lankan lotus flower. The key requirement is that both pink and orange must be simultaneously visible, with neither colour overwhelmingly dominating the other.
            </p>
            <p>
              <strong>GRS (GemResearch SwissLab):</strong> GRS tends to apply the padparadscha designation more broadly, accepting stones across a wider range of pink-to-orange ratios. A stone with a distinctly pinkish-orange or orangey-pink body colour may receive the padparadscha classification from GRS, provided the secondary hue is clearly present. GRS has also introduced colour-grade descriptors such as &ldquo;Lotus&rdquo; for the finest padparadscha colours.
            </p>
            <p>
              <strong>GIA (Gemological Institute of America):</strong> GIA historically applies a narrower definition, requiring a more balanced and delicate interplay of pink and orange. Stones that lean too heavily toward either pink or orange may be classified simply as &ldquo;pink sapphire&rdquo; or &ldquo;pinkish-orange sapphire&rdquo; rather than receiving the padparadscha designation. This stricter standard means fewer stones qualify under GIA criteria.
            </p>
            <p>
              <strong>The practical implication:</strong> A stone certified as &ldquo;padparadscha&rdquo; by one laboratory may not receive the same designation from another. For buyers, this means that the laboratory name on the certificate matters — and that it is wise to purchase based on the beauty of the stone itself rather than relying solely on a name on a report. That said, a padparadscha designation from any major laboratory does confirm that the stone falls within the recognized pink-orange colour range and is not simply a pink or orange sapphire.
            </p>
            <p>
              <strong>Colour stability:</strong> Some padparadschas exhibit a subtle colour shift between natural daylight and incandescent light, appearing slightly more pink in daylight and slightly more orange under warm artificial light. This phenomenon is considered natural and does not diminish value — in fact, many collectors find it adds to the stone&apos;s character and charm.
            </p>

            <hr />

            <h2 id="origins">Where Are Padparadscha Sapphires Found?</h2>
            <p>
              Padparadscha sapphires are among the rarest gemstones on Earth, and only a handful of locations produce them in any meaningful quantity. The principal sources are:
            </p>
            <ul>
              <li><strong>Sri Lanka (Ceylon)</strong> — the original and most revered source. Sri Lanka has produced padparadschas for centuries, and the term itself is Sinhalese in origin. Ceylon padparadschas are the benchmark against which all others are measured, prized for their delicate, balanced colour and the highest proportion of unheated stones.</li>
              <li><strong>Madagascar</strong> — since the early 2000s, Madagascar has emerged as the most important secondary source. The Ilakaka and Ambatondrazaka mining regions produce padparadschas that can be excellent, though they tend toward slightly more saturated and orange-dominant hues compared to classical Sri Lankan material. Fine Madagascar padparadschas are valued highly, particularly unheated specimens.</li>
              <li><strong>Tanzania</strong> — the Tunduru and Songea regions of southern Tanzania produce occasional padparadscha-coloured sapphires. Production is sporadic and volumes are small, but fine Tanzanian stones have appeared in the market.</li>
              <li><strong>Vietnam, Myanmar</strong> — very occasional padparadscha-coloured sapphires emerge from these traditional corundum sources, but production is negligible and inconsistent.</li>
            </ul>
            <p>
              It is worth noting that even in Sri Lanka, the world&apos;s primary source, padparadschas represent only a tiny fraction of total sapphire production. For every thousand sapphires mined, perhaps one or two will display the precise pink-orange colour needed to qualify as padparadscha. This inherent geological rarity is the foundation of their extraordinary value.
            </p>

            <hr />

            <h2 id="ceylon">Sri Lanka&apos;s Padparadscha Sapphires</h2>
            <p>
              Sri Lanka&apos;s relationship with the padparadscha sapphire is one of the great stories in gemology. The island has been producing these gems for centuries, and it was Sri Lankan miners and gem traders who first gave this variety its evocative name — connecting the stone&apos;s colour to the sacred lotus blossom that is woven throughout the island&apos;s culture and Buddhist heritage.
            </p>
            <p>
              The geological conditions that produce padparadschas in Sri Lanka are unique. The island&apos;s Highland Complex — a belt of high-grade metamorphic rocks running through the central and southern provinces — contains corundum-bearing formations where precisely the right trace-element chemistry creates the pink-orange colour. The combination of chromium (for pink) and iron-related colour centres (for orange) must occur in a narrow range to produce a true padparadscha rather than a pink sapphire, orange sapphire, or ruby.
            </p>
            <p>
              <strong>Mining regions:</strong> Padparadschas are found in the same alluvial gravel deposits that produce Sri Lanka&apos;s blue sapphires, rubies, and other gemstones. The most important regions include <strong>Ratnapura</strong> (the historic &ldquo;City of Gems&rdquo;), <strong>Elahera</strong>, <strong>Nivitigala</strong>, <strong>Eheliyagoda</strong>, and <strong>Okkampitiya</strong>. Mining is predominantly artisanal, with gem-bearing gravel (<em>illam</em>) extracted from pits dug into ancient alluvial layers and washed in traditional baskets.
            </p>
            <p>
              <strong>What distinguishes Ceylon padparadschas:</strong> Sri Lankan stones are particularly valued for their soft, pastel-like colour — a gentle, almost whispered blend of pink and orange that feels lighter and more ethereal than padparadschas from other origins. The finest Ceylon padparadschas have a luminous, almost glowing quality, as though lit from within. They also benefit from Sri Lanka&apos;s famously high proportion of unheated material, meaning many reach the market in their completely natural state.
            </p>
            <p>
              <strong>Market premium:</strong> Ceylon origin commands a measurable premium in the padparadscha market. A fine unheated Sri Lankan padparadscha will typically sell for a significant premium over a comparable stone from Madagascar, reflecting both the historical prestige of the origin and the distinctive colour character of Sri Lankan material.
            </p>

            <hr />

            <h2 id="quality">Quality Factors</h2>

            <h3>Colour — The Defining Factor</h3>
            <p>
              In padparadscha sapphires, colour is not merely the most important quality factor — it is virtually the only factor that determines whether a stone qualifies as a padparadscha at all. A stone with perfect clarity and cut but the wrong shade of pink or orange is simply a pink sapphire or an orange sapphire, not a padparadscha.
            </p>
            <p>
              The most prized colour is a balanced, medium-toned blend where both pink and orange are clearly present and harmoniously integrated. The stone should appear neither predominantly pink nor predominantly orange, but rather a seamless fusion of the two — the colour of a tropical sunset, a ripe apricot suffused with rose, or the inner petals of a lotus blossom at dawn.
            </p>
            <p>
              Saturation should be moderate to vivid. Stones that are too pale appear washed out and lack the visual impact collectors seek. Stones that are too saturated can appear overly orange and lose the delicate pink component that defines the variety. The finest padparadschas strike a balance that is immediately recognizable to an experienced eye.
            </p>

            <h3>Clarity</h3>
            <p>
              As with all corundum, padparadschas are Type II gemstones — some inclusions are expected and accepted. Eye-clean stones (no visible inclusions to the unaided eye) are preferred and command the highest prices. Common inclusions include rutile silk, mineral crystals, fingerprint-like healed fractures, and colour zoning. Because padparadschas are so rare, the market is somewhat more tolerant of minor inclusions than it is for blue sapphires of equivalent value.
            </p>

            <h3>Cut</h3>
            <p>
              Padparadschas are typically cut to maximize colour display and weight retention. Oval and cushion cuts are most common, as these shapes show the pink-orange colour to best advantage. Cutters must be particularly careful with padparadschas because the colour can be directional (pleochroic) — showing different colour intensities along different crystal axes. A skilled cutter orients the rough to present the most attractive face-up colour.
            </p>

            <h3>Carat Weight</h3>
            <p>
              Fine padparadschas are significantly rarer than blue sapphires at any size, but rarity increases dramatically above 2 carats. Stones above 5 carats with top colour are museum-quality rarities. Value escalates steeply with size — a fine 3-carat padparadscha commands a very significant premium over a 1-carat stone of equivalent quality.
            </p>

            <hr />

            <h2 id="treatments">Heated vs Unheated</h2>
            <p>
              The treatment status of a padparadscha sapphire has an even greater impact on value than for blue sapphires — and the market for padparadschas is especially sensitive to this distinction.
            </p>
            <p>
              <strong>Heat treatment in padparadschas:</strong> Low-temperature heat treatment (typically below 1000&deg;C) can enhance the pink-orange colour of certain corundum rough, sometimes transforming a stone that would otherwise be classified as a pink sapphire into one that displays the padparadscha colour range. Higher-temperature treatment can dissolve rutile silk and improve clarity. Both practices are widespread.
            </p>
            <p>
              <strong>The unheated premium:</strong> Because the natural occurrence of the precise padparadscha colour is so extraordinarily rare, unheated stones command an enormous premium over comparable heated stones. For fine stones above 3 carats, the premium can be even greater. This is one of the highest unheated premiums in the entire coloured gemstone market, reflecting the near-impossibility of finding the perfect pink-orange colour without human intervention.
            </p>
            <p>
              <strong>Beryllium diffusion:</strong> In the early 2000s, the gemstone market was rocked by the discovery that some padparadscha-coloured sapphires had been subjected to beryllium diffusion — a process where beryllium is introduced into the crystal lattice at very high temperatures, fundamentally altering the stone&apos;s colour. This treatment can create padparadscha colours in corundum that was originally colourless, pink, or light yellow. Beryllium-diffused stones are worth a fraction of naturally coloured or simply heated padparadschas. Reputable laboratories can detect beryllium diffusion through LA-ICP-MS trace-element analysis.
            </p>
            <p>
              <strong>Detection and certification:</strong> Given the extraordinary value difference between unheated, heated, and beryllium-diffused padparadschas, laboratory certification is not optional — it is essential. A report from GIA, GRS, G&uuml;belin, or SSEF confirming &ldquo;no indications of heating&rdquo; and &ldquo;no indications of lattice diffusion treatment&rdquo; is a prerequisite for any serious purchase of an unheated padparadscha.
            </p>

            <hr />

            <h2 id="investment">Investment Value</h2>
            <p>
              Padparadscha sapphires occupy a unique position in the coloured gemstone investment landscape. Several factors make them among the most compelling gemstones for long-term value preservation and appreciation:
            </p>
            <ul>
              <li><strong>Extreme rarity:</strong> Padparadschas are rarer than blue sapphires, rubies, or emeralds of equivalent quality. Fine unheated Ceylon padparadschas above 3 carats appear at major auction houses only a handful of times per year.</li>
              <li><strong>Growing recognition:</strong> Following Princess Eugenie&apos;s 2018 engagement ring, global awareness of padparadscha sapphires increased dramatically. This growing recognition, combined with fixed and declining supply, creates favourable conditions for price appreciation.</li>
              <li><strong>Diminishing supply:</strong> Sri Lanka&apos;s alluvial gem deposits, which have been mined for over two millennia, are producing fewer exceptional stones. No new major source of top-quality padparadschas has been discovered.</li>
              <li><strong>Auction performance:</strong> Padparadscha sapphires have achieved record prices at major auction houses. In November 2017, a 20.84-carat unheated Sri Lankan padparadscha set a benchmark at Sotheby&apos;s Geneva. Exceptional stones consistently outperform pre-sale estimates.</li>
              <li><strong>Tangible and portable:</strong> Like all fine gemstones, padparadschas are physical assets that are not correlated with financial markets, can be stored privately, and retain value across borders and generations.</li>
            </ul>
            <p>
              <strong>What to buy for investment:</strong> Focus on unheated Ceylon padparadschas with balanced pink-orange colour (certified as &ldquo;padparadscha&rdquo; by at least one major laboratory), clean clarity, weights above 2 carats, and reports from GIA or GRS. Origin determination confirming Sri Lanka adds further value. These are the stones most likely to hold and grow in value over the coming decades.
            </p>

            <hr />

            <h2 id="famous">Famous Padparadscha Sapphires</h2>
            <ul>
              <li><strong>Princess Eugenie&apos;s engagement ring (approx. 3&ndash;4 ct)</strong> — in October 2018, Jack Brooksbank proposed with a padparadscha sapphire ring surrounded by diamonds. The ring generated worldwide media coverage and introduced the padparadscha to millions of people who had never heard of this variety. Demand and prices for padparadschas rose noticeably in the months following the announcement.</li>
              <li><strong>The 20.84-carat Sotheby&apos;s padparadscha</strong> — an exceptional unheated Sri Lankan padparadscha that sold at Sotheby&apos;s Geneva in November 2017, setting a benchmark for padparadscha prices at auction and demonstrating the extraordinary value the market places on large, fine, unheated specimens.</li>
              <li><strong>The 100.18-carat Sri Lankan padparadscha</strong> — one of the largest known padparadscha sapphires, this exceptional stone was displayed at the American Museum of Natural History. Its sheer size in a variety where stones above 5 carats are considered museum pieces makes it a legendary specimen in gemological circles.</li>
              <li><strong>The GRS &ldquo;Lotus Supreme&rdquo; stones</strong> — GRS has awarded its highest padparadscha colour grade, &ldquo;Lotus Supreme,&rdquo; to a very small number of exceptional stones displaying what the laboratory considers the ideal balance of pink and orange with vivid saturation. These stones are among the most sought-after coloured gemstones in the world.</li>
            </ul>

            <hr />

            <h2 id="jewellery">Jewellery Guide</h2>
            <p>
              The padparadscha sapphire&apos;s unique colour, extreme rarity, and outstanding durability make it one of the most special gemstones a person can own. Its warm pink-orange tones are universally flattering and work beautifully in a variety of jewellery styles:
            </p>
            <ul>
              <li><strong>Engagement rings:</strong> Following Princess Eugenie&apos;s ring, padparadscha engagement rings have surged in popularity. The stone&apos;s romantic colour — evocative of sunsets and lotus blossoms — makes it a deeply meaningful choice. With a hardness of 9, it is perfectly durable for daily wear. Oval and cushion cuts are most popular for engagement settings.</li>
              <li><strong>Pendants and necklaces:</strong> Padparadschas set as pendants allow the full beauty of the colour to be displayed against the skin. The warm pink-orange tone is particularly flattering near the face and pairs beautifully with both white and yellow metals.</li>
              <li><strong>Earrings:</strong> Matched pairs of padparadschas are exceptionally rare and command a significant premium. Even slight differences in colour between two stones are noticeable, making well-matched padparadscha earrings a genuine collector&apos;s achievement.</li>
              <li><strong>Cocktail rings and statement pieces:</strong> Larger padparadschas (3+ carats) set with diamond halos or in elaborate designer settings create truly one-of-a-kind statement jewellery.</li>
            </ul>
            <p>
              <strong>Metal choice:</strong> Rose gold is a particularly popular choice for padparadscha settings, as it echoes and enhances the stone&apos;s warm pink tones. White gold and platinum provide a cool contrast that makes the colour appear more vivid. Yellow gold creates a rich, traditional look that suits the stone&apos;s warm character.
            </p>
            <p>
              <strong>Accent stones:</strong> Diamonds are the classic accompaniment, providing sparkle and contrast without competing with the padparadscha&apos;s delicate colour. Small pink sapphires or white sapphires can also be used as accents. Avoid pairing padparadschas with strongly coloured accent stones that might overwhelm their subtle hue.
            </p>

            <hr />

            <h2 id="care">Care &amp; Maintenance</h2>
            <p>
              Padparadscha sapphires share the exceptional durability of all corundum and require minimal special care:
            </p>
            <ul>
              <li><strong>Cleaning:</strong> Warm soapy water and a soft brush is the safest and most effective cleaning method. Rinse thoroughly and dry with a lint-free cloth. Ultrasonic cleaning is generally safe for untreated padparadschas but should be avoided for stones with fracture fillings or significant inclusions.</li>
              <li><strong>Storage:</strong> Store padparadscha jewellery separately from softer stones (emeralds, opals, pearls) to prevent scratching them. A fabric-lined compartment or individual soft pouch is ideal. Padparadschas themselves can only be scratched by diamond or another corundum.</li>
              <li><strong>Wearing:</strong> Padparadschas are suitable for everyday wear, including engagement rings. Remove during heavy manual work, contact sports, or exposure to harsh chemicals such as bleach or strong acids. While the stone itself is nearly indestructible, settings and prongs can be damaged by impacts.</li>
              <li><strong>Colour care:</strong> Padparadscha colour is stable and permanent — it will not fade from exposure to light or heat under normal wearing conditions. Unlike some other gemstones, padparadschas do not require protection from sunlight.</li>
              <li><strong>Professional maintenance:</strong> Have settings inspected annually by a qualified jeweller to ensure prongs and bezels remain secure. For valuable stones, periodic professional cleaning and inspection is a worthwhile investment in long-term preservation.</li>
            </ul>

            <hr />

            {/* FAQ */}
            <h2 id="faq">Frequently Asked Questions</h2>
            <div className="space-y-1 border-t border-white/6">
              {faqItems.map((faq) => (
                <details key={faq.q} className="faq-item border-b border-white/6">
                  <summary>{faq.q}</summary>
                  <div className="faq-answer">{faq.a}</div>
                </details>
              ))}
            </div>

            <SourcesReferences sources={[
              { label: 'GIA — Gemological Institute of America', detail: 'Padparadscha colour definition and treatment disclosure standards', href: 'https://www.gia.edu' },
              { label: 'GRS — GemResearch Swisslab', detail: 'Padparadscha colour grading including "Lotus" and "Lotus Supreme" designations', href: 'https://www.gemresearch.ch' },
              { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and origin determination for fancy sapphires', href: 'https://www.ssef.ch' },
              { label: 'Gübelin Gem Lab', detail: 'Origin determination and detection of beryllium diffusion in padparadscha sapphires', href: 'https://www.gubelin.com/en/gemlab' },
              { label: 'National Gem & Jewellery Authority of Sri Lanka (NGJA)', detail: 'Sri Lankan gem industry regulation and export certification', href: 'https://www.ngja.gov.lk' },
              { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on padparadscha colour, origin, and treatments', href: 'https://www.gia.edu/gems-gemology' },
              { label: 'Journal of Gemmology (Gem-A)', detail: 'Research on corundum trace-element chemistry and lattice diffusion detection', href: 'https://gem-a.com/publications' },
            ]} />
          </div>

          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              {/* TOC */}
              <div className="border border-white/6 bg-dark-card p-5">
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-4">Contents</p>
                <ul className="space-y-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="font-jost text-xs text-offwhite/40 hover:text-teal transition-colors leading-snug block">{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="border border-teal/20 bg-dark-card p-5">
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Looking for a padparadscha?</p>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">Tell us your preferred size, colour, and budget. We source directly from Sri Lanka&apos;s finest mines.</p>
                <Link href="/contact" className="block w-full py-2.5 text-center font-jost text-xs tracking-widest uppercase bg-teal hover:bg-teal-light text-white transition-colors">
                  Enquire Now
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Gemstones */}
      <section className="bg-dark-card border-t border-teal/10 py-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-6">Related Gemstones</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedGems.map((gem) => (
                <Link key={gem.name} href={gem.href} className="group border border-white/6 hover:border-teal/30 bg-dark p-6 transition-colors">
                  <GemSVG colour={gem.colour} size={48} className="mb-4" />
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold group-hover:text-teal-light transition-colors mb-2">{gem.name}</h3>
                  <p className="font-jost text-xs text-offwhite/40 leading-relaxed">{gem.desc}</p>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-dark py-20 px-6 text-center border-t border-teal/10">
        <FadeUp>
          <p className="font-cormorant italic text-2xl text-offwhite/60 mb-4">
            Interested in a Ceylon padparadscha sapphire?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            Each stone in our collection is available for personal enquiry. Tell us what you&apos;re looking for — colour, size, budget — and we&apos;ll respond with suitable options from our current inventory.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Make an Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
