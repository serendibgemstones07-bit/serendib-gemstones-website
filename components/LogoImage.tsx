'use client'

interface LogoImageProps {
  size?: number
  className?: string
}

/*
  Renders the actual logo.jpg with its white background removed.

  Technique: SVG feColorMatrix sets each pixel's alpha to (3 − R − G − B),
  clamped 0–1. White (#fff → R=G=B=1) yields alpha = 0 (fully transparent).
  Coloured pixels (teal, purple) are dark enough that alpha clamps to 1
  (fully opaque). Anti-aliased edge pixels get natural partial transparency.

  A subtle feDropShadow in the logo's teal colour makes the shapes pop
  against the dark site background.
*/
export default function LogoImage({ size = 200, className = '' }: LogoImageProps) {
  // glow blur is 3% of the rendered size — tight at nav scale, soft at hero scale
  const glow = Math.max(1, size * 0.03)

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Serendib Gem Stones logo"
    >
      <defs>
        <filter
          id="sgsl-logo-render"
          x="-8%"
          y="-8%"
          width="116%"
          height="116%"
          colorInterpolationFilters="sRGB"
        >
          {/* Step 1 — knock out the white background */}
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                   -1 -1 -1 3 0"
            result="noWhite"
          />
          {/* Step 2 — teal glow proportional to display size */}
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation={glow}
            floodColor="#c9a84c"
            floodOpacity="0.6"
            in="noWhite"
          />
        </filter>
      </defs>

      <image
        href="/logo.jpg"
        x="0"
        y="0"
        width={size}
        height={size}
        filter="url(#sgsl-logo-render)"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  )
}
