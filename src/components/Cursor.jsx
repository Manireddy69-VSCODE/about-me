import { useEffect, useRef, useState } from 'react'

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, .project-card'

export default function Cursor() {
  const [isEnabled, setIsEnabled] = useState(false)
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const currentPosition = useRef({ x: 0, y: 0 })
  const targetPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    const syncPointerMode = () => setIsEnabled(mediaQuery.matches)

    syncPointerMode()
    mediaQuery.addEventListener('change', syncPointerMode)

    return () => mediaQuery.removeEventListener('change', syncPointerMode)
  }, [])

  useEffect(() => {
    if (!isEnabled) {
      return undefined
    }

    const moveCursor = (event) => {
      targetPosition.current = { x: event.clientX, y: event.clientY }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${event.clientX - 4}px, ${event.clientY - 4}px)`
      }
    }

    const enlargeCursor = () => ringRef.current?.classList.add('hovered')
    const shrinkCursor = () => ringRef.current?.classList.remove('hovered')
    const interactiveElements = document.querySelectorAll(INTERACTIVE_SELECTOR)

    window.addEventListener('mousemove', moveCursor)

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', enlargeCursor)
      element.addEventListener('mouseleave', shrinkCursor)
    })

    let animationFrameId = 0

    const animateCursor = () => {
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * 0.14
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * 0.14

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${currentPosition.current.x - 22}px, ${currentPosition.current.y - 22}px)`
      }

      animationFrameId = requestAnimationFrame(animateCursor)
    }

    animateCursor()

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cancelAnimationFrame(animationFrameId)

      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', enlargeCursor)
        element.removeEventListener('mouseleave', shrinkCursor)
      })
    }
  }, [isEnabled])

  if (!isEnabled) {
    return null
  }

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
