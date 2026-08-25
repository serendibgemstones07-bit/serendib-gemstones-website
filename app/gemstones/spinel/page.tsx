import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Spinel — The Complete Guide to Ceylon Spinel (Blue, Red, Pink)',
  description:
    'Spinel is a naturally beautiful, historically famous gemstone once confused with ruby. Sri Lanka (Ceylon) is one of the world\'s premier sources for fine spinel — cobalt blue, hot pink, vivid red, and delicate lavender. Learn about colours, treatments, certification, and how to buy.',
  alternates: { canonical: 'https://www.serendibgemstones.com/gemstones/spinel' },
}

const faqItems = [
  {
    q: 'What is spinel?',
    a: 'Spinel is a magnesium aluminium oxide (MgAl₂O₄) that occurs in a wide range of colours — red, pink, blue, purple, violet, orange, and even black. It is a distinct mineral species from corundum (sapphire and ruby), though the two are often found in the same deposits and were historically confused. Spinel has a Mohs hardness of 8, high brilliance, and — crucially for collectors — occurs in nature almost entirely without heat treatment.',
  },
  {
    q: 'Why is spinel famous?',
    a: 'Many of the world\'s most famous historic "rubies" are actually spinels. The Black Prince\'s Ruby in the British Imperial State Crown and the Timur Ruby in the British royal collection are both large red spinels. Until the late nineteenth century, gemmologists could not reliably distinguish red spinel from ruby, and the two were traded interchangeably. Modern analysis has revealed that many of the most historically important "rubies" in royal collections are, in fact, spinels — restoring the stone\'s reputation and drawing collectors to it in recent decades.',
  },
  {
    q: 'Where do the best spinels come from?',
    a: 'Sri Lanka (Ceylon), Myanmar (Burma — particularly the Mogok Stone Tract), Tanzania (Mahenge), Tajikistan (Kuh-i-Lal), and Vietnam are the primary sources. Ceylon produces spinels in nearly every colour — cobalt blue, hot pink, red, purple, and lavender — with high clarity and no heat treatment. Mahenge produced spectacular hot pink and red spinels from a famous 2007 find. Burma remains the classical source of the finest reds and pinks.',
  },
  {
    q: 'Is spinel a natural gemstone?',
    a: 'Yes — spinel is a natural mineral that forms in the same metamorphic environments as ruby. Note that "synthetic spinel" (produced by flame fusion since the early twentieth century) has been sold as a diamond and gemstone simulant for decades; a small "spinel" in inexpensive jewellery is often synthetic and should not be confused with the natural gemstone. Natural spinel is genuinely rare and increasingly valued.',
  },
  {
    q: 'Are spinels heat-treated?',
    a: 'Historically, spinel has been one of the very few valuable coloured gemstones that occurs in nature essentially unheated. This is one of the reasons spinel has become fashionable with informed collectors — a fine natural spinel is nature\'s own colour, not a laboratory improvement. Recently, some heat treatment of spinel has been reported (particularly to improve red saturation), and this is disclosed on laboratory reports. Unheated Ceylon spinels command a premium.',
  },
  {
    q: 'What certifications should I look for on a spinel?',
    a: 'For any significant spinel, insist on a report from a top-tier laboratory — GIA, GRS, SSEF, or Gübelin. The report should confirm natural spinel (as opposed to synthetic), disclose any heat treatment, and — for the finest stones — determine geographic origin. For cobalt-blue spinels, the report should confirm cobalt as the colour cause (as distinct from iron-blue, which is a lower category of stone).',
  },
  {
    q: 'Are spinels suitable for engagement rings?',
    a: 'Yes — spinel is well suited to engagement rings. With a Mohs hardness of 8, it is very durable for daily wear (slightly less scratch-resistant than sapphire at 9, but still excellent). Its natural, untreated colour and historical romance are increasingly appealing to buyers seeking something distinctive. Red and pink spinels have become fashionable modern alternatives to ruby and pink sapphire.',
  },
  {
    q: 'What is the best colour for a spinel?',
    a: 'The most valued spinels are: (1) cobalt blue — the trade\'s newest superstar, with vivid, electric blue coloured by cobalt, primarily from Sri Lanka and Vietnam; (2) vivid pinkish red — the historic "ruby-red" colour epitomised by Mahenge and Mogok material; (3) hot pink — bright, saturated bubblegum pink, particularly from Mahenge and Mogok; (4) fine violet-purple; and (5) neon-red from Mahenge. Grey, brown, and heavily-toned stones sit lower in the market.',
  },
  {
    q: 'Are spinels a good investment?',
    a: 'Fine natural spinels — particularly cobalt blue Ceylon spinels and pink or red Burmese and Mahenge material — have appreciated strongly over the past decade as the market has recognised the stone\'s rarity and natural colour. Prices for fine spinel above 3 carats have risen substantially, though the market is smaller and less liquid than ruby or sapphire. For current pricing on a specific stone, please make an enquiry — we quote based on the actual gemstone and current market.',
  },
  {
    q: 'What is the difference between spinel and ruby?',
    a: 'Ruby is corundum (aluminium oxide, Al₂O₃) with Mohs hardness 9. Spinel is magnesium aluminium oxide (MgAl₂O₄) with Mohs hardness 8. Visually, fine red spinel and ruby can look extremely similar, which is why they were confused for centuries. Modern testing distinguishes them easily: spinel is singly refractive; ruby is doubly refractive. Beyond the science, spinel is generally cleaner (fewer inclusions), essentially unheated in nature, and priced below ruby of comparable colour and size.',
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
        { '@type': 'ListItem', position: 3, name: 'Spinel', item: 'https://www.serendibgemstones.com/gemstones/spinel' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Spinel — The Complete Guide to Ceylon Spinel',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://www.serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://www.serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-08-25',
      dateModified: '2026-08-25',
      mainEntityOfPage: 'https://www.serendibgemstones.com/gemstones/spinel',
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
  { name: 'Ruby', href: '/gemstones/ruby', colour: '#c0392b', desc: 'Spinel\'s historic sibling — the stone spinel was mistaken for through centuries of confusion.' },
  { name: 'Blue Sapphire', href: '/gemstones/blue-sapphire', colour: '#1a5f9e', desc: 'Ceylon\'s classic corundum blue — the benchmark against which cobalt-blue spinel is measured.' },
  { name: 'Pink Sapphire', href: '/gemstones/pink-sapphire', colour: '#d46b9a', desc: 'The corundum cousin — Ceylon pink sapphires and pink spinels share the same mines.' },
]

const toc = [
  { id: 'what-is', label: 'What Is Spinel?' },
  { id: 'history', label: 'The Great Ruby Confusion' },
  { id: 'origins', label: 'Where Are They Found?' },
  { id: 'ceylon', label: 'Sri Lanka\'s Spinels' },
  { id: 'cobalt-blue', label: 'Cobalt-Blue Spinel' },
  { id: 'colours', label: 'Colour Range' },
  { id: 'quality', label: 'Quality Factors' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'certification', label: 'Certification' },
  { id: 'investment', label: 'Investment Value' },
  { id: 'jewellery', label: 'Jewellery Guide' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'faq', label: 'FAQ' },
]

export default function SpinelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(60,100,200,0.4) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gemstones" className="hover:text-teal transition-colors">Gemstones</Link>
            <span>/</span>
            <span className="text-offwhite/60">Spinel</span>
          </nav>

          <FadeUp>
            <div className="flex items-start gap-6 mb-8">
              <GemSVG colour="#3c64c8" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Spinel
                </h1>
                <p className="font-jost text-sm text-offwhite/45 tracking-wide mt-3">The historic imposter — now recognised as one of nature&apos;s finest untreated gems</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                Spinel is a magnesium aluminium oxide (MgAl₂O₄) gemstone that occurs in a wide range of colours — cobalt blue, hot pink, red, purple, violet, orange, and black. It has a Mohs hardness of 8 and is one of the very few coloured gemstones that occurs in nature essentially without heat treatment. Sri Lanka (Ceylon) is one of the world&apos;s premier sources, particularly for cobalt blue, hot pink, and delicate lavender spinels.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Mineral', value: 'Spinel' },
                { label: 'Hardness', value: '8 / 10' },
                { label: 'Top Origin', value: 'Sri Lanka' },
                { label: 'Typical Treatment', value: 'None' },
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

      <section className="bg-dark px-6 lg:px-10 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
          <div className="prose-gem">
            <ArticleByline updated="2026-08-25" reviewer="Thusira Ranasinghe" />

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

            <h2 id="what-is">What Is Spinel?</h2>
            <p>
              Spinel is a magnesium aluminium oxide (MgAl₂O₄) that crystallises in the cubic system, giving it high brilliance, a distinctive octahedral crystal form, and — critically for gemmology — <strong>single refraction</strong>, which distinguishes it from doubly-refractive corundum. Spinel occurs in a wide range of colours, coloured by trace elements: chromium (red and pink), cobalt (electric blue), iron (blue to blue-green), and various combinations producing purple, violet, orange, and beyond.
            </p>
            <p>
              With a Mohs hardness of 8, spinel is very durable — well suited to everyday jewellery — though slightly softer than sapphire and ruby. Its refractive index (1.71–1.73) gives it strong brilliance, and its typical clean clarity means fine spinels often show exceptional life. Spinel is one of the very few valuable coloured gemstones that occurs in nature essentially without heat treatment, making it a favourite of purists.
            </p>

            <hr />

            <h2 id="history">The Great Ruby Confusion</h2>
            <p>
              For most of gemmological history, spinel was called ruby. Until the late nineteenth century, no reliable method existed to distinguish red spinel from ruby by simple examination — both are red gemstones, both can appear in the same alluvial deposits, and both can show similar inclusions. The result is that many of the most famous &ldquo;rubies&rdquo; in royal collections are actually spinels.
            </p>
            <p>
              <strong>The Black Prince&apos;s Ruby</strong>, set at the front of the British Imperial State Crown, is a large uncut red spinel of approximately 170 carats, acquired by the Black Prince (Prince Edward of Woodstock) in the fourteenth century and worn by Henry V at the Battle of Agincourt. <strong>The Timur Ruby</strong>, a 361-carat red spinel with inscriptions from Mughal emperors, is also part of the British royal collection. <strong>The Samarian Spinel</strong>, at approximately 500 carats the largest known spinel in the world, is in the Iranian crown jewels. All of these were treated as rubies for centuries.
            </p>
            <p>
              The reclassification of these historic &ldquo;rubies&rdquo; as spinels — a scientific correction, not a demotion — has done much to raise spinel&apos;s reputation in recent decades. Collectors have increasingly recognised that a stone worn by kings and queens for centuries, valued as a national treasure, is not diminished by being called by its correct mineral name. If anything, the historical romance of the ruby-spinel confusion has made spinel one of the most interesting stones in the coloured-gem market.
            </p>

            <hr />

            <h2 id="origins">Where Are Spinels Found?</h2>
            <ul>
              <li><strong>Sri Lanka (Ceylon)</strong> — one of the world&apos;s most consistent sources of fine spinel across the colour spectrum, with particular strength in cobalt blue, hot pink, red, and delicate lavender material. Ceylon spinels are prized for high clarity and natural, unheated colour.</li>
              <li><strong>Myanmar (Mogok Stone Tract)</strong> — the classical source of the finest red and pink spinels, including many of the historic &ldquo;rubies&rdquo; in royal collections. Mogok remains an important producer of top-market spinel.</li>
              <li><strong>Tanzania (Mahenge)</strong> — a 2007 discovery produced spectacular hot-pink and neon-red spinels that redefined the market for pink spinel. Mahenge material commands strong premiums.</li>
              <li><strong>Tajikistan (Kuh-i-Lal)</strong> — the historic source of the &ldquo;balas rubies&rdquo; of medieval trade — actually pink and red spinels. Still produces occasionally.</li>
              <li><strong>Vietnam (Luc Yen)</strong> — a modern source of fine cobalt-blue and pink spinels.</li>
              <li><strong>Others</strong> — Madagascar, Pakistan, and Afghanistan produce spinel occasionally.</li>
            </ul>

            <hr />

            <h2 id="ceylon">Sri Lanka&apos;s Spinels</h2>
            <p>
              Sri Lanka has produced spinel for at least 2,500 years, alongside sapphires and rubies. The main mining regions — <strong>Ratnapura</strong>, <strong>Elahera</strong>, and the highland gem belt — all produce spinel from the same alluvial deposits that yield corundum. Ceylon spinels appear in nearly every colour, but the country is particularly associated with:
            </p>
            <ul>
              <li><strong>Cobalt blue:</strong> Sri Lanka is one of the very few sources of true cobalt-coloured blue spinel — vivid, electric, saturated blue that has become one of the hottest categories in the fine coloured-stone market.</li>
              <li><strong>Hot pink:</strong> Bright, saturated pink spinel comparable to Mahenge and Mogok material.</li>
              <li><strong>Red:</strong> Ceylon reds tend to be slightly lighter and cleaner than Burmese material; a well-chosen Ceylon red can rival Burmese ruby in visual impact at a fraction of the price.</li>
              <li><strong>Lavender and violet:</strong> Delicate, distinctive stones with excellent clarity — a Ceylon specialty.</li>
              <li><strong>Purple and grey-blue:</strong> Wide range of unusual and collectible colours.</li>
            </ul>
            <p>
              Ceylon spinels are almost invariably untreated. The country&apos;s well-established gem industry and international laboratory presence make certification straightforward.
            </p>

            <hr />

            <h2 id="cobalt-blue">Cobalt-Blue Spinel</h2>
            <p>
              Cobalt-blue spinel is the current superstar of the spinel market. Coloured by trace amounts of cobalt (rather than the more common iron), cobalt-blue spinels show a vivid, electric, saturated blue that has been compared to fine cornflower Ceylon sapphire — but with the added distinction of being essentially always untreated.
            </p>
            <p>
              Cobalt-blue spinel is genuinely rare. Sri Lanka and Vietnam (Luc Yen) are the two main sources, and material with fine saturation above 2 carats commands substantial prices. Laboratory reports for cobalt-blue spinel should specifically identify cobalt as the colour cause — an iron-blue spinel, though pretty, sits in a different (lower) market category. This is one of the categories where a top-tier laboratory report matters most.
            </p>

            <hr />

            <h2 id="colours">Colour Range</h2>
            <ul>
              <li><strong>Cobalt blue:</strong> Vivid, electric, saturated blue coloured by cobalt. The most valued single colour.</li>
              <li><strong>Vivid pink to hot pink:</strong> Bright, saturated pink — the &ldquo;Mahenge pink&rdquo; category defined by the 2007 Tanzania find.</li>
              <li><strong>Red:</strong> Historic &ldquo;balas ruby&rdquo; and &ldquo;Ceylon ruby&rdquo; colours, ranging from vivid red to slightly pinkish red.</li>
              <li><strong>Purple and violet:</strong> Deep, saturated purple; often distinctive of Ceylon and Burmese material.</li>
              <li><strong>Lavender:</strong> Delicate light purple, particularly associated with Ceylon.</li>
              <li><strong>Grey and slate blue:</strong> Cool, unusual colours with a small but devoted collector following.</li>
              <li><strong>Orange:</strong> Rare and distinctive, sometimes approaching padparadscha-like tones.</li>
              <li><strong>Black:</strong> Coloured by iron; commercially less valuable but occasionally used in men&apos;s jewellery.</li>
            </ul>

            <hr />

            <h2 id="quality">Quality Factors</h2>

            <h3>Colour</h3>
            <p>
              The most valued spinels combine vivid, saturated hue with medium tone and even distribution. For blue spinel, cobalt-caused colour is the top of the market. For red and pink, the ideal is a bright, clean saturation without brown or grey overlay. For purple and violet, the ideal is a deep, rich, evenly-saturated colour without muddiness.
            </p>

            <h3>Clarity</h3>
            <p>
              Spinel is a Type II gemstone. Fine spinels are typically eye-clean or near eye-clean, and Ceylon material is particularly noted for cleanliness. Inclusions often take the form of small octahedral crystals of other spinel, or fingerprint-like healed fissures. Heavily included stones sit below.
            </p>

            <h3>Cut</h3>
            <p>
              Cushion, oval, and round brilliant cuts are most common. Because spinel is single-refractive with strong brilliance, well-cut stones show high life and sparkle. Cutters typically favour orientations that maximise colour saturation while retaining brilliance.
            </p>

            <h3>Carat Weight</h3>
            <p>
              Spinels above 2 carats with fine colour are notable; above 5 carats they are rare; above 10 carats with top colour and clarity they enter the collector market. Cobalt-blue Ceylon spinels above 3 carats and fine Burmese red spinels above 3 carats are genuinely scarce and priced accordingly.
            </p>

            <hr />

            <h2 id="treatments">Treatments</h2>
            <p>
              Spinel has historically been one of the very few valuable coloured gemstones that occurs in nature essentially without heat treatment. This is one of the reasons collectors love spinel: what you see is what nature made. Some recent heat treatment of spinel has been reported, particularly to improve red saturation, and this must be disclosed on any credible laboratory report. Beryllium diffusion and fracture filling are essentially not encountered in fine spinel. Unheated Ceylon spinel — the default and the norm — sits at the top of the market.
            </p>

            <hr />

            <h2 id="certification">Certification</h2>
            <p>
              For any significant spinel, an independent laboratory report is essential. The report should confirm natural spinel (as distinct from synthetic spinel, which has been sold as a simulant since the early twentieth century), identify the colour cause (particularly cobalt for blue spinels), disclose any treatments, and — for the finest stones — determine geographic origin. The top-tier laboratories for spinel are GIA, GRS, SSEF, and Gübelin. For cobalt-blue spinel, insist on explicit confirmation of cobalt colouration on the report.
            </p>

            <hr />

            <h2 id="investment">Investment Value</h2>
            <p>
              Fine natural spinels have appreciated strongly over the past decade as the market has recognised the stone&apos;s rarity, natural colour, and historical romance. Cobalt-blue Ceylon spinel and Mahenge pink spinel have led the increase. Structural factors supporting long-term value:
            </p>
            <ul>
              <li><strong>Recognition:</strong> The market has been catching up with spinel&apos;s true rarity for two decades and continues to do so.</li>
              <li><strong>Natural colour:</strong> Almost always untreated — an increasingly valued attribute in a treated-heavy coloured-stone market.</li>
              <li><strong>Supply constraints:</strong> Mahenge production has slowed; Ceylon and Mogok remain important but limited.</li>
              <li><strong>Historical prestige:</strong> The stone worn by kings and queens for centuries is finally being recognised under its correct name.</li>
            </ul>
            <p>
              As with all coloured gemstones, only investment-grade material appreciates reliably. For current pricing on a specific stone, please make an enquiry.
            </p>

            <hr />

            <h2 id="jewellery">Jewellery Guide</h2>
            <ul>
              <li><strong>Engagement rings:</strong> Spinel is an excellent, distinctive engagement-ring choice. Mohs 8 hardness handles daily wear well. Cobalt-blue and pink spinels are particularly fashionable modern alternatives to sapphire and pink sapphire.</li>
              <li><strong>Halo settings:</strong> A spinel centre with a diamond halo emphasises brilliance and colour.</li>
              <li><strong>Statement rings and cocktail pieces:</strong> Larger spinels (3+ carats) make dramatic statement rings.</li>
              <li><strong>Pendants and earrings:</strong> Fine spinels of any colour work beautifully in pendant and earring designs.</li>
            </ul>
            <p>
              <strong>Metal choice:</strong> White gold and platinum give cool spinel colours (blue, purple, lavender) a crisp, modern look. Yellow gold enhances the warmth of red, pink, and orange spinels. Rose gold pairs beautifully with pink spinel.
            </p>

            <hr />

            <h2 id="care">Care &amp; Maintenance</h2>
            <ul>
              <li><strong>Cleaning:</strong> Warm soapy water and a soft brush. Ultrasonic and steam cleaning are generally safe for untreated spinel.</li>
              <li><strong>Storage:</strong> Store separately from softer stones. Spinel can scratch or be scratched by other stones of similar hardness.</li>
              <li><strong>Wear:</strong> Well suited to daily wear. Remove during heavy manual work or exposure to harsh chemicals.</li>
              <li><strong>Professional check:</strong> Have settings inspected annually.</li>
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
              { label: 'GIA — Gemological Institute of America', detail: 'Spinel identification, treatment disclosure, and cobalt-blue analysis', href: 'https://www.gia.edu' },
              { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and origin determination for spinel', href: 'https://www.gemresearch.ch' },
              { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy for cobalt vs iron blue spinel', href: 'https://www.ssef.ch' },
              { label: 'Gübelin Gem Lab', detail: 'Origin determination and provenance research for spinel', href: 'https://www.gubelin.com/en/gemlab' },
              { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on Mahenge, Mogok, and Ceylon spinel', href: 'https://www.gia.edu/gems-gemology' },
              { label: 'National Gem & Jewellery Authority of Sri Lanka (NGJA)', detail: 'Sri Lankan gem industry regulation and export certification', href: 'https://www.ngja.gov.lk' },
            ]} />
          </div>

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
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Looking for a spinel?</p>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">Cobalt blue, hot pink, red, lavender — tell us the colour and size you want. We source Ceylon spinels directly from Sri Lanka&apos;s traditional deposits.</p>
                <Link href="/contact" className="block w-full py-2.5 text-center font-jost text-xs tracking-widest uppercase bg-teal hover:bg-teal-light text-white transition-colors">
                  Enquire Now
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

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

      <section className="bg-dark py-20 px-6 text-center border-t border-teal/10">
        <FadeUp>
          <p className="font-cormorant italic text-2xl text-offwhite/60 mb-4">
            Interested in a Ceylon spinel?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            Tell us which colour and size you&apos;re looking for — cobalt blue, hot pink, red, lavender — and we&apos;ll respond with suitable Ceylon options from our current sourcing.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Make an Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
