import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'APADCode - Live AI Coding Interviews',
  description: 'A live, AI-led coding interview that evaluates how candidates think, communicate, and reason—not just whether their code passes tests.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
