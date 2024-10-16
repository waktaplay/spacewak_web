import { ReactNode } from 'react'

export const metadata = {
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
    image: '',
    url: '',
  },
  twitter: {
    card: '',
    title: '',
    description: '',
    images: '',
  },
  verification: {},
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
