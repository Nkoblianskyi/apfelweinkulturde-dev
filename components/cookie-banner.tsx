'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className={cn(
        'fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] max-w-2xl',
        'bg-[oklch(0.18_0.025_55/0.97)] backdrop-blur-sm',
        'border border-[oklch(0.62_0.14_65/0.3)]',
        'rounded-sm shadow-2xl shadow-black/40',
        'px-6 py-5'
      )}
      role="dialog"
      aria-label="Cookie-Einwilligung"
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <p className="text-[oklch(0.72_0.13_80)] font-serif text-base mb-1">
            Cookies & Datenschutz
          </p>
          <p className="text-[oklch(0.97_0.012_75/0.6)] text-sm leading-relaxed font-sans">
            Diese Website verwendet Cookies, um Ihnen das bestmögliche Erlebnis zu bieten.
            Mehr erfahren Sie in unserer{' '}
            <Link href="/cookies" className="underline underline-offset-2 text-[oklch(0.72_0.13_80/0.8)] hover:text-[oklch(0.72_0.13_80)]">
              Cookie-Richtlinie
            </Link>{' '}
            und{' '}
            <Link href="/datenschutz" className="underline underline-offset-2 text-[oklch(0.72_0.13_80/0.8)] hover:text-[oklch(0.72_0.13_80)]">
              Datenschutzerklärung
            </Link>.
          </p>
        </div>
        <button
          onClick={decline}
          className="text-[oklch(0.97_0.012_75/0.4)] hover:text-[oklch(0.97_0.012_75/0.7)] transition-colors shrink-0 mt-0.5"
          aria-label="Schließen"
        >
          <X size={16} />
        </button>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={accept}
          className="px-5 py-2 bg-[oklch(0.72_0.13_80)] text-[oklch(0.18_0.025_55)] text-xs tracking-widest uppercase font-sans hover:bg-[oklch(0.62_0.14_65)] transition-colors duration-200"
        >
          Akzeptieren
        </button>
        <button
          onClick={decline}
          className="px-5 py-2 border border-[oklch(0.72_0.13_80/0.4)] text-[oklch(0.97_0.012_75/0.5)] text-xs tracking-widest uppercase font-sans hover:border-[oklch(0.72_0.13_80/0.7)] hover:text-[oklch(0.97_0.012_75/0.8)] transition-colors duration-200"
        >
          Ablehnen
        </button>
      </div>
    </div>
  )
}
