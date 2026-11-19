import { CalendarDays, Mail, MapPin, Phone, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import SummitTitle from '@/components/SummitTitle'
import Countdown from '@/components/Countdown'
import Reveal from '@/components/Reveal'
import { REGISTER_LINK, stats, streams, audience, delegateValue, formats, sponsorValue, contacts } from '@/data/summit'

const goldButton = 'inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-500 to-gold-300 px-7 py-3 font-bold text-navy-950 shadow-lg transition hover:brightness-110'
const dots = { backgroundImage: 'radial-gradient(circle, rgba(120,160,255,.5) 1px, transparent 1.5px)', backgroundSize: '28px 28px' }

function Hero() {
  return (
    <section className='relative isolate overflow-hidden bg-navy-950 px-5 pb-20 pt-16 text-center text-white'>
      <div className='absolute inset-0 -z-10 bg-radial-[at_50%_45%] from-navy-700/60 via-navy-900/60 to-navy-950' />
      <div className='absolute inset-0 -z-10 opacity-30' style={dots} />
      <div className='mx-auto max-w-5xl'>
        <Link to='/media/events' className='text-xs uppercase tracking-widest text-blue-100/80 hover:text-gold-300'>An event by the leading ICT professionals body in Zimbabwe</Link>
        <SummitTitle as='h1' tone='gold' className='mt-6 animate-fade-up text-6xl sm:text-8xl lg:text-9xl'>Summit<br />2026</SummitTitle>
        <div className='mx-auto mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-navy-900 sm:text-lg'>
          <span>18–22 NOV</span><span className='text-gold-500'>●</span><span>ELEPHANT HILLS RESORT, VICTORIA FALLS</span>
        </div>
        <p className='mt-12 text-xl font-bold'>FROM AMBITION TO IMPACT:</p>
        <p className='mx-auto mt-1 max-w-2xl uppercase text-blue-100/85'>Building Zimbabwe’s intelligent, secure &amp; trusted digital economy</p>
        <div className='mt-8 flex flex-wrap justify-center gap-4'>
          {streams.map(({ title, Icon }) => (
            <div key={title} className='flex w-28 flex-col items-center gap-2'>
              <div className='rounded-2xl border border-gold-500 p-4 text-gold-300'><Icon size={30} /></div>
              <span className='text-xs'>{title}</span>
            </div>
          ))}
        </div>
        <Countdown />
        <a href={REGISTER_LINK} className={`${goldButton} mt-10`}>Register to attend</a>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className='bg-navy-950 px-5 pb-16'>
      <div className='mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {stats.map(({ value, label }) => (
          <div key={label} className='flex items-center overflow-hidden rounded-2xl border border-white/30 bg-navy-900 text-white'>
            <span className='bg-white px-5 py-4 font-display text-xl font-extrabold text-navy-900'>{value}</span>
            <span className='px-4'>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className='bg-navy-950 px-5 pb-20 text-white'>
      <div className='mx-auto max-w-6xl'>
        <div className='rounded-3xl bg-linear-to-b from-navy-700 via-navy-900 via-40% to-navy-950 p-8 md:p-14'>
          <SummitTitle tone='white' className='text-4xl md:text-6xl'>From<br />Ambition<br />to Impact</SummitTitle>
          <p className='mt-8 max-w-2xl rounded-xl bg-white p-5 text-lg font-bold text-navy-900'>
            Zimbabwe’s implementation-focused platform for the leaders who govern, fund, build, secure and operate the digital economy.
          </p>
          <h3 className='mt-10 font-display text-xl font-bold'>Why this Summit. Why now.</h3>
          <p className='mt-4 max-w-3xl font-semibold'>
            Zimbabwe’s digital ambitions are accelerating. Artificial intelligence is moving onto national and board agendas, but adoption depends on compute capacity, trusted data, resilient infrastructure, skills, investment and responsible governance. Meanwhile, cyber threats, digital fraud and privacy expectations are intensifying.
          </p>
          <p className='mt-4 max-w-3xl text-sm text-blue-100/85'>
            The CSZ Annual Summit 2026 moves the conversation from policy ambition and technology promise to implementation, partnerships and measurable impact. It brings government, regulators, business leaders, practitioners, academia, innovators and solution providers into one purposeful national forum.
          </p>
        </div>
        <div className='mt-6 flex flex-col gap-8 rounded-3xl bg-gold-500 p-8 text-navy-950 md:flex-row md:items-end md:p-12'>
          <div className='flex-1'>
            <SummitTitle tone='navy' className='text-3xl md:text-5xl'>The Summit Promise</SummitTitle>
            <p className='mt-6 max-w-lg font-medium'>
              Delegates will gain decisions they can make, tools they can use, people they can call and opportunities they can pursue. Partners will build authority, qualified relationships and evidence of meaningful engagement.
            </p>
          </div>
          <figure className='text-center'>
            <img src='https://www.csz.org.zw/wp-content/uploads/2025/11/rsz_dsc_7103.jpg' alt='Kudzai Zisengwe' className='mx-auto h-48 rounded-2xl object-cover' />
            <figcaption className='mt-2 rounded-lg bg-brand-red px-3 py-1 text-xs font-bold text-white'>KUDZAI ZISENGWE, CONFERENCE CONVENER</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

function Streams() {
  return (
    <section className='bg-white px-5 py-20'>
      <div className='mx-auto max-w-6xl'>
        <SummitTitle tone='goldSolid' className='text-4xl md:text-6xl'>Five<br />immersive<br />streams</SummitTitle>
        <div className='mt-12 grid gap-6 md:grid-cols-2'>
          {streams.map(({ title, text, Icon }, i) => (
            <Reveal key={title} delay={(i % 2) * 120} className='overflow-hidden rounded-3xl bg-navy-900 text-white shadow-lg transition hover:-translate-y-1'>
              <div className='flex items-center gap-3 bg-gold-500 px-6 py-4'>
                <span className='grid size-11 place-items-center rounded-full bg-white text-navy-900'><Icon size={22} /></span>
                <h3 className='text-xl font-bold text-navy-950'>{title}</h3>
              </div>
              <p className='p-6 text-white/90'>{text}</p>
            </Reveal>
          ))}
          <div className='flex min-h-48 items-end rounded-3xl bg-linear-to-br from-navy-900 to-navy-950 p-6'>
            <SummitTitle as='p' tone='white' className='text-xl'>One connected<br />digital economy</SummitTitle>
          </div>
        </div>
      </div>
    </section>
  )
}

function Audience() {
  return (
    <section>
      <div className='bg-navy-950 px-5 py-20 text-white'>
        <div className='mx-auto max-w-6xl'>
          <SummitTitle tone='white' className='text-4xl md:text-6xl'>Who should<br />be in the room</SummitTitle>
          <ul className='mt-10 max-w-2xl divide-y divide-white/20'>
            {audience.map((item) => (<li key={item} className='flex gap-4 py-4'><Users className='shrink-0 text-gold-300' />{item}</li>))}
          </ul>
        </div>
      </div>
      <div className='bg-gold-500 px-5 py-20 text-navy-950'>
        <div className='mx-auto max-w-6xl'>
          <SummitTitle tone='navy' className='text-4xl md:text-6xl'>Value to<br />delegates</SummitTitle>
          <div className='mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {delegateValue.map(({ title, text }) => (
              <div key={title}><h3 className='font-bold'>{title}</h3><p className='mt-1 text-navy-900/90'>{text}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Format() {
  return (
    <section className='bg-linear-to-b from-navy-950 to-navy-900 px-5 py-20 text-white'>
      <div className='mx-auto max-w-6xl'>
        <SummitTitle tone='gold' className='text-4xl md:text-6xl'>Outcome<br />oriented,<br />by design</SummitTitle>
        <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {formats.map(({ title, text, Icon }, i) => (
            <Reveal key={title} delay={(i % 4) * 90} className='rounded-2xl border border-gold-500/30 bg-white/5 p-5 backdrop-blur'>
              <span className='grid size-11 place-items-center rounded-full bg-cream text-navy-900'><Icon size={22} /></span>
              <h3 className='mt-4 font-bold text-gold-300'>{title}</h3>
              <p className='mt-1 text-sm text-white/80'>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section className='bg-linear-to-b from-[#f6ebdd] to-gold-500 px-5 py-20'>
      <div className='mx-auto max-w-6xl'>
        <SummitTitle tone='navy' className='text-3xl md:text-5xl'>Value for sponsors<br />+ strategic partners</SummitTitle>
        <div className='mt-10 grid gap-5 sm:grid-cols-2'>
          {sponsorValue.map(({ title, text, Icon }) => (
            <div key={title} className='flex gap-4 rounded-2xl bg-white/60 p-5 backdrop-blur'>
              <Icon className='mt-1 shrink-0 text-navy-900' size={30} />
              <div><h3 className='font-bold uppercase text-navy-900'>{title}</h3><p className='mt-1 text-navy-900/80'>{text}</p></div>
            </div>
          ))}
        </div>
        <a href={`mailto:${contacts[1].email}?subject=CSZ%20Summit%202026%20Partnership`} className='mt-10 inline-block rounded-full bg-navy-900 px-8 py-3 font-bold text-white transition hover:bg-navy-950'>Become a partner</a>
      </div>
    </section>
  )
}

function Venue() {
  return (
    <section className='bg-white px-5 py-20'>
      <div className='mx-auto max-w-6xl'>
        <SummitTitle tone='goldSolid' className='text-4xl md:text-6xl'>Venue<br />+ dates</SummitTitle>
        <div className='mt-10 grid gap-6 md:grid-cols-2'>
          <div className='rounded-3xl bg-navy-900 p-8 text-white'><CalendarDays className='text-gold-300' /><h3 className='mt-4 font-display text-xl'>18–22 November 2026</h3></div>
          <div className='rounded-3xl bg-navy-900 p-8 text-white'><MapPin className='text-gold-300' /><h3 className='mt-4 font-display text-xl'>Elephant Hills Resort</h3><p className='text-white/80'>Victoria Falls, Zimbabwe</p></div>
        </div>
        <p className='mt-8 text-navy-900/70'>Full programme and speaker line-up coming soon.</p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className='bg-linear-to-r from-navy-900 to-brand-red px-5 py-20 text-center text-white'>
      <h2 className='text-3xl font-bold md:text-4xl'>Attend. Partner. Speak. Exhibit.</h2>
      <p className='mx-auto mt-3 max-w-xl text-white/90'>Help turn Zimbabwe’s Digital Ambition into practical, secure and trusted impact.</p>
      <div className='mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2'>
        {contacts.map(({ name, phone, email }) => (
          <div key={email} className='rounded-2xl bg-white/15 p-6 text-left backdrop-blur'>
            <p className='font-bold'>{name}</p>
            <p className='mt-2 flex items-center gap-2 text-sm'><Phone size={16} />{phone}</p>
            <a href={`mailto:${email}`} className='mt-1 flex items-center gap-2 text-sm hover:underline'><Mail size={16} />{email}</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function SummitPage() {
  return (<><Hero /><Stats /><About /><Streams /><Audience /><Format /><Partners /><Venue /><Contact /></>)
}
