import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080a0c',
}

export const metadata: Metadata = {
  title: 'uru.zone — strength, reinvented',
  description: 'URU.zone — AI coaching + strength wearable. real-time feedback. velocity-based training. every rep measured. every set optimised.',
  keywords: ['strength training', 'wearable', 'AI coaching', 'velocity based training', 'fitness tracker'],
  authors: [{ name: 'URU.zone' }],
  openGraph: {
    title: 'uru.zone — strength, reinvented',
    description: 'AI coaching + strength wearable. real-time feedback. velocity-based training.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'uru.zone — strength, reinvented',
    description: 'AI coaching + strength wearable. real-time feedback. velocity-based training.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}