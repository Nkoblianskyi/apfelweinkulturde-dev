import Link from 'next/link'
import { SITE_OPERATOR } from '@/lib/company-info'

const footerLinks = [
  { href: '/geschichte', label: 'Geschichte' },
  { href: '/traditionen', label: 'Traditionen' },
  { href: '/trinken', label: 'Trinken' },
  { href: '/kulinarik', label: 'Kulinarik' },
  { href: '/feste', label: 'Feste' },
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/cookies', label: 'Cookie-Richtlinie' },
]

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.025_55)] text-[oklch(0.97_0.012_75/0.65)] py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-[oklch(0.62_0.14_65/0.2)]">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl tracking-widest text-[oklch(0.72_0.13_80)] uppercase">
                Apfelwein
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[oklch(0.72_0.13_80/0.6)] font-sans">
                Kultur
              </span>
            </div>
            <p className="text-sm leading-relaxed font-sans text-[oklch(0.97_0.012_75/0.5)]">
              Eine Liebeserklärung an den Ebbelwoi –
              das goldene Herz Hessens, seit Jahrhunderten
              in jedem Geripptes zu Hause.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer Navigation">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[oklch(0.72_0.13_80/0.7)] mb-4 font-sans">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-sans tracking-wide text-[oklch(0.97_0.012_75/0.5)] hover:text-[oklch(0.72_0.13_80)] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Operator */}
          <div className="flex flex-col gap-3 max-w-sm lg:max-w-none">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[oklch(0.72_0.13_80/0.7)] font-sans">
              Anbieter
            </p>
            <p className="text-sm font-serif text-[oklch(0.72_0.13_80)] leading-snug">
              {SITE_OPERATOR.legalName}
            </p>
            <address className="not-italic text-sm font-sans leading-relaxed text-[oklch(0.97_0.012_75/0.5)]">
              {SITE_OPERATOR.addressLine1}
              <br />
              {SITE_OPERATOR.postalCity}
              <br />
              {SITE_OPERATOR.locality}
            </address>
            <a
              href={`mailto:${SITE_OPERATOR.email}`}
              className="text-sm font-sans text-[oklch(0.72_0.13_80)] hover:text-[oklch(0.82_0.12_80)] transition-colors duration-200 w-fit"
            >
              {SITE_OPERATOR.email}
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-sans tracking-wide text-[oklch(0.97_0.012_75/0.3)] text-center md:text-left space-y-1">
            <p>© {new Date().getFullYear()} Apfelweinkulturde.com — Alle Rechte vorbehalten</p>
            <p className="text-[oklch(0.97_0.012_75/0.45)]">
              Betrieb: {SITE_OPERATOR.legalName}
            </p>
          </div>
          <p className="text-xs font-sans tracking-widest uppercase text-[oklch(0.72_0.13_80/0.4)]">
            Hessen &middot; Frankfurt &middot; Ebbelwoi
          </p>
        </div>
      </div>
    </footer>
  )
}
