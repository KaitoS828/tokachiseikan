import type { Metadata, Viewport } from 'next'
import { Noto_Serif_JP, Zen_Kaku_Gothic_New } from 'next/font/google'
import './globals.css'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-zen-kaku',
  display: 'swap',
})

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://tokachiseikan.vercel.app'),
  title: {
    default: '十勝製函 | 北海道広尾町の木箱製造メーカー',
    template: '%s | 十勝製函',
  },
  description:
    '北海道広尾町の十勝製函。圧倒的な生産力と職人技で水産物流を支える地域インフラ企業。1日4,000箱の生産能力、設計・加工・組立の自社完結体制。水産用木箱からミニチュア木箱まで。',
  keywords: [
    '十勝製函',
    '木箱',
    '木箱製造',
    '水産用木箱',
    '北海道',
    '広尾町',
    '十勝',
    '梱包資材',
    'ミニチュア木箱',
    '特注木箱',
    'OEM',
  ],
  authors: [{ name: '有限会社十勝製函' }],
  creator: '有限会社十勝製函',
  publisher: '有限会社十勝製函',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://tokachiseikan.vercel.app',
    siteName: '十勝製函',
    title: '十勝製函 | 北海道広尾町の木箱製造メーカー',
    description:
      '圧倒的な生産力と職人技で水産物流を支える。1日4,000箱の生産能力を持つ北海道広尾町の木箱製造メーカー。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '十勝製函 - 北海道広尾町の木箱製造メーカー',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '十勝製函 | 北海道広尾町の木箱製造メーカー',
    description:
      '圧倒的な生産力と職人技で水産物流を支える。1日4,000箱の生産能力を持つ北海道広尾町の木箱製造メーカー。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tokachiseikan.vercel.app',
  },
  verification: {
    google: '58jKRGv7e9ttvsW0jJ8UW2gE-2T0uH8tYFLgVNy7VY4',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
}

// JSON-LD 構造化データ
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '有限会社十勝製函',
  alternateName: 'Tokachi Seikan',
  url: 'https://tokachiseikan.vercel.app',
  logo: 'https://tokachiseikan.vercel.app/logo.png',
  description:
    '北海道広尾町の木箱製造メーカー。圧倒的な生産力と職人技で水産物流を支える地域インフラ企業。',
  foundingDate: '1996',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '公園通南3丁目3番地30',
    addressLocality: '広尾町',
    addressRegion: '北海道',
    postalCode: '089-2622',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.2833,
    longitude: 143.3167,
  },
  areaServed: ['北海道', '十勝', '釧路', '日高'],
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'Japanese',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '有限会社十勝製函',
  image: 'https://tokachiseikan.vercel.app/og-image.jpg',
  '@id': 'https://tokachiseikan.vercel.app',
  url: 'https://tokachiseikan.vercel.app',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '公園通南3丁目3番地30',
    addressLocality: '広尾郡広尾町',
    addressRegion: '北海道',
    postalCode: '089-2622',
    addressCountry: 'JP',
  },
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${zenKaku.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="bg-off-white font-sans antialiased">{children}</body>
    </html>
  )
}
