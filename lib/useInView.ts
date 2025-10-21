"use client"
import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (inView) return // lock once visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1, ...(options || {}) }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [options, inView])

  return { ref, inView }
}
