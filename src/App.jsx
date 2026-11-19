import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from '@/components/Layout'
import PageHero from '@/components/PageHero'
import Home from '@/pages/Home'
import SummitPage from '@/pages/SummitPage'
import SignupPage from '@/pages/SignupPage'
import { Ethos, History, People } from '@/pages/AboutPages'
import { AboutMembership, Benefits, Documents } from '@/pages/MembershipPages'
import { Services, Icdl, ELearner, MediaIndex, Events, Gallery, Careers, Contact } from '@/pages/OtherPages'

// Shown for any address that has no page yet
function NotFound() {
  const { pathname } = useLocation()
  return (
    <>
      <PageHero eyebrow={pathname} title='Page not found' />
      <section className='mx-auto max-w-6xl px-5 py-16'>
        <p className='text-navy-900/70'>Sorry, we could not find that page. Use the menu to find what you need.</p>
      </section>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path='about-us/our-ethos' element={<Ethos />} />
          <Route path='about-us/our-history' element={<History />} />
          <Route path='about-us/people/csz-council' element={<People group='council' />} />
          <Route path='about-us/people/csz-secretariat' element={<People group='secretariat' />} />
          <Route path='about-us/people/harare-chapter' element={<People group='harare' />} />
          <Route path='about-us/people/bulawayo-chapter' element={<People group='bulawayo' />} />
          <Route path='about-us/people/wictz-chapter' element={<People group='wictz' />} />
          <Route path='careers' element={<Careers />} />

          <Route path='members/about-membership' element={<AboutMembership />} />
          <Route path='computer-society-of-zimbabwe-member-benefits' element={<Benefits />} />
          <Route path='membership/individual-signup' element={<SignupPage type='individual' />} />
          <Route path='membership/institutional-signup' element={<SignupPage type='institutional' />} />
          <Route path='membership/sponsor-declaration' element={<SignupPage type='sponsor' />} />

          <Route path='media/events' element={<Events />} />
          <Route path='media/events/summit-2026' element={<SummitPage />} />
          <Route path='media/gallery' element={<Gallery />} />
          <Route path='summit-2023-presentations' element={<Documents id='summit2023' />} />

          <Route path='media' element={<MediaIndex />} />
          <Route path='media/press-office' element={<Documents id='press' />} />
          <Route path='media/csz-communication' element={<Documents id='communication' />} />

          <Route path='cpd' element={<Documents id='cpd' />} />
          <Route path='code-of-ethics' element={<Documents id='ethics' />} />
          <Route path='services' element={<Services />} />
          <Route path='icdl' element={<Icdl />} />
          <Route path='e-learner' element={<ELearner />} />

          <Route path='contact-us' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
