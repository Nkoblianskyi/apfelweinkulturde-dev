import { cn } from '@/lib/utils'
import { SITE_OPERATOR } from '@/lib/company-info'

export function OperatorAddressCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'border border-border bg-card p-5 font-sans text-sm text-foreground leading-relaxed',
        className,
      )}
    >
      <p className="font-serif text-base mb-2">{SITE_OPERATOR.legalName}</p>
      <p>{SITE_OPERATOR.addressLine1}</p>
      <p>{SITE_OPERATOR.postalCity}</p>
      <p>{SITE_OPERATOR.locality}</p>
      <p className="mt-3 text-accent">E-Mail: {SITE_OPERATOR.email}</p>
    </div>
  )
}
