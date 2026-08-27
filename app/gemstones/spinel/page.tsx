import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Spinel — Complete Ceylon Guide',
  description:
    'Historically mistaken for ruby, spinel is one of the most under-appreciated fine gemstones. Sri Lanka is a major source of red, pink, blue, and rare cobalt spinel.',
  openGraph: { url: 'https://www.serendibgemstones.com/gemstones/spinel' },
  alternates: { canonical: 'https://www.serendibgemstones.com/gemstones/spinel' },
}

const faqItems = [
  {
    q: 'What is spinel?',
    a: 'Spinel is a magnesium aluminium oxide (MgAl2O4) — a distinct mineral species, not a variety of another gem. It crystallises in the cubic system with a Mohs hardness of 8, high refractive index, and excellent brilliance. Historically confused with ruby because fine red spinel and ruby occur together in the same deposits, spinel is today recognised as one of the finest coloured gemstones in its own right — coloured most commonly by chromium, iron, or cobalt.',
  },
  {
    q: 'Where does spinel come from?',
    a: 'The historically most celebrated deposits are Mogok (Myanmar) — long the source of the finest red and pink spinels — and Sri Lanka (Ceylon), which has produced spinels for over 2,500 years. Modern important sources include Tajikistan (Kuh-i-Lal, celebrated for pink), Tanzania (Mahenge, famous for vivid neon pink-red), Vietnam (Luc Yen), and Madagascar. Cobalt-blue spinel — the rarest and most valuable variety — has been recovered from Sri Lanka and, more recently, Vietnam.',
  },
  {
    q: 'What are the famous historical spinels mistaken for rubies?',
    a: 'The most famous are the "Black Prince\'s Ruby" (170 carats, actually a red spinel from what is now Tajikistan) set in the Imperial State Crown of the United Kingdom, and the "Timur Ruby" (361 carats, also a spinel) in the British Royal Collection. Both were treasured as rubies for centuries before modern gemmology distinguished the two species. Many other historical "rubies" in royal collections around the world are, on modern examination, spinels — a reflection of how visually similar fine red spinel and ruby appear.',
  },
  {
    q: 'Is spinel usually treated?',
    a: 'No — and this is one of spinel\'s most distinctive advantages. Unlike ruby and sapphire, the vast majority of natural spinels on the market are entirely untreated. There is no widely accepted heat treatment for spinel that meaningfully improves colour, and diffusion treatments are not commercial. When you buy a natural spinel, you are almost always buying a stone whose colour is exactly as nature produced it. This makes spinel unusually "honest" among fine coloured gemstones.',
  },
  {
    q: 'What colours does spinel come in?',
    a: 'Spinel occurs in an unusually wide colour range: vivid red (its most celebrated colour), pink (from pale to hot Mahenge neon), orange and orange-red ("flame spinel"), purple and lavender, violet, blue (from steely to vivid cobalt), grey and black. The rarest and most valuable are cobalt-blue and vivid Mahenge red-pink. Fine red and hot pink spinels command the strongest prices, followed by cobalt blues and top Mahenge material.',
  },
  {
    q: 'How does spinel compare to ruby?',
    a: 'Optically and visually, fine red spinel is almost indistinguishable from ruby to an untrained eye. Both are red, brilliant, hard, and durable. The key differences: spinel is singly refractive (ruby is doubly refractive), spinel is chemically a different mineral, spinel is almost always untreated (ruby is usually heated), and spinel is significantly less expensive per carat at comparable quality. For collectors, this makes fine spinel one of the most compelling value propositions in the coloured-stone market.',
  },
  {
    q: 'Is spinel a good investment?',
    a: 'Fine spinels — particularly unheated red, vivid Mahenge hot pink, and cobalt-blue — have appreciated significantly over the past two decades as the trade and collectors have re-discovered the species. Mahenge material discovered in 2007 has risen sharply, cobalt-blue commands strong auction prices, and fine red spinels are increasingly sought as alternatives to ruby. As with all coloured stones, only investment-grade material — top colour, good clarity, credible certification — is likely to appreciate reliably over time.',
  },
  {
    q: 'What certification should I look for on a spinel?',
    a: 'For any significant spinel, insist on a report from a top-tier gemmological laboratory — GIA, GRS, SSEF, or Gübelin. The report should confirm natural spinel (as opposed to synthetic), confirm no treatments, and — for the finest stones — determine geographic origin. Burmese (Mogok) origin commands the highest premium for red spinel; Mahenge origin commands a premium for hot-pink material; Sri Lankan cobalt-blue spinel is exceptionally rare and worth verifying by origin.',
  },
  {
    q: 'Can spinel be lab-created?',
    a: 'Yes. Synthetic spinel has been produced commercially since the early 20th century, primarily by the Verneuil flame-fusion process and later by flux growth. Synthetic spinel is widely used as an imitation of many gemstones (aquamarine, sapphire, tourmaline) because it can be produced in almost any colour. A credible laboratory report from GIA, GRS, SSEF, or Gübelin will confirm whether a stone is natural or synthetic.',
  },
  {
    q: 'Is spinel durable enough for daily wear?',
    a: 'Yes. With a Mohs hardness of 8, spinel is suitable for everyday jewellery including engagement rings, though it is not quite as hard as sapphire (9) or diamond (10). Its cubic crystal structure gives it no cleavage direction, making it less prone to breakage than some other 8-hardness gemstones. Standard care — remove during heavy manual work, avoid harsh chemicals, clean gently with warm soapy water — is sufficient.',
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
      headline: 'Spinel — The Complete Guide to Ceylon and World Spinels',
      image: 'https://www.serendibgemstones.com/logo.jpg',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://www.serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://www.serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
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
  { name: 'Ruby', href: '/gemstones/ruby', colour: '#c0392b', desc: 'For centuries confused with red spinel — the two share deposits in Sri Lanka and Myanmar.' },
  { name: 'Pink Sapphire', href: '/gemstones/pink-sapphire', colour: '#d46b9a', desc: 'A parallel category — the chromium-coloured sibling in the corundum family.' },
  { name: 'Blue Sapphire', href: '/gemstones/blue-sapphire', colour: '#1a5f9e', desc: 'Sri Lanka\'s most famous blue gem — cobalt-blue spinel is its rarer, cubic cousin.' },
]

const toc = [
  { id: 'what-is', label: 'What Is Spinel?' },
  { id: 'origins', label: 'Where Is It Found?' },
  { id: 'ruby-history', label: 'The Ruby Confusion' },
  { id: 'colours', label: 'Colour Range' },
  { id: 'ceylon', label: 'Sri Lankan Spinel' },
  { id: 'quality', label: 'Quality Factors' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'certification', label: 'Certification' },
  { id: 'investment', label: 'Investment Value' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'faq', label: 'FAQ' },
]

export default function SpinelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(192,57,43,0.35) 0%, transparent 70%)' }} />
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
              <GemSVG colour="#c0392b" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Spinel
                </h1>
                <p className="font-jost text-sm text-offwhite/45 tracking-wide mt-3">The gemstone that hid inside history&apos;s greatest rubies</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                Spinel is a magnesium aluminium oxide — a distinct mineral species that was, for centuries, mistaken for ruby in the world&apos;s greatest royal collections. Sri Lanka is a historic source of red, pink, blue and rare cobalt-blue spinel. Almost always untreated, exceptionally brilliant, and priced well below ruby at comparable quality — spinel is one of the finest coloured gemstones and one of the most compelling value propositions in the market.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Mineral', value: 'Spinel' },
                { label: 'Hardness', value: '8 / 10' },
                { label: 'Top Origins', value: 'Burma · Ceylon' },
                { label: 'Treatment', value: 'None (typical)' },
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
            <ArticleByline updated="2026-08-27" reviewer="Thusira Ranasinghe" />

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
              Spinel is a distinct mineral species — magnesium aluminium oxide, MgAl<sub>2</sub>O<sub>4</sub> — that crystallises in the cubic system and forms beautifully sharp octahedral crystals. It has a Mohs hardness of 8, a high refractive index that produces excellent brilliance, and no cleavage direction, making it a durable and versatile gemstone. It is not a variety of another mineral (as ruby is a variety of corundum); it is its own species, coloured most commonly by chromium (red and pink), iron (blue, purple), or cobalt (vivid blue).
            </p>
            <p>
              For most of recorded history, spinel was not recognised as a distinct species at all. Fine red spinel and ruby occur together in the same alluvial deposits in Sri Lanka and Myanmar, and the two look visually almost identical when cut. The mineralogical distinction was not made until the late 18th and 19th centuries, and even then it took decades to spread through the trade. As a result, some of the most famous &ldquo;rubies&rdquo; in the world&apos;s royal collections turn out — on modern examination — to be spinels.
            </p>

            <hr />

            <h2 id="origins">Where Is Spinel Found?</h2>
            <p>
              The world&apos;s important spinel sources are:
            </p>
            <ul>
              <li><strong>Myanmar (Burma) — Mogok Stone Tract:</strong> the historically most celebrated source for fine red and pink spinel. Burmese red spinels are the benchmark against which other origins are measured.</li>
              <li><strong>Sri Lanka (Ceylon):</strong> a major historic source with production across the full spinel colour range — red, pink, purple, blue, and the rare cobalt-blue variety. Recovered from alluvial gem gravels around Ratnapura, Elahera, and other traditional gem fields.</li>
              <li><strong>Tajikistan — Kuh-i-Lal:</strong> historically the source of enormous pink and red spinels including the Black Prince&apos;s Ruby and Timur Ruby. Still producing today.</li>
              <li><strong>Tanzania — Mahenge:</strong> discovered in 2007, source of the electric neon-pink to red spinels that transformed the modern market. Mahenge material commands strong premiums.</li>
              <li><strong>Vietnam — Luc Yen:</strong> produces fine red, pink, purple, and, more recently, cobalt-blue spinel.</li>
              <li><strong>Madagascar:</strong> a modern producer of pink, red, and grey spinels.</li>
            </ul>

            <hr />

            <h2 id="ruby-history">The Ruby Confusion — A Historical Note</h2>
            <p>
              Spinel&apos;s history is dominated by mistaken identity. Two of the most famous &ldquo;rubies&rdquo; in existence are, on modern examination, spinels:
            </p>
            <ul>
              <li><strong>The Black Prince&apos;s Ruby</strong> — a 170-carat polished red crystal set in the Imperial State Crown of the United Kingdom. Recorded in the English crown jewels since the 14th century and treasured as a ruby for over 500 years, it is a red spinel almost certainly from what is now Tajikistan.</li>
              <li><strong>The Timur Ruby</strong> — a 361-carat polished spinel bearing the inscribed names of several Mughal emperors, presented to Queen Victoria in 1849. Again, a spinel long celebrated as a ruby.</li>
            </ul>
            <p>
              These are not isolated cases. Many historical &ldquo;rubies&rdquo; in royal and religious collections around the world — Persian, Mughal, European — have proven, on gemmological examination, to be spinels. The reason is straightforward: fine red spinel and ruby are visually almost identical to the naked eye, and the mineralogical distinction was not made until modern gemmology emerged. For the collector, this history is an argument in spinel&apos;s favour: for centuries the world&apos;s connoisseurs chose it — knowingly or not — as their finest red gemstone.
            </p>

            <hr />

            <h2 id="colours">Colour Range</h2>
            <p>
              Spinel occurs in an unusually wide colour range. Value depends heavily on hue and saturation:
            </p>
            <ul>
              <li><strong>Red:</strong> the classic and most historically important colour. Fine red spinel — particularly Burmese — is one of the great red gemstones, closely rivalling ruby.</li>
              <li><strong>Hot pink / Mahenge:</strong> the vivid neon pink from Tanzania&apos;s Mahenge deposit is arguably the most sought-after modern spinel colour.</li>
              <li><strong>Cobalt blue:</strong> the rarest colour of spinel and among the most valuable of all spinels. Only a small handful of localities have produced true cobalt-blue material; Sri Lankan cobalt spinel is exceptional and highly collectible.</li>
              <li><strong>Purple, violet, and lavender:</strong> beautiful and increasingly popular; Sri Lanka produces excellent examples.</li>
              <li><strong>Orange (&ldquo;flame spinel&rdquo;):</strong> vivid orange-red material, often from Burma or Tanzania.</li>
              <li><strong>Grey, black, and colour-change:</strong> collector categories with genuine following, though sitting below the primary colours in market value.</li>
            </ul>

            <hr />

            <h2 id="ceylon">Sri Lankan Spinel</h2>
            <p>
              Sri Lanka has produced spinel for over 2,500 years, recovered from the same alluvial gem gravels that yield sapphire, ruby, alexandrite, and chrysoberyl. Ceylon is one of the few sources that produces the full spinel colour range — red, pink, purple, blue, and the rare cobalt-blue variety.
            </p>
            <p>
              Distinguishing features of Ceylon spinel include:
            </p>
            <ul>
              <li><strong>Colour breadth:</strong> Sri Lanka produces virtually every colour of spinel commercially recognised.</li>
              <li><strong>Clarity:</strong> Ceylon spinels are typically very clean, often eye-flawless in fine material.</li>
              <li><strong>Cobalt-blue:</strong> Sri Lanka is one of the very few sources of true cobalt-blue spinel — electric-blue material coloured by cobalt rather than iron. These stones are extraordinarily rare and command among the highest prices in the spinel world.</li>
              <li><strong>Untreated:</strong> as with spinel generally, Ceylon material is almost always entirely untreated — the colour you see is exactly the colour nature produced.</li>
            </ul>

            <hr />

            <h2 id="quality">Quality Factors — The 4Cs</h2>
            <h3>Colour</h3>
            <p>
              Colour dominates spinel value. The most sought-after colours are vivid red (Burmese ideal), neon hot pink (Mahenge ideal), and cobalt blue (Ceylon and Vietnam). Purples and violets sit below in market value but are increasingly appreciated. As with all coloured stones, hue, tone, and saturation together determine grade — the finest spinels combine a pure hue with medium tone and vivid saturation, with no greyish or brownish overtone.
            </p>
            <h3>Clarity</h3>
            <p>
              Spinel is typically a Type II gemstone; fine stones are eye-clean or very close to it. Common inclusions include octahedral spinel crystals (visible under magnification), &ldquo;fingerprint&rdquo; healed fissures, and colour zoning. Ceylon and Burmese spinels are known for exceptional clarity in fine material.
            </p>
            <h3>Cut</h3>
            <p>
              Spinel&apos;s high refractive index and cubic crystal structure make it a superb candidate for brilliant cuts. Cushion, oval, round, and emerald cuts are all common. A well-cut spinel returns light beautifully and shows even colour across the face.
            </p>
            <h3>Carat Weight</h3>
            <p>
              Fine spinels are rare in large sizes. Red and cobalt-blue spinels above 5 carats with top colour are exceptional; above 10 carats they are collector-level rarities. Mahenge material occurs in slightly larger sizes but top-colour stones remain scarce. As with all coloured stones, value per carat rises steeply with size once quality thresholds are met.
            </p>

            <hr />

            <h2 id="treatments">Treatments</h2>
            <p>
              One of spinel&apos;s greatest advantages is that it is <strong>almost always untreated</strong>. There is no widely accepted heat treatment that meaningfully improves spinel colour, and diffusion treatments are not commercial in the spinel market. The colour of a natural spinel is, in virtually every case, exactly the colour nature produced.
            </p>
            <p>
              This is a fundamental contrast with ruby and sapphire, where a large majority of commercial material has been heated. It is also part of why spinel represents such compelling value: the &ldquo;unheated premium&rdquo; that applies to ruby and sapphire does not need to be paid on spinel — every fine spinel is, effectively, an unheated stone.
            </p>
            <p>
              Buyers should still request a laboratory report on any significant spinel to confirm natural origin (as opposed to synthetic) and to rule out any exotic treatments. Reputable dealers of natural spinel will provide GIA, GRS, SSEF, or Gübelin reports on request.
            </p>

            <hr />

            <h2 id="certification">Certification</h2>
            <p>
              For any significant spinel, an independent laboratory report is essential. The report confirms that the stone is natural spinel (not synthetic), confirms treatment status (in nearly all cases, &ldquo;no indications of treatment&rdquo;), and — for the finest stones — determines geographic origin. The four laboratories that set the international standard are GIA, GRS, SSEF, and Gübelin.
            </p>
            <p>
              Origin matters for spinel value. Burmese (Mogok) origin commands the strongest premium for red spinel. Mahenge origin commands a premium for hot-pink material. Ceylon origin, while not always premium-priced, is a mark of provenance and traditional quality — and Sri Lankan cobalt-blue spinel is exceptionally sought after.
            </p>

            <hr />

            <h2 id="investment">Investment Value</h2>
            <p>
              Spinel has been one of the strongest-performing coloured gemstones of the past two decades. Several factors underpin this:
            </p>
            <ul>
              <li><strong>Rediscovery:</strong> after being overshadowed by ruby for centuries, spinel has been rediscovered by the trade and by collectors as a fine gemstone in its own right.</li>
              <li><strong>The Mahenge story:</strong> the 2007 Tanzanian discovery introduced electric neon pink material that rapidly established a new market benchmark and drove strong price appreciation across the pink-red spinel category.</li>
              <li><strong>Ruby-alternative demand:</strong> as fine unheated Burmese ruby prices have climbed to record levels, collectors have turned to fine red spinel as a beautiful and significantly more accessible alternative.</li>
              <li><strong>Cobalt-blue rarity:</strong> genuine cobalt-blue spinel is extraordinarily rare, and prices at the top of this category have risen sharply.</li>
              <li><strong>Untreated advantage:</strong> in a market where treatment disclosure and premiums shape ruby and sapphire pricing, spinel&apos;s natural-only status is a durable structural advantage.</li>
            </ul>

            <hr />

            <h2 id="care">Care &amp; Maintenance</h2>
            <ul>
              <li><strong>Cleaning:</strong> warm soapy water and a soft brush is the safest method. Ultrasonic and steam cleaning are generally safe for clean, untreated stones but should be avoided for any stone with visible fractures.</li>
              <li><strong>Storage:</strong> store separately from softer stones to avoid scratching them; keep away from harder stones (sapphire, diamond) that could scratch the spinel.</li>
              <li><strong>Wear:</strong> spinel&apos;s Mohs 8 hardness and lack of cleavage make it well suited to everyday wear. Remove during heavy manual work or exposure to harsh chemicals.</li>
              <li><strong>Professional check:</strong> have settings inspected periodically by a jeweller to ensure prongs remain secure.</li>
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
              { label: 'GIA — Gemological Institute of America', detail: 'Spinel identification, treatment status, and origin determination', href: 'https://www.gia.edu' },
              { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and origin determination for spinel', href: 'https://www.gemresearch.ch' },
              { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and origin determination for spinel', href: 'https://www.ssef.ch' },
              { label: 'Gübelin Gem Lab', detail: 'Origin determination and provenance research for fine spinel', href: 'https://www.gubelin.com/en/gemlab' },
              { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on spinel including the Mahenge discovery and cobalt-blue provenance', href: 'https://www.gia.edu/gems-gemology' },
              { label: 'Journal of Gemmology (Gem-A)', detail: 'Peer-reviewed gemmological research including spinel studies', href: 'https://gem-a.com/gem-hub/publications/the-journal-of-gemmology' },
              { label: 'Royal Collection Trust — Imperial State Crown', detail: 'Provenance record of the Black Prince\'s Ruby (a spinel)', href: 'https://www.rct.uk' },
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
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Looking for a spinel?</p>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">Tell us your preferred colour and size. We source fine spinel — red, hot pink, and rare cobalt-blue — directly from Sri Lanka.</p>
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
            Interested in a Ceylon spinel?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            Fine natural spinel — the gemstone that hid inside history&apos;s greatest rubies. Tell us your preferred colour, size, and origin and we&apos;ll respond with suitable options from our current inventory.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Make an Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
