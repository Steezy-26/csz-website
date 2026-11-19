import { useEffect, useState } from 'react'

// Summit start: 18 Nov 2026, Zimbabwe time (UTC+2). Adjust the hour if needed.
const TARGET = new Date('2026-11-18T08:00:00+02:00').getTime()

function timeLeft() {
  const diff = Math.max(TARGET - Date.now(), 0)
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  }
}

export default function Countdown() {
  const [left, setLeft] = useState(timeLeft)
  useEffect(() => {
    const id = setInterval(() => setLeft(timeLeft()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className='mt-10 flex justify-center gap-3'>
      {Object.entries(left).map(([label, value]) => (
        <div key={label} className='w-20 rounded-2xl border border-gold-500/40 bg-white/5 py-3 backdrop-blur'>
          <div className='font-display text-2xl font-bold text-gold-300'>{String(value).padStart(2, '0')}</div>
          <div className='text-xs uppercase tracking-widest text-white/70'>{label}</div>
        </div>
      ))}
    </div>
  )
}
