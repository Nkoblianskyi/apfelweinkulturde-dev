'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const navLinks = [
  { href: '/geschichte', label: 'Geschichte' },
  { href: '/traditionen', label: 'Traditionen' },
  { href: '/trinken', label: 'Trinken' },
  { href: '/kulinarik', label: 'Kulinarik' },
  { href: '/feste', label: 'Feste' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md',
        scrolled
          ? 'bg-[oklch(0.14_0.025_55/0.97)] border-b border-[oklch(0.62_0.14_65/0.3)] shadow-lg'
          : 'bg-[oklch(0.10_0.020_55/0.75)] border-b border-[oklch(0.62_0.14_65/0.15)]'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-row items-center gap-2 leading-none group"
          aria-label="Apfelweinkultur – Startseite"
        >
          <Image src="/favicon.ico" width={32} height={32} alt="Apfelweinkultur Logo" />
          <div className="flex flex-col items-start -mt-1">
            <span className="font-serif text-xl tracking-widest text-[oklch(0.72_0.13_80)] uppercase">
              Apfelwein
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[oklch(0.72_0.13_80/0.6)] font-sans">
              Kultur
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'text-sm tracking-widest uppercase font-sans transition-colors duration-200',
                  pathname === href
                    ? 'text-[oklch(0.72_0.13_80)]'
                    : 'text-[oklch(0.97_0.012_75/0.7)] hover:text-[oklch(0.72_0.13_80)]'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[oklch(0.97_0.012_75)] p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[oklch(0.18_0.025_55/0.98)] border-t border-[oklch(0.62_0.14_65/0.2)] px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block py-2 text-sm tracking-widest uppercase font-sans transition-colors duration-200 border-b border-[oklch(0.62_0.14_65/0.15)]',
                    pathname === href
                      ? 'text-[oklch(0.72_0.13_80)]'
                      : 'text-[oklch(0.97_0.012_75/0.7)] hover:text-[oklch(0.72_0.13_80)]'
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
