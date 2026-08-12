import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Star Sapphire — The Complete Guide to Ceylon Star Sapphires',
  description:
    'A star sapphire is a cabochon-cut sapphire displaying asterism — a six-rayed star of light gliding across the domed surface. Sri Lanka (Ceylon) is the world\'s premier source, producing the finest blue, black, grey, and pink star sapphires — including the Star of India, Star of Bombay, and Star of Adam. Learn about asterism, quality factors, treatments, and famous stones.',
  alternates: { canonical: 'https://serendibgemstones.com/gemstones/star-sapphire' },
}

const faqItems = [
  {
    q: 'What is a star sapphire?',
    a: 'A star sapphire is a variety of the mineral corundum (aluminium oxide) that displays an optical phenomenon called asterism — a six-rayed star of light that appears to glide across the domed surface of a cabochon-cut stone as it is moved under a light source. The star is caused by microscopic rutile inclusions (called silk) arranged in parallel arrays within the crystal, which reflect and scatter light along three axes intersecting at 120°.',
  },
  {
    q: 'What causes the star in a star sapphire?',
    a: 'The star is caused by microscopic needle-like inclusions of rutile (titanium dioxide) that grew inside the corundum crystal along its C-axis in three preferred directions, each 120° apart. When the stone is cut as a dome-topped cabochon, light striking the surface reflects off these three parallel sets of needles, producing three intersecting rays that appear as a six-pointed star. Very rarely, two overlapping sets of needles produce a twelve-rayed star.',
  },
  {
    q: 'Are all star sapphires natural?',
    a: 'No. Both synthetic star sapphires (produced by the Verneuil flame-fusion process since the 1940s, with added titanium to induce asterism) and diffusion-treated star sapphires exist on the market. Synthetic stars are typically too perfect — the star is unnaturally sharp and centred, and the body is often too clean. Diffusion-treated stars have had asterism induced or enhanced in a thin surface layer. A laboratory report from GIA or another top-tier lab is the definitive way to distinguish natural, synthetic, and treated stones.',
  },
  {
    q: 'Where are the best star sapphires found?',
    a: 'Sri Lanka (Ceylon) is unambiguously the world\'s premier source for fine star sapphires. Ceylon produces stars with the sharpest, most centred rays, the most translucent bodies, and the widest range of body colours — blue, grey, black, pink, and rare colours. The famous Star of India, Star of Bombay, and Star of Adam are all Ceylon stones. Myanmar, Thailand, Australia, India, and Vietnam also produce star sapphires; the Black Star of Queensland is Australia\'s most famous.',
  },
  {
    q: 'What makes a good star sapphire?',
    a: 'A fine star sapphire needs a sharp, well-defined star; a star that sits dead-centre on the top of the cabochon; six legs of equal length and brightness; a pleasing body colour with even saturation; enough translucency to show life without being so transparent that the star weakens; and a well-proportioned cabochon dome. Ceylon stars are prized above others because they combine all of these qualities more consistently than material from other origins.',
  },
  {
    q: 'Are star sapphires rare?',
    a: 'Fine star sapphires are genuinely rare. The combination of factors required — the right silk density and orientation, adequate body colour, correct cutting, and star quality — occurs in only a small fraction of corundum rough. Truly exceptional stars in large sizes (10+ carats) with sharp centred rays, fine translucent bodies, and rare colours (pink, violet) are among the most desirable coloured stones in the market.',
  },
  {
    q: 'Do star sapphires show the star only in direct light?',
    a: 'The star is most vivid under a single, directional light source — sunlight, a spotlight, or a focused lamp. Under diffuse light (an overcast sky or ambient room lighting), the star weakens or disappears, and the stone appears simply as a translucent cabochon of its body colour. This is a normal characteristic of the phenomenon, not a defect. Fine stars remain visible even under fairly modest directional light.',
  },
  {
    q: 'Are black star sapphires natural?',
    a: 'Yes. Black star sapphire is a naturally occurring variety of corundum with a body colour so densely packed with dark inclusions (often including hematite as well as rutile) that it appears black or very dark brown. The star is typically silvery or golden against the dark body. Black star sapphires occur naturally in Sri Lanka, Thailand, and Australia. The Black Star of Queensland is the most famous natural example.',
  },
  {
    q: 'Can star sapphires be lab-created?',
    a: 'Yes. Synthetic star sapphires have been produced commercially since the 1940s using a modified flame-fusion process in which titanium is added to the melt to induce rutile precipitation and asterism during controlled cooling. These stones are inexpensive, widely available, and easily recognised by trained gemmologists — their stars are typically too sharp, too perfectly centred, and the body is too clean. They have no rarity value and are worth a fraction of natural stones.',
  },
  {
    q: 'What is diffusion treatment and does it apply to star sapphires?',
    a: 'Yes — and it is a serious concern in the star sapphire market. Unlike faceted sapphires (where diffusion typically alters colour), some star sapphires are lattice-diffusion treated to induce or enhance asterism itself. Titanium or other elements are diffused into the surface layer of a stone at very high temperatures, causing rutile precipitation and producing an artificial star in a thin skin. The star can be lost if the stone is re-cut. This treatment must be disclosed; reputable dealers avoid it or disclose it clearly.',
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
        { '@type': 'ListItem', position: 3, name: 'Star Sapphire', item: 'https://serendibgemstones.com/gemstones/star-sapphire' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Star Sapphire — The Complete Guide to Ceylon Star Sapphires',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-08-13',
      dateModified: '2026-08-13',
      mainEntityOfPage: 'https://serendibgemstones.com/gemstones/star-sapphire',
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
  { name: 'Blue Sapphire', href: '/gemstones/blue-sapphire', colour: '#1a5f9e', desc: 'The faceted Ceylon classic — cornflower blue, high clarity, high unheated proportion.' },
  { name: 'Ruby', href: '/gemstones/ruby', colour: '#c0392b', desc: 'Corundum\'s red variety — also produces star rubies with the same six-rayed asterism.' },
  { name: 'Padparadscha Sapphire', href: '/gemstones/padparadscha-sapphire', colour: '#e8855e', desc: 'The rarest fancy sapphire — a delicate pink-orange lotus blossom hue, born in Sri Lanka.' },
]

const toc = [
  { id: 'what-is', label: 'What Is a Star Sapphire?' },
  { id: 'asterism', label: 'The Science of Asterism' },
  { id: 'origins', label: 'Where Are They Found?' },
  { id: 'ceylon', label: 'Sri Lanka\'s Star Sapphires' },
  { id: 'colours', label: 'Colour Range' },
  { id: 'quality', label: 'Quality Factors' },
  { id: 'treatments', label: 'Heated, Unheated & Diffusion' },
  { id: 'famous', label: 'Famous Star Sapphires' },
  { id: 'certification', label: 'Certification' },
  { id: 'jewellery', label: 'Jewellery Guide' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'faq', label: 'FAQ' },
]

export default function StarSapphirePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(58,111,168,0.4) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gemstones" className="hover:text-teal transition-colors">Gemstones</Link>
            <span>/</span>
            <span className="text-offwhite/60">Star Sapphire</span>
          </nav>

          <FadeUp>
            <div className="flex items-start gap-6 mb-8">
              <GemSVG colour="#3a6fa8" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Star Sapphire
                </h1>
                <p className="font-jost text-sm text-offwhite/45 tracking-wide mt-3">Asterism — the six-rayed star of Ceylon</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                A star sapphire is a cabochon-cut sapphire that displays a six-rayed star of light — an optical phenomenon called <em>asterism</em> — gliding across its domed surface. The star is caused by microscopic rutile silk inclusions inside the crystal. Sri Lanka (Ceylon) is the world&apos;s premier source, producing the sharpest stars in the most translucent bodies — including the celebrated Star of India, Star of Bombay, and Star of Adam.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Mineral', value: 'Corundum' },
                { label: 'Hardness', value: '9 / 10' },
                { label: 'Effect', value: 'Asterism' },
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

            <h2 id="what-is">What Is a Star Sapphire?</h2>
            <p>
              A star sapphire is a variety of the mineral corundum — crystalline aluminium oxide (Al₂O₃) — cut as a dome-topped cabochon so that its interior structure produces an optical phenomenon called <em>asterism</em>: a six-rayed star of light that appears to float on the surface of the stone and glide across it as the stone is tilted or the light source is moved. It is the same species as faceted blue sapphire and ruby; what makes a star sapphire different is the density and orientation of microscopic rutile-needle inclusions inside the crystal and the cabochon cut that displays them.
            </p>
            <p>
              Star sapphires occur in every colour that corundum takes — blue, grey, black, pink, purple, orange, and even colourless. The most classic and best-known star sapphire is blue, but black star sapphire is also familiar, and rare pink star sapphires and violet star sapphires are highly prized by collectors. In every case, the star is caused by the same underlying mechanism: reflection of light from three sets of parallel rutile needles inside the stone.
            </p>
            <p>
              With a Mohs hardness of 9, star sapphires are extremely durable, though their polished cabochon domes are more susceptible to scratching from careless wear than faceted stones because the surface curvature makes minor scratches more visible. Star sapphires have been treasured for centuries — cultures across South Asia and the Middle East have long regarded the star as protective and auspicious, and the finest historical specimens are among the most famous named gemstones in the world.
            </p>

            <hr />

            <h2 id="asterism">The Science of Asterism</h2>
            <p>
              Understanding what causes the star helps you evaluate a star sapphire&apos;s quality. Asterism is caused by parallel arrays of microscopic needle-like inclusions — most commonly rutile (titanium dioxide), sometimes hematite in dark stones — that grew inside the corundum crystal along preferred crystallographic directions.
            </p>
            <p>
              Corundum crystallises in the hexagonal (trigonal) system. Its atomic structure has one long axis (the C-axis, or optic axis) perpendicular to three shorter directions that lie in a plane at 60° intervals — but because opposing directions are equivalent, there are effectively three preferred needle directions, each 120° apart, when viewed down the C-axis.
            </p>
            <p>
              As the crystal grew, dissolved titanium and iron exsolved from the corundum host during cooling and crystallised as rutile needles aligned along these three directions. Each set of parallel needles behaves like a tiny cylindrical mirror. When the stone is cut as a cabochon with its dome oriented perpendicular to the C-axis and light strikes the domed surface, each set of needles reflects light as a narrow luminous band at right angles to the needle direction. Three sets of needles produce three intersecting bands — visible as a six-pointed star.
            </p>
            <p>
              Occasionally, a second set of finer needles crystallises at a different orientation, producing a twelve-rayed star. Genuine twelve-rayed star sapphires are extremely rare and prized by collectors.
            </p>
            <p>
              For the star to be strong and sharp, several conditions must hold: the rutile silk must be dense enough to produce visible reflection but not so dense that the stone loses translucency; the needles must be straight, long, and well aligned in all three directions; and the cabochon must be cut with its base perpendicular to the C-axis so the star sits centred and symmetrical on the dome. Cutting the cabochon off-axis produces an off-centre star — a common defect that dramatically reduces value.
            </p>

            <hr />

            <h2 id="origins">Where Are Star Sapphires Found?</h2>
            <p>
              Star sapphires are found in several countries, but the trade recognises a clear hierarchy dominated by a single origin:
            </p>
            <ul>
              <li><strong>Sri Lanka (Ceylon)</strong> — unambiguously the world&apos;s premier source for fine star sapphires. Ceylon produces star sapphires in the widest range of colours (blue, grey, black, pink, violet, orange, colourless), with the sharpest and most centred stars, and in the most translucent bodies. All of the most famous named blue star sapphires — Star of India, Star of Bombay, Star of Adam — are Sri Lankan.</li>
              <li><strong>Myanmar (Burma)</strong> — produces small quantities of fine star sapphire, including exceptional star rubies from Mogok. Burmese material can be very fine but is limited in supply.</li>
              <li><strong>Thailand and Cambodia</strong> — traditionally significant producers of star sapphire, particularly black star sapphire. Thai and Cambodian material is often heat-treated or diffusion-treated.</li>
              <li><strong>Australia</strong> — Queensland produces dark blue and black star sapphires. The Black Star of Queensland (733 ct) is the most famous Australian star.</li>
              <li><strong>India</strong> — Kashmir historically produced fine star sapphires; smaller quantities continue to come from other Indian deposits.</li>
              <li><strong>Vietnam and Madagascar</strong> — modern producers of star sapphires of variable quality.</li>
              <li><strong>United States (Montana)</strong> — small production of interesting star sapphires with distinctive colour profiles.</li>
            </ul>
            <p>
              For collectors and connoisseurs, Ceylon remains the origin of choice. The combination of star sharpness, body translucency, colour range, and consistent supply of unheated material is unmatched anywhere else in the world.
            </p>

            <hr />

            <h2 id="ceylon">Sri Lanka&apos;s Star Sapphires</h2>
            <p>
              Sri Lanka&apos;s dominance in star sapphires is not a matter of marketing — it is a matter of geology and centuries of experience. The island&apos;s gem-bearing metamorphic terrain has produced the finest star sapphires in the world for at least 2,000 years. The primary mining regions are <strong>Ratnapura</strong> (the historic &ldquo;City of Gems&rdquo; in Sabaragamuwa Province), <strong>Elahera</strong> (in the Central Province), and the highland gem belt, with material recovered from alluvial gravels using traditional pit-mining techniques.
            </p>
            <p>
              What sets Ceylon star sapphires apart:
            </p>
            <ul>
              <li><strong>Star sharpness:</strong> Ceylon stars are typically crisp, well-defined, and razor-thin, with six equal legs radiating from a central point. This is the single most valued characteristic in a star sapphire, and Sri Lanka produces sharper stars more consistently than any other origin.</li>
              <li><strong>Star centring:</strong> Sri Lankan cutters, working with centuries of accumulated expertise, orient cabochons to sit the star dead-centre on the dome. This precise cutting is as much a Ceylon tradition as the material itself.</li>
              <li><strong>Body translucency:</strong> Ceylon star sapphires typically show enough translucency to give the body colour depth and life, without being so transparent that the star weakens. This balance is difficult to achieve and difficult to find outside Sri Lanka.</li>
              <li><strong>Colour range:</strong> Sri Lanka produces star sapphires in every corundum colour — deep royal-blue, cornflower-blue, and greyish-blue stars; grey and silvery stars; black star sapphires with silvery or golden stars; the extremely rare pink star sapphires; and colourless or pale stars with brilliant white asterism.</li>
              <li><strong>Historical pedigree:</strong> The Star of India, the Star of Bombay, the Star of Adam, and many of the other most famous star sapphires in museum collections around the world are Ceylon stones. This is not coincidence — no other origin has produced comparably fine material at comparable scale.</li>
              <li><strong>Unheated proportion:</strong> A significantly higher share of Sri Lankan star sapphires are of natural, unenhanced quality than material from many other origins.</li>
              <li><strong>Sizes:</strong> Ceylon regularly produces fine star sapphires in the 5–50 carat range, with exceptional stones exceeding 100 carats. The very largest known blue star sapphires are all Sri Lankan.</li>
            </ul>

            <hr />

            <h2 id="colours">Colour Range</h2>
            <p>
              Star sapphires occur in the full range of corundum colours. The most important varieties in the market:
            </p>
            <ul>
              <li><strong>Blue star sapphire:</strong> The most classic and best-known variety. Colours range from deep royal blue through cornflower blue and violet-blue to lighter greyish-blue. A fine blue star sapphire combines a saturated, evenly distributed blue body with a bright silver or white star. Sri Lanka produces the finest blue star sapphires in the world.</li>
              <li><strong>Black star sapphire:</strong> A body colour so densely packed with dark inclusions (rutile and often hematite) that the stone appears black or very dark brown. The star is typically silvery or golden and stands out vividly against the dark body. Black star sapphires occur naturally in Sri Lanka, Thailand, and Australia. They tend to be more opaque than blue stars.</li>
              <li><strong>Grey star sapphire:</strong> A softer, silvery-grey body with a bright star. Elegant and often affordable, though the market values coloured stars above grey.</li>
              <li><strong>Pink star sapphire:</strong> Very rare and highly collectible. Fine pink stars combine a saturated pink body with a sharp, centred star. Sri Lanka is the main source, and top pinks command significant premiums.</li>
              <li><strong>White (colourless) star sapphire:</strong> A colourless or near-colourless body with a bright white star. Understated and elegant.</li>
              <li><strong>Violet / purple star sapphire:</strong> Rare and distinctive, sitting between blue and pink. Ceylon produces occasional exceptional examples.</li>
              <li><strong>Golden and orange star sapphires:</strong> Less common but occur naturally in Sri Lanka and other origins.</li>
            </ul>

            <hr />

            <h2 id="quality">Quality Factors for Star Sapphires</h2>
            <p>
              Star sapphires are evaluated on a different set of criteria from faceted sapphires. The 4Cs — colour, clarity, cut, carat — still apply, but the priorities are different, and additional star-specific factors matter enormously. In rough order of importance:
            </p>

            <h3>Star sharpness</h3>
            <p>
              The single most important factor. A fine star is crisp, thin, and well-defined; a poor star is diffuse, blurry, or broken. Star sharpness depends on the density, straightness, and alignment of the internal rutile silk. Under a single directional light, a fine star should read as three clean intersecting bands, not as a fuzzy glow.
            </p>

            <h3>Star centring</h3>
            <p>
              The star must sit dead-centre on the top of the cabochon dome as the stone is viewed face-up. An off-centre star is a cutting defect — the cabochon was oriented incorrectly relative to the crystal&apos;s C-axis — and dramatically reduces value. Fine Ceylon star sapphires are cut by experienced local cutters specifically to sit the star perfectly centred.
            </p>

            <h3>Star completeness and leg quality</h3>
            <p>
              All six legs of the star should be present, equal in length, equal in brightness, and straight. Missing legs, uneven legs, or wavy legs all reduce value.
            </p>

            <h3>Body colour saturation and evenness</h3>
            <p>
              The body colour should be pleasing, well saturated, and evenly distributed. A fine blue star sapphire has a rich, even blue body; a fine black star has an inky, uniform dark body. Colour zoning — patches of stronger and weaker colour visible through the dome — reduces value.
            </p>

            <h3>Translucency versus opacity</h3>
            <p>
              A star sapphire needs enough silk density to produce a strong star, but too much silk kills body translucency and produces a lifeless, opaque stone. The finest Ceylon stars balance the two beautifully — enough translucency to show depth of colour, enough silk to produce a sharp star.
            </p>

            <h3>Cabochon proportions</h3>
            <p>
              A well-cut cabochon has a symmetrical dome — neither too flat (which flattens and weakens the star) nor too high (which distorts the star&apos;s appearance). Traditional Sri Lankan cutting favours a moderately high, symmetrical dome that shows the star at its best.
            </p>

            <h3>Carat weight</h3>
            <p>
              Star sapphires occur across a wide range of sizes. Small stars (under 3 carats) are affordable and common; 5–15 carats is the classic jewellery range; 20+ carats is collector territory; and truly exceptional stones (50+ carats) command significant premiums when they combine size with sharp star and fine body colour.
            </p>

            <hr />

            <h2 id="treatments">Heated, Unheated, and Diffusion</h2>
            <p>
              Treatments in the star sapphire market differ from those in the faceted-sapphire market in important ways. Buyers of star sapphires should understand three distinct concerns.
            </p>
            <p>
              <strong>Conventional heat treatment.</strong> Unlike faceted sapphires, many star sapphires are <em>not</em> heat-treated — because heat treatment can dissolve the very rutile silk that causes the star. Some low-temperature heating is used to improve body colour or clarity without destroying the silk, but aggressive heating (as used on faceted stones) generally ruins a star sapphire. This means the market for unheated star sapphires is proportionally larger and more accessible than for unheated faceted sapphires.
            </p>
            <p>
              <strong>Diffusion treatment to induce or enhance asterism — a serious concern.</strong> Unlike faceted sapphires (where diffusion typically alters colour), some star sapphires are subjected to lattice-diffusion treatment in which titanium or other elements are diffused into the surface layer of a stone at very high temperatures. This causes rutile precipitation and produces artificial asterism, or enhances weak natural asterism, in a thin surface skin. The induced star can be lost if the stone is re-cut or if the surface is worn or abraded. Diffusion-treated star sapphires are considered heavily invasive and should be fully disclosed. They sell at a small fraction of the value of natural, untreated stars.
            </p>
            <p>
              <strong>Lattice diffusion for colour.</strong> As with faceted sapphires, lattice diffusion (particularly with beryllium) can be used to alter body colour in star sapphires. This is a separate concern from asterism-inducing diffusion and equally requires disclosure.
            </p>
            <p>
              <strong>Synthetic star sapphires.</strong> Verneuil (flame-fusion) synthetic star sapphires have been produced commercially since the 1940s. Titanium is added to the melt, and the boule is cooled slowly to allow rutile precipitation. When cut as cabochons, these synthetics display asterism — but the star is typically too sharp, too perfectly centred, and the body is too clean. Trained gemmologists can identify synthetics easily, but buyers should always demand laboratory verification.
            </p>
            <p>
              <strong>Detection.</strong> A report from GIA, GRS, SSEF, or Gübelin will identify synthetic material, disclose heat treatment, and detect diffusion. For any significant star sapphire, laboratory certification is essential.
            </p>

            <hr />

            <h2 id="famous">Famous Star Sapphires</h2>
            <p>
              Star sapphires include some of the most celebrated named gemstones in the world. The most famous — and notably, all but one of the great blue star sapphires — are Ceylon stones.
            </p>
            <ul>
              <li><strong>The Star of India (563 carats)</strong> — one of the largest and most famous star sapphires in existence. A greyish-blue Ceylon star sapphire with a sharp six-rayed star visible on both faces of the cabochon (a rare feature caused by particularly well-aligned silk). Donated by J.P. Morgan to the American Museum of Natural History, New York, where it is on permanent display. The Star of India is the classic reference stone for what a fine large Ceylon star sapphire looks like.</li>
              <li><strong>The Star of Bombay (182 carats)</strong> — a violet-blue Ceylon star sapphire given by silent-film actor Douglas Fairbanks to his wife, Mary Pickford. On her death in 1979, it was bequeathed to the Smithsonian Institution&apos;s National Museum of Natural History, where it remains on public display.</li>
              <li><strong>The Star of Adam (1,404 carats)</strong> — the world&apos;s largest known blue star sapphire. Found in Ratnapura, Sri Lanka in 2015. A pale blue stone with a distinct six-rayed star, its discovery made international news and reinforced Sri Lanka&apos;s standing as the world&apos;s dominant star sapphire source.</li>
              <li><strong>The Black Star of Queensland (733 carats)</strong> — the largest known cut black star sapphire, found in Australia in the 1930s. It is the most famous Australian star sapphire and has had a colourful ownership history, passing through several private collections over the decades.</li>
              <li><strong>The Star of Asia (330 carats)</strong> — a fine Ceylon blue star sapphire held in the Smithsonian&apos;s National Museum of Natural History, notable for its rich blue body colour and sharp star.</li>
              <li><strong>The Rosser Reeves Star Ruby (138.7 carats)</strong> — a sibling category: one of the world&apos;s largest and finest star rubies, of Sri Lankan origin, at the Smithsonian. Rubies also display asterism when they contain oriented rutile silk, following exactly the same mechanism as blue star sapphires.</li>
            </ul>
            <p>
              The overwhelming Sri Lankan pedigree of the world&apos;s most famous blue star sapphires is not accidental. Ceylon&apos;s gem-bearing gravels have produced the largest crystals of the right kind, with the right silk density and orientation, for as long as gemstones have been valued.
            </p>

            <hr />

            <h2 id="certification">Certification</h2>
            <p>
              For any significant star sapphire, an independent laboratory report from a top-tier lab is essential. The report should:
            </p>
            <ul>
              <li>Confirm that the stone is natural corundum (not synthetic).</li>
              <li>Identify the phenomenon (asterism) and note the number of rays.</li>
              <li>Disclose any heat treatment.</li>
              <li>Explicitly test for diffusion — both colour diffusion and asterism-inducing diffusion.</li>
              <li>For the finest stones, determine geographic origin.</li>
            </ul>
            <p>
              The main laboratories used for star sapphire certification are <strong>GIA</strong> (Gemological Institute of America), <strong>GRS</strong> (GemResearch Swisslab), <strong>SSEF</strong> (Swiss Gemmological Institute), and the <strong>Gübelin Gem Lab</strong>. Reports for cabochon-cut stones differ slightly in format from faceted-stone reports — dimensions are given as diameter and height rather than depth percentages, and photographs typically show the star under a single light source.
            </p>

            <hr />

            <h2 id="jewellery">Jewellery Guide</h2>
            <p>
              Star sapphires have a strong and distinctive jewellery tradition, particularly in men&apos;s jewellery, where they occupy a place few other coloured stones do.
            </p>
            <ul>
              <li><strong>Men&apos;s rings:</strong> Star sapphire is one of the classic gemstones for men&apos;s signet rings, cocktail rings, and dress rings. Its bold cabochon form, restrained star, and durable hardness suit heavy gold or platinum mountings. Traditional US Presidents&apos; rings and mid-century American men&apos;s rings often feature Ceylon blue or black star sapphires.</li>
              <li><strong>Women&apos;s cocktail rings:</strong> Large star sapphires (10–30 carats) make dramatic cocktail-ring centres, typically in bezel or halo settings.</li>
              <li><strong>Pendants:</strong> Star sapphires work beautifully as pendants, where the star can be admired without daily-wear concerns.</li>
              <li><strong>Cufflinks and tie tacks:</strong> Small, matched pairs of blue or black star sapphires make classic men&apos;s dress accessories.</li>
              <li><strong>Earrings:</strong> Matched pairs are prized for statement earrings.</li>
            </ul>
            <p>
              <strong>Setting styles.</strong> Bezel settings — where a rim of metal wraps around the cabochon&apos;s girdle — are the most common and traditional. They protect the cabochon dome, hold it securely, and frame the star. Cathedral settings, in which the shank rises up to support the bezel, are a classic men&apos;s ring style. Half-bezels and prong settings are used occasionally but expose the dome to more wear. Note that the &ldquo;cat&apos;s eye&rdquo; cabochon — a related but different phenomenon in chrysoberyl and other minerals — is a single line of light, not a six-rayed star; the two effects should not be confused.
            </p>
            <p>
              <strong>Metal choice.</strong> Yellow gold pairs traditionally with blue and black star sapphires, particularly in men&apos;s designs. White gold and platinum create a cooler, contemporary look. Rose gold suits pink and lighter-coloured stars.
            </p>

            <hr />

            <h2 id="care">Care &amp; Maintenance</h2>
            <p>
              Star sapphires are exceptionally hard (9 Mohs) but require slightly more careful handling than faceted sapphires because the polished cabochon dome is more prone to visible scratching and abrasion than a faceted stone. Basic care:
            </p>
            <ul>
              <li><strong>Cleaning:</strong> Warm soapy water and a soft brush is the safest method. Rinse thoroughly and dry with a lint-free cloth. <strong>Avoid ultrasonic cleaners</strong> — the vibrations can damage the surface of a cabochon and can loosen silk-heavy stones. Steam cleaning should also be avoided.</li>
              <li><strong>Oiled or filled stones:</strong> Some star sapphires (particularly commercial-grade stones) have been surface-oiled to enhance the appearance of the star. Oil can dry out or wash away over time; if this happens, the star may weaken. Have oiled stones inspected occasionally by a jeweller.</li>
              <li><strong>Wear:</strong> Star sapphires are suitable for everyday wear in protected settings (bezel, cathedral). Remove during heavy manual work, contact sports, or exposure to harsh chemicals.</li>
              <li><strong>Storage:</strong> Store separately from other jewellery to prevent the dome from being scratched by harder stones or metal.</li>
              <li><strong>Professional maintenance:</strong> Have settings inspected annually to ensure the bezel remains tight. If the cabochon dome accumulates fine surface scratches over decades of wear, a skilled cutter can repolish it — but this should be done only by someone experienced with cabochons, as improper repolishing can shift the star&apos;s position.</li>
              <li><strong>Diffusion-treated stones:</strong> If a stone is diffusion-treated (fully disclosed), avoid any procedure that would abrade the surface — including ultrasonic cleaning and repolishing — as the induced star lives in a thin surface layer.</li>
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
              { label: 'GIA — Gemological Institute of America', detail: 'Star sapphire identification, asterism analysis, and treatment disclosure', href: 'https://www.gia.edu' },
              { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and origin determination for star sapphires', href: 'https://www.gemresearch.ch' },
              { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and origin determination for corundum', href: 'https://www.ssef.ch' },
              { label: 'Gübelin Gem Lab', detail: 'Origin determination and treatment analysis for star sapphires', href: 'https://www.gubelin.com/en/gemlab' },
              { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on asterism, silk inclusions, and diffusion treatments', href: 'https://www.gia.edu/gems-gemology' },
              { label: 'Journal of Gemmology (Gem-A)', detail: 'Peer-reviewed gemmological research including star sapphire studies', href: 'https://gem-a.com/gem-hub/publications/the-journal-of-gemmology' },
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
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Looking for a star sapphire?</p>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">Tell us your preferred colour, size, and star character. We source unheated Ceylon star sapphires directly from Sri Lanka.</p>
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
            Interested in a Ceylon star sapphire?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            Each stone in our collection is available for personal enquiry. Tell us what you&apos;re looking for — colour, size, star character, certification — and we&apos;ll respond with suitable options from our current inventory.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Make an Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
