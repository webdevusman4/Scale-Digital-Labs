import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { CustomCursor } from '@/components/custom-cursor';
import { Navbar } from '@/components/navbar';
import { MeteorHeroBackground } from '@/components/meteor-hero-background';

export const metadata: Metadata = {
  title: 'My Google AI Studio App',
  description: 'An application built with Google AI Studio.',
  openGraph: {
    title: 'My Google AI Studio App',
    description: 'An application built with Google AI Studio.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Google AI Studio App',
    description: 'An application built with Google AI Studio.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* Global SVG defs for icons */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="service-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7B2FF7" />
              <stop offset="55%" stopColor="#F72585" />
              <stop offset="100%" stopColor="#FF8C42" />
            </linearGradient>
          </defs>
        </svg>

        <MeteorHeroBackground />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
