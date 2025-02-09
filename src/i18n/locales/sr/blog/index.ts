// src/i18n/locales/sr/blog/index.ts
export const blog = {
    meta: {
        title: 'Blog - JTL Integracija i Digitalna Rešenja',
        description: 'Uvidi i najbolje prakse o JTL-WaWi, e-trgovini i digitalnoj transformaciji',
        header: {
            title: 'Uvidi i Najbolje Prakse',
            subtitle: 'Uvidi i najbolje prakse o JTL-WaWi, e-trgovini i digitalnoj transformaciji'
        }
    },
    posts: {
        'erp-integration-breuninger': {
            title: 'ApparelMagic i TradeByte: Analiza složenih integracija',
            date: '2024-02-09',
            excerpt: 'Detaljna analiza e-trgovinske integracije između Apparel Magic i Breuninger preko TradeByte',
            category: 'Sistemska integracija',
            tags: ['ERP', 'Apparel Magic', 'TradeByte', 'API Integration', 'Python', 'MariaDB'],
            coverImage: '/images/posts/erp-integration-breuninger/cover.jpg',
            content: {
                intro: {
                    title: 'Apparel Magic susreće Breuninger: Tehnička analiza TradeByte integracije',
                    description: 'Integracija e-trgovinskih sistema sa uspostavljenim tržištima predstavlja poseban izazov za kompanije. U ovom članku delim svoje iskustvo iz složenog integracionog projekta između Apparel Magic kao ERP sistema i Breuninger platforme preko TradeByte.'
                },
                background: {
                    title: 'Pozadina projekta',
                    systems: {
                        erp: 'Apparel Magic kao ERP sistem za podatke o proizvodima i upravljanje zalihama',
                        middleware: 'TradeByte kao middleware za Breuninger platformu'
                    },
                    challenges: {
                        sync: 'Dvosmerna sinhronizacija porudžbina',
                        customers: 'Automatsko kreiranje kupaca',
                        delivery: 'Upravljanje otpremnicama',
                        inventory: 'Upravljanje zalihama u realnom vremenu'
                    }
                },
                tech: {
                    title: 'Tehnička arhitektura',
                    components: {
                        title: 'Centralne komponente'
                    },
                    database: {
                        title: 'Middleware baza podataka',
                        description: 'MariaDB baza podataka služi kao centralno skladište podataka za integraciju:'
                    }
                },
                api: {
                    title: 'API integracije',
                    apparel_magic: {
                        title: 'Apparel Magic API',
                        description: 'REST API kompanije Apparel Magic se koristi za kreiranje kupaca i upravljanje zalihama:'
                    },
                    tradebyte: {
                        title: 'TradeByte integracija',
                        description: 'TradeByte API koristi kombinaciju REST i XML:'
                    }
                },
                order_process: {
                    title: 'Proces porudžbine',
                    steps: {
                        fetch: 'Redovno preuzimanje novih porudžbina sa TradeByte',
                        customers: 'Automatsko kreiranje kupaca u Apparel Magic',
                        process: 'Obrada porudžbina i ažuriranje statusa',
                        delivery: 'Generisanje i čuvanje otpremnica'
                    },
                    delivery_notes: {
                        title: 'Upravljanje otpremnicama'
                    }
                },
                challenges: {
                    title: 'Izazovi i rešenja',
                    status: {
                        title: '1. Upravljanje statusom',
                        description: 'Poseban izazov je bio upravljanje statusima porudžbina:'
                    },
                    error_handling: {
                        title: '2. Rukovanje greškama i nadzor',
                        description: 'Robusno rukovanje greškama bilo je ključno za rad u produkciji:'
                    }
                },
                best_practices: {
                    title: 'Najbolje prakse',
                    api: {
                        title: '1. API komunikacija',
                        items: {
                            retry: 'Implementacija mehanizama ponovnog pokušaja',
                            errors: 'Pažljivo rukovanje greškama',
                            logging: 'Detaljno logovanje svih komunikacija'
                        }
                    },
                    data: {
                        title: '2. Upravljanje podacima',
                        items: {
                            storage: 'Centralno čuvanje podataka u MariaDB',
                            transactions: 'Sigurnost transakcija pri kritičnim operacijama',
                            validation: 'Redovna validacija podataka'
                        }
                    },
                    automation: {
                        title: '3. Automatizacija procesa',
                        items: {
                            customers: 'Automatsko kreiranje kupaca',
                            status: 'Automatsko ažuriranje statusa',
                            delivery: 'Sistematsko upravljanje otpremnicama'
                        }
                    }
                },
                lessons: {
                    title: 'Naučene lekcije',
                    api: {
                        title: '1. Dizajn API-ja',
                        items: {
                            docs: 'Temeljna API dokumentacija je neophodna',
                            auth: 'Razumevanje različitih metoda autentifikacije',
                            limits: 'Uzimanje u obzir ograničenja brzine'
                        }
                    },
                    validation: {
                        title: '2. Validacija podataka',
                        items: {
                            rules: 'Implementacija strogih pravila validacije',
                            edge_cases: 'Pažljivo rukovanje specijalnim slučajevima',
                            cleanup: 'Automatsko čišćenje podataka'
                        }
                    },
                    optimization: {
                        title: '3. Optimizacija procesa',
                        items: {
                            automation: 'Kontinuirano unapređenje automatizacije',
                            performance: 'Redovni pregledi performansi',
                            monitoring: 'Proaktivni nadzor'
                        }
                    }
                },
                conclusion: {
                    title: 'Zaključak',
                    requirements: {
                        understanding: 'Duboko razumevanje oba sistema',
                        implementation: 'Pažljiva implementacija API komunikacije',
                        error_handling: 'Robusno rukovanje greškama',
                        monitoring: 'Kontinuirani nadzor'
                    },
                    results: 'Razvijeno rešenje uspešno obrađuje porudžbine i omogućava besprekornu integraciju između sistema. Posebno se automatizovano kreiranje kupaca i upravljanje otpremnicama pokazali kao povećavači efikasnosti.'
                }
            }
        },
    },
    ui: {
        readMore: 'Pročitaj više',
        loading: {
            posts: 'Učitavaju se blog postovi...',
            post: 'Učitava se blog post...'
        },
        errors: {
            posts: 'Greška pri učitavanju blog postova',
            post: 'Traženi blog post ne postoji ili je premješten.'
        },
        backToBlog: 'Nazad na blog',
        publishedOn: 'Objavljeno dana',
        category: 'Kategorija',
        tags: 'Oznake',
        notFound: {
            title: 'Post nije pronađen',
            message: 'Traženi blog post ne postoji ili je premješten.'
        }
    },
    categories: {
        'Integration': 'Integracija',
        'Entwicklung': 'Razvoj',
        'Automatisierung': 'Automatizacija'
    }
} as const;

export type BlogConfig = typeof blog;
export type BlogPost = BlogConfig['posts'][keyof BlogConfig['posts']];
