import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { OperatorAddressCard } from '@/components/operator-address-card'

export const metadata = {
  title: 'Impressum – Apfelweinkulturde.com',
  description:
    'Impressum und Anbieterkennzeichnung für Apfelweinkulturde.com gemäß TMG und EU-Dienstleistungs-Informationspflichten.',
}

export default function ImpressumPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[oklch(0.18_0.025_55)] pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-4">
              Rechtliches
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-[oklch(0.97_0.012_75)] mb-6 text-balance">
              Impressum
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[oklch(0.72_0.13_80/0.4)]" />
              <span className="text-[oklch(0.72_0.13_80/0.6)] text-sm">✦</span>
              <div className="w-12 h-[1px] bg-[oklch(0.72_0.13_80/0.4)]" />
            </div>
            <p className="text-[oklch(0.97_0.012_75/0.55)] font-sans text-sm leading-relaxed max-w-2xl">
              Angaben gemäß § 5 TMG und Art. 13 Abs. 1 lit. a der Verordnung (EU) 2019/1150 (EU-
              Dienstleistungs-Informationspflichten).
            </p>
          </div>
        </section>

        <section className="bg-background py-16 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-14">
            <div className="flex flex-col gap-5">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-accent/30 leading-none">01.</span>
                <h2 className="font-serif text-2xl text-foreground">Diensteanbieter</h2>
              </div>
              <div className="w-8 h-[1px] bg-accent/40" />
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                Verantwortlich für den Inhalt dieser Website im Sinne des Telemediengesetzes (TMG) und der
                EU-Dienstleistungs-Informationspflichten:
              </p>
              <OperatorAddressCard />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-accent/30 leading-none">02.</span>
                <h2 className="font-serif text-2xl text-foreground">Online-Streitbeilegung</h2>
              </div>
              <div className="w-8 h-[1px] bg-accent/40" />
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-accent/30 leading-none">03.</span>
                <h2 className="font-serif text-2xl text-foreground">Haftung für Inhalte</h2>
              </div>
              <div className="w-8 h-[1px] bg-accent/40" />
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
                den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-accent/30 leading-none">04.</span>
                <h2 className="font-serif text-2xl text-foreground">Haftung für Links</h2>
              </div>
              <div className="w-8 h-[1px] bg-accent/40" />
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich.
              </p>
            </div>

            <p className="text-xs font-sans text-muted-foreground">
              <Link href="/datenschutz" className="text-accent hover:underline underline-offset-4">
                Datenschutzerklärung
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
