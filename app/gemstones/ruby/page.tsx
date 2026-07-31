import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'

export const metadata: Metadata = {
  title: 'Ruby — The Complete Guide to Natural & Ceylon Rubies',
  description:
    'A ruby is the red variety of the mineral corundum, coloured by trace amounts of chromium. Revered as the "King of Gemstones," rubies are among the rarest and most valuable coloured stones on earth. Learn about pigeon blood colour, origins, treatments, investment value, and how Sri Lanka produces prized unheated rubies with exceptional clarity.',
  alternates: { canonical: 'https://serendibgemstones.com/gemstones/ruby' },
}

const faqItems = [
  {
    q: 'What is the difference between a ruby and a red sapphire?',
    a: 'Ruby and sapphire are both varieties of the mineral corundum (aluminium oxide). The distinction is one of colour: corundum that displays a dominant red hue is classified as ruby, while all other colours are classified as sapphire. The boundary between ruby and pink sapphire is debated within the trade — some gemological laboratories define ruby as corundum with a dominant red hue of medium to dark tone, while others accept lighter pinkish-red stones as rubies. The distinction matters commercially, because rubies command significantly higher prices than pink sapphires.',
  },
  {
    q: 'What is "pigeon blood" ruby?',
    a: 'Pigeon blood is a trade term for the most desirable ruby colour — a vivid, highly saturated red with a faint undertone of blue, creating an intense, almost glowing crimson. The term originated in Myanmar (Burma) and historically referred to Mogok rubies of exceptional colour. Today, gemological laboratories such as GRS use "pigeon blood" as a formal colour-grade designation for rubies meeting specific hue, tone, and saturation criteria, regardless of origin. True pigeon blood rubies are exceedingly rare and command the highest per-carat prices of any coloured gemstone.',
  },
  {
    q: 'How much is a ruby worth?',
    a: 'Ruby prices vary enormously based on colour, clarity, carat weight, origin, and treatment status. Commercial heated rubies may start at US$100–500 per carat. Fine unheated rubies typically range from US$1,000–20,000 per carat. Exceptional unheated Burmese rubies with pigeon blood colour have sold for over US$1 million per carat at auction. Sri Lankan rubies offer excellent value, with fine unheated stones available at a fraction of Burmese prices while still displaying beautiful colour and clarity.',
  },
  {
    q: 'Are rubies more expensive than diamonds?',
    a: 'At the highest quality levels, yes. Fine unheated rubies of exceptional colour above 5 carats are rarer than equivalent-quality diamonds and regularly achieve higher per-carat prices at auction. The Sunrise Ruby (25.59 carats) sold for over US$30 million in 2015, equating to more than US$1.2 million per carat. However, at commercial quality levels, diamonds are typically priced higher than rubies of similar size.',
  },
  {
    q: 'Are Sri Lankan rubies good quality?',
    a: 'Yes, though they have a different character from Burmese rubies. Sri Lankan rubies tend to display a lighter, more pinkish-red colour compared to the deep red of Mogok stones. However, they are prized for exceptional clarity, strong fluorescence (which enhances their apparent colour in daylight), and a high proportion of unheated material. For buyers who prefer a brighter, more luminous red rather than a deep crimson, Sri Lankan rubies represent outstanding quality and value.',
  },
  {
    q: 'How can I tell if a ruby is real?',
    a: 'Visual inspection alone cannot reliably confirm a ruby\'s authenticity. Synthetic rubies (created by flame fusion, flux growth, or hydrothermal methods) have identical chemical composition to natural stones. Glass-filled rubies can also appear convincing to the naked eye. The only reliable method is laboratory analysis by an accredited gemological laboratory such as GIA or GRS, which uses spectroscopy, microscopy, and trace-element analysis to confirm natural origin and treatment history.',
  },
  {
    q: 'What is lead-glass filling in rubies?',
    a: 'Lead-glass filling (also called fracture filling or composite ruby) is a treatment where heavily fractured, low-quality corundum is infused with lead glass to fill internal fractures and improve transparency. The result looks like a clean ruby at first glance, but the glass can deteriorate over time with exposure to heat, acids, or even household cleaning products. Lead-glass-filled rubies should sell for a fraction of the price of untreated or heat-treated rubies and must be disclosed. They are not suitable for investment.',
  },
  {
    q: 'What is the best origin for rubies?',
    a: 'Myanmar (Burma), particularly the Mogok Stone Tract, is historically considered the finest origin for rubies. Mogok produces the legendary pigeon blood colour with strong fluorescence. However, fine rubies also come from Mozambique (which has become the world\'s largest producer of gem-quality rubies), Sri Lanka, Madagascar, and Vietnam. Origin is important for value, but colour and quality ultimately matter more than geographic provenance.',
  },
  {
    q: 'Are heated rubies still valuable?',
    a: 'Yes. Heat treatment is an accepted industry practice that has been used for centuries. A well-heated ruby with fine colour is still a beautiful and durable gemstone. However, unheated rubies of equivalent quality command a premium of 3 to 8 times the price, because their natural beauty is rarer. The key distinction is between simple heat treatment (widely accepted) and more invasive treatments like lead-glass filling or beryllium diffusion (which significantly reduce value).',
  },
  {
    q: 'Can rubies be used in engagement rings?',
    a: 'Absolutely. With a hardness of 9 on the Mohs scale, ruby is second only to diamond in durability and is excellent for everyday wear. Rubies have been used in engagement and wedding rings for centuries. The deep red colour symbolises love and passion, making ruby a meaningful and distinctive alternative to diamond. Ensure the stone is well-set in a protective mounting such as a bezel or sturdy prong setting.',
  },
  {
    q: 'Do rubies fluoresce?',
    a: 'Many rubies exhibit strong red fluorescence under ultraviolet light, caused by chromium in the crystal lattice. This fluorescence can enhance the stone\'s apparent colour in daylight (which contains UV wavelengths), making the ruby appear to glow from within. Sri Lankan and Burmese rubies tend to show particularly strong fluorescence. Rubies with high iron content (such as some Thai stones) show weaker fluorescence because iron suppresses the chromium fluorescence effect.',
  },
  {
    q: 'What certificate should a ruby have?',
    a: 'For significant purchases, insist on a report from GIA (Gemological Institute of America) or GRS (GemResearch SwissLab). Both are internationally respected for coloured gemstone analysis. GRS is particularly valued for its colour-grade designations (including "pigeon blood" and "vivid red") and origin determination. For unheated stones, a statement confirming "no indications of heating" is essential. Avoid stones accompanied only by unknown or local laboratory reports.',
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
        { '@type': 'ListItem', position: 3, name: 'Ruby', item: 'https://serendibgemstones.com/gemstones/ruby' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Ruby — The Complete Guide to Natural & Ceylon Rubies',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', url: 'https://serendibgemstones.com' },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-07-31',
      mainEntityOfPage: 'https://serendibgemstones.com/gemstones/ruby',
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
  { name: 'Blue Sapphire', href: '/gemstones/blue-sapphire', colour: '#1a5f9e', desc: 'Ruby\'s sibling in the corundum family — the world\'s most prized blue gemstone.' },
  { name: 'Padparadscha Sapphire', href: '/gemstones/padparadscha-sapphire', colour: '#e8855e', desc: 'The rarest sapphire variety — a delicate pink-orange lotus blossom hue.' },
  { name: 'Spinel', href: '/gemstones/spinel', colour: '#c0392b', desc: 'Historically confused with ruby for centuries — a fine gemstone in its own right.' },
]

const toc = [
  { id: 'what-is', label: 'What Is a Ruby?' },
  { id: 'ruby-vs-sapphire', label: 'Ruby vs Sapphire' },
  { id: 'origins', label: 'Where Are Rubies Found?' },
  { id: 'ceylon', label: 'Sri Lanka\'s Rubies' },
  { id: 'colours', label: 'Colour Variations' },
  { id: 'quality', label: 'Quality Factors' },
  { id: 'treatments', label: 'Treatments & Enhancements' },
  { id: 'investment', label: 'Investment Value' },
  { id: 'famous', label: 'Famous Rubies' },
  { id: 'jewellery', label: 'Jewellery Guide' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'faq', label: 'FAQ' },
]

export default function RubyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(192,57,43,0.4) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gemstones" className="hover:text-teal transition-colors">Gemstones</Link>
            <span>/</span>
            <span className="text-offwhite/60">Ruby</span>
          </nav>

          <FadeUp>
            <div className="flex items-start gap-6 mb-8">
              <GemSVG colour="#c0392b" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Ruby
                </h1>
              </div>
            </div>
          </FadeUp>

          {/* Quick Answer */}
          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                A ruby is the red variety of the mineral corundum (aluminium oxide), coloured by trace amounts of chromium. Revered as the &ldquo;King of Gemstones,&rdquo; ruby is one of the rarest and most valuable coloured gemstones on earth. Myanmar produces the legendary pigeon blood red, while Sri Lanka yields rubies of exceptional clarity and fluorescence, often in their natural unheated state.
              </p>
            </div>
          </FadeUp>

          {/* Key Stats */}
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Mineral', value: 'Corundum' },
                { label: 'Hardness', value: '9 / 10' },
                { label: 'Top Origin', value: 'Myanmar' },
                { label: 'Unheated Premium', value: '3–8×' },
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

            <h2 id="what-is">What Is a Ruby?</h2>
            <p>
              A ruby is the red variety of the mineral corundum &mdash; crystalline aluminium oxide (Al&#8322;O&#8323;) &mdash; coloured by trace concentrations of chromium (Cr&#179;&#8314;) within the crystal lattice. When chromium replaces a small percentage of the aluminium atoms in the corundum structure, it selectively absorbs yellow-green light and transmits red, producing the ruby&apos;s characteristic colour. The more chromium present, the stronger the red.
            </p>
            <p>
              Ruby holds a singular position in gemology. It is one of the &ldquo;Big Three&rdquo; coloured gemstones alongside blue sapphire and emerald, and has been called the &ldquo;King of Gemstones&rdquo; in ancient Sanskrit texts, where it was known as <em>ratnaraj</em>. Throughout history &mdash; from the courts of Mughal emperors to the crown jewels of European monarchies &mdash; rubies have been valued above all other gemstones for their intense colour and symbolic associations with power, passion, and protection.
            </p>
            <p>
              With a hardness of 9 on the Mohs scale, ruby shares diamond&apos;s reputation for durability. It has no cleavage, meaning it does not split along crystallographic planes, and its toughness is considered excellent. These physical properties, combined with its extraordinary beauty and rarity, make ruby one of the most desirable gemstones for both collectors and jewellery.
            </p>

            <hr />

            <h2 id="ruby-vs-sapphire">Ruby vs Sapphire</h2>
            <p>
              Ruby and sapphire are the same mineral &mdash; corundum &mdash; distinguished only by colour. When corundum displays a dominant red hue, it is classified as ruby. Every other colour of gem-quality corundum (blue, pink, yellow, orange, green, purple, colourless) is classified as sapphire. This means that ruby is, in essence, a &ldquo;red sapphire,&rdquo; though the trade has always kept the two names separate because of ruby&apos;s historically higher value.
            </p>
            <p>
              The colour difference comes down to trace elements. In blue sapphire, iron and titanium create the blue colour through an intervalence charge transfer mechanism. In ruby, chromium is the sole chromophore, absorbing in the blue-violet and yellow-green regions of the spectrum and transmitting red. Some rubies also contain small amounts of iron, which can modify the colour toward a darker, less fluorescent red.
            </p>
            <p>
              The boundary between ruby and pink sapphire is one of gemology&apos;s most debated questions. There is no universally agreed dividing line. GIA classifies as ruby any corundum with a dominant red hue, while some other laboratories require a certain minimum depth of tone or saturation. This matters commercially: a stone classified as a ruby can be worth several times more than the same stone classified as a pink sapphire. Sri Lankan corundum frequently falls in this borderline zone, producing stones that different laboratories may classify differently.
            </p>

            <hr />

            <h2 id="origins">Where Are Rubies Found?</h2>
            <p>
              Rubies are found across several continents, but only a few origins consistently produce stones of exceptional quality. The most important sources are:
            </p>
            <ul>
              <li><strong>Myanmar (Burma)</strong> &mdash; the most celebrated source, particularly the Mogok Stone Tract in the Mandalay Region. Mogok has produced rubies for at least 800 years and remains the benchmark for pigeon blood colour. The area&apos;s marble-hosted deposits yield rubies with strong chromium fluorescence and relatively low iron content, creating the prized &ldquo;glowing&rdquo; red. More recently, the Mong Hsu deposit has produced large volumes of ruby requiring heat treatment.</li>
              <li><strong>Mozambique</strong> &mdash; since the discovery of major deposits near Montepuez in 2009, Mozambique has become the world&apos;s most significant source of gem-quality rubies by volume. Fine Mozambican rubies can rival Burmese stones in colour, though they typically exhibit a slightly different fluorescence profile due to higher iron content. The best stones command strong prices.</li>
              <li><strong>Sri Lanka (Ceylon)</strong> &mdash; one of the oldest known sources of rubies, producing stones with a distinctive lighter pinkish-red colour, exceptional clarity, and strong fluorescence. Sri Lanka&apos;s rubies are frequently unheated and offer excellent value.</li>
              <li><strong>Madagascar</strong> &mdash; produces rubies from several localities, including Andilamena and Vatomandry. Fine Madagascar rubies show strong colour and can approach Burmese quality. An increasingly important source since the early 2000s.</li>
              <li><strong>Thailand &amp; Cambodia</strong> &mdash; historically important sources, particularly the Chanthaburi-Trat mining area along the Thai-Cambodian border. Thai rubies tend toward darker, brownish-red tones with high iron content and weaker fluorescence. Commercial production has declined significantly.</li>
              <li><strong>Vietnam, Tanzania, Kenya</strong> &mdash; each produces rubies of varying quality. Vietnamese rubies from Luc Yen and Quy Chau can show excellent colour. Tanzanian rubies from Winza and Longido are known for fine, intense reds. Kenyan rubies from the Tsavo area, though often included, can show remarkable colour.</li>
            </ul>

            <hr />

            <h2 id="ceylon">Sri Lanka&apos;s Rubies</h2>
            <p>
              While Sri Lanka is best known for its blue sapphires, the island has been producing rubies for millennia. Ancient traders referred to Sri Lankan rubies in texts dating back over 2,000 years, and the island&apos;s gem gravels continue to yield ruby alongside its famous sapphires, since both are varieties of corundum formed under similar geological conditions.
            </p>
            <p>
              Sri Lankan rubies have a distinctive character that sets them apart from other origins:
            </p>
            <ul>
              <li><strong>Colour character:</strong> Ceylon rubies typically display a lighter, more pinkish-red colour compared to the deep, saturated reds of Myanmar. Some stones sit on the boundary between ruby and pink sapphire. While they may lack the intense pigeon blood of Mogok, the best Sri Lankan rubies show a vibrant, luminous red with an appealing brightness.</li>
              <li><strong>Clarity:</strong> Sri Lankan rubies are renowned for exceptional clarity. While most rubies from other origins are heavily included, Ceylon rubies frequently display eye-clean to loupe-clean transparency &mdash; a significant advantage for jewellery use and collector appeal.</li>
              <li><strong>Fluorescence:</strong> Thanks to high chromium content and relatively low iron, Sri Lankan rubies often exhibit strong red fluorescence under ultraviolet light. This fluorescence enhances the stone&apos;s apparent colour in natural daylight, giving it a lively, glowing quality that is highly desirable.</li>
              <li><strong>Unheated availability:</strong> A notably high proportion of Sri Lankan rubies reach the market without any heat treatment, displaying their natural beauty as formed by geological processes. For collectors and investors, unheated Ceylon rubies represent an accessible entry point into the unheated ruby market.</li>
            </ul>
            <p>
              Ruby mining in Sri Lanka follows the same traditional alluvial methods used for sapphires. The primary mining regions overlap with sapphire production: <strong>Ratnapura</strong>, <strong>Elahera</strong>, <strong>Eheliyagoda</strong>, and the gem-bearing gravels (<em>illam</em>) of the highland belt. Miners extract gem-bearing gravel from shallow pits and wash it to recover rough crystals &mdash; a practice that has continued largely unchanged for centuries.
            </p>

            <hr />

            <h2 id="colours">Colour Variations</h2>
            <p>
              The value of a ruby is dominated by its colour, and rubies occur across a range of reds that significantly affect desirability and price:
            </p>
            <ul>
              <li><strong>Pigeon blood red:</strong> The most prized colour &mdash; a vivid, highly saturated red with a faint bluish undertone that creates an intense, almost electric crimson. The stone should appear to glow, with colour that is never too dark to obscure brilliance. Pigeon blood rubies are found principally in Myanmar, though fine examples also emerge from Mozambique and occasionally other sources.</li>
              <li><strong>Vivid red:</strong> A strong, pure red with high saturation and medium to medium-dark tone. Slightly less blue undertone than pigeon blood. This colour grade encompasses many of the finest rubies from multiple origins and is the most commercially sought-after colour after pigeon blood.</li>
              <li><strong>Pinkish red:</strong> A lighter, brighter red with a noticeable pink component. Common in Sri Lankan and some Madagascar rubies. These stones display excellent brilliance and, when well-saturated, can be very beautiful. The trade debate over whether strongly pinkish-red stones are rubies or pink sapphires is particularly relevant to this colour range.</li>
              <li><strong>Purplish red:</strong> Red with a purple or violet secondary hue. Common in many origins. A moderate purple overtone is acceptable and does not significantly reduce value, but heavily purplish stones are less desirable than purer reds.</li>
              <li><strong>Orangey red:</strong> Red with a warm orange secondary hue. Sometimes seen in Thai, Kenyan, and some Madagascar rubies. A slight orange modifying hue is acceptable, but strongly orangey stones are less valued than purer reds.</li>
              <li><strong>Dark red / brownish red:</strong> Deep, heavily toned rubies that can appear brownish or almost garnet-like, particularly in incandescent light. Common in Thai and some African rubies. The darkness can obscure the stone&apos;s brilliance, reducing desirability.</li>
            </ul>
            <p>
              Colour is assessed under standardised lighting by gemological laboratories. GRS employs formal colour-grade designations including &ldquo;pigeon blood&rdquo; and &ldquo;vivid red&rdquo; that have become influential market benchmarks. The ideal ruby displays medium to medium-dark tone with vivid saturation and a pure to slightly purplish-red hue.
            </p>

            <hr />

            <h2 id="quality">Quality Factors</h2>

            <h3>Colour</h3>
            <p>
              Colour is overwhelmingly the most important factor in a ruby&apos;s value &mdash; accounting for approximately 60&ndash;80% of its price. The ideal ruby exhibits a vivid, saturated red that is neither too dark (which obscures brilliance) nor too light (which approaches pink sapphire territory). Chromium content, iron content, and crystal chemistry all influence the final colour. Fluorescence, driven by chromium, can enhance apparent colour in daylight, which is why low-iron, high-chromium rubies (like those from Myanmar and Sri Lanka) are particularly desirable.
            </p>

            <h3>Clarity</h3>
            <p>
              Rubies are classified as a Type II gemstone, meaning inclusions are expected. Completely clean rubies are extraordinarily rare. Typical inclusions include rutile needles (&ldquo;silk&rdquo;), mineral crystals (such as calcite and apatite in marble-hosted stones), fingerprint-like healed fractures, and growth zoning. Fine silk, when present in sufficient density and proper orientation, creates the coveted star effect (asterism) in star rubies. An eye-clean ruby with vivid colour is considered exceptional and commands the highest prices.
            </p>

            <h3>Cut</h3>
            <p>
              Rubies are typically cut to maximise colour retention rather than brilliance. Oval and cushion cuts dominate, as they best preserve weight from the typically flat, tabular rough crystals. Round brilliants, emerald cuts, and pear shapes are also produced. Fine cutting shows even colour distribution, good symmetry, and a well-proportioned profile &mdash; not too deep (which darkens colour) and not too shallow (which creates a washed-out window).
            </p>

            <h3>Carat Weight</h3>
            <p>
              Fine rubies above 1 carat are rare; above 5 carats, they are exceptionally so. Ruby rough tends to form in smaller crystals than sapphire, making large, clean, well-coloured rubies one of the rarest gemstones in nature. Price per carat increases steeply with size. A 3-carat ruby of fine quality can be worth many times more per carat than a 1-carat stone of identical quality, because large rubies are disproportionately scarce.
            </p>

            <h3>Origin</h3>
            <p>
              Unlike most gemstones, origin has a significant impact on ruby prices. Burmese (Mogok) rubies command the highest premiums, often 2&ndash;4 times the price of similar-looking stones from other origins. Mozambican rubies have gained market acceptance and strong prices. Sri Lankan rubies offer outstanding value for their quality, particularly for buyers seeking unheated material with fine clarity.
            </p>

            <hr />

            <h2 id="treatments">Treatments &amp; Enhancements</h2>
            <p>
              Treatment is a critical consideration for ruby buyers, as it fundamentally affects value and durability. Understanding the spectrum of treatments is essential.
            </p>
            <p>
              <strong>Heat treatment:</strong> The most common and widely accepted enhancement. Rough rubies are heated in controlled furnaces at temperatures between 800&#176;C and 1800&#176;C to improve colour (dissolving blue colour zones, enhancing red) and clarity (dissolving rutile silk). An estimated 95% or more of rubies on the commercial market have been heat-treated. When properly disclosed, heated rubies remain beautiful, durable, and desirable gemstones.
            </p>
            <p>
              <strong>The unheated premium:</strong> Unheated rubies that display fine natural colour are genuinely rare. They typically command a premium of <strong>3 to 8 times</strong> the price of comparable heated stones. At major auction houses, exceptional unheated Burmese rubies have achieved premiums far beyond this range, reflecting their extreme rarity.
            </p>
            <p>
              <strong>Lead-glass filling (composite ruby):</strong> This is the most problematic treatment in the ruby market. Low-grade, heavily fractured corundum is impregnated with lead glass, which fills fractures and dramatically improves apparent transparency. The result can look superficially like a clean ruby, but the glass component may constitute 10&ndash;40% of the stone&apos;s weight. Lead-glass-filled rubies are fragile: the glass can deteriorate with exposure to heat, acids (including lemon juice and household cleaners), and even prolonged sunlight. These stones should be sold at a fraction of the price of untreated or simply heated rubies.
            </p>
            <p>
              <strong>Beryllium diffusion:</strong> Heating rubies with beryllium-bearing flux can introduce colour into the stone through lattice diffusion. This treatment can be difficult to detect without advanced laboratory analysis and must be disclosed. It significantly reduces value compared to untreated or simply heated stones.
            </p>
            <p>
              <strong>Detection:</strong> Heat treatment is detected through microscopic examination of altered inclusions, dissolved silk, and stress features. Lead-glass filling is visible under magnification as flash-effect colours in filled fractures. A laboratory report from GIA or GRS is the only reliable way to determine treatment status and is essential for any significant ruby purchase.
            </p>

            <hr />

            <h2 id="investment">Investment Value</h2>
            <p>
              Fine rubies have established themselves as one of the strongest performing categories in the coloured gemstone investment market. In recent years, top-quality rubies have outperformed blue sapphires and emeralds at auction, achieving record per-carat prices that surpass even fancy coloured diamonds.
            </p>
            <ul>
              <li><strong>Extreme rarity:</strong> Fine unheated rubies above 5 carats are among the rarest gemstones in existence. The supply of Burmese material from Mogok is finite and heavily restricted. Even Mozambique, the newest major source, produces only a small fraction of stones at the highest quality levels.</li>
              <li><strong>Record prices:</strong> The per-carat record for a ruby at auction exceeded US$1.2 million (the Sunrise Ruby, 2015). Rubies have consistently outpaced market estimates at major sales, indicating strong and growing demand at the top end.</li>
              <li><strong>Asian demand:</strong> Rubies hold deep cultural significance across East and Southeast Asia, where they are associated with power, prosperity, and protection. Growing wealth in China, Thailand, and India has expanded the buyer pool for investment-grade rubies.</li>
              <li><strong>Portability and durability:</strong> Like all corundum, rubies are extremely durable (hardness 9, no cleavage, excellent toughness). They are portable stores of value that are not subject to financial reporting in most jurisdictions.</li>
            </ul>
            <p>
              <strong>What to buy for investment:</strong> Focus on unheated rubies with vivid, saturated colour (ideally pigeon blood or vivid red grade from GRS), eye-clean or better clarity, reputable certification from GIA or GRS with confirmed origin, and weights above 2 carats. Burmese origin adds a significant premium. Mozambican rubies of equivalent quality offer better value entry points with strong appreciation potential.
            </p>

            <hr />

            <h2 id="famous">Famous Rubies</h2>
            <ul>
              <li><strong>The Sunrise Ruby (25.59 ct)</strong> &mdash; a Burmese pigeon blood ruby that sold at Sotheby&apos;s Geneva in May 2015 for US$30.42 million (approximately US$1.19 million per carat), setting the world record price for a ruby at auction. Its combination of size, colour, and Burmese origin made it one of the most important gemstones ever sold.</li>
              <li><strong>The Graff Ruby (8.62 ct)</strong> &mdash; a cushion-cut Burmese ruby that sold at Sotheby&apos;s Geneva in November 2014 for US$8.6 million (approximately US$1 million per carat). It was the first ruby to exceed US$1 million per carat at auction.</li>
              <li><strong>The Crimson Flame (15.04 ct)</strong> &mdash; an unheated Burmese ruby that sold at Christie&apos;s Hong Kong in 2015 for US$18.3 million. Remarkable for its combination of size, pigeon blood colour, and unheated status.</li>
              <li><strong>The Carmen L&uuml;cia Ruby (23.1 ct)</strong> &mdash; a large Burmese ruby set in a platinum-and-diamond ring, donated to the Smithsonian National Museum of Natural History. Considered one of the finest large rubies in any public collection.</li>
              <li><strong>The Rosser Reeves Star Ruby (138.7 ct)</strong> &mdash; one of the world&apos;s largest and finest star rubies, housed at the Smithsonian. A Sri Lankan stone displaying a sharp, well-defined six-rayed star. Its donor, advertising executive Rosser Reeves, called it his &ldquo;lucky stone.&rdquo;</li>
              <li><strong>The De Long Star Ruby (100.32 ct)</strong> &mdash; a large star ruby of Sri Lankan origin, displayed at the American Museum of Natural History in New York. Famous for being stolen in the 1964 jewel heist and later recovered.</li>
            </ul>

            <hr />

            <h2 id="jewellery">Jewellery Guide</h2>
            <p>
              Ruby&apos;s combination of exceptional hardness (9 Mohs), brilliant colour, and deep cultural symbolism makes it one of the most versatile and meaningful gemstones for jewellery:
            </p>
            <ul>
              <li><strong>Engagement rings:</strong> Ruby is an excellent choice for engagement rings, offering both the durability needed for everyday wear and a rich symbolism of love and passion. Its hardness (second only to diamond) means it resists scratching in daily life. Protect the stone with a sturdy setting &mdash; cathedral or bezel mountings work particularly well.</li>
              <li><strong>Statement rings:</strong> Large rubies (3+ carats) set as cocktail or dinner rings, often surrounded by diamonds, create dramatic, eye-catching pieces. The red-and-white colour combination is a timeless classic in fine jewellery.</li>
              <li><strong>Pendants and necklaces:</strong> Rubies are beautifully showcased in pendant settings, where the stone can be appreciated against the skin. Ruby and diamond pendant designs are among the most iconic in fine jewellery.</li>
              <li><strong>Earrings:</strong> Matched pairs of rubies are prized for earrings. Finding two stones with identical colour, clarity, and size commands a significant premium. Drop earrings and studs both display ruby colour effectively.</li>
              <li><strong>Bracelets and bangles:</strong> Line bracelets (tennis bracelets) set with calibrated rubies alternating with diamonds are classic designs. Ruby&apos;s durability makes it suitable for bracelets, though protective channel or bezel settings are advisable.</li>
            </ul>
            <p>
              <strong>Metal choice:</strong> Yellow gold is the traditional setting for rubies and enhances the warmth of the red colour &mdash; it has been the preferred choice in Asian and Middle Eastern jewellery for centuries. White gold and platinum provide a modern, high-contrast look that highlights the ruby&apos;s colour intensity. Rose gold creates a warm, romantic aesthetic that complements pinkish-red Sri Lankan rubies beautifully.
            </p>

            <hr />

            <h2 id="care">Care &amp; Maintenance</h2>
            <p>
              Ruby is one of the most durable gemstones available and requires minimal special care:
            </p>
            <ul>
              <li><strong>Cleaning:</strong> Warm soapy water and a soft brush is the safest method. Rinse thoroughly and dry with a lint-free cloth. Ultrasonic cleaning is generally safe for untreated and heat-treated rubies, but must be avoided for lead-glass-filled or fracture-filled stones, as ultrasonic vibrations can damage the filling.</li>
              <li><strong>Storage:</strong> Store ruby jewellery separately from softer stones (emeralds, opals, pearls) to avoid scratching them &mdash; only diamond can scratch a ruby. A fabric-lined compartment or individual pouch is ideal.</li>
              <li><strong>Wearing:</strong> Ruby is suitable for everyday wear, including engagement rings and other frequently worn pieces. Remove during heavy manual work, contact sports, or exposure to harsh chemicals. While ruby is extremely hard and tough, a sharp blow to a thin girdle or pointed culet can still chip the stone.</li>
              <li><strong>Lead-glass-filled rubies:</strong> These require extra caution. Avoid exposure to heat (including jeweller&apos;s torches during repairs), acids, strong cleaning solutions, and prolonged direct sunlight. Even lemon juice can damage the glass filling. If you own a lead-glass-filled ruby, always inform your jeweller before any work is done on the setting.</li>
              <li><strong>Professional maintenance:</strong> Have settings checked annually by a jeweller to ensure prongs or bezels remain secure. Professional cleaning and polishing can restore lustre over time. Always confirm treatment status with your jeweller before any repair work that involves heat.</li>
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
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Looking for a ruby?</p>
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
            Interested in a natural ruby?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            Each stone in our collection is available for personal enquiry. Tell us what you&apos;re looking for &mdash; colour, size, budget &mdash; and we&apos;ll respond with suitable options from our current inventory.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Make an Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
