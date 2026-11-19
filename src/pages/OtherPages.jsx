import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays, Clock, Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import MessageCard from '@/components/MessageCard'
import { asset } from '@/data/assets'
import { icdl, eLearner, events, fmtDate, dateParts, galleryAlbums, careers, contact } from '@/data/content'

const wrap = 'mx-auto max-w-6xl px-5'
const goldButton = 'inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-500 to-gold-300 px-6 py-3 font-bold text-navy-950 shadow transition hover:brightness-110'

function CardLink({ to, title, text, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link to={to} className='block h-full rounded-3xl bg-linear-to-br from-navy-900 to-navy-950 p-7 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl'>
        <h3 className='flex items-center justify-between text-xl font-bold text-gold-300'>{title}<ArrowUpRight /></h3>
        <p className='mt-3 text-blue-50/85'>{text}</p>
      </Link>
    </Reveal>
  )
}

export function Services() {
  return (
    <>
      <PageHero eyebrow='Resources' title='Services' />
      <section className='bg-white py-16'>
        <div className={`${wrap} grid gap-6 md:grid-cols-2`}>
          <CardLink to='/icdl' title='ICDL' text='The world’s leading computer skills certification, run in Zimbabwe by CSZ since 1999.' />
          <CardLink to='/e-learner' delay={120} title='E-Learner' text='A digital skills curriculum for primary students and teachers, leading on to ICDL.' />
        </div>
        <div className={`${wrap} mt-10`}><MessageCard /></div>
      </section>
    </>
  )
}

