import { useEffect, useRef, useState } from 'react'

const DEFAULT_TIMING = {
  startDelay: 400,
  typingDelay: 94,
  deletingDelay: 52,
  pauseDelay: 1200,
}

export default function useTypedWords(words, timing = DEFAULT_TIMING) {
  const [typedText, setTypedText] = useState('')
  const wordIndex = useRef(0)
  const characterIndex = useRef(0)
  const isDeleting = useRef(false)

  useEffect(() => {
    if (!words.length) {
      return undefined
    }

    let timerId = 0

    const tick = () => {
      const currentWord = words[wordIndex.current]

      if (!isDeleting.current) {
        characterIndex.current += 1
        setTypedText(currentWord.slice(0, characterIndex.current))

        if (characterIndex.current === currentWord.length) {
          isDeleting.current = true
          timerId = window.setTimeout(tick, timing.pauseDelay)
          return
        }
      } else {
        characterIndex.current -= 1
        setTypedText(currentWord.slice(0, characterIndex.current))

        if (characterIndex.current === 0) {
          isDeleting.current = false
          wordIndex.current = (wordIndex.current + 1) % words.length
        }
      }

      const delay = isDeleting.current ? timing.deletingDelay : timing.typingDelay
      timerId = window.setTimeout(tick, delay)
    }

    timerId = window.setTimeout(tick, timing.startDelay)
    return () => window.clearTimeout(timerId)
  }, [timing.deletingDelay, timing.pauseDelay, timing.startDelay, timing.typingDelay, words])

  return typedText
}
