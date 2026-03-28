import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const previewCards = [
  {
    href: '/geschichte',
    label: 'Geschichte',
    title: 'Vom römischen Apfelgarten bis ins Geripptes',
    desc: 'Über 2.000 Jahre Tradition — entdecken Sie, wie der Apfelwein zur Seele Hessens wurde.',
    image: '/images/apfelwein-geschichte.jpg',
    tag: 'Historisches',
  },
  {
    href: '/traditionen',
    label: 'Traditionen',
    title: 'Sachsenhausen & der Bembel',
    desc: 'Apfelweinwirtschaften, Geripptes-Glas und der Bembel-Krug — lebendige Kultur in Frankfurt.',
    image: '/images/frankfurt-sachsenhausen.jpg',
    tag: 'Kultur',
  },
  {
    href: '/trinken',
    label: 'Trinken',
    title: 'Die Kunst des Einschenkens',
    desc: 'Warum das Geripptes kein gewöhnliches Glas ist — und wie man Apfelwein richtig genießt.',
    image: '/images/geripptes.jpg',
    tag: 'Genuss',
  },
  {
    href: '/kulinarik',
    label: 'Kulinarik',
    title: "Handkäs\u2019, Pretzeln & mehr",
    desc: 'Welche Speisen den Apfelwein erst vollenden — hessische Küche in ihrer ehrlichsten Form.',
    image: '/images/kulinarik.jpg',
    tag: 'Kulinarik',
  },
  {
    href: '/feste',
    label: 'Feste & Feiern',
    title: 'Das Apfelweinfest Frankfurt',
    desc: 'Wenn die Stadt im August im Zeichen des Ebbelwoi steht — Festivals, Bräuche und Gemeinschaft.',
    image: '/images/feste.jpg',
    tag: 'Feste',
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
          <Image
            src="/images/hero-apfelwein.jpg"
            alt="Apfelwein im Geripptes-Glas mit Bembel-Krug im Hintergrund"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.025_55)] via-[oklch(0.18_0.025_55/0.4)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.025_55/0.6)] via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[oklch(0.72_0.13_80/0.5)] to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28 w-full">
            <div className="max-w-2xl">
              <p className="text-[oklch(0.72_0.13_80)] text-xs tracking-[0.4em] uppercase font-sans mb-5">
                Hessen &middot; Frankfurt &middot; Seit Jahrhunderten
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[oklch(0.97_0.012_75)] mb-6 text-pretty">
                Die Seele Hessens
                <br />
                <em className="text-[oklch(0.72_0.13_80)] not-italic">im Glas</em>
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[oklch(0.72_0.13_80/0.6)]" />
                <span className="text-[oklch(0.72_0.13_80/0.8)] text-lg">&#10022;</span>
                <div className="w-12 h-[1px] bg-[oklch(0.72_0.13_80/0.6)]" />
              </div>
              <p className="text-[oklch(0.97_0.012_75/0.7)] text-lg leading-relaxed font-sans mb-10 max-w-xl">
                Apfelwein — oder Ebbelwoi, wie die Frankfurter sagen — ist mehr als ein Getränk.
                Er ist Geschichte, Heimat und Handwerk in einem kühlen Geripptes.
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <Link
                  href="/geschichte"
                  className="inline-flex items-center gap-3 bg-[oklch(0.72_0.13_80)] text-[oklch(0.18_0.025_55)] px-8 py-3.5 text-xs tracking-widest uppercase font-sans hover:bg-[oklch(0.62_0.14_65)] transition-colors duration-300 group"
                >
                  Geschichte entdecken
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/trinken"
                  className="text-xs tracking-widest uppercase font-sans text-[oklch(0.97_0.012_75/0.55)] hover:text-[oklch(0.72_0.13_80)] transition-colors duration-200 border-b border-[oklch(0.97_0.012_75/0.2)] pb-0.5"
                >
                  Wie man trinkt
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 opacity-50">
            <span className="text-[oklch(0.97_0.012_75)] text-[9px] tracking-[0.3em] uppercase font-sans rotate-90 origin-center">
              Scroll
            </span>
            <div className="w-[1px] h-10 bg-[oklch(0.72_0.13_80/0.5)]" />
          </div>
        </section>

        {/* INTRO QUOTE */}
        <section className="bg-[oklch(0.18_0.025_55)] py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[oklch(0.72_0.13_80/0.5)] text-4xl font-serif leading-none block mb-4">&ldquo;</span>
            <blockquote className="font-serif text-xl md:text-2xl text-[oklch(0.97_0.012_75/0.85)] leading-relaxed italic">
              Wer den Ebbelwoi nicht kennt, kennt Frankfurt nicht.
              Und wer Frankfurt nicht kennt, kennt Hessen nicht.
            </blockquote>
            <span className="text-[oklch(0.72_0.13_80/0.5)] text-4xl font-serif leading-none block mt-2 rotate-180">&ldquo;</span>
            <p className="mt-6 text-xs tracking-[0.3em] uppercase font-sans text-[oklch(0.97_0.012_75/0.35)]">
              Hessische Volksweisheit
            </p>
          </div>
        </section>

        {/* PREVIEW CARDS */}
        <section className="bg-background py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-14">
              <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-4">
                Themen
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
                Die Welt des Apfelweins
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-[1px] bg-border" />
                <span className="text-accent text-sm">&#10022;</span>
                <div className="w-16 h-[1px] bg-border" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* Feature card */}
              <Link
                href={previewCards[0].href}
                className="group relative h-[420px] md:h-[480px] overflow-hidden"
              >
                <Image
                  src={previewCards[0].image}
                  alt={previewCards[0].title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.025_55/0.88)] via-[oklch(0.12_0.025_55/0.3)] to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <span className="inline-block text-[oklch(0.72_0.13_80)] text-[9px] tracking-[0.4em] uppercase font-sans border border-[oklch(0.72_0.13_80/0.4)] px-3 py-1 mb-4">
                    {previewCards[0].tag}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-[oklch(0.97_0.012_75)] mb-2 text-balance">
                    {previewCards[0].title}
                  </h3>
                  <p className="text-[oklch(0.97_0.012_75/0.6)] font-sans text-sm leading-relaxed max-w-xl mb-5">
                    {previewCards[0].desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[oklch(0.72_0.13_80)] text-xs tracking-widest uppercase font-sans group-hover:gap-3 transition-all">
                    Mehr erfahren <ArrowRight size={12} />
                  </span>
                </div>
              </Link>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                {previewCards.slice(1, 3).map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group relative h-[300px] md:h-[360px] overflow-hidden"
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.025_55/0.85)] via-[oklch(0.12_0.025_55/0.2)] to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="inline-block text-[oklch(0.72_0.13_80)] text-[9px] tracking-[0.4em] uppercase font-sans border border-[oklch(0.72_0.13_80/0.4)] px-3 py-1 mb-3">
                        {card.tag}
                      </span>
                      <h3 className="font-serif text-xl text-[oklch(0.97_0.012_75)] mb-1 text-balance">{card.title}</h3>
                      <p className="text-[oklch(0.97_0.012_75/0.55)] font-sans text-sm leading-relaxed mb-4">{card.desc}</p>
                      <span className="inline-flex items-center gap-2 text-[oklch(0.72_0.13_80)] text-xs tracking-widest uppercase font-sans group-hover:gap-3 transition-all">
                        Mehr erfahren <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-2 gap-6">
                {previewCards.slice(3).map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group relative h-[300px] md:h-[340px] overflow-hidden"
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.025_55/0.85)] via-[oklch(0.12_0.025_55/0.2)] to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="inline-block text-[oklch(0.72_0.13_80)] text-[9px] tracking-[0.4em] uppercase font-sans border border-[oklch(0.72_0.13_80/0.4)] px-3 py-1 mb-3">
                        {card.tag}
                      </span>
                      <h3 className="font-serif text-xl text-[oklch(0.97_0.012_75)] mb-1 text-balance">{card.title}</h3>
                      <p className="text-[oklch(0.97_0.012_75/0.55)] font-sans text-sm leading-relaxed mb-4">{card.desc}</p>
                      <span className="inline-flex items-center gap-2 text-[oklch(0.72_0.13_80)] text-xs tracking-widest uppercase font-sans group-hover:gap-3 transition-all">
                        Mehr erfahren <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* APFELWEIN VS CIDER */}
        <section className="bg-[oklch(0.22_0.03_55)] py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-1">
                <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-4">
                  Warum Apfelwein?
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-[oklch(0.97_0.012_75)] leading-tight text-balance">
                  Kein Cider &mdash;
                  <br />
                  <em className="text-[oklch(0.72_0.13_80)]">ein Kulturgetränk</em>
                </h2>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-3 gap-8">
                {[
                  { title: 'Trocken & herb', body: 'Kein zugesetzter Zucker, volle Vergärung — der Geschmack kommt allein von der Frucht und der Zeit.' },
                  { title: 'Regionale Äpfel', body: 'Besondere Apfelsorten aus dem Taunus und der Wetterau verleihen dem Ebbelwoi seinen unverwechselbaren Charakter.' },
                  { title: 'Handwerk', body: 'Von der Ernte bis zur Kelterung — in kleinen Betrieben nach alten Methoden, die seit Generationen weitergegeben werden.' },
                ].map(({ title, body }) => (
                  <div key={title} className="border-l border-[oklch(0.72_0.13_80/0.3)] pl-5">
                    <h3 className="font-serif text-[oklch(0.72_0.13_80)] text-lg mb-2">{title}</h3>
                    <p className="text-[oklch(0.97_0.012_75/0.55)] text-sm leading-relaxed font-sans">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BEMBEL BANNER */}
        <section className="relative h-[400px] md:h-[480px] overflow-hidden">
          <Image
            src="/images/bembel.jpg"
            alt="Traditioneller Bembel-Krug für Apfelwein"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[oklch(0.12_0.025_55/0.7)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-4">
              Das Symbol
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[oklch(0.97_0.012_75)] mb-6 text-balance">
              Der Bembel
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[oklch(0.72_0.13_80/0.5)]" />
              <span className="text-[oklch(0.72_0.13_80/0.7)] text-sm">&#10022;</span>
              <div className="w-12 h-[1px] bg-[oklch(0.72_0.13_80/0.5)]" />
            </div>
            <p className="text-[oklch(0.97_0.012_75/0.7)] text-lg font-sans max-w-lg leading-relaxed">
              Der graue Steinzeugkrug mit blauem Blumenmuster ist das
              unverwechselbare Erkennungszeichen jeder Apfelweinwirtschaft.
            </p>
          </div>
        </section>

        {/* IDENTITÄT */}
        <section className="bg-background py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src="/images/identitaet.jpg"
                  alt="Hessische Landschaft mit Apfelgärten"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 border border-[oklch(0.72_0.13_80/0.15)]" />
              </div>
              <div>
                <p className="text-accent text-[10px] tracking-[0.4em] uppercase font-sans mb-4">
                  Hessische Identität
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance leading-tight">
                  Mehr als ein Getränk &mdash;
                  <br />
                  <em className="text-accent">eine Heimat</em>
                </h2>
                <div className="w-10 h-[1px] bg-accent mb-6" />
                <div className="flex flex-col gap-5 text-muted-foreground text-sm leading-relaxed font-sans">
                  <p>
                    Für die Hessen ist der Apfelwein das, was das Bier für Bayern und der Wein für die Rheinpfalz ist:
                    Ausdruck von Herkunft, Stolz und Gemeinschaft. Beim Ebbelwoi sitzen Generationen zusammen,
                    werden Geschichten erzählt und Traditionen weitergegeben.
                  </p>
                  <p>
                    Kein Wunder also, dass Hessen und Frankfurt am Main als die eigentliche Heimat des Apfelweins
                    gelten — hier wird er nicht nur getrunken, sondern gelebt. Wer einmal in einer echten
                    Sachsenhäuser Apfelweinwirtschaft saß, versteht warum.
                  </p>
                </div>
                <Link
                  href="/traditionen"
                  className="inline-flex items-center gap-3 mt-8 text-xs tracking-widest uppercase font-sans text-foreground border-b border-border pb-0.5 hover:text-accent hover:border-accent transition-colors duration-200 group"
                >
                  Traditionen erkunden <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  )
}
