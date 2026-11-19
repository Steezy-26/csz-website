import { ShieldCheck } from 'lucide-react'
import { messageOfTheWeek } from '@/data/content'

export default function MessageCard({ className = '' }) {
  const m = messageOfTheWeek()
  return (
    <div className={`rounded-3xl bg-linear-to-br from-gold-500 to-gold-300 p-7 text-navy-950 shadow-lg ${className}`}>
      <p className='flex items-center gap-2 text-xs font-bold uppercase tracking-widest'>
        <ShieldCheck size={16} /> Message of the week
      </p>
      <h3 className='mt-2 text-2xl font-extrabold'>{m.title}</h3>
      {m.lines.map((line) => (<p key={line} className='mt-1'>{line}</p>))}
    </div>
  )
}
