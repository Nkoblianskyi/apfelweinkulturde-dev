import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'

const schritte = [
  {
    nr: '01',
    title: 'Den richtigen Apfelwein wählen',
    body: 'Es gibt naturtrüben und gefilterten Apfelwein, süßen und trockenen. Anfänger greifen gern zum "Sauergespritzten" — naturtrüber Apfelwein mit Mineralwasser im Verhältnis 1:1. Für den klassischen Genuss empfiehlt sich jedoch ein naturtrüber, ungespritzt servierter Ebbelwoi bei etwa 10–12 °C.',
  },
  {
    nr: '02',
    title: 'Das Geripptes vorbereiten',
    body: 'Das Glas muss sauber und trocken sein — niemals vorher mit Warmwasser ausgespült. Manche Kenner empfehlen, das Geripptes kurz zu kühlen. Das Glas wird nie bis zum Rand gefüllt: Das klassische Schöppchen (0,3 l) lässt Platz für den Schaum und den Duft des Weines.',
  },
  {
    nr: '03',
    title: 'Einschenken aus dem Bembel',
    body: 'Der Bembel-Krug wird mit einer schwungvollen Bewegung gehalten und der Apfelwein in einem gleichmäßigen Strahl eingeschenkt. Das leichte Aufschäumen ist gewünscht — es belüftet den Wein und bringt das Aroma zur Geltung. Niemals zu langsam und niemals zu nah ans Glas halten.',
  },
  {
    nr: '04',
    title: 'Das Anstoßen',
    body: 'Beim Anstoßen sagt man in Frankfurt "Ebbelwoi!" oder das schlichte "Prost!" — niemals "Cheers". Das Glas wird am Fuß gefasst und kurz, mit festem Klang, gegen das Glas des Gegenübers gestoßen. Dabei schaut man sich in die Augen: Das gehört zum Ritual.',
  },
  {
    nr: '05',
    title: 'Trinken & genießen',
    body: 'Apfelwein wird nicht getrunken — er wird erlebt. Man lässt ihn kurz im Mund, spürt die Säure und die Trockenheit, riecht die Äpfel des vergangenen Herbstes. Zwischen den Schlucken kommt das Gespräch — Schweigen beim Ebbelwoi ist verschwendete Zeit.',
  },
  {
    nr: '06',
    title: 'Nachschenken & Nachbestellen',
    body: 'Wenn das Geripptes leer ist, stellt man es einfach auf den Tisch. Die Wirtin oder der Wirt kennt das Zeichen und bringt Nachschub — oder man greift selbst zum Bembel. Nachbestellen ist in echten Apfelweinwirtschaften nie eine Frage: Es wird erwartet.',
  },
]

const sorten = [
  {
    name: 'Naturtrüber Apfelwein',
    color: 'Goldgelb, leicht trüb',
    geschmack: 'Kräftig, trocken, herb-sauer',
    ideal: 'Für Kenner und Einheimische',
    beschr: 'Der ungefilterte Klassiker. Man sieht die Hefe im Glas, schmeckt die volle Frucht und die lebendige Säure. Authentisch, ehrlich — so wie er sein soll.',
  },
  {
    name: 'Gefilterter Apfelwein',
    color: 'Klar goldgelb',
    geschmack: 'Milder, etwas weniger komplex',
    ideal: 'Für Einsteiger',
    beschr: 'Durch die Filterung werden Hefetrübungen entfernt. Das Ergebnis ist optisch klarer, geschmacklich etwas sanfter — ein guter Einstieg für Apfelwein-Neulinge.',
  },
  {
    name: 'Sauergespritzter',
    color: 'Hellgelb, schaumig',
    geschmack: 'Leicht, frisch, weniger herb',
    ideal: 'An heißen Tagen',
    beschr: 'Apfelwein mit Mineralwasser verdünnt — ein erfrischendes Sommergetränk. Das Verhältnis variiert je nach Gusto: von 1:1 bis 2:1 (Wein:Wasser).',
  },
  {
    name: 'Süßgespritzter',
    color: 'Hellgelb mit Schaum',
    geschmack: 'Süßlich, sprudelnd',
    ideal: 'Für alle, die es milder mögen',
    beschr: 'Mit Süßlimonade (Limo) aufgespritzt — besonders bei jüngeren Gästen und Nicht-Hessen beliebt. Traditionalisten lehnen es ab, aber es hat seinen Charme.',
  },
]

