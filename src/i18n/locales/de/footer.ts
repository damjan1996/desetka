// src/i18n/locales/de/footer.ts
const footer = {
    sections: {
        contact: {
            title: "Kontakt",
            email: "info@damjan-savic.com",
            location: "Köln, Deutschland",
            aria: {
                emailLink: "E-Mail senden",
                locationText: "Standort"
            }
        },
        navigation: {
            title: "Navigation",
            links: {
                portfolio: "Portfolio",
                blog: "Blog",
                about: "Über mich",
                contact: "Kontakt"
            }
        },
        social: {
            title: "Social Media",
            aria: {
                linkedin: "Besuchen Sie mein LinkedIn Profil",
                github: "Besuchen Sie mein GitHub Profil"
            }
        }
    },
    legal: {
        copyright: "Alle Rechte vorbehalten",
        links: {
            privacy: "Datenschutz",
            imprint: "Impressum",
            terms: "AGB"
        }
    }
} as const;

export default footer;
export type FooterTranslations = typeof footer;