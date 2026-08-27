import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Ceylon Sapphires — Sri Lankan Blue',
  description:
    'A Ceylon sapphire is a natural sapphire from Sri Lanka — famed for cornflower-blue colour, exceptional clarity, and a high proportion of unheated stones.',
  openGraph: { url: 'https://www.serendibgemstones.com/ceylon-sapphires' },
  alternates: { canonical: 'https://www.serendibgemstones.com/ceylon-sapphires' },
}

const faqItems = [
  {
    q: 'What is a Ceylon sapphire?',
    a: 'A Ceylon sapphire is a natural sapphire — a gem-quality crystal of the mineral corundum — mined in Sri Lanka. "Ceylon" is the historical name for Sri Lanka and remains the internationally recognised trade term for sapphires of Sri Lankan origin. Ceylon sapphires include blue sapphires (the most famous), padparadscha, yellow, pink, white, star, green, and colour-change sapphires.',
  },
  {
    q: 'What makes Ceylon sapphires different from other origins?',
    a: 'Ceylon sapphires are distinguished by a combination of vivid, medium-toned colour, exceptional clarity, and a notably high proportion of naturally unheated crystals compared to other origins such as Madagascar, Thailand, or Australia. Sri Lanka\'s unique geology — highland-complex metamorphic rocks and gem-bearing alluvial gravels — produces stones with an open, lively brilliance that the market has valued for over two thousand years.',
  },
  {
    q: 'Where in Sri Lanka are sapphires mined?',
    a: 'The main sapphire-producing regions are Ratnapura (the historic "City of Gems") and its surrounding Sabaragamuwa Province, Elahera in the Central Province, Eheliyagoda, Bakamuna, and Kanthale. Mining is predominantly alluvial — gems are recovered from ancient river gravels using traditional pit-mining techniques that have changed little in centuries.',
  },
  {
    q: 'Are all Sri Lankan sapphires unheated?',
    a: 'No. As with every major sapphire source, a large share of Sri Lankan production is heat-treated to intensify colour and improve clarity. What distinguishes Sri Lanka is that it produces the highest proportion of gem-quality material that reaches the market naturally unheated — significantly higher than Madagascar, Thailand, or Australia. Whether a specific Ceylon sapphire is unheated must be confirmed by a report from a top-tier gemological laboratory.',
  },
  {
    q: 'What certifications should I look for on a Ceylon sapphire?',
    a: 'For any significant Ceylon sapphire, insist on a report from GIA (Gemological Institute of America), GRS (GemResearch Swisslab), SSEF (Swiss Gemmological Institute), or Gübelin Gem Lab. The report should confirm natural corundum, disclose or exclude heat treatment, and — for premium stones — state geographic origin as Sri Lanka. For unheated stones the phrase "no indications of heating" is what to look for.',
  },
  {
    q: 'Ceylon vs Kashmir sapphires — which is better?',
    a: 'Kashmir sapphires are considered the pinnacle of blue sapphire — famed for a soft, velvety cornflower-blue colour caused by microscopic rutile inclusions — but the Kashmir mines have been virtually exhausted since the early 20th century, and genuine Kashmir stones are almost unobtainable outside auction. Ceylon is the premier accessible source today, and top Ceylon material can rival Kashmir on colour, clarity, and unheated proportion.',
  },
  {
    q: 'Are Ceylon sapphires a good investment?',
    a: 'Fine unheated Ceylon sapphires — with vivid colour, clean clarity, credible certification, and preferably above 3 carats — have historically been one of the most reliable coloured-gemstone investments. Supply is constrained by the geological finiteness of Sri Lanka\'s traditional gem fields; demand is growing across Asia, the Middle East, and the collector market. For current pricing on a specific stone, please make an enquiry — we quote based on the actual gemstone and current market.',
  },
  {
    q: 'Are Ceylon sapphires still being found today?',
    a: 'Yes. Sri Lanka continues to produce Ceylon sapphires from its traditional gem fields — Ratnapura, Elahera, and the highland gem belt — using both traditional pit mining and modern methods. New finds regularly reach the market, including exceptional unheated crystals. However, fine top-colour material remains rare, and truly exceptional stones are increasingly sought after by international collectors.',
  },
  {
    q: 'How can I verify that a sapphire is really from Sri Lanka?',
    a: 'The only reliable way is a geographic-origin report from a top-tier gemological laboratory. GRS, SSEF, Gübelin, and GIA all offer origin determination for corundum. Laboratories combine microscopic inclusion analysis, trace-element chemistry (via LA-ICP-MS), UV-Vis-NIR spectroscopy, and FTIR to compare the stone against reference databases of geologically-verified material from each producing region.',
  },
  {
    q: 'Do Ceylon sapphires come in colours other than blue?',
    a: 'Yes — Sri Lanka is unique in producing gem-quality sapphires across virtually the entire colour range. Ceylon padparadscha (pink-orange) is the rarest and most valuable fancy colour; Ceylon yellow sapphire (Pukhraj) is the world\'s benchmark for yellow; Sri Lanka also produces fine pink, white, green, purple, colour-change, and star sapphires. No other single origin matches Ceylon\'s colour range at gem quality.',
  },
  {
    q: 'What is the Ceylon Gem Identity (CGI)?',
    a: 'Ceylon Gem Identity (CGI) is our digital provenance and identity system for Ceylon gemstones — a way to link each stone to its verified origin, certification, and ownership history through a permanent digital record. It complements traditional laboratory certification with a persistent, verifiable digital passport that travels with the stone.',
  },
  {
    q: 'What is the best size to buy?',
    a: 'For engagement rings, 1–3 carats is the most popular range and offers the best balance of visual impact and value. For investment or collector purposes, exceptional stones above 3 carats appreciate most reliably, and unheated Ceylon material above 5 carats becomes progressively rarer. Sri Lanka regularly produces fine sapphires in the 1–10 carat range with exceptional crystals occasionally exceeding 50 carats.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Ceylon Sapphires', item: 'https://www.serendibgemstones.com/ceylon-sapphires' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Ceylon Sapphires — The World\'s Most Prized Blue Sapphires from Sri Lanka',
      image: 'https://www.serendibgemstones.com/logo.jpg',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://www.serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://www.serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-08-12',
      dateModified: '2026-08-12',
      mainEntityOfPage: 'https://www.serendibgemstones.com/ceylon-sapphires',
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

const relatedCards = [
  { name: 'Blue Sapphire Guide', href: '/gemstones/blue-sapphire', colour: '#1a5f9e', desc: 'The complete guide to Ceylon blue sapphires — colour, clarity, heat treatment, and value.' },
  { name: 'Padparadscha Guide', href: '/gemstones/padparadscha-sapphire', colour: '#e8855e', desc: 'The rarest sapphire — pink-orange, Sri Lanka\'s signature fancy colour.' },
  { name: 'Ruby Guide', href: '/gemstones/ruby', colour: '#c0392b', desc: 'The king of gemstones — Ceylon rubies and the corundum family.' },
  { name: 'Ceylon Gem Identity', href: '/cgi', colour: '#c9a84c', desc: 'Digital provenance and identity for Ceylon gemstones.' },
  { name: 'Buying Guide', href: '/learn/buying-guide', colour: '#3a6fa8', desc: 'Everything you need to know before purchasing a fine sapphire.' },
  { name: 'Custom Sourcing', href: '/custom-sourcing', colour: '#c9a84c', desc: 'Direct sourcing of Ceylon sapphires to your specification.' },
]

const toc = [
  { id: 'what-makes-ceylon', label: 'What Makes a Sapphire "Ceylon"' },
  { id: 'geology', label: 'Sri Lanka\'s Sapphire Geology' },
  { id: 'colours', label: 'Colour Varieties Found in Sri Lanka' },
  { id: 'why-prized', label: 'Why Ceylon Sapphires Are Prized' },
  { id: 'history', label: 'History and Cultural Legacy' },
  { id: 'heated-unheated', label: 'Unheated vs Heated' },
  { id: 'certification', label: 'Certification for Ceylon Sapphires' },
  { id: 'origin-determination', label: 'How Origin Is Determined' },
  { id: 'buying', label: 'Buying a Ceylon Sapphire' },
  { id: 'cgi', label: 'Ceylon Gem Identity (CGI)' },
  { id: 'faq', label: 'FAQ' },
]

export default function CeylonSapphiresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-25" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(26,95,158,0.5) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ background: 'radial-gradient(ellipse 40% 30% at 30% 40%, rgba(201,168,76,0.6) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-offwhite/60">Ceylon Sapphires</span>
          </nav>

          <FadeUp>
            <div className="flex items-start gap-6 mb-8">
              <GemSVG colour="#1a5f9e" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Pillar Guide</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Ceylon Sapphires
                </h1>
                <p className="font-jost text-sm text-offwhite/50 tracking-wide mt-3">The World&apos;s Most Prized Blue Sapphires — from Sri Lanka</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                A Ceylon sapphire is a natural sapphire — a gem-quality crystal of the mineral corundum — mined in Sri Lanka. Sri Lanka has been producing sapphires for at least 2,500 years and remains the world&apos;s premier source, famed for vivid cornflower-blue colour, exceptional clarity, and the highest proportion of naturally unheated stones of any major origin.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Mineral', value: 'Corundum' },
                { label: 'Hardness', value: '9 / 10' },
                { label: 'Mining Since', value: '~2,500 Years' },
                { label: 'Top Colour', value: 'Cornflower Blue' },
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
            <ArticleByline updated="2026-08-12" reviewer="Thusira Ranasinghe" />

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

            <h2 id="what-makes-ceylon">What Makes a Sapphire &ldquo;Ceylon&rdquo;</h2>
            <p>
              &ldquo;Ceylon&rdquo; is the historical English name for the island now called Sri Lanka. In the international coloured-stone trade, however, &ldquo;Ceylon&rdquo; has never been retired: it remains the standard term for sapphires of Sri Lankan geographic origin. A stone can be described as a Ceylon sapphire only if it was mined in Sri Lanka — origin, not style, defines the term. Top-tier gemological laboratories will state origin as &ldquo;Sri Lanka&rdquo; on their reports; the trade continues to use &ldquo;Ceylon&rdquo; interchangeably.
            </p>
            <p>
              Ceylon sapphires are not a single colour. Sri Lanka&apos;s gem gravels produce corundum across virtually the entire colour spectrum — blue is the most famous, but the island also yields the world&apos;s benchmark padparadscha, exceptional yellow (Pukhraj), fine pink, white, star, green, and colour-change sapphires. No other single origin produces such a range at gem quality.
            </p>
            <p>
              What unites all Ceylon sapphires — regardless of colour — is a set of qualities produced by Sri Lanka&apos;s unique geology: bright, open colour with vivid saturation; comparatively clean clarity; and a significantly higher proportion of naturally unheated material than any other major source. These characteristics have made Ceylon the reference standard for sapphires for millennia.
            </p>

            <hr />

            <h2 id="geology">Sri Lanka&apos;s Sapphire Geology</h2>
            <p>
              Sri Lanka&apos;s sapphires are the product of a specific and unusually gem-rich geological setting. Roughly ninety percent of the island&apos;s surface is composed of Precambrian metamorphic rocks — some of the oldest exposed rocks on Earth — divided into the Highland Complex, the Vijayan Complex, and the Wanni Complex. The Highland Complex, running through the central and southern part of the island, is the primary source of the island&apos;s corundum.
            </p>
            <p>
              Sapphires originally crystallised at depth from aluminium-rich metamorphic and pegmatitic environments hundreds of millions of years ago. Over vast timescales, weathering and erosion have released these crystals from their host rocks and concentrated them in secondary alluvial deposits — the gem-bearing gravels (locally called <em>illam</em>) that lie beneath the modern river valleys and paddy fields. Almost all Sri Lankan sapphire mining today is alluvial: pits are sunk through overburden to reach the gem-bearing gravel layer, and the gravel is washed and hand-sorted to recover the crystals.
            </p>
            <p>
              The main producing regions are:
            </p>
            <ul>
              <li><strong>Ratnapura</strong> — the historic &ldquo;City of Gems&rdquo; in Sabaragamuwa Province. The oldest and best-known sapphire mining region in the world.</li>
              <li><strong>Elahera</strong> — a rich mining area in the Central Province, particularly noted for star sapphires and rubies alongside blue and fancy sapphires.</li>
              <li><strong>Eheliyagoda</strong> — a productive area in the Ratnapura District known for both blue sapphires and fancy colours.</li>
              <li><strong>Bakamuna</strong> — a Central Province area producing sapphires and other gem varieties from alluvial workings.</li>
              <li><strong>Kanthale</strong> — an Eastern Province area contributing to Sri Lanka&apos;s output.</li>
              <li><strong>Balangoda, Rakwana, and the highland gem belt</strong> — further significant mining zones with historically productive gravels.</li>
            </ul>
            <p>
              The traditional character of Sri Lankan mining — small-scale, licensed, and largely by hand — has an important consequence: gemstones are handled carefully and full recovery of high-quality material is prioritised. This is one reason Sri Lanka has consistently produced fine gems at commercial scale for over two millennia without exhausting its resources.
            </p>

            <hr />

            <h2 id="colours">Colour Varieties Found in Sri Lanka</h2>
            <p>
              Sri Lanka is unique in producing gem-quality sapphires across virtually the entire colour range. Each of the major varieties has its own guide within our Gemstone Library:
            </p>
            <ul>
              <li><strong><Link href="/gemstones/blue-sapphire">Blue Sapphire</Link></strong> — the flagship. Ceylon blue sapphires are famed for bright, medium-toned cornflower blue with a slight violet secondary hue and exceptional clarity.</li>
              <li><strong><Link href="/gemstones/padparadscha-sapphire">Padparadscha Sapphire</Link></strong> — the rarest and most valuable fancy sapphire, a delicate pink-orange named for the Sinhalese word for lotus blossom. Sri Lanka is the type locality and the world&apos;s benchmark source.</li>
              <li><strong><Link href="/gemstones/yellow-sapphire">Yellow Sapphire</Link></strong> — known in Vedic astrology as <em>Pukhraj</em>, the gemstone of Jupiter. Ceylon is the premier source for top-quality unheated yellow sapphire.</li>
              <li><strong><Link href="/gemstones/pink-sapphire">Pink Sapphire</Link></strong> — Ceylon pink sapphires range from soft baby pink to vivid hot pink, coloured by trace chromium. Sri Lanka is the historic and premier source, and pink sapphires sit at the centre of the famous pink/ruby classification debate.</li>
              <li><strong>White (Colourless) Sapphire</strong> — colourless corundum, prized as a durable natural diamond alternative. Guide coming soon.</li>
              <li><strong><Link href="/gemstones/star-sapphire">Star Sapphire</Link></strong> — asteriated sapphires that display a six-rayed star of light across a domed cabochon. Sri Lanka produces the world&apos;s finest star sapphires, including the celebrated Star of India, Star of Bombay, and Star of Adam.</li>
              <li><strong>Green Sapphire</strong> — from a soft mint through to deep forest green, coloured by iron. Guide coming soon.</li>
              <li><strong>Colour-Change Sapphire</strong> — sapphires that shift colour between daylight and incandescent light, typically blue-violet by day and purple-violet under warm light. A Sri Lankan speciality. Guide coming soon.</li>
            </ul>
            <p>
              Sri Lanka also produces purple, violet, orange, and brown sapphires, and cabochon-cut &ldquo;milky&rdquo; sapphires (geuda) that respond dramatically to heat treatment. This colour range is a direct consequence of the varied trace-element chemistry of the island&apos;s corundum-bearing metamorphic rocks.
            </p>

            <hr />

            <h2 id="why-prized">Why Ceylon Sapphires Are Prized</h2>
            <p>
              Four characteristics have consistently defined Ceylon sapphires at the top of the world market:
            </p>
            <ul>
              <li><strong>Colour character.</strong> Ceylon sapphires typically show bright, open, medium-toned colour with high saturation and pleasant secondary hues. Blue Ceylon material has a lively brilliance and often a slight violet overtone; the colour is neither inky-dark (as some Australian material can be) nor washed-out. Fancy Ceylon sapphires — yellow, pink, padparadscha — display similarly clean, pure hues.</li>
              <li><strong>Clarity.</strong> Sri Lankan sapphires are typically eye-clean or nearly so. The island&apos;s gem-bearing gravels have delivered exceptionally clean crystals for millennia. Combined with fine cutting, this produces stones of unusual brilliance.</li>
              <li><strong>Unheated proportion.</strong> A significantly higher share of Sri Lankan sapphires reaches the market naturally unheated compared to Madagascar, Thailand, Australia, or the East African sources. For collectors and investors, this is decisive: unheated Ceylon sapphires command significant premiums and dominate the top of the auction market.</li>
              <li><strong>Provenance and heritage.</strong> Sri Lanka has been the historical source of many of the world&apos;s most famous sapphires and much of the great historical sapphire jewellery. This heritage is not merely romantic — for auction stones and collector pieces, verified Ceylon origin measurably supports value.</li>
            </ul>

            <hr />

            <h2 id="history">History and Cultural Legacy</h2>
            <p>
              Sri Lanka&apos;s sapphire trade is older than most of the great gemstone-producing traditions. Ancient Greek and Roman writers referred to the island as <em>Taprobane</em> and knew it as a source of extraordinary gemstones. In Sinhala the island was called <em>Ratnadweepa</em> — literally &ldquo;Island of Gems&rdquo; — a name recorded in the earliest Sinhala chronicles.
            </p>
            <p>
              Arab traders — including, according to legend, Sindbad himself — sourced Sri Lankan sapphires and shipped them across the Indian Ocean and up through the Persian Gulf into the great markets of Baghdad, Constantinople, and Cairo. Ceylon sapphires reached the crown jewels of medieval European monarchs, the treasuries of the Ottoman sultans, the Mughal courts, and the royal houses of Southeast Asia.
            </p>
            <p>
              In more recent history, Ceylon sapphires have adorned some of the most recognised jewels in the world. The engagement ring given by Prince Charles to Diana, Princess of Wales — a 12-carat oval Ceylon blue sapphire surrounded by diamonds — is arguably the most photographed piece of jewellery on Earth and now belongs to Catherine, Princess of Wales. The Star of India (563 carats, held by the American Museum of Natural History), the Logan Sapphire (423 carats, Smithsonian), the Blue Belle of Asia (392 carats), and the Star of Bombay (182 carats, Smithsonian) are all Ceylon stones.
            </p>
            <p>
              Ceylon sapphires also appear in religious and cultural contexts. In the Bible, sapphire is repeatedly named among precious stones; in Hindu tradition, sapphire (particularly blue and yellow) is one of the sacred Navaratna gems; in medieval Christian and Islamic tradition, sapphire was believed to protect the wearer and encourage wisdom. These beliefs are cultural heritage rather than claims we ourselves make — but they have shaped the demand for Sri Lankan sapphires across two millennia.
            </p>

            <hr />

            <h2 id="heated-unheated">Unheated vs Heated Ceylon Sapphires</h2>
            <p>
              Heat treatment is the single most important commercial factor in the sapphire market, and understanding it is essential for any Ceylon sapphire buyer. In brief: rough sapphires are heated in controlled furnaces at temperatures typically between 800°C and 1800°C for hours to weeks. This can dissolve internal rutile silk (improving clarity), intensify colour, or remove unwanted colour zones. The process permanently alters the stone&apos;s internal features but is stable — a heated sapphire remains a beautiful, durable gemstone.
            </p>
            <p>
              Two things distinguish Sri Lanka in this context. First, the proportion of Ceylon material that reaches the market naturally unheated is significantly higher than any other major origin. Second, a much larger share of Ceylon rough responds well to heat when it is applied, which is why so much of the world&apos;s finest heated sapphire is also Sri Lankan in origin.
            </p>
            <p>
              For any serious purchase, the treatment question must be settled by a top-tier laboratory report. For deeper reading, see our dedicated articles:
            </p>
            <ul>
              <li><Link href="/learn/what-is-an-unheated-sapphire">What is an unheated sapphire?</Link> — the definitive explainer.</li>
              <li><Link href="/learn/treatments">Sapphire treatments</Link> — an overview of all treatment types, including beryllium diffusion, glass filling, and irradiation.</li>
              <li><Link href="/learn/what-does-no-heat-mean-on-certificate">What does &ldquo;no heat&rdquo; mean on a certificate?</Link> — how to read treatment disclosures on GIA and GRS reports.</li>
            </ul>
            <p>
              Fine unheated Ceylon sapphires command significant premiums over comparable heated stones. At major auction houses (Christie&apos;s, Sotheby&apos;s, Bonhams) exceptional unheated Ceylon material regularly exceeds pre-sale estimates, and unheated status is now the single most important price driver for investment-grade sapphires.
            </p>

            <hr />

            <h2 id="certification">Certification for Ceylon Sapphires</h2>
            <p>
              For any significant Ceylon sapphire purchase — anything intended for serious jewellery, investment, or Pukhraj — a report from a top-tier gemological laboratory is essential. The four laboratories universally recognised for corundum are:
            </p>
            <ul>
              <li><strong>GIA (Gemological Institute of America)</strong> — the global reference standard for identification and treatment disclosure. GIA offers origin determination as an add-on service.</li>
              <li><strong>GRS (GemResearch Swisslab)</strong> — particularly valued for colour grading (using trade-recognised descriptors such as &ldquo;Royal Blue&rdquo; and &ldquo;Vivid Blue&rdquo;) and geographic origin.</li>
              <li><strong>SSEF (Swiss Gemmological Institute)</strong> — Swiss laboratory highly regarded for scientific rigour and origin determination.</li>
              <li><strong>Gübelin Gem Lab</strong> — Swiss laboratory with a deep provenance-research reputation, particularly for auction-grade material.</li>
            </ul>
            <p>
              A credible Ceylon sapphire report will confirm the stone as natural corundum, disclose any heat treatment (with the phrase &ldquo;no indications of heating&rdquo; for unheated material), and — critically — state geographic origin as Sri Lanka where an origin service has been requested.
            </p>
            <p>
              For a fuller treatment of certification, including how to read specific report types and what the different lab designations mean, see our dedicated pages:
            </p>
            <ul>
              <li><Link href="/learn/certification">Certification: a complete guide</Link> — how top-tier gemological reports work and what to look for.</li>
              <li><Link href="/learn/gia-vs-grs-certificate">GIA vs GRS certificates</Link> — a side-by-side comparison of the two most common reports for coloured stones.</li>
            </ul>

            <hr />

            <h2 id="origin-determination">How Origin Is Determined</h2>
            <p>
              Geographic origin — Sri Lanka vs Madagascar vs Kashmir vs Myanmar — is one of the most technically demanding determinations in gemmology. Top laboratories combine several lines of evidence:
            </p>
            <ul>
              <li><strong>Microscopic inclusion analysis.</strong> Sri Lankan sapphires host characteristic inclusion suites — silk (fine rutile needles), specific mineral crystals (zircon, apatite), and healing patterns — that a trained gemmologist can recognise under magnification.</li>
              <li><strong>Trace-element chemistry.</strong> Laser ablation ICP-MS quantifies the parts-per-million concentrations of iron, titanium, chromium, gallium, magnesium, and other trace elements. Different origins have measurably different chemical fingerprints.</li>
              <li><strong>UV-Vis-NIR and FTIR spectroscopy.</strong> Absorption spectra reveal colour-causing chromophores and treatment history.</li>
              <li><strong>Reference-database comparison.</strong> Each result is compared against extensive laboratory reference collections of geologically-verified material from every producing region.</li>
            </ul>
            <p>
              For a technical deep-dive and a side-by-side comparison with the other historically important sapphire origin, see:
            </p>
            <ul>
              <li><Link href="/learn/how-is-sapphire-origin-determined">How is sapphire origin determined?</Link> — the laboratory science explained.</li>
              <li><Link href="/learn/ceylon-vs-kashmir-sapphire">Ceylon vs Kashmir sapphire</Link> — the two great origins compared.</li>
            </ul>

            <hr />

            <h2 id="buying">Buying a Ceylon Sapphire</h2>
            <p>
              Buying a fine Ceylon sapphire is a considered purchase. The variables that matter — colour, clarity, cut, carat, treatment, origin, certification, provenance — all interact. A slightly smaller unheated stone with vivid colour and a GRS or Gübelin origin report will typically outperform a larger, heated stone of similar face-up appearance both aesthetically and as a store of value.
            </p>
            <p>
              The essentials to check before buying:
            </p>
            <ul>
              <li><strong>Independent certification</strong> from GIA, GRS, SSEF, or Gübelin — never rely on a dealer&apos;s in-house report alone for a significant purchase.</li>
              <li><strong>Treatment disclosure</strong> stated explicitly on the report. For unheated stones, the words &ldquo;no indications of heating&rdquo; (or equivalent).</li>
              <li><strong>Origin</strong> stated as Sri Lanka where you are paying a Ceylon premium.</li>
              <li><strong>Colour</strong> — evaluate under multiple light sources (daylight, indoor incandescent, LED). Fine Ceylon stones should remain vivid in all.</li>
              <li><strong>Clarity</strong> — eye-clean is the working benchmark for fine stones; visible inclusions must be evaluated for their effect on beauty and durability.</li>
              <li><strong>Cut</strong> — the stone should show even face-up colour with no obvious windowing, extinction, or off-centre culet.</li>
              <li><strong>Vendor reputation and traceability</strong> — buy from a dealer who can tell you where the stone came from and stands behind it.</li>
            </ul>
            <p>
              For a step-by-step framework and further reading, see:
            </p>
            <ul>
              <li><Link href="/learn/buying-guide">The complete buying guide</Link> — end-to-end guidance for anyone buying a fine sapphire.</li>
              <li><Link href="/custom-sourcing">Custom sourcing</Link> — how we source Ceylon sapphires directly from Sri Lanka to buyer specifications.</li>
              <li><Link href="/for-jewellers">For jewellers</Link> — direct trade sourcing for the international jewellery trade.</li>
            </ul>

            <hr />

            <h2 id="cgi">Ceylon Gem Identity (CGI)</h2>
            <p>
              <strong>Ceylon Gem Identity (CGI)</strong> is our digital provenance and identity system for Ceylon gemstones — a persistent digital passport that travels with each stone and links it to its verified origin, laboratory certification, and ownership history. CGI complements traditional laboratory certification with a permanent, verifiable digital record. Learn more:
            </p>
            <ul>
              <li><Link href="/cgi">Ceylon Gem Identity overview</Link> — what CGI is and why it matters.</li>
              <li><Link href="/cgi/verification">CGI verification</Link> — how to verify a stone&apos;s CGI record.</li>
              <li><Link href="/cgi/how-gin-works">How the Gem Identity Number (GIN) works</Link> — the technical foundation of CGI.</li>
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
              { label: 'GIA — Gemological Institute of America', detail: 'Coloured stone identification, treatment disclosure, and origin reports', href: 'https://www.gia.edu' },
              { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and origin determination for corundum', href: 'https://www.gemresearch.ch' },
              { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and origin determination for corundum', href: 'https://www.ssef.ch' },
              { label: 'Gübelin Gem Lab', detail: 'Origin determination and provenance research for sapphires', href: 'https://www.gubelin.com/en/gemlab' },
              { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on sapphire origin and treatments', href: 'https://www.gia.edu/gems-gemology' },
              { label: 'Journal of Gemmology (Gem-A)', detail: 'Peer-reviewed gemmological research, including Sri Lankan corundum studies', href: 'https://gem-a.com/gem-hub/publications/the-journal-of-gemmology' },
              { label: 'National Gem & Jewellery Authority of Sri Lanka (NGJA)', detail: 'Sri Lankan gem industry regulation and export certification', href: 'https://www.ngja.gov.lk' },
              { label: 'ICA — International Colored Gemstone Association', detail: 'Global trade body for the coloured stone industry', href: 'https://www.gemstone.org' },
              { label: 'CIBJO — The World Jewellery Confederation', detail: 'International gemstone nomenclature and disclosure standards (Blue Books)', href: 'https://www.cibjo.org' },
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
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Sourcing a Ceylon sapphire?</p>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">Tell us your preferred colour, size, treatment, and certification. We source directly from Sri Lanka.</p>
                <Link href="/contact" className="block w-full py-2.5 text-center font-jost text-xs tracking-widest uppercase bg-teal hover:bg-teal-light text-white transition-colors">
                  Enquire Now
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related grid */}
      <section className="bg-dark-card border-t border-teal/10 py-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-6">Continue Reading</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedCards.map((card) => (
                <Link key={card.name} href={card.href} className="group border border-white/6 hover:border-teal/30 bg-dark p-6 transition-colors">
                  <GemSVG colour={card.colour} size={48} className="mb-4" />
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold group-hover:text-teal-light transition-colors mb-2">{card.name}</h3>
                  <p className="font-jost text-xs text-offwhite/40 leading-relaxed">{card.desc}</p>
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
            Ready to acquire a Ceylon sapphire?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            We source Ceylon sapphires — blue, padparadscha, yellow, pink, and beyond — directly from Sri Lanka&apos;s finest mines and cutting workshops. Tell us what you are looking for and we will respond with suitable options from current inventory.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Make an Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
