import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronDown, Menu, User, X } from 'lucide-react'
import Logo from './Logo'
import { nav } from '@/data/site'

const matches = (pathname, to) => (to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(to + '/'))
const isActive = (item, pathname) =>
  item.to ? matches(pathname, item.to) : item.menu.some((s) => s.links.some(([, to]) => matches(pathname, to)))

const pill = 'flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition'

function DesktopNav({ pathname }) {
  return (
    <nav aria-label='Main' className='hidden xl:block'>
      <ul className='flex items-center gap-1'>
        {nav.map((item) => {
          const active = isActive(item, pathname)
          const style = `${pill} ${
            active ? 'bg-linear-to-r from-gold-400 to-gold-300 text-navy-950 shadow' : 'text-navy-900 hover:bg-navy-900/5'
          }`
          return (
            <li key={item.label} className='group relative'>
              {item.to ? (
                <Link to={item.to} className={style}>{item.label}</Link>
              ) : (
                <button type='button' className={style} aria-haspopup='true'>
                  {item.label}
                  <ChevronDown size={14} className='transition group-hover:rotate-180 group-focus-within:rotate-180' />
                </button>
              )}
              {item.menu && (
                <div className='invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100'>
                  <div className='flex w-max gap-8 rounded-2xl border-t-4 border-gold-400 bg-white p-5 shadow-2xl ring-1 ring-black/5'>
                    {item.menu.map((section, i) => (
                      <div key={i}>
                        {section.title && (
                          <p className='mb-2 px-3 text-xs font-bold uppercase tracking-widest text-[#9a6b00]'>{section.title}</p>
                        )}
                        <ul>
                          {section.links.map(([label, to]) => (
                            <li key={to}>
                              <Link to={to} className='block whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium hover:bg-cream'>
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function MobileNav({ open, onClose }) {
  const [section, setSection] = useState(null)
  if (!open) return null
  return (
    <div className='fixed inset-0 z-50 overflow-y-auto bg-navy-950/95 px-6 py-6 text-white xl:hidden' role='dialog' aria-modal='true'>
      <div className='flex items-center justify-between'>
        <Logo />
        <button type='button' onClick={onClose} aria-label='Close menu' className='rounded-full p-2 hover:bg-white/10'>
          <X size={28} />
        </button>
      </div>
      <ul className='mt-8'>
        {nav.map((item) => (
          <li key={item.label} className='border-b border-white/10'>
            {item.to ? (
              <Link to={item.to} onClick={onClose} className='block py-4 text-lg font-semibold'>{item.label}</Link>
            ) : (
              <>
                <button
                  type='button'
                  onClick={() => setSection(section === item.label ? null : item.label)}
                  aria-expanded={section === item.label}
                  className='flex w-full items-center justify-between py-4 text-left text-lg font-semibold'
                >
                  {item.label}
                  <ChevronDown className={`transition ${section === item.label ? 'rotate-180' : ''}`} />
                </button>
                {section === item.label && (
                  <div className='space-y-4 pb-4 pl-3'>
                    {item.menu.map((s, i) => (
                      <div key={i}>
                        {s.title && <p className='mb-1 text-xs font-bold uppercase tracking-widest text-gold-300'>{s.title}</p>}
                        {s.links.map(([label, to]) => (
                          <Link key={to} to={to} onClick={onClose} className='block py-2 text-blue-100'>{label}</Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
      <Link
        to='/membership/individual-signup'
        onClick={onClose}
        className='mt-8 flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold-500 to-gold-300 py-4 font-bold text-navy-950'
      >
        <User size={18} /> Join CSZ
      </Link>
    </div>
  )
}

export default function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className='sticky top-0 z-40 overflow-visible border-b border-black/5 bg-white/90 backdrop-blur-md'>
        <div className='pointer-events-none absolute -right-16 -top-12 h-28 w-80 -rotate-6 rounded-full bg-linear-to-l from-gold-300/70 to-transparent' />
        <div className='relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3'>
          <Link to='/' aria-label='Computer Society of Zimbabwe home'><Logo /></Link>
          <DesktopNav pathname={pathname} />
          <div className='flex items-center gap-2'>
            <Link
              to='/membership/individual-signup'
              className='hidden items-center gap-2 rounded-full bg-linear-to-r from-gold-500 to-gold-300 px-5 py-2.5 text-sm font-bold text-navy-950 shadow-md transition hover:brightness-110 xl:inline-flex'
            >
              <User size={16} /> Join CSZ <ArrowRight size={16} />
            </Link>
            <button type='button' onClick={() => setOpen(true)} aria-label='Open menu' className='rounded-full p-2 hover:bg-navy-900/5 xl:hidden'>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  )
}