export function Icdl() {
  return (
    <>
      <PageHero eyebrow='Resources' title='ICDL' />
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-5xl px-5'>
          <div className='space-y-4 text-lg leading-relaxed'>{icdl.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
          <a href={icdl.link} target='_blank' rel='noreferrer' className={`${goldButton} mt-6`}>Read more <ArrowUpRight size={16} /></a>
          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {icdl.categories.map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <a href={c.href} target='_blank' rel='noreferrer' className='block rounded-2xl border bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
                  <img src={asset(c.img)} alt={c.label} loading='lazy' className='mx-auto h-28 object-contain' />
                  <p className='mt-3 font-bold'>{c.label}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function ELearner() {
  return (
    <>
      <PageHero eyebrow='Resources' title='E-Learner' />
      <section className='bg-white py-16'>
        <div className='mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-[1fr_16rem]'>
          <div>
            <img src={asset(eLearner.logo)} alt='e-Learner' className='mb-6 h-12 object-contain' />
            <div className='space-y-4 text-lg leading-relaxed'>{eLearner.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
            <a href={eLearner.trial.href} target='_blank' rel='noreferrer' className={`${goldButton} mt-6`}>{eLearner.trial.label} <ArrowUpRight size={16} /></a>
          </div>
          <img src={asset(eLearner.photo)} alt='' loading='lazy' className='w-full rounded-3xl object-cover shadow-xl' />
        </div>
      </section>
    </>
  )
}

export function MediaIndex() {
  return (
    <>
      <PageHero eyebrow='News & Media' title='Media' />
      <section className='bg-white py-16'>
        <div className={`${wrap} grid gap-6 md:grid-cols-2 lg:grid-cols-3`}>
          <CardLink to='/media/press-office' title='Press Office' text='Press releases and media coverage.' />
          <CardLink to='/media/csz-communication' delay={100} title='CSZ Communication' text='Official communication, including the CSZ Privacy Policy.' />
          <CardLink to='/summit-2023-presentations' delay={200} title='Summit 2023 Presentations' text='Slides and video from the 2023 Summit.' />
          <CardLink to='/media/events' delay={300} title='Events' text='Upcoming and past CSZ events.' />
          <CardLink to='/media/gallery' delay={400} title='Gallery' text='Photo albums from CSZ events.' />
        </div>
      </section>
    </>
  )
}

function EventRow({ e }) {
  const { month, day, year } = dateParts(e.iso)
  return (
    <li className='flex items-center gap-4 rounded-2xl border bg-white p-4 shadow-sm'>
      <div className='grid w-20 shrink-0 place-content-center rounded-xl bg-navy-900 p-2 text-center text-white'>
        <p className='text-xs font-semibold tracking-widest'>{month}</p>
        <p className='font-display text-2xl font-extrabold leading-none'>{day}</p>
        <p className='text-xs'>{year}</p>
      </div>
      <div className='min-w-0 flex-1'>
        <p className='font-bold'>{e.title}</p>
        <p className='flex items-center gap-2 text-sm text-navy-900/75'><MapPin size={14} />{e.place}</p>
      </div>
      {e.to && <Link to={e.to} className={`${goldButton} px-4 py-2 text-sm`}>Details</Link>}
    </li>
  )
}

export function Events() {
  return (
    <>
      <PageHero eyebrow='Events' title='Events' />
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-4xl px-5'>
          <h2 className='flex items-center gap-3 text-2xl font-extrabold'><CalendarDays className='text-gold-500' /> Upcoming events</h2>
          <ul className='mt-5 space-y-3'>{events.upcoming.map((e) => <EventRow key={e.title} e={e} />)}</ul>
          <h2 className='mt-12 flex items-center gap-3 text-2xl font-extrabold'><Clock className='text-gold-500' /> Past events</h2>
          <ul className='mt-5 space-y-3'>{events.past.map((e) => <EventRow key={e.title + e.iso} e={e} />)}</ul>
        </div>
      </section>
    </>
  )
}

export function Gallery() {
  return (
    <>
      <PageHero eyebrow='Events' title='Gallery' />
      <section className='bg-white py-16'>
        <div className={`${wrap} grid gap-5 sm:grid-cols-2 lg:grid-cols-3`}>
          {galleryAlbums.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 100}>
              <a href={a.href} className='flex h-40 items-end rounded-3xl bg-linear-to-br from-navy-800 to-navy-950 p-6 text-white shadow-lg transition hover:-translate-y-1'>
                <span className='flex w-full items-center justify-between text-lg font-bold'>{a.title}<ArrowUpRight className='text-gold-300' /></span>
              </a>
            </Reveal>
          ))}
        </div>
        <p className='mx-auto mt-8 max-w-6xl px-5 text-sm text-navy-900/70'>Albums open on the current CSZ site until the photos are moved here.</p>
      </section>
    </>
  )
}

export function Careers() {
  return (
    <>
      <PageHero eyebrow='About Us' title='Careers @ CSZ' />
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-4xl px-5'>
          <p className='rounded-2xl bg-cream p-5 text-lg font-semibold'>There are no open vacancies at the moment.</p>
          <h2 className='mt-10 text-2xl font-extrabold'>Previous vacancies</h2>
          <ul className='mt-4 divide-y rounded-2xl border'>
            {careers.map((c) => (
              <li key={c.title} className='flex flex-wrap items-center justify-between gap-2 px-5 py-4'>
                <div><p className='font-bold'>{c.title}</p><p className='text-sm text-navy-900/70'>{c.location} · Published {c.published}</p></div>
                <span className='rounded-full bg-navy-900/10 px-3 py-1 text-sm font-semibold'>Closed {c.closed}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export function Contact() {
  const items = [
    { Icon: MapPin, title: 'Physical address', lines: contact.address },
    { Icon: Phone, title: 'Telephone', lines: contact.phones },
    { Icon: Clock, title: 'Business hours', lines: contact.hours },
    { Icon: Mail, title: 'Email', lines: contact.emails },
  ]
  return (
    <>
      <PageHero eyebrow='Contact' title='Contact us' />
      <section className='bg-linear-to-b from-white to-cream py-16'>
        <div className={`${wrap} grid gap-6 sm:grid-cols-2`}>
          {items.map(({ Icon, title, lines }, i) => (
            <Reveal key={title} delay={i * 100} className='flex gap-5 rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/5'>
              <span className='grid size-14 shrink-0 place-items-center rounded-full border-2 border-gold-400 text-navy-800'><Icon /></span>
              <div>
                <h2 className='font-bold'>{title}</h2>
                {lines.map((l) => <p key={l} className='text-navy-900/80'>{l}</p>)}
              </div>
            </Reveal>
          ))}
        </div>
        <div className={`${wrap} mt-8`}>
          <a href={`mailto:${contact.emails[0]}`} className={goldButton}><Mail size={18} /> Email the secretariat</a>
        </div>
      </section>
    </>
  )
}
