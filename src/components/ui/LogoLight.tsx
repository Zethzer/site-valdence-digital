export default function LogoLight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 160"
      role="img"
      aria-label="Valdence Digital"
      className={className}
    >
      <polygon
        points="120,8 164,52 120,96 76,52"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <polygon
        points="120,16 156,52 120,88 84,52"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.9"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <polyline
        points="97,52 120,73 143,52"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="120"
        y="120"
        textAnchor="middle"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="20"
        fontWeight="500"
        fill="#ffffff"
        letterSpacing="4"
      >
        VALDENCE
      </text>
      <line x1="62" y1="128" x2="178" y2="128" stroke="#ffffff" strokeWidth="0.6" opacity="0.35" />
      <text
        x="120"
        y="143"
        textAnchor="middle"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="10"
        fontWeight="400"
        fill="#aaaaaa"
        letterSpacing="7"
      >
        DIGITAL
      </text>
    </svg>
  )
}
