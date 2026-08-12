import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'

export const metadata: Metadata = {
  title: 'What Carat Size Sapphire Should I Buy?',
  description: 'The ideal sapphire carat weight depends on use: 1–3ct for engagement rings, 3–10ct for investment. Quality matters more than size — learn how value jumps at milestone weights.',
  alternates: { canonical: 'https://serendibgemstones.com/learn/faq/what-carat-size-sapphire-should-i-buy' },
}

const faqItems = [
  {
    q: 'What size sapphire is best for an engagement ring?',
    a: 'Most sapphire engagement rings feature stones between 1 and 3 carats. A 1.5 to 2 carat sapphire offers an excellent balance of presence and value — large enough to make a statement, small enough to find exceptional quality within most budgets. Unlike diamonds, sapphires are denser, so a 1.5ct sapphire will appear slightly smaller face-up than a 1.5ct diamond. Consider the setting style too — a halo setting can make a 1ct sapphire look significantly larger.',
  },
  {
    q: 'Does value per carat increase with size?',
    a: 'Yes, dramatically. Sapphire value follows a non-linear curve with significant step-changes at milestone weights. A fine 5ct unheated Ceylon sapphire commands a substantially higher per-carat value than a 3ct stone of identical quality, and above 10ct the premium accelerates further because large, fine-quality sapphires are genuinely rare. This is why two 2ct stones will always be worth less than one 4ct stone of the same quality.',
  },
  {
    q: 'Is it better to buy a larger heated sapphire or a smaller unheated one?',
    a: 'It depends on your priority. For investment and long-term value retention, a smaller unheated stone will outperform a larger heated one. For visual impact in jewellery, a larger heated stone gives you more presence at a lower price point. There is no wrong answer — but you should make the decision consciously, understanding what you are optimising for.',
  },
  {
    q: 'What size sapphire should I buy for investment?',
    a: 'For investment, most advisors recommend 3 to 10 carats. Below 3ct, the per-carat premium for fine unheated stones is lower, which means less upside. Above 10ct, the market becomes very thin — harder to buy and harder to sell. The sweet spot of 3–10ct offers strong appreciation potential, sufficient market depth for resale, and manageable price points for most investors. Always prioritise colour and treatment status over size for investment stones.',
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
        { '@type': 'ListItem', position: 3, name: 'What Carat Size Sapphire to Buy' },
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

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative bg-dark pt-36 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,168,76,0.2) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8 flex-wrap">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/learn" className="hover:text-teal transition-colors">Knowledge Centre</Link>
            <span>/</span>
            <span className="text-offwhite/60">FAQ</span>
          </nav>
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Frequently Asked Question</p>
            <h1 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-light leading-tight mb-6">
              What carat size sapphire should I buy?
            </h1>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark px-6 lg:px-10 py-10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="bg-dark-card border border-teal/20 p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Quick Answer</p>
              <p className="font-jost text-sm text-offwhite/70 leading-relaxed">
                For <strong className="text-offwhite">engagement rings</strong>, 1&ndash;3 carats offers the best balance of beauty and value. For <strong className="text-offwhite">investment</strong>, 3&ndash;10 carats is the sweet spot. In all cases, <strong className="text-offwhite">quality matters more than size</strong> &mdash; a brilliant 2ct unheated sapphire will always outperform a dull 5ct heated stone, both visually and as an investment.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark px-6 lg:px-10 pb-16">
        <div className="max-w-3xl mx-auto prose-gem">
          <ArticleByline updated="2026-08-12" />
          <FadeUp>
            <h2>The Full Answer</h2>
            <p>
              The right carat size depends entirely on what you intend to do with the stone. A sapphire for daily-wear jewellery has different requirements than one purchased as a store of value. Understanding how price scales with size &mdash; and why quality trumps weight in every scenario &mdash; will help you make a smarter decision.
            </p>
            <h3>For engagement rings: 1&ndash;3 carats</h3>
            <p>
              The most popular range for sapphire engagement rings is 1 to 3 carats. A 1.5ct stone provides excellent visual presence in most ring settings, while 2&ndash;3ct stones make a genuine statement. Remember that sapphires are denser than diamonds (specific gravity 4.0 vs 3.52), so a 2ct sapphire will appear roughly 10% smaller face-up than a 2ct diamond. If you want the visual equivalent of a 2ct diamond, look for a 2.2&ndash;2.4ct sapphire.
            </p>
            <h3>For investment: 3&ndash;10 carats</h3>
            <p>
              Investment-grade sapphires typically start at 3 carats, where the per-carat premium for fine unheated stones becomes significant. The 3&ndash;10ct range offers the best combination of appreciation potential and market liquidity &mdash; stones in this range are rare enough to command premiums but common enough to have active buyers when you want to sell. Above 10ct, quality stones become extremely rare and the buyer pool narrows considerably.
            </p>
            <h3>Value jumps at milestone weights</h3>
            <p>
              Sapphire value is not linear. A 2ct stone is worth more than twice what a 1ct stone of the same quality is worth. Major value jumps occur at 1ct, 2ct, 3ct, 5ct, and 10ct milestones. This means a 0.95ct stone can offer better value than a 1.05ct stone of identical quality, because it sits just below the milestone threshold. Savvy buyers look for stones that fall just under these milestones.
            </p>
            <h3>Quality over size, always</h3>
            <p>
              A common mistake is prioritising size at the expense of colour and clarity. A 5ct sapphire with poor colour is worth less than a 2ct stone with vivid, saturated blue. Treatment status amplifies this &mdash; a 2ct unheated sapphire with fine colour will hold and grow in value far better than a 5ct heated stone. If your budget forces a choice between size and quality, choose quality every time.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark-card px-6 lg:px-10 py-16 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-2xl text-offwhite font-semibold mb-8">Related Questions</h2>
            <div className="space-y-3">
              {faqItems.map((faq) => (
                <details key={faq.q} className="faq-item border border-white/6 bg-dark">
                  <summary className="px-6 py-4 cursor-pointer font-jost text-sm text-offwhite/70">{faq.q}</summary>
                  <div className="faq-answer px-6">{faq.a}</div>
                </details>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark px-6 lg:px-10 py-12 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-xl text-offwhite font-semibold mb-5">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/learn/faq/how-much-is-a-blue-sapphire-worth" className="group block bg-dark-card border border-white/6 hover:border-teal/25 transition-colors p-5">
                <p className="font-cormorant text-base text-offwhite font-semibold group-hover:text-teal-light transition-colors leading-snug">How much is a blue sapphire worth?</p>
                <span className="font-jost text-xs text-teal/50 mt-2 inline-block">Read guide &rarr;</span>
              </Link>
              <Link href="/learn/buying-guide" className="group block bg-dark-card border border-white/6 hover:border-teal/25 transition-colors p-5">
                <p className="font-cormorant text-base text-offwhite font-semibold group-hover:text-teal-light transition-colors leading-snug">Buying Guide</p>
                <span className="font-jost text-xs text-teal/50 mt-2 inline-block">Read guide &rarr;</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark-card py-16 px-6 text-center border-t border-teal/10">
        <FadeUp>
          <p className="font-cormorant italic text-xl text-offwhite/60 mb-4">Need help choosing the right stone?</p>
          <p className="font-jost text-sm text-offwhite/45 mb-6 max-w-md mx-auto leading-relaxed">
            Tell us your budget, intended use, and preferences &mdash; we&apos;ll recommend the right carat range and source options.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-teal hover:bg-teal-light text-white font-jost text-xs tracking-widest uppercase transition-colors duration-300">
            Start a Conversation
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
