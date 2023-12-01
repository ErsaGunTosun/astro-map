import { Inter } from 'next/font/google'

import '@/styles/reset.css'
import '@/styles/main.css'

const inter = Inter({ subsets: ["latin"] });

import Favicon from "@/public/icons/favicon.ico";


export const metadata = {
  title: "Astro Map",
  description:
    "Astro Map is an interactive astronomy application that allows you to embark on a journey into the depths of the sky",
  icons:[{ rel: 'icon', url: Favicon.src }]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
<body>
          {children}
      </body>
    </html>
  )
}
