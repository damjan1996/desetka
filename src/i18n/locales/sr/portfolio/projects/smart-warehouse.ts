// src/i18n/locales/sr/portfolio/projects/smart-warehouse.ts
export const smartWarehouse = {
    meta: {
        slug: 'smart-warehouse',
        title: "Inteligentno upravljanje skladištem sa Computer Vision",
        description: "AI sistem za upravljanje zalihama u realnom vremenu i optimizaciju skladišnih procesa",
        excerpt: "Razvoj autonomnog sistema za upravljanje skladištem sa Computer Vision, IoT senzorima i mašinskim učenjem za precizno praćenje zaliha.",
        date: "2024-06",
        category: "AI & Automatizacija",
        client: "LogiTech Solutions GmbH",
        duration: "4 meseca",
        url: "https://warehouse-demo.example.com",
        repository: "",
        documentation: "/case-studies/smart-warehouse",
        published: true,
        featured: true,
        technologies: ["YOLOv8", "Python", "FastAPI", "React", "PostgreSQL", "Docker", "Kubernetes", "IoT", "MQTT"],
        tags: ["Computer Vision", "Mašinsko učenje", "IoT", "Edge Computing", "Automatizacija"]
    },
    content: {
        intro: "Srednje veliki logistički provajder transformisao je svoje ručno upravljanje skladištem kroz potpuno automatizovan sistem koji kombinuje Computer Vision, IoT senzore i mašinsko učenje.",

        challenge: {
            title: "Izazov",
            description: "Ručno upravljanje zalihama dovelo je do značajnih operativnih problema.",
            points: [
                "Neusaglašenosti između stvarnih i evidentiranih zaliha do 15%",
                "Vremenski intenzivni ručni inventari (3-4 dana po kvartalu)",
                "Nedostatak transparentnosti u realnom vremenu o nivoima zaliha",
                "Neefikasno korišćenje skladišnog prostora zbog nedostatka optimizacije",
                "Visoki troškovi osoblja zbog ručnih procesa"
            ]
        },

        solution: {
            title: "Rešenje",
            description: "Razvoj potpuno automatizovanog sistema za upravljanje skladištem",
            content: "Sistem kombinuje Computer Vision, IoT senzore i mašinsko učenje za kontinuirano, precizno praćenje zaliha bez ljudske intervencije.",
            points: [
                "AI detekcija objekata pomoću kamera visoke rezolucije",
                "IoT senzori težine za validaciju",
                "Prediktivna analitika za optimizaciju zaliha",
                "Dashboard u realnom vremenu sa mobilnim pristupom",
                "Automatski okidači za ponovnu narudžbu"
            ]
        },

        technical: {
            title: "Tehnička implementacija",
            description: "Rešenje se zasniva na modularnoj mikroservisnoj arhitekturi sa edge computing-om za procesiranje u realnom vremenu:",
            points: [
                "YOLOv8 za preciznu detekciju objekata",
                "Edge Computing za <50ms procesiranje slike",
                "Apache Kafka za stream procesiranje 2TB podataka/dan",
                "MQTT-bazirana IoT integracija sa 200+ senzora",
                "PostgreSQL za perzistenciju podataka",
                "Kubernetes za skalabilnost"
            ]
        },

        features: {
            title: "Ključne funkcionalnosti",
            items: [
                {
                    title: "Detekcija objekata u realnom vremenu",
                    description: "98,7% tačnost u praćenju zaliha kroz AI prepoznavanje slike",
                    icon: "camera"
                },
                {
                    title: "Integracija IoT senzora",
                    description: "200+ senzora validuje CV rezultate kroz merenja težine",
                    icon: "sensor"
                },
                {
                    title: "Prediktivna analitika",
                    description: "Predviđanje kretanja zaliha i automatska ponovna narudžba",
                    icon: "chart"
                },
                {
                    title: "Mobilni Dashboard",
                    description: "Pristup svim podacima skladišta u realnom vremenu sa bilo kog mesta",
                    icon: "mobile"
                }
            ]
        },

        implementation: {
            title: "Faze implementacije",
            phases: [
                {
                    title: "Faza 1: Proof of Concept",
                    duration: "4 nedelje",
                    description: "Razvoj prototipa i obuka modela",
                    tasks: [
                        "Razvoj prototipa za jedan deo skladišta",
                        "Obuka ML modela sa 10.000+ anotiranih slika",
                        "Integracija 5 test kamera i 20 IoT senzora",
                        "Validacija tačnosti detekcije"
                    ]
                },
                {
                    title: "Faza 2: Skaliranje",
                    duration: "8 nedelja",
                    description: "Kompletno uvođenje na 5.000m² skladišnog prostora",
                    tasks: [
                        "Instalacija 45 kamera i 200+ senzora",
                        "Razvoj dashboard-a u realnom vremenu",
                        "Integracija sa postojećim ERP sistemom",
                        "Optimizacija performansi"
                    ]
                },
                {
                    title: "Faza 3: Optimizacija",
                    duration: "4 nedelje",
                    description: "Fino podešavanje i napredne funkcionalnosti",
                    tasks: [
                        "Fino podešavanje ML modela",
                        "Implementacija prediktivne analitike",
                        "Razvoj mobilne aplikacije",
                        "Obuka zaposlenih"
                    ]
                }
            ]
        },

        challenges: {
            title: "Izazovi i rešenja",
            items: [
                {
                    challenge: "Promenljivi uslovi osvetljenja",
                    solution: "HDR kamere sa adaptivnom predobradom slike i augmentovanim podacima za obuku"
                },
                {
                    challenge: "Procesiranje velikih količina podataka u realnom vremenu",
                    solution: "Edge Computing za predprocesiranje i Apache Kafka za stream procesiranje"
                },
                {
                    challenge: "Integracija sa nasleđenim sistemima",
                    solution: "Razvoj adapter sloja sa dvosmernom sinhronizacijom"
                }
            ]
        },

        results: {
            title: "Rezultati",
            description: "Sistem je potpuno transformisao upravljanje skladištem:",
            metrics: [
                { label: "Tačnost detekcije", value: "98,7%" },
                { label: "Smanjenje vremena inventara", value: "85%" },
                { label: "Manje neusaglašenosti zaliha", value: "60%" },
                { label: "Iskorišćenost skladišnog prostora", value: "+35%" },
                { label: "ROI", value: "14 meseci" },
                { label: "Dostupnost sistema", value: "99,95%" }
            ],
            impact: "Transparentnost u realnom vremenu omogućila je proaktivno donošenje odluka i sprečila prekide u snabdevanju. Zaposleni su mogli da se fokusiraju na aktivnosti koje dodaju vrednost dok je AI upravljao zalihama."
        },

        performance: {
            title: "Metrike performansi",
            metrics: {
                processing: {
                    title: "Procesiranje",
                    items: [
                        "Procesiranje slike: <50ms po frejmu",
                        "API Response Time: p95 < 100ms",
                        "Procesiranje podataka: 500 događaja/sekund",
                        "System Uptime: 99.95%"
                    ]
                },
                scale: {
                    title: "Skaliranje",
                    items: [
                        "45 aktivnih kamera (do 200 moguće)",
                        "200+ IoT senzora",
                        "50+ istovremenih korisnika",
                        "50TB skladištenje podataka"
                    ]
                },
                ml: {
                    title: "ML Performanse",
                    items: [
                        "mAP@50: 0.92",
                        "Inference Time: 23ms",
                        "False Positive Rate: <2%",
                        "Model Size: 138MB"
                    ]
                }
            }
        },

        testimonial: {
            text: "Implementacija je revolucionisala naše skladišne procese. Ono što je ranije trajalo danima sada se dešava u realnom vremenu. Tačnost i efikasnost su impresivne.",
            author: "Thomas Weber",
            position: "Šef logistike",
            company: "LogiTech Solutions GmbH"
        },

        learnings: {
            title: "Naučene lekcije",
            items: [
                "Edge Computing je esencijalan: Predprocesiranje direktno na kameri smanjilo je mrežno opterećenje za 70%",
                "Kvalitet podataka pre kvantiteta: 1.000 visokokvalitetnih anotacija bilo je vrednije od 10.000 automatski generisanih",
                "Iterativni razvoj: Rano pilotiranje u jednoj oblasti omogućilo je brza prilagođavanja",
                "Upravljanje promenama: Rano uključivanje zaposlenih bilo je ključno za prihvatanje"
            ]
        },

        future: {
            title: "Buduće perspektive",
            description: "Sistem je dizajniran kao white-label rešenje i može se primeniti u drugim skladištima sa minimalnim prilagođavanjima.",
            plans: [
                "Integracija robotike za automatizovano komisioniranje",
                "Proširenje na spoljašnja skladišta i mobilne jedinice",
                "AI-bazirano predviđanje potreba za održavanjem",
                "Blockchain integracija za transparentnost lanca snabdevanja",
                "AR naočare za radnike skladišta sa vizuelnim naznakama"
            ]
        }
    }
};

export default smartWarehouse;