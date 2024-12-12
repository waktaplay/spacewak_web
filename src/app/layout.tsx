import { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry'

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
      <body>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
