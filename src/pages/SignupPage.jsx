import { ClipboardList, FileCheck, UserCheck, Wallet } from 'lucide-react'
import PageHero from '@/components/PageHero'
import TallyEmbed from '@/components/TallyEmbed'
import { TALLY } from '@/data/tally'

const pages = {
  individual: { title: 'Individual signup', formId: TALLY.individual },
  sponsor: { title: 'Sponsor declaration', formId: TALLY.sponsor },
  institutional: { title: 'Institutional signup', formId: TALLY.institutional },
}

const checklist = [
  { Icon: FileCheck, text: 'A certified copy of your ID' },
  { Icon: ClipboardList, text: 'Certified copies of certificates and transcripts (students: a valid student ID card)' },
  { Icon: UserCheck, text: 'Two sponsors, unless you are applying as a student' },
  { Icon: Wallet, text: 'Proof of payment of the non-refundable processing fee (students: proof of the first year subscription)' },
]

export default function SignupPage({ type = 'individual' }) {
  const { title, formId } = pages[type]
  const ready = formId && !formId.startsWith('REPLACE')
  return (
    <>
      <PageHero eyebrow='Membership' title={title} />
      <section className='bg-linear-to-b from-white to-cream px-5 py-12'>
        <div className='mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_20rem]'>
          <div className='rounded-3xl bg-white p-4 shadow-lg ring-1 ring-black/5 sm:p-8'>
            {ready ? (
              <TallyEmbed formId={formId} title={title} />
            ) : (
              <p className='text-navy-900/80'>
                The online form is coming soon. Please contact the secretariat, or{' '}
                <a className='font-semibold text-navy-700 underline' href='https://www.csz.org.zw/?ddownload=902'>download the current PDF form</a>.
              </p>
            )}
          </div>
          {type === 'individual' && (
            <aside className='h-fit rounded-3xl bg-linear-to-br from-navy-900 to-navy-950 p-6 text-white'>
              <h2 className='text-xl font-bold text-gold-300'>Before you start</h2>
              <ul className='mt-4 space-y-4 text-sm'>
                {checklist.map(({ Icon, text }) => (
                  <li key={text} className='flex gap-3'><Icon className='mt-0.5 shrink-0 text-gold-300' size={20} />{text}</li>
                ))}
              </ul>
              <p className='mt-6 text-sm text-white/80'>
                Need help? Call the secretariat on 242 250489/90 or email membership@csz.org.zw. You can also visit No. 6 Baines Ave, Harare.
              </p>
            </aside>
          )}
        </div>
      </section>
    </>
  )
}
