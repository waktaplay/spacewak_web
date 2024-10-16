import { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'SpaceWak',
  description: '',
  // metadataBase: new URL('/'),
  alternates: {
    canonical: '',
  },
  openGraph: {
    type: 'website',
    title: '',
    description: '',
    images: '',
    url: '',
  },
  verification: {},
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
