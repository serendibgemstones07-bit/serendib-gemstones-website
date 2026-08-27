import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Yellow Sapphire (Pukhraj) Guide',
  description:
    'The Ceylon yellow sapphire — the sacred Pukhraj of Vedic astrology. Colour, clarity, heat treatment, Pukhraj criteria, and how to buy with confidence.',
  openGraph: { url: 'https://www.serendibgemstones.com/gemstones/yellow-sapphire' },
  alternates: { canonical: 'https://www.serendibgemstones.com/gemstones/yellow-sapphire' },
}

const faqItems = [
  {
    q: 'What is a yellow sapphire?',
    a: 'A yellow sapphire is a natural, gem-quality variety of the mineral corundum (aluminium oxide) coloured yellow by trace amounts of iron. It shares the same crystal structure and hardness (9 on the Mohs scale) as blue sapphire and ruby. Colours range from very pale lemon through canary yellow to deep golden yellow and, occasionally, a rich honey tone.',
  },
  {
    q: 'What makes Ceylon yellow sapphires special?',
    a: 'Sri Lanka (Ceylon) is widely regarded as the premier source for fine yellow sapphires. Ceylon stones are prized for their bright, clean, open yellow — a lively colour without the brownish or greenish overtones sometimes seen in material from other origins — and for a comparatively high proportion of naturally unheated crystals. This combination is exactly what buyers of Pukhraj astrological sapphires are looking for.',
  },
  {
    q: 'What is Pukhraj?',
    a: '"Pukhraj" is the Sanskrit and Hindi name for yellow sapphire. In Vedic astrology, Pukhraj is the gemstone associated with Jupiter (Guru or Brihaspati) and is one of the nine sacred Navaratna gems. Practitioners believe that wearing a natural, unheated Pukhraj of appropriate quality and size can strengthen the influence of Jupiter in a birth chart. This is a belief held within Vedic astrology; we describe it here as tradition rather than as advice.',
  },
  {
    q: 'Are all yellow sapphires heat-treated?',
    a: 'A large majority of yellow sapphires on the commercial market have been heat-treated to intensify colour and improve clarity. However, Sri Lanka regularly produces yellow sapphires that display fine natural colour without treatment. These naturally unheated stones command a significant premium and are especially sought after for Pukhraj use, where treatment status matters as much as colour.',
  },
  {
    q: 'What certifications should I look for on a yellow sapphire?',
    a: 'For any significant yellow sapphire, insist on a report from a top-tier laboratory — GIA (Gemological Institute of America), GRS (GemResearch Swisslab), SSEF, or Gübelin. The report should confirm natural corundum, disclose any heat treatment, and — critically for yellow sapphire — explicitly test for beryllium diffusion. For an unheated stone, look for the phrase "no indications of heating" (or "H(a)"/"H(b)" for heated, or "unheated" clearly stated).',
  },
  {
    q: 'Is beryllium diffusion treatment acceptable?',
    a: 'Beryllium (Be) diffusion is a lattice-diffusion process that can transform pale or off-colour corundum into intense yellow, orange, or padparadscha-like stones. It is considered a heavily invasive treatment: the induced colour extends only into a thin surface layer and can be affected by re-cutting. Reputable trade practice requires full disclosure. Beryllium-treated stones sell at a fraction of the price of comparable unheated Ceylon yellow sapphires and are generally not accepted for Pukhraj use.',
  },
  {
    q: 'What size yellow sapphire is best for Pukhraj?',
    a: 'Traditional Vedic astrological guidance commonly recommends Pukhraj of at least a few carats — three carats or more is a frequently cited minimum, with 5+ carats considered ideal — though the appropriate size depends on the wearer\'s astrologer\'s recommendation. Beyond size, practitioners typically require the stone to be natural, unheated, free of surface-reaching fissures, and of a clean, even yellow with no green or orange secondary hues.',
  },
  {
    q: 'How can I tell a yellow sapphire from citrine or yellow topaz?',
    a: 'Visually, all three can look similar in a finished cut stone. The reliable differences are physical: yellow sapphire is corundum (hardness 9, specific gravity ~4.00), yellow topaz is topaz (hardness 8, SG ~3.55), and citrine is quartz (hardness 7, SG ~2.65). A gemmologist can distinguish them in minutes with a refractometer, specific-gravity test, and microscope. A laboratory report is the definitive answer for any significant stone.',
  },
  {
    q: 'Is yellow sapphire a good investment?',
    a: 'Fine unheated Ceylon yellow sapphires with strong colour and reputable certification have historically held and appreciated in value, supported by consistent demand from both the Western fine-jewellery market and the very large Vedic astrological market across South Asia. As with all coloured stones, investment quality means top colour, good clarity, no unacceptable treatments, credible laboratory reports, and — ideally — Sri Lankan origin. For current pricing on a specific stone, please make an enquiry — we quote based on the actual gemstone and current market.',
  },
  {
    q: 'How do I care for a yellow sapphire?',
    a: 'Yellow sapphire is extremely durable — hardness 9, second only to diamond — so it is well suited to everyday wear. Clean with warm soapy water and a soft brush; rinse and dry with a lint-free cloth. Ultrasonic and steam cleaning are generally safe for untreated stones, but should be avoided for any stone with visible fractures or fracture filling. Store separately from softer gemstones to prevent scratching.',
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
        { '@type': 'ListItem', position: 3, name: 'Yellow Sapphire', item: 'https://www.serendibgemstones.com/gemstones/yellow-sapphire' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Yellow Sapphire — The Complete Guide to Ceylon Yellow Sapphires (Pukhraj)',
      image: 'https://www.serendibgemstones.com/logo.jpg',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://www.serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://www.serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-08-12',
      dateModified: '2026-08-12',
      mainEntityOfPage: 'https://www.serendibgemstones.com/gemstones/yellow-sapphire',
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
  { name: 'Padparadscha Sapphire', href: '/gemstones/padparadscha-sapphire', colour: '#e8855e', desc: 'The rarest sapphire — a delicate pink-orange lotus blossom hue, born in Sri Lanka.' },
  { name: 'Pink Sapphire', href: '/gemstones', colour: '#d46b9a', desc: 'The romantic corundum. Guide coming soon.' },
]

const toc = [
  { id: 'what-is', label: 'What Is a Yellow Sapphire?' },
  { id: 'origins', label: 'Where Are They Found?' },
  { id: 'ceylon', label: 'Sri Lanka\'s Yellow Sapphires' },
  { id: 'colours', label: 'Colour Range' },
  { id: 'quality', label: 'Quality Factors (The 4Cs)' },
  { id: 'treatments', label: 'Heated, Unheated & Beryllium' },
  { id: 'pukhraj', label: 'Pukhraj — Vedic Astrology' },
  { id: 'investment', label: 'Investment Value' },
  { id: 'famous', label: 'Famous Yellow Sapphires' },
  { id: 'jewellery', label: 'Jewellery Guide' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'faq', label: 'FAQ' },
]

export default function YellowSapphirePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(212,175,55,0.4) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gemstones" className="hover:text-teal transition-colors">Gemstones</Link>
            <span>/</span>
            <span className="text-offwhite/60">Yellow Sapphire</span>
          </nav>

          <FadeUp>
            <div className="flex items-start gap-6 mb-8">
              <GemSVG colour="#d4af37" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Yellow Sapphire
                </h1>
                <p className="font-jost text-sm text-offwhite/45 tracking-wide mt-3">Pukhraj — the Jupiter Stone</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                A yellow sapphire is a precious gemstone of the mineral corundum (aluminium oxide), coloured yellow by trace amounts of iron. Sri Lanka (Ceylon) is the world&apos;s premier source of top-quality yellow sapphires, valued for their bright, clean colour and a high proportion of naturally unheated stones. In Vedic astrology, yellow sapphire is known as <em>Pukhraj</em>, the sacred gemstone of Jupiter.
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

            <h2 id="what-is">What Is a Yellow Sapphire?</h2>
            <p>
              A yellow sapphire is a variety of the mineral corundum — crystalline aluminium oxide (Al₂O₃) — whose yellow colour is produced by trace amounts of iron within the crystal lattice. It is the same species as blue sapphire and ruby; only the trace-element chemistry differs. With a Mohs hardness of 9, sapphire is second only to diamond in scratch resistance, making yellow sapphire an excellent everyday gemstone for rings, pendants, and earrings.
            </p>
            <p>
              The name &ldquo;sapphire&rdquo; on its own always refers to the blue variety. Any other colour of gem-quality corundum — yellow, pink, green, purple, orange, colourless — is called a &ldquo;fancy sapphire&rdquo; and named for its hue. Yellow sapphire has been valued since antiquity for its warm, sun-like colour and, in South Asia, for its central place in Vedic astrology.
            </p>
            <p>
              Fine yellow sapphires occupy an unusual position in the coloured-stone market. They combine the durability and prestige of the sapphire family with a colour that appeals to Western fine-jewellery buyers and, at the same time, a spiritual significance that drives sustained demand from millions of astrological buyers across India, Sri Lanka, Nepal, and the wider South Asian diaspora.
            </p>

            <hr />

            <h2 id="origins">Where Are Yellow Sapphires Found?</h2>
            <p>
              Gem-quality yellow sapphires are mined in several countries, but the trade recognises a clear hierarchy:
            </p>
            <ul>
              <li><strong>Sri Lanka (Ceylon)</strong> — historically and currently the world&apos;s premier source for top-quality yellow sapphire. Sri Lanka produces the widest range of colours, the highest proportion of naturally unheated stones, and the largest crystals suitable for fine jewellery and Pukhraj use.</li>
              <li><strong>Madagascar</strong> — a significant modern source since the late 1990s. Madagascar produces fine yellow sapphires in commercial volumes, and top material can approach Ceylon quality.</li>
              <li><strong>Tanzania</strong> — produces yellow sapphires from several deposits, notably around Songea. Colours tend toward a slightly greenish or brownish yellow.</li>
              <li><strong>Thailand and Cambodia</strong> — historically important sources, though production has declined. Material is often heat-treated to improve colour.</li>
              <li><strong>Australia</strong> — produces yellow sapphires from Queensland and New South Wales, often with a greenish or muted yellow tone.</li>
              <li><strong>Myanmar (Burma), Kenya, and the USA (Montana)</strong> — smaller producers of distinctive material.</li>
            </ul>
            <p>
              For high-end and astrologically-graded yellow sapphires, Sri Lanka remains the preferred and most trusted origin. The combination of colour purity, clarity, and the unheated proportion of Ceylon rough is unmatched.
            </p>

            <hr />

            <h2 id="ceylon">Sri Lanka&apos;s Yellow Sapphires</h2>
            <p>
              Sri Lanka has been producing yellow sapphires for at least 2,500 years, alongside blue sapphires and the island&apos;s other famed corundum varieties. The main mining regions — <strong>Ratnapura</strong>, <strong>Elahera</strong>, <strong>Eheliyagoda</strong>, <strong>Bakamuna</strong>, and the traditional gem fields of the highland gem belt — all produce yellow sapphires, typically recovered from alluvial gravels using traditional pit-mining techniques.
            </p>
            <p>
              What sets Ceylon yellow sapphires apart:
            </p>
            <ul>
              <li><strong>Pure yellow hue:</strong> Sri Lankan yellow sapphires typically display a bright, clean yellow without the greenish or brownish overtones common in material from other origins. This purity is exactly what jewellery designers and Pukhraj buyers demand.</li>
              <li><strong>Wide colour range:</strong> Ceylon produces everything from pale lemon and pastel yellow through canary and golden yellow to deep honey. Buyers can select the exact tone appropriate to their design or astrological requirement.</li>
              <li><strong>Clarity:</strong> Ceylon yellow sapphires are typically eye-clean or nearly so. This matters especially for Pukhraj, where surface-reaching fissures are considered a defect.</li>
              <li><strong>Unheated proportion:</strong> Sri Lanka produces a significantly higher share of yellow sapphires that show fine natural colour without heat treatment than any other major source.</li>
              <li><strong>Sizes:</strong> Ceylon regularly produces yellow sapphires in the 2–10 carat range, with exceptional stones exceeding 20 carats — the sizes most in demand for statement rings and traditional Pukhraj settings.</li>
            </ul>

            <hr />

            <h2 id="colours">Colour Range</h2>
            <p>
              Yellow sapphire is not a single colour; it is a spectrum. The main tones seen in Ceylon material include:
            </p>
            <ul>
              <li><strong>Canary yellow:</strong> A vivid, pure yellow with strong saturation and a medium tone. Widely considered the ideal for both Western fine jewellery and Pukhraj — bright, lively, and without secondary hues.</li>
              <li><strong>Golden yellow:</strong> A richer, warmer yellow with a slightly deeper tone. Prized for its sunlit character and often preferred for larger statement stones.</li>
              <li><strong>Lemon yellow:</strong> A brighter, cooler, sometimes slightly greenish-yellow. Attractive for contemporary designs; some Pukhraj traditions prefer stones without any green cast.</li>
              <li><strong>Pastel yellow:</strong> A softer, lighter yellow with lower saturation. Beautiful and elegant, though less valued at the top of the market than more saturated colours.</li>
              <li><strong>Deep / honey yellow:</strong> A rich, saturated yellow approaching orange. When the orange component increases, the stone can approach the padparadscha spectrum, though true padparadscha requires both pink and orange in a specific balance.</li>
            </ul>
            <p>
              As with all coloured gemstones, colour is evaluated on hue (the position on the colour wheel), tone (lightness to darkness), and saturation (colour intensity). The most valued combinations pair medium tone with vivid saturation and a pure yellow hue — no brown, no green, no orange overtone.
            </p>

            <hr />

            <h2 id="quality">Quality Factors — The 4Cs</h2>

            <h3>Colour</h3>
            <p>
              As with every coloured gemstone, colour is the most important factor in a yellow sapphire&apos;s value — typically accounting for the majority of the price. A vivid, evenly saturated, medium-toned pure yellow is the ideal. Stones that are too pale look washed out; stones that are too dark lose brilliance. For Pukhraj use, buyers typically require a clean yellow with no greenish or brownish cast.
            </p>

            <h3>Clarity</h3>
            <p>
              Yellow sapphire is a Type II gemstone, meaning some inclusions are expected. Fine yellow sapphires should be eye-clean under normal viewing. Common inclusions include rutile silk, healed fissures (&ldquo;fingerprints&rdquo;), and small mineral crystals. For Pukhraj, an important additional rule applies: the stone should have no fissures reaching the surface, as these are considered a defect that undermines the stone&apos;s traditional astrological benefit.
            </p>

            <h3>Cut</h3>
            <p>
              Oval, cushion, and round brilliant cuts are the most common, chosen to maximise both colour and light return. A well-cut yellow sapphire shows even colour across the face, good symmetry, and no visible windowing (pale zones where light passes straight through). Traditional Indian Pukhraj settings often favour oval or cushion cuts because they display face-up colour beautifully in gold.
            </p>

            <h3>Carat Weight</h3>
            <p>
              Yellow sapphires occur in a wide range of sizes, with Ceylon regularly producing fine crystals of 3–10 carats and exceptional stones above 20 carats. For jewellery, 1–5 carats is the most common range. For Pukhraj, most astrologers recommend a minimum of a few carats — three or more — with the exact size selected by the wearer&apos;s astrologer. As with all fine corundum, value rises steeply with size once colour and clarity are met.
            </p>

            <hr />

            <h2 id="treatments">Heated, Unheated, and the Beryllium Problem</h2>
            <p>
              Understanding treatments is essential for anyone buying a yellow sapphire — perhaps more so than for any other sapphire colour, because yellow sapphire is one of the varieties most commonly subjected to beryllium diffusion.
            </p>
            <p>
              <strong>Conventional heat treatment.</strong> As with blue sapphires, a large majority of commercially available yellow sapphires have been heated in controlled furnaces to intensify colour and improve clarity. Heat treatment is stable, industry-accepted, and must be disclosed on any credible laboratory report. Heated stones remain beautiful, durable gemstones.
            </p>
            <p>
              <strong>Unheated Ceylon yellow.</strong> Sri Lanka produces more unheated yellow sapphire than any other origin. Fine unheated Ceylon yellow sapphires command a significant premium and are particularly sought after by connoisseur collectors and Pukhraj buyers. Look for the phrase &ldquo;no indications of heating&rdquo; on the laboratory report.
            </p>
            <p>
              <strong>Beryllium (Be) diffusion.</strong> This is a critical concern specific to yellow, orange, and padparadscha-colour sapphires. In beryllium diffusion, pale or off-colour corundum is heated with beryllium-bearing material at very high temperatures. Beryllium atoms diffuse into the crystal lattice and create an intense yellow or orange colour — but only in a thin surface layer. If the stone is re-cut, colour can be lost or altered. Beryllium diffusion is considered a heavily invasive treatment, and reputable trade practice requires it to be fully and clearly disclosed. Beryllium-treated stones sell at a small fraction of the value of comparable unheated Ceylon yellow sapphires and are generally rejected for Pukhraj use.
            </p>
            <p>
              <strong>Detection.</strong> Beryllium diffusion cannot be detected visually. It requires advanced instrumental analysis — typically laser ablation ICP-MS or SIMS — available only at top-tier laboratories such as GIA, GRS, SSEF, and Gübelin. This is why, for any significant yellow sapphire, a report from one of these labs is essential rather than optional.
            </p>
            <p>
              <strong>Other treatments.</strong> Fracture filling with glass or oil, surface coating, and irradiation are all encountered occasionally in yellow-hued corundum. All should be avoided; all must be disclosed. Reputable dealers do not stock treated-yellow material without clear disclosure.
            </p>

            <hr />

            <h2 id="pukhraj">Pukhraj — Yellow Sapphire in Vedic Astrology</h2>
            <p>
              No discussion of yellow sapphire is complete without <em>Pukhraj</em>. Across South Asia, yellow sapphire is far more than a beautiful gemstone; it is one of the most powerful and widely-worn of the nine sacred stones (Navaratna) of Vedic astrology. Understanding what Pukhraj buyers look for — even if you are purchasing a yellow sapphire purely as jewellery — sharpens your eye for quality, because Pukhraj criteria are essentially a strict quality checklist.
            </p>

            <h3>Which planet does Pukhraj represent?</h3>
            <p>
              In Vedic astrology (Jyotish), Pukhraj is the gemstone of <strong>Guru</strong> — the planet Jupiter, also known as Brihaspati. Jupiter is regarded in the Vedic tradition as the great benefic, the planet of wisdom, teachers, prosperity, expansion, righteousness, higher learning, spirituality, marriage (particularly for women in some traditions), and children. Because of Jupiter&apos;s wide-ranging significations, Pukhraj is one of the most commonly recommended Navaratna stones, worn by people of every age and background.
            </p>

            <h3>What practitioners believe</h3>
            <p>
              We describe the following as belief and tradition held within Vedic astrology, not as claims we make ourselves. Practitioners hold that wearing a natural, unheated yellow sapphire of appropriate quality and size, set correctly (traditionally in gold), on the correct finger (typically the index finger of the right hand for men, or as prescribed by an astrologer), and consecrated on an auspicious day (often a Thursday, Jupiter&apos;s day), can strengthen the influence of Jupiter in the wearer&apos;s birth chart. Anticipated effects, again according to tradition, include increased wisdom, career progression, financial prosperity, harmony in marriage, and general well-being.
            </p>
            <p>
              Whether or not one accepts these beliefs, they drive an enormous global market for fine yellow sapphires. The astrological demand is one of the most powerful supporting factors in the long-term value of top Ceylon yellow material.
            </p>

            <h3>What Pukhraj buyers require</h3>
            <p>
              Astrologically-graded Pukhraj is subject to a strict set of criteria that goes well beyond ordinary jewellery grading. A stone recommended for Pukhraj use should typically be:
            </p>
            <ul>
              <li><strong>Natural, not synthetic.</strong> Only a naturally-occurring corundum crystal carries traditional astrological significance. Lab-grown yellow sapphires — whatever their optical properties — are not accepted.</li>
              <li><strong>Unheated.</strong> Traditional practice requires the stone to be as nature formed it. Heated stones are widely considered unsuitable for full astrological use.</li>
              <li><strong>Free of beryllium or any diffusion treatment.</strong> A diffused stone is disqualifying.</li>
              <li><strong>Free of surface-reaching fissures.</strong> Internal inclusions are usually tolerated, but fissures that reach the surface (sometimes called <em>dosh</em> — defects) are considered inauspicious.</li>
              <li><strong>A pure, clean yellow.</strong> Ideally without any greenish, brownish, or orange overtone. A bright, sunlit yellow is preferred.</li>
              <li><strong>Of adequate size.</strong> Many traditions recommend a minimum of around three carats, with 5–7 carats considered ideal. Specific size requirements are determined by the wearer&apos;s astrologer.</li>
              <li><strong>Certified.</strong> A report from a top-tier laboratory (GIA, GRS, SSEF, Gübelin) confirming natural origin, no heat treatment, and no beryllium is now standard practice for serious Pukhraj purchases.</li>
            </ul>
            <p>
              This is why fine unheated Ceylon yellow sapphires — which satisfy every one of these criteria natively — occupy the top of the Pukhraj market.
            </p>

            <h3>Traditional wearing guidance</h3>
            <p>
              Traditional guidance, again as belief rather than advice we ourselves offer: Pukhraj is typically set in yellow gold (which is believed to harmonise with Jupiter&apos;s energy), worn on the index finger of the working hand, and first put on during the <em>shukla paksha</em> (waxing moon) on a Thursday, ideally during the hora (hour) of Jupiter. Individual astrologers may prescribe variations based on the wearer&apos;s birth chart. A qualified astrologer should be consulted before wearing any Navaratna stone.
            </p>

            <hr />

            <h2 id="investment">Investment Value</h2>
            <p>
              Fine yellow sapphires — particularly unheated Ceylon stones with strong colour, clean clarity, and credible certification — have historically held and grown in value. Several factors support their long-term outlook:
            </p>
            <ul>
              <li><strong>Twin markets:</strong> Yellow sapphire enjoys steady demand from both Western fine jewellery and the enormous South Asian Pukhraj market. This dual demand cushions the stone against fluctuations in any one geography.</li>
              <li><strong>Rarity of unheated Ceylon material:</strong> Truly fine, naturally-unheated Ceylon yellow sapphires are limited by nature. Sri Lanka&apos;s traditional gem fields have been mined for millennia, and no new source of equivalent quality has emerged.</li>
              <li><strong>Portability and privacy:</strong> A high-value yellow sapphire is small, tangible, and internationally recognised.</li>
              <li><strong>Certification maturity:</strong> Top laboratories now provide the same rigorous reports for yellow sapphire that they do for blue and padparadscha, which has raised buyer confidence and expanded the international collector base.</li>
            </ul>
            <p>
              As with all coloured gemstones, only investment-grade material — fine colour, good clarity, unheated, credibly certified, and ideally 3+ carats — is likely to appreciate reliably over time. For current pricing on a specific stone, please make an enquiry — we quote based on the actual gemstone and current market.
            </p>

            <hr />

            <h2 id="famous">Famous Yellow Sapphires</h2>
            <p>
              Although yellow sapphires do not attract the same headline-record auction attention as their blue and padparadscha cousins, several notable examples have shaped the category:
            </p>
            <ul>
              <li><strong>Historical royal yellow sapphires:</strong> Ceylon yellow sapphires have appeared in the crown jewels and personal collections of European, Middle Eastern, and Asian royalty for centuries. Many pieces in the older jewel collections of the Indian princely states include fine Ceylon yellow sapphires set alongside diamonds and other Navaratna gems.</li>
              <li><strong>The Star of Bombay area:</strong> While the famous Star of Bombay is a violet-blue Ceylon star sapphire (given by Douglas Fairbanks to Mary Pickford, now at the Smithsonian), the Sri Lankan gem fields that produced it have also yielded countless fine yellow sapphires that have entered major private and institutional collections.</li>
              <li><strong>Modern auction highlights:</strong> Christie&apos;s, Sotheby&apos;s, and Bonhams have all sold exceptional unheated Ceylon yellow sapphires — typically as centre stones in important suites — over the past two decades. These sales have steadily raised the profile of unheated yellow as a serious collector category.</li>
              <li><strong>Museum specimens:</strong> The Smithsonian, the American Museum of Natural History, and the Natural History Museum in London all hold notable Sri Lankan yellow sapphires in their gem collections.</li>
            </ul>

            <hr />

            <h2 id="jewellery">Jewellery Guide</h2>
            <p>
              Yellow sapphire&apos;s durability and warm colour make it one of the most versatile coloured gemstones for jewellery:
            </p>
            <ul>
              <li><strong>Engagement and cocktail rings:</strong> A yellow sapphire ring is a distinctive alternative to a traditional yellow diamond, at a fraction of the cost for equivalent size and often with superior colour saturation.</li>
              <li><strong>Pukhraj rings:</strong> Traditional Indian and Sri Lankan settings favour open-back designs (so the stone touches the wearer&apos;s skin), oval or cushion cuts, and yellow gold shanks.</li>
              <li><strong>Pendants:</strong> Larger yellow sapphires (5+ carats) work beautifully as pendant centres, where their colour can be appreciated without daily-wear concerns.</li>
              <li><strong>Earrings:</strong> Matched pairs of yellow sapphires are prized for statement earrings. Finding pairs with identical colour, tone, and clarity commands a premium.</li>
            </ul>
            <p>
              <strong>Setting styles:</strong> Prong settings maximise light return and colour visibility. Bezel settings offer greater protection for active wearers. Halo settings surround the yellow sapphire with white diamonds, visually enlarging the centre and adding sparkle. For Pukhraj, traditional practice favours prong or open-back designs that allow direct contact with the wearer&apos;s skin.
            </p>
            <p>
              <strong>Metal choice:</strong> Yellow gold is the traditional and astrologically preferred metal for yellow sapphire, and it complements the stone&apos;s warm hue. White gold and platinum create a striking cool-warm contrast, favoured in some contemporary designs. Rose gold is a less traditional but softly romantic option.
            </p>

            <hr />

            <h2 id="care">Care &amp; Maintenance</h2>
            <p>
              Yellow sapphire is one of the most durable gemstones available and requires minimal special care:
            </p>
            <ul>
              <li><strong>Cleaning:</strong> Warm soapy water and a soft brush is safest. Rinse thoroughly and dry with a lint-free cloth. Ultrasonic and steam cleaning are generally safe for untreated stones, but should be avoided for any stone with visible fractures.</li>
              <li><strong>Storage:</strong> Store separately from softer stones to prevent scratching. A fabric-lined compartment or individual pouch is ideal.</li>
              <li><strong>Wear:</strong> Yellow sapphire is well suited to everyday wear. Remove during heavy manual work, contact sports, or exposure to harsh chemicals (chlorine bleach, strong acids).</li>
              <li><strong>Pukhraj specifics:</strong> Traditional practice encourages periodic cleansing of the stone in raw cow&apos;s milk or Ganga water on a Thursday, followed by re-consecration if the wearer wishes. This is a devotional practice, not a technical requirement.</li>
              <li><strong>Professional check:</strong> Have settings inspected annually by a jeweller to ensure prongs remain secure.</li>
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
              { label: 'GIA — Gemological Institute of America', detail: 'Coloured stone identification, treatment disclosure (including beryllium diffusion), and origin reports', href: 'https://www.gia.edu' },
              { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and treatment analysis for yellow sapphires', href: 'https://www.gemresearch.ch' },
              { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and origin determination for corundum', href: 'https://www.ssef.ch' },
              { label: 'Gübelin Gem Lab', detail: 'Origin determination and diffusion-treatment detection', href: 'https://www.gubelin.com/en/gemlab' },
              { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on beryllium diffusion in yellow and orange corundum', href: 'https://www.gia.edu/gems-gemology' },
              { label: 'Journal of Gemmology (Gem-A)', detail: 'Peer-reviewed gemmological research including yellow sapphire studies', href: 'https://gem-a.com/gem-hub/publications/the-journal-of-gemmology' },
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
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Looking for a Pukhraj?</p>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">Tell us your required size, colour, and treatment preference. We source unheated Ceylon yellow sapphires directly from Sri Lanka.</p>
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
            Interested in a Ceylon yellow sapphire?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            Whether you are commissioning a piece of fine jewellery or sourcing an astrologically-graded Pukhraj, we can help. Tell us your requirements — colour, size, treatment, certification — and we will respond with suitable options from our current inventory.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Make an Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
