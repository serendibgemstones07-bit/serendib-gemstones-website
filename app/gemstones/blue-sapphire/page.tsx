import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Blue Sapphire — The Complete Guide to Ceylon Blue Sapphires',
  description:
    'A blue sapphire is a precious gemstone of the mineral corundum, coloured by trace amounts of iron and titanium. Sri Lanka (Ceylon) produces the world\'s most prized blue sapphires — known for their vivid cornflower-blue hue and exceptional clarity. Learn about origins, quality factors, treatments, and investment value.',
  alternates: { canonical: 'https://serendibgemstones.com/gemstones/blue-sapphire' },
}

const faqItems = [
  {
    q: 'What makes Ceylon blue sapphires special?',
    a: 'Ceylon (Sri Lankan) blue sapphires are prized for their vivid cornflower-blue colour, exceptional clarity, and high proportion of unheated stones. Sri Lanka\'s unique geological conditions — highland complex metamorphic rocks and gem-bearing alluvial gravels — produce sapphires with a distinctive brilliance and colour saturation that is difficult to replicate from other origins.',
  },
  {
    q: 'How much is a blue sapphire worth?',
    a: 'Blue sapphire value is driven by colour, clarity, carat weight, origin, and treatment status. Fine unheated Ceylon and Kashmir sapphires sit at the top of the market and command significant premiums; commercially heated stones sit at the accessible end. Because every stone is unique and the market moves, we quote on the actual gemstone rather than publishing figures — please make an enquiry for current pricing on a specific sapphire.',
  },
  {
    q: 'How can I tell if a blue sapphire is real?',
    a: 'Visual inspection alone cannot reliably confirm a sapphire\'s authenticity. The only certain method is laboratory analysis by an accredited gemological laboratory such as GIA or GRS. These laboratories use advanced spectroscopy, microscopy, and trace-element analysis to confirm the stone is natural corundum and determine its treatment history and geographic origin.',
  },
  {
    q: 'Are all blue sapphires heat-treated?',
    a: 'No, but the vast majority are. Industry estimates suggest over 95% of blue sapphires on the commercial market have been heat-treated to improve colour and clarity. Unheated sapphires that display fine natural colour are genuinely rare, which is why they command a premium of a significant premium over comparable heated stones.',
  },
  {
    q: 'What is the best colour for a blue sapphire?',
    a: 'The most valued colour is a vivid, medium-toned blue often described as "cornflower blue" or "royal blue." The stone should show strong saturation without appearing too dark or too light. Sri Lankan sapphires are particularly valued for their bright, open colour with a slight violet secondary hue, as opposed to the inky darkness sometimes seen in Australian or Thai stones.',
  },
  {
    q: 'Is a blue sapphire a good investment?',
    a: 'Fine blue sapphires — particularly unheated Ceylon stones with strong provenance and credible laboratory reports — have historically held and grown in value. They are tangible, portable, and not correlated with stock markets. However, gemstone investment requires expertise: only investment-grade stones (fine colour, clean clarity, reputable certification, and ideally unheated) are likely to appreciate reliably.',
  },
  {
    q: 'What is the difference between heated and unheated blue sapphires?',
    a: 'Heated sapphires have been subjected to high temperatures (typically 800–1800°C) to improve colour and clarity. Unheated sapphires display their colour entirely as nature formed them. Visually, a well-heated stone may look similar to an unheated one, but the market values unheated stones at a significant premium because their natural beauty is rarer and cannot be manufactured.',
  },
  {
    q: 'Where do the best blue sapphires come from?',
    a: 'Sri Lanka (Ceylon) and Kashmir are historically considered the finest origins for blue sapphires. Kashmir sapphires are virtually unobtainable today, making Ceylon the premier accessible source. Madagascar, Myanmar (Burma), and Tanzania also produce fine stones, but Sri Lanka\'s combination of colour quality, clarity, and proportion of unheated material remains unmatched.',
  },
  {
    q: 'How do I care for a blue sapphire?',
    a: 'Sapphire is very durable (9 on the Mohs scale), second only to diamond. Clean with warm soapy water and a soft brush. Avoid ultrasonic cleaners for stones with visible inclusions or fracture fillings. Remove sapphire jewellery before heavy manual work. Store separately to prevent scratching softer stones. With basic care, sapphires last generations.',
  },
  {
    q: 'What carat size should I buy?',
    a: 'This depends on your purpose. For engagement rings, 1–3 carats is the most popular range. For investment, stones above 3 carats with exceptional quality tend to appreciate most reliably. For collectors, unusual sizes or exceptional colour at any weight are desirable. Sri Lanka regularly produces fine sapphires in the 1–10 carat range, with exceptional stones occasionally exceeding 50 carats.',
  },
  {
    q: 'Can blue sapphires be lab-created?',
    a: 'Yes. Synthetic sapphires (created by flame fusion, Czochralski, or flux methods) have identical chemical composition to natural stones. They are inexpensive and widely available. However, they have no rarity value and are worth a fraction of natural sapphires. A credible laboratory report from GIA or GRS will confirm whether a stone is natural or synthetic.',
  },
  {
    q: 'What certificate should a blue sapphire have?',
    a: 'For significant purchases, insist on a report from GIA (Gemological Institute of America) or GRS (GemResearch SwissLab). Both are internationally respected. GIA is considered the gold standard for identification and treatment disclosure. GRS is particularly valued for colour grading and origin determination of coloured stones. For unheated stones, a "no indications of heating" statement is essential.',
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
        { '@type': 'ListItem', position: 3, name: 'Blue Sapphire', item: 'https://serendibgemstones.com/gemstones/blue-sapphire' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Blue Sapphire — The Complete Guide to Ceylon Blue Sapphires',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-07-31',
      dateModified: '2026-08-12',
      mainEntityOfPage: 'https://serendibgemstones.com/gemstones/blue-sapphire',
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
  { name: 'Padparadscha Sapphire', href: '/gemstones/padparadscha-sapphire', colour: '#e8855e', desc: 'The rarest sapphire variety — a delicate pink-orange lotus blossom hue.' },
  { name: 'Ruby', href: '/gemstones/ruby', colour: '#c0392b', desc: 'Sapphire\'s sibling in the corundum family — the king of red gemstones.' },
  { name: 'Star Sapphire', href: '/gemstones/star-sapphire', colour: '#3a6fa8', desc: 'A six-rayed star of light gliding across the stone\'s domed surface.' },
]

const toc = [
  { id: 'what-is', label: 'What Is a Blue Sapphire?' },
  { id: 'origins', label: 'Where Are They Found?' },
  { id: 'ceylon', label: 'Sri Lanka\'s Blue Sapphires' },
  { id: 'colours', label: 'Colour Variations' },
  { id: 'quality', label: 'Quality Factors (The 4Cs)' },
  { id: 'treatments', label: 'Heated vs Unheated' },
  { id: 'investment', label: 'Investment Value' },
  { id: 'famous', label: 'Famous Blue Sapphires' },
  { id: 'jewellery', label: 'Jewellery Guide' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'faq', label: 'FAQ' },
]

export default function BlueSapphirePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(26,95,158,0.4) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gemstones" className="hover:text-teal transition-colors">Gemstones</Link>
            <span>/</span>
            <span className="text-offwhite/60">Blue Sapphire</span>
          </nav>

          <FadeUp>
            <div className="flex items-start gap-6 mb-8">
              <GemSVG colour="#1a5f9e" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Blue Sapphire
                </h1>
              </div>
            </div>
          </FadeUp>

          {/* Quick Answer */}
          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                A blue sapphire is a precious gemstone of the mineral corundum (aluminium oxide), coloured blue by trace amounts of iron and titanium. Sri Lanka (Ceylon) produces the world&apos;s most prized blue sapphires, known for vivid cornflower-blue colour, exceptional clarity, and a high proportion of naturally unheated stones.
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
                { label: 'Unheated', value: 'Significant Premium' },
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

            <h2 id="what-is">What Is a Blue Sapphire?</h2>
            <p>
              Blue sapphire is a variety of the mineral corundum — crystalline aluminium oxide (Al₂O₃) — coloured blue by trace concentrations of iron and titanium within the crystal lattice. It is one of the &ldquo;Big Three&rdquo; coloured gemstones alongside ruby (red corundum) and emerald, and has been treasured by civilisations for thousands of years.
            </p>
            <p>
              With a hardness of 9 on the Mohs scale, sapphire is the second hardest natural gemstone after diamond, making it exceptionally durable for everyday jewellery. Its combination of beauty, rarity, and durability has made it the most commercially important coloured gemstone in the world.
            </p>
            <p>
              The name &ldquo;sapphire&rdquo; derives from the Latin <em>sapphirus</em> and the Greek <em>sappheiros</em>, both likely referring to lapis lazuli in the ancient world. Today, the term refers exclusively to gem-quality corundum in any colour other than red (which is classified as ruby). When used without a colour modifier, &ldquo;sapphire&rdquo; universally means the blue variety.
            </p>

            <hr />

            <h2 id="origins">Where Are Blue Sapphires Found?</h2>
            <p>
              Blue sapphires are mined across several continents, but only a handful of origins produce stones of exceptional quality. The most important sources are:
            </p>
            <ul>
              <li><strong>Sri Lanka (Ceylon)</strong> — the world&apos;s oldest known source and arguably the finest for all-round quality. Produces vivid, clean stones in a wide range of blue hues, with a uniquely high proportion of naturally unheated material.</li>
              <li><strong>Kashmir</strong> — legendary for a soft, velvety cornflower-blue colour caused by microscopic rutile inclusions. Kashmir mines have been virtually exhausted since the early 20th century, and genuine Kashmir sapphires command record prices at auction.</li>
              <li><strong>Myanmar (Burma)</strong> — produces fine royal-blue sapphires, particularly from the Mogok Stone Tract. Burmese sapphires are valued for deep, saturated colour.</li>
              <li><strong>Madagascar</strong> — a relatively recent source (since the late 1990s) that has rapidly become one of the world&apos;s largest producers. Fine Madagascar sapphires can rival Sri Lankan stones in quality.</li>
              <li><strong>Australia, Thailand, Cambodia</strong> — major producers of commercial-grade dark blue sapphires, often heat-treated to improve colour.</li>
              <li><strong>Tanzania, Ethiopia, Montana (USA)</strong> — emerging sources producing stones with distinctive colour profiles.</li>
            </ul>

            <hr />

            <h2 id="ceylon">Sri Lanka&apos;s Blue Sapphires</h2>
            <p>
              Sri Lanka has been producing blue sapphires for at least 2,500 years. The island was known in antiquity as <em>Rathna-Dweepa</em> — &ldquo;Island of Gems&rdquo; — and its sapphires have adorned the crowns and jewels of European, Middle Eastern, and Asian royalty throughout recorded history.
            </p>
            <p>
              What makes Ceylon sapphires distinctive is a combination of geological and qualitative factors:
            </p>
            <ul>
              <li><strong>Colour character:</strong> Ceylon sapphires typically display a bright, medium-toned blue — often described as &ldquo;cornflower blue&rdquo; — with high brilliance and a pleasing violet secondary hue. They tend to be lighter and more vivid than sapphires from many other origins.</li>
              <li><strong>Clarity:</strong> Sri Lankan sapphires are known for relatively clean crystals, with fewer inclusions than stones from many other localities. This natural clarity is a hallmark of Ceylon material.</li>
              <li><strong>Unheated proportion:</strong> A significantly higher percentage of Sri Lankan sapphires are suitable for the market without heat treatment compared to other origins. This makes Ceylon the premier source for collectors and investors seeking unheated stones.</li>
              <li><strong>Size range:</strong> Sri Lanka regularly produces fine stones in the 1–15 carat range, with exceptional crystals occasionally exceeding 100 carats.</li>
            </ul>
            <p>
              The primary mining regions are <strong>Ratnapura</strong> (the historic &ldquo;City of Gems&rdquo; in Sabaragamuwa Province), <strong>Elahera</strong> (in the Central Province), <strong>Eheliyagoda</strong>, <strong>Bakamuna</strong>, and the alluvial gravels of the highland gem belt. Mining is predominantly alluvial — gems are recovered from secondary deposits in river beds and ancient gravel layers, a method that has remained largely unchanged for millennia.
            </p>

            <hr />

            <h2 id="colours">Colour Variations</h2>
            <p>
              Although commonly imagined as a single shade, blue sapphires actually occur across a spectrum of hues, tones, and saturations:
            </p>
            <ul>
              <li><strong>Cornflower blue:</strong> A bright, medium-toned blue with a slight violet overtone — widely considered the most desirable colour. Historically associated with Kashmir but also produced in fine examples from Sri Lanka.</li>
              <li><strong>Royal blue:</strong> A deep, richly saturated blue with strong colour intensity. This term is increasingly used in laboratory reports (notably by GRS) as a trade-grade designation for the finest blue sapphires.</li>
              <li><strong>Pastel blue:</strong> A lighter, gentler blue often found in Sri Lankan material. While less valued than deeply saturated stones, fine pastel sapphires have their own elegance and a growing market among collectors.</li>
              <li><strong>Ink blue / dark blue:</strong> Very deep, heavily saturated stones that can appear almost black in low light. Common in Australian and Thai material. Generally less desirable unless the colour opens up under strong lighting.</li>
              <li><strong>Teal / greenish blue:</strong> Sapphires with a noticeable green secondary hue. Montana and some Australian sapphires show this character. An increasingly fashionable colour in contemporary jewellery.</li>
            </ul>
            <p>
              Colour is evaluated under standardised lighting conditions by gemological laboratories. Both GIA and GRS assess hue, tone (lightness/darkness), and saturation (colour intensity). The most valued combination is medium tone with vivid saturation and a pure blue to slightly violet-blue hue.
            </p>

            <hr />

            <h2 id="quality">Quality Factors — The 4Cs</h2>

            <h3>Colour</h3>
            <p>
              Colour is the single most important factor in a blue sapphire&apos;s value — accounting for approximately 50–70% of its price. The ideal colour is a vivid, medium-toned blue with strong saturation and even distribution throughout the stone. Sapphires that are too dark lose brilliance; those too light lack the intensity buyers expect.
            </p>

            <h3>Clarity</h3>
            <p>
              Unlike diamonds, sapphires are classified as a Type II gemstone, meaning some inclusions are expected and accepted. Fine sapphires are graded &ldquo;eye-clean&rdquo; — no visible inclusions to the unaided eye. Under magnification, typical inclusions include rutile needles (&ldquo;silk&rdquo;), mineral crystals, fingerprint-like healed fractures, and colour zoning. Certain inclusions (like fine silk) can actually enhance beauty by creating a soft, velvety appearance.
            </p>

            <h3>Cut</h3>
            <p>
              Sapphires are typically cut to maximise colour rather than brilliance. Oval and cushion shapes are most common, as they tend to retain the most weight from rough crystals while displaying colour well. Round cuts, emerald cuts, and pear shapes are also popular. A well-cut sapphire shows even colour, good symmetry, and attractive proportions without an overly deep or shallow profile.
            </p>

            <h3>Carat Weight</h3>
            <p>
              Blue sapphires are denser than diamonds (specific gravity 3.95–4.03 vs. 3.52), so a 1-carat sapphire appears slightly smaller than a 1-carat diamond. Value rises steeply with size for fine stones. Exceptional unheated Ceylon sapphires above 5 carats are rare and command significant premiums.
            </p>

            <hr />

            <h2 id="treatments">Heated vs Unheated</h2>
            <p>
              Heat treatment is the most common enhancement applied to blue sapphires, and understanding it is essential for any serious buyer.
            </p>
            <p>
              <strong>What happens during heating:</strong> Rough sapphires are heated in controlled furnaces at temperatures between 800°C and 1800°C for hours to weeks. This can dissolve rutile silk (improving clarity), intensify blue colour, or remove unwanted colour zones. The process permanently alters the stone&apos;s internal features.
            </p>
            <p>
              <strong>Industry scale:</strong> An estimated 95% or more of blue sapphires on the commercial market have been heat-treated. This is an accepted industry practice when properly disclosed, and heated sapphires remain beautiful, durable gemstones.
            </p>
            <p>
              <strong>The unheated premium:</strong> Unheated sapphires — those whose beauty is entirely as nature created it — are rare by definition. Fine unheated blue sapphires command a significant premium over comparable heated stones. At major auction houses, exceptional unheated Ceylon sapphires regularly achieve premiums well beyond typical trade levels.
            </p>
            <p>
              <strong>Detection:</strong> Heat treatment cannot be reliably detected by visual inspection alone. Gemological laboratories examine microscopic features — altered inclusions, dissolved silk, stress halos, flux residues — to determine whether a stone has been heated. A certificate stating &ldquo;no indications of heating&rdquo; from GIA or GRS is essential for any unheated sapphire purchase.
            </p>
            <p>
              <strong>Other treatments:</strong> Beyond simple heating, buyers should be aware of beryllium diffusion (introducing colour through chemical diffusion), fracture filling (filling surface-reaching fractures with glass or oil), and surface coating. All are significantly less acceptable than heat treatment and should be fully disclosed. Reputable dealers avoid stones with these treatments.
            </p>

            <hr />

            <h2 id="investment">Investment Value</h2>
            <p>
              Fine blue sapphires have historically been one of the most reliable coloured gemstone investments. Several structural factors support their long-term value:
            </p>
            <ul>
              <li><strong>Supply constraints:</strong> The finest sapphire deposits (Kashmir, Mogok, Sri Lanka&apos;s traditional fields) are finite and increasingly difficult to mine. No new major source of equivalent quality has been discovered in decades.</li>
              <li><strong>Growing demand:</strong> Wealth creation across Asia, the Middle East, and emerging markets has expanded the buyer pool for fine gemstones.</li>
              <li><strong>Portability and privacy:</strong> A high-value sapphire fits in a pocket. Gemstones are not subject to reporting requirements in most jurisdictions and are not correlated with stock or bond markets.</li>
              <li><strong>Auction performance:</strong> Major auction houses (Christie&apos;s, Sotheby&apos;s, Bonhams) regularly achieve record prices for fine blue sapphires, with unheated Ceylon and Kashmir stones consistently outperforming estimates.</li>
            </ul>
            <p>
              <strong>What to buy for investment:</strong> Focus on unheated stones with vivid colour, clean clarity, strong provenance (ideally Sri Lanka or Kashmir origin), reputable certification (GIA or GRS), and weights above 3 carats. These are the stones most likely to appreciate over time.
            </p>

            <hr />

            <h2 id="famous">Famous Blue Sapphires</h2>
            <ul>
              <li><strong>The Star of India (563 ct)</strong> — one of the largest gem-quality star sapphires in existence, almost certainly of Sri Lankan origin. Housed in the American Museum of Natural History, New York.</li>
              <li><strong>The Logan Sapphire (423 ct)</strong> — a cushion-cut deep blue sapphire from Sri Lanka, displayed at the Smithsonian National Museum of Natural History.</li>
              <li><strong>The Blue Belle of Asia (392 ct)</strong> — a cushion-cut Ceylon sapphire that sold at Christie&apos;s Geneva in 2014, setting a world-record price for a sapphire at that time.</li>
              <li><strong>Princess Diana&apos;s engagement ring (12 ct)</strong> — now worn by Catherine, Princess of Wales. A Ceylon blue sapphire surrounded by diamonds, arguably the most famous sapphire in the world.</li>
              <li><strong>The Bismarck Sapphire (98 ct)</strong> — a deep blue cushion-cut sapphire from Myanmar, displayed at the Smithsonian.</li>
            </ul>

            <hr />

            <h2 id="jewellery">Jewellery Guide</h2>
            <p>
              Blue sapphire&apos;s combination of hardness (9 Mohs), brilliance, and range of available sizes makes it one of the most versatile gemstones for jewellery:
            </p>
            <ul>
              <li><strong>Engagement rings:</strong> Sapphire is the most popular coloured gemstone for engagement rings, combining beauty with the durability needed for everyday wear. It ranks second only to diamond in popularity for this purpose.</li>
              <li><strong>Pendants and necklaces:</strong> Larger sapphires (3+ carats) are often set as pendants, where their colour can be appreciated without the wear concerns of a ring.</li>
              <li><strong>Earrings:</strong> Matched pairs of sapphires are prized for earrings. Finding two stones with identical colour, size, and clarity commands a premium.</li>
              <li><strong>Cocktail rings:</strong> Statement pieces featuring large sapphires (5+ carats) surrounded by diamonds or coloured accent stones.</li>
            </ul>
            <p>
              <strong>Setting styles:</strong> Prong settings maximise light return and display the stone&apos;s colour best. Bezel settings offer more protection for active wearers. Halo settings (a ring of smaller diamonds around the sapphire) visually enlarge the centre stone and add sparkle.
            </p>
            <p>
              <strong>Metal choice:</strong> White gold and platinum complement cool blue tones. Yellow gold creates a classic, traditional look and can warm pastel-blue sapphires. Rose gold provides a contemporary, romantic contrast.
            </p>

            <hr />

            <h2 id="care">Care &amp; Maintenance</h2>
            <p>
              Blue sapphire is one of the most durable gemstones and requires minimal special care:
            </p>
            <ul>
              <li><strong>Cleaning:</strong> Warm soapy water and a soft brush is the safest method. Rinse thoroughly and dry with a lint-free cloth. Ultrasonic cleaning is generally safe for untreated sapphires but should be avoided for fracture-filled stones.</li>
              <li><strong>Storage:</strong> Store sapphire jewellery separately from softer stones to avoid scratching them. A fabric-lined compartment or individual pouch is ideal.</li>
              <li><strong>Wearing:</strong> Sapphire is suitable for everyday wear, including engagement rings. Remove during heavy manual work, contact sports, or exposure to harsh chemicals.</li>
              <li><strong>Professional maintenance:</strong> Have settings checked annually by a jeweller to ensure prongs or bezels remain secure. Professional cleaning and polishing can restore lustre over time.</li>
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
              { label: 'GIA — Gemological Institute of America', detail: 'Coloured stone identification, treatment disclosure, and origin reports', href: 'https://www.gia.edu' },
              { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and origin determination for blue sapphires', href: 'https://www.gemresearch.ch' },
              { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and origin determination for corundum', href: 'https://www.ssef.ch' },
              { label: 'Gübelin Gem Lab', detail: 'Origin determination and provenance research for sapphires', href: 'https://www.gubelin.com/en/gemlab' },
              { label: 'National Gem & Jewellery Authority of Sri Lanka (NGJA)', detail: 'Sri Lankan gem industry regulation and export certification', href: 'https://www.ngja.gov.lk' },
              { label: 'CIBJO — The World Jewellery Confederation', detail: 'International gemstone nomenclature and disclosure standards (Blue Books)', href: 'https://www.cibjo.org' },
              { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed gemological research articles on sapphire origin and treatments', href: 'https://www.gia.edu/gems-gemology' },
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
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Looking for a blue sapphire?</p>
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
            Interested in a Ceylon blue sapphire?
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
