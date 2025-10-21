"use client"
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { href: '#hjem', label: 'Hjem' },
  { href: '#hvordan', label: 'Hvordan' },
  { href: '#eksempler', label: 'Eksempler' },
  { href: '#priser', label: 'Priser' },
  { href: '#om', label: 'Om Meg' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <nav className={`sticky top-0 z-30 overflow-hidden h-16 md:h-20 transition-all ${scrolled ? 'bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="container h-full flex items-center justify-between py-0">
        <a href="#hjem" className="flex h-full items-center leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">
          <Image
            src="/logo.png"
            alt="Logo"
            width={260}
            height={260}
            priority
            className="block h-[180px] md:h-[220px] w-auto"
          />
        </a>
        <ul className="hidden md:flex gap-6 font-medium items-center">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded px-1 py-0.5">{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#bestill" className="btn btn-primary">Bestill Nettside</a>
          </li>
        </ul>
        <button
          className="md:hidden text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
          onClick={() => setOpen(!open)}
          aria-label="Åpne meny"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <>
          <div className="fixed inset-0 bg-black/20" onClick={() => setOpen(false)} aria-hidden="true"></div>
          <ul
            id="mobile-menu"
            ref={menuRef}
            className="md:hidden absolute left-0 right-0 top-full flex flex-col gap-2 px-4 pb-4 font-medium bg-white border-b shadow"
            role="menu"
          >
            {navLinks.map(link => (
              <li key={link.href} role="none">
                <a role="menuitem" href={link.href} className="block py-2" onClick={()=>setOpen(false)}>{link.label}</a>
              </li>
            ))}
            <li role="none">
              <a role="menuitem" href="#bestill" className="btn btn-primary" onClick={()=>setOpen(false)}>Bestill Nettside</a>
            </li>
          </ul>
        </>
      )}
    </nav>
  )
}
