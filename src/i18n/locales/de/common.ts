export const common = {
    // SEO & Meta
    siteTitle: 'Damjan Savić - Digital Solutions & JTL Integration',
    siteDescription: 'Entwickler individueller Lösungen zur Automatisierung von Prozessen',
    // Navigation
    nav: {
        home: 'Start',
        about: 'Über mich',
        services: 'Leistungen',
        portfolio: 'Portfolio',
        blog: 'Blog',
        contact: 'Kontakt'
    },
    // Common Actions
    actions: {
        readMore: 'Weiterlesen',
        viewMore: 'Mehr anzeigen',
        viewAll: 'Alle anzeigen',
        back: 'Zurück',
        close: 'Schließen',
        submit: 'Absenden',
        loading: 'Lädt...'
    },
    // UI Components
    ui: {
        published: 'Veröffentlicht am',
        lastUpdated: 'Zuletzt aktualisiert am',
        category: 'Kategorie',
        categories: 'Kategorien',
        tag: 'Tag',
        tags: 'Tags',
        author: 'Autor',
        minuteRead: 'Minuten Lesezeit',
        tableOfContents: 'Inhaltsverzeichnis'
    },
    // Error Messages
    errors: {
        generic: 'Ein Fehler ist aufgetreten',
        notFound: 'Seite nicht gefunden',
        loading: 'Fehler beim Laden',
        return: 'Zurück zur Startseite'
    },
    // Loading States
    loading: {
        content: 'Inhalt wird geladen',
        page: 'Seite wird geladen',
        processing: 'Wird verarbeitet'
    },
    // Dates
    dates: {
        months: {
            long: [
                'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
                'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
            ],
            short: [
                'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun',
                'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'
            ]
        },
        weekdays: {
            long: [
                'Sonntag', 'Montag', 'Dienstag', 'Mittwoch',
                'Donnerstag', 'Freitag', 'Samstag'
            ],
            short: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
        }
    },
    // Social Media
    social: {
        followMe: 'Folgen Sie mir auf',
        shareOn: 'Teilen auf',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'E-Mail'
    },
    // Contact Form
    contact: {
        title: 'Kontakt',
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht',
        submit: 'Nachricht senden',
        success: 'Ihre Nachricht wurde erfolgreich gesendet',
        error: 'Es gab einen Fehler beim Senden Ihrer Nachricht'
    },
    // Accessibility
    a11y: {
        skipToContent: 'Zum Hauptinhalt springen',
        menuOpen: 'Menü öffnen',
        menuClose: 'Menü schließen',
        darkMode: 'Dark Mode umschalten',
        carousel: {
            next: 'Nächstes Bild',
            previous: 'Vorheriges Bild'
        }
    }
} as const;
export type CommonTranslations = typeof common;
