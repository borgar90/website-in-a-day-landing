export default function BfsLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="140"
      height="64"
      viewBox="0 0 70 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BFS logo"
    >
      <path d="M4 26 Q4 6 15 6 Q26 6 26 26" stroke="#2563eb" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26 26 Q26 6 37 6 Q48 6 48 26" stroke="#2563eb" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 26 Q15 16 20.5 16 Q26 16 26 26" stroke="#2563eb" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M48 26 Q48 6 59 6 Q66 6 66 12 Q66 18 59 18 L52 18" stroke="#2563eb" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
