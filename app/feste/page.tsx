import Image from 'next/image'
import Link from 'next/link'
import { AlcoholNoticeCard } from '@/components/alcohol-notice'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'

const feste = [
  {
    name: 'Frankfurter Apfelweinfest',
    ort: 'Rossmarkt, Frankfurt am Main',
    wann: 'Jedes Jahr im August (3. Wochenende)',
    seit: '1986',
    besucher: 'ca. 250.000',
    beschr: 'Das wichtigste Apfelweinfest Deutschlands findet auf dem Rossmarkt im Herzen Frankfurts statt. Drei Tage lang verwandelt sich der Platz in einen riesigen Ausschank unter freiem Himmel. Dutzende Kellereien und Wirtschaften präsentieren ihre besten Weine, dazu gibt es hessische Spezialitäten, Live-Musik und die einzigartige Atmosphäre einer Stadt, die sich selbst feiert.',
    highlight: 'Der traditionelle Umzug mit geschmückten Festwagen und der Krönung der "Apfelweinkönigin".',
  },
  {
    name: 'Höchster Schlossfest',
    ort: 'Frankfurt-Höchst',
    wann: 'Juli',
    seit: 'Jahrzehnte',
    besucher: 'ca. 100.000',
    beschr: 'Im historischen Stadtteil Höchst, einer der ältesten Siedlungen Frankfurts, findet jährlich das Schlossfest statt. Apfelwein spielt hier eine zentrale Rolle — ausgeschenkt in echten Geripptes-Gläsern, direkt vor der Kulisse der mittelalterlichen Burg.',
    highlight: 'Mittelaltermarkt mit historischer Atmosphäre und reichlich Ebbelwoi.',
  },
  {
    name: 'Ebbelwoi-Express',
    ort: 'Ganz Frankfurt',
    wann: 'Samstags & sonntags, April bis Oktober',
    seit: '1977',
    besucher: 'Täglich',
    beschr: 'Die historische Straßenbahn "Ebbelwoi-Express" fährt an Wochenenden von April bis Oktober durch die Stadt — mit Apfelwein an Bord. Eine Runde dauert etwa 90 Minuten und führt durch Sachsenhausen, an den Museumsufer-Parks vorbei und durch das Nordend. Touristen und Einheimische feiern gemeinsam auf Schienen.',
    highlight: 'Apfelwein und Brezeln inbegriffen — der gemütlichste Stadtführer Frankfurts.',
  },
  {
    name: 'Brunnenfest im Hessischen Ried',
    ort: 'Verschiedene Orte im Ried',
    wann: 'Mai & Juni',
    seit: 'Volkstradition',
    besucher: 'Regional',
    beschr: 'Im ländlichen Hessen finden im Frühling zahlreiche kleine Dorffeste statt, bei denen der lokale Apfelwein im Mittelpunkt steht. Weniger bekannt als das Frankfurter Apfelweinfest, dafür umso authentischer: Hier trifft man die echten Produzenten, schmeckt ihre Hausweine und erlebt die Region fernab des Tourismus.',
    highlight: 'Direkter Kontakt zu traditionellen Apfelwein-Keltereien.',
  },
  {
    name: 'Museumsuferfest Frankfurt',
    ort: 'Sachsenhäuser Mainufer',
    wann: 'August (letztes Wochenende)',
    seit: '1988',
    besucher: 'ca. 3 Millionen',
    beschr: 'Das größte Kulturfest Deutschlands und eines der größten Europas. Während es offiziell ein Kulturfest der Frankfurter Museen ist, ist der Apfelwein omnipräsent. Entlang des Mainufers reihen sich Stände mit Ebbelwoi an Bühnen mit Musik — ein Fest für alle Sinne.',
    highlight: 'Spektakuläres Feuerwerk am letzten Abend über dem Main.',
  },
]

const brauche = [
  {
    title: 'Das erste Glas gilt dem Main',
    body: 'Eine alte Frankfurter Tradition: Das erste Glas Apfelwein beim Fest wird symbolisch dem Main gewidmet — man "gibt" einen ersten kleinen Schluck dem Fluss zurück, der die Stadt ernährt. Diese Geste der Dankbarkeit ist heute kaum noch sichtbar, lebt aber in Geschichten weiter.',
  },
  {
    title: 'Die Apfelweinkönigin',
    body: 'Beim Frankfurter Apfelweinfest wird jährlich eine Apfelweinkönigin gekrönt. Sie repräsentiert die Apfelweinkultur bei regionalen Veranstaltungen, besucht Keltereien und macht die Tradition sichtbar — eine moderne Variante alter Erntefest-Traditionen.',
  },
  {
    title: 'Der Festumzug',
    body: 'Beim Apfelweinfest ziehen geschmückte Festwagen durch die Innenstadt. Keltereien, Wirtschaften und Vereine präsentieren sich — manche mit lebenden Tableaux, andere mit einfach vielen Bembeln. Der Umzug ist Unterhaltung, Stolz und Selbstdarstellung in einem.',
  },
]

