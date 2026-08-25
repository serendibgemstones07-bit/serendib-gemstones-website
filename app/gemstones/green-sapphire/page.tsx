import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Green Sapphire — The Complete Guide to Ceylon Green Sapphires',
  description:
    'A green sapphire is a natural gem-quality corundum coloured green by iron. Sri Lanka (Ceylon) is the world\'s premier source for fine green sapphires — clean, unheated, saturated stones. Learn about colour range, teal and blue-green varieties, treatments, certification, and how to buy.',
  alternates: { canonical: 'https://www.serendibgemstones.com/gemstones/green-sapphire' },
}

const faqItems = [
  {
    q: 'What is a green sapphire?',
    a: 'A green sapphire is a natural gem-quality variety of the mineral corundum (aluminium oxide) coloured green by trace amounts of iron. It shares the same crystal structure and Mohs hardness (9) as blue sapphire and ruby. Unlike blue sapphires, whose colour comes from iron and titanium, green sapphires are coloured primarily by iron alone — sometimes with a fine internal alternation of blue and yellow colour zones that the eye blends into green.',
  },
  {
    q: 'Where do the best green sapphires come from?',
    a: 'Sri Lanka (Ceylon) is the world\'s most consistent source of fine green sapphire, particularly for lighter, brighter, mint-green and forest-green material. Australia (New South Wales and Queensland) produces darker, more heavily-toned greens, and Thailand and Madagascar produce commercial-grade material. Ceylon greens are prized for their clean, open colour, high clarity, and comparatively high proportion of unheated stones.',
  },
  {
    q: 'Are green sapphires rare?',
    a: 'Fine green sapphires are noticeably rarer in the trade than blue, pink, or yellow sapphires — not because the mineral is scarce, but because most rough sits in the middle: too dark to be lively, too light to be commercially attractive. Green sapphires with vivid, evenly saturated colour and clean clarity are genuinely uncommon and command a premium accordingly.',
  },
  {
    q: 'What is a teal sapphire?',
    a: 'A teal sapphire is a green sapphire with a strong blue secondary hue — a blue-green stone sitting between pure blue and pure green on the colour spectrum. Teal sapphires have become extremely fashionable, particularly for engagement rings, thanks to their distinctive, ocean-like colour. Sri Lanka and Australia both produce fine teal sapphires; the finest Ceylon teals combine even saturation with high clarity.',
  },
  {
    q: 'Are green sapphires heat-treated?',
    a: 'A significant share of commercial green sapphires have been heat-treated to stabilise or improve colour. Ceylon produces a higher-than-average proportion of unheated stones with fine natural green colour. Heat treatment is stable and industry-accepted but must be disclosed. Unheated Ceylon green sapphires sit at the top of the market and command a premium over comparable heated material.',
  },
  {
    q: 'What certifications should I look for on a green sapphire?',
    a: 'For any significant green sapphire, insist on a report from a top-tier laboratory — GIA (Gemological Institute of America), GRS (GemResearch Swisslab), SSEF, or Gübelin. The report should confirm natural corundum, disclose any heat treatment, and — for the finest stones — determine geographic origin. Look for the phrase "no indications of heating" if you are seeking an unheated stone.',
  },
  {
    q: 'Are green sapphires suitable for engagement rings?',
    a: 'Yes — green sapphire is an excellent engagement-ring choice. With a Mohs hardness of 9, it is second only to diamond in scratch resistance and is well suited to everyday wear. Teal and forest-green sapphires have become particularly fashionable for bridal jewellery over the last decade, offering a distinctive alternative to traditional blue sapphire or diamond centre stones.',
  },
  {
    q: 'What is the best colour for a green sapphire?',
    a: 'The most valued green sapphires show a vivid, medium-toned pure green — often described as "grass green" or "forest green" — with strong saturation and even distribution. Teal (blue-green) stones with clean saturation are increasingly prized. Overly dark, olive, or yellowish-brown stones sit lower in the market. As with all fancy sapphires, evenness of colour across the face of the stone matters as much as the underlying hue.',
  },
  {
    q: 'Are green sapphires a good investment?',
    a: 'Fine unheated Ceylon green sapphires with strong colour and reputable certification have appreciated steadily as the coloured-stone market has broadened beyond traditional blue and pink. Teal sapphires in particular have seen significant demand growth in recent years. As with all coloured stones, investment quality means top colour, good clarity, no unacceptable treatments, credible laboratory reports, and — ideally — Sri Lankan origin. For current pricing on a specific stone, please make an enquiry — we quote based on the actual gemstone and current market.',
  },
  {
    q: 'What is the difference between a green sapphire and an emerald?',
    a: 'They are entirely different minerals. Green sapphire is corundum, coloured by iron, with Mohs hardness 9. Emerald is beryl, coloured by chromium (and sometimes vanadium), with Mohs hardness 7.5–8 and — critically — much lower toughness because of internal fractures typical of emerald crystals. In practice, green sapphire is a far more durable choice for everyday jewellery, particularly rings, while emerald is generally reserved for pieces worn with more care.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Gemstones', item: 'https://www.serendibgemstones.com/gemstones' },
        { '@type': 'ListItem', position: 3, name: 'Green Sapphire', item: 'https://www.serendibgemstones.com/gemstones/green-sapphire' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Green Sapphire — The Complete Guide to Ceylon Green Sapphires',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://www.serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://www.serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-08-25',
      dateModified: '2026-08-25',
      mainEntityOfPage: 'https://www.serendibgemstones.com/gemstones/green-sapphire',
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
  { name: 'Blue Sapphire', href: '/gemstones/blue-sapphire', colour: '#1a5f9e', desc: 'The classic Ceylon sapphire — cornflower blue, high clarity, high unheated proportion.' },
  { name: 'Yellow Sapphire', href: '/gemstones/yellow-sapphire', colour: '#d4af37', desc: 'Golden Ceylon corundum — closest neighbour to green on the colour spectrum.' },
  { name: 'Padparadscha Sapphire', href: '/gemstones/padparadscha-sapphire', colour: '#e8855e', desc: 'The rarest sapphire — a delicate pink-orange lotus blossom hue, born in Sri Lanka.' },
]

const toc = [
  { id: 'what-is', label: 'What Is a Green Sapphire?' },
  { id: 'origins', label: 'Where Are They Found?' },
  { id: 'ceylon', label: 'Sri Lanka\'s Green Sapphires' },
  { id: 'teal', label: 'Teal & Blue-Green Sapphires' },
  { id: 'colours', label: 'Colour Range' },
  { id: 'quality', label: 'Quality Factors (The 4Cs)' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'certification', label: 'Certification' },
  { id: 'investment', label: 'Investment Value' },
  { id: 'jewellery', label: 'Jewellery Guide' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'faq', label: 'FAQ' },
]

export default function GreenSapphirePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(58,140,80,0.4) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gemstones" className="hover:text-teal transition-colors">Gemstones</Link>
            <span>/</span>
            <span className="text-offwhite/60">Green Sapphire</span>
          </nav>

          <FadeUp>
            <div className="flex items-start gap-6 mb-8">
              <GemSVG colour="#3a8c50" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Green Sapphire
                </h1>
                <p className="font-jost text-sm text-offwhite/45 tracking-wide mt-3">The overlooked corundum — quietly rare, freshly fashionable</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                A green sapphire is a natural gem-quality corundum (aluminium oxide) coloured green by trace amounts of iron. It shares blue sapphire&apos;s crystal structure, hardness (9 on Mohs), and durability. Sri Lanka (Ceylon) is the world&apos;s premier source for fine green sapphires, particularly for brighter, cleaner, unheated material — and Ceylon also produces the ocean-like teal sapphires that have become one of the most fashionable choices for modern engagement rings.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Mineral', value: 'Corundum' },
                { label: 'Hardness', value: '9 / 10' },
                { label: 'Top Origin', value: 'Sri Lanka' },
                { label: 'Colour Cause', value: 'Iron' },
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
          <div className="prose-gem">
            <ArticleByline updated="2026-08-25" reviewer="Thusira Ranasinghe" />

            {/* Mobile TOC */}
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

            <h2 id="what-is">What Is a Green Sapphire?</h2>
            <p>
              A green sapphire is a variety of the mineral corundum — crystalline aluminium oxide (Al₂O₃) — whose green colour is produced by trace amounts of iron within the crystal lattice. It is the same species as blue sapphire, ruby, and every other fancy sapphire; only the trace-element chemistry differs. Blue sapphire owes its colour to a combination of iron and titanium; ruby and pink sapphire to chromium; green sapphire to iron alone. The comparatively simple chemistry of green corundum is one reason it appears cleaner and less &ldquo;dyed&rdquo; than green stones in other mineral families.
            </p>
            <p>
              There is a second, gemmologically interesting way in which some green sapphires are green: through <strong>internal colour zoning</strong> in which the crystal contains alternating bands of blue and yellow sapphire, and the eye blends the two into an apparent green. Such stones can look green face-up while showing distinct blue and yellow zones under magnification. Fully naturally-green corundum — coloured by iron across the whole crystal — sits at the top of the green sapphire market.
            </p>
            <p>
              With a Mohs hardness of 9, green sapphire is the second-hardest natural gemstone after diamond, making it an exceptionally durable choice for everyday jewellery. Its combination of fresh, distinctive colour, extreme durability, natural rarity, and the recent rise of teal-sapphire engagement rings has brought green sapphire from the margins of the trade into the mainstream over the past decade.
            </p>

            <hr />

            <h2 id="origins">Where Are Green Sapphires Found?</h2>
            <p>
              Green sapphires occur in several countries, but only a small number produce material of consistently high quality:
            </p>
            <ul>
              <li><strong>Sri Lanka (Ceylon)</strong> — the world&apos;s premier source for fine green sapphire, particularly for lighter, brighter, mint-green, and clean forest-green material. Ceylon green sapphires are prized for their open colour, high clarity, and a comparatively high proportion of naturally unheated stones. Ceylon also produces exceptional teal sapphires.</li>
              <li><strong>Australia</strong> — a major historic producer, particularly from New South Wales (Inverell) and Queensland (Anakie, Rubyvale). Australian green sapphires are typically darker and more heavily toned than Ceylon material, with pronounced blue-green or bluish-green colour. Australia has been an important source of teal sapphires as well.</li>
              <li><strong>Thailand and Cambodia (Chanthaburi–Pailin belt)</strong> — historically important for darker green and blackish-green sapphires. Much material is heat-treated to improve tone.</li>
              <li><strong>Madagascar</strong> — a modern source of green sapphire in a wide range of tones, from Ilakaka and other deposits. Cleaner Madagascar material can be excellent.</li>
              <li><strong>Others</strong> — Tanzania, Nigeria, Montana (USA), and China produce green sapphires occasionally, though rarely at the top of the market.</li>
            </ul>
            <p>
              For the finest unheated green sapphires — and especially for stones certified by top-tier laboratories with vivid, open colour and clean clarity — Sri Lanka remains the preferred origin.
            </p>

            <hr />

            <h2 id="ceylon">Sri Lanka&apos;s Green Sapphires</h2>
            <p>
              Sri Lanka has produced sapphires of every colour for at least 2,500 years. The main mining regions — <strong>Ratnapura</strong> (the historic &ldquo;City of Gems&rdquo; in Sabaragamuwa Province), <strong>Elahera</strong> (Central Province), <strong>Eheliyagoda</strong>, and the highland gem belt — all produce green sapphires, typically recovered from alluvial gravels using traditional pit-mining techniques that have remained largely unchanged for centuries.
            </p>
            <p>
              What distinguishes Ceylon green sapphires:
            </p>
            <ul>
              <li><strong>Bright, open colour:</strong> Sri Lankan greens typically display a bright, lively, medium-toned green — freshly saturated, without the heavy dark tone often seen in Australian material.</li>
              <li><strong>Clarity:</strong> Ceylon green sapphires are frequently eye-clean, with fewer inclusions than green sapphires from many other localities. This natural clarity is a hallmark of Sri Lankan corundum across all colours.</li>
              <li><strong>Wide colour range:</strong> Ceylon produces greens across the full spectrum — mint, apple, grass, forest, olive, and (at the blue end) exceptional teal sapphires.</li>
              <li><strong>Unheated proportion:</strong> Sri Lanka produces a meaningfully higher share of green sapphires that show fine natural colour without heat treatment than any other major source. Unheated Ceylon green sapphires are the top of the market.</li>
              <li><strong>Sizes:</strong> Ceylon regularly produces green sapphires in the 1–5 carat range, with exceptional crystals reaching 10 carats and beyond.</li>
            </ul>

            <hr />

            <h2 id="teal">Teal &amp; Blue-Green Sapphires</h2>
            <p>
              &ldquo;Teal sapphire&rdquo; is a trade term for a sapphire showing a strong blend of blue and green — a stone whose colour sits noticeably between pure blue and pure green on the spectrum. Some are formally classified as green sapphires with a strong blue secondary hue; others as blue sapphires with a strong green secondary hue. The lab report will describe the dominant colour and its modifiers, but in the trade, both are commonly marketed as &ldquo;teal.&rdquo;
            </p>
            <p>
              Teal sapphires have become one of the fastest-growing categories in the bridal and fine-jewellery market over the past decade. The reasons are simple: teals are distinctive, endlessly photogenic, freshly modern, and — as sapphire — extraordinarily durable. They occupy a middle ground that appeals to buyers who want colour but neither the traditional blue nor the emerald-adjacent green.
            </p>
            <p>
              Both Sri Lanka and Australia produce fine teal sapphires. Ceylon teals tend to be brighter and more open, with higher clarity; Australian teals tend to be darker and more heavily toned. Montana also produces teal-coloured sapphires, particularly from the Rock Creek and Missouri River deposits — often at smaller sizes with a cool, greyish undertone that has its own following.
            </p>
            <p>
              As with all fancy sapphires, the ideal teal shows an even, saturated colour without heavy dark tone, no brown or grey overlay, and no visible windowing. Unheated teal Ceylon sapphires with strong colour and clean clarity command a premium.
            </p>

            <hr />

            <h2 id="colours">Colour Range</h2>
            <p>
              Green sapphire is not a single colour; it is a spectrum. The main tones seen in Ceylon and other material include:
            </p>
            <ul>
              <li><strong>Mint green:</strong> A soft, cool, lightly-toned green with high transparency. Fresh and modern; particularly appealing in white metal settings.</li>
              <li><strong>Apple green:</strong> A slightly warmer, medium-toned green with lively saturation. A crowd-pleasing colour with broad appeal.</li>
              <li><strong>Grass green:</strong> A vivid, medium-toned, evenly saturated pure green. The most valued single tone; combines strong colour with clean brightness.</li>
              <li><strong>Forest green:</strong> A deeper, more heavily-toned green with rich saturation. Traditional and elegant; particularly striking in yellow-gold mountings.</li>
              <li><strong>Teal:</strong> A green with pronounced blue secondary hue. Extremely fashionable; sits between green and blue sapphire. Ceylon and Australia are the main sources.</li>
              <li><strong>Olive / yellowish green:</strong> A green with brown or yellow secondary hue. Sits lower in the market than pure greens, though a well-cut olive can still be attractive.</li>
              <li><strong>Bluish green:</strong> Between teal and green, with a subtle blue overlay. Distinctive without being as demanding as a full teal.</li>
            </ul>
            <p>
              As with all coloured gemstones, colour is evaluated on hue (position on the colour wheel), tone (lightness to darkness), and saturation (colour intensity). The most valued combinations pair medium tone with vivid saturation and a pure green or clean teal hue — no brown, no grey, no muddy overlay.
            </p>

            <hr />

            <h2 id="quality">Quality Factors — The 4Cs</h2>

            <h3>Colour</h3>
            <p>
              Colour is the single most important factor in a green sapphire&apos;s value — typically accounting for the majority of the price. The ideal is a vivid, evenly saturated, medium-toned pure green or a clean, saturated teal. Stones that are too dark or too olive look heavy; stones that are too pale look washed out. Even distribution of colour across the face matters as much as the underlying hue — a stone with strong colour zoning that shows blue in one zone and yellow in another can look muddy face-up even if the base material is fine.
            </p>

            <h3>Clarity</h3>
            <p>
              Green sapphire is a Type II gemstone, meaning some inclusions are expected and accepted. Fine green sapphires should be eye-clean under normal viewing. Common inclusions include rutile silk, fingerprint-like healed fissures, small mineral crystals, and colour zoning. Ceylon green sapphires tend to be cleaner than material from most other origins. Heavily included stones or stones with obvious colour banding should be avoided.
            </p>

            <h3>Cut</h3>
            <p>
              Oval, cushion, and round brilliant cuts are the most common for green sapphire, chosen to maximise both colour and light return. A well-cut green sapphire shows even colour across the face, good symmetry, and no visible windowing (pale zones where light passes straight through the stone rather than returning colour to the eye). Pear, marquise, and emerald cuts are also popular for statement stones. Cutters working with green rough must pay careful attention to orientation, since green sapphires can show noticeable colour zoning that a skilled cut can mask or a poor cut can accentuate.
            </p>

            <h3>Carat Weight</h3>
            <p>
              Green sapphires occur in a wide range of sizes. For engagement rings, 1–3 carats is the most popular range. For statement jewellery and collectors, 3–10 carat stones command significant premiums. Truly fine, unheated Ceylon green sapphires above 5 carats with vivid, evenly saturated colour and clean clarity are genuinely rare — arguably rarer than comparable blue or pink sapphires — and price rises steeply with size once colour and clarity thresholds are met.
            </p>

            <hr />

            <h2 id="treatments">Treatments</h2>
            <p>
              Understanding treatments is essential for anyone buying a green sapphire. Several forms of enhancement are encountered in the market, and treatment status is one of the most important factors in a stone&apos;s value.
            </p>
            <p>
              <strong>Conventional heat treatment.</strong> A significant share of commercial green sapphires have been heated in controlled furnaces to stabilise colour, dissolve silk inclusions for improved transparency, and — in some cases — modify tone. Heat treatment is stable, industry-accepted, and must be disclosed on any credible laboratory report. Heated green sapphires remain beautiful and durable, but they sit below unheated material in the market.
            </p>
            <p>
              <strong>Unheated Ceylon green.</strong> Sri Lanka produces more unheated green sapphire than any other major origin, and fine unheated Ceylon greens command a significant premium. Look for the phrase &ldquo;no indications of heating&rdquo; on the laboratory report.
            </p>
            <p>
              <strong>Beryllium (Be) diffusion.</strong> Beryllium diffusion is used more commonly on yellow, orange, and padparadscha corundum than on greens, but it can be applied to sapphires across the colour range. Beryllium-treated stones can show induced colour that extends only into a thin surface layer; re-cutting can alter or lose the colour. Beryllium diffusion must be disclosed and is detected only by advanced spectroscopy at top-tier laboratories. Beryllium-treated stones sit at a small fraction of the value of comparable unheated material.
            </p>
            <p>
              <strong>Other treatments.</strong> Fracture filling with glass or oil, surface coating, and irradiation are all encountered occasionally in the corundum trade. All should be avoided; all must be disclosed.
            </p>

            <hr />

            <h2 id="certification">Certification</h2>
            <p>
              For any significant green sapphire, an independent laboratory report is essential. The report confirms that the stone is natural corundum (not synthetic), discloses any treatments (heat, beryllium diffusion, fracture filling), and — for the finest stones — can determine geographic origin.
            </p>
            <p>
              The four laboratories that set the international standard for coloured-stone certification are:
            </p>
            <ul>
              <li><strong>GIA (Gemological Institute of America)</strong> — the gold standard for identification and treatment disclosure. GIA&apos;s coloured-stone reports include colour grade (hue, tone, saturation) and treatment analysis, and origin reports are available.</li>
              <li><strong>GRS (GemResearch Swisslab)</strong> — particularly respected for colour grading and origin determination. GRS reports for the finest stones include trade colour designations.</li>
              <li><strong>SSEF (Swiss Gemmological Institute)</strong> — a Swiss laboratory known for scientific rigour and advanced spectroscopy, particularly for origin and treatment analysis.</li>
              <li><strong>Gübelin Gem Lab</strong> — one of the oldest gemmological laboratories, particularly respected for origin determination and provenance research.</li>
            </ul>
            <p>
              For fine green and teal sapphires, colour grading and origin determination both matter. A report describing vivid green or clean teal colour with Sri Lankan origin and no indications of heating is the ideal combination for a top-market stone.
            </p>

            <hr />

            <h2 id="investment">Investment Value</h2>
            <p>
              Fine green and teal sapphires have appreciated meaningfully as the coloured-stone market has broadened over the past decade. Several structural factors support their long-term value:
            </p>
            <ul>
              <li><strong>Rising demand:</strong> Teal sapphires in particular have moved from niche to mainstream. Green sapphire more broadly is benefiting from the same shift toward distinctive coloured stones.</li>
              <li><strong>Supply constraints:</strong> The finest green sapphire deposits are finite. Fine unheated Ceylon greens above 3 carats are noticeably scarcer than comparable blue or pink sapphires.</li>
              <li><strong>Comparatively low base:</strong> Green sapphires have historically traded below blue and pink sapphires of comparable quality. As the market recognises their rarity, prices have room to move.</li>
              <li><strong>Portability and privacy:</strong> A high-value green sapphire is small, tangible, internationally recognised, and not correlated with stock or bond markets.</li>
            </ul>
            <p>
              As with all coloured gemstones, only investment-grade material — fine colour, good clarity, unheated, credibly certified, and ideally Sri Lankan origin at 3+ carats — is likely to appreciate reliably. For current pricing on a specific stone, please make an enquiry — we quote based on the actual gemstone and current market.
            </p>

            <hr />

            <h2 id="jewellery">Jewellery Guide</h2>
            <p>
              Green sapphire&apos;s combination of hardness (9 Mohs), brilliance, and distinctive colour makes it one of the most versatile coloured gemstones for jewellery:
            </p>
            <ul>
              <li><strong>Engagement rings:</strong> Green and teal sapphires have become popular alternatives to traditional diamond and blue sapphire engagement rings. Mohs 9 hardness makes them well suited to everyday wear.</li>
              <li><strong>Halo settings:</strong> A green or teal centre stone surrounded by a diamond halo is one of the most striking contemporary combinations — the white diamonds emphasise and brighten the green colour.</li>
              <li><strong>Three-stone rings:</strong> A green sapphire flanked by white diamond side stones is a classic combination; teal sapphires flanked by white sapphires or moissanites offer a lower-cost alternative to diamond sides.</li>
              <li><strong>Pendants and earrings:</strong> Larger green sapphires work beautifully as pendant centres; matched pairs command a premium for statement earrings.</li>
              <li><strong>Statement cocktail rings:</strong> Large green or teal sapphires (5+ carats) surrounded by diamonds make bold, distinctive statement pieces.</li>
            </ul>
            <p>
              <strong>Metal choice:</strong> White gold and platinum give green sapphire a clean, modern look that emphasises the colour. Yellow gold creates a classic, warm contrast that is particularly striking with forest-green and grass-green stones. Rose gold is less commonly paired with green sapphire but can work beautifully with teal stones, where the warmth of the metal complements the coolness of the stone.
            </p>
            <p>
              <strong>Setting styles:</strong> Prong settings maximise light return and colour visibility. Bezel settings offer greater protection for active wearers. Pavé and micro-pavé mountings with green or teal sapphire centres are increasingly popular in bridal and cocktail jewellery.
            </p>

            <hr />

            <h2 id="care">Care &amp; Maintenance</h2>
            <p>
              Green sapphire is one of the most durable gemstones and requires minimal special care:
            </p>
            <ul>
              <li><strong>Cleaning:</strong> Warm soapy water and a soft brush is the safest method. Rinse thoroughly and dry with a lint-free cloth. Ultrasonic and steam cleaning are generally safe for untreated stones but should be avoided for any stone with visible fractures or fracture filling.</li>
              <li><strong>Storage:</strong> Store green sapphire jewellery separately from softer stones to avoid scratching them. A fabric-lined compartment or individual pouch is ideal.</li>
              <li><strong>Wear:</strong> Green sapphire is well suited to everyday wear, including engagement rings. Remove during heavy manual work, contact sports, or exposure to harsh chemicals such as chlorine bleach.</li>
              <li><strong>Beryllium-treated stones:</strong> If a stone is beryllium-diffused (fully disclosed), never allow it to be re-cut or repolished, as the induced colour lives in a thin surface layer.</li>
              <li><strong>Professional check:</strong> Have settings inspected annually by a jeweller to ensure prongs remain secure. Professional cleaning and polishing can restore lustre over time.</li>
            </ul>

            <hr />

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
              { label: 'GIA — Gemological Institute of America', detail: 'Coloured stone identification, treatment disclosure, and fancy sapphire classification', href: 'https://www.gia.edu' },
              { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and origin determination for green and teal sapphires', href: 'https://www.gemresearch.ch' },
              { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and origin determination for corundum', href: 'https://www.ssef.ch' },
              { label: 'Gübelin Gem Lab', detail: 'Origin determination and diffusion-treatment detection for fancy sapphires', href: 'https://www.gubelin.com/en/gemlab' },
              { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on fancy sapphire colour causes and treatments', href: 'https://www.gia.edu/gems-gemology' },
              { label: 'Journal of Gemmology (Gem-A)', detail: 'Peer-reviewed gemmological research including fancy corundum studies', href: 'https://gem-a.com/gem-hub/publications/the-journal-of-gemmology' },
              { label: 'National Gem & Jewellery Authority of Sri Lanka (NGJA)', detail: 'Sri Lankan gem industry regulation and export certification', href: 'https://www.ngja.gov.lk' },
              { label: 'ICA — International Colored Gemstone Association', detail: 'Global trade body for the coloured stone industry', href: 'https://www.gemstone.org' },
            ]} />
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
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

              <div className="border border-teal/20 bg-dark-card p-5">
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Looking for a green sapphire?</p>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">Tell us your preferred colour — mint, grass, forest, or teal — plus size and treatment preference. We source unheated Ceylon green sapphires directly from Sri Lanka.</p>
                <Link href="/contact" className="block w-full py-2.5 text-center font-jost text-xs tracking-widest uppercase bg-teal hover:bg-teal-light text-white transition-colors">
                  Enquire Now
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
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
            Interested in a Ceylon green sapphire?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            Each stone in our collection is available for personal enquiry. Tell us what you&apos;re looking for — colour, size, treatment, certification — and we&apos;ll respond with suitable options from our current inventory.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Make an Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
