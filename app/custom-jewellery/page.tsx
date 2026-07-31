import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'

export const metadata: Metadata = {
  title: 'Custom Jewellery — Serendib Gemstones',
  description: 'Commission a bespoke piece built around a certified, unheated Sri Lankan gemstone. We guide you from stone selection through design to delivery — a single jewel, made entirely for you.',
}

const steps = [
  {
    number: '01',
    title: 'Choose your stone',
    body: 'Browse our collection of certified, unheated Sri Lankan sapphires and gemstones, or share your brief and we will source a stone to match your specifications — colour, carat weight, budget.',
  },
  {
    number: '02',
    title: 'Design consultation',
    body: 'We discuss setting style, metal choice, and occasion. Whether you have a clear vision or want us to propose a design, our craftsmen sketch concepts for your approval before a single cut is made.',
  },
  {
    number: '03',
    title: 'Bespoke crafting',
    body: 'Your piece is hand-crafted in Sri Lanka by master gem-setters with generations of experience working with fine coloured stones. Production typically takes four to eight weeks.',
  },
  {
    number: '04',
    title: 'Delivery worldwide',
    body: 'The finished piece is photographed, insured, and delivered to your door anywhere in the world. The laboratory certificate for the stone travels with it.',
  },
]

const pieces = [
  { title: 'Engagement Rings', body: 'A Ceylon sapphire at the heart of your proposal — unheated, certified, and entirely unique.' },
  { title: 'Dress Rings', body: 'Statement pieces in vivid Padparadscha, deep blue, or star sapphire, set to be worn.' },
  { title: 'Pendants & Necklaces', body: 'A single stone suspended in gold or platinum — the simplest form of fine jewellery, done right.' },
  { title: 'Earrings', body: 'Matched pairs of certified stones set in drops, studs, or chandeliers.' },
  { title: 'Bracelets & Bangles', body: 'Multi-stone arrangements or a single centrepiece in a refined bracelet setting.' },
  { title: 'Brooches & Pins', body: 'Heirloom-quality pieces that reference the golden age of jewelled accessories.' },
]

