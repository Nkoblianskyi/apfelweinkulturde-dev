import type { Metadata } from 'next'
import { Lora, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Apfelweinkultur – Die Seele Hessens im Glas',
  description: 'Entdecken Sie die Geschichte, Traditionen und Kultur des Apfelweins – von Frankfurt bis tief ins Herz Hessens. Alles über Ebbelwoi, Geripptes und Bembel.',
  keywords: 'Apfelwein, Ebbelwoi, Frankfurt, Hessen, Bembel, Geripptes, Apfelweinkultur, hessische Tradition',
  openGraph: {
    title: 'Apfelweinkultur – Die Seele Hessens im Glas',
    description: 'Entdecken Sie Geschichte, Traditionen und Kultur des deutschen Apfelweins.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${lora.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
