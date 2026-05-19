export default function LogoDark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 380 72"
      role="img"
      aria-label="Valdence Digital"
      className={className}
    >
      <polygon
        points="36,8 62,34 36,60 10,34"
        fill="none"
        stroke="#111111"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <polygon
        points="36,14 56,34 36,54 16,34"
        fill="none"
        stroke="#111111"
        strokeWidth="0.8"
        strokeLinejoin="round"
        opacity="0.45"
      />
      <polyline
        points="20,34 36,49 52,34"
        fill="none"
        stroke="#111111"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="80" y1="16" x2="80" y2="56" stroke="#111111" strokeWidth="0.5" opacity="0.2" />
      <text
        x="96"
        y="38"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="22"
        fontWeight="500"
        fill="#111111"
        letterSpacing="3"
      >
        VALDENCE
      </text>
      <line x1="96" y1="45" x2="234.96" y2="45" stroke="#111111" strokeWidth="0.36" opacity="0.3" />
      <text
        x="96"
        y="58"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="9.5"
        fontWeight="400"
        fill="#555555"
        letterSpacing="6"
      >
        DIGITAL
      </text>
    </svg>
  )
}