export default function CustomJewelleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-24 px-6 lg:px-10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 30% 60%, rgba(201,168,76,0.12) 0%, transparent 65%), radial-gradient(ellipse 40% 50% at 80% 40%, rgba(107,45,139,0.10) 0%, transparent 60%)' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5">Bespoke Jewellery</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight mb-6">
              A jewel made<br />
              <span className="italic text-teal-light">entirely for you.</span>
            </h1>
            <p className="font-jost text-sm text-offwhite/50 leading-relaxed max-w-md mb-8">
              We combine a certified, unheated Sri Lankan gemstone with the skill of Sri Lanka&apos;s finest craftsmen to create a single bespoke piece — from engagement rings to heirloom pendants.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-3 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors"
              >
                Start Your Enquiry
              </Link>
              <Link
                href="/gemstones"
                className="px-8 py-3 border border-teal/40 text-teal-light font-jost text-sm tracking-widest uppercase hover:bg-teal hover:text-white hover:border-teal transition-all"
              >
                Browse Stones
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.15} className="flex items-center justify-center">
            <div
              className="w-64 h-64 flex items-center justify-center rounded-full"
              style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,168,76,0.18) 0%, rgba(107,45,139,0.08) 55%, transparent 75%)' }}
            >
              <GemSVG colour="#c9a84c" size={140} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Proposition */}
      <section className="bg-warm px-6 lg:px-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal mb-5">Why commission with us</p>
            <h2 className="font-cormorant text-4xl text-dark font-semibold mb-6 leading-snug">
              The stone is the difference
            </h2>
            <p className="font-jost text-sm text-dark/65 leading-relaxed mb-6">
              Most jewellers source their centre stones from commercial dealers — heated, undisclosed, and identical to thousands of others. When you commission through Serendib Gemstones, the stone at the heart of your piece is traced from a Sri Lankan mine field to a GIA or GRS laboratory and then to you. Unheated. Untreated. Documented.
            </p>
            <p className="font-jost text-sm text-dark/65 leading-relaxed">
              That stone then goes to craftsmen who have been setting fine coloured gems in Sri Lanka for generations — people who understand how to bring the best out of each individual crystal. The result is a piece with genuine rarity built into it, not just a beautiful setting with an interchangeable stone.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Process */}
      <section className="bg-dark py-24 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">How it works</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite">The commission process</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {steps.map((s, i) => (
              <FadeUp key={s.number} delay={i * 0.1}>
                <div className="bg-dark p-10 h-full">
                  <p className="font-cormorant text-5xl text-teal/20 font-light mb-4">{s.number}</p>
                  <h3 className="font-cormorant text-2xl text-offwhite font-semibold mb-3">{s.title}</h3>
                  <p className="font-jost text-sm text-offwhite/50 leading-relaxed">{s.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* What we make */}
      <section className="bg-dark-card py-24 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Pieces we create</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite">What can be made</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pieces.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.08}>
                <div className="bg-dark border border-white/6 p-8 hover:border-teal/30 transition-colors h-full">
                  <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-3">{p.title}</h3>
                  <p className="font-jost text-sm text-offwhite/50 leading-relaxed">{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-dark py-20 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Materials</p>
            <h2 className="font-cormorant text-4xl text-offwhite font-semibold mb-6 leading-snug">
              Settings worthy of the stone
            </h2>
            <p className="font-jost text-sm text-offwhite/50 leading-relaxed mb-6">
              We work in 18-carat yellow, white, and rose gold, and platinum. Metal choice is guided by the stone — a vivid blue Ceylon sapphire in yellow gold is a classic pairing; a pale Padparadscha in white gold lets the colour speak for itself.
            </p>
            <p className="font-jost text-sm text-offwhite/50 leading-relaxed">
              Setting styles range from classic four-claw solitaires to bezel, pavé, halo, and fully bespoke architectural designs. We produce CAD renders for your approval before work begins on any setting.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="space-y-4">
              {[
                { metal: '18k Yellow Gold', note: 'The classic pairing for deep blue and vivid sapphires' },
                { metal: '18k White Gold', note: 'Understated setting that lets fine colour dominate' },
                { metal: '18k Rose Gold', note: 'Warm complement for pink, Padparadscha, and ruby' },
                { metal: 'Platinum', note: 'The most durable setting; preferred for engagement pieces' },
              ].map((m) => (
                <div key={m.metal} className="flex items-start gap-4 border-b border-white/6 pb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                  <div>
                    <p className="font-jost text-sm text-offwhite font-medium">{m.metal}</p>
                    <p className="font-jost text-xs text-offwhite/40 mt-0.5">{m.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-dark-purple py-16 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Timelines</p>
            <h2 className="font-cormorant text-3xl text-offwhite mb-6">What to expect</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
              {[
                { label: 'Stone selection & design', time: '1–2 weeks' },
                { label: 'Crafting & setting', time: '4–6 weeks' },
                { label: 'Finishing & delivery', time: '1 week' },
              ].map((t) => (
                <div key={t.label}>
                  <p className="font-cormorant text-4xl text-teal-light mb-2">{t.time}</p>
                  <p className="font-jost text-xs text-offwhite/45 tracking-wider uppercase">{t.label}</p>
                </div>
              ))}
            </div>
            <p className="font-jost text-xs text-offwhite/30 mt-8">
              Total: typically 6–9 weeks from first enquiry to delivery. Expedited timelines may be possible — ask when you enquire.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-20 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Begin your commission</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite mb-5 font-light">
            Tell us what you have in mind
          </h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-lg mx-auto mb-10 leading-relaxed">
            Whether you have a clear design in mind or simply know you want an exceptional stone, reach out and we will take it from there. Every commission begins with a personal conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors"
          >
            Start Your Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
