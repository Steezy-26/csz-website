const tones = {
  gold: 'bg-linear-to-r from-gold-500 via-gold-300 to-cream bg-clip-text text-transparent',
  goldSolid: 'text-[#b07f1c]',
  white: 'text-white',
  navy: 'text-navy-900',
}

export default function SummitTitle({ as: Tag = 'h2', tone = 'gold', className = '', children }) {
  return (
    <Tag className={`font-display font-extrabold uppercase leading-[0.95] tracking-tight ${tones[tone]} ${className}`}>
      {children}
    </Tag>
  )
}
