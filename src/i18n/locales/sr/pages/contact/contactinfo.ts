// src/i18n/locales/sr/pages/contact/contactinfo.ts
export const contactinfo = {
    // Zaglavlje
    title: 'Kontakt informacije',
    description: 'Možete me kontaktirati na sledeće načine',
    // Oznake kontakt metoda
    addressLabel: 'Lokacija kancelarije',
    phoneLabel: 'Telefon',
    emailLabel: 'E-mail',
    // Kontakt informacije
    address: 'Rotdornallee, Köln',
    phone: '+49 175 695 0979',
    email: 'info@damjan-savic.com',
    // Dodatne informacije
    availabilityNote: 'Radno vreme: ponedeljak - petak, 9:00 - 17:00',
    // Aria oznake
    aria: {
        contactCard: 'Kartica kontakt informacija',
        addressLink: 'Otvori lokaciju u Google Maps',
        phoneLink: 'Pozovi',
        emailLink: 'Pošalji e-mail',
        externalLink: 'Otvara se u novom tabu'
    }
} as const;

// Tip za tipsku sigurnost
export type ContactInfoTranslations = typeof contactinfo;