import { Link } from 'react-router-dom'
import { Download, FileText } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { membershipTypes, benefitsIntro, benefits, documents } from '@/data/content'

const goldButton = 'inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-500 to-gold-300 px-6 py-3 font-bold text-navy-950 shadow transition hover:brightness-110'

export function AboutMembership() {
  return (
    <>
      <PageHero eyebrow='Membership' title='About membership' />
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-4xl px-5'>
          <h2 className='text-3xl font-extrabold'>Membership types</h2>
          <div className='mt-6 space-y-3'>
            {membershipTypes.map((t) => (
              <details key={t.id} className='group rounded-2xl border bg-white open:shadow-md'>
                <summary className='flex cursor-pointer list-none items-center justify-between px-5 py-4 text-xl font-bold uppercase'>
                  {t.title}
                  <span className='text-gold-500 transition group-open:rotate-45' aria-hidden='true'>+</span>
                </summary>
                <div className='space-y-4 px-5 pb-6 text-navy-900/90'>
                  <p>{t.intro}</p>
                  <ul className='list-disc space-y-2 pl-6'>{t.criteria.map((c) => <li key={c}>{c}</li>)}</ul>
                  <Link to={t.institutional ? '/membership/institutional-signup' : '/membership/individual-signup'} className={goldButton}>Apply now</Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function Benefits() {
  return (
    <>
      <PageHero eyebrow='Membership' title='Member benefits' />
      <section className='bg-linear-to-b from-white to-cream py-16'>
        <div className='mx-auto max-w-6xl px-5'>
          <p className='max-w-3xl text-lg'>{benefitsIntro}</p>
          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 100} className='rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl'>
                <span className='grid size-10 place-items-center rounded-full bg-gold-400 font-bold text-navy-950'>{i + 1}</span>
                <h3 className='mt-4 text-lg font-extrabold'>{b.title}</h3>
                <p className='mt-2 text-sm text-navy-900/80'>{b.text}</p>
              </Reveal>
            ))}
          </div>
          <Link to='/membership/individual-signup' className={`${goldButton} mt-10`}>Join CSZ</Link>
        </div>
      </section>
    </>
  )
}

export function Documents({ id }) {
  const d = documents[id]
  return (
    <>
      <PageHero eyebrow={d.eyebrow} title={d.title} />
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-4xl px-5'>
          <ul className='divide-y overflow-hidden rounded-2xl border'>
            {d.items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className='flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-cream'>
                  <span className='flex items-center gap-3 font-semibold'><FileText className='shrink-0 text-gold-500' />{item.title}</span>
                  <span className='flex shrink-0 items-center gap-2 text-sm text-navy-900/70'>{item.meta}<Download size={16} /></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
