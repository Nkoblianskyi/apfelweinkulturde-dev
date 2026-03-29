import Image from 'next/image'
import Link from 'next/link'
import { AlcoholNoticeCard } from '@/components/alcohol-notice'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'

const gerichte = [
  {
    name: 'Handkäs mit Musik',
    typ: 'Käsegericht',
    warum: 'Die Säure des Apfelweins kontrastiert perfekt mit dem kräftigen Geschmack des Handkäses.',
    beschr: 'Der hessische Sauermilchkäse wird mit Essig, Öl, Zwiebeln und Kümmel mariniert. "Mit Musik" bezieht sich humorvoll auf die Wirkung der Zwiebeln. Ein Muss in jeder Apfelweinwirtschaft — günstig, ehrlich, unvergesslich.',
  },
  {
    name: 'Grüne Soße (Frankfurter Grie Soß)',
    typ: 'Beilage / Hauptgericht',
    warum: 'Die frischen Kräuter harmonieren wunderbar mit dem trockenen, frischen Charakter des Ebbelwoi.',
    beschr: 'Frankfurts berühmtestes Gericht: eine Kräutersoße aus sieben Kräutern (Borretsch, Kerbel, Kresse, Petersilie, Pimpinelle, Sauerampfer, Schnittlauch) mit Eiern, Sauerrahm und etwas Zitrone. Johann Wolfgang von Goethe liebte sie.',
  },
  {
    name: 'Rippchen mit Kraut',
    typ: 'Hauptgericht',
    warum: 'Das deftige Fleisch und das saure Kraut verlangen nach dem belebenden Zug eines guten Ebbelwoi.',
    beschr: 'Gepökelte Schweinerippchen mit Sauerkraut — ein klassisches, deftiges Wirtshausgericht. In Kombination mit Apfelwein ist das ein Paar, das seit Jahrhunderten zusammengehört.',
  },
  {
    name: 'Frankfurter Würstchen',
    typ: 'Snack / Beilage',
    warum: 'Leicht und würzig — der ideale Begleiter für einen langen Abend mit dem Bembel.',
    beschr: 'Die echte Frankfurter Würstchen (mit PGI-Siegel) sind dünn, leicht geräuchert und werden in heißem — nicht kochendem — Wasser erwärmt. Mit Senf serviert, sind sie der perfekte Apfelweinsnack.',
  },
  {
    name: 'Pretzel & Laugengebäck',
    typ: 'Snack',
    warum: 'Das salzige Laugengebäck unterstreicht die Fruchtigkeit und Säure des Apfelweins.',
    beschr: 'Frische, knusprige Brezeln oder Laugenbrötchen sind ein unkomplizierter Begleiter, der nie fehlt. Die Salzigkeit lässt jeden Schluck Apfelwein frischer wirken.',
  },
  {
    name: 'Bethmännchen',
    typ: 'Dessert / Süßes',
    warum: 'Das Mandelmarzipan bietet einen süßen Kontrapunkt zum herben Apfelwein.',
    beschr: 'Diese kleinen Marzipankugeln sind ein Frankfurter Weihnachtsgebäck, das mittlerweile ganzjährig erhältlich ist. Sie gehen auf die Kaufmannsfamilie Bethmann zurück und sind ein köstlicher Abschluss nach einem Apfelweinabend.',
  },
]

