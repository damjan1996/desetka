// src/i18n/locales/sr/pages/contact/contactform.ts
export const contactform = {
    // Zaglavlje formulara
    title: 'Kontaktirajte me',
    description: 'Imate pitanja ili želite da sarađujemo? Pošaljite mi poruku.',
    // Polja formulara
    name: {
        label: 'Ime',
        placeholder: 'Vaše puno ime'
    },
    email: {
        label: 'E-mail',
        placeholder: 'vasa.adresa@primer.com'
    },
    message: {
        label: 'Poruka',
        placeholder: 'Vaša poruka za mene...'
    },
    // Dugme
    submit: 'Pošalji poruku',
    // Status poruke
    successMessage: 'Hvala vam na poruci! Javiću vam se u najkraćem mogućem roku.',
    errorMessage: 'Izvinite, došlo je do greške prilikom slanja vaše poruke. Molimo pokušajte ponovo kasnije.',
    // Poruke o greškama
    errors: {
        nameRequired: 'Molimo unesite vaše ime',
        emailRequired: 'Molimo unesite vašu e-mail adresu',
        emailInvalid: 'Molimo unesite ispravnu e-mail adresu',
        messageRequired: 'Molimo unesite poruku'
    },
    // Aria oznake
    aria: {
        form: 'Kontakt formular',
        submitting: 'Slanje formulara',
        successAlert: 'Poruka o uspehu',
        errorAlert: 'Poruka o grešci'
    }
} as const;

// Tip za tipsku sigurnost
export type ContactFormTranslations = typeof contactform;