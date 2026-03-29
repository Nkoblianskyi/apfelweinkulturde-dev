import { cn } from '@/lib/utils'
import { ALCOHOL_NOTICE_DE } from '@/lib/alcohol-notice'

export function AlcoholNoticeFooter() {
  return (
    <div
      className="pt-6 mt-6 border-t border-[oklch(0.62_0.14_65/0.15)]"
      role="note"
      aria-label="Hinweis zu Alkohol"
    >
      <p className="text-[11px] sm:text-xs font-sans leading-relaxed text-center md:text-left text-[oklch(0.97_0.012_75/0.45)] max-w-3xl">
        <span className="inline-block font-semibold tracking-wide text-[oklch(0.72_0.13_80/0.85)] mr-1.5">
          18+
        </span>
        {ALCOHOL_NOTICE_DE}
      </p>
    </div>
  )
}

export function AlcoholNoticeCard({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        'rounded-sm border border-[oklch(0.62_0.14_65/0.25)] bg-[oklch(0.22_0.03_55)] px-5 py-4',
        className,
      )}
      role="note"
      aria-label="Hinweis zu Alkohol"
    >
      <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-[oklch(0.72_0.13_80/0.8)] mb-2">
        Alkohol · 18+
      </p>
      <p className="text-sm font-sans text-[oklch(0.97_0.012_75/0.75)] leading-relaxed">{ALCOHOL_NOTICE_DE}</p>
    </aside>
  )
}
