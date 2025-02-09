// src/i18n/locales/sr/pages/privacy.ts
export const privacy = {
    // SEO i šema
    seo: {
        title: 'Politika privatnosti',
        description: 'Politika privatnosti za portfolio sajt Damjana Savića'
    },
    schema: {
        name: 'Politika privatnosti',
        description: 'Politika privatnosti za portfolio sajt Damjana Savića'
    },
    // Glavni sadržaj
    content: {
        title: 'Politika privatnosti',
        lastUpdated: 'Poslednje ažuriranje: 10. mart 2024.',
        // Navigacija
        breadcrumbs: {
            currentTitle: 'Politika privatnosti'
        },
        // Sekcije
        sections: {
            introduction: {
                title: '1. Uvod',
                content: 'Ova politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše lične podatke prilikom korišćenja našeg sajta.'
            },
            dataCollection: {
                title: '2. Prikupljanje podataka',
                providedInfo: {
                    title: '2.1 Informacije koje vi dostavljate',
                    intro: 'Prilikom korišćenja našeg kontakt formulara, prikupljamo:',
                    items: [
                        'Ime',
                        'E-mail adresu',
                        'Sadržaj poruke'
                    ]
                },
                automaticInfo: {
                    title: '2.2 Automatski prikupljene informacije',
                    intro: 'Automatski prikupljamo:',
                    items: [
                        'IP adresu',
                        'Tip pretraživača',
                        'Informacije o uređaju',
                        'Posećene stranice',
                        'Vreme provedeno na sajtu'
                    ]
                }
            },
            dataUsage: {
                title: '3. Korišćenje vaših podataka',
                intro: 'Vaše podatke koristimo za:',
                items: [
                    'Odgovaranje na vaše upite',
                    'Unapređenje našeg sajta',
                    'Analizu obrazaca korišćenja',
                    'Prevenciju prevara'
                ]
            },
            cookies: {
                title: '4. Kolačići',
                intro: 'Kolačiće koristimo za:',
                items: [
                    'Čuvanje vaših podešavanja',
                    'Analizu saobraćaja na sajtu',
                    'Razumevanje ponašanja korisnika'
                ]
            },
            security: {
                title: '5. Bezbednost podataka',
                intro: 'Implementiramo odgovarajuće bezbednosne mere za zaštitu vaših ličnih podataka, uključujući:',
                items: [
                    'Enkripciju prenosa podataka',
                    'Redovne bezbednosne procene',
                    'Kontrole pristupa',
                    'Bezbedno skladištenje podataka'
                ]
            },
            rights: {
                title: '6. Vaša prava',
                intro: 'Imate pravo na:',
                items: [
                    'Pristup vašim ličnim podacima',
                    'Ispravku podataka',
                    'Brisanje podataka',
                    'Prigovor na obradu podataka',
                    'Prenosivost podataka'
                ]
            },
            contact: {
                title: '7. Kontakt informacije',
                intro: 'Za pitanja u vezi sa privatnošću kontaktirajte nas na:',
                email: 'E-mail: privacy@damjan-savic.com'
            }
        }
    }
};