export default function TrinkenPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
          <Image
            src="/images/geripptes.jpg"
            alt="Geripptes Glas mit Apfelwein"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.025_55)] via-[oklch(0.18_0.025_55/0.5)] to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
            <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-3">
              Die Kunst des Genusses
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[oklch(0.97_0.012_75)] text-balance leading-tight">
              Wie man Apfelwein
              <br />
              <em className="text-[oklch(0.72_0.13_80)]">richtig trinkt</em>
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-[oklch(0.18_0.025_55)] py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[oklch(0.97_0.012_75/0.7)] text-lg leading-relaxed font-sans">
              Apfelwein trinken ist eine Kunst — und wie alle Künste hat sie ihre eigenen Regeln,
              Rituale und kleinen Geheimnisse. Wer sie kennt, trinkt besser. Wer sie lebt, trinkt hessisch.
            </p>
          </div>
        </section>

        {/* The Geripptes spotlight */}
        <section className="bg-background py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[460px] overflow-hidden">
              <Image
                src="/images/geripptes.jpg"
                alt="Das klassische Geripptes Glas"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border border-border" />
            </div>
            <div>
              <p className="text-accent text-[10px] tracking-[0.4em] uppercase font-sans mb-4">
                Das Kultglas
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5 leading-tight text-balance">
                Das Geripptes —
                <br />
                <em className="text-accent">mehr als ein Glas</em>
              </h2>
              <div className="w-10 h-[1px] bg-accent mb-6" />
              <div className="flex flex-col gap-4 text-muted-foreground text-sm leading-relaxed font-sans">
                <p>
                  Das Geripptes (gesprochen: "Gerripptes") ist das unverwechselbare Symbol des Apfelweins.
                  Seine charakteristische Rautenmusterung entstand im 19. Jahrhundert und war ursprünglich
                  rein funktional: Die Rippung macht das Glas griffiger, verhindert Abrutschen — besonders
                  wenn die Hände schon etwas weniger sicher sind.
                </p>
                <p>
                  Heute ist das Geripptes ein Kultobjekt. Es wird gesammelt, verschenkt und als Symbol
                  hessischer Identität weltweit erkannt. Kein Apfelwein schmeckt aus einem anderen Glas
                  genauso gut — das ist keine Übertreibung, sondern hessische Gewissheit.
                </p>
                <p>
                  Das klassische Volumen beträgt 0,3 Liter — das "Schöppchen". Einige Wirtschaften
                  servieren auch das "Halbe" (0,5 l), aber das Schöppchen ist der Standard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step by step */}
        <section className="bg-[oklch(0.22_0.03_55)] py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-14">
              <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-3">
                Schritt für Schritt
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[oklch(0.97_0.012_75)] text-balance">
                Der vollendete Apfelweingenuss
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {schritte.map((s) => (
                <div
                  key={s.nr}
                  className="bg-[oklch(0.18_0.025_55/0.5)] border border-[oklch(0.72_0.13_80/0.15)] p-7 hover:border-[oklch(0.72_0.13_80/0.35)] transition-colors duration-300"
                >
                  <span className="font-serif text-4xl text-[oklch(0.72_0.13_80/0.25)] block mb-3 leading-none">{s.nr}</span>
                  <h3 className="font-serif text-lg text-[oklch(0.97_0.012_75)] mb-3">{s.title}</h3>
                  <p className="text-[oklch(0.97_0.012_75/0.55)] text-sm leading-relaxed font-sans">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sorten */}
        <section className="bg-background py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-14">
              <p className="text-accent text-[10px] tracking-[0.4em] uppercase font-sans mb-3">Vielfalt</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
                Die Varianten des Apfelweins
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {sorten.map((s) => (
                <div key={s.name} className="border border-border p-7 bg-card">
                  <h3 className="font-serif text-xl text-foreground mb-4">{s.name}</h3>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <p className="text-[9px] tracking-[0.3em] uppercase text-accent/60 font-sans mb-1">Farbe</p>
                      <p className="text-sm font-sans text-foreground">{s.color}</p>
                    </div>
                    <div>
                      <p className="text-[9px] tracking-[0.3em] uppercase text-accent/60 font-sans mb-1">Geschmack</p>
                      <p className="text-sm font-sans text-foreground">{s.geschmack}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[9px] tracking-[0.3em] uppercase text-accent/60 font-sans mb-1">Ideal für</p>
                      <p className="text-sm font-sans text-foreground">{s.ideal}</p>
                    </div>
                  </div>
                  <div className="h-[1px] bg-border mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans">{s.beschr}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bembel section */}
        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/images/bembel.jpg"
            alt="Der Bembel-Krug"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[oklch(0.12_0.025_55/0.65)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-4">
              Das Wissen
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[oklch(0.97_0.012_75)] mb-4 text-balance">
              Der Bembel hält den Wein kühl
            </h2>
            <p className="text-[oklch(0.97_0.012_75/0.65)] text-base font-sans max-w-lg leading-relaxed">
              Der Steinzeug-Bembel isoliert hervorragend. Ein gut befüllter Bembel hält den Apfelwein
              über Stunden auf Trinktemperatur — ein praktisches Wunder der alten Töpferkunst.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[oklch(0.18_0.025_55)] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-2">Weiter entdecken</p>
              <h2 className="font-serif text-2xl text-[oklch(0.97_0.012_75)]">Was passt zum Apfelwein?</h2>
            </div>
            <Link
              href="/kulinarik"
              className="inline-flex items-center gap-3 bg-[oklch(0.72_0.13_80)] text-[oklch(0.18_0.025_55)] px-7 py-3 text-xs tracking-widest uppercase font-sans hover:bg-[oklch(0.62_0.14_65)] transition-colors shrink-0 group"
            >
              Zur Kulinarik <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
