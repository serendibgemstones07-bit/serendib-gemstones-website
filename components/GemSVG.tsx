interface GemSVGProps {
  colour?: string
  size?: number
  className?: string
}

export default function GemSVG({ colour = '#c9a84c', size = 80, className = '' }: GemSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Faceted gem shape — brilliant cut top view */}
      <polygon points="40,4 68,22 68,58 40,76 12,58 12,22" stroke={colour} strokeWidth="1.5" fill="none" opacity="0.9" />
      <polygon points="40,4 68,22 40,30 12,22" stroke={colour} strokeWidth="1.2" fill={colour} fillOpacity="0.08" />
      <polygon points="12,22 40,30 12,58" stroke={colour} strokeWidth="1.2" fill={colour} fillOpacity="0.05" />
      <polygon points="68,22 40,30 68,58" stroke={colour} strokeWidth="1.2" fill={colour} fillOpacity="0.05" />
      <polygon points="40,30 12,58 40,76 68,58" stroke={colour} strokeWidth="1.2" fill={colour} fillOpacity="0.08" />
      <line x1="40" y1="4" x2="40" y2="30" stroke={colour} strokeWidth="1" opacity="0.5" />
      <line x1="12" y1="22" x2="40" y2="30" stroke={colour} strokeWidth="1" opacity="0.5" />
      <line x1="68" y1="22" x2="40" y2="30" stroke={colour} strokeWidth="1" opacity="0.5" />
      <line x1="40" y1="30" x2="40" y2="76" stroke={colour} strokeWidth="1" opacity="0.5" />
      <line x1="40" y1="30" x2="12" y2="58" stroke={colour} strokeWidth="1" opacity="0.5" />
      <line x1="40" y1="30" x2="68" y2="58" stroke={colour} strokeWidth="1" opacity="0.5" />
    </svg>
  )
}
