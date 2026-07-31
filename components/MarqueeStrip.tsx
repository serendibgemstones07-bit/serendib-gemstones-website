const gems = [
  'Blue Sapphire', 'Ruby', 'Padparadscha', 'Alexandrite',
  "Cat's Eye", 'Blue Spinel', 'Star Sapphire', 'Pink Sapphire',
  'Yellow Sapphire', 'Garnet',
]

function Dot() {
  return <span className="mx-5 text-teal-dark opacity-60">◆</span>
}

function Items() {
  return (
    <>
      {gems.map((gem, i) => (
        <span key={i} className="font-cormorant italic text-lg tracking-wide text-dark whitespace-nowrap">
          {gem}
          <Dot />
        </span>
      ))}
    </>
  )
}

export default function MarqueeStrip() {
  return (
    <div className="bg-[#c9a84c] py-3.5 overflow-hidden">
      <div className="marquee-track">
        <Items />
        <Items />
      </div>
    </div>
  )
}
