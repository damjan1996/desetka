export const contactinfo = {
    // Header
    title: 'Kontaktinformationen',
    description: 'Sie können mich über folgende Wege erreichen',
    // Kontaktmethoden Labels
    addressLabel: 'Bürostandort',
    phoneLabel: 'Telefon',
    emailLabel: 'E-Mail',
    // Kontaktinformationen
    address: 'Rotdornallee, Köln',
    phone: '+49 175 695 0979',
    email: 'info@damjan-savic.com',
    // Zusätzliche Informationen
    availabilityNote: 'Geschäftszeiten: Montag bis Freitag, 9:00 - 17:00 Uhr',
    // Aria Labels
    aria: {
        contactCard: 'Kontaktinformationskarte',
        addressLink: 'Öffne Standort in Google Maps',
        phoneLink: 'Anrufen',
        emailLink: 'E-Mail senden',
        externalLink: 'Öffnet in neuem Tab'
    }
} as const;
// Type für Typsicherheit
export type ContactInfoTranslations = typeof contactinfo;
