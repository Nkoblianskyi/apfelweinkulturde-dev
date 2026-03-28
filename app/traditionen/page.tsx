import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'

const wirtschaften = [
  {
    name: 'Zum Gemalten Haus',
    adresse: 'Schweizer Straße 67, Sachsenhausen',
    desc: 'Eine der ältesten und bekanntesten Apfelweinwirtschaften Frankfurts. Das "Gemalte Haus" verdankt seinen Namen den farbenfrohen Wandmalereien, die die gesamte Fassade und den Innenraum schmücken. Seit über 200 Jahren ist es eine Institution für Einheimische und Besucher gleichermaßen.',
  },
  {
    name: 'Wagner',
    adresse: 'Schweizer Straße 71, Sachsenhausen',
    desc: 'Wagner ist berühmt für seinen konsequent traditionellen Betrieb: Kein Bier, kein Wein — nur Apfelwein. Die Wirtschaft gilt als eines der authentischsten Beispiele echter Sachsenhäuser Gastkultur. Holzbänke, lange Tische und ein Bembel auf jedem Tisch — so muss es sein.',
  },
  {
    name: 'Dauth-Schneider',
    adresse: 'Neuer Wall 5–7, Sachsenhausen',
    desc: 'Traditionelle Apfelweinwirtschaft mit großem Biergarten direkt am Mainufer. Im Sommer ist es kaum möglich, hier einen Platz zu bekommen — das "Dauth-Schneider" zieht Generationen von Stammgästen an und ist für viele Frankfurter der Inbegriff eines perfekten Sonntagnachmittags.',
  },
  {
    name: 'Lohninger',
    adresse: 'Schweizer Straße 1, Sachsenhausen',
    desc: 'Eine moderne Interpretation der klassischen Apfelweinwirtschaft — hier trifft gehobene hessische Küche auf den unverwechselbaren Ebbelwoi. Für alle, die Tradition und Zeitgeist verbinden möchten.',
  },
]

const traditionen = [
  {
    title: 'Der Besen-Brauch',
    body: 'Eine der ältesten Traditionen: Wenn ein Apfelweinproduzent frischen Wein ausschenkt, hängt er einen Tannenzweig (Besen) oder Kiefernast über die Eingangstür. Dieses Zeichen signalisiert Passanten: Frischer Ebbelwoi ist da. Heute findet man diesen Brauch noch in manchen traditionellen Wirtschaften des Taunus.',
  },
  {
    title: 'Der Geripptes-Kult',
    body: 'Das Geripptes ist kein gewöhnliches Glas. Seine rautenförmige Rippung verleiht dem Glas Stabilität und dem Trinker Halt — ein Glas, das fürs Anstoßen gemacht ist. Traditionell wird es nie bis zum Rand gefüllt und immer mit dem charakteristischen "Schöppchen" (0,3 Liter) serviert.',
  },
  {
    title: 'Sachsenhausen — das Viertel',
    body: 'Das Stadtviertel Sachsenhausen auf der Südseite des Mains ist die eigentliche Heimat der Apfelweinwirtschaften. Enge Gassen, alte Fachwerkhäuser und das vertraute Klopfen der Geripptes-Gläser — wer hier entlangläuft, versteht, warum der Ebbelwoi mehr als ein Getränk ist.',
  },
  {
    title: 'Schorle & Sauergespritzter',
    body: 'Wer den reinen Apfelwein zu herb findet, greift zum "Sauergespritzten" (mit Mineralwasser) oder "Süßgespritzten" (mit Limonade). Letzteres ist besonders bei Nicht-Hessen oder an heißen Tagen beliebt — und wird von eingefleischten Ebbelwoi-Trinken mit einem milden Lächeln quittiert.',
  },
  {
    title: 'Gemeinschaft & Geselligkeit',
    body: 'In Apfelweinwirtschaften sitzen Fremde an gemeinsamen langen Holztischen. Man rückt zusammen, tauscht sich aus, kommt ins Gespräch. Der Bembel wandert von Glas zu Glas, und keiner bleibt lange fremd. Diese offene Geselligkeit — "Gemutlichkeit" auf Hessisch — ist tief in der Apfelweinkultur verwurzelt.',
  },
  {
    title: 'Die Kelterzeit im Herbst',
    body: 'Von September bis November ist die Zeit der Ernte und Kelterung. Alte Pressen werden in Betrieb genommen, frischer Most fließt — und die ersten "neuen" Apfelweine werden ausgeschenkt. Diese Jahreszeit ist für Hessen das, was die Weinlese für andere Regionen ist: ein Fest der Sinne und der Gemeinschaft.',
  },
]

