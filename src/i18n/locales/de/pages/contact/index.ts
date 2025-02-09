// src/i18n/locales/de/pages/contact/index.ts
export const contact = {
    breadcrumb: "KONTAKT",
    hero: {
        title: "Lassen Sie uns zusammenarbeiten",
        subtitle: "Sie haben ein Projekt im Sinn? Lassen Sie uns besprechen, wie wir Ihnen bei der Erreichung Ihrer Ziele helfen können."
    },
    contactInfo: {
        title: "Kontaktinformationen",
        description: "Sie können mich über folgende Wege erreichen",
        address: {
            label: "Bürostandort",
            value: "Rotdornallee, Köln"
        },
        phone: {
            label: "Telefon",
            value: "+49 175 695 0979"
        },
        email: {
            label: "E-Mail",
            value: "info@damjan-savic.com"
        },
        availabilityNote: "Geschäftszeiten: Montag bis Freitag, 9:00 - 17:00 Uhr",
        aria: {
            contactCard: "Kontaktinformationskarte",
            addressLink: "Öffne Standort in Google Maps",
            phoneLink: "Anrufen",
            emailLink: "E-Mail senden",
            externalLink: "Öffnet in neuem Tab"
        }
    },
    contactForm: {
        title: "Kontaktieren Sie mich",
        description: "Haben Sie Fragen oder möchten Sie zusammenarbeiten? Schreiben Sie mir eine Nachricht.",
        name: {
            label: "Name",
            placeholder: "Ihr vollständiger Name"
        },
        email: {
            label: "E-Mail",
            placeholder: "ihre.email@beispiel.de"
        },
        message: {
            label: "Nachricht",
            placeholder: "Ihre Nachricht an mich..."
        },
        submit: "Nachricht senden",
        successMessage: "Vielen Dank für Ihre Nachricht! Ich werde mich so schnell wie möglich bei Ihnen melden.",
        errorMessage: "Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
        errors: {
            nameRequired: "Bitte geben Sie Ihren Namen ein",
            emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse ein",
            emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
            messageRequired: "Bitte geben Sie eine Nachricht ein"
        },
        aria: {
            form: "Kontaktformular",
            submitting: "Formular wird gesendet",
            successAlert: "Erfolgsmeldung",
            errorAlert: "Fehlermeldung"
        }
    }
} as const;

export type ContactTranslations = typeof contact;

export default {
    pages: {
        contact: contact
    }
};