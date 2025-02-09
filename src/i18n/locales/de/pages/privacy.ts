// src/i18n/locales/de/pages/privacy.ts
export const privacy = {
    // SEO und Schema
    seo: {
        title: 'Datenschutzerklärung',
        description: 'Datenschutzerklärung für die Portfolio-Website von Damjan Savić'
    },
    schema: {
        name: 'Datenschutzerklärung',
        description: 'Datenschutzerklärung für die Portfolio-Website von Damjan Savić'
    },
    // Hauptinhalt
    content: {
        title: 'Datenschutzerklärung',
        lastUpdated: 'Zuletzt aktualisiert: 10. März 2024',
        // Navigation
        breadcrumbs: {
            currentTitle: 'Datenschutzerklärung'
        },
        // Abschnitte
        sections: {
            introduction: {
                title: '1. Einführung',
                content: 'Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten bei der Nutzung unserer Website erfassen, verwenden und schützen.'
            },
            dataCollection: {
                title: '2. Datenerfassung',
                providedInfo: {
                    title: '2.1 Von Ihnen bereitgestellte Informationen',
                    intro: 'Bei Verwendung unseres Kontaktformulars erfassen wir:',
                    items: [
                        'Name',
                        'E-Mail-Adresse',
                        'Nachrichteninhalt'
                    ]
                },
                automaticInfo: {
                    title: '2.2 Automatisch erfasste Informationen',
                    intro: 'Wir erfassen automatisch:',
                    items: [
                        'IP-Adresse',
                        'Browser-Typ',
                        'Geräteinformationen',
                        'Besuchte Seiten',
                        'Verweildauer auf der Website'
                    ]
                }
            },
            dataUsage: {
                title: '3. Verwendung Ihrer Daten',
                intro: 'Wir verwenden Ihre Daten für:',
                items: [
                    'Beantwortung Ihrer Anfragen',
                    'Verbesserung unserer Website',
                    'Analyse von Nutzungsmustern',
                    'Betrugsprävention'
                ]
            },
            cookies: {
                title: '4. Cookies',
                intro: 'Wir verwenden Cookies für:',
                items: [
                    'Speicherung Ihrer Präferenzen',
                    'Analyse des Website-Verkehrs',
                    'Verständnis des Nutzerverhaltens'
                ]
            },
            security: {
                title: '5. Datensicherheit',
                intro: 'Wir implementieren geeignete Sicherheitsmaßnahmen zum Schutz Ihrer personenbezogenen Daten, einschließlich:',
                items: [
                    'Verschlüsselung der Datenübertragung',
                    'Regelmäßige Sicherheitsbewertungen',
                    'Zugriffskontrollen',
                    'Sichere Datenspeicherung'
                ]
            },
            rights: {
                title: '6. Ihre Rechte',
                intro: 'Sie haben das Recht auf:',
                items: [
                    'Zugriff auf Ihre personenbezogenen Daten',
                    'Berichtigung der Daten',
                    'Löschung der Daten',
                    'Widerspruch gegen die Datenverarbeitung',
                    'Datenübertragbarkeit'
                ]
            },
            contact: {
                title: '7. Kontaktinformationen',
                intro: 'Für datenschutzbezogene Anfragen kontaktieren Sie uns unter:',
                email: 'E-Mail: privacy@damjan-savic.com'
            }
        }
    }
};
