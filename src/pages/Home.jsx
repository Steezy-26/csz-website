import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Award, Building2, CalendarDays, ChevronRight, Clock, Eye, Handshake,
  History, MapPin, Play, Target, Users, Zap,
} from 'lucide-react'
import Reveal from '@/components/Reveal'
import CountUp from '@/components/CountUp'
import Marquee from '@/components/Marquee'
import MessageCard from '@/components/MessageCard'
import { heroSlides, memberLogo } from '@/data/assets'
import { institutionalMembers } from '@/data/members'
import { events, dateParts, fmtDate } from '@/data/content'
import { quickAccess } from '@/data/site'

const TICK_MS = 5500 // how long each hero picture stays (milliseconds)
const goldButton = 'inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-500 to-gold-300 px-6 py-3 font-bold text-navy-950 shadow-lg transition hover:brightness-110'

/* ---------- Hero: one big picture at a time, changing through all five ---------- */

// Each picture enters with a different wipe, in turn
const reveals = ['animate-reveal-right', 'animate-reveal-up', 'animate-reveal-circle']

function HeroSlides({ index, prev, goTo }) {
  return (
    <div className='relative mb-20 h-80 sm:h-[26rem] lg:absolute lg:inset-y-0 lg:right-0 lg:mb-0 lg:h-auto lg:w-[58%]'>
      {/* the slanted picture area */}
      <div className='absolute inset-y-0 -right-12 left-0 -skew-x-6 overflow-hidden shadow-2xl'>
        {heroSlides.map((s, i) => {
          const isActive = i === index
          const isPrev = i === prev
          return (
            <div
              key={s.src}
              className={`absolute inset-y-0 -inset-x-10 skew-x-6 ${isActive ? `z-20 ${reveals[i % reveals.length]}` : isPrev ? 'z-10' : 'invisible'}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                decoding='async'
                fetchPriority={i === 0 ? 'high' : 'auto'}
                className={`size-full object-cover ${isActive || isPrev ? 'animate-zoom' : ''}`}
                style={{ objectPosition: s.pos, transformOrigin: s.origin }}
              />
            </div>
          )
        })}
        {/* colour washes over the pictures */}
        <div className='pointer-events-none absolute inset-0 z-30 bg-linear-to-t from-navy-950/60 via-transparent to-navy-800/30' />
        <div className='pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(ellipse_at_100%_100%,rgba(240,185,46,0.28),transparent_60%)]' />
      </div>

      {/* the live line between the text and the pictures */}
      <span className='pointer-events-none absolute inset-y-0 left-0 z-30 w-24 -skew-x-6 bg-linear-to-r from-gold-400/30 via-blue-400/10 to-transparent' aria-hidden='true' />
      <span
        className='pointer-events-none absolute inset-y-0 left-0 z-40 w-[7px] -skew-x-6 animate-glow overflow-hidden'
        style={{ background: 'linear-gradient(180deg,#f6cb55 0%,#ffffff 38%,#6f93ff 72%,#1a3aa8 100%)' }}
        aria-hidden='true'
      >
        <span
          className='absolute inset-0 animate-sheen'
          style={{ backgroundImage: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,.95) 45%, transparent 55%)', backgroundSize: '100% 300%' }}
        />
      </span>
      <span className='pointer-events-none absolute inset-y-0 left-4 z-40 w-0.5 -skew-x-6 bg-linear-to-b from-transparent via-white/70 to-transparent' aria-hidden='true' />

      {/* progress dots */}
      <div className='absolute bottom-28 left-1/2 z-40 flex -translate-x-1/2 gap-2 lg:left-auto lg:right-12 lg:translate-x-0' role='group' aria-label='Hero pictures'>
        {heroSlides.map((s, i) => (
          <button
            key={s.src}
            type='button'
            onClick={() => goTo(i)}
            aria-label={`Show picture ${i + 1}`}
            aria-current={i === index}
            className='relative h-2 w-10 overflow-hidden rounded-full bg-white/35'
          >
            {i === index && (
              <span
                key={index}
                className='absolute inset-0 origin-left animate-progress rounded-full bg-linear-to-r from-gold-400 to-white'
                style={{ animationDuration: `${TICK_MS}ms` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  const [index, setIndex] = useState(0)
  const [prev, setPrev] = useState(null)
  const current = useRef(0)

  const goTo = (n) => {
    if (n === current.current) return
    setPrev(current.current)
    current.current = n
    setIndex(n)
  }

  // after each picture's time is up, move to the next one (and start over after the last)
  useEffect(() => {
    const id = setTimeout(() => goTo((current.current + 1) % heroSlides.length), TICK_MS)
    return () => clearTimeout(id)
  }, [index])

  return (
    <section className='relative isolate overflow-hidden bg-navy-950 text-white'>
      <div className='absolute inset-0 -z-10 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800' />
      <div className='absolute inset-0 -z-10 opacity-40' style={{ backgroundImage: 'radial-gradient(circle, rgba(120,160,255,.55) 1px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
      <div className='absolute -left-24 top-10 -z-10 size-80 animate-float rounded-full bg-gold-400/25 blur-3xl' />
      <div className='absolute bottom-0 left-1/3 -z-10 size-96 animate-float rounded-full bg-blue-500/25 blur-3xl' style={{ animationDelay: '-3s' }} />

      <div className='mx-auto flex max-w-7xl flex-col gap-10 px-5 pb-8 pt-12 lg:min-h-[46rem] lg:justify-center lg:pb-56 lg:pt-16'>
        <div className='relative z-10 max-w-xl lg:w-[42%]'>
          <div className='mb-6 flex items-center gap-2' aria-hidden='true'>
            <span className='h-0.5 w-12 bg-gold-400' />
            <span className='h-0.5 w-6 bg-gold-400/60' />
          </div>
          <h1 className='animate-fade-up text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl'>
            Empowering Zimbabwe’s
            <span className='block animate-gradient bg-[linear-gradient(90deg,#f0b92e,#f6cb55,#ffffff,#f6cb55,#f0b92e)] bg-[length:200%_auto] bg-clip-text text-transparent'>
              Digital Future
            </span>
          </h1>
          <p className='mt-6 max-w-lg animate-fade-up text-lg text-blue-100/90' style={{ animationDelay: '0.15s' }}>
            Advancing ICT professionals, promoting innovation and shaping the future of computing in Zimbabwe.
          </p>
          <div className='mt-8 flex animate-fade-up flex-wrap gap-4' style={{ animationDelay: '0.3s' }}>
            <Link to='/members/about-membership' className={goldButton}>Become a Member <ArrowRight size={18} /></Link>
            <Link to='/about-us/our-ethos' className='inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 font-bold transition hover:bg-white hover:text-navy-900'>
              <Play size={14} fill='currentColor' /> Discover CSZ
            </Link>
          </div>
        </div>

        <HeroSlides index={index} prev={prev} goTo={goTo} />
      </div>
    </section>
  )
}

/* ---------- About strip, stats, events, members ---------- */

const aboutItems = [
  { Icon: Users, title: 'Our Community', text: 'A vibrant network of ICT professionals' },
  { Icon: Target, title: 'Our Mission', text: 'Champion the development of the ICT industry in Zimbabwe' },
  { Icon: Eye, title: 'Our Vision', text: 'The trusted industry body driving Zimbabwe’s ICT ecosystem' },
]

function AboutStrip() {
  return (
    <section className='relative z-10 -mt-16 px-5'>
      <Reveal className='mx-auto grid max-w-7xl gap-6 rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/5 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:p-8'>
        <div>
          <p className='font-semibold'>About CSZ</p>
          <h2 className='text-2xl font-extrabold'>Who We Are</h2>
          <p className='mt-2 text-sm text-navy-900/80'>
            The Computer Society of Zimbabwe (CSZ) is an internationally recognized professional body for Zimbabwe’s community of ICT professionals.
          </p>
          <Link to='/about-us/our-ethos' className='mt-3 inline-flex items-center gap-2 text-sm font-bold hover:text-navy-700'>Learn More <ArrowRight size={16} /></Link>
        </div>
        {aboutItems.map(({ Icon, title, text }) => (
          <div key={title} className='flex items-center gap-4 lg:border-l lg:border-gold-300 lg:pl-6'>
            <span className='grid size-16 shrink-0 place-items-center rounded-full border-2 border-gold-400 text-navy-800'><Icon size={30} /></span>
            <div>
              <h3 className='font-bold'>{title}</h3>
              <p className='text-sm text-navy-900/75'>{text}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

const thisYear = new Date().getFullYear()
const eventsThisYear = [...events.upcoming, ...events.past].filter((e) => e.iso.startsWith(String(thisYear))).length
const stats = [
  { Icon: History, value: thisYear - 1974, label: 'Years of Impact' },
  { Icon: Building2, value: institutionalMembers.length, label: 'Institutional Members' },
  { Icon: CalendarDays, value: eventsThisYear, label: `Events in ${thisYear}` },
  { Icon: Award, value: 6, label: 'Membership Grades' },
]

function StatsBand() {
  return (
    <section className='relative mt-12 overflow-hidden bg-linear-to-r from-gold-400 via-gold-300 to-cream text-navy-950 lg:bg-[linear-gradient(90deg,#f0b92e_0%,#f6cb55_24%,#fff0b8_44%,#b9cbff_66%,#3a5fd0_84%,#0a1a5c_100%)]'>
      {/* a soft light that sweeps across the band */}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 animate-sweep skew-x-[-20deg] bg-linear-to-r from-transparent via-white/45 to-transparent' />
      {/* slanted gradient lines near the blue end */}
      <div className='pointer-events-none absolute inset-y-0 right-24 hidden w-1.5 skew-x-[-20deg] bg-linear-to-b from-gold-300 via-white to-blue-400 lg:block' />
      <div className='pointer-events-none absolute inset-y-0 right-32 hidden w-px skew-x-[-20deg] bg-white/50 lg:block' />
      <div className='relative mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 lg:grid-cols-4 lg:pr-[30%]'>
        {stats.map(({ Icon, value, label }) => (
          <div key={label} className='flex items-center gap-4'>
            <Icon size={44} strokeWidth={1.5} />
            <div>
              <p className='text-3xl font-extrabold'><CountUp to={value} /></p>
              <p className='text-sm font-medium'>{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function EventCard({ e }) {
  const { month, day, year } = dateParts(e.iso)
  return (
    <article className='flex overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl'>
      <div className='grid w-24 shrink-0 place-content-center bg-linear-to-b from-navy-800 to-navy-950 p-3 text-center text-white'>
        <p className='text-sm font-semibold tracking-widest'>{month}</p>
        <p className='font-display text-4xl font-extrabold leading-none'>{day}</p>
        <p className='text-sm'>{year}</p>
      </div>
      <div className='flex flex-col gap-2 p-5'>
        <h3 className='text-lg font-extrabold'>{e.title}</h3>
        <p className='flex items-center gap-2 text-sm text-navy-900/80'><Clock size={14} /> {fmtDate(e.iso)}</p>
        <p className='flex items-center gap-2 text-sm text-navy-900/80'><MapPin size={14} /> {e.place}</p>
        {e.to && (
          <Link to={e.to} className='mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-linear-to-r from-gold-500 to-gold-300 px-4 py-2 text-sm font-bold text-navy-950 hover:brightness-110'>
            Register Now <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </article>
  )
}

function EventsSection() {
  return (
    <section className='px-5 py-14'>
      <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_20rem]'>
        <div>
          <div className='flex items-center justify-between gap-4'>
            <h2 className='flex items-center gap-3 text-2xl font-extrabold'><CalendarDays className='text-gold-500' /> Upcoming Events</h2>
            <Link to='/media/events' className='flex items-center gap-1 text-sm font-bold hover:text-navy-700'>View All Events <ArrowRight size={16} /></Link>
          </div>
          <div className='mt-6 grid gap-5 md:grid-cols-2'>
            {events.upcoming.map((e, i) => (<Reveal key={e.title} delay={i * 120}><EventCard e={e} /></Reveal>))}
          </div>
          <Reveal className='mt-5'><MessageCard /></Reveal>
        </div>

        <aside className='h-fit rounded-3xl bg-linear-to-br from-navy-900 to-navy-950 p-6 text-white shadow-xl'>
          <h2 className='flex items-center gap-2 text-xl font-bold'><Zap className='text-gold-300' /> Quick Access</h2>
          <ul className='mt-4 divide-y divide-white/15'>
            {quickAccess.map((q) => (
              <li key={q.label}>
                {q.to ? (
                  <Link to={q.to} className='flex items-center justify-between py-3 font-medium hover:text-gold-300'>{q.label}<ChevronRight size={18} className='text-gold-300' /></Link>
                ) : (
                  <a href={q.href} className='flex items-center justify-between py-3 font-medium hover:text-gold-300'>{q.label}<ChevronRight size={18} className='text-gold-300' /></a>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

function MembersSection() {
  return (
    <section className='px-5 pb-16 pt-6'>
      <div className='relative mx-auto max-w-7xl rounded-[2rem] bg-white py-10 shadow-xl ring-1 ring-black/5'>
        <span className='absolute -top-4 left-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-400 to-gold-300 px-5 py-2 text-sm font-bold text-navy-950 shadow'>
          <Handshake size={18} /> Our Institutional Members
        </span>
        <Marquee seconds={institutionalMembers.length * 3}>
          {institutionalMembers.map((m) => (
            <div key={m.name} className='flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-white p-3 shadow-sm'>
              <img
                src={memberLogo(m.file)}
                alt={m.name}
                loading='lazy'
                onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
                className='max-h-full max-w-full object-contain grayscale transition duration-300 hover:grayscale-0'
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <StatsBand />
      <EventsSection />
      <MembersSection />
    </>
  )
}
