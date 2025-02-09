export const common = {
    // SEO & Meta
    siteTitle: 'Damjan Savić - Digitalna rešenja & JTL integracija',
    siteDescription: 'Programer individualnih rešenja za automatizaciju procesa',
    // Navigation
    nav: {
        home: 'Početna',
        about: 'O meni',
        services: 'Usluge',
        portfolio: 'Portfolio',
        blog: 'Blog',
        contact: 'Kontakt'
    },
    // Common Actions
    actions: {
        readMore: 'Pročitaj više',
        viewMore: 'Prikaži više',
        viewAll: 'Prikaži sve',
        back: 'Nazad',
        close: 'Zatvori',
        submit: 'Pošalji',
        loading: 'Učitavanje...'
    },
    // UI Components
    ui: {
        published: 'Objavljeno',
        lastUpdated: 'Poslednje ažuriranje',
        category: 'Kategorija',
        categories: 'Kategorije',
        tag: 'Oznaka',
        tags: 'Oznake',
        author: 'Autor',
        minuteRead: 'minuta čitanja',
        tableOfContents: 'Sadržaj'
    },
    // Error Messages
    errors: {
        generic: 'Došlo je do greške',
        notFound: 'Stranica nije pronađena',
        loading: 'Greška pri učitavanju',
        return: 'Povratak na početnu stranicu'
    },
    // Loading States
    loading: {
        content: 'Učitavanje sadržaja',
        page: 'Učitavanje stranice',
        processing: 'Obrada u toku'
    },
    // Dates
    dates: {
        months: {
            long: [
                'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun',
                'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
            ],
            short: [
                'Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun',
                'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'
            ]
        },
        weekdays: {
            long: [
                'Nedelja', 'Ponedeljak', 'Utorak', 'Sreda',
                'Četvrtak', 'Petak', 'Subota'
            ],
            short: ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub']
        }
    },
    // Social Media
    social: {
        followMe: 'Pratite me na',
        shareOn: 'Podeli na',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'E-mail'
    },
    // Contact Form
    contact: {
        title: 'Kontakt',
        name: 'Ime',
        email: 'E-mail',
        message: 'Poruka',
        submit: 'Pošalji poruku',
        success: 'Vaša poruka je uspešno poslata',
        error: 'Došlo je do greške pri slanju vaše poruke'
    },
    // Accessibility
    a11y: {
        skipToContent: 'Preskoči na glavni sadržaj',
        menuOpen: 'Otvori meni',
        menuClose: 'Zatvori meni',
        darkMode: 'Promeni tamni režim',
        carousel: {
            next: 'Sledeća slika',
            previous: 'Prethodna slika'
        }
    }
} as const;
export type CommonTranslations = typeof common;
