// src/i18n/locales/sr/pages/login.ts
export const login = {
    // SEO
    seo: {
        title: 'Prijava',
        description: 'Prijavite se za pristup dashboard-u'
    },
    // Glavni naslov
    header: {
        title: 'Prijava na dashboard'
    },
    // Formular
    form: {
        // Polja
        email: {
            label: 'E-mail adresa',
            placeholder: 'vas.email@primer.com'
        },
        password: {
            label: 'Lozinka',
            placeholder: 'Vaša lozinka'
        },
        // Dugmad
        submit: {
            default: 'Prijavi se',
            loading: 'Prijava u toku...'
        },
        // Poruke o greškama
        errors: {
            default: 'Došlo je do greške',
            invalidCredentials: 'Neispravni podaci za prijavu',
            emailRequired: 'Molimo unesite vašu e-mail adresu',
            passwordRequired: 'Molimo unesite vašu lozinku',
            emailInvalid: 'Molimo unesite važeću e-mail adresu'
        }
    },
    // Linkovi i pomoć
    help: {
        forgotPassword: 'Zaboravili ste lozinku?',
        needHelp: 'Potrebna vam je pomoć?',
        contactSupport: 'Kontaktirajte podršku'
    },
    // Status poruke
    status: {
        authenticating: 'Autentifikacija...',
        success: 'Uspešna prijava',
        redirecting: 'Preusmeravanje na dashboard...'
    },
    // Bezbednosna obaveštenja
    security: {
        secureConnection: 'Bezbedna veza',
        privacyNote: 'Vaši podaci se prenose u šifrovanom obliku'
    }
};
