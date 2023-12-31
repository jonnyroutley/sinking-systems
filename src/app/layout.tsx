import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { VT323 } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const vt323 = VT323({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sinking systems',
  description: "it's going down...",
}

const bodyClassName = `${vt323.className} bg-gradient-to-b from-green-700 via-emerald-900 to-slate-900 text-purple-400`
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={bodyClassName}>{children}</body>
    </html>
  )
}
