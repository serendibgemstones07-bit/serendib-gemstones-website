import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Hessonite — The Complete Guide to Ceylon Hessonite Garnet (Gomedhaka)',
  description:
    'Hessonite is the honey-cinnamon variety of grossular garnet — known in Vedic tradition as Gomedhaka, the Navaratna stone for Rahu. Sri Lanka (Ceylon) is the historic and premier source. Learn about colour, treatments, certification, and how to buy.',
  alternates: { canonical: 'https://www.serendibgemstones.com/gemstones/hessonite' },
}

const faqItems = [
  {
    q: 'What is hessonite?',
    a: 'Hessonite is a variety of grossular garnet (calcium aluminium silicate, Ca₃Al₂(SiO₄)₃) that ranges in colour from honey-yellow through cinnamon-brown to a rich reddish-orange. Its distinctive appearance — often compared to warm honey or amber, sometimes with a fine internal "treacle" swirl caused by natural inclusions — has made it one of the most recognisable garnets. Hessonite has a Mohs hardness of 7 to 7.5.',
  },
  {
    q: 'What is Gomedhaka?',
    a: 'Gomedhaka (also spelled Gomed, Gomedh, or Gomedhak) is the Sanskrit name for hessonite in Vedic astrology, where it is one of the nine gemstones of the Navaratna. In this tradition, Gomedhaka is the ruling gem of the shadow planet Rahu and is worn for spiritual and astrological purposes. Fine Ceylon hessonite has been prized in South Asian jewellery and Vedic practice for centuries; Sri Lanka remains the most trusted source of astrological-grade Gomedhaka.',
  },
  {
    q: 'Where do the best hessonites come from?',
    a: 'Sri Lanka (Ceylon) is the historic and current premier source of fine hessonite. Other significant sources include India (particularly Orissa), Brazil, Madagascar, Canada (Quebec), Kenya, and Tanzania. Ceylon hessonites are prized for their warm honey-to-cinnamon colour, high clarity, and comparative freedom from over-dark or brownish tones. For traditional Navaratna and Vedic use, Ceylon origin is often specifically requested.',
  },
  {
    q: 'What is the "treacle" or "scotch in water" look?',
    a: 'Hessonite frequently contains fine internal swirls and inclusions that give a distinctive appearance sometimes described as "scotch in water," "boiling honey," or the "treacle effect." These are typically caused by inclusions of apatite, zircon, or fluid-filled healing feathers, and by micro-scale variations in the garnet\'s crystal growth. Fine hessonite may have a subtle version of this effect that adds character; heavily treacled stones sit lower in the market.',
  },
  {
    q: 'Are hessonites heat-treated?',
    a: 'Hessonite is generally not heat-treated in commercial gemmology — the colour is natural and stable, and heat does not improve it. This is one of the reasons Ceylon hessonite is favoured for Vedic and astrological purposes, where natural, untreated stones are preferred. Any reputable laboratory report will confirm treatment status.',
  },
  {
    q: 'What certifications should I look for on a hessonite?',
    a: 'For any significant hessonite, insist on a report from a top-tier laboratory — GIA, GRS, SSEF, Gübelin, or (for Vedic use) a well-regarded regional laboratory. The report should confirm natural grossular garnet, disclose any treatments, and note any inclusions that affect the stone\'s character. For astrological use, some traditions also require confirmation that the stone is untreated and free from major fractures.',
  },
  {
    q: 'What is the best colour for a hessonite?',
    a: 'The most valued hessonites show a warm, saturated cinnamon-orange or honey-orange colour — often described as "burnt orange" or "amber" — with good transparency. Very pale, yellowish, or brownish stones sit lower; over-dark stones lose their characteristic warmth. Even distribution of colour and freedom from heavy treacle inclusions add value. For Vedic Gomedhaka, a rich, warm, uniformly-coloured stone is generally preferred.',
  },
  {
    q: 'Are hessonites suitable for engagement rings?',
    a: 'Yes, though the choice is more traditional in some regions than in others. Hessonite\'s Mohs 7 to 7.5 hardness is durable for jewellery, though slightly softer than sapphire or spinel. Protective bezel or halo settings extend life for daily wear. Hessonite is particularly popular in South Asian bridal jewellery and Navaratna designs.',
  },
  {
    q: 'Are hessonites a good investment?',
    a: 'Fine Ceylon hessonites with warm, saturated colour, high clarity, and reputable origin certification have appreciated steadily, particularly in the South Asian jewellery and Vedic astrological markets. The stone sits in a lower price bracket than sapphire, ruby, or spinel of comparable size, but its cultural significance provides a stable demand base. For current pricing on a specific stone, please make an enquiry.',
  },
  {
    q: 'How do I choose a Gomedhaka for astrological purposes?',
    a: 'Vedic tradition generally recommends a Gomedhaka that is: (1) natural — no heat treatment or diffusion; (2) transparent — free from heavy treacle or clouding; (3) evenly coloured — a warm cinnamon-honey without patchiness; (4) of appropriate size for the intended jyotish purpose (traditionally 3 to 6 rattis, roughly 2.7 to 5.5 carats); and (5) accompanied by a laboratory report confirming natural grossular garnet. Ceylon origin is often specifically requested. Consult your jyotish practitioner for size and quality recommendations specific to your chart.',
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
        { '@type': 'ListItem', position: 3, name: 'Hessonite', item: 'https://www.serendibgemstones.com/gemstones/hessonite' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Hessonite — The Complete Guide to Ceylon Hessonite Garnet',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://www.serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://www.serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-08-25',
      dateModified: '2026-08-25',
      mainEntityOfPage: 'https://www.serendibgemstones.com/gemstones/hessonite',
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
  { name: 'Yellow Sapphire', href: '/gemstones/yellow-sapphire', colour: '#d4af37', desc: 'Navaratna sibling — the Pukhraj (Guru/Jupiter) of the nine gemstones.' },
  { name: 'Ruby', href: '/gemstones/ruby', colour: '#c0392b', desc: 'The Navaratna sun stone (Manik/Surya) — chromium-red corundum from Ceylon.' },
  { name: 'Blue Sapphire', href: '/gemstones/blue-sapphire', colour: '#1a5f9e', desc: 'The Navaratna Saturn stone (Neelam/Shani) — Ceylon\'s classical cornflower blue.' },
]

const toc = [
  { id: 'what-is', label: 'What Is Hessonite?' },
  { id: 'gomedhaka', label: 'Gomedhaka in Vedic Tradition' },
  { id: 'origins', label: 'Where Is It Found?' },
  { id: 'ceylon', label: 'Sri Lanka\'s Hessonite' },
  { id: 'colour', label: 'Colour Range' },
  { id: 'treacle', label: 'The "Treacle" Look' },
  { id: 'quality', label: 'Quality Factors' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'certification', label: 'Certification' },
  { id: 'astrology', label: 'Choosing a Gomedhaka' },
  { id: 'jewellery', label: 'Jewellery Guide' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'faq', label: 'FAQ' },
]

export default function HessonitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(200,120,60,0.4) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gemstones" className="hover:text-teal transition-colors">Gemstones</Link>
            <span>/</span>
            <span className="text-offwhite/60">Hessonite</span>
          </nav>

          <FadeUp>
            <div className="flex items-start gap-6 mb-8">
              <GemSVG colour="#c8783c" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Hessonite
                </h1>
                <p className="font-jost text-sm text-offwhite/45 tracking-wide mt-3">Ceylon Gomedhaka — the cinnamon-honey Navaratna stone of Rahu</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                Hessonite is a variety of grossular garnet coloured honey-yellow to cinnamon-brown to reddish-orange by traces of manganese and iron. It has a Mohs hardness of 7 to 7.5 and — importantly for astrological buyers — is essentially always natural and untreated. In Vedic tradition it is called <em>Gomedhaka</em>, the Navaratna gem of Rahu. Sri Lanka (Ceylon) is the historic premier source.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Mineral', value: 'Grossular' },
                { label: 'Hardness', value: '7 – 7.5' },
                { label: 'Vedic Name', value: 'Gomedhaka' },
                { label: 'Top Origin', value: 'Sri Lanka' },
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

            <h2 id="what-is">What Is Hessonite?</h2>
            <p>
              Hessonite is the honey-to-cinnamon coloured variety of grossular garnet, a calcium aluminium silicate mineral (Ca₃Al₂(SiO₄)₃). Its warm colour is caused by trace amounts of manganese and iron substituting into the crystal lattice. Grossular garnet as a species can occur in many colours — including the green tsavorite and vivid mint of Merelani — but hessonite is by tradition the most historically famous grossular variety, particularly in South Asian gemmology.
            </p>
            <p>
              With a Mohs hardness of 7 to 7.5 and a refractive index around 1.74, hessonite has good brilliance and reasonable durability, though it is softer than corundum. Because grossular garnet is a single mineral species with stable colour chemistry, hessonite is essentially always natural and untreated — a quality that has helped it retain its central place in Vedic and traditional jewellery.
            </p>

            <hr />

            <h2 id="gomedhaka">Gomedhaka in Vedic Tradition</h2>
            <p>
              In Vedic astrology, hessonite is called <strong>Gomedhaka</strong> (also spelled Gomed, Gomedh, Gomedhak) and is one of the nine gemstones of the <strong>Navaratna</strong> — the sacred nine-gem arrangement that represents the nine celestial influences (<em>navagraha</em>) in Hindu tradition. Each of the nine gems corresponds to a specific planet or shadow planet; Gomedhaka is the gem of <strong>Rahu</strong>, the ascending lunar node.
            </p>
            <p>
              In the traditional Navaratna arrangement, Gomedhaka sits alongside diamond (Venus/Shukra), pearl (Moon/Chandra), ruby (Sun/Surya), coral (Mars/Mangal), emerald (Mercury/Budh), yellow sapphire (Jupiter/Guru), blue sapphire (Saturn/Shani), and cat&apos;s-eye chrysoberyl (Ketu — the descending node). The combination is worn as a talismanic ornament, typically in a ring or pendant, to draw the beneficial influence of all nine grahas.
            </p>
            <p>
              For Vedic use, hessonite is generally worn to strengthen positive Rahu influences and mitigate difficult ones — a matter for consultation with a qualified jyotish practitioner based on the wearer&apos;s birth chart. Sri Lankan origin is often specifically requested for astrological hessonite, both because of the island&apos;s reputation for fine natural gems and because of the strength of traditional Sri Lankan and South Indian gem trade relationships.
            </p>

            <hr />

            <h2 id="origins">Where Is Hessonite Found?</h2>
            <ul>
              <li><strong>Sri Lanka (Ceylon)</strong> — the historic premier source. Ceylon hessonite is prized for warm colour, high clarity, and freedom from over-dark tones.</li>
              <li><strong>India</strong> — Orissa (Odisha), Rajasthan, and Tamil Nadu produce hessonite. Indian material varies in quality; the finest can rival Ceylon.</li>
              <li><strong>Madagascar</strong> — modern source of hessonite in a range of tones.</li>
              <li><strong>Brazil</strong> — Minas Gerais produces hessonite alongside its other garnet varieties.</li>
              <li><strong>Canada (Quebec) and Mexico</strong> — occasional production of collector-grade material.</li>
              <li><strong>East Africa (Kenya, Tanzania)</strong> — produces hessonite alongside tsavorite and other grossular varieties.</li>
            </ul>

            <hr />

            <h2 id="ceylon">Sri Lanka&apos;s Hessonite</h2>
            <p>
              Sri Lanka&apos;s highland gem belt — <strong>Ratnapura</strong>, <strong>Elahera</strong>, and surrounding regions — produces hessonite from the same alluvial deposits that yield sapphires and rubies. Ceylon hessonites are noted for:
            </p>
            <ul>
              <li><strong>Warm, honey-cinnamon colour:</strong> Ceylon hessonites typically show a clean, warm honey-to-cinnamon tone without heavy brown overlay.</li>
              <li><strong>High clarity:</strong> Compared with hessonites from many other origins, Ceylon material tends to be cleaner, with fewer heavy treacle inclusions.</li>
              <li><strong>Reliable natural provenance:</strong> Sri Lankan hessonite is essentially always untreated, and the country&apos;s well-established gem industry makes certified stones widely available.</li>
              <li><strong>Sizes:</strong> Ceylon regularly produces hessonite in the 2–10 carat range with occasional larger stones.</li>
            </ul>

            <hr />

            <h2 id="colour">Colour Range</h2>
            <ul>
              <li><strong>Honey yellow:</strong> Light, warm yellow with golden overtone.</li>
              <li><strong>Amber:</strong> Warm yellow-orange, evoking the resin.</li>
              <li><strong>Cinnamon orange:</strong> Medium-toned warm orange — the most valued single colour for both jewellery and Vedic use.</li>
              <li><strong>Burnt orange:</strong> Deeper, richer orange with strong saturation.</li>
              <li><strong>Reddish orange:</strong> Approaches spessartine (a distinct garnet species) but retains hessonite&apos;s characteristic warmth.</li>
              <li><strong>Brownish orange:</strong> Where brown overlays reduce the warmth; sits lower in the market.</li>
            </ul>

            <hr />

            <h2 id="treacle">The &ldquo;Treacle&rdquo; Look</h2>
            <p>
              Hessonite frequently contains fine internal swirls that produce a distinctive appearance often described as &ldquo;scotch in water,&rdquo; &ldquo;boiling honey,&rdquo; or the &ldquo;treacle effect.&rdquo; These arise from microscopic inclusions of apatite, zircon, or fluid-filled healing feathers, together with subtle variations in the garnet&apos;s crystal growth. A subtle treacle effect adds character and is a diagnostic feature that helps identify natural hessonite. Heavy treacle can, however, reduce transparency and lower value; buyers seeking clean stones for jewellery should look for hessonites where the effect is minimal or absent, while those seeking traditional astrological Gomedhaka may prioritise natural provenance and warm colour over perfect clarity.
            </p>

            <hr />

            <h2 id="quality">Quality Factors</h2>

            <h3>Colour</h3>
            <p>
              The most valued hessonites show a warm, saturated cinnamon or honey-orange colour with good transparency and even distribution. Overly pale, brownish, or heavily-toned stones sit lower.
            </p>

            <h3>Clarity</h3>
            <p>
              Hessonite is a Type II gemstone with commonly visible inclusions. Fine stones should be reasonably transparent with only a subtle treacle effect. Heavily included stones are common but less valued.
            </p>

            <h3>Cut</h3>
            <p>
              Oval, cushion, and round brilliant cuts are the most common. Cabochons are cut occasionally, particularly from more heavily included rough. A well-cut hessonite shows even colour distribution and lively brilliance.
            </p>

            <h3>Carat Weight</h3>
            <p>
              Hessonite is available in a wide range of sizes. Fine stones above 5 carats are notable; above 10 carats they are collector-grade. For Vedic use, traditional sizes are typically 3 to 6 rattis (roughly 2.7 to 5.5 carats) — check with your jyotish practitioner.
            </p>

            <hr />

            <h2 id="treatments">Treatments</h2>
            <p>
              Hessonite is generally not treated. Colour is natural and stable, and heat does not improve it. This is one of the reasons the stone is favoured for Vedic use, where natural stones are traditionally preferred. Any credible laboratory report will confirm treatment status.
            </p>

            <hr />

            <h2 id="certification">Certification</h2>
            <p>
              For significant hessonites — particularly stones intended for Vedic use — an independent laboratory report is essential. The report should confirm natural grossular garnet, disclose any treatments, and note any inclusions affecting value or use. Top-tier laboratories for coloured stones include GIA, GRS, SSEF, and Gübelin; well-regarded regional laboratories serve the South Asian astrological market. For Ceylon-origin certification, choose a laboratory with strong provenance research capability.
            </p>

            <hr />

            <h2 id="astrology">Choosing a Gomedhaka</h2>
            <p>
              For astrological purposes, tradition recommends a Gomedhaka that is:
            </p>
            <ul>
              <li><strong>Natural</strong> — no heat treatment, no diffusion, no glass filling.</li>
              <li><strong>Transparent</strong> — free from heavy treacle, clouding, or major fractures.</li>
              <li><strong>Evenly coloured</strong> — a warm, uniform cinnamon or honey without patchiness or dead zones.</li>
              <li><strong>Of appropriate size</strong> — traditionally 3 to 6 rattis (approximately 2.7 to 5.5 carats), but consult your jyotish practitioner.</li>
              <li><strong>Certified</strong> — accompanied by a laboratory report confirming natural grossular garnet.</li>
              <li><strong>Ideally Ceylon origin</strong> — Sri Lankan hessonite is the traditional and most trusted source for Vedic use.</li>
            </ul>
            <p>
              For jyotish use, follow your practitioner&apos;s recommendations on carat weight, metal, muhurta (auspicious timing for wearing), and mantra. This site does not offer astrological advice; we provide the gemstone itself, sourced and certified.
            </p>

            <hr />

            <h2 id="jewellery">Jewellery Guide</h2>
            <ul>
              <li><strong>Navaratna rings and pendants:</strong> Hessonite&apos;s traditional place in the nine-gem arrangement.</li>
              <li><strong>Solitaire rings:</strong> A warm, distinctive alternative to citrine or topaz.</li>
              <li><strong>Pendants and earrings:</strong> Hessonite&apos;s warm colour works beautifully with yellow gold and rose gold.</li>
              <li><strong>Statement pieces:</strong> Larger hessonites (5+ carats) can be striking centre stones in traditional South Asian designs.</li>
            </ul>
            <p>
              <strong>Metal choice:</strong> Yellow gold is the traditional setting for hessonite, particularly in South Asian jewellery, and enhances the stone&apos;s warm colour. Rose gold pairs beautifully. White gold and platinum provide a modern, crisp contrast.
            </p>

            <hr />

            <h2 id="care">Care &amp; Maintenance</h2>
            <ul>
              <li><strong>Cleaning:</strong> Warm soapy water and a soft brush. Avoid ultrasonic and steam cleaning for stones with significant treacle or fractures.</li>
              <li><strong>Storage:</strong> Store separately from harder stones (sapphire, ruby, diamond) that can scratch hessonite.</li>
              <li><strong>Wear:</strong> Suitable for regular wear with reasonable care. Protective settings (bezel, halo) help for daily-wear rings.</li>
              <li><strong>Professional check:</strong> Have settings inspected periodically.</li>
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
              { label: 'GIA — Gemological Institute of America', detail: 'Grossular garnet identification and hessonite classification', href: 'https://www.gia.edu' },
              { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and origin determination for garnets', href: 'https://www.gemresearch.ch' },
              { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy for garnet varieties', href: 'https://www.ssef.ch' },
              { label: 'Gübelin Gem Lab', detail: 'Origin determination and provenance research', href: 'https://www.gubelin.com/en/gemlab' },
              { label: 'National Gem & Jewellery Authority of Sri Lanka (NGJA)', detail: 'Sri Lankan gem industry regulation and export certification', href: 'https://www.ngja.gov.lk' },
              { label: 'Journal of Gemmology (Gem-A)', detail: 'Peer-reviewed research on grossular garnet varieties', href: 'https://gem-a.com/gem-hub/publications/the-journal-of-gemmology' },
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
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Looking for a Gomedhaka?</p>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">Tell us your preferred size (in rattis or carats) and any jyotish specifications. We source certified, untreated Ceylon hessonite for Vedic and jewellery use.</p>
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
            Interested in a Ceylon hessonite?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            Whether for jewellery, Navaratna arrangement, or single Gomedhaka use — tell us your size and quality requirements and we&apos;ll respond with suitable Ceylon options from our current sourcing.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Make an Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
