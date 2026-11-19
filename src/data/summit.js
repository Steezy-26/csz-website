import {
  Sparkles, ShieldCheck, CircleDollarSign, LockKeyhole, MousePointerClick,
  Presentation, Users, MessagesSquare, Lightbulb, CirclePlay, Rocket, Network,
  Handshake, Sprout, Brain, BadgeCheck, Briefcase, TrendingUp,
} from 'lucide-react'

// Replace with a real registration URL when CSZ has one
export const REGISTER_LINK = 'mailto:faith@csz.org.zw?subject=CSZ%20Summit%202026%20Registration'

export const stats = [
  { value: `20+`, label: `Speakers` },
  { value: `200+`, label: `Delegates` },
  { value: `5`, label: `Streams` },
  { value: `5`, label: `SADC Nations` },
]

export const streams = [
  { title: `AI + Compute`, Icon: Sparkles, text: `Zimbabwe's national AI agenda; enterprise and public-sector adoption; cloud, data centres and high-performance computing; connectivity and power; local data and solutions; skills; responsible AI; scaling pilots into value.` },
  { title: `Cybersecurity`, Icon: ShieldCheck, text: `National and enterprise resilience; critical infrastructure; AI-enabled threats and defence; incident readiness; digital fraud; board accountability; business continuity; workforce capability and professional standards.` },
  { title: `Fintech`, Icon: CircleDollarSign, text: `Payments and financial inclusion; digital identity; open and embedded finance; RegTech and SupTech; interoperability; fraud prevention; digital assets and trusted innovation.` },
  { title: `Data Protection`, Icon: LockKeyhole, text: `Data protection implementation; privacy by design; data governance; AI governance; biometrics; cross-border data flows; consumer confidence and responsible data use.` },
  { title: `Digital Experiences`, Icon: MousePointerClick, text: `Digital government and public-sector transformation; adoption of e-government and digital public services; citizen-centred service delivery; interoperable public platforms; customer and employee experience; accessibility and inclusion; change management, digital literacy and measurable uptake.` },
]

export const audience = [
  `Government leaders, policymakers, regulators and local authorities driving public sector digitalisation`,
  `Board members, CEOs and senior executives responsible for growth, investment, risk and resilience`,
  `CIOs, CTOs, CISOs, DPOs, technology leaders and ICT practitioners`,
  `Banks, fintechs, insurers, payment providers and digital commerce leaders`,
  `Cloud, telecoms, data-centre, infrastructure and technology solution providers`,
  `Universities, researchers, students, startups, innovators and investors`,
  `Development partners, professional bodies and regional technology stakeholders`,
]

export const delegateValue = [
  { title: `Relevant insight`, text: `Zimbabwe-focused perspectives connected to global developments, national priorities and sector realities.` },
  { title: `Access and opportunity`, text: `Curated engagement with policymakers, executives, experts, partners and solution providers.` },
  { title: `Practical capability`, text: `Masterclasses, implementation clinics, demonstrations, case studies and usable resources.` },
  { title: `Professional growth`, text: `High-quality learning, peer exchange, 12 CPD points and emerging-talent pathways.` },
  { title: `Decision support`, text: `Executive briefings, buyer-oriented discussions and lessons from real deployments.` },
  { title: `Continuing value`, text: `Post-Summit insights, selected resources, relationships and follow-up opportunities.` },
]

export const formats = [
  { title: `Flagship plenaries`, Icon: Presentation, text: `National direction, global perspective and shared priorities.` },
  { title: `Executive roundtables`, Icon: Users, text: `Candid, limited-capacity leadership, policy and investment dialogue.` },
  { title: `Stream sessions`, Icon: MessagesSquare, text: `Focused debates, cases and implementation lessons across the five streams.` },
  { title: `Masterclasses and clinics`, Icon: Lightbulb, text: `Practical learning in smaller, high-value sessions.` },
  { title: `Live demonstrations`, Icon: CirclePlay, text: `Technology working against real problems, not merely sales slides.` },
  { title: `Innovation showcase`, Icon: Rocket, text: `Zimbabwean and regional solutions, research, startups and talent.` },
  { title: `Business matchmaking`, Icon: Network, text: `Structured connections among buyers, providers, partners and investors.` },
  { title: `Destination networking`, Icon: Handshake, text: `Purposeful social and Victoria Falls experiences that deepen relationships.` },
]

export const sponsorValue = [
  { title: `Authority`, Icon: Sprout, text: `Associate your organisation with the issues shaping Zimbabwe's digital economy.` },
  { title: `Thought leadership`, Icon: Brain, text: `Contribute credible expertise through curated sessions, dialogues and insight.` },
  { title: `Qualified access`, Icon: BadgeCheck, text: `Build relationships through hosted roundtables, networking and opt-in meetings.` },
  { title: `Solution experience`, Icon: Handshake, text: `Demonstrate capability through live, problem-led showcases and practical sessions.` },
  // TODO: confirm with CSZ. The PDF repeats the 'Qualified access' text under this heading.
  { title: `Market insight`, Icon: Briefcase, text: `Gain first-hand insight into buyer priorities, regulation and sector trends.` },
  { title: `Measurable return`, Icon: TrendingUp, text: `Receive a defined fulfilment schedule and post-event evidence of delivered value.` },
]

export const contacts = [
  { name: `Faith Mudzingaidzwa`, phone: `0782 251 057`, email: `faith@csz.org.zw` },
  { name: `Steve Chawatama`, phone: `0772 552 902`, email: `steve@csz.org.zw` },
]
