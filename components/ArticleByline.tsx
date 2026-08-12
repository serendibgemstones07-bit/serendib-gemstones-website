type Props = {
  updated: string
  reviewer?: string
  reviewerRole?: string
}

const AUTHOR = 'Serendib Gemstones Editorial'
const AUTHOR_DESC = 'Written by our in-house team of Sri Lankan gemstone specialists — sourcing, cutting, and certification professionals working out of Kochchikade, Sri Lanka.'

export default function ArticleByline({
  updated,
  reviewer,
  reviewerRole = 'Co-Founder & Director, Serendib Gemstones (Pvt) Ltd',
}: Props) {
  const updatedDate = new Date(updated)
  const formatted = updatedDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="border border-white/6 bg-dark-card/60 p-5 my-8 not-prose">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-2">Written by</p>
          <p className="font-cormorant text-lg text-offwhite font-semibold">{AUTHOR}</p>
          <p className="font-jost text-xs text-offwhite/45 leading-relaxed mt-1 max-w-xl">
            {AUTHOR_DESC}
          </p>
          {reviewer && (
            <p className="font-jost text-xs text-offwhite/55 mt-3">
              <span className="text-teal/60">Reviewed by:</span>{' '}
              <span className="text-offwhite/80">{reviewer}</span>
              <span className="text-offwhite/40"> — {reviewerRole}</span>
            </p>
          )}
        </div>
        <div className="sm:text-right shrink-0">
          <p className="font-jost text-[10px] tracking-[0.3em] uppercase text-offwhite/30 mb-1">Last updated</p>
          <p className="font-jost text-xs text-offwhite/60">{formatted}</p>
        </div>
      </div>
    </div>
  )
}
