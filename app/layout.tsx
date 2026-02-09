import { Inter, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI & Data Transformation in Food & Beverage | Prof. Riccardo Bovetti",
  description: "ESCP Business School course on AI and data analytics in the F&B sector",
  metadataBase: new URL('https://aibd-course.vercel.app'),
  manifest: '/manifest.json',
  keywords: ['AI', 'Machine Learning', 'Data Analytics', 'Food & Beverage', 'ESCP', 'Business School'],
  authors: [{ name: 'Prof. Riccardo Bovetti' }],
  openGraph: {
    title: 'AI & Data Transformation in Food & Beverage',
    description: 'ESCP Business School course on AI and data analytics in the F&B sector',
    type: 'website',
    locale: 'en_US',
    url: 'https://aibd-course.vercel.app',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
