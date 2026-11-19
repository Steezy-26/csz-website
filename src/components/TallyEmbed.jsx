import { useEffect } from 'react'
import { embedUrl } from '@/data/tally'

const SCRIPT = 'https://tally.so/widgets/embed.js'

export default function TallyEmbed({ formId, title }) {
  useEffect(() => {
    const fallback = () => {
      document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((el) => { el.src = el.dataset.tallySrc })
    }
    const load = () => (window.Tally ? window.Tally.loadEmbeds() : fallback())

    if (window.Tally) {
      load()
    } else if (!document.querySelector(`script[src='${SCRIPT}']`)) {
      const s = document.createElement('script')
      s.src = SCRIPT
      s.onload = load
      s.onerror = load
      document.body.appendChild(s)
    } else {
      load()
    }
  }, [formId])

  return <iframe data-tally-src={embedUrl(formId)} loading='lazy' width='100%' height='600' title={title} style={{ border: 0 }} />
}
