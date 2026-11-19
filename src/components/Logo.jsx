// A drawn version of the logo from the new design. Replace with CSZ's official logo file when you have it.
export default function Logo({ dark = false, className = '' }) {
  const navy = dark ? '#8fb0ff' : '#0a1a5c'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox='0 0 40 40' className='h-11 w-11 shrink-0' aria-hidden='true'>
        <rect x='4' y='4' width='9' height='9' fill='#d92027' />
        <rect x='15' y='2' width='7' height='7' fill={navy} />
        <rect x='24' y='6' width='9' height='9' fill={navy} />
        <rect x='2' y='16' width='7' height='7' fill={navy} />
        <rect x='11' y='15' width='9' height='9' fill='#1a3aa8' />
        <rect x='22' y='18' width='7' height='7' fill='#d92027' />
        <rect x='6' y='27' width='9' height='9' fill={navy} />
        <rect x='18' y='28' width='7' height='7' fill='#e3a419' />
        <rect x='28' y='28' width='8' height='8' fill={navy} />
      </svg>
      <span className={`font-display text-3xl font-extrabold leading-none ${dark ? 'text-white' : 'text-navy-900'}`}>CSZ</span>
      <span className={`h-9 w-px ${dark ? 'bg-white/40' : 'bg-navy-900/30'}`} />
      <span className={`text-sm font-semibold leading-tight ${dark ? 'text-white' : 'text-navy-900'}`}>
        Computer Society
        <br />
        <span className='text-brand-red'>of Zimbabwe</span>
      </span>
    </span>
  )
}
