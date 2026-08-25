import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'

export const metadata: Metadata = {
  title: 'What Is the Best Colour for a Blue Sapphire?',
  description:
    'The most valued blue sapphire colour is a vivid, medium-toned blue — royal blue or cornflower blue — with strong saturation. Ceylon sapphires are prized for this quality.',
  alternates: { canonical: 'https://www.serendibgemstones.com/learn/faq/what-is-the-best-colour-for-a-blue-sapphire' },
}

const faqItems = [
  {
    q: 'What is the difference between royal blue and cornflower blue sapphires?',
    a: 'Royal blue describes a deep, intense, saturated blue with a slight violet secondary hue — think of the sapphires associated with the British Crown Jewels. Cornflower blue describes a medium-toned, luminous blue reminiscent of the petals of a cornflower, typically with slightly less depth but exceptional brilliance and "life." GRS uses both terms as formal colour grades on their reports. Royal blue stones tend to command a premium, but fine cornflower blue sapphires — particularly from Sri Lanka — are equally prized by collectors who prefer a more open, radiant appearance.',
  },
  {
    q: 'Does a sapphire\'s colour change in different lighting?',
    a: 'Yes, and this is an important consideration. Blue sapphires can shift in appearance between daylight (which has a cooler, bluer spectrum) and incandescent light (which has a warmer, yellower spectrum). Fine Ceylon sapphires are prized precisely because they tend to maintain their vivid blue appearance across a range of lighting conditions — they do not "black out" in dim light the way some darker sapphires from other origins can. When evaluating a sapphire, always view it in multiple light sources.',
  },
  {
    q: 'Can heating change a sapphire\'s colour?',
    a: 'Yes. Heat treatment at temperatures typically between 800 and 1800 degrees Celsius can improve a sapphire\'s colour by dissolving rutile silk (which causes milkiness) and altering iron-titanium charge transfer (which affects blue colour intensity). Heating can darken a pale stone, lighten an overly dark stone, or make a greyish stone appear more purely blue. Over 95% of commercial sapphires have been heat-treated. While heating produces attractive results, the finest natural colours — those that need no enhancement — are exponentially rarer and command substantial premiums.',
  },
  {
    q: 'Is a darker blue sapphire more valuable?',
    a: 'Not necessarily. While colour saturation is valued, there is an optimal range. A sapphire that is too dark loses transparency and appears inky or nearly black, particularly in lower light conditions — this is commonly called "extinction." These overly dark stones, regardless of their blue intensity, trade at lower prices than stones with medium tone and strong saturation. The ideal is a vivid, saturated blue that still allows light to pass through the stone and create brilliance. Some of the least valuable commercial sapphires are very dark Australian or Thai stones.',
  },
  {
    q: 'How does GRS grade sapphire colour?',
    a: 'GRS (GemResearch SwissLab) uses a proprietary colour grading system that is widely respected in the coloured stone trade. For blue sapphires, the key grades from highest to lower are: "Vivid Blue (Royal Blue)," "Vivid Blue," "Intense Blue," and "Blue." The "Royal Blue" designation specifically requires a vivid, saturated blue with a slight violet modifier in the hue. These colour grades appear on the GRS report and directly affect market price — a stone graded "Vivid Blue (Royal Blue)" can command 30 to 50 percent more than one graded simply "Blue" of comparable size and clarity.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://www.serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'Best Colour for a Blue Sapphire', item: 'https://www.serendibgemstones.com/learn/faq/what-is-the-best-colour-for-a-blue-sapphire' },
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

export default function BestColourBlueSapphirePage() {
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
              <span className="text-teal/60">Sapphire Colour</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">FAQ</span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              What is the best colour for a blue sapphire?
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
                The most valued blue sapphire colour is a vivid, medium-toned blue with strong saturation — described in the trade as &ldquo;royal blue&rdquo; or &ldquo;cornflower blue.&rdquo; The stone should be intensely blue without being so dark that it loses transparency. Ceylon sapphires are celebrated for achieving this ideal balance naturally.
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
            <h2>Understanding sapphire colour: hue, tone, and saturation</h2>
            <p>
              Gemologists evaluate sapphire colour using three dimensions. <strong>Hue</strong> is the basic colour — for blue sapphires, the primary hue is blue, often with secondary modifiers of violet or green. The most valued hue is a pure blue with a slight violet secondary, which gives the stone warmth and depth without veering into purple territory. Green secondary hues, by contrast, reduce value as they give the stone a steely or greyish appearance.
            </p>
            <p>
              <strong>Tone</strong> describes how light or dark the colour appears, on a scale from very light to very dark. The ideal tone for a blue sapphire sits in the medium to medium-dark range — roughly 60 to 80 percent on a scale where 0 is colourless and 100 is black. Stones that are too light appear washed out and lack intensity; stones that are too dark lose transparency and appear inky, particularly in evening or indoor lighting.
            </p>
            <p>
              <strong>Saturation</strong> is the intensity or vividness of the colour — how strong the blue appears. This is the dimension that most directly correlates with value. A sapphire with vivid saturation appears intensely, richly blue; one with weak saturation looks greyish or muted. The highest-value sapphires combine vivid saturation with medium tone, creating a blue that is simultaneously deep and bright.
            </p>
          </FadeUp>

          <FadeUp>
            <h2>Royal blue versus cornflower blue</h2>
            <p>
              The trade uses two primary descriptors for the finest blue sapphire colours, and understanding the distinction is important for buyers. <strong>Royal blue</strong> describes a deep, saturated blue with a slight violet secondary hue. It is the colour associated with the great Kashmir sapphires of the late 19th century and is considered by many dealers and auction houses to be the pinnacle of blue sapphire colour. GRS formalised this as a laboratory grade — &ldquo;Vivid Blue (Royal Blue)&rdquo; — which carries a measurable price premium.
            </p>
            <p>
              <strong>Cornflower blue</strong> describes a slightly lighter, more luminous blue — vivid but with a touch more openness and brilliance. The term originates from the colour of cornflower petals and is most closely associated with fine Ceylon sapphires, which tend to display this particular quality of colour due to Sri Lanka&apos;s unique geological chemistry. While royal blue stones typically command higher per-carat prices at auction, cornflower blue sapphires are equally prized by connoisseurs who value brilliance and &ldquo;life&rdquo; over sheer depth.
            </p>
          </FadeUp>

          <FadeUp>
            <h2>Why Ceylon sapphires excel at colour</h2>
            <p>
              Sri Lanka&apos;s geological conditions produce sapphires with a distinctive colour quality that is difficult to replicate from other sources. The trace element chemistry of Ceylon sapphires — specifically the balance of iron and titanium that produces the blue colour — tends to create stones that are vivid yet transparent, saturated yet luminous. This is in contrast to sapphires from some other origins: Australian and Thai sapphires tend toward very dark, inky tones; many Madagascan stones can lean steely or greyish without heat treatment.
            </p>
            <p>
              The practical consequence is that Ceylon sapphires maintain their colour across a range of lighting conditions. A fine Sri Lankan stone will appear attractively blue in daylight, fluorescent light, and incandescent light — a quality the trade calls &ldquo;life&rdquo; or &ldquo;openness.&rdquo; Many darker sapphires from other origins look impressively blue in bright daylight but black out in softer indoor lighting, making them far less wearable. This consistency of colour performance is a major reason for the Ceylon premium.
            </p>
          </FadeUp>

          <FadeUp>
            <h2>Colour grades on laboratory reports</h2>
            <p>
              GRS provides formal colour grades on their reports, and these grades have become a significant factor in pricing. The hierarchy for blue sapphires, from highest to lower, is: &ldquo;Vivid Blue (Royal Blue),&rdquo; &ldquo;Vivid Blue,&rdquo; &ldquo;Intense Blue,&rdquo; and &ldquo;Blue.&rdquo; Each step down represents a meaningful reduction in market value. GIA does not issue colour grades for sapphires on their standard reports, preferring to describe colour descriptively. Many serious buyers seek a GRS report specifically for the colour grade, sometimes in addition to a GIA report for identification and treatment determination.
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
              <Link href="/gemstones/blue-sapphire" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">Blue Sapphire — The Complete Guide</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">Quality factors, origins, pricing, and investment value for Ceylon blue sapphires.</p>
              </Link>
              <Link href="/learn/ceylon-vs-kashmir-sapphire" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">Ceylon vs Kashmir Sapphire</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">How the two most celebrated sapphire origins compare in colour, availability, and price.</p>
              </Link>
              <Link href="/learn/what-is-an-unheated-sapphire" className="group block bg-dark-card border border-white/6 p-5 hover:border-teal/30 transition-colors">
                <p className="font-cormorant text-lg text-offwhite group-hover:text-teal-light transition-colors">What Is an Unheated Sapphire?</p>
                <p className="font-jost text-xs text-offwhite/40 mt-1">Why unheated status matters and how it relates to natural colour quality.</p>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Find your perfect blue</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">
            Every sapphire in our collection is photographed in natural daylight and certified by GIA or GRS with full colour documentation.
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
