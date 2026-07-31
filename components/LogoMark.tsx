'use client'

interface LogoMarkProps {
  size?: number
  className?: string
}

/*
  Exact SVG trace of the Serendib Gem Stones logo mark.

  Two identical gem-frame pentagons (thick outline, hollow centre):
    - Flat top edge
    - Two outward-angled shoulders (girdle is wider than the flat top)
    - Tapering to a sharp bottom point

  Teal gem:  upper-left position
  Purple gem: same size, offset right +12 and down +14

  Interlocking weave (3-layer paint technique):
    Layer 1 — full teal frame
    Layer 2 — full purple frame (purple in front by default)
    Layer 3 — teal frame clipped to upper 30px (teal in front at the top crossing)

  ViewBox: 0 0 96 102
*/
export default function LogoMark({ size = 48, className = '' }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.0625)}
      viewBox="0 0 96 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Serendib Gem Stones logo mark"
    >
      <defs>
        {/* Clip to the upper crossing region — re-paints teal in front here */}
        <clipPath id="lm-upper">
          <rect x="0" y="0" width="96" height="30" />
        </clipPath>
      </defs>

      {/* ── Layer 1: teal gem frame, full ── */}
      <path
        fillRule="evenodd"
        fill="#c9a84c"
        d="M14,8 L65,8 L78,28 L40,83 L3,28 Z
           M20,15 L62,15 L71,28 L40,76 L11,28 Z"
      />

      {/* ── Layer 2: purple gem frame, full (in front in lower region) ── */}
      <path
        fillRule="evenodd"
        fill="#6b2d8b"
        d="M26,22 L77,22 L90,42 L52,97 L15,42 Z
           M32,29 L73,29 L83,42 L52,90 L23,42 Z"
      />

      {/* ── Layer 3: teal gem frame, upper clip (brings teal to front at top) ── */}
      <path
        fillRule="evenodd"
        fill="#c9a84c"
        clipPath="url(#lm-upper)"
        d="M14,8 L65,8 L78,28 L40,83 L3,28 Z
           M20,15 L62,15 L71,28 L40,76 L11,28 Z"
      />
    </svg>
  )
}
