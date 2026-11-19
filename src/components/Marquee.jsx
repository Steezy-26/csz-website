// Slides its children sideways forever. Pauses when the mouse is over it.
// The children are shown twice so the loop has no gap.
export default function Marquee({ children, seconds = 40 }) {
  return (
    <div className='group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]'>
      <div className='flex w-max animate-marquee group-hover:[animation-play-state:paused]' style={{ animationDuration: `${seconds}s` }}>
        <div className='flex shrink-0 items-center gap-6 pr-6'>{children}</div>
        <div className='flex shrink-0 items-center gap-6 pr-6' aria-hidden='true'>{children}</div>
      </div>
    </div>
  )
}
