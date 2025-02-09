// src/i18n/locales/de/pages/login.ts
export const login = {
    // SEO
    seo: {
        title: 'Login',
        description: 'Anmelden für Zugriff auf das Dashboard'
    },
    // Hauptüberschrift
    header: {
        title: 'Im Dashboard anmelden'
    },
    // Formular
    form: {
        // Felder
        email: {
            label: 'E-Mail-Adresse',
            placeholder: 'ihre.email@beispiel.de'
        },
        password: {
            label: 'Passwort',
            placeholder: 'Ihr Passwort'
        },
        // Buttons
        submit: {
            default: 'Anmelden',
            loading: 'Anmeldung läuft...'
        },
        // Fehlermeldungen
        errors: {
            default: 'Ein Fehler ist aufgetreten',
            invalidCredentials: 'Ungültige Anmeldedaten',
            emailRequired: 'Bitte geben Sie Ihre E-Mail-Adresse ein',
            passwordRequired: 'Bitte geben Sie Ihr Passwort ein',
            emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
        }
    },
    // Links und Hilfe
    help: {
        forgotPassword: 'Passwort vergessen?',
        needHelp: 'Benötigen Sie Hilfe?',
        contactSupport: 'Support kontaktieren'
    },
    // Statusmeldungen
    status: {
        authenticating: 'Authentifizierung...',
        success: 'Erfolgreich angemeldet',
        redirecting: 'Weiterleitung zum Dashboard...'
    },
    // Sicherheitshinweise
    security: {
        secureConnection: 'Sichere Verbindung',
        privacyNote: 'Ihre Daten werden verschlüsselt übertragen'
    }
};
