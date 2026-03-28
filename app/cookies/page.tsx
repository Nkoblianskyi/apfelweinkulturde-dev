import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Cookie-Richtlinie – Apfelweinkultur.de',
  description: 'Informationen über die Verwendung von Cookies auf Apfelweinkultur.de.',
}

const sections = [
  {
    title: 'Was sind Cookies?',
    body: 'Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät (Computer, Smartphone, Tablet) gespeichert werden. Sie ermöglichen es einer Website, Ihr Gerät bei einem erneuten Besuch wiederzuerkennen und bestimmte Informationen über Ihren vorherigen Besuch zu speichern. Cookies können von der besuchten Website selbst (Erstanbieter-Cookies) oder von Dritten (Drittanbieter-Cookies) gesetzt werden.',
  },
  {
    title: 'Welche Cookies verwenden wir?',
    body: null,
    list: [
      {
        name: 'Notwendige Cookies',
        desc: 'Diese Cookies sind für den Betrieb der Website unbedingt erforderlich. Sie ermöglichen grundlegende Funktionen wie die Navigation auf der Seite und den Zugriff auf gesicherte Bereiche. Ohne diese Cookies kann die Website nicht ordnungsgemäß funktionieren. Sie können in Ihrem Browser nicht deaktiviert werden.',
        beispiel: 'cookie-consent (speichert Ihre Cookie-Einwilligung)',
        dauer: 'Bis zu 12 Monate',
        typ: 'Notwendig',
      },
      {
        name: 'Analytische Cookies (Vercel Analytics)',
        desc: 'Wir verwenden Vercel Analytics, um anonyme Nutzungsstatistiken zu erheben. Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen — welche Seiten besonders beliebt sind, wie lange Besucher auf der Seite bleiben und über welche Quellen sie kommen. Alle Daten werden anonymisiert verarbeitet.',
        beispiel: '_vercel_speed_insights (Performance-Messung)',
        dauer: 'Sitzungsbasiert bis 12 Monate',
        typ: 'Analytisch',
      },
    ],
  },
  {
    title: 'Cookie-Einwilligung und Widerruf',
    body: 'Beim ersten Besuch unserer Website erscheint ein Cookie-Banner, über den Sie Ihre Einwilligung zu nicht notwendigen Cookies erteilen oder ablehnen können. Sie können Ihre Entscheidung jederzeit widerrufen, indem Sie Ihren Browser-Cache leeren (dadurch wird der gespeicherte Consent zurückgesetzt) oder Cookies in Ihren Browsereinstellungen manuell löschen. Bitte beachten Sie, dass das Ablehnen bestimmter Cookies die Funktionalität der Website einschränken kann.',
  },
  {
    title: 'Cookies in Ihrem Browser verwalten',
    body: 'Die meisten Webbrowser bieten Einstellungen, mit denen Sie Cookies kontrollieren können. Sie können Cookies blockieren, löschen oder sich benachrichtigen lassen, wenn ein Cookie gesetzt wird. Beachten Sie, dass das vollständige Deaktivieren von Cookies dazu führen kann, dass bestimmte Funktionen der Website nicht mehr verfügbar sind.',
    list: [
      { name: 'Google Chrome', desc: 'Einstellungen → Datenschutz und Sicherheit → Cookies und andere Websitedaten' },
      { name: 'Mozilla Firefox', desc: 'Einstellungen → Datenschutz & Sicherheit → Cookies und Website-Daten' },
      { name: 'Safari', desc: 'Einstellungen → Datenschutz → Cookies und Website-Daten verwalten' },
      { name: 'Microsoft Edge', desc: 'Einstellungen → Datenschutz, Suche und Dienste → Cookies' },
    ],
  },
  {
    title: 'Änderungen dieser Cookie-Richtlinie',
    body: 'Wir behalten uns das Recht vor, diese Cookie-Richtlinie jederzeit zu aktualisieren, um Änderungen in unserer Praxis oder aus rechtlichen Gründen Rechnung zu tragen. Die aktualisierte Richtlinie wird auf dieser Seite mit dem Datum der letzten Aktualisierung veröffentlicht. Wir empfehlen Ihnen, diese Seite regelmäßig zu besuchen.',
  },
  {
    title: 'Kontakt',
    body: 'Bei Fragen zu unserer Verwendung von Cookies oder zu dieser Cookie-Richtlinie können Sie uns unter der in der Datenschutzerklärung genannten Adresse kontaktieren.',
  },
]

export default function CookiesPage() {
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
              Cookie-Richtlinie
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[oklch(0.72_0.13_80/0.4)]" />
              <span className="text-[oklch(0.72_0.13_80/0.6)] text-sm">✦</span>
              <div className="w-12 h-[1px] bg-[oklch(0.72_0.13_80/0.4)]" />
            </div>
            <p className="text-[oklch(0.97_0.012_75/0.55)] font-sans text-sm leading-relaxed max-w-xl">
              Zuletzt aktualisiert: Januar 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-background py-16 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-12">
            {/* Intro */}
            <div className="border-l-2 border-accent/30 pl-6">
              <p className="text-muted-foreground text-base leading-relaxed font-sans">
                Diese Cookie-Richtlinie erklärt, wie <strong className="text-foreground font-sans">Apfelweinkultur.de</strong> Cookies
                und ähnliche Tracking-Technologien auf unserer Website verwendet. Bitte lesen Sie diese Richtlinie
                sorgfältig durch, um zu verstehen, welche Cookies wir verwenden, warum wir sie einsetzen und wie
                Sie Ihre Cookie-Präferenzen verwalten können.
              </p>
            </div>

            {sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl text-foreground">{section.title}</h2>
                <div className="w-8 h-[1px] bg-accent/40" />

                {section.body && (
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans">{section.body}</p>
                )}

                {section.list && section.title === 'Welche Cookies verwenden wir?' && (
                  <div className="flex flex-col gap-6 mt-2">
                    {section.list.map((cookie) => (
                      <div key={cookie.name} className="border border-border bg-card p-6">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h3 className="font-serif text-lg text-foreground">{cookie.name}</h3>
                          <span className="shrink-0 text-[9px] tracking-[0.3em] uppercase font-sans border border-accent/30 text-accent px-3 py-1">
                            {cookie.typ}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-4">{cookie.desc}</p>
                        <div className="grid sm:grid-cols-2 gap-4 border-t border-border pt-4">
                          <div>
                            <p className="text-[9px] tracking-[0.3em] uppercase text-accent/60 font-sans mb-1">Beispiel</p>
                            <p className="text-xs font-sans text-foreground font-mono bg-muted px-2 py-1 inline-block">{cookie.beispiel}</p>
                          </div>
                          <div>
                            <p className="text-[9px] tracking-[0.3em] uppercase text-accent/60 font-sans mb-1">Speicherdauer</p>
                            <p className="text-sm font-sans text-foreground">{cookie.dauer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.list && section.title === 'Cookies in Ihrem Browser verwalten' && (
                  <div className="grid sm:grid-cols-2 gap-4 mt-2">
                    {section.list.map((browser) => (
                      <div key={browser.name} className="border border-border bg-card p-5">
                        <h3 className="font-serif text-base text-foreground mb-2">{browser.name}</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed font-sans">{browser.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
