import { asset } from './assets'

const OLD = 'https://www.csz.org.zw/'

export const ethos = {
  intro: `Computer Society of Zimbabwe (CSZ) is an Internationally recognized professional body for Zimbabwe’s community of ICT professionals.`,
  vision: `To be the trusted industry body, anchored on professional knowledge driving the ICT ecosystem in Zimbabwe`,
  mission: `To champion the development of the ICT industry in Zimbabwe by establishing beneficial relationships and providing independent professional counsel for the benefit of members, government, industry and society at large. To drive ICT content development, collection and dissemination of information, awareness, knowledge, research and standards.`,
  values: [`Integrity/Ethics`, `Accountability`, `Collaboration`, `Commitment`, `Leadership`, `Innovation`],
}

export const icdl = {
  link: 'https://icdlafrica.org/',
  paragraphs: [
    `ICDL is the world’s leading computer skills certification. To date more than 15 million people have engaged with the ICDL programme, in over 100 countries.`,
    `ICDL was established in Europe in 1997 and back then it was known as the European Computer Driving Licence (ECDL). In 1999 the Computer Society of Zimbabwe was awarded the licence to run the ICDL operations in Zimbabwe and Zambia becoming the second African country after South Africa.`,
    `Prior to 2013 candidates needed to write all 7 modules in order to get certified. 2013 saw the introduction of profile based certification, where a candidate can choose specific modules based on their requirements and interests. Since then, there has also been continuous introduction of new modules in line with the emerging technologies. These have been categorised as below:`,
  ],
  categories: [
    { label: `ICDL Workforce`, img: '2022/09/workforce-300x143.png', href: 'https://icdl.org/workforce/icdl-core/' },
    { label: `ICDL Professional`, img: '2022/09/Professional-e1663250007207-300x146.jpeg', href: 'https://icdl.org/professional/icdl-professional/' },
    { label: `ICDL Digital Citizen`, img: '2022/09/digital-300x153.jpeg', href: 'https://icdl.org/digital-citizen/icdl-digital-citizen/' },
    { label: `ICDL Digital Student`, img: '2022/09/Digita-ctz-300x152.jpeg', href: 'https://icdl.org/digital-student/icdl-digital-student/' },
  ],
}

export const eLearner = {
  paragraphs: [
    `Our 21st Century digital skills curriculum is a benchmark for setting new standards in ICT integration for Primary students and Teachers. e-Learner is a programme which equips candidates with a solid foundation for progressing on to the ICDL qualification. It is a certified, modular course of progressive ICT skills utilising courseware from e-Learner. Using a unique and integrated approach, e-Learner provides the means to acquire essential ICT skills across a spectrum of 7 units.`,
    `It does not only teach ICT skills but also integrates current content thereby ensuring that lessons are relevant and interesting.`,
  ],
  logo: '2022/09/e-learner-300x68.png',
  photo: '2022/09/Elearner-e1663251042513-298x300.jpeg',
  trial: { label: `Register for a 3 day trial and get started`, href: 'https://classesonline.mobi/' },
}

