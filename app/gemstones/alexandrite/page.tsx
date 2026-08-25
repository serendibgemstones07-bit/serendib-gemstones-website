import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Alexandrite — The Complete Guide to Ceylon Colour-Change Alexandrites',
  description:
    'Alexandrite is a rare colour-change variety of chrysoberyl — green in daylight, red in incandescent light. Sri Lanka (Ceylon) produces some of the world\'s finest large alexandrites. Learn about origin, colour change quality, treatments, certification, and how to buy.',
  alternates: { canonical: 'https://www.serendibgemstones.com/gemstones/alexandrite' },
}

const faqItems = [
  {
    q: 'What is alexandrite?',
    a: 'Alexandrite is a rare colour-change variety of the mineral chrysoberyl (beryllium aluminium oxide, BeAl₂O₄). It shows a dramatic colour change — typically green or bluish-green in daylight, and red, purplish-red, or brownish-red in incandescent (warm) light. The colour change is caused by trace amounts of chromium and is a real, reversible optical phenomenon, not a trick of the setting. Alexandrite has a Mohs hardness of 8.5, making it very durable for everyday jewellery.',
  },
  {
    q: 'Where do the best alexandrites come from?',
    a: 'The finest alexandrites historically came from the Ural Mountains of Russia, where the stone was first discovered in the 1830s and named after the future Tsar Alexander II. Russian material is essentially exhausted commercially. Today, Sri Lanka (Ceylon) and Brazil (Hematita) are the primary sources of fine gem-quality alexandrite, with Ceylon producing many of the largest and cleanest stones on the market. Zimbabwe and Tanzania also produce alexandrite, generally in smaller sizes.',
  },
  {
    q: 'What makes Ceylon alexandrite special?',
    a: 'Sri Lankan alexandrites are prized for their large sizes, high clarity, and strong colour change. Ceylon material typically shows bluish-green to purplish-red change, sometimes slightly less dramatic than the finest Russian stones but generally cleaner, larger, and more commercially available. Sri Lanka is the world\'s most important current source of alexandrites above 3 carats with fine clarity.',
  },
  {
    q: 'How is colour change quality measured?',
    a: 'Colour change is judged on three factors: (1) strength — how complete the shift is between daylight green and incandescent red (100% is ideal; anything above 60% is considered notable); (2) purity of each colour — the daylight colour should be a clean green or bluish-green, and the incandescent colour a clean red or purplish-red, without brown or grey overtones; and (3) hue direction — the finest stones shift from a saturated green to a saturated red, rather than from a dull olive to a dull brown-red.',
  },
  {
    q: 'Are alexandrites heat-treated?',
    a: 'Alexandrite is generally not heat-treated in the way sapphires and rubies are — the colour change comes from natural chromium chemistry, and heating does not improve it. This is one of the reasons fine alexandrites command such strong prices: what you see is what nature made. Fracture filling and occasional oiling are encountered on some material and must be disclosed. Any credible laboratory report will note treatment status.',
  },
  {
    q: 'What certifications should I look for on an alexandrite?',
    a: 'For any significant alexandrite, insist on a report from a top-tier laboratory — GIA (Gemological Institute of America), GRS (GemResearch Swisslab), SSEF, or Gübelin. The report should confirm natural chrysoberyl with colour change, describe the daylight and incandescent colours, note the strength of the colour change, and disclose any treatments. Origin determination is available for the finest stones and can significantly affect value.',
  },
  {
    q: 'Are alexandrites suitable for engagement rings?',
    a: 'Yes. With a Mohs hardness of 8.5 and excellent toughness, alexandrite is durable enough for everyday wear, including engagement rings. Its rarity and dramatic colour change make it a distinctive, meaningful choice for a bridal centre stone. Because true alexandrite is genuinely rare, the ring becomes an heirloom-quality piece from the outset. Alexandrite is also the modern birthstone for June (alongside pearl and moonstone).',
  },
  {
    q: 'What is the best colour for an alexandrite?',
    a: 'The finest alexandrites show a strong bluish-green (or emerald-green) in daylight and a saturated purplish-red (or raspberry-red) in incandescent light. Both colours should be clean and vivid, without brownish or greyish overtones. The change between them should be dramatic and complete. Overly dark stones can look black in one lighting and greyish in the other; overly light stones can lack drama in the change. Medium tone with vivid saturation in both lighting environments is the ideal.',
  },
  {
    q: 'Are alexandrites a good investment?',
    a: 'Alexandrite is one of the rarest gem-quality minerals in commercial production. Fine unheated alexandrites with strong colour change and good clarity have historically been among the strongest-appreciating coloured gemstones, particularly for stones above 3 carats. Ceylon material at 3–10 carats with vivid colour change and top-lab certification sits at the top of the market. As with all fine gems, only genuinely investment-grade material appreciates reliably. For current pricing on a specific stone, please make an enquiry — we quote based on the actual gemstone and current market.',
  },
  {
    q: 'How can I tell if an alexandrite is real?',
    a: 'Real alexandrite is chrysoberyl (Mohs 8.5, refractive index 1.74–1.75, specific gravity ~3.7) with a chromium-caused colour change. Synthetic alexandrites (flame fusion, Czochralski pulling, flux growth) share the same properties and require laboratory analysis to distinguish. Simulants — colour-change synthetic sapphire and colour-change garnet — can look convincing but have different refractive indices and colour behaviour. For any significant purchase, a report from GIA, GRS, SSEF, or Gübelin is essential.',
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
        { '@type': 'ListItem', position: 3, name: 'Alexandrite', item: 'https://www.serendibgemstones.com/gemstones/alexandrite' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Alexandrite — The Complete Guide to Ceylon Colour-Change Alexandrites',
      description: metadata.description,
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://www.serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd', logo: { '@type': 'ImageObject', url: 'https://www.serendibgemstones.com/logo.jpg' } },
      datePublished: '2026-08-25',
      dateModified: '2026-08-25',
      mainEntityOfPage: 'https://www.serendibgemstones.com/gemstones/alexandrite',
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
  { name: 'Padparadscha Sapphire', href: '/gemstones/padparadscha-sapphire', colour: '#e8855e', desc: 'The rarest sapphire — a delicate pink-orange lotus blossom hue, born in Sri Lanka.' },
  { name: 'Ruby', href: '/gemstones/ruby', colour: '#c0392b', desc: 'The king of coloured stones — chromium-red corundum from Ceylon\'s highland deposits.' },
  { name: 'Star Sapphire', href: '/gemstones/star-sapphire', colour: '#3a6fa8', desc: 'A mesmerising cabochon with a sharp six-rayed star phenomenon.' },
]

const toc = [
  { id: 'what-is', label: 'What Is Alexandrite?' },
  { id: 'discovery', label: 'History &amp; Discovery' },
  { id: 'colour-change', label: 'The Colour Change' },
  { id: 'origins', label: 'Where Are They Found?' },
  { id: 'ceylon', label: 'Sri Lanka\'s Alexandrites' },
  { id: 'quality', label: 'Quality Factors' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'certification', label: 'Certification' },
  { id: 'investment', label: 'Investment Value' },
  { id: 'jewellery', label: 'Jewellery Guide' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'faq', label: 'FAQ' },
]

export default function AlexandritePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(107,45,139,0.4) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gemstones" className="hover:text-teal transition-colors">Gemstones</Link>
            <span>/</span>
            <span className="text-offwhite/60">Alexandrite</span>
          </nav>

          <FadeUp>
            <div className="flex items-start gap-6 mb-8">
              <GemSVG colour="#6b8a4a" size={80} className="shrink-0 hidden sm:block" />
              <div>
                <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
                <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight">
                  Alexandrite
                </h1>
                <p className="font-jost text-sm text-offwhite/45 tracking-wide mt-3">The colour-change gem — green by day, red by night</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="border border-teal/20 bg-dark-card p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Quick Answer</p>
              <p className="font-jost text-base text-offwhite/80 leading-relaxed">
                Alexandrite is a rare chromium-bearing variety of chrysoberyl (BeAl₂O₄) that changes colour dramatically depending on lighting — green or bluish-green in daylight, red or purplish-red in incandescent (warm) light. With a Mohs hardness of 8.5 and excellent toughness, it is one of the most durable coloured gemstones. Sri Lanka (Ceylon) is today the most important source of fine large alexandrites, following the near-exhaustion of the original Russian Ural deposits.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Mineral', value: 'Chrysoberyl' },
                { label: 'Hardness', value: '8.5 / 10' },
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

            <h2 id="what-is">What Is Alexandrite?</h2>
            <p>
              Alexandrite is the colour-change variety of chrysoberyl — a beryllium aluminium oxide mineral (BeAl₂O₄) — coloured by trace amounts of chromium substituting for aluminium in the crystal lattice. The unusual chemistry of chromium in chrysoberyl produces a stone that absorbs light differently under different light sources: in daylight (which is rich in blue and green wavelengths), the stone appears green or bluish-green; in incandescent light (which is rich in red and orange wavelengths), the same stone appears red, purplish-red, or brownish-red. The change is real, reversible, and independent of the setting.
            </p>
            <p>
              This phenomenon — formally called <em>metamerism</em> — is what makes alexandrite one of the most fascinating gemstones. Very few natural minerals show a full colour change of this magnitude; alexandrite is by far the best-known, and it remains the benchmark against which colour-change stones of all other species (colour-change sapphire, colour-change garnet, colour-change fluorite) are measured.
            </p>
            <p>
              With a Mohs hardness of 8.5 and excellent toughness, alexandrite is one of the most durable coloured gemstones. Combined with its rarity — fine alexandrites are among the scarcest gem-quality stones in commercial production — this makes it a highly prized choice for heirloom and investment-grade jewellery.
            </p>

            <hr />

            <h2 id="discovery">History &amp; Discovery</h2>
            <p>
              Alexandrite was discovered in 1830 in the emerald mines of the Ural Mountains in Russia. According to trade legend, the stone was named after the future Tsar Alexander II on the day of his coming-of-age. The colours of the stone — imperial green and imperial red — happened to be the military colours of Russia, and alexandrite quickly became the national gem of the Russian Empire. Fine Russian alexandrites appeared in the crown jewels and in the finest jewellery of the period.
            </p>
            <p>
              The original Ural deposits were largely exhausted by the early twentieth century. For decades afterward, fine alexandrite virtually disappeared from the international market. In the second half of the twentieth century, new deposits opened in Brazil (Hematita, in Minas Gerais, discovered in 1987) and in Sri Lanka&apos;s highland gem fields, restoring commercial supply. Alexandrite from these newer sources rarely matches the very finest historic Russian stones for saturation of colour change, but Ceylon and Brazilian material regularly exceed Russian stones for size and clarity.
            </p>

            <hr />

            <h2 id="colour-change">The Colour Change</h2>
            <p>
              The alexandrite colour change is caused by the way chromium in chrysoberyl absorbs light. Chromium in the crystal creates two narrow &ldquo;windows&rdquo; of transmission — one in the blue-green range and one in the red range — with strong absorption between them. Daylight (which contains proportionally more blue-green light) causes the stone to transmit and appear green. Incandescent light (which contains proportionally more red light) causes the stone to transmit and appear red.
            </p>
            <p>
              The strength of the change depends on the balance of these two transmission windows, which in turn depends on the exact chromium content and orientation. The finest alexandrites — historically Russian, occasionally Ceylon — show a nearly 100% change from a saturated green to a saturated red. Most commercial alexandrites show a 40–70% change, with muted or greyish colours in one or both lighting environments. Trade descriptions of alexandrite typically state both daylight and incandescent colours, and the finest laboratory reports quantify the strength of the change.
            </p>
            <p>
              To see the colour change properly at home, view the stone in strong daylight (natural sunlight, ideally through a window in the morning or afternoon) and then in warm incandescent light (a classic filament bulb, not LED). Cool LED lighting can mute or mask the change; warm-white LEDs approximate incandescent conditions better than daylight LEDs.
            </p>

            <hr />

            <h2 id="origins">Where Are Alexandrites Found?</h2>
            <ul>
              <li><strong>Sri Lanka (Ceylon)</strong> — the most important current source of fine, large alexandrites. Ceylon material typically shows bluish-green to purplish-red change with high clarity, and Sri Lanka is the source most likely to produce alexandrites above 3 carats with clean colour change.</li>
              <li><strong>Russia (Ural Mountains)</strong> — the original source and, historically, the standard for the finest colour change. Commercial production is essentially exhausted; genuine Russian alexandrites are collector items with strong provenance premiums.</li>
              <li><strong>Brazil (Hematita, Minas Gerais)</strong> — discovered in 1987 and a major producer of fine alexandrite for a decade. The best Brazilian material rivals fine Ceylon; production has declined since the mid-2000s.</li>
              <li><strong>Zimbabwe (Novello)</strong> — produces small alexandrites, generally in commercial grades. Sizes rarely exceed 1 carat.</li>
              <li><strong>Tanzania and Madagascar</strong> — occasional production, typically in smaller sizes.</li>
              <li><strong>India (Andhra Pradesh)</strong> — small production, usually with weaker colour change.</li>
            </ul>

            <hr />

            <h2 id="ceylon">Sri Lanka&apos;s Alexandrites</h2>
            <p>
              Sri Lanka has produced alexandrite from its highland gem fields for well over a century — particularly from areas around <strong>Ratnapura</strong>, <strong>Eheliyagoda</strong>, and other alluvial deposits in Sabaragamuwa Province. Ceylon alexandrites are recovered from the same illam gravels that produce sapphires, rubies, and cat&apos;s-eye chrysoberyls, and are mined using traditional pit-and-tunnel methods.
            </p>
            <p>
              What distinguishes Ceylon alexandrite:
            </p>
            <ul>
              <li><strong>Larger sizes:</strong> Sri Lanka is the origin most likely to produce alexandrites above 3 carats with fine colour change and clean clarity. The country has produced individual stones of over 20 carats.</li>
              <li><strong>Clean clarity:</strong> Ceylon alexandrites tend to be cleaner than Russian and Brazilian material of comparable size.</li>
              <li><strong>Strong colour change:</strong> While Ceylon material rarely matches the very finest Russian stones for change intensity, top Ceylon alexandrites show 60–90% change from bluish-green to purplish-red.</li>
              <li><strong>Provenance:</strong> Sri Lanka is a well-established, stable, transparent source with a long-standing gemmological infrastructure.</li>
            </ul>

            <hr />

            <h2 id="quality">Quality Factors</h2>

            <h3>Colour Change</h3>
            <p>
              Colour change is the defining factor in alexandrite value. Quality is judged on the strength of the change (ideally 60% or greater), the purity of the two colours (clean green and clean red, without brown or grey), and the drama of the shift. A stone that shifts from vivid emerald-green to vivid raspberry-red is a top-market alexandrite. A stone that shifts from dull olive to dull brownish-red — even if technically a colour change — sits well below.
            </p>

            <h3>Clarity</h3>
            <p>
              Alexandrite is a Type II gemstone, meaning some inclusions are expected. Fine alexandrites should be eye-clean under normal viewing. Common inclusions include fingerprint-like healed fissures, small mineral crystals, and needle-like inclusions. Heavily included stones or stones with visible fractures should be avoided.
            </p>

            <h3>Cut</h3>
            <p>
              Alexandrite is cut in a wide range of shapes. Oval, cushion, and round brilliant are most common. Emerald cuts are used for larger, cleaner rough. A well-cut alexandrite shows even colour across the face in both lighting environments, good symmetry, and no visible windowing. Because colour change depends on orientation to the crystal axis, alexandrite cutting requires exceptional skill.
            </p>

            <h3>Carat Weight</h3>
            <p>
              Alexandrites above 1 carat with strong colour change are considered notable. Above 3 carats with strong change and good clarity, they are genuinely rare. Above 5 carats, they enter the top of the market, and above 10 carats they become internationally significant stones. Price rises very steeply with size once colour change and clarity are met — an unheated Ceylon alexandrite of 5+ carats with strong colour change can sit in a very different price bracket from a 1 carat stone of similar quality.
            </p>

            <hr />

            <h2 id="treatments">Treatments</h2>
            <p>
              Alexandrite is generally not heat-treated in the way sapphires and rubies are, because heating does not improve the colour change. This is one of the reasons fine alexandrites hold their value: what you see is largely what nature made. Some material is oiled or fracture-filled to improve apparent clarity, and any credible laboratory report will disclose this. Synthetic alexandrites — produced by flux growth, Czochralski pulling, and hydrothermal methods — have identical chemistry to natural stones and require laboratory analysis to distinguish.
            </p>

            <hr />

            <h2 id="certification">Certification</h2>
            <p>
              For any significant alexandrite, an independent laboratory report is essential. The report should confirm natural chrysoberyl with colour change, describe both daylight and incandescent colours, note the strength of the change, disclose any treatments, and — for the finest stones — determine geographic origin. The four top-tier laboratories for alexandrite are:
            </p>
            <ul>
              <li><strong>GIA (Gemological Institute of America)</strong> — full identification, treatment disclosure, and colour-change description.</li>
              <li><strong>GRS (GemResearch Swisslab)</strong> — colour grading and origin determination, with trade colour designations.</li>
              <li><strong>SSEF (Swiss Gemmological Institute)</strong> — advanced spectroscopy and origin determination.</li>
              <li><strong>Gübelin Gem Lab</strong> — origin determination and provenance research.</li>
            </ul>

            <hr />

            <h2 id="investment">Investment Value</h2>
            <p>
              Alexandrite is one of the rarest gem-quality minerals in commercial production. Fine unheated alexandrites with strong colour change and good clarity have historically been among the strongest-appreciating coloured gemstones, particularly for stones above 3 carats. Structural factors supporting long-term value:
            </p>
            <ul>
              <li><strong>Extreme rarity:</strong> Russian deposits are exhausted; Brazilian production has declined; Ceylon and other sources produce only limited quantities of fine material.</li>
              <li><strong>Growing recognition:</strong> Alexandrite is increasingly featured in bridal and collector jewellery marketing, and awareness continues to grow.</li>
              <li><strong>Auction performance:</strong> Major auction houses have achieved strong results for fine Ceylon and Russian alexandrites over the past decade.</li>
              <li><strong>Portability and privacy:</strong> A high-value alexandrite is small, tangible, internationally recognised, and not correlated with financial markets.</li>
            </ul>
            <p>
              As with all coloured gemstones, only investment-grade material — strong colour change, good clarity, credibly certified, and ideally Sri Lankan or Russian origin at 3+ carats — is likely to appreciate reliably. For current pricing on a specific stone, please make an enquiry.
            </p>

            <hr />

            <h2 id="jewellery">Jewellery Guide</h2>
            <ul>
              <li><strong>Engagement rings:</strong> Alexandrite is a distinctive, meaningful engagement-ring choice. Mohs 8.5 hardness is well suited to everyday wear. The colour change makes each viewing feel like a new experience.</li>
              <li><strong>Anniversary and heirloom pieces:</strong> Alexandrite is the 55th anniversary stone (traditional in modern lists) and the modern June birthstone (alongside pearl and moonstone).</li>
              <li><strong>Pendants and earrings:</strong> Larger alexandrites work beautifully in pendant and earring settings where the colour change can be appreciated at leisure.</li>
              <li><strong>Halo settings:</strong> A diamond halo around an alexandrite centre stone emphasises the colour change and adds sparkle in every lighting condition.</li>
            </ul>
            <p>
              <strong>Metal choice:</strong> Platinum and white gold provide a neutral background that emphasises the colour change in both lighting environments. Yellow gold warms the incandescent (red) view. Rose gold is less commonly used for alexandrite but can create a distinctive contrast with the daylight (green) colour.
            </p>

            <hr />

            <h2 id="care">Care &amp; Maintenance</h2>
            <ul>
              <li><strong>Cleaning:</strong> Warm soapy water and a soft brush is the safest method. Ultrasonic and steam cleaning are generally safe for untreated alexandrites but should be avoided for oiled or fracture-filled stones.</li>
              <li><strong>Storage:</strong> Store separately from softer stones to avoid scratching them. Alexandrite can scratch most other gemstones but can itself be scratched by diamond, corundum, and other harder materials.</li>
              <li><strong>Wear:</strong> Well suited to daily wear. Remove during heavy manual work, contact sports, or exposure to harsh chemicals.</li>
              <li><strong>Professional check:</strong> Have settings inspected annually to ensure prongs remain secure. Chrysoberyl is tough, but the setting is not.</li>
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
              { label: 'GIA — Gemological Institute of America', detail: 'Alexandrite identification, colour-change measurement, and origin determination', href: 'https://www.gia.edu' },
              { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading and origin determination for alexandrite', href: 'https://www.gemresearch.ch' },
              { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy for chrysoberyl including alexandrite', href: 'https://www.ssef.ch' },
              { label: 'Gübelin Gem Lab', detail: 'Origin determination and provenance research for alexandrite', href: 'https://www.gubelin.com/en/gemlab' },
              { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on alexandrite from Sri Lanka, Brazil, and Russia', href: 'https://www.gia.edu/gems-gemology' },
              { label: 'National Gem & Jewellery Authority of Sri Lanka (NGJA)', detail: 'Sri Lankan gem industry regulation and export certification', href: 'https://www.ngja.gov.lk' },
              { label: 'ICA — International Colored Gemstone Association', detail: 'Global trade body for the coloured stone industry', href: 'https://www.gemstone.org' },
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
                <p className="font-cormorant text-lg text-offwhite font-semibold mb-2">Looking for an alexandrite?</p>
                <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">Tell us your preferred size and colour change strength. We source certified Ceylon alexandrites directly from Sri Lanka&apos;s highland gem fields.</p>
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
            Interested in a Ceylon alexandrite?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            Alexandrite is genuinely rare, and finding the right stone takes time. Tell us your preferred size, colour change strength, and any specific quality criteria — we&apos;ll respond with suitable options from our current sourcing.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Make an Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
