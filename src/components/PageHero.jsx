import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title }) {
  return (
    <section className='relative isolate overflow-hidden bg-navy-950 text-white'>
      <div className='absolute inset-0 -z-10 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800' />
      <div className='absolute inset-0 -z-10 opacity-30' style={{ backgroundImage: 'radial-gradient(circle, rgba(120,160,255,.6) 1px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
      <div className='absolute -right-24 top-0 -z-10 h-full w-72 skew-x-[-20deg] bg-linear-to-b from-gold-400/90 to-gold-500/30' />
      <div className='absolute right-40 top-0 -z-10 h-full w-2 skew-x-[-20deg] bg-white/25' />
      <div className='mx-auto max-w-7xl px-5 py-14 md:py-20'>
        <nav aria-label='Breadcrumb' className='flex items-center gap-2 text-sm text-blue-100/80'>
          <Link to='/' className='hover:text-gold-300'>Home</Link>
          {eyebrow && (<><span aria-hidden='true'>/</span><span>{eyebrow}</span></>)}
        </nav>
        <h1 className='mt-3 animate-fade-up text-4xl font-extrabold capitalize md:text-5xl'>{title}</h1>
      </div>
    </section>
  )
}
