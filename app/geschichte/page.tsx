import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'

const timeline = [
  {
    year: 'ca. 100 n. Chr.',
    title: 'Römische Wurzeln',
    body: 'Die Römer brachten den Apfelanbau in das Gebiet des heutigen Hessens. Archäologische Funde belegen, dass bereits in der Römerzeit Äpfel vergoren wurden — ein einfaches Verfahren, das Haltbarkeit und Genuss vereinte. Die fruchtbaren Täler des Mains und des Taunus erwiesen sich als ideale Anbaugebiete.',
  },
  {
    year: '8.–12. Jahrhundert',
    title: 'Klöster & Klosterkeller',
    body: 'Im Mittelalter waren es vor allem Klöster, die die Obstkultur systematisch pflegten. Mönche kultivierten Apfelsorten und verfeinerten die Kelterung. Der Apfelmost — damals noch wesentlich grober als heute — diente als günstiger und haltbarer Ersatz für teures Trinkwasser oder Bier. Klöster wie Fulda und Lorsch spielten dabei eine wichtige Rolle.',
  },
  {
    year: '16.–18. Jahrhundert',
    title: 'Frankfurter Stadtkultur',
    body: 'In Frankfurt am Main entwickelte sich eine eigene Apfelweinkultur. Die Stadt war ein bedeutender Handelsknotenpunkt, und mit dem Wohlstand wuchs auch der Genuss. Erste Apfelweinwirtschaften entstanden in Sachsenhausen, dem Viertel südlich des Mains, das bis heute das Herz der Ebbelwoi-Kultur geblieben ist. Handwerker, Bürger und Kaufleute trafen sich hier zum Ausschank.',
  },
  {
    year: '1754',
    title: 'Die Pest und der Ebbelwoi',
    body: 'Eine der bekanntesten Legenden besagt, dass der Frankfurter Rat während einer Pest-Epidemie den Bierbrauern das Handwerk untersagte — und die Bürger daraufhin auf Apfelwein umstiegen. Ob dies der historischen Wahrheit entspricht, ist umstritten. Fest steht aber: Ende des 18. Jahrhunderts war der Apfelwein in Frankfurt allgegenwärtig und fest in der Alltagskultur verankert.',
  },
  {
    year: '19. Jahrhundert',
    title: 'Industrialisierung & Blütezeit',
    body: 'Mit der Industrialisierung wuchs Frankfurt rasant. Die Arbeiterklasse trank Apfelwein — er war günstig, stärkend und lokal verfügbar. Die Apfelweinwirtschaften in Sachsenhausen wurden zu sozialen Zentren. Bekannte Wirtschaften wie "Zum Gemalten Haus" oder "Wagner" entstanden in dieser Zeit und gelten bis heute als Institutionen. Auch der ikonische Bembel-Krug und das Geripptes-Glas wurden in dieser Epoche zur Norm.',
  },
  {
    year: '20. Jahrhundert',
    title: 'Krieg, Wiederaufbau & Identität',
    body: 'Trotz der Verwüstungen des Zweiten Weltkriegs und dem massiven gesellschaftlichen Wandel der Nachkriegszeit blieb der Apfelwein ein Symbol der hessischen Identität. In einer Zeit, in der vieles verloren ging, wurde der Ebbelwoi zum Anker des Lokalbewusstseins. Das Apfelweinfest, gegründet 1986, wurde schnell zu einem der beliebtesten Stadtfeste Frankfurts.',
  },
  {
    year: 'Heute',
    title: 'Renaissance & Moderne',
    body: 'Heute erlebt der Apfelwein eine neue Blüte. Junge Keltermeister experimentieren mit neuen Sorten, Reifeverfahren und sogar naturtrüben Bio-Varianten. Gleichzeitig besinnen sich viele auf die alten Traditionen. Apfelwein wird exportiert, prämiert und in internationalen Weinführern besprochen — ohne jedoch seinen ehrlichen, bodenständigen Charakter zu verlieren.',
  },
]

