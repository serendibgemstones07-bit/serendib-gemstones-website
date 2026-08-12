type Source = {
  label: string
  detail?: string
  href?: string
}

type Props = {
  sources: Source[]
  note?: string
}

export default function SourcesReferences({ sources, note }: Props) {
  return (
    <div className="border-t border-white/10 mt-16 pt-10 not-prose">
      <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-4">Sources &amp; References</p>
      <p className="font-jost text-xs text-offwhite/45 leading-relaxed mb-6 max-w-2xl">
        {note ||
          'This article draws on published gemological literature, laboratory reports, and industry standards. Consult the primary sources below for verification.'}
      </p>
      <ul className="space-y-3">
        {sources.map((s) => (
          <li key={s.label} className="font-jost text-sm text-offwhite/60 leading-relaxed">
            {s.href ? (
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30"
              >
                {s.label}
              </a>
            ) : (
              <span className="text-offwhite/80">{s.label}</span>
            )}
            {s.detail && <span className="text-offwhite/45"> — {s.detail}</span>}
          </li>
        ))}
      </ul>
      <p className="font-jost text-[11px] text-offwhite/30 italic mt-6 leading-relaxed max-w-2xl">
        Information in this article reflects industry practice and gemological consensus at the time of publication. Gemstone valuation, availability, and market conditions vary continuously — for current information about a specific stone, please make an enquiry.
      </p>
    </div>
  )
}