export default function KulinarikPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
          <Image
            src="/images/kulinarik.jpg"
            alt="Hessische Speisen mit Apfelwein"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.025_55)] via-[oklch(0.18_0.025_55/0.5)] to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
            <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-3">
              Kulinarik
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[oklch(0.97_0.012_75)] text-balance leading-tight">
              Was auf den Tisch
              <br />
              <em className="text-[oklch(0.72_0.13_80)]">gehört</em>
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-[oklch(0.18_0.025_55)] py-16 px-6">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
            <p className="text-[oklch(0.97_0.012_75/0.7)] text-lg leading-relaxed font-sans">
              Apfelwein trinkt man nicht alleine — und schon gar nicht ohne Essen. Die hessische Küche
              ist ehrlich, herzhaft und direkt: Sie vertragt sich perfekt mit dem herb-sauren Charakter
              des Ebbelwoi. Hier sind die klassischen Begleiter.
            </p>
            <AlcoholNoticeCard className="w-full max-w-xl text-left" />
          </div>
        </section>

        {/* Food cards */}
        <section className="bg-background py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-14">
              <p className="text-accent text-[10px] tracking-[0.4em] uppercase font-sans mb-3">Speisen</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
                Die klassischen Begleiter
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              {/* Feature dish */}
              <div className="grid md:grid-cols-2 gap-0 border border-border overflow-hidden bg-card">
                <div className="relative h-[300px] md:h-auto overflow-hidden">
                  <Image
                    src="/images/kulinarik.jpg"
                    alt="Handkäs mit Musik"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="inline-block text-accent text-[9px] tracking-[0.3em] uppercase font-sans border border-accent/30 px-3 py-1 mb-4 w-fit">
                    {gerichte[0].typ}
                  </span>
                  <h3 className="font-serif text-2xl text-foreground mb-3">{gerichte[0].name}</h3>
                  <div className="h-[1px] bg-border mb-4" />
                  <p className="text-accent text-sm font-sans italic mb-3 leading-relaxed">
                    Warum es passt: {gerichte[0].warum}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                    {gerichte[0].beschr}
                  </p>
                </div>
              </div>

              {/* Grid dishes */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gerichte.slice(1).map((g) => (
                  <div key={g.name} className="border border-border p-7 bg-card hover:border-accent/30 transition-colors duration-300">
                    <span className="inline-block text-accent text-[9px] tracking-[0.3em] uppercase font-sans border border-accent/20 px-2 py-0.5 mb-3">
                      {g.typ}
                    </span>
                    <h3 className="font-serif text-xl text-foreground mb-3">{g.name}</h3>
                    <p className="text-accent/80 text-xs font-sans italic mb-3 leading-relaxed border-l border-accent/20 pl-3">
                      {g.warum}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">{g.beschr}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wine pairing philosophy */}
        <section className="bg-[oklch(0.22_0.03_55)] py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-4">
                Philosophie
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-[oklch(0.97_0.012_75)] leading-tight text-balance">
                Essen &
                <em className="text-[oklch(0.72_0.13_80)]"> Ebbelwoi</em>
              </h2>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
              {[
                { title: 'Säure als Brücke', body: 'Die natürliche Säure des Apfelweins "schneidet" durch Fettigkeit und reinigt den Gaumen — ein natürlicher Begleiter für deftige, herzhafte Gerichte.' },
                { title: 'Trockenheit ergänzt', body: 'Da Apfelwein kein residualen Zucker hat, konkurriert er nicht mit Speisen um Süße — er ergänzt sie stattdessen und macht jeden Bissen klarer.' },
                { title: 'Regional denken', body: 'Das Prinzip der regionalen Küche: Was in derselben Landschaft wächst, passt auch zusammen. Hessische Äpfel, hessischer Käse, hessisches Brot.' },
                { title: 'Einfachheit als Tugend', body: 'Die hessische Küche ist nicht raffiniert — sie ist ehrlich. Und ehrliches Essen verlangt nach einem ehrlichen Getränk: dem Ebbelwoi.' },
              ].map(({ title, body }) => (
                <div key={title} className="border-l border-[oklch(0.72_0.13_80/0.3)] pl-5">
                  <h3 className="font-serif text-[oklch(0.72_0.13_80)] text-base mb-2">{title}</h3>
                  <p className="text-[oklch(0.97_0.012_75/0.55)] text-sm leading-relaxed font-sans">{body}</p>
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
              <h2 className="font-serif text-2xl text-[oklch(0.97_0.012_75)]">Feste & Feiern rund um den Apfelwein</h2>
            </div>
            <Link
              href="/feste"
              className="inline-flex items-center gap-3 bg-[oklch(0.72_0.13_80)] text-[oklch(0.18_0.025_55)] px-7 py-3 text-xs tracking-widest uppercase font-sans hover:bg-[oklch(0.62_0.14_65)] transition-colors shrink-0 group"
            >
              Zu den Festen <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
