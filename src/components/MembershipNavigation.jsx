import { Link, useLocation } from 'react-router-dom'
import { membershipLinks } from '@/data/site'

export default function MembershipNavigation() {
  const { pathname } = useLocation()

  return (
    <nav aria-label='Membership pages' className='border-b border-black/5 bg-white px-5'>
      <ul className='mx-auto flex max-w-7xl gap-2 overflow-x-auto py-3'>
        {membershipLinks.map(([label, to]) => {
          const active = pathname === to
          return (
            <li key={to} className='shrink-0'>
              <Link
                to={to}
                aria-current={active ? 'page' : undefined}
                className={`block rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                  active ? 'bg-gold-300 text-navy-950' : 'text-navy-900 hover:bg-cream'
                }`}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
