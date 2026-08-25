import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Pink Sapphire — The Complete Guide to Ceylon Pink Sapphires',
  description:
    'A pink sapphire is a precious gemstone of the mineral corundum, coloured pink by trace amounts of chromium. Sri Lanka (Ceylon) is the historic and premier source for fine pink sapphires — bright, saturated, high-clarity stones. Learn about the pink/ruby debate, colour range, treatments, certification, and how to buy.',
  alternates: { canonical: 'https://www.serendibgemstones.com/gemstones/pink-sapphire' },
}

const faqItems = [
  {
    q: 'What is a pink sapphire?',
    a: 'A pink sapphire is a natural, gem-quality variety of the mineral corundum (aluminium oxide) coloured pink by trace amounts of chromium. It shares the same crystal structure and hardness (9 on the Mohs scale) as blue sapphire and ruby. When chromium content is low, the stone is called a pink sapphire; when chromium is high enough to produce a fully saturated red, the stone is called a ruby.',
  },
  {
    q: 'Where do the best pink sapphires come from?',
    a: 'Sri Lanka (Ceylon) is historically and currently regarded as the premier source for fine pink sapphires. Ceylon pinks are prized for their bright, open colour, high clarity, and a comparatively high proportion of naturally unheated crystals. Madagascar (especially Ilakaka) is a major modern producer, and Myanmar (Mogok), Tanzania, and Vietnam also produce pink sapphires. Ceylon stones typically show a cleaner, lighter, more vivid pink than Madagascar material.',
  },
  {
    q: 'What is the difference between a pink sapphire and a ruby?',
    a: 'Both are chromium-coloured corundum — only the depth of colour differs. A pink sapphire has enough chromium to produce a pink hue; a ruby has enough chromium to produce a fully saturated red. The exact boundary between the two is a longstanding trade debate. GIA generally requires strong red saturation to call a stone a ruby, while some laboratories and traditions (particularly historic Sri Lankan usage) have called lighter-red corundum "Ceylon ruby." Under modern GIA standards, many stones once sold as light rubies are classified as pink sapphires.',
  },
  {
    q: 'Are pink sapphires heat-treated?',
    a: 'A large majority of pink sapphires on the commercial market have been heat-treated to intensify colour and improve clarity. Heat treatment is stable, industry-accepted, and must be disclosed. Sri Lanka produces a meaningful share of pink sapphires that show fine natural colour without treatment. Naturally unheated Ceylon pinks command a significant premium and are the top of the market.',
  },
  {
    q: 'What certifications should I look for on a pink sapphire?',
    a: 'For any significant pink sapphire, insist on a report from a top-tier laboratory — GIA (Gemological Institute of America), GRS (GemResearch Swisslab), SSEF, or Gübelin. The report should confirm natural corundum, disclose any heat treatment, and — critically — explicitly test for beryllium diffusion, which can be used to induce pink or orange-pink colour in corundum. For an unheated stone, look for the phrase "no indications of heating."',
  },
  {
    q: 'Are pink sapphires suitable for engagement rings?',
    a: 'Yes — pink sapphire is one of the most popular non-diamond choices for engagement rings. With a Mohs hardness of 9, it is exceptionally durable for everyday wear, second only to diamond in scratch resistance. Pink sapphire also pairs beautifully with rose gold, which has driven a strong contemporary trend. Halo settings that surround the pink centre with white diamonds are particularly popular.',
  },
  {
    q: 'What is the best colour for a pink sapphire?',
    a: 'The most valued pink sapphires show a vivid, medium-toned pure pink — often described as "hot pink" or "bubblegum pink" — with strong saturation and even distribution. Very pale "baby pink" stones are attractive and elegant but sit lower in the market. Stones with strong purple or orange secondary hues are valued separately (purplish-pink is fashionable; orangey-pink approaches the padparadscha spectrum). For most buyers, the ideal is a bright, clean, saturated pink with no brownish overtone.',
  },
  {
    q: 'Are pink sapphires a good investment?',
    a: 'Fine unheated Ceylon pink sapphires with strong colour and reputable certification have historically held and grown in value, supported by growing global demand — particularly since the rise of pink sapphire engagement rings. As with all coloured stones, investment quality means top colour, good clarity, no unacceptable treatments, credible laboratory reports, and — ideally — Sri Lankan origin. For current pricing on a specific stone, please make an enquiry — we quote based on the actual gemstone and current market.',
  },
  {
    q: 'Can pink sapphires be lab-created?',
    a: 'Yes. Synthetic pink sapphires — produced by flame fusion, Czochralski pulling, or flux growth — have identical chemistry and crystal structure to natural stones. They are inexpensive and widely available. They have no rarity value and are worth a fraction of natural sapphires. A credible laboratory report from GIA, GRS, SSEF, or Gübelin will confirm whether a stone is natural or synthetic.',
  },
  {
    q: 'Are Sri Lankan pink sapphires better than Madagascar ones?',
    a: 'The trade generally regards fine Sri Lankan pink sapphires as the benchmark, though top Madagascar material can be very fine. Ceylon pinks typically show a brighter, more open colour with higher clarity and a lighter overall tone; Madagascar stones (particularly from Ilakaka) can be more heavily included and are often heat-treated. That said, quality varies within every origin, and a beautifully coloured Madagascar stone with a clean report can be an excellent choice.',
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
        { '@type': 'ListItem', position: 3, name: 'Pink Sapphire', item: 'https://www.serendibgemstones.com/gemstones/pink-sapphire' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Pink Sapphire — The Complete Guide to Ceylon Pink Sapphires',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://www.serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://www.serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-08-13',
      dateModified: '2026-08-13',
      mainEntityOfPage: 'https://www.serendibgemstones.com/gemstones/pink-sapphire',
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
  { name: 'Ruby', href: '/gemstones/ruby', colour: '#c0392b', desc: 'Pink sapphire\'s chromium-rich sibling — where the pink deepens into a full saturated red.' },
]

const toc = [
  { id: 'what-is', label: 'What Is a Pink Sapphire?' },
  { id: 'origins', label: 'Where Are They Found?' },
  { id: 'ceylon', label: 'Sri Lanka\'s Pink Sapphires' },
  { id: 'ruby-debate', label: 'The Pink / Ruby Debate' },
  { id: 'colours', label: 'Colour Range' },
  { id: 'quality', label: 'Quality Factors (The 4Cs)' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'certification', label: 'Certification' },
  { id: 'investment', label: 'Investment Value' },
  { id: 'famous', label: 'Famous Pink Sapphires' },
  { id: 'jewellery', label: 'Jewellery Guide' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'faq', label: 'FAQ' },
]

export default function PinkSapphirePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(212,107,154,0.4) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gemstones" className="hover:text-teal transition-colors">Gemstones</Link>
            <span>/</span>
            <span className="text-offwhite/60">Pink Sapphire</span>
          </nav>

          <FadeUp>
            <div className="flex items-start gap-6 mb-8">
              <GemSVG colour="#d46b9a" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Pink Sapphire
                </h1>
                <p className="font-jost text-sm text-offwhite/45 tracking-wide mt-3">The romantic corundum — where pink meets ruby</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                A pink sapphire is a precious gemstone of the mineral corundum (aluminium oxide), coloured pink by trace amounts of chromium. A small amount of chromium produces pink; more chromium produces ruby — and the exact boundary is a longstanding trade debate. Sri Lanka (Ceylon) is the historic and premier source for fine pink sapphires, prized for bright, saturated colour and high clarity.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Mineral', value: 'Corundum' },
                { label: 'Hardness', value: '9 / 10' },
                { label: 'Top Origin', value: 'Sri Lanka' },
                { label: 'Colour Cause', value: 'Chromium' },
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
            <ArticleByline updated="2026-08-13" reviewer="Thusira Ranasinghe" />

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

            <h2 id="what-is">What Is a Pink Sapphire?</h2>
            <p>
              A pink sapphire is a variety of the mineral corundum — crystalline aluminium oxide (Al₂O₃) — whose pink colour is produced by trace amounts of chromium within the crystal lattice. It is the same species as blue sapphire and ruby; only the trace-element chemistry differs. When chromium is present in only small quantities, the corundum crystal absorbs light in a way that produces a pink hue. As the concentration of chromium rises, the pink deepens through hot pink to a fully saturated red — at which point the stone becomes a ruby. This is why gemmologists sometimes describe pink sapphire and ruby as a single continuum divided by an internationally-debated colour line rather than as two separate species.
            </p>
            <p>
              The name &ldquo;sapphire&rdquo; on its own always refers to the blue variety. Any other colour of gem-quality corundum — pink, yellow, green, purple, orange, colourless — is called a &ldquo;fancy sapphire&rdquo; and named for its hue. Pink sapphire is among the most commercially important of the fancy sapphires, driven partly by its natural beauty and partly by the modern popularity of pink sapphire engagement rings.
            </p>
            <p>
              With a Mohs hardness of 9, sapphire is the second-hardest natural gemstone after diamond, making pink sapphire an exceptionally durable choice for everyday jewellery — rings, pendants, earrings, and bracelets alike. Its combination of romantic colour, extreme durability, natural rarity, and comparatively strong supply of unheated Ceylon material has made pink sapphire one of the fastest-growing categories in the fine coloured-stone market.
            </p>

            <hr />

            <h2 id="origins">Where Are Pink Sapphires Found?</h2>
            <p>
              Pink sapphires are mined in several countries, but only a handful of origins produce material of consistently top quality:
            </p>
            <ul>
              <li><strong>Sri Lanka (Ceylon)</strong> — the world&apos;s historic and current premier source for fine pink sapphires. Sri Lankan pinks are prized for their bright, open, saturated colour, high clarity, and a comparatively high proportion of naturally unheated crystals. Ceylon has produced pink sapphires for thousands of years, and its mines remain productive today.</li>
              <li><strong>Madagascar</strong> — a major modern source. The Ilakaka field, discovered in 1998, rapidly became one of the world&apos;s largest producers of pink sapphire and remains a dominant supplier of commercial-grade material. Top Madagascar pinks can be very fine, though the material generally requires more heat treatment and tends to be more heavily included than Ceylon rough.</li>
              <li><strong>Myanmar (Burma) — Mogok Stone Tract</strong> — produces small quantities of exceptionally fine pink sapphires, closely allied to Burmese ruby material. Burmese pinks are prized for their strong red fluorescence and vivid colour, though supply is limited.</li>
              <li><strong>Tanzania</strong> — produces pink sapphires from several deposits, notably around Songea and Winza. Colour can be beautiful but often carries a slight purplish or brownish overtone.</li>
              <li><strong>Vietnam</strong> — small production of fine pink sapphire, particularly from the Luc Yen area.</li>
              <li><strong>Others</strong> — Australia, Cambodia, and Malawi produce pink sapphires occasionally, though rarely at the top of the market.</li>
            </ul>
            <p>
              For the finest unheated pink sapphires — and especially for stones certified by top-tier laboratories with strong colour and clarity — Sri Lanka remains the trade&apos;s preferred origin. Ceylon material sets the benchmark against which pink sapphires from every other locality are measured.
            </p>

            <hr />

            <h2 id="ceylon">Sri Lanka&apos;s Pink Sapphires</h2>
            <p>
              Sri Lanka has been producing pink sapphires for at least 2,500 years, alongside blue sapphires, rubies, and the island&apos;s other famed corundum varieties. The main mining regions — <strong>Ratnapura</strong> (the historic &ldquo;City of Gems&rdquo; in Sabaragamuwa Province), <strong>Elahera</strong> (Central Province), <strong>Eheliyagoda</strong>, and the highland gem belt — all produce pink sapphires, typically recovered from alluvial gravels using traditional pit-mining techniques that have remained largely unchanged for centuries.
            </p>
            <p>
              What distinguishes Ceylon pink sapphires:
            </p>
            <ul>
              <li><strong>Bright, open colour:</strong> Sri Lankan pinks typically display a bright, lively, medium-toned pink with clean saturation. Compared with Madagascar material, Ceylon pinks read as fresher and more vivid, with less brownish or purplish cast.</li>
              <li><strong>Clarity:</strong> Ceylon pink sapphires are often eye-clean or nearly so, with fewer inclusions than pink sapphires from many other localities. This natural clarity is a hallmark of Sri Lankan material and a major reason it commands a premium.</li>
              <li><strong>Wide colour range:</strong> Sri Lanka produces pink sapphires across virtually the entire pink spectrum, from delicate baby pink through hot pink and bubblegum pink to deeper stones sitting on the ruby border.</li>
              <li><strong>Unheated proportion:</strong> Sri Lanka produces a meaningfully higher share of pink sapphires that show fine natural colour without heat treatment than any other major source. This makes Ceylon the premier origin for collectors seeking unheated stones.</li>
              <li><strong>Sizes:</strong> Ceylon regularly produces pink sapphires in the 1–5 carat range, with exceptional crystals reaching 10 carats and beyond — sizes ideal for both engagement rings and statement jewellery.</li>
            </ul>

            <hr />

            <h2 id="ruby-debate">The Pink / Ruby Debate</h2>
            <p>
              No discussion of pink sapphire is complete without addressing the longstanding debate about where pink sapphire ends and ruby begins. This is one of the most persistent and consequential arguments in the coloured-stone trade — a boundary that can move a single stone&apos;s classification, and therefore its market position, dramatically.
            </p>
            <p>
              <strong>The core issue.</strong> Pink sapphire and ruby are both chromium-coloured corundum. They differ only in how deeply the chromium colours the crystal. A stone with a small amount of chromium reads as pink; a stone with a large amount of chromium reads as red and is called a ruby. The problem is that colour perception is continuous, not stepped — many stones fall in a grey zone where reasonable experts disagree about whether the colour is a light red (ruby) or a very saturated pink (pink sapphire).
            </p>
            <p>
              <strong>How the major laboratories approach it.</strong> GIA (Gemological Institute of America) generally requires a stone to show strong red saturation and a red primary hue to be classified as ruby; borderline stones are typically called pink sapphire. GRS (GemResearch Swisslab) has historically been slightly more permissive in calling saturated pinks ruby, particularly for stones with strong colour and fluorescence. SSEF and Gübelin apply their own criteria, generally aligned closer to GIA. The result is that the same stone can — and sometimes does — receive different classifications from different top labs. A pink-to-red borderline stone with a &ldquo;pink sapphire&rdquo; report from GIA may carry a &ldquo;ruby&rdquo; report from another lab.
            </p>
            <p>
              <strong>Sri Lankan historical usage.</strong> The debate has particular resonance for Sri Lankan corundum, because traditional Ceylon usage historically called any red-hued corundum &ldquo;Ceylon ruby&rdquo; — a term that covered stones ranging from vivid red through pinkish red to what modern GIA standards would classify as pink sapphire. Ceylon rubies were internationally famous for their fluorescence and clean appearance, but under contemporary international standards, many of the lighter stones traditionally sold as Ceylon rubies are now classified as pink sapphires. This is not a change in the stones — only in how the trade names them.
            </p>
            <p>
              <strong>The commercial consequences.</strong> Because rubies of comparable quality typically sit at a higher price than pink sapphires, the classification matters. A stone reclassified from ruby to pink sapphire moves down the price ladder; a stone reclassified from pink sapphire to ruby moves up. For borderline material, sellers naturally seek the more favourable report, and buyers should understand that a &ldquo;ruby&rdquo; report on a light red-pink stone is not identical in market meaning to a &ldquo;ruby&rdquo; report on a Mogok pigeon-blood.
            </p>
            <p>
              <strong>The unambiguous end.</strong> Beyond the borderline, there is no debate. Fully saturated pigeon-blood ruby — the intense, slightly bluish-red material epitomised by the finest Burmese and, at auction, by stones such as the Sunrise Ruby — is unambiguously ruby by every laboratory&apos;s standard. Similarly, a delicate baby-pink Ceylon stone is unambiguously pink sapphire. The debate lives in the middle.
            </p>
            <p>
              <strong>What this means for buyers.</strong> When purchasing a stone at the pink-to-red border, ask which laboratory issued the report and understand that classification can vary. For most collectors, the practical answer is to buy the colour you love — call it what you like — and rely on a report from a top-tier laboratory to describe accurately what the stone is.
            </p>

            <hr />

            <h2 id="colours">Colour Range</h2>
            <p>
              Pink sapphire is not a single colour; it is a spectrum. The main tones seen in Ceylon and other material include:
            </p>
            <ul>
              <li><strong>Hot pink:</strong> A vivid, saturated, medium-toned pure pink. Widely considered the ideal — bright, lively, and instantly recognisable. Fine hot pink Ceylon sapphires sit at the top of the market.</li>
              <li><strong>Bubblegum pink:</strong> A slightly lighter, playful pink with clean saturation. Very popular in contemporary jewellery design, particularly in halo settings and pavé mountings.</li>
              <li><strong>Baby pink:</strong> A softer, gentler pink with lower saturation and a lighter tone. Beautiful and elegant; often preferred for delicate designs and romantic pieces, though it sits below the more saturated tones in market value.</li>
              <li><strong>Salmon pink:</strong> A pink with a subtle orange overtone, sitting between hot pink and the padparadscha spectrum. Fashionable and distinctive.</li>
              <li><strong>Purplish pink:</strong> A pink with a strong violet secondary hue. Highly fashionable in modern design and often distinctive of certain African deposits, though Sri Lanka produces beautiful examples as well.</li>
              <li><strong>Orangey pink:</strong> A pink with more pronounced orange content. As the orange increases and pink recedes, the stone can approach the padparadscha spectrum — but true padparadscha requires both pink and orange in a specific balance, and only laboratory analysis can confirm it.</li>
            </ul>
            <p>
              As with all coloured gemstones, colour is evaluated on hue (the position on the colour wheel), tone (lightness to darkness), and saturation (colour intensity). The most valued combinations pair medium tone with vivid saturation and a pure pink hue — no brown, no grey. Note that the boundary with padparadscha is also debated: pink sapphires with pronounced orange sit on the edge of an even more valuable category.
            </p>

            <hr />

            <h2 id="quality">Quality Factors — The 4Cs</h2>

            <h3>Colour</h3>
            <p>
              Colour is the single most important factor in a pink sapphire&apos;s value — typically accounting for the majority of the price. The ideal is a vivid, evenly saturated, medium-toned pure pink or slightly purplish pink. Stones that are too pale look washed out; stones with brownish or greyish overtones are penalised heavily. For collectors, the finest pink sapphires combine bright hot pink colour with high clarity and — ideally — no heat treatment.
            </p>

            <h3>Clarity</h3>
            <p>
              Pink sapphire is a Type II gemstone, meaning some inclusions are expected and accepted. Fine pink sapphires should be eye-clean under normal viewing. Common inclusions include rutile silk, fingerprint-like healed fissures, small mineral crystals, and colour zoning. Ceylon pink sapphires tend to be cleaner than material from most other origins — one of the main reasons they command a premium. Very heavily included stones should be avoided, particularly those with surface-reaching fractures that could weaken the stone.
            </p>

            <h3>Cut</h3>
            <p>
              Oval, cushion, and round brilliant cuts are the most common for pink sapphire, chosen to maximise both colour and light return. A well-cut pink sapphire shows even colour across the face, good symmetry, and no visible windowing (pale zones where light passes straight through). Pear and emerald cuts are also popular for statement stones. Cabochons are occasionally cut from silky material and can be beautiful, though faceted stones dominate the fine-jewellery market.
            </p>

            <h3>Carat Weight</h3>
            <p>
              Pink sapphires occur in a wide range of sizes. For engagement rings, 1–3 carats is the most popular range. For statement jewellery and collectors, 3–10 carat stones command significant premiums. Truly fine, unheated Ceylon pink sapphires above 5 carats with vivid colour are genuinely rare, and value rises steeply with size once colour and clarity are met. As with all corundum, doubling the carat weight of a fine stone can more than double the price per carat.
            </p>

            <hr />

            <h2 id="treatments">Treatments</h2>
            <p>
              Understanding treatments is essential for anyone buying a pink sapphire. Several forms of enhancement are encountered in the market, and the treatment status of a stone is one of the most important factors in its value.
            </p>
            <p>
              <strong>Conventional heat treatment.</strong> As with all sapphires, a large majority of commercially available pink sapphires have been heated in controlled furnaces at temperatures between 800°C and 1800°C to intensify colour and improve clarity. Heat treatment is stable, industry-accepted, and must be disclosed on any credible laboratory report. Heated stones remain beautiful, durable gemstones — but they sit below unheated material in the market.
            </p>
            <p>
              <strong>Unheated Ceylon pink.</strong> Sri Lanka produces more unheated pink sapphire than any other origin, and fine unheated Ceylon pinks command a significant premium over comparable heated stones. Look for the phrase &ldquo;no indications of heating&rdquo; on the laboratory report.
            </p>
            <p>
              <strong>Beryllium (Be) diffusion — a serious concern for pink sapphire.</strong> Beryllium diffusion is a lattice-diffusion process in which corundum is heated with beryllium-bearing material at very high temperatures. Beryllium atoms diffuse into the crystal lattice and can transform pale or off-colour corundum into intense pink, orange, or padparadscha-like stones — but the induced colour extends only into a thin surface layer, and re-cutting can alter or lose it. Beryllium diffusion is considered a heavily invasive treatment, and reputable trade practice requires full and clear disclosure. Beryllium-treated pink sapphires sell at a small fraction of the value of comparable natural-coloured Ceylon material.
            </p>
            <p>
              <strong>Detection.</strong> Beryllium diffusion cannot be detected visually. It requires advanced instrumental analysis — typically laser ablation ICP-MS or SIMS — available only at top-tier laboratories such as GIA, GRS, SSEF, and Gübelin. This is why, for any significant pink sapphire, a report from one of these labs is essential rather than optional.
            </p>
            <p>
              <strong>Other treatments.</strong> Fracture filling with glass or oil, surface coating, and irradiation are all encountered occasionally in pink-hued corundum. All should be avoided; all must be disclosed. Reputable dealers do not stock treated-pink material without clear disclosure.
            </p>

            <hr />

            <h2 id="certification">Certification</h2>
            <p>
              For any significant pink sapphire, an independent laboratory report is essential. The report confirms that the stone is natural corundum (not synthetic), discloses any treatments (heat, beryllium diffusion, fracture filling), and — for the finest stones — can determine geographic origin.
            </p>
            <p>
              The four laboratories that set the international standard for coloured-stone certification are:
            </p>
            <ul>
              <li><strong>GIA (Gemological Institute of America)</strong> — the gold standard for identification and treatment disclosure. GIA&apos;s coloured-stone reports include colour grade (hue, tone, saturation) and treatment analysis, and origin reports are available for a supplementary fee.</li>
              <li><strong>GRS (GemResearch Swisslab)</strong> — particularly respected for colour grading and origin determination. GRS reports for the finest stones include the &ldquo;Vivid Pink&rdquo; or &ldquo;Hot Pink&rdquo; trade colour designations.</li>
              <li><strong>SSEF (Swiss Gemmological Institute)</strong> — a Swiss laboratory known for scientific rigour and advanced spectroscopy, particularly for origin and treatment analysis.</li>
              <li><strong>Gübelin Gem Lab</strong> — one of the oldest gemmological laboratories, particularly respected for origin determination and provenance research.</li>
            </ul>
            <p>
              For fine pink sapphires, colour grading and origin determination both matter. A report describing &ldquo;vivid pink&rdquo; colour with Sri Lankan origin and no indications of heating is the ideal combination for a top-market stone.
            </p>

            <hr />

            <h2 id="investment">Investment Value</h2>
            <p>
              Fine pink sapphires have historically been one of the more reliable coloured-gemstone investments, and demand has grown steadily in recent years. Several structural factors support their long-term value:
            </p>
            <ul>
              <li><strong>Supply constraints:</strong> The finest pink sapphire deposits (Sri Lanka&apos;s traditional gem fields, Mogok) are finite and increasingly difficult to mine. Even Madagascar&apos;s Ilakaka field, though still productive, has passed its peak of easy alluvial recovery.</li>
              <li><strong>Growing demand:</strong> The popularity of pink sapphire engagement rings has expanded the buyer pool significantly over the past two decades. This is a genuine structural shift, not a passing fashion.</li>
              <li><strong>Auction performance:</strong> Major auction houses have achieved strong results for fine unheated Ceylon pink sapphires, particularly larger stones with vivid colour.</li>
              <li><strong>The padparadscha halo:</strong> As pink sapphires with orange overtones approach the padparadscha category, they benefit from adjacency to one of the world&apos;s most valuable coloured gemstones.</li>
              <li><strong>Portability and privacy:</strong> A high-value pink sapphire is small, tangible, internationally recognised, and not correlated with stock or bond markets.</li>
            </ul>
            <p>
              As with all coloured gemstones, only investment-grade material — fine colour, good clarity, unheated, credibly certified, and ideally Sri Lankan origin at 3+ carats — is likely to appreciate reliably over time. For current pricing on a specific stone, please make an enquiry — we quote based on the actual gemstone and current market.
            </p>

            <hr />

            <h2 id="famous">Famous Pink Sapphires</h2>
            <p>
              Pink sapphire has been treasured in royal and celebrity jewellery collections for centuries. A note on nomenclature: the famous <strong>Graff Pink</strong> is a pink <em>diamond</em>, not a pink sapphire — the two are often confused. The most famous pink sapphires include:
            </p>
            <ul>
              <li><strong>The Elizabeth Taylor pink sapphire brooch:</strong> Part of Elizabeth Taylor&apos;s legendary jewellery collection, later sold at Christie&apos;s in 2011 as part of the record-setting auction of her jewels.</li>
              <li><strong>Historic royal pink sapphires:</strong> Ceylon pink sapphires have appeared in the crown jewels and personal collections of European, Middle Eastern, and Asian royalty for centuries, often set alongside diamonds and blue sapphires in significant historical pieces.</li>
              <li><strong>Modern auction highlights:</strong> Christie&apos;s, Sotheby&apos;s, and Bonhams have all sold exceptional unheated pink sapphires — typically as centre stones in significant designer suites — over the past two decades. These sales have steadily raised the profile of fine pink sapphire as a serious collector category.</li>
              <li><strong>Celebrity engagement rings:</strong> Pink sapphire engagement rings have been worn by numerous celebrities, driving mainstream awareness and demand.</li>
              <li><strong>Museum specimens:</strong> The Smithsonian, the American Museum of Natural History, and the Natural History Museum in London all hold notable Sri Lankan pink sapphires in their gem collections.</li>
            </ul>

            <hr />

            <h2 id="jewellery">Jewellery Guide</h2>
            <p>
              Pink sapphire&apos;s combination of hardness (9 Mohs), brilliance, and romantic colour makes it one of the most versatile coloured gemstones for jewellery:
            </p>
            <ul>
              <li><strong>Engagement rings:</strong> Pink sapphire is one of the most popular non-diamond choices for engagement rings, combining durability with distinctive colour. Its Mohs 9 hardness makes it well suited to everyday wear.</li>
              <li><strong>Halo settings:</strong> A pink sapphire centre surrounded by a halo of white diamonds is one of the most popular contemporary settings. The halo visually enlarges the centre stone and adds sparkle that complements the pink.</li>
              <li><strong>Pendants and earrings:</strong> Larger pink sapphires (3+ carats) work beautifully as pendant centres. Matched pairs command a premium for statement earrings.</li>
              <li><strong>Three-stone rings:</strong> Pink sapphire as the centre stone with diamond side stones (or vice versa) is a classic combination.</li>
              <li><strong>Statement cocktail rings:</strong> Large pink sapphires (5+ carats) surrounded by diamonds make bold statement pieces.</li>
            </ul>
            <p>
              <strong>Metal choice:</strong> Rose gold is the standout choice for pink sapphire — the warm pink of the metal echoes and enhances the pink of the stone, creating a harmonious romantic look that has driven a major contemporary jewellery trend. White gold and platinum create a crisp, modern contrast that emphasises the pink hue. Yellow gold pairs traditionally with pink sapphire and gives a warm, classic feel.
            </p>
            <p>
              <strong>Setting styles:</strong> Prong settings maximise light return and colour visibility. Bezel settings offer greater protection for active wearers. Pavé and micro-pavé mountings with pink sapphire centres are particularly fashionable in bridal and cocktail jewellery.
            </p>

            <hr />

            <h2 id="care">Care &amp; Maintenance</h2>
            <p>
              Pink sapphire is one of the most durable gemstones and requires minimal special care:
            </p>
            <ul>
              <li><strong>Cleaning:</strong> Warm soapy water and a soft brush is the safest method. Rinse thoroughly and dry with a lint-free cloth. Ultrasonic and steam cleaning are generally safe for untreated stones but should be avoided for any stone with visible fractures or fracture filling.</li>
              <li><strong>Storage:</strong> Store pink sapphire jewellery separately from softer stones to avoid scratching them. A fabric-lined compartment or individual pouch is ideal.</li>
              <li><strong>Wear:</strong> Pink sapphire is well suited to everyday wear, including engagement rings. Remove during heavy manual work, contact sports, or exposure to harsh chemicals such as chlorine bleach.</li>
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
              { label: 'GIA — Gemological Institute of America', detail: 'Coloured stone identification, treatment disclosure, and the pink-to-red classification boundary', href: 'https://www.gia.edu' },
              { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and origin determination for pink sapphires', href: 'https://www.gemresearch.ch' },
              { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and origin determination for corundum', href: 'https://www.ssef.ch' },
              { label: 'Gübelin Gem Lab', detail: 'Origin determination and diffusion-treatment detection for pink sapphires', href: 'https://www.gubelin.com/en/gemlab' },
              { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on beryllium diffusion and pink-ruby classification', href: 'https://www.gia.edu/gems-gemology' },
              { label: 'Journal of Gemmology (Gem-A)', detail: 'Peer-reviewed gemmological research including pink sapphire studies', href: 'https://gem-a.com/gem-hub/publications/the-journal-of-gemmology' },
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
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Looking for a pink sapphire?</p>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">Tell us your preferred colour, size, and treatment preference. We source unheated Ceylon pink sapphires directly from Sri Lanka.</p>
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
            Interested in a Ceylon pink sapphire?
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