export const membershipTypes = [
  { id: 'professional', title: 'Professional',
    intro: `A person to be elected to the grade of Professional Member shall, at the time of application or nomination, satisfy the Membership Moderator that he has, by his attainments, acquired an established reputation as a professional practitioner in the field of Information Processing and meets the following criteria:`,
    criteria: [
      `Provides evidence of high personal achievement or status in the field of Information Processing,`,
      `Is sponsored by two Members of the Society who will be asked to confirm their knowledge of the candidate and of his adherence to the Society’s code of conduct, and`,
      `Attends an admissions interview and provides oral proof of his suitability for acceptance as a Professional Member.`,
      `Has the requisite number of qualifying points for the grade of Professional Member.`,
      `Agrees to undertake Continuing Professional Development.`,
    ] },
  { id: 'associate', title: 'Associate',
    intro: `A person to be elected to the grade of Associate Member shall, at the time of application or nomination, satisfy the Membership Committee that he meets the following criteria:`,
    criteria: [
      `Is sponsored by two Members of the Society who will be asked to confirm their knowledge of the candidate`,
      `Has the requisite number of qualifying points for the grade of Associate Member`,
    ] },
  { id: 'graduate', title: 'Graduate',
    intro: `A person to be elected as Graduate Member shall, at the time of application or nomination, satisfy the Membership Committee that he:`,
    criteria: [
      `Is sponsored by two Members of the Society who will be asked to confirm their knowledge of the candidate`,
      `Has the requisite number of qualifying points for the grade of Graduate Member.`,
    ] },
  { id: 'student', title: 'Student',
    intro: `A person to be elected as Student Member shall, at the time of application or nomination, satisfy both the Chapter Committee and the Membership Committee that he:`,
    criteria: [
      `Is a bona fide student registered at a recognized institution for tertiary education and is following an approved course of study leading to a degree, diploma or professional qualification recognized by the Society.`,
      `The applicant must be sponsored by two Voting members of the Society or by a senior member of academic staff from the Institution at which he is studying.`,
    ] },
  { id: 'affiliate', title: 'Affiliate',
    intro: `A person to be elected as an Affiliate Member shall, at the time of application or nomination, satisfy both the Chapter Committee and the Membership Committee that he has a genuine interest in the development and use of computers and in the general aims of the Society.`,
    criteria: [`No formal academic qualifications are required for admission to this grade, but the applicant must be sponsored by two Voting members of the Society.`] },
  { id: 'institutional', title: 'Institutional', institutional: true,
    intro: `A corporate or non-corporate body or other organization shall be eligible to become an INSTITUTIONAL MEMBER of the Society provided that:`,
    criteria: [
      `It gives such evidence as the Society may require of its interests in the aims of the Society,`,
      `It agrees to abide by the Codes of Ethics of the Society.`,
    ] },
]

export const benefitsIntro = `The Computer Society of Zimbabwe relies largely on the efforts of its volunteers (members) throughout the country. What you get out of the CSZ therefore, to an extent, depends on what you put into it. The Society offers a channel through which members can help solve the social and technical problems of computing. Furthermore, increasingly government looks to the Computer Society of Zimbabwe for advice on computing matters and this input can only come from members of the Computer Society in their various membership categories.`

export const benefits = [
  { title: `Professional Recognition`, text: `By using the respected letters “FCSZ” (Fellow), “PCSZ” (Professional Member), “ACSZ®” (Associate Member) after one’s name, members are identified as belonging to a respected and recognized professional body.` },
  { title: `Career Advancement`, text: `Increasingly organisations recognize CSZ membership for their ICT staff as a prerequisite for recruitment, promotion and career advancement.` },
  { title: `Technical Committees and Board nominations`, text: `CSZ works with Industry, Government through the Ministry of ICT and from time to time receives requests for its members to participate in Advisory, Technical committees, working groups, Boards and other industry and national events. Members therefore, have the opportunity to offer themselves for nomination.` },
  { title: `Networking`, text: `Seminars, workshops, access to professional online groups and other events provide opportunities for networking. CSZ Secretariat can assist to find a Special Interest Group or a specific event.` },
  { title: `Seminars and Workshops`, text: `These are offered in areas such as Cybersecurity, Artificial Intelligence, software testing, information security, business and systems analysis, enterprise architecture, project management, software and systems development and IT Service / talent management and many others.` },
  { title: `Reduced Entrance Fees`, text: `Pay less for many ICT exhibitions, seminars, conferences and workshops. Typical discounts of 10% – 20% offer substantial savings. Special invitations to associated functions and events are issued.` },
  { title: `Regular Chapter events`, text: `Regular communication containing information about events, projects and activities in the various chapters and ICT generally.` },
  { title: `Awards`, text: `Active involvement in the coveted IT Personality of the Year, Distinguished Service in ICT and other awards.` },
  { title: `International Recognition`, text: `CSZ membership grading and admission criteria is continuously evaluated in accordance with international practices and are maintained in line with these requirements.` },
  { title: `Expert Opinions`, text: `Relationships with other international societies (e.g. IFIP) mean that CSZ has access to best practices and top international experts.` },
  { title: `Product & Service Discounts`, text: `Members receive substantial product and / or service fee discounts from the numerous partners collaborating with the CSZ.` },
  { title: `Media Distribution`, text: `Professional Members receive the CSZ periodic online communication, magazine and other publications (as available), free. All members who wish to do so (i.e. upon application) receive access to the membership portal with extensive resources at no cost.` },
]

