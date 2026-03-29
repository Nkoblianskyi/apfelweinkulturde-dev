import { AlcoholNoticeCard } from '@/components/alcohol-notice'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { OperatorAddressCard } from '@/components/operator-address-card'

export const metadata = {
  title: 'Datenschutzerklärung – Apfelweinkulturde.com',
  description: 'Datenschutzerklärung und Informationen zur Verarbeitung personenbezogener Daten auf Apfelweinkultur.com.',
}

const sections = [
  {
    id: 'verantwortlicher',
    title: 'Verantwortlicher',
    content: (
      <div className="flex flex-col gap-3 text-sm font-sans text-muted-foreground leading-relaxed">
        <p>
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler
          Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
        </p>
        <OperatorAddressCard />
      </div>
    ),
  },
  {
    id: 'grundsaetze',
    title: 'Grundsätze der Datenverarbeitung',
    content: (
      <div className="flex flex-col gap-3 text-sm font-sans text-muted-foreground leading-relaxed">
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten
          daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In dieser
          Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im
          Rahmen unserer Website.
        </p>
        <p>
          Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung,
          inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten).
          Personenbezogene Daten über die Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben,
          verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme
          des Dienstes zu ermöglichen oder abzurechnen.
        </p>
      </div>
    ),
  },
  {
    id: 'server-logs',
    title: 'Server-Logfiles und Hosting',
    content: (
      <div className="flex flex-col gap-3 text-sm font-sans text-muted-foreground leading-relaxed">
        <p>
          Diese Website wird auf der Infrastruktur von <strong className="text-foreground font-sans">Vercel Inc.</strong> (340 Pine Street,
          Suite 701, San Francisco, CA 94104, USA) gehostet. Beim Aufruf unserer Website werden durch den
          auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer
          Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert.
        </p>
        <p>Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:</p>
        <ul className="flex flex-col gap-2 pl-4 border-l border-border">
          {[
            'IP-Adresse des anfragenden Rechners',
            'Datum und Uhrzeit des Zugriffs',
            'Name und URL der abgerufenen Datei',
            'Website, von der aus der Zugriff erfolgt (Referrer-URL)',
            'Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-accent mt-1">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet: Gewährleistung eines
          reibungslosen Verbindungsaufbaus der Website, Gewährleistung einer komfortablen Nutzung unserer
          Website, Auswertung der Systemsicherheit und -stabilität sowie zu weiteren administrativen Zwecken.
          Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
        </p>
        <p>
          Vercel Inc. ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen
          finden Sie in der Datenschutzerklärung von Vercel:{' '}
          <span className="text-accent">vercel.com/legal/privacy-policy</span>
        </p>
      </div>
    ),
  },
  {
    id: 'analytics',
    title: 'Vercel Analytics',
    content: (
      <div className="flex flex-col gap-3 text-sm font-sans text-muted-foreground leading-relaxed">
        <p>
          Diese Website verwendet Vercel Analytics, einen Analysedienst der Vercel Inc. Vercel Analytics
          erfasst anonymisierte Nutzungsdaten über die Verwendung dieser Website — darunter Seitenaufrufe,
          Verweildauer und Herkunftsquellen der Besucher. Alle Daten werden aggregiert und anonymisiert
          verarbeitet; keine persönlichen oder identifizierbaren Informationen werden gespeichert.
        </p>
        <p>
          Die Nutzung von Vercel Analytics erfolgt auf Grundlage unserer berechtigten Interessen an einer
          statistischen Auswertung des Nutzerverhaltens zu Optimierungszwecken (Art. 6 Abs. 1 lit. f DSGVO).
          Sie können der Erfassung jederzeit widersprechen, indem Sie Cookies in Ihren Browsereinstellungen
          deaktivieren.
        </p>
      </div>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies',
    content: (
      <div className="flex flex-col gap-3 text-sm font-sans text-muted-foreground leading-relaxed">
        <p>
          Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr
          Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere
          Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren,
          Trojaner oder sonstige Schadsoftware.
        </p>
        <p>
          Detaillierte Informationen zu den von uns verwendeten Cookies finden Sie in unserer{' '}
          <a href="/cookies" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
            Cookie-Richtlinie
          </a>.
        </p>
      </div>
    ),
  },
  {
    id: 'rechte',
    title: 'Ihre Rechte als betroffene Person',
    content: (
      <div className="flex flex-col gap-4 text-sm font-sans text-muted-foreground leading-relaxed">
        <p>
          Soweit wir personenbezogene Daten von Ihnen verarbeiten, stehen Ihnen als betroffene Person
          folgende Rechte zu:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { right: 'Auskunftsrecht', desc: 'Sie haben das Recht, Auskunft über die von uns über Sie gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO).' },
            { right: 'Recht auf Berichtigung', desc: 'Sie haben das Recht, unrichtige oder unvollständige personenbezogene Daten, die wir über Sie gespeichert haben, berichtigen zu lassen (Art. 16 DSGVO).' },
            { right: 'Recht auf Löschung', desc: 'Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen (Art. 17 DSGVO).' },
            { right: 'Recht auf Einschränkung', desc: 'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen (Art. 18 DSGVO).' },
            { right: 'Recht auf Widerspruch', desc: 'Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen (Art. 21 DSGVO).' },
            { right: 'Beschwerderecht', desc: 'Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über unsere Verarbeitung Ihrer personenbezogenen Daten zu beschweren (Art. 77 DSGVO).' },
          ].map(({ right, desc }) => (
            <div key={right} className="border border-border bg-card p-5">
              <h3 className="font-serif text-base text-foreground mb-2">{right}</h3>
              <p className="text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'links',
    title: 'Links zu anderen Websites',
    content: (
      <p className="text-sm font-sans text-muted-foreground leading-relaxed">
        Unser Online-Angebot enthält Links zu anderen Websites. Für die Datenschutzpraktiken dieser
        externen Websites sind wir nicht verantwortlich. Wir empfehlen Ihnen, die Datenschutzrichtlinien
        der verlinkten Websites zu lesen, wenn Sie diese besuchen.
      </p>
    ),
  },
  {
    id: 'aenderungen',
    title: 'Änderungen der Datenschutzerklärung',
    content: (
      <p className="text-sm font-sans text-muted-foreground leading-relaxed">
        Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit mit Wirkung für die Zukunft
        zu ändern. Eine jeweils aktuelle Version ist auf dieser Webseite verfügbar. Bitte suchen Sie die
        Webseite regelmäßig auf und informieren Sie sich anhand der gültigen Datenschutzerklärung.
        Stand dieser Datenschutzerklärung: Januar 2025.
      </p>
    ),
  },
]

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page header */}
        <section className="bg-[oklch(0.18_0.025_55)] pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-4">
              Rechtliches
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-[oklch(0.97_0.012_75)] mb-6 text-balance">
              Datenschutzerklärung
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[oklch(0.72_0.13_80/0.4)]" />
              <span className="text-[oklch(0.72_0.13_80/0.6)] text-sm">✦</span>
              <div className="w-12 h-[1px] bg-[oklch(0.72_0.13_80/0.4)]" />
            </div>
            <p className="text-[oklch(0.97_0.012_75/0.55)] font-sans text-sm leading-relaxed max-w-2xl">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Nachfolgend informieren wir Sie
              ausführlich über Art, Umfang und Zweck der Erhebung und Verarbeitung personenbezogener Daten
              auf unserer Website — gemäß Art. 13 DSGVO.
            </p>
          </div>
        </section>

        {/* Table of contents */}
        <section className="bg-[oklch(0.22_0.03_55)] py-10 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-5">
              Inhalt
            </p>
            <ol className="grid sm:grid-cols-2 gap-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex items-start gap-3 text-sm font-sans text-[oklch(0.97_0.012_75/0.55)] hover:text-[oklch(0.72_0.13_80)] transition-colors duration-200"
                  >
                    <span className="text-[oklch(0.72_0.13_80/0.4)] font-serif text-sm">{String(i + 1).padStart(2, '0')}.</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Content sections */}
        <section className="bg-background py-16 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-14">
            <AlcoholNoticeCard className="bg-card border-border" />

            {sections.map((section, idx) => (
              <div key={section.id} id={section.id} className="flex flex-col gap-5">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-2xl text-accent/30 leading-none">{String(idx + 1).padStart(2, '0')}.</span>
                  <h2 className="font-serif text-2xl text-foreground">{section.title}</h2>
                </div>
                <div className="w-8 h-[1px] bg-accent/40" />
                {section.content}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