export default function GeschichtePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
          <Image
            src="/images/apfelwein-geschichte.jpg"
            alt="Historische Apfelgärten in Hessen"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.025_55)] via-[oklch(0.18_0.025_55/0.5)] to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
            <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-3">
              Geschichte
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[oklch(0.97_0.012_75)] text-balance leading-tight">
              Zweitausend Jahre
              <br />
              <em className="text-[oklch(0.72_0.13_80)]">im Glas</em>
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-[oklch(0.18_0.025_55)] py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[oklch(0.97_0.012_75/0.7)] text-lg leading-relaxed font-sans">
              Die Geschichte des Apfelweins ist die Geschichte Hessens selbst — geprägt von Bauern und Bürgern,
              von Klöstern und Kneipen, von Kriegen und Wiedergeburt. Kein anderes Getränk trägt die Seele dieser
              Region so tief in sich wie der Ebbelwoi.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-background py-20 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-0">
              {timeline.map((item, idx) => (
                <div key={item.year} className="flex gap-6 md:gap-10 group">
                  {/* Timeline left: year + line */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0 group-first:bg-accent" />
                    {idx < timeline.length - 1 && (
                      <div className="w-[1px] flex-1 bg-border mt-2" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-12 flex-1">
                    <p className="text-accent text-[10px] tracking-[0.3em] uppercase font-sans mb-1">
                      {item.year}
                    </p>
                    <h2 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="bg-[oklch(0.22_0.03_55)] py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[oklch(0.72_0.13_80/0.4)] text-5xl font-serif block mb-4">&ldquo;</span>
            <blockquote className="font-serif text-xl md:text-2xl text-[oklch(0.97_0.012_75/0.85)] leading-relaxed italic">
              Der Apfelwein ist das flüssige Gedächtnis Hessens — jeder Schluck
              erzählt von Jahrhunderten gelebter Geschichte.
            </blockquote>
            <span className="text-[oklch(0.72_0.13_80/0.4)] text-5xl font-serif block mt-2 rotate-180">&ldquo;</span>
          </div>
        </section>

        {/* Image grid */}
        <section className="bg-background py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src="/images/frankfurt-sachsenhausen.jpg"
                  alt="Sachsenhausen Frankfurt historisch"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[oklch(0.12_0.025_55/0.3)]" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="text-[oklch(0.97_0.012_75)] font-serif text-lg">
                    Sachsenhausen — das Herz des Ebbelwoi
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="relative h-[180px] overflow-hidden">
                  <Image
                    src="/images/bembel.jpg"
                    alt="Traditioneller Bembel"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="bg-card border border-border p-6">
                  <h3 className="font-serif text-xl text-foreground mb-3">Der Bembel — ein Stück Geschichte</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                    Der traditionelle Bembel-Krug aus grauem Steinzeug mit kobaltblauem Blumenmuster
                    stammt ursprünglich aus dem Westerwald. Seit dem 19. Jahrhundert ist er das
                    unverwechselbare Symbol der Apfelweinkultur — jede Wirtschaft hat ihren eigenen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next page CTA */}
        <section className="bg-[oklch(0.18_0.025_55)] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[oklch(0.72_0.13_80)] text-[10px] tracking-[0.4em] uppercase font-sans mb-2">Weiter entdecken</p>
              <h2 className="font-serif text-2xl text-[oklch(0.97_0.012_75)]">Die lebendigen Traditionen Frankfurts</h2>
            </div>
            <Link
              href="/traditionen"
              className="inline-flex items-center gap-3 bg-[oklch(0.72_0.13_80)] text-[oklch(0.18_0.025_55)] px-7 py-3 text-xs tracking-widest uppercase font-sans hover:bg-[oklch(0.62_0.14_65)] transition-colors shrink-0 group"
            >
              Zu den Traditionen <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
