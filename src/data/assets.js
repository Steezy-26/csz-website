export const OLD_SITE_BASE = 'https://www.csz.org.zw/wp-content/uploads/'
// While the old site is online this works as it is.
// After running `npm run assets`, change it to '/images/uploads/'.
export const ASSET_BASE = OLD_SITE_BASE
export const asset = (path) => ASSET_BASE + path

// Member logos live in public/images/members, named exactly as in members.js
export const memberLogo = (file) => '/images/members/' + file

// The hero pictures, grouped by slanted panel. A panel with two pictures cross-fades between them.
// `pos` is the focal point (x y) so the important part of the photo stays in view.
export const heroPanels = [
  [
    { src: '/images/hero/hero-hall.jpg', alt: 'Delegates with laptops at a CSZ Summer School session', pos: '60% 40%' },
    { src: '/images/hero/hero-panel.jpg', alt: 'Speakers in a panel discussion at a CSZ event', pos: '58% 50%' },
  ],
  [
    { src: '/images/hero/hero-servers.jpg', alt: 'A woman holding a laptop in front of server racks', pos: '80% 40%' },
    { src: '/images/hero/hero-circuit.jpg', alt: 'Close-up of a computer circuit board', pos: '50% 40%' },
  ],
  [
    { src: '/images/hero/hero-question.jpg', alt: 'A delegate asking a question at a CSZ event', pos: '40% 40%' },
  ],
]

// Other files the download script copies from the old site
export const extraAssets = [
  '2022/09/ICDL.png',
  '2022/09/workforce-300x143.png',
  '2022/09/Professional-e1663250007207-300x146.jpeg',
  '2022/09/digital-300x153.jpeg',
  '2022/09/Digita-ctz-300x152.jpeg',
  '2022/09/e-learner-300x68.png',
  '2022/09/Elearner-e1663251042513-298x300.jpeg',
  '2023/07/CPD-Manual.pdf',
  '2023/05/CPD-Personal-Record.pdf',
  '2022/02/Code-of-Ethics-for-all-Individual-Members.pdf',
]
