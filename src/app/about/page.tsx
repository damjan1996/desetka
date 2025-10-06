// src/app/about/page.tsx
import AboutPageHero from '@/components/about/AboutPageHero';
import AboutHero from '@/components/about/AboutHero';
import About from '@/components/home/About';
import Process from '@/components/about/Process';
import Inspiration from '@/components/about/Inspiration';

export const metadata = {
    title: 'About | Desetka - Die mysteriöse Synthwave-Persona',
};

export default function AboutPage() {
    return (
        <>
            <AboutPageHero />
            <AboutHero />
            <About />
            <Process />
            <Inspiration />
        </>
    );
}