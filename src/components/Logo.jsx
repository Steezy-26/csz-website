export default function Logo({ className = '' }) {
  return (
    <img
      src='/images/csz-logo.png'
      alt='Computer Society of Zimbabwe'
      className={`h-16 w-32 shrink-0 object-contain sm:h-[4.5rem] sm:w-36 ${className}`}
    />
  )
}