export default function FestePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
          <Image
            src="/images/feste.jpg"
            alt="Apfelweinfest in Frankfurt"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.025_55)] via-[oklch(0.18_0.025_55/0.5)] to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
            <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-3">
              Feste & Feiern
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[oklch(0.97_0.012_75)] text-balance leading-tight">
              Wenn Hessen
              <br />
              <em className="text-[oklch(0.72_0.13_80)]">den Ebbelwoi feiert</em>
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-[oklch(0.18_0.025_55)] py-16 px-6">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
            <p className="text-[oklch(0.97_0.012_75/0.7)] text-lg leading-relaxed font-sans">
              In Hessen wird der Apfelwein nicht nur getrunken — er wird gefeiert. Von kleinen Dorffesten
              im Ried bis zum riesigen Apfelweinfest auf dem Rossmarkt: Jedes Fest ist eine Liebeserklärung
              an den Ebbelwoi und die Region, aus der er kommt.
            </p>
            <AlcoholNoticeCard className="w-full max-w-xl text-left" />
          </div>
        </section>

        {/* Main fest featured */}
        <section className="bg-background py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-14">
              <p className="text-accent text-[10px] tracking-[0.4em] uppercase font-sans mb-3">Kalender</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
                Die Feste des Jahres
              </h2>
            </div>

            {/* Feature: Apfelweinfest */}
            <div className="border border-border overflow-hidden mb-6">
              <div className="grid md:grid-cols-2">
                <div className="relative h-[340px] md:h-auto overflow-hidden">
                  <Image
                    src="/images/feste.jpg"
                    alt="Frankfurter Apfelweinfest"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 md:p-10 bg-card">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block text-accent text-[9px] tracking-[0.3em] uppercase font-sans border border-accent/30 px-3 py-1">
                      Highlight
                    </span>
                    <span className="text-muted-foreground text-xs font-sans">Seit {feste[0].seit}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">{feste[0].name}</h3>
                  <p className="text-accent text-sm font-sans mb-4">{feste[0].ort} &middot; {feste[0].wann}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-5">{feste[0].beschr}</p>
                  <div className="bg-muted border border-border p-4">
                    <p className="text-[9px] tracking-[0.3em] uppercase text-accent/60 font-sans mb-1">Highlight</p>
                    <p className="text-sm font-sans text-foreground">{feste[0].highlight}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-6">
                    <div>
                      <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground font-sans mb-1">Besucher</p>
                      <p className="font-serif text-lg text-foreground">{feste[0].besucher}</p>
                    </div>
                    <div className="w-[1px] h-8 bg-border" />
                    <div>
                      <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground font-sans mb-1">Seit</p>
                      <p className="font-serif text-lg text-foreground">{feste[0].seit}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other fests grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {feste.slice(1).map((f) => (
                <div key={f.name} className="border border-border p-7 bg-card hover:border-accent/30 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-serif text-xl text-foreground">{f.name}</h3>
                      <p className="text-accent text-xs font-sans mt-1">{f.ort}</p>
                    </div>
                    <span className="text-muted-foreground text-xs font-sans shrink-0 ml-4">{f.wann}</span>
                  </div>
                  <div className="h-[1px] bg-border mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-4">{f.beschr}</p>
                  <div className="bg-muted border border-border px-4 py-3">
                    <p className="text-[9px] tracking-[0.25em] uppercase text-accent/60 font-sans mb-1">Highlight</p>
                    <p className="text-xs font-sans text-foreground">{f.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bräuche */}
        <section className="bg-[oklch(0.22_0.03_55)] py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-14">
              <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-3">
                Festbräuche
              </p>
              <h2 className="font-serif text-3xl text-[oklch(0.97_0.012_75)] text-balance">
                Rituale & Traditionen der Feste
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {brauche.map((b) => (
                <div key={b.title} className="border border-[oklch(0.72_0.13_80/0.15)] p-7 bg-[oklch(0.18_0.025_55/0.5)]">
                  <h3 className="font-serif text-lg text-[oklch(0.72_0.13_80)] mb-3">{b.title}</h3>
                  <p className="text-[oklch(0.97_0.012_75/0.55)] text-sm leading-relaxed font-sans">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner image */}
        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/images/identitaet.jpg"
            alt="Hessische Landschaft im Herbst"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[oklch(0.12_0.025_55/0.6)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="text-[oklch(0.72_0.13_80/0.5)] text-5xl font-serif block mb-4">&ldquo;</span>
            <blockquote className="font-serif text-xl md:text-2xl text-[oklch(0.97_0.012_75/0.9)] italic max-w-2xl leading-relaxed">
              Kein Fest ohne Ebbelwoi, kein Ebbelwoi ohne Fest —
              in Hessen ist beides dasselbe.
            </blockquote>
            <span className="text-[oklch(0.72_0.13_80/0.5)] text-5xl font-serif block mt-2 rotate-180">&ldquo;</span>
          </div>
        </section>

        {/* CTA back to home */}
        <section className="bg-[oklch(0.18_0.025_55)] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-2">Bereit?</p>
              <h2 className="font-serif text-2xl text-[oklch(0.97_0.012_75)]">Entdecken Sie die ganze Welt des Apfelweins</h2>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-[oklch(0.72_0.13_80)] text-[oklch(0.18_0.025_55)] px-7 py-3 text-xs tracking-widest uppercase font-sans hover:bg-[oklch(0.62_0.14_65)] transition-colors shrink-0 group"
            >
              Zur Startseite <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
