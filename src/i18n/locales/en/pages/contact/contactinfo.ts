// src/i18n/locales/en/pages/contact/contactinfo.ts
export const contactinfo = {
    // Header
    title: 'Contact Information',
    description: 'You can reach me through the following channels',
    // Contact Method Labels
    addressLabel: 'Office Location',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    // Contact Information
    address: 'Rotdornallee, Köln',
    phone: '+49 175 695 0979',
    email: 'info@damjan-savic.com',
    // Additional Information
    availabilityNote: 'Business hours: Monday to Friday, 9:00 AM - 5:00 PM',
    // Aria Labels
    aria: {
        contactCard: 'Contact information card',
        addressLink: 'Open location in Google Maps',
        phoneLink: 'Call',
        emailLink: 'Send email',
        externalLink: 'Opens in new tab'
    }
} as const;

// Type for type safety
export type ContactInfoTranslations = typeof contactinfo;