// Menu groups follow the new design: Home, About Us, Membership, Events, News & Media, Resources, Contact Us.
// Every page keeps its address from the old site, so existing links still work.
const membershipOverviewLinks = [
  ['About Membership', '/members/about-membership'],
  ['Member Benefits', '/computer-society-of-zimbabwe-member-benefits'],
]

const membershipSignupLinks = [
  ['Individual Signup', '/membership/individual-signup'],
  ['Institutional Signup', '/membership/institutional-signup'],
]

export const membershipLinks = [...membershipOverviewLinks, ...membershipSignupLinks]

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', menu: [
    { links: [['Our Ethos', '/about-us/our-ethos'], ['Our History', '/about-us/our-history'], ['Careers @ CSZ', '/careers']] },
    { title: 'CSZ People', links: [
      ['Council', '/about-us/people/csz-council'], ['Secretariat', '/about-us/people/csz-secretariat'],
      ['Harare Chapter', '/about-us/people/harare-chapter'], ['Bulawayo Chapter', '/about-us/people/bulawayo-chapter'],
      ['WICTZ Chapter', '/about-us/people/wictz-chapter'],
    ] },
  ] },
  { label: 'Membership', menu: [
    { links: membershipOverviewLinks },
    { title: 'Sign up', links: membershipSignupLinks },
  ] },
  { label: 'Events', menu: [{ links: [
    ['All Events', '/media/events'], ['Summit 2026', '/media/events/summit-2026'],
    ['Gallery', '/media/gallery'], ['Summit 2023 Presentations', '/summit-2023-presentations'],
  ] }] },
  { label: 'News & Media', menu: [{ links: [
    ['Media Overview', '/media'], ['Press Office', '/media/press-office'], ['CSZ Communication', '/media/csz-communication'],
  ] }] },
  { label: 'Resources', menu: [{ links: [
    ['CPD', '/cpd'], ['Code of Ethics', '/code-of-ethics'], ['Services', '/services'], ['ICDL', '/icdl'], ['E-Learner', '/e-learner'],
  ] }] },
  { label: 'Contact Us', to: '/contact-us' },
]

export const quickAccess = [
  // Confirm this address with CSZ. It is the online membership address named on the application form.
  { label: 'Membership Portal', href: 'http://membership.csz.org.zw' },
  { label: 'Events Calendar', to: '/media/events' },
  { label: 'News & Media', to: '/media/press-office' },
  { label: 'Resources', to: '/cpd' },
  { label: 'Contact Us', to: '/contact-us' },
]

export const footerLinks = [
  ['About Us', '/about-us/our-ethos'], ['Membership', '/members/about-membership'], ['Events', '/media/events'],
  ['News & Media', '/media'], ['Resources', '/cpd'], ['Contact Us', '/contact-us'],
]

export const otherLinks = [
  ['ICDL Africa', 'http://www.icdlafrica.org/'],
  ['ECDL Foundation', 'http://www.ecdl.org/'],
  ['Computers 4 Kids', 'http://computers4kids.co.za/'],
]

export const socials = [
  ['f', 'Facebook', 'https://www.facebook.com/ComputerSocietyofZimbabwe'],
  ['X', 'X (Twitter)', 'https://twitter.com/compsocietyzim'],
  ['in', 'LinkedIn', 'https://www.linkedin.com/company/computer-society-of-zimbabwe'],
  ['ig', 'Instagram', 'https://www.instagram.com/compsocietyzim/'],
]