// iso: yyyy-mm-dd. to: optional internal link
export const events = {
  upcoming: [
    { title: `SUMMIT 2026`, iso: '2026-11-18', place: `Elephant Hills Resort, Victoria Falls`, to: '/media/events/summit-2026' },
    { title: `Annual ICT Cocktail`, iso: '2026-11-27', place: `Harare, Zimbabwe` },
  ],
  past: [
    { title: `CSZ Golf Tournament`, iso: '2026-08-21', place: `Harare, Zimbabwe` },
    { title: `CSZ Innovation Challenge`, iso: '2026-07-28', place: `Harare, Zimbabwe` },
    { title: `Nextcon 2026 (Inaugural)`, iso: '2026-07-15', place: `Radisson Blu Sandton, Johannesburg, SA` },
    { title: `Winter School`, iso: '2026-06-24', place: `Nyanga, Zimbabwe` },
    { title: `CSZ EXPO @ ZITF`, iso: '2026-04-20', place: `Bulawayo` },
    { title: `ICT Summit`, iso: '2025-10-14', place: `Radisson Blu Mosi-oa-Tunya, Livingstone, Zambia` },
    { title: `Golf Day`, iso: '2025-08-22', place: `The Country Club (in Newlands)` },
    { title: `ICT Summit 2024`, iso: '2024-11-13', place: `Elephant Hills Resort, Victoria Falls` },
  ],
}

