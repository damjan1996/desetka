// src/i18n/locales/sr/pages/portfolio.ts
export const portfolio = {
    // SEO i meta informacije
    seo: {
        title: 'Portfolio - Damjan Savić',
        description: 'Otkrijte moje projekte u oblasti JTL integracije, e-commerce-a i digitalne transformacije.'
    },
    // Glavna stranica
    main: {
        title: 'Portfolio',
        loading: 'Učitavanje projekata...',
        error: 'Greška pri učitavanju projekata',
        noProjects: {
            title: 'Nije pronađen nijedan projekat',
            description: 'Trenutno nema dostupnih projekata. Posetite nas ponovo kasnije.'
        }
    },
    // Kartice projekata
    projectCard: {
        date: 'Datum',
        technologies: 'Tehnologije',
        moreCount: 'još', // za '+X još'
        readMore: 'Saznaj više'
    },
    // Detalji projekta
    project: {
        navigation: {
            back: 'Nazad na portfolio',
            projectDetails: 'DETALJI PROJEKTA'
        },
        metadata: {
            date: 'Datum',
            client: 'Klijent',
            duration: 'Trajanje',
            repository: 'Repozitorijum',
            documentation: 'Dokumentacija',
            technologies: 'Tehnologije',
            live: 'Uživo'
        },
        sections: {
            overview: 'Pregled',
            challenge: 'Izazov',
            solution: 'Rešenje',
            results: 'Rezultati',
            systemArchitecture: 'Sistemska arhitektura',
            implementation: 'Implementacija',
            technologies: 'Korišćene tehnologije'
        }
    },
    // Kategorije i filteri
    categories: {
        all: 'Sve',
        'Data Science': 'Data Science',
        'AI Development': 'AI razvoj',
        'Integration': 'Integracija',
        'Full-Stack Development': 'Full-Stack razvoj',
        'Data Processing': 'Obrada podataka',
        'Content Production': 'Produkcija sadržaja',
        'Machine Learning': 'Machine Learning',
        'Automation': 'Automatizacija'
    },
    // Specifični projekti
    projects: {
        'ai-data-reader': {
            title: 'AI održavanje podataka o proizvodima iz PDF fajlova',
            description: 'Razvoj automatizovanog sistema za ekstrakciju i strukturiranje podataka o proizvodima iz PDF dokumenata'
        },
        'bi-vision': {
            title: 'AI video za BI softver',
            description: 'Razvoj video objašnjenja zasnovanih na AI za Business Intelligence dashboard-e'
        },
        'business-intelligence-ai': {
            title: 'AI za Business Intelligence',
            description: 'Integracija AI modela u Business Intelligence sisteme za optimizaciju procesa'
        },
        'claude-personal-assistant': {
            title: 'AI lični asistent sa Claude AI',
            description: 'Razvoj personalizovanog AI asistenta za profesionalnu e-mail komunikaciju'
        },
        'e-commerce-integration': {
            title: 'Integracija sa TradeByte-om',
            description: 'Integracija Shopify prodavnice sa JTL-WaWi za optimizovano upravljanje zalihama'
        },
        'jtl-integration-project': {
            title: 'JTL integracioni referentni projekat',
            description: 'Kompletan sistem za upravljanje skladištem u Krefeld-u baziran na JTL-u'
        },
        'local-llm-training': {
            title: 'Treniranje lokalnih AI modela',
            description: 'Razvoj pipeline-a za treniranje i fino podešavanje lokalnih AI modela'
        },
        'processautomation': {
            title: 'Automatizacija sa Python-om',
            description: 'Razvoj automatizacionih rešenja za poslovne procese'
        },
        'rfid-automation': {
            title: 'RFID automatizacija',
            description: 'Razvoj automatizovanog sistema za kreiranje i štampanje RFID etiketa'
        },
        'timetracking-software': {
            title: 'Digitalna evidencija radnog vremena',
            description: 'Razvoj modernog rešenja za evidenciju radnog vremena sa Next.js, Flask i MSSQL'
        }
    },
    // Status poruke
    status: {
        loading: 'Učitavanje...',
        error: 'Došlo je do greške',
        success: 'Uspešno učitano'
    }
};
