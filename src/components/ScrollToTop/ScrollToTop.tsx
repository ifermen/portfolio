// components/ScrollToTop.tsx
import { useState, useEffect } from 'react'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollUp}
      aria-label="Volver arriba"
      className={`
        fixed bottom-8 right-8 z-50
        w-10 h-10 rounded-lg
        border border-accent-light/30 bg-surface text-accent-light
        flex items-center justify-center
        transition-all duration-300 ease-out
        hover:bg-accent/10 hover:border-accent-light/50 hover:-translate-y-0.5
        active:translate-y-0
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12V4M4 7l4-4 4 4" />
      </svg>
    </button>
  )
}