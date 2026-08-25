import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Zircon — The Complete Guide to Ceylon Natural Zircon (Blue, Golden, Colourless)',
  description:
    'Zircon is a natural gemstone (not cubic zirconia) with exceptional brilliance and fire. Sri Lanka (Ceylon) is a historic and premier source, particularly for fine blue and golden zircon. Learn about types, colour range, treatments, certification, and how to buy.',
  alternates: { canonical: 'https://www.serendibgemstones.com/gemstones/zircon' },
}

const faqItems = [
  {
    q: 'What is zircon?',
    a: 'Zircon is a natural gemstone — zirconium silicate (ZrSiO₄) — with exceptional brilliance, high dispersion (fire), and a distinctive doubly-refractive optical character. It occurs in a wide range of colours including blue, golden yellow, red, brown, colourless, and green. With a Mohs hardness of 6 to 7.5 depending on structural condition, natural zircon has been used as a gemstone for over two thousand years and is one of the oldest minerals on Earth — the oldest known terrestrial mineral crystals are zircons over 4.4 billion years old.',
  },
  {
    q: 'Is zircon the same as cubic zirconia?',
    a: 'No — they are entirely different. Zircon is a natural mineral (zirconium silicate) with high refractive index, strong fire, and centuries of use as a genuine gemstone. Cubic zirconia (CZ) is a synthetic material (cubic zirconium dioxide) manufactured since the 1970s as a diamond simulant. The similarity of the names causes constant confusion. Natural zircon is a rare, valuable gemstone; cubic zirconia is a lab-made diamond substitute worth a fraction of a percent of a real diamond.',
  },
  {
    q: 'Where do the best zircons come from?',
    a: 'Sri Lanka (Ceylon), Cambodia (Ratanakiri), Myanmar (Burma), Tanzania, and Australia are the primary sources of gem-quality zircon. Sri Lanka has produced fine zircon for over 2,000 years and remains one of the world\'s premier sources for a wide colour range, particularly for large, clean stones with high dispersion. Cambodian Ratanakiri material is famous for its intense electric-blue heat-treated zircon.',
  },
  {
    q: 'What is blue zircon?',
    a: 'Blue zircon is the most commercially popular colour of gem zircon, typically produced by heat-treating naturally brown or reddish zircon in a low-oxygen environment. The resulting colour is a vivid, saturated electric-blue-to-teal that ranks among the most brilliant blues in the gem world. Cambodia is the classical source; Sri Lanka produces exceptional material in a range of blue tones. Note that some blue zircon can slowly return toward its original colour with prolonged exposure to sunlight — a rare characteristic worth knowing about.',
  },
  {
    q: 'What are the three types of zircon (high, medium, low)?',
    a: 'Natural zircon can exist in three structural states depending on how much internal damage (metamictisation) it has suffered from trace uranium and thorium in the crystal. High zircon is fully crystalline, with the highest refractive index and hardness (~7.5); low zircon (metamict) has been amorphised over geological time and has lower hardness (~6) and refractive index; medium (or intermediate) zircon sits between. Most gem-quality zircon in the trade is high or medium. Heat treatment can partially restore metamict zircon toward high-type properties.',
  },
  {
    q: 'Are zircons heat-treated?',
    a: 'Most commercial blue zircon is heat-treated. Some golden and colourless zircons are also heat-treated. Certain colours — including some greens, reds, and browns — are typically natural. Heat treatment for zircon is stable in most cases but must be disclosed. Ceylon zircon includes both heated and unheated material; the country produces natural golden and colourless stones as well as fine heated blues.',
  },
  {
    q: 'What certifications should I look for on a zircon?',
    a: 'For any significant zircon, insist on a report from a top-tier laboratory — GIA, GRS, SSEF, or Gübelin. The report should confirm natural zircon (not cubic zirconia and not synthetic), disclose treatments, note the structural type (high/medium/low), and describe colour. For coloured natural zircon (particularly natural blue, green, and red), origin and treatment disclosure both matter.',
  },
  {
    q: 'Are zircons suitable for engagement rings?',
    a: 'Zircon is suitable for many jewellery applications but requires care in ring designs due to its comparatively softer edges — high zircon (~7.5 Mohs) is durable, but the material can chip on sharp facet edges under impact. Protective bezel and halo settings are advisable for daily-wear rings. For pendants and earrings, zircon is an excellent choice with fewer wear concerns.',
  },
  {
    q: 'What is the best colour for a zircon?',
    a: 'Fine blue zircon shows an electric, vivid, saturated blue-to-teal — the colour most sought after in the modern market. Fine golden zircon shows a warm, honey-to-champagne yellow with high dispersion. Fine colourless zircon can rival diamond for brilliance and fire. Red and green zircon are rarer and highly prized by collectors. As with all gemstones, evenness of colour, high transparency, and strong brilliance are the shared markers of quality.',
  },
  {
    q: 'Are zircons a good investment?',
    a: 'Fine natural zircon has become increasingly appreciated as collectors and jewellery buyers rediscover a stone that was extremely popular in the early twentieth century, then eclipsed by other gemstones. Investment-grade zircon means large size, exceptional colour, clean clarity, and — ideally — a top-lab report specifying natural origin and treatment status. The market is smaller than for sapphire or spinel, so liquidity is lower, but fine stones hold their value. For current pricing on a specific stone, please make an enquiry.',
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
        { '@type': 'ListItem', position: 3, name: 'Zircon', item: 'https://www.serendibgemstones.com/gemstones/zircon' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Zircon — The Complete Guide to Ceylon Natural Zircon',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://www.serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://www.serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-08-25',
      dateModified: '2026-08-25',
      mainEntityOfPage: 'https://www.serendibgemstones.com/gemstones/zircon',
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
  { name: 'Blue Sapphire', href: '/gemstones/blue-sapphire', colour: '#1a5f9e', desc: 'Ceylon\'s classic cornflower blue corundum — sapphire is the traditional benchmark for gem-quality blue.' },
  { name: 'Yellow Sapphire', href: '/gemstones/yellow-sapphire', colour: '#d4af37', desc: 'Golden Ceylon corundum — a durable alternative to golden zircon.' },
  { name: 'Spinel', href: '/gemstones/spinel', colour: '#3c64c8', desc: 'Ceylon\'s under-treated coloured gemstone in electric blue, hot pink, red, and more.' },
]

const toc = [
  { id: 'what-is', label: 'What Is Zircon?' },
  { id: 'not-cz', label: 'Zircon vs Cubic Zirconia' },
  { id: 'history', label: 'History &amp; Ancient Use' },
  { id: 'origins', label: 'Where Is It Found?' },
  { id: 'ceylon', label: 'Sri Lanka\'s Zircon' },
  { id: 'blue-zircon', label: 'Blue Zircon' },
  { id: 'types', label: 'High, Medium, Low Zircon' },
  { id: 'colours', label: 'Colour Range' },
  { id: 'quality', label: 'Quality Factors' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'certification', label: 'Certification' },
  { id: 'jewellery', label: 'Jewellery Guide' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'faq', label: 'FAQ' },
]

export default function ZirconPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(58,140,190,0.4) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gemstones" className="hover:text-teal transition-colors">Gemstones</Link>
            <span>/</span>
            <span className="text-offwhite/60">Zircon</span>
          </nav>

          <FadeUp>
            <div className="flex items-start gap-6 mb-8">
              <GemSVG colour="#3a8cbe" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Zircon
                </h1>
                <p className="font-jost text-sm text-offwhite/45 tracking-wide mt-3">The natural gem often confused with its synthetic namesake</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                Zircon is a natural gemstone — zirconium silicate (ZrSiO₄) — with exceptional brilliance and fire. It is <strong>not</strong> the same as cubic zirconia (CZ), a synthetic diamond simulant. Natural zircon occurs in blue, golden, colourless, red, green, and brown. Sri Lanka (Ceylon) has been a premier source for over 2,000 years, producing fine material in nearly every colour of the zircon spectrum.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Mineral', value: 'Zircon' },
                { label: 'Hardness', value: '6 – 7.5' },
                { label: 'Top Origin', value: 'Sri Lanka' },
                { label: 'Dispersion', value: 'High (0.039)' },
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
                    <a href={`#${item.id}`} className="font-jost text-sm text-offwhite/50 hover:text-teal transition-colors" dangerouslySetInnerHTML={{ __html: item.label }} />
                  </li>
                ))}
              </ul>
            </div>

            <h2 id="what-is">What Is Zircon?</h2>
            <p>
              Zircon is a natural mineral — zirconium silicate (ZrSiO₄) — that has been used as a gemstone for over two thousand years. It has a high refractive index (1.92–2.01, depending on structural state), exceptional brilliance, and high dispersion (0.039) that gives fine zircon a strong rainbow-fire second only to diamond and demantoid garnet among common gemstones. Its distinctive strong birefringence (visible facet doubling when viewed with a loupe) is diagnostic and easy to see.
            </p>
            <p>
              Zircon is also one of the most important minerals in earth science. Zircon crystals concentrate uranium and thorium during formation, which allows precise geological dating. The oldest known terrestrial mineral crystals — found in Western Australia — are zircons dated to over 4.4 billion years old, only about 100 million years younger than the Earth itself.
            </p>

            <hr />

            <h2 id="not-cz">Zircon vs Cubic Zirconia — Two Entirely Different Materials</h2>
            <p>
              The names cause endless confusion but the materials are entirely unrelated:
            </p>
            <ul>
              <li><strong>Zircon</strong> is a <em>natural</em> mineral — zirconium <em>silicate</em> (ZrSiO₄) — with a two-thousand-year history as a valuable gemstone. Refractive index 1.92–2.01. Hardness 6–7.5. Doubly refractive. Naturally occurring.</li>
              <li><strong>Cubic zirconia (CZ)</strong> is a <em>synthetic</em> material — cubic zirconium <em>dioxide</em> (ZrO₂) — first produced in the 1970s as a diamond simulant. Refractive index 2.15. Hardness 8–8.5. Singly refractive. Entirely lab-made.</li>
            </ul>
            <p>
              Natural zircon is a genuine gemstone with real market value. Cubic zirconia is an inexpensive diamond substitute. If someone offers you a &ldquo;zircon&rdquo; that turns out to be cubic zirconia, you have been sold a very different product. Any credible laboratory report will name the material correctly.
            </p>

            <hr />

            <h2 id="history">History &amp; Ancient Use</h2>
            <p>
              Zircon has been used as a gemstone since antiquity. Ancient Sri Lankan, Indian, and Southeast Asian jewellery contains zircons dating back thousands of years. In medieval Europe, colourless zircon was known as &ldquo;Matura diamond&rdquo; (after Matara, Sri Lanka) and was one of the most convincing pre-industrial diamond substitutes because of its high brilliance and fire. In the early twentieth century, blue zircon became extremely fashionable in Art Deco jewellery and remained a mainstream stone through the 1930s. Rediscovery of natural zircon in the twenty-first century has been driven by collector interest in the stone&apos;s brilliance and by the desire for coloured alternatives to sapphire.
            </p>

            <hr />

            <h2 id="origins">Where Is Zircon Found?</h2>
            <ul>
              <li><strong>Sri Lanka (Ceylon)</strong> — the historic and current premier source for a wide range of natural zircon colours, particularly golden, colourless, brown, and heat-treatable material. Ceylon zircon appears in the same alluvial deposits as sapphire and ruby.</li>
              <li><strong>Cambodia (Ratanakiri Province)</strong> — the modern source of the finest electric-blue heat-treated zircon. Discovered in the 1890s and heavily developed from the 1980s.</li>
              <li><strong>Myanmar (Burma)</strong> — produces zircon alongside sapphire and ruby in the Mogok region.</li>
              <li><strong>Tanzania and Nigeria</strong> — modern sources of gem-quality zircon.</li>
              <li><strong>Australia</strong> — produces zircon, including the geologically oldest known crystals (though most are not gem-quality).</li>
              <li><strong>Vietnam, China, France, and USA</strong> — smaller producers.</li>
            </ul>

            <hr />

            <h2 id="ceylon">Sri Lanka&apos;s Zircon</h2>
            <p>
              Sri Lanka has produced zircon for over two millennia. The main mining regions — <strong>Ratnapura</strong>, <strong>Elahera</strong>, <strong>Matara</strong>, and the highland gem belt — all yield zircon from alluvial deposits. Ceylon zircons appear in nearly every colour, though the country is particularly known for:
            </p>
            <ul>
              <li><strong>Natural golden and honey-coloured stones</strong> with high dispersion.</li>
              <li><strong>Colourless zircon</strong> — the &ldquo;Matura diamond&rdquo; of historic trade.</li>
              <li><strong>Heat-treatable brown material</strong> that can be converted to fine blue zircon.</li>
              <li><strong>Rare natural colours</strong> including green, red, and orange zircon in smaller sizes.</li>
              <li><strong>Large sizes</strong> — Ceylon regularly produces zircons above 10 carats with excellent clarity.</li>
            </ul>

            <hr />

            <h2 id="blue-zircon">Blue Zircon</h2>
            <p>
              Blue zircon is the most commercially popular colour of gem zircon and is essentially always produced by heat treatment. Naturally brown or reddish zircon rough is heated in a low-oxygen environment at moderate temperatures; the treatment produces a vivid electric-blue to teal colour that rivals fine aquamarine or Paraíba tourmaline for brilliance. Cambodia (Ratanakiri) is the classical source of fine blue zircon; Sri Lanka produces excellent material as well.
            </p>
            <p>
              A characteristic worth knowing: some blue zircon can slowly fade or shift back toward its original brownish colour under prolonged exposure to strong sunlight. This is rare, and most blue zircon in the trade is colour-stable, but it is why blue zircon is generally not worn as an every-single-day sun-exposed stone in tropical conditions without occasional storage in the dark. Fine cutters and dealers select material with confirmed colour stability.
            </p>

            <hr />

            <h2 id="types">High, Medium, and Low Zircon</h2>
            <p>
              Natural zircon exists in three structural states that reflect how much internal damage the crystal has suffered from trace radioactive elements (uranium and thorium) over geological time. The process — called <em>metamictisation</em> — gradually degrades the crystal structure and changes physical properties:
            </p>
            <ul>
              <li><strong>High zircon:</strong> Fully crystalline. Refractive index 1.98–2.01. Specific gravity ~4.68. Mohs hardness ~7.5. Sharp double refraction. Most valued.</li>
              <li><strong>Medium (intermediate) zircon:</strong> Partially metamict. Intermediate optical and physical properties.</li>
              <li><strong>Low (metamict) zircon:</strong> Largely amorphous. Refractive index 1.78–1.85. Specific gravity 3.90–4.10. Hardness 6. Softer and less brilliant.</li>
            </ul>
            <p>
              Heat treatment can partially restore metamict zircon toward high-type properties. Most gem-quality material in the trade is high or medium. Any credible laboratory report will note the structural type.
            </p>

            <hr />

            <h2 id="colours">Colour Range</h2>
            <ul>
              <li><strong>Electric blue:</strong> Heat-treated. The most popular colour. Vivid, saturated, sometimes with teal secondary.</li>
              <li><strong>Golden / honey:</strong> Warm yellow with high dispersion. Ceylon specialty.</li>
              <li><strong>Colourless:</strong> Historic &ldquo;Matura diamond.&rdquo; High brilliance and fire.</li>
              <li><strong>Champagne:</strong> Light golden brown.</li>
              <li><strong>Brown / cognac:</strong> Warm natural browns.</li>
              <li><strong>Red / red-orange:</strong> Rare and highly collectible.</li>
              <li><strong>Green:</strong> Rare; often associated with high uranium content.</li>
            </ul>

            <hr />

            <h2 id="quality">Quality Factors</h2>

            <h3>Colour</h3>
            <p>
              The most valued zircons show vivid, evenly saturated colour — electric blue for blues, warm golden for goldens, cool colourless for whites. Muddy or unevenly-coloured stones sit lower.
            </p>

            <h3>Clarity</h3>
            <p>
              Zircon is a Type I gemstone. Fine stones should be nearly loupe-clean. Common inclusions include small crystals, fingerprint healing, and the &ldquo;paper-clip&rdquo; needle-like features characteristic of some zircons.
            </p>

            <h3>Cut</h3>
            <p>
              Round brilliant, oval, and cushion cuts are most common. Because zircon has strong dispersion, well-cut stones show pronounced rainbow fire. Cutters must handle facet edges carefully because of zircon&apos;s tendency to chip on sharp corners.
            </p>

            <h3>Carat Weight</h3>
            <p>
              Zircon is available in a wide range of sizes. Blue zircons above 3 carats are notable; above 5 carats with fine colour they are collector-grade. Ceylon regularly produces colourless and golden zircons above 10 carats.
            </p>

            <hr />

            <h2 id="treatments">Treatments</h2>
            <p>
              Blue zircon is essentially always heat-treated. Some golden and colourless material is also heated. Certain natural colours (green, some red, some brown) are typically untreated. All treatments must be disclosed on any credible laboratory report. Fracture filling is uncommon in zircon.
            </p>

            <hr />

            <h2 id="certification">Certification</h2>
            <p>
              For any significant zircon, an independent laboratory report is essential to (1) confirm natural zircon (as opposed to cubic zirconia or synthetic zirconia), (2) disclose any treatments, (3) note structural type (high/medium/low), and (4) describe colour. Top-tier laboratories for zircon are GIA, GRS, SSEF, and Gübelin.
            </p>

            <hr />

            <h2 id="jewellery">Jewellery Guide</h2>
            <ul>
              <li><strong>Pendants and earrings:</strong> Zircon&apos;s brilliance shines in pendant and earring settings without wear concerns.</li>
              <li><strong>Cocktail rings:</strong> Larger blue zircons make dramatic statement rings.</li>
              <li><strong>Solitaire rings:</strong> Colourless zircon rivals diamond for brilliance and fire in a well-cut solitaire.</li>
              <li><strong>Protective settings:</strong> Bezel and halo settings reduce risk of edge chipping for daily-wear rings.</li>
              <li><strong>Birthstone jewellery:</strong> Zircon is a traditional December birthstone (alongside turquoise, tanzanite).</li>
            </ul>
            <p>
              <strong>Metal choice:</strong> White gold and platinum bring out the electric quality of blue zircon and the icy brilliance of colourless. Yellow gold enhances golden and cognac zircons. Rose gold pairs beautifully with champagne and honey stones.
            </p>

            <hr />

            <h2 id="care">Care &amp; Maintenance</h2>
            <ul>
              <li><strong>Cleaning:</strong> Warm soapy water and a soft brush. Avoid ultrasonic and steam cleaning, which can damage zircon.</li>
              <li><strong>Storage:</strong> Store separately from harder stones. Keep blue zircon out of prolonged strong sunlight to preserve colour stability.</li>
              <li><strong>Wear:</strong> Best in protective settings for daily-wear rings. Excellent for pendants, earrings, and occasional-wear jewellery.</li>
              <li><strong>Handling:</strong> Avoid impact — zircon can chip on facet edges. Remove during heavy manual work.</li>
              <li><strong>Professional check:</strong> Have settings inspected periodically to catch loose stones.</li>
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
              { label: 'GIA — Gemological Institute of America', detail: 'Zircon identification, structural type analysis, and treatment disclosure', href: 'https://www.gia.edu' },
              { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and origin determination for zircon', href: 'https://www.gemresearch.ch' },
              { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy for zircon including metamictisation studies', href: 'https://www.ssef.ch' },
              { label: 'Gübelin Gem Lab', detail: 'Origin determination and provenance research for zircon', href: 'https://www.gubelin.com/en/gemlab' },
              { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on Cambodian and Ceylon zircon', href: 'https://www.gia.edu/gems-gemology' },
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
                      <a href={`#${item.id}`} className="font-jost text-xs text-offwhite/40 hover:text-teal transition-colors leading-snug block" dangerouslySetInnerHTML={{ __html: item.label }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-teal/20 bg-dark-card p-5">
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Looking for a zircon?</p>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">Tell us which colour and size you want. We source natural Ceylon zircon in blue, golden, colourless, and rare natural colours.</p>
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
            Interested in a Ceylon zircon?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            Tell us your preferred colour and size — and we&apos;ll respond with suitable Ceylon options from our current sourcing.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Make an Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
