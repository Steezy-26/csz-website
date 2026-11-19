import { Eye, Target } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { ethos } from '@/data/content'
import { historyIntro, presidents, awards } from '@/data/history'
import { council, secretariat, chapters } from '@/data/people'
import { asset } from '@/data/assets'

const wrap = 'mx-auto max-w-6xl px-5'

export function Ethos() {
  return (
    <>
      <PageHero eyebrow='About Us' title='Our ethos' />
      <section className='bg-white py-16'>
        <div className={wrap}>
          <Reveal><p className='max-w-3xl text-xl font-semibold leading-relaxed'>{ethos.intro}</p></Reveal>
          <div className='mt-10 grid gap-6 md:grid-cols-2'>
            {[['Vision', Eye, ethos.vision], ['Mission', Target, ethos.mission]].map(([title, Icon, text], i) => (
              <Reveal key={title} delay={i * 120} className='rounded-3xl bg-linear-to-br from-navy-900 to-navy-950 p-8 text-white shadow-xl'>
                <Icon className='text-gold-300' size={36} />
                <h2 className='mt-4 text-2xl font-bold text-gold-300'>{title}</h2>
                <p className='mt-3 text-blue-50/90'>{text}</p>
              </Reveal>
            ))}
          </div>
          <h2 className='mt-14 text-3xl font-extrabold'>Our values</h2>
          <ul className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {ethos.values.map((v, i) => (
              <Reveal as='li' key={v} delay={i * 80} className='flex items-center gap-4 rounded-2xl border border-gold-300 bg-linear-to-br from-white to-cream p-5 text-lg font-bold'>
                <span className='grid size-10 place-items-center rounded-full bg-gold-400 text-navy-950'>{i + 1}</span>
                {v}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export function History() {
  return (
    <>
      <PageHero eyebrow='About Us' title='Our history' />
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-4xl px-5'>
          <p className='text-lg leading-relaxed text-navy-900/90'>{historyIntro}</p>
          <h2 className='mt-14 text-3xl font-extrabold'>Past presidents</h2>
          <div className='mt-6 overflow-x-auto rounded-2xl border'>
            <table className='w-full text-left text-sm'>
              <thead className='bg-navy-900 text-white'>
                <tr><th className='px-4 py-3'>Year</th><th className='px-4 py-3'>President</th></tr>
              </thead>
              <tbody>
                {presidents.map(([year, name, late]) => (
                  <tr key={year} className='odd:bg-white even:bg-cream/60'>
                    <td className='px-4 py-2 font-semibold'>{year}</td>
                    <td className='px-4 py-2'>{name}{late && ' *'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className='mt-2 text-sm text-navy-900/70'>* deceased</p>

          <h2 className='mt-14 text-3xl font-extrabold'>Past awards</h2>
          <div className='mt-6 space-y-3'>
            {awards.map((a) => (
              <details key={a.title} className='group rounded-2xl border bg-white open:shadow-md'>
                <summary className='flex cursor-pointer list-none items-center justify-between px-5 py-4 text-lg font-bold'>
                  {a.title}
                  <span className='text-gold-500 transition group-open:rotate-45' aria-hidden='true'>+</span>
                </summary>
                <div className='px-5 pb-5'>
                  <table className='w-full text-left text-sm'>
                    <tbody>
                      {a.rows.map(([y, w]) => (
                        <tr key={y} className='border-t'><td className='w-28 py-2 font-semibold'>{y}</td><td className='py-2'>{w}</td></tr>
                      ))}
                    </tbody>
                  </table>
                  {a.note && <p className='mt-3 text-sm italic text-navy-900/70'>{a.note}</p>}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const groups = {
  council: { title: 'Council', list: council },
  secretariat: { title: 'Secretariat', list: secretariat },
  harare: { title: 'Harare Chapter', list: chapters.harare },
  bulawayo: { title: 'Bulawayo Chapter', list: chapters.bulawayo },
  wictz: { title: 'WICTZ Chapter', list: chapters.wictz },
}

const initials = (name) => name.split(' ').filter((w) => /^[A-Z]/.test(w) && !['Dr', 'Prof'].includes(w)).slice(0, 2).map((w) => w[0]).join('')

export function People({ group }) {
  const { title, list } = groups[group]
  return (
    <>
      <PageHero eyebrow='CSZ People' title={title} />
      <section className='bg-linear-to-b from-white to-cream py-16'>
        <div className={`${wrap} grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
          {list.map((p, i) => (
            <Reveal as='figure' key={p.name + p.role} delay={(i % 4) * 90} className='overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl'>
              <div className='relative aspect-square bg-navy-900/5'>
                <span className='absolute inset-0 grid place-items-center text-5xl font-extrabold text-navy-900/20'>{initials(p.name)}</span>
                <img src={asset(p.img)} alt={p.name} loading='lazy' onError={(e) => { e.currentTarget.style.display = 'none' }} className='absolute inset-0 size-full object-cover' />
              </div>
              <figcaption className='p-4'>
                <p className='font-bold'>{p.name}</p>
                <p className='text-sm font-semibold text-[#8a6212]'>{p.role}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
