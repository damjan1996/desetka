// src/i18n/locales/sr/footer.ts
const footer = {
    sections: {
        contact: {
            title: "Kontakt",
            email: "info@damjan-savic.com",
            location: "Keln, Nemačka",
            aria: {
                emailLink: "Pošalji email",
                locationText: "Lokacija"
            }
        },
        navigation: {
            title: "Navigacija",
            links: {
                portfolio: "Portfolio",
                blog: "Blog",
                about: "O meni",
                contact: "Kontakt"
            }
        },
        social: {
            title: "Društvene mreže",
            aria: {
                linkedin: "Posetite moj LinkedIn profil",
                github: "Posetite moj GitHub profil"
            }
        }
    },
    legal: {
        copyright: "Sva prava zadržana",
        links: {
            privacy: "Zaštita podataka",
            imprint: "Impresum",
            terms: "Uslovi korišćenja"
        }
    }
} as const;

export default footer;
export type FooterTranslations = typeof footer;