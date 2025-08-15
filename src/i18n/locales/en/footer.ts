// src/i18n/locales/en/footer.ts
const footer = {
    sections: {
        contact: {
            title: "Contact",
            email: "info@damjan-savic.com",
            location: "Cologne, Germany",
            aria: {
                emailLink: "Send email",
                locationText: "Location"
            }
        },
        navigation: {
            title: "Navigation",
            links: {
                portfolio: "Portfolio",
                blog: "Blog",
                about: "About",
                contact: "Contact"
            }
        },
        social: {
            title: "Social Media",
            aria: {
                linkedin: "Visit my LinkedIn profile",
                github: "Visit my GitHub profile"
            }
        }
    },
    legal: {
        copyright: "All rights reserved",
        links: {
            privacy: "Privacy Policy",
            imprint: "Imprint",
            terms: "Terms of Service"
        }
    }
} as const;

export default footer;
export type FooterTranslations = typeof footer;