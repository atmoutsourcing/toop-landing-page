import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Toaster } from 'sonner'

import './globals.css'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { ThemeProvider } from '@/components/ui/theme-provider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})
const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  variable: '--font-plusJakartaSans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Toop',
  description: 'toop emm system',
  icons: 'icon-white.png',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plus_Jakarta_Sans.variable} overflow-x-hidden antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
          <Toaster richColors position="top-right" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
