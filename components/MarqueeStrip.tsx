const gems = [
  'Blue Sapphire', 'Ruby', 'Padparadscha', 'Alexandrite',
  "Cat's Eye", 'Blue Spinel', 'Star Sapphire', 'Pink Sapphire',
  'Yellow Sapphire', 'Garnet',
]

function Separator() {
  return <span className="mx-8 text-teal/60 text-[8px]" aria-hidden>●</span>
}

function Items() {
  return (
    <>
      {gems.map((gem, i) => (
        <span
          key={i}
          className="font-jost text-xs tracking-[0.35em] uppercase text-teal whitespace-nowrap"
        >
          {gem}
          <Separator />
        </span>
      ))}
    </>
  )
}

export default function MarqueeStrip() {
  return (
    <div className="bg-dark border-y border-teal/50 py-4 overflow-hidden">
      <div className="marquee-track">
        <Items />
        <Items />
      </div>
    </div>
  )
}