const parse = (iso) => new Date(iso + 'T00:00:00')
export const fmtDate = (iso) => parse(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
export const dateParts = (iso) => {
  const d = parse(iso)
  return { month: d.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase(), day: d.getDate(), year: d.getFullYear() }
}

// These links still point at the old site. Copy the files before switching it off.
export const documents = {
  press: { eyebrow: 'News & Media', title: 'Press Office', items: [
    { title: `Daily News CSZ Supplement`, href: OLD + '?ddownload=1782', meta: `PDF, 16.2 MB` },
    { title: `Press release – At Protocol Appathon II`, href: OLD + '?ddownload=1404', meta: `PDF, 67.6 KB` },
    { title: `Summer School 2018 Fingaz editorial: Fourth Industrial Revolution with focus on everything ICT – the digital age & cyber security`, href: OLD + '?ddownload=933', meta: `PDF, 169.3 KB` },
  ] },
  communication: { eyebrow: 'News & Media', title: 'CSZ Communication', items: [
    { title: `CSZ Privacy Policy`, href: OLD + '?ddownload=2563', meta: `PDF, 379 KB` },
  ] },
  cpd: { eyebrow: 'Resources', title: 'CPD', items: [
    { title: `CPD Manual`, href: asset('2023/07/CPD-Manual.pdf'), meta: `PDF` },
    { title: `CPD Personal Record`, href: asset('2023/05/CPD-Personal-Record.pdf'), meta: `PDF` },
  ] },
  ethics: { eyebrow: 'Resources', title: 'Code of Ethics', items: [
    { title: `Code of Ethics for all Individual Members`, href: asset('2022/02/Code-of-Ethics-for-all-Individual-Members.pdf'), meta: `PDF` },
  ] },
  summit2023: { eyebrow: 'Events', title: 'Summit 2023 Presentations', items: [
    { title: `Agrippa Mugwagwa – Fintech Trends Shaping Digital Innovation in the New Age`, href: asset('2023/11/Agrippa-Mugwagwa-Fintech-Trends-Shaping-Digital-Innovation-in-the-New-Age.pptx'), meta: `PowerPoint` },
    { title: `Clarence Gama – Customer Centricity`, href: asset('2023/11/Clarence-Gama-Customer-Centricity.pptx'), meta: `PowerPoint` },
    { title: `Clement Sinyangwe – Presentation`, href: asset('2023/11/Clement-Sinyangwe-Presentation.pptx'), meta: `PowerPoint` },
    { title: `Dr Audrey Masizana – CSB Talk CSZ 2023 Botswana`, href: asset('2023/11/Dr-Audrey-Masizana-CSB-Talk-CSZ-2023-Botswana.pptx'), meta: `PowerPoint` },
    { title: `Dr Machengeta – Computer Society of Zimbabwe Presentation`, href: asset('2023/11/Dr-Machengeta-Computer-Society-of-Zimbabwe-Presentation.pptx'), meta: `PowerPoint` },
    { title: `Dr Matekaire – CSZ ICT Summit 2023 Presentation`, href: asset('2023/11/Dr-Matekaire-CSZ-ICT-Summit-2023-Presentation.pptx'), meta: `PowerPoint` },
    { title: `Gibson Mukarate – CSZ Summit 2023: Payments Landscape in Zimbabwe`, href: asset('2023/11/Gibson-Mukarate-CSZ-Summit-2023-Payments-Landscape-in-Zimbabwe.pptx'), meta: `PowerPoint` },
    { title: `Marlon Ralph – CSZ Health Presentation`, href: asset('2023/11/Marlon-Ralph-CSZ-Health-Presentation.pdf'), meta: `PDF` },
    { title: `Telco broadband and beyond: capabilities universe`, href: asset('2023/11/Telcobroadbandandbeyond-capabilities-universe.pptx'), meta: `PowerPoint` },
    { title: `Liquid CSZ MS Presentation 2023`, href: asset('2023/11/liquid-CSZ-MS-Presentation-2023.pptx'), meta: `PowerPoint` },
    { title: `Senele Goba – IITPSA Presentation`, href: asset('2023/11/Senele-Goba-IITPSA-Presentation.mp4'), meta: `Video` },
  ] },
}

export const galleryAlbums = [
  { title: `ICT Summit 2023`, href: OLD + 'envira/ict-summit-2023/' },
  { title: `Winter School 2023`, href: OLD + 'envira/winter-school-2023/' },
  { title: `ICT Summit 2021`, href: OLD + 'envira/ict-summit-2021/' },
  { title: `45th Anniversary Dinner`, href: OLD + 'envira/45th-anniversary-dinner/' },
  { title: `ICT Summit 2019`, href: OLD + 'envira/ict-summit-2019/' },
  { title: `ICT Summit 2018`, href: OLD + 'envira/ict-summit-2018/' },
]

export const careers = [
  { title: `Finance Manager`, location: `Harare`, published: `16 September 2024`, closed: `28 September 2024`, href: OLD + 'vacancies/finance-manager/' },
  { title: `Office Administrator`, location: `Harare`, published: `15 February 2024`, closed: `29 February 2024`, href: OLD + 'vacancies/office-administrator/' },
]

// The secretariat line and the email come from the membership application PDF
export const contact = {
  address: [`6 Baines Ave`, `Between Harare Street and Prince Edward Avenues Area`, `Harare`],
  phones: [`+263 08612 001800`, `+263 778 068 942`, `Secretariat: 242 250489/90`],
  hours: [`08h00 to 16h00 (Monday – Friday)`],
  emails: [`membership@csz.org.zw`],
}

export const messages = [
  { title: `Train Today, Protect Tomorrow.`, lines: [`A policy nobody reads protects nobody.`, `Make data protection part of your culture.`] },
  { title: `Lock It Down.`, lines: [`Weak passwords are an open door.`, `Strengthen yours today!`, `Cybersecurity starts with you.`] },
  { title: `See Something, Report Something.`, lines: [`Spot a data breach?`, `Report it immediately.`, `Delay costs trust, and compliance.`] },
  { title: `Keep Only What You Need.`, lines: [`Storage limitation means data has a shelf life.`, `Don’t hoard what you can’t justify.`] },
]

export function messageOfTheWeek(date = new Date()) {
  const week = Math.floor((date - new Date(date.getFullYear(), 0, 1)) / 604800000)
  return messages[week % messages.length]
}
