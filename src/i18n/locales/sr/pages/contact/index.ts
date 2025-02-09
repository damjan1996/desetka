// src/i18n/locales/sr/pages/contact/index.ts
export const contact = {
    breadcrumb: "KONTAKT",
    hero: {
        title: "Radimo Zajedno",
        subtitle: "Imate projekat na umu? Hajde da razgovaramo o tome kako vam možemo pomoći da ostvarite svoje ciljeve."
    },
    contactInfo: {
        title: "Kontakt informacije",
        description: "Možete me kontaktirati na sledeće načine",
        address: {
            label: "Lokacija kancelarije",
            value: "Rotdornalle, Köln"
        },
        phone: {
            label: "Telefon",
            value: "+49 175 695 0979"
        },
        email: {
            label: "E-mail",
            value: "info@damjan-savic.com"
        },
        availabilityNote: "Radno vreme: ponedeljak - petak, 9:00 - 17:00",
        aria: {
            contactCard: "Kartica kontakt informacija",
            addressLink: "Otvori lokaciju u Google Maps",
            phoneLink: "Pozovi",
            emailLink: "Pošalji e-mail",
            externalLink: "Otvara se u novom tabu"
        }
    },
    contactForm: {
        title: "Kontaktirajte me",
        description: "Imate pitanja ili želite da sarađujemo? Pošaljite mi poruku.",
        name: {
            label: "Ime",
            placeholder: "Vaše puno ime"
        },
        email: {
            label: "E-mail",
            placeholder: "vasa.adresa@primer.com"
        },
        message: {
            label: "Poruka",
            placeholder: "Vaša poruka za mene..."
        },
        submit: "Pošalji poruku",
        successMessage: "Hvala vam na poruci! Javiću vam se u najkraćem mogućem roku.",
        errorMessage: "Izvinite, došlo je do greške prilikom slanja vaše poruke. Molimo pokušajte ponovo kasnije.",
        errors: {
            nameRequired: "Molimo unesite vaše ime",
            emailRequired: "Molimo unesite vašu e-mail adresu",
            emailInvalid: "Molimo unesite ispravnu e-mail adresu",
            messageRequired: "Molimo unesite poruku"
        },
        aria: {
            form: "Kontakt formular",
            submitting: "Slanje formulara",
            successAlert: "Poruka o uspehu",
            errorAlert: "Poruka o grešci"
        }
    }
} as const;

export type ContactTranslations = typeof contact;

export default {
    pages: {
        contact: contact
    }
};