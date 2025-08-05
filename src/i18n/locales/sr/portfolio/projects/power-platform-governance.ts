// src/i18n/locales/sr/portfolio/projects/power-platform-governance.ts
export const powerPlatformGovernance = {
    meta: {
        slug: 'power-platform-governance',
        title: "Power Platform Governance & Automation Suite",
        description: "Enterprise platforma za upravljanje Microsoft Power Platform i SharePoint Online",
        excerpt: "Centralno upravljanje, monitoring i automatizacija celokupnog M365 okruženja - od provizioniranja do praćenja usklađenosti.",
        date: "2024-09",
        category: "Enterprise Software",
        client: "Enterprise CoE timovi",
        duration: "6 meseci",
        url: "https://governance-demo.azurewebsites.net",
        repository: "",
        documentation: "/docs/power-platform-governance",
        published: true,
        featured: true,
        technologies: ["React", "TypeScript", "Node.js", "Microsoft Graph", "PowerShell", "Azure Functions", "GraphQL", "Fluent UI"],
        tags: ["Microsoft 365", "Power Platform", "SharePoint", "Upravljanje", "Automatizacija", "Enterprise"]
    },
    content: {
        intro: "Sveobuhvatna enterprise platforma koja omogućava IT administratorima i Power Platform CoE timovima da centralno upravljaju i automatizuju celokupno M365 okruženje.",

        challenge: {
            title: "Izazov",
            description: "Nekontrolisan rast Power Apps, Flows i SharePoint sajtova doveo je do kritičnih problema.",
            points: [
                "Shadow IT kroz neupravljani citizen development",
                "Rizici usklađenosti i kršenje zaštite podataka",
                "Eksplodirajući troškovi licenci zbog nekorišćenih resursa",
                "Nedostatak vidljivosti u Power Platform pejzaž",
                "Ručni, procesima skloni greškama provizioniranja",
                "Nekonzistentne politike upravljanja među timovima"
            ]
        },

        solution: {
            title: "Rešenje",
            description: "Centralna platforma za upravljanje sa real-time monitoringom i automatizacijom",
            content: "Platforma kombinuje moderne web tehnologije sa Microsoft 365 API-jima kako bi omogućila besprekorno integrisanje i potpunu kontrolu nad celokupnim Power Platform okruženjem.",
            points: [
                "Automated Provisioning Hub za sajtove, timove i okruženja",
                "Real-Time Monitoring Dashboard sa live activity stream-ovima",
                "Power Platform Governance Center sa DLP policy enforcement",
                "Compliance & Security Suite sa permission analyzer-om",
                "PowerShell Automation Framework za prilagođene operacije",
                "Intelligent Resource Optimization sa ML-baziranim predikcijama"
            ]
        },

        technical: {
            title: "Tehnička implementacija",
            description: "Rešenje se zasniva na modernoj mikroservisnoj arhitekturi sa event-driven dizajnom:",
            points: [
                "React 18.3 sa TypeScript-om za type-safe frontend razvoj",
                "Fluent UI v9 za prirodan Microsoft izgled",
                "GraphQL API sa Apollo Server-om za efikasne upite podataka",
                "Azure Functions za serverless automatizaciju",
                "PowerShell 7.4 Core za M365 operacije",
                "Azure Service Bus za asinhrono procesiranje poslova",
                "Cosmos DB za globalnu replikaciju podataka"
            ]
        },

        features: {
            title: "Ključne funkcionalnosti",
            items: [
                {
                    title: "Automated Provisioning Hub",
                    description: "Kreiranje SharePoint sajtova bazirano na šablonima sa bulk provizioniranjem i post-provisioning workflow-ima",
                    icon: "automation"
                },
                {
                    title: "Real-Time Monitoring",
                    description: "Live activity stream-ovi sa ažuriranjima u realnom vremenu preko WebSocket-a i GraphQL subscription-a",
                    icon: "monitoring"
                },
                {
                    title: "Permission Analyzer",
                    description: "Cross-tenant izveštaji o dozvolama sa detekcijom overprivileged korisnika i audit eksternog deljenja",
                    icon: "security"
                },
                {
                    title: "PowerShell Framework",
                    description: "120+ prilagođenih cmdlet-a sa centralizovanom bibliotekom skripti i zakazanom automatizacijom",
                    icon: "powershell"
                },
                {
                    title: "Compliance Suite",
                    description: "DLP policy builder sa otkrivanjem osetljivih podataka i automatizovanom remedijacijom",
                    icon: "compliance"
                },
                {
                    title: "Resource Optimizer",
                    description: "ML-bazirana predikcija korišćenja sa automatizovanim čišćenjem i alokacijom troškova",
                    icon: "optimization"
                }
            ]
        },

        implementation: {
            title: "Faze implementacije",
            phases: [
                {
                    title: "Faza 1: Osnova",
                    duration: "6 nedelja",
                    description: "Postavljanje arhitekture i osnovnih servisa",
                    tasks: [
                        "Azure infrastruktura sa Terraform-om",
                        "GraphQL API i servis autentifikacije",
                        "Microsoft Graph integracija",
                        "PowerShell framework za izvršavanje"
                    ]
                },
                {
                    title: "Faza 2: Osnovne funkcionalnosti",
                    duration: "10 nedelja",
                    description: "Razvoj glavnih funkcionalnosti",
                    tasks: [
                        "Provisioning engine sa sistemom šablona",
                        "Real-time monitoring dashboard",
                        "Implementacija permission analyzer-a",
                        "DLP policy upravljanje"
                    ]
                },
                {
                    title: "Faza 3: Inteligencija",
                    duration: "8 nedelja",
                    description: "ML funkcionalnosti i automatizacija",
                    tasks: [
                        "Model predikcije korišćenja resursa",
                        "Automatizovani cleanup workflow-i",
                        "Engine za optimizaciju troškova",
                        "Sistem detekcije anomalija"
                    ]
                }
            ]
        },

        challenges: {
            title: "Izazovi i rešenja",
            items: [
                {
                    challenge: "API rate limiting",
                    solution: "Inteligentno grupisanje zahteva sa eksponencijalnim backoff-om i Redis keširanje"
                },
                {
                    challenge: "Multi-tenant izolacija",
                    solution: "Odvojene baze podataka po tenant-u sa row-level bezbednošću i enkripcijom"
                },
                {
                    challenge: "Real-time ažuriranja sa velikim količinama podataka",
                    solution: "WebSocket ažuriranja sa GraphQL subscription-ima i delta upitima"
                },
                {
                    challenge: "Bezbednost izvršavanja PowerShell-a",
                    solution: "Sandboxed izvršavanje sa Azure Container Instances i Just Enough Administration"
                }
            ]
        },

        results: {
            title: "Rezultati",
            description: "Platforma je potpuno transformisala Power Platform upravljanje:",
            metrics: [
                { label: "Vreme provizioniranja", value: "95% brže" },
                { label: "Stopa usklađenosti", value: "94%" },
                { label: "Smanjenje troškova", value: "40%" },
                { label: "Produktivnost admina", value: "3x" },
                { label: "Incident response", value: "80% brže" },
                { label: "Smanjenje Shadow IT", value: "90%" }
            ],
            impact: "Rešenje je omogućilo organizacijama da pronađu balans između inovacije i kontrole. Citizen developeri su mogli bezbedno da rade dok je IT zadržao potpuno upravljanje."
        },

        performance: {
            title: "Performanse i skaliranje",
            metrics: {
                technical: {
                    title: "Tehničke metrike",
                    items: [
                        "35.000+ linija koda",
                        "45+ React komponenti",
                        "120+ PowerShell cmdlet-a",
                        "80+ GraphQL endpoint-a",
                        "92% test pokrivenost"
                    ]
                },
                scale: {
                    title: "Skaliranje",
                    items: [
                        "25+ enterprise tenant-a",
                        "50.000+ upravljanih resursa",
                        "5.000+ dnevnih automatizacija",
                        "100+ istovremenih korisnika",
                        "99.9% uptime SLA"
                    ]
                },
                architecture: {
                    title: "Arhitektura",
                    items: [
                        "Multi-region deployment",
                        "Auto-skaliranje sa AKS",
                        "Globalna replikacija podataka",
                        "Zero-downtime deployment",
                        "Disaster recovery <1h RTO"
                    ]
                }
            }
        },

        testimonial: {
            text: "Ova platforma je revolucionisala naše Power Platform upravljanje. Ono što je nekad trajalo nedeljama sada se dešava za minute - potpuno automatizovano i usklađeno.",
            author: "Michael Schmidt",
            position: "Šef IT upravljanja",
            company: "Fortune 500 kompanija"
        },

        learnings: {
            title: "Naučene lekcije",
            items: [
                "Event-driven arhitektura je esencijalna za skalabilnost sa enterprise workload-ima",
                "PowerShell Core omogućava cross-platform automatizaciju bez Windows zavisnosti",
                "GraphQL je smanjio API pozive za 60% kroz efikasno preuzimanje podataka",
                "Policy as Code je značajno pojednostavio upravljanje",
                "Inkrementalna sinhronizacija sa delta upitima je kritična za performanse"
            ]
        },

        future: {
            title: "Buduće perspektive",
            description: "Platforma se kontinuirano proširuje i poboljšava.",
            plans: [
                "AI-powered uvidi sa detekcijom anomalija",
                "Microsoft Copilot integracija za prirodno upravljanje jezikom",
                "Fabric Analytics za naprednu BI integraciju",
                "Container Apps za serverless PowerShell izvršavanje",
                "Zero Trust bezbednosni model",
                "Cross-cloud podrška za AWS i Google Cloud"
            ]
        }
    }
};

export default powerPlatformGovernance;