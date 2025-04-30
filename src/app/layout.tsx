import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Geist, Geist_Mono, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { Details } from '@/presentation/shared/components/layout/Details'
import { Header } from '@/presentation/shared/components/layout/Header'
import { Footer } from '@/presentation/shared/components/layout/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const bebasNeue = Bebas_Neue({
  variable: '--font-bebas-neue',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Isis Andrade',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        <Details />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
