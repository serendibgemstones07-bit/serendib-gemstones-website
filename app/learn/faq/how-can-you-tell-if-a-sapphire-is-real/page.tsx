import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'

export const metadata: Metadata = {
  title: 'How Can You Tell If a Sapphire Is Real?',
  description:
    'The only reliable way to confirm a sapphire is real is through laboratory certification by GIA or GRS. DIY tests like scratch and fog tests are unreliable.',
  alternates: { canonical: 'https://serendibgemstones.com/learn/faq/how-can-you-tell-if-a-sapphire-is-real' },
}

const faqItems = [
  {
    q: 'Can you tell if a sapphire is real by looking at it?',
    a: 'Not with any certainty. Visual inspection alone cannot distinguish a natural sapphire from a high-quality synthetic sapphire — they have identical chemical composition, crystal structure, hardness, and optical properties. A trained gemologist may notice subtle clues under magnification (such as curved growth lines in flame-fusion synthetics or gas bubbles in glass imitations), but even experienced professionals rely on laboratory instruments for definitive identification. Any claim that a sapphire is natural based solely on visual inspection should be treated with scepticism.',
  },
  {
    q: 'What is the difference between a synthetic sapphire and a fake sapphire?',
    a: 'A synthetic sapphire is real sapphire — it has the same chemical composition (aluminium oxide, Al2O3) and crystal structure as a natural stone. It was simply grown in a laboratory rather than formed in the earth. A "fake" sapphire, by contrast, is a different material entirely: typically glass, cubic zirconia, or a blue spinel or topaz being misrepresented as sapphire. Synthetic sapphires are inexpensive but are genuine corundum. Glass imitations can often be detected with basic observation, but distinguishing natural from synthetic requires laboratory equipment.',
  },
  {
    q: 'Where can I get a sapphire tested?',
    a: 'Full identification reports are available from GIA (Gemological Institute of America) and GRS (Gem Research Swisslab), both internationally recognised. Local gemological laboratories affiliated with national gem associations can also provide identification. For stones of meaningful value, the cost of certification is a small fraction of the stone\'s value and is always worthwhile. Many reputable dealers include certification with the stone.',
  },
  {
    q: 'Does a real sapphire glow under UV light?',
    a: 'Some natural sapphires fluoresce under ultraviolet light, and some do not — making UV testing unreliable as a standalone identification method. Many natural blue sapphires show weak to no fluorescence under long-wave UV, while some synthetic sapphires also show no fluorescence. Certain iron-rich natural sapphires are entirely inert under UV. The UV test can provide one data point in a broader analysis but cannot by itself confirm or deny that a stone is natural sapphire.',
  },
  {
    q: 'Can a jeweller tell if a sapphire is real?',
    a: 'A qualified gemologist (not simply a retail jeweller) can perform preliminary testing using a refractometer, spectroscope, and polariscope to confirm a stone is corundum rather than glass or a simulant. However, even a qualified gemologist using standard shop equipment cannot reliably distinguish a natural sapphire from a high-quality synthetic. That determination requires advanced trace-element analysis (such as EDXRF or LA-ICP-MS) and detailed inclusion analysis — equipment found only in major gemological laboratories. For any significant purchase, insist on a GIA or GRS report rather than relying on a jeweller\'s verbal assurance.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'How to Tell If a Sapphire Is Real', item: 'https://serendibgemstones.com/learn/faq/how-can-you-tell-if-a-sapphire-is-real' },
      ],
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

export default function TellIfSapphireRealPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 70%, rgba(26,95,158,0.35) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <nav className="flex items-center gap-2 font-jost text-xs tracking-wider uppercase text-offwhite/30 mb-8">
              <Link href="/" className="hover:text-teal/60 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-teal/60 transition-colors">Knowledge Centre</Link>
              <span>/</span>
              <span className="text-teal/60">Sapphire Authenticity</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">FAQ</span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              How can you tell if a sapphire is real?
            </h1>
            <p className="font-jost text-sm text-offwhite/40">5 min read · Serendib Gemstones</p>
          </FadeUp>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="bg-dark px-6 lg:px-10 py-12">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="bg-dark-card border border-teal/20 p-6">
              <p className="font-jost text-xs tracking-[0.2em] uppercase text-teal mb-3">Quick Answer</p>
              <p className="font-cormorant text-xl text-offwhite leading-relaxed">
                Laboratory certification from GIA or GRS is the only reliable method to confirm a sapphire is natural. DIY tests you find online — the scratch test, fog test, light test — cannot distinguish natural sapphires from high-quality synthetics and should not be trusted for any purchase decision.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Full Answer */}
      <section className="bg-dark px-6 lg:px-10 pb-20">
        <div className="max-w-3xl mx-auto prose-gem">
          <ArticleByline updated="2026-08-12" />
          <FadeUp>
            <h2>Why DIY tests fail</h2>
            <p>
              The internet is full of suggested home tests for identifying sapphires: scratch it against glass, breathe on it and check how quickly the fog clears, look for flaws with a magnifying glass, check if it feels cold. Every one of these tests has fundamental limitations that make it unreliable for distinguishing a natural sapphire from a synthetic one.
            </p>
            <p>
              The <strong>scratch test</strong> confirms only that a stone is harder than glass (Mohs 5.5). Sapphire scores 9 on the Mohs scale, but so does synthetic sapphire — which is the same material. Cubic zirconia (Mohs 8 to 8.5) and even some natural garnets will also scratch glass. The test tells you nothing about whether a stone is natural.
            </p>
            <p>
              The <strong>fog test</strong> (breathing on the stone and seeing how quickly condensation clears) is based on sapphire&apos;s high thermal conductivity. But synthetic sapphire has identical thermal conductivity, so the test cannot distinguish natural from lab-grown. Glass imitations may be caught by this test, but those are typically obvious to the eye already.
            </p>
            <p>
              <strong>Inclusion inspection</strong> with a loupe can sometimes help a trained eye — natural sapphires often contain characteristic mineral inclusions (rutile silk, zircon halos, fingerprint inclusions) that differ from the curved growth lines of flame-fusion synthetics or the platinum platelets of Czochralski-grown stones. However, flux-grown synthetic sapphires can contain inclusions that closely mimic natural features, and inclusion-free natural sapphires exist. This is expert-level analysis, not a DIY test.
            </p>
          </FadeUp>

          <FadeUp>
            <h2>What laboratories actually test</h2>
            <p>
              When GIA or GRS examines a sapphire, they deploy multiple analytical techniques that are beyond the reach of any home or jeweller&apos;s-bench testing.
            </p>
            <ul>
              <li><strong>Spectroscopy</strong> — including Fourier-transform infrared (FTIR), Raman, and UV-Vis-NIR spectroscopy — reveals the stone&apos;s absorption patterns, which can indicate natural formation conditions versus laboratory growth environments.</li>
              <li><strong>Trace-element analysis</strong> — using energy-dispersive X-ray fluorescence (EDXRF) or laser ablation inductively coupled plasma mass spectrometry (LA-ICP-MS) — measures the exact concentrations of trace elements like iron, titanium, vanadium, and gallium. Natural and synthetic sapphires have distinctly different trace-element signatures because of their different formation environments.</li>
              <li><strong>Microscopic inclusion analysis</strong> — under high magnification with specialised lighting, gemologists identify inclusion types that are diagnostic of natural formation, synthetic growth, or specific geographic origins.</li>
              <li><strong>Heat treatment detection</strong> — using a combination of spectroscopy, inclusion analysis, and surface feature examination to determine whether a stone has been subjected to thermal enhancement.</li>
            </ul>
            <p>
              This multi-technique approach is what produces a definitive identification. No single test is sufficient — it is the combination of data from multiple instruments that allows a laboratory to state with confidence that a stone is natural, untreated, and of a particular geographic origin.
            </p>
          </FadeUp>

          <FadeUp>
            <h2>Synthetic versus natural: the real challenge</h2>
            <p>
              The most common question is not whether a stone is glass (that is usually obvious), but whether it is <strong>natural or synthetic sapphire</strong>. Modern synthetic sapphires — particularly those grown by the flux or hydrothermal methods — are chemically identical to natural sapphires. They have the same hardness, refractive index, specific gravity, and crystal structure. They can even contain inclusions that superficially resemble natural features.
            </p>
            <p>
              What distinguishes them is their growth history — recorded in trace-element chemistry and microscopic internal features that can only be read by laboratory instruments. The gallium-to-iron ratio, for instance, is a powerful discriminator: natural sapphires from most origins contain virtually no gallium, while many synthetic sapphires grown from flux contain measurable gallium from the growth medium. These are distinctions that require parts-per-million level measurement — far beyond any visual or tactile test.
            </p>
          </FadeUp>

          <FadeUp>
            <h2>Practical advice for buyers</h2>
            <p>
              For any sapphire purchase of meaningful value, insist on a current report from GIA or GRS. The report should state the stone&apos;s identification (natural corundum, variety sapphire), its treatment status (heated or unheated), and ideally its geographic origin. A reputable dealer will either include certification with the stone or happily submit it for testing. Reluctance to certify is itself a red flag. Independent laboratory certification is a minor expense relative to the stone&apos;s value and the only reliable way to know what you are buying.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Related Questions */}
      <section className="bg-dark-card py-20 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-10">Related questions</h2>
          </FadeUp>
          <div className="space-y-1 border-t border-white/6">
            {faqItems.map((f, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <details className="faq-item border-b border-white/6">
                  <summary>{f.q}</summary>
                  <div className="faq-answer">{f.a}</div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="bg-dark py-16 px-6 lg:px-10 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-2xl text-offwhite font-semibold mb-8">Related guides</h2>
            <div className="grid gap-4">
              <Link href="/learn/gia-vs-grs-certificate" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">GIA vs GRS: Which Certificate Is Better?</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">How to choose between the two most respected gemological laboratories.</p>
              </Link>
              <Link href="/learn/what-does-no-heat-mean-on-certificate" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">What Does &ldquo;No Heat&rdquo; Mean on a Certificate?</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">The most commercially significant statement on a coloured stone report, explained.</p>
              </Link>
              <Link href="/learn/how-is-sapphire-origin-determined" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">How Is a Sapphire&apos;s Origin Determined?</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">The laboratory techniques used to assign geographic origin to sapphires.</p>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Every stone, independently certified</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">
            All Serendib Gemstones are accompanied by current GIA or GRS laboratory reports confirming identification, treatment status, and origin.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/gemstones" className="px-8 py-3 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors">Our Collection</Link>
            <Link href="/contact" className="px-8 py-3 border border-teal/40 text-teal-light font-jost text-sm tracking-widest uppercase hover:bg-teal hover:text-white hover:border-teal transition-all">Enquire</Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
