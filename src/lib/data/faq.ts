import { FAQItem } from '@/types';

export const faqItems: FAQItem[] = [
    {
        id: '1',
        question: 'Wer ist Desetka?',
        answer: 'Desetka ist eine mysteriöse Masken-Persona aus dem Balkan, die 80er Synthwave mit 90er serbischen Folk-Melodien verschmilzt. Der Name "Desetka" (10) symbolisiert die perfekte Balance zwischen Vergangenheit und Zukunft.',
        category: 'Allgemein',
    },
    {
        id: '2',
        question: 'Was ist Synthwave Balkan?',
        answer: 'Synthwave Balkan ist eine einzigartige Genre-Fusion, die nostalgische 80er Synthesizer-Sounds mit traditionellen Balkan-Melodien aus den 90ern verbindet. Es ist eine musikalische Zeitreise, die beide Epochen ehrt.',
        category: 'Musik',
    },
    {
        id: '3',
        question: 'Warum eine Maske?',
        answer: 'Die Maske ist nicht zum Verstecken, sondern ein Symbol. Sie steht für die kollektive Erinnerung, die nostalgischen Gefühle und die Sehnsucht nach einer Zeit, die nie wirklich vergeht.',
        category: 'Identität',
    },
    {
        id: '4',
        question: 'Wo kann ich die Musik hören?',
        answer: 'Alle Tracks sind verfügbar auf Spotify, YouTube Music, SoundCloud, Apple Music und anderen Streaming-Plattformen. Links findest du in der Music-Section.',
        category: 'Musik',
    },
    {
        id: '5',
        question: 'Gibt es Live-Auftritte?',
        answer: 'Ja! Live-Shows sind geplant für 2025. Die ersten Gigs werden in Belgrad, Zagreb und Sarajevo stattfinden. Updates gibt es auf Instagram und TikTok.',
        category: 'Events',
    },
    {
        id: '6',
        question: 'Kann ich Desetka für ein Event buchen?',
        answer: 'Ja, für Booking-Anfragen schreibe bitte an info@desetka.net. Wir spielen bei Festivals, Club-Nächten und besonderen Events.',
        category: 'Booking',
    },
];

export const getFAQByCategory = (category: string): FAQItem[] => {
    return faqItems.filter((item) => item.category === category);
};