export const contactform = {
    // Formular Header
    title: 'Kontaktieren Sie mich',
    description: 'Haben Sie Fragen oder möchten Sie zusammenarbeiten? Schreiben Sie mir eine Nachricht.',
    // Formularfelder
    name: {
        label: 'Name',
        placeholder: 'Ihr vollständiger Name'
    },
    email: {
        label: 'E-Mail',
        placeholder: 'ihre.email@beispiel.de'
    },
    message: {
        label: 'Nachricht',
        placeholder: 'Ihre Nachricht an mich...'
    },
    // Button
    submit: 'Nachricht senden',
    // Statusmeldungen
    successMessage: 'Vielen Dank für Ihre Nachricht! Ich werde mich so schnell wie möglich bei Ihnen melden.',
    errorMessage: 'Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
    // Fehlermeldungen
    errors: {
        nameRequired: 'Bitte geben Sie Ihren Namen ein',
        emailRequired: 'Bitte geben Sie Ihre E-Mail-Adresse ein',
        emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        messageRequired: 'Bitte geben Sie eine Nachricht ein'
    },
    // Aria Labels
    aria: {
        form: 'Kontaktformular',
        submitting: 'Formular wird gesendet',
        successAlert: 'Erfolgsmeldung',
        errorAlert: 'Fehlermeldung'
    }
} as const;
// Type für Typsicherheit
export type ContactFormTranslations = typeof contactform;
