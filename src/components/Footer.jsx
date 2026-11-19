import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { footerLinks, otherLinks, socials } from '@/data/site'
import { contact } from '@/data/content'

export default function Footer() {
  return (
    <footer className='relative overflow-hidden bg-navy-950 text-blue-100/90'>
      <div className='pointer-events-none absolute -left-28 -top-28 h-64 w-96 rounded-full bg-linear-to-br from-gold-400/50 to-transparent' />
      <div className='pointer-events-none absolute -bottom-28 -right-28 h-64 w-96 rounded-full bg-linear-to-tl from-gold-400/50 to-transparent' />
      <div className='relative mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr]'>
        <div>
          <Logo dark />
          <p className='mt-5 italic'>Advancing ICT Professionalism in Zimbabwe</p>
          <div className='mt-3 h-1 w-28 rounded bg-gold-400' />
          <ul className='mt-6 flex gap-3'>
            {socials.map(([short, name, href]) => (
              <li key={name}>
                <a href={href} aria-label={name} target='_blank' rel='noreferrer'
                  className='grid size-10 place-items-center rounded-full bg-white/10 text-sm font-bold transition hover:bg-gold-400 hover:text-navy-950'>
                  {short}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-white'>Quick Links</h3>
          <ul className='mt-4 space-y-2 text-sm'>
            {footerLinks.map(([label, to]) => (
              <li key={to}><Link to={to} className='hover:text-gold-300'>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-white'>Contact Us</h3>
          <ul className='mt-4 space-y-3 text-sm'>
            <li className='flex gap-3'><MapPin size={18} className='mt-0.5 shrink-0 text-gold-300' />{contact.address.join(', ')}</li>
            <li className='flex gap-3'><Phone size={18} className='mt-0.5 shrink-0 text-gold-300' />{contact.phones.slice(0, 2).join(' / ')}</li>
            <li className='flex gap-3'><Mail size={18} className='mt-0.5 shrink-0 text-gold-300' />
              <a href={`mailto:${contact.emails[0]}`} className='hover:text-gold-300'>{contact.emails[0]}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-white'>Other Links</h3>
          <ul className='mt-4 space-y-2 text-sm'>
            {otherLinks.map(([label, href]) => (
              <li key={label}><a href={href} target='_blank' rel='noreferrer' className='hover:text-gold-300'>{label}</a></li>
            ))}
            <li><Link to='/media/csz-communication' className='hover:text-gold-300'>Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <p className='relative border-t border-white/10 py-5 text-center text-xs'>
        © {new Date().getFullYear()} Computer Society of Zimbabwe. All rights reserved.
      </p>
    </footer>
  )
}
