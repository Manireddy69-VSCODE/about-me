import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach((element) => element.classList.add('revealed'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -48px 0px',
      }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}
