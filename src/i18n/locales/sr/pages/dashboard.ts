// src/i18n/locales/sr/pages/dashboard.ts
export const dashboard = {
    // SEO
    seo: {
        title: 'Analitički dashboard',
        description: 'Dashboard za analizu veb sajta'
    },
    // Glavni naslovi
    header: {
        title: 'Analitički dashboard',
        activeUsers: 'aktivnih korisnika'
    },
    // Kartice sa metrikama
    metrics: {
        pageViews: {
            title: 'Pregledi stranica',
            perMinute: 'po minutu'
        },
        uniqueVisitors: {
            title: 'Jedinstveni posetioci',
            currentlyActive: 'trenutno aktivni'
        },
        conversions: {
            title: 'Konverzije',
            rate: 'Stopa konverzije'
        },
        timeOnSite: {
            title: 'Prosečno vreme posete',
            bounceRate: 'Stopa napuštanja'
        }
    },
    // Sekcija najpopularnijih stranica
    topPages: {
        title: 'Najpopularnije stranice',
        columns: {
            path: 'Putanja',
            views: 'Pregledi',
            change: 'Promena'
        }
    },
    // Sekcija za praćenje događaja
    events: {
        title: 'Praćenje događaja',
        types: {
            contactForm: 'Slanje kontakt forme',
            portfolioView: 'Pregled portfolija',
            cvDownload: 'Preuzimanje biografije',
            blogRead: 'Čitanje bloga'
        }
    },
    // Status poruke
    status: {
        loading: 'Učitavanje dashboard-a...',
        error: 'Greška pri učitavanju podataka',
        notAuthenticated: 'Molimo prijavite se'
    },
    // Ostalo
    misc: {
        viewMore: 'Prikaži više',
        refresh: 'Osveži',
        period: {
            today: 'Danas',
            yesterday: 'Juče',
            last7Days: 'Poslednjih 7 dana',
            last30Days: 'Poslednjih 30 dana',
            thisMonth: 'Ovaj mesec',
            lastMonth: 'Prošli mesec'
        }
    },
    // Trendovi i promene
    trends: {
        increase: 'Porast',
        decrease: 'Pad',
        noChange: 'Bez promene'
    }
};
