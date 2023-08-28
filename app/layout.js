import { Inter } from 'next/font/google'
import '@/styles/main.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Astro Map',
  description: 'Astro Map is an interactive astronomy application that allows you to embark on a journey into the depths of the sky',
}

import Headers from '@/components/header'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header>
          <Headers />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
