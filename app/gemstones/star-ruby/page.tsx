import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Star Ruby — The Complete Guide to Ceylon Star Rubies',
  description:
    'A star ruby is a red corundum cabochon that shows a sharp six-rayed star (asterism) from rutile silk inclusions. Sri Lanka (Ceylon) and Myanmar produce the world\'s finest star rubies. Learn about asterism, colour range, treatments, certification, and how to buy.',
  alternates: { canonical: 'https://www.serendibgemstones.com/gemstones/star-ruby' },
}

const faqItems = [
  {
    q: 'What is a star ruby?',
    a: 'A star ruby is a red variety of corundum that shows a sharp six-rayed star (asterism) moving across the surface of a cabochon-cut stone when illuminated from a single light source. The star is caused by dense, oriented needle-like inclusions of rutile (titanium dioxide) that reflect light along three directions at 60 degrees to each other. Star rubies combine ruby\'s chromium red colour with the mesmerising phenomenon of asterism.',
  },
  {
    q: 'Where do the best star rubies come from?',
    a: 'The two classical sources are Sri Lanka (Ceylon) and Myanmar (Burma — particularly the Mogok Stone Tract). Ceylon star rubies tend to be lighter in tone, cleaner, and often show more open, silvery stars. Burmese star rubies tend to be deeper red with more richly saturated colour, sometimes with a slightly more diffuse star. India (Mysore) has historically produced star rubies with strong stars but often heavily toned, opaque bodies. Vietnam and Madagascar are newer sources.',
  },
  {
    q: 'What causes the star in a star ruby?',
    a: 'The star is caused by microscopic needle-like inclusions of rutile (titanium dioxide, TiO₂) arranged in three sets at 60 degrees to each other, following the crystal structure of corundum. When light hits the stone from a single direction, each set of needles reflects a bright line, and the three lines together form the six-rayed star. The intersection of the rays sits directly above the cabochon\'s apex. A stone with a well-formed, sharp, centred star that moves smoothly with the light source is considered fine.',
  },
  {
    q: 'How is star quality judged?',
    a: 'A fine star ruby shows a star that is: (1) sharp — well-defined, not fuzzy; (2) centred — the intersection sits precisely on the cabochon\'s apex, not offset; (3) complete — all six rays visible with roughly equal strength; (4) straight — rays are true lines, not wavy; and (5) mobile — the star moves smoothly across the cabochon as the light source moves. On top of the star, the body colour, clarity of the silk, and cabochon proportions are all factors.',
  },
  {
    q: 'Are star rubies heat-treated?',
    a: 'Star rubies are complicated to treat because heat can dissolve the rutile silk needed for the star. Some star rubies are heat-treated at low temperatures to improve body colour while preserving asterism; others are treated at higher temperatures, which can dissolve the star entirely, converting the stone into a faceted ruby. A fine natural, unheated star ruby with a strong star and fine red colour is a rare combination and commands a substantial premium. Diffusion treatment to induce or improve stars is also encountered and must be disclosed.',
  },
  {
    q: 'What certifications should I look for on a star ruby?',
    a: 'For any significant star ruby, insist on a report from a top-tier laboratory — GIA, GRS, SSEF, or Gübelin. The report should confirm natural corundum with asterism, describe the body colour, disclose any treatments (heat, diffusion, glass filling), and — for the finest stones — determine geographic origin. Beryllium diffusion and lead-glass filling of star ruby have been reported and must be checked for.',
  },
  {
    q: 'What is the best colour for a star ruby?',
    a: 'The ideal star ruby combines a strong, saturated red body colour with a bright, sharp, well-centred six-rayed star. Ceylon material typically shows a bright pinkish-red to red body; Burmese material can show deep pigeon-blood-adjacent reds. The perfect stone shows red visible through the silk, not simply opaque red with a star floating on the surface. Very dark, almost black bodies with a star can be striking but are considered a distinct category.',
  },
  {
    q: 'Are star rubies suitable for engagement rings?',
    a: 'Yes — star ruby is well suited to engagement and everyday rings. Mohs 9 hardness gives excellent durability. Because star ruby is a cabochon, the stone sits closer to the finger than a faceted ruby, which makes it comfortable for daily wear. The visible star creates a mesmerising, changing effect throughout the day that many wearers find more engaging than a faceted stone.',
  },
  {
    q: 'How can I tell if a star ruby is real?',
    a: 'Real star rubies show a sharp, mobile star from rutile silk inclusions in natural corundum. Synthetic star rubies (Linde stars and similar) have been produced since the 1940s; they can look extremely convincing but have subtly different inclusion patterns visible under magnification. Star sapphire and glass-filled corundum with induced stars also exist. For any significant purchase, a report from GIA, GRS, SSEF, or Gübelin is essential.',
  },
  {
    q: 'Are star rubies a good investment?',
    a: 'Fine natural, unheated star rubies with sharp centred stars and strong red colour are genuinely rare — arguably rarer than comparable faceted rubies — and have appreciated well as the market has recognised their combination of ruby rarity and asterism scarcity. Ceylon material at 5+ carats with fine star and fine colour commands strong prices. As with all fine coloured stones, only genuinely investment-grade material appreciates reliably. For current pricing on a specific stone, please make an enquiry.',
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
        { '@type': 'ListItem', position: 3, name: 'Star Ruby', item: 'https://www.serendibgemstones.com/gemstones/star-ruby' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Star Ruby — The Complete Guide to Ceylon Star Rubies',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://www.serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://www.serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-08-25',
      dateModified: '2026-08-25',
      mainEntityOfPage: 'https://www.serendibgemstones.com/gemstones/star-ruby',
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
  { name: 'Ruby', href: '/gemstones/ruby', colour: '#c0392b', desc: 'Faceted ruby — the transparent form of star ruby\'s parent material.' },
  { name: 'Star Sapphire', href: '/gemstones/star-sapphire', colour: '#3a6fa8', desc: 'Star ruby\'s blue sister — same asterism phenomenon in blue corundum.' },
  { name: 'Padparadscha Sapphire', href: '/gemstones/padparadscha-sapphire', colour: '#e8855e', desc: 'The rarest sapphire — a delicate pink-orange lotus blossom hue, born in Sri Lanka.' },
]

const toc = [
  { id: 'what-is', label: 'What Is a Star Ruby?' },
  { id: 'asterism', label: 'How the Star Works' },
  { id: 'origins', label: 'Where Are They Found?' },
  { id: 'ceylon', label: 'Sri Lanka\'s Star Rubies' },
  { id: 'star-quality', label: 'Judging Star Quality' },
  { id: 'colour', label: 'Body Colour' },
  { id: 'cabochon', label: 'Cabochon Cutting' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'certification', label: 'Certification' },
  { id: 'investment', label: 'Investment Value' },
  { id: 'jewellery', label: 'Jewellery Guide' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'faq', label: 'FAQ' },
]

export default function StarRubyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(192,57,43,0.4) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gemstones" className="hover:text-teal transition-colors">Gemstones</Link>
            <span>/</span>
            <span className="text-offwhite/60">Star Ruby</span>
          </nav>

          <FadeUp>
            <div className="flex items-start gap-6 mb-8">
              <GemSVG colour="#a02b2b" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Star Ruby
                </h1>
                <p className="font-jost text-sm text-offwhite/45 tracking-wide mt-3">A sharp six-rayed star, gliding across chromium-red corundum</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                A star ruby is a chromium-red corundum cabochon that displays a sharp six-rayed star (asterism) caused by dense, oriented rutile inclusions inside the crystal. When lit by a single light source, the star appears floating on the surface of the stone and moves smoothly as the light moves. Sri Lanka (Ceylon) and Myanmar are the two classical sources of the finest star rubies.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Mineral', value: 'Corundum' },
                { label: 'Hardness', value: '9 / 10' },
                { label: 'Star Cause', value: 'Rutile' },
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

            <h2 id="what-is">What Is a Star Ruby?</h2>
            <p>
              A star ruby is a variety of corundum — crystalline aluminium oxide (Al₂O₃) — coloured red by chromium and containing dense, aligned inclusions of the mineral rutile (titanium dioxide, TiO₂) that produce a six-rayed star of light across the surface of a cabochon-cut stone. It is the same mineral species as faceted ruby and as blue sapphire; only the inclusion content and cutting style differ.
            </p>
            <p>
              Star rubies combine two of gemmology&apos;s most sought-after attributes: the chromium red of ruby, and the phenomenon of asterism. The result is a stone whose beauty is dynamic rather than static — the star glides across the cabochon as the light source moves, so no two viewings look quite the same. With a Mohs hardness of 9 and the toughness of corundum, star ruby is exceptionally durable and well suited to everyday wear.
            </p>

            <hr />

            <h2 id="asterism">How the Star Works</h2>
            <p>
              Asterism arises from microscopic needle-like inclusions of rutile arranged in three sets at 60° to each other, following the crystal structure of corundum. When light from a single source strikes the stone, each set of parallel needles reflects a bright line perpendicular to the direction of the needles. Three sets of needles produce three lines; because they are at 60° angles, the three lines cross at a single point and form a six-rayed star.
            </p>
            <p>
              The star&apos;s apex sits directly above the highest point of the cabochon and moves as the light source moves — walk around a star ruby with a single overhead light and the star will follow you across the top of the stone. This mobility, together with the star&apos;s sharpness and centring, is a large part of what distinguishes a fine star ruby from a mediocre one.
            </p>
            <p>
              For asterism to appear cleanly, the corundum must contain enough rutile silk to produce visible reflections but not so much that the body becomes opaque. Cutters orient the cabochon perpendicular to the crystal&apos;s c-axis so that the three sets of needles produce the three-line star. Domed cabochons of appropriate height maximise the star&apos;s crispness.
            </p>

            <hr />

            <h2 id="origins">Where Are Star Rubies Found?</h2>
            <ul>
              <li><strong>Sri Lanka (Ceylon)</strong> — a classical source. Ceylon star rubies typically show a lighter, brighter pinkish-red to red body with clean, bright silver stars. Ceylon regularly produces star rubies in larger sizes (5–50+ carats) with fine translucent bodies.</li>
              <li><strong>Myanmar (Burma, Mogok)</strong> — produces the deepest red star rubies, closely allied to Mogok ruby colour. Burmese star rubies often show a richer, more saturated body colour.</li>
              <li><strong>India (Mysore, Karnataka)</strong> — historically important, producing star rubies with strong stars but often heavily-toned, near-opaque red-to-brownish bodies. The J. P. Morgan/DeLong Star Ruby (Rosser Reeves Ruby) is Indian material.</li>
              <li><strong>Vietnam</strong> — modern source of fine star rubies.</li>
              <li><strong>Madagascar and Tanzania</strong> — occasional production.</li>
            </ul>

            <hr />

            <h2 id="ceylon">Sri Lanka&apos;s Star Rubies</h2>
            <p>
              Sri Lanka has produced star ruby alongside all other varieties of corundum for at least two millennia. The main mining regions — <strong>Ratnapura</strong>, <strong>Elahera</strong>, and the highland gem belt — all produce star ruby, typically recovered from alluvial gravels using traditional pit-mining techniques. Ceylon star rubies are prized for their bright, translucent bodies, sharp silver stars, and clean red-to-pinkish-red colour. The country has produced individual star rubies of over 100 carats.
            </p>

            <hr />

            <h2 id="star-quality">Judging Star Quality</h2>
            <p>
              A fine star ruby is judged on the character of the star as much as on the body colour:
            </p>
            <ul>
              <li><strong>Sharpness:</strong> The rays should be well-defined lines, not fuzzy or diffuse.</li>
              <li><strong>Centring:</strong> The star&apos;s intersection should sit precisely on the cabochon&apos;s apex, not offset to one side.</li>
              <li><strong>Completeness:</strong> All six rays should be visible with roughly equal strength. Weak or missing rays reduce value.</li>
              <li><strong>Straightness:</strong> Rays should be true lines, not wavy or broken.</li>
              <li><strong>Mobility:</strong> The star should move smoothly across the cabochon as the light source moves.</li>
              <li><strong>Contrast:</strong> The star should stand out clearly against the body colour.</li>
            </ul>

            <hr />

            <h2 id="colour">Body Colour</h2>
            <p>
              The ideal body colour for a star ruby is a strong, saturated red — pinkish-red to deep red — with visible translucency. Ceylon bodies tend toward the brighter, lighter pinkish-red end; Burmese bodies tend deeper. Very dark, near-opaque bodies with strong stars can be striking (the DeLong Star, for instance) but are considered a distinct category. Muddy, brown, or overly grey bodies sit lower in the market.
            </p>

            <hr />

            <h2 id="cabochon">Cabochon Cutting</h2>
            <p>
              A star ruby cabochon must be cut with the base perpendicular to the corundum crystal&apos;s c-axis so that the three sets of rutile needles produce the three-line star. Dome height must be sufficient for the star to focus cleanly — too flat, and the star spreads out and loses sharpness; too tall, and the body colour deadens. Cutters balance dome height, base thickness, and diameter to maximise star quality, translucency, and colour.
            </p>

            <hr />

            <h2 id="treatments">Treatments</h2>
            <p>
              Star rubies present a treatment challenge: the same heat that improves body colour can dissolve the rutile silk that produces the star. Low-temperature heat treatment is sometimes used to improve colour while preserving asterism; higher temperatures can dissolve the star entirely, effectively converting a star ruby into a faceted ruby (which is sometimes done deliberately). Diffusion treatment to induce or improve stars has been reported. Lead-glass filling of heavily fractured star ruby is a serious concern. All treatments must be disclosed on any credible laboratory report. Unheated Ceylon star rubies with fine natural stars are the top of the market.
            </p>

            <hr />

            <h2 id="certification">Certification</h2>
            <p>
              For any significant star ruby, an independent laboratory report is essential. The report should confirm natural corundum with asterism, describe the body colour, disclose any treatments (heat, diffusion, glass filling), and — for the finest stones — determine geographic origin. The top-tier laboratories for star ruby are GIA, GRS, SSEF, and Gübelin.
            </p>

            <hr />

            <h2 id="investment">Investment Value</h2>
            <p>
              Fine natural, unheated star rubies with sharp centred stars and strong red bodies are genuinely rare and have appreciated well. Ceylon material at 5+ carats with fine star and fine colour is scarce. Famous star rubies such as the Rosser Reeves Ruby (138 carats, Smithsonian) demonstrate the historical status of the category. For current pricing on a specific stone, please make an enquiry.
            </p>

            <hr />

            <h2 id="jewellery">Jewellery Guide</h2>
            <ul>
              <li><strong>Rings:</strong> Star ruby cabochons make distinctive, comfortable rings for daily wear. The domed cabochon sits smoothly against the finger, and the visible star creates a mesmerising, changing effect throughout the day.</li>
              <li><strong>Men&apos;s jewellery:</strong> Larger star rubies (10+ carats) are traditional favourites in men&apos;s rings, particularly signet and gypsy settings.</li>
              <li><strong>Pendants:</strong> A large star ruby pendant catches light dramatically and shows the phenomenon at leisure.</li>
              <li><strong>Halo settings:</strong> A star ruby centre surrounded by white diamonds emphasises the star and adds sparkle.</li>
            </ul>
            <p>
              <strong>Metal choice:</strong> Yellow gold is the classical setting for star ruby and enhances the warmth of the red body. White gold and platinum provide a modern, crisp contrast. Rose gold is less common but can work beautifully with lighter, pinkish Ceylon material.
            </p>

            <hr />

            <h2 id="care">Care &amp; Maintenance</h2>
            <ul>
              <li><strong>Cleaning:</strong> Warm soapy water and a soft brush. Ultrasonic and steam cleaning are generally safe for untreated stones but should be avoided for glass-filled star rubies.</li>
              <li><strong>Storage:</strong> Store separately from softer stones.</li>
              <li><strong>Wear:</strong> Excellent for daily wear. Remove during heavy manual work or exposure to harsh chemicals.</li>
              <li><strong>Professional check:</strong> Have settings inspected annually. Cabochon bezel settings are particularly secure for daily wear.</li>
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
              { label: 'GIA — Gemological Institute of America', detail: 'Star ruby identification, asterism analysis, and treatment disclosure', href: 'https://www.gia.edu' },
              { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and origin determination for star rubies', href: 'https://www.gemresearch.ch' },
              { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy for corundum including star ruby', href: 'https://www.ssef.ch' },
              { label: 'Gübelin Gem Lab', detail: 'Origin determination and diffusion-treatment detection', href: 'https://www.gubelin.com/en/gemlab' },
              { label: 'Smithsonian National Museum of Natural History', detail: 'Rosser Reeves Ruby (138.7 ct) — one of the world\'s finest star rubies', href: 'https://naturalhistory.si.edu' },
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
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Looking for a star ruby?</p>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">Tell us your preferred body colour, star sharpness, and size. We source Ceylon star rubies directly from Sri Lanka&apos;s traditional deposits.</p>
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
            Interested in a Ceylon star ruby?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            Tell us your preferred size, body colour, and star character — and we&apos;ll respond with suitable Ceylon options from our current sourcing.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Make an Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
