"use client"
import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { useInView } from '@/lib/useInView'

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}>

export default function Reveal({ children, className, delay = 0, direction = 'up' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  const baseHidden = 'opacity-0 translate-y-4'
  const dirHidden = {
    up: 'translate-y-4',
    down: '-translate-y-4',
    left: 'translate-x-4',
    right: '-translate-x-4',
    none: ''
  }[direction]

  const hiddenClasses = clsx('opacity-0', dirHidden)
  const shownClasses = 'opacity-100 translate-x-0 translate-y-0'

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-700 ease-out will-change-transform',
        inView ? shownClasses : hiddenClasses,
        delay ? `[transition-delay:${delay}ms]` : '',
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