export default function TraditionenPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
          <Image
            src="/images/frankfurt-sachsenhausen.jpg"
            alt="Sachsenhausen Frankfurt bei Nacht"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.025_55)] via-[oklch(0.18_0.025_55/0.5)] to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
            <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-3">
              Regionale Traditionen
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[oklch(0.97_0.012_75)] text-balance leading-tight">
              Sachsenhausen &
              <br />
              <em className="text-[oklch(0.72_0.13_80)]">der Geist des Ebbelwoi</em>
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-[oklch(0.18_0.025_55)] py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[oklch(0.97_0.012_75/0.7)] text-lg leading-relaxed font-sans">
              Frankfurt ohne Apfelwein ist wie der Main ohne Wasser. In Sachsenhausen wurde der Ebbelwoi
              zur Lebensphilosophie — und die Wirtshäuser zu Tempeln der einfachen, ehrlichen Gemeinschaft.
            </p>
          </div>
        </section>

        {/* Traditions grid */}
        <section className="bg-background py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-14">
              <p className="text-accent text-[10px] tracking-[0.4em] uppercase font-sans mb-3">Bräuche & Rituale</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
                Was den Ebbelwoi ausmacht
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {traditionen.map((t, idx) => (
                <div key={t.title} className="border border-border p-7 bg-card hover:border-accent/40 transition-colors duration-300">
                  <span className="text-accent/30 font-serif text-3xl font-bold block mb-3 leading-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg text-foreground mb-3">{t.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image + text */}
        <section className="bg-[oklch(0.22_0.03_55)] py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-4">
                Das Epizentrum
              </p>
              <h2 className="font-serif text-3xl text-[oklch(0.97_0.012_75)] mb-6 leading-tight text-balance">
                Alt-Sachsenhausen:
                <br />
                <em className="text-[oklch(0.72_0.13_80)]">Pilgerstätte für Ebbelwoi-Liebhaber</em>
              </h2>
              <div className="w-10 h-[1px] bg-[oklch(0.72_0.13_80/0.5)] mb-6" />
              <p className="text-[oklch(0.97_0.012_75/0.6)] text-sm leading-relaxed font-sans mb-5">
                Das Viertel Alt-Sachsenhausen ist eine der besterhaltenen historischen Stadtviertel Frankfurts.
                Kopfsteinpflaster, Fachwerkhäuser und der unverwechselbare Duft von Apfelwein — hier hat sich
                seit Jahrzehnten kaum etwas verändert.
              </p>
              <p className="text-[oklch(0.97_0.012_75/0.6)] text-sm leading-relaxed font-sans">
                Entlang der Schweizer Straße, der Textorstraße und am Schaumainkai reihen sich Wirtschaft
                an Wirtschaft. Jede hat ihre eigene Geschichte, ihren eigenen Stamm — und ihren eigenen Bembel.
              </p>
            </div>
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="/images/frankfurt-sachsenhausen.jpg"
                alt="Alte Fachwerkhäuser in Sachsenhausen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border border-[oklch(0.72_0.13_80/0.15)]" />
            </div>
          </div>
        </section>

        {/* Wirtschaften */}
        <section className="bg-background py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-14">
              <p className="text-accent text-[10px] tracking-[0.4em] uppercase font-sans mb-3">Klassiker</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
                Die legendären Wirtschaften
              </h2>
              <p className="text-muted-foreground text-sm mt-4 max-w-xl font-sans leading-relaxed">
                Diese Apfelweinwirtschaften sind keine Restaurants — sie sind lebendige Kulturdenkmäler.
                Hier trinkt man nicht nur, hier gehört man dazu.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {wirtschaften.map((w, idx) => (
                <div key={w.name} className="flex gap-5 border-l-2 border-accent/30 pl-6 py-2">
                  <div>
                    <span className="text-accent/40 text-xs font-sans tracking-widest uppercase">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-xl text-foreground mt-1 mb-1">{w.name}</h3>
                    <p className="text-accent text-[11px] tracking-wide font-sans mb-3">{w.adresse}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[oklch(0.18_0.025_55)] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-2">Weiter entdecken</p>
              <h2 className="font-serif text-2xl text-[oklch(0.97_0.012_75)]">Wie trinkt man Apfelwein richtig?</h2>
            </div>
            <Link
              href="/trinken"
              className="inline-flex items-center gap-3 bg-[oklch(0.72_0.13_80)] text-[oklch(0.18_0.025_55)] px-7 py-3 text-xs tracking-widest uppercase font-sans hover:bg-[oklch(0.62_0.14_65)] transition-colors shrink-0 group"
            >
              Die Kunst des Trinkens <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
