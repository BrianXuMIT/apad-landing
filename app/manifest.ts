import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'APADCode',
    short_name: 'APADCode',
    description:
      'A live, AI-led coding interview platform for evaluating how candidates think, communicate, and reason.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/favicon.png',
        sizes: '672x672',
        type: 'image/png',
      },
    ],
  }
}
