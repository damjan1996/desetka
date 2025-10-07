import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlobalBackground from '@/components/layout/GlobalBackground';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { AudioPlayerProvider } from '@/contexts/AudioPlayerContext';
import GlobalAudioPlayer from '@/components/audio/GlobalAudioPlayer';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://desetka.net'),
    title: 'Desetka | Synthwave × 90er Balkan Nostalgie',
    description: 'Mysteriöse Synthwave-Persona aus dem Balkan. 80er Synthwave trifft auf 90er Balkan-Folklore. Entdecke nostalgische Tracks und Neon-Träume.',
    keywords: ['Desetka', 'Synthwave', 'Balkan', 'Retrowave', '90er', 'Musik', 'Serbia', 'Nostalgie'],
    authors: [{ name: 'Desetka' }],
    creator: 'Desetka',
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        url: 'https://desetka.net',
        title: 'Desetka | Synthwave × 90er Balkan Nostalgie',
        description: 'Mysteriöse Synthwave-Persona aus dem Balkan. 80er Synthwave trifft auf 90er Balkan-Folklore.',
        siteName: 'Desetka',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Desetka - Synthwave Balkan',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Desetka | Synthwave × 90er Balkan Nostalgie',
        description: 'Mysteriöse Synthwave-Persona aus dem Balkan.',
        images: ['/images/og-image.jpg'],
    },
    icons: {
        icon: '/images/favicon.webp',
        shortcut: '/images/favicon.webp',
        apple: '/images/favicon.webp',
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
        <body className="antialiased">
        <LanguageProvider>
            <AudioPlayerProvider>
                <GlobalBackground />
                <Header />
                <main className="pt-16 overflow-x-hidden">
                    {children}
                </main>
                <Footer />
                <GlobalAudioPlayer />
            </AudioPlayerProvider>
        </LanguageProvider>
        </body>
        </html>
    );
}