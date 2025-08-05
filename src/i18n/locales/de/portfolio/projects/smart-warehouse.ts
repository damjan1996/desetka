// src/i18n/locales/de/portfolio/projects/smart-warehouse.ts
export const smartWarehouse = {
    meta: {
        slug: 'smart-warehouse',
        title: "Intelligente Lagerverwaltung mit Computer Vision",
        description: "KI-gestütztes System zur Echtzeit-Bestandsführung und Optimierung von Lagerprozessen",
        excerpt: "Entwicklung eines autonomen Lagerverwaltungssystems mit Computer Vision, IoT-Sensorik und Machine Learning für präzise Bestandsführung.",
        date: "2024-06",
        category: "AI & Automation",
        client: "LogiTech Solutions GmbH",
        duration: "4 Monate",
        url: "https://warehouse-demo.example.com",
        repository: "",
        documentation: "/case-studies/smart-warehouse",
        published: true,
        featured: true,
        technologies: ["YOLOv8", "Python", "FastAPI", "React", "PostgreSQL", "Docker", "Kubernetes", "IoT", "MQTT"],
        tags: ["Computer Vision", "Machine Learning", "IoT", "Edge Computing", "Automation"]
    },
    content: {
        intro: "Ein mittelständischer Logistikdienstleister transformierte seine manuelle Lagerverwaltung durch ein vollautomatisiertes System, das Computer Vision, IoT-Sensorik und Machine Learning kombiniert.",

        challenge: {
            title: "Die Herausforderung",
            description: "Die manuelle Bestandsführung führte zu erheblichen operativen Problemen.",
            points: [
                "Diskrepanzen zwischen tatsächlichem und gebuchtem Bestand von bis zu 15%",
                "Zeitintensive manuelle Inventuren (3-4 Tage pro Quartal)",
                "Fehlende Echtzeit-Transparenz über Lagerbestände",
                "Ineffiziente Lagerplatznutzung durch fehlende Optimierung",
                "Hohe Personalkosten durch manuelle Prozesse"
            ]
        },

        solution: {
            title: "Die Lösung",
            description: "Entwicklung eines vollautomatisierten Lagerverwaltungssystems",
            content: "Das System kombiniert Computer Vision, IoT-Sensorik und Machine Learning für eine kontinuierliche, präzise Bestandsführung ohne menschliches Eingreifen.",
            points: [
                "KI-gestützte Objekterkennung mittels hochauflösender Kameras",
                "IoT-Gewichtssensoren zur Validierung",
                "Predictive Analytics für Bestandsoptimierung",
                "Echtzeit-Dashboard mit mobilem Zugriff",
                "Automatische Nachbestellungstrigger"
            ]
        },

        technical: {
            title: "Technische Implementierung",
            description: "Die Lösung basiert auf einer modularen Microservices-Architektur mit Edge Computing für Echtzeitverarbeitung:",
            points: [
                "YOLOv8 für präzise Objekterkennung",
                "Edge Computing für <50ms Bildverarbeitung",
                "Apache Kafka für Stream Processing von 2TB Daten/Tag",
                "MQTT-basierte IoT-Integration mit 200+ Sensoren",
                "PostgreSQL für Datenpersistenz",
                "Kubernetes für Skalierbarkeit"
            ]
        },

        features: {
            title: "Kernfunktionen",
            items: [
                {
                    title: "Echtzeit-Objekterkennung",
                    description: "98,7% Genauigkeit bei der Bestandserfassung durch KI-gestützte Bilderkennung",
                    icon: "camera"
                },
                {
                    title: "IoT-Sensorintegration",
                    description: "200+ Sensoren validieren CV-Ergebnisse durch Gewichtsmessungen",
                    icon: "sensor"
                },
                {
                    title: "Predictive Analytics",
                    description: "Vorhersage von Bestandsbewegungen und automatische Nachbestellung",
                    icon: "chart"
                },
                {
                    title: "Mobile Dashboard",
                    description: "Echtzeit-Zugriff auf alle Lagerdaten von überall",
                    icon: "mobile"
                }
            ]
        },

        implementation: {
            title: "Implementierungsphasen",
            phases: [
                {
                    title: "Phase 1: Proof of Concept",
                    duration: "4 Wochen",
                    description: "Prototyp-Entwicklung und Modelltraining",
                    tasks: [
                        "Entwicklung eines Prototyps für einen Lagerbereich",
                        "Training des ML-Modells mit 10.000+ annotierten Bildern",
                        "Integration von 5 Testkameras und 20 IoT-Sensoren",
                        "Validierung der Erkennungsgenauigkeit"
                    ]
                },
                {
                    title: "Phase 2: Skalierung",
                    duration: "8 Wochen",
                    description: "Vollständiger Rollout auf 5.000m² Lagerfläche",
                    tasks: [
                        "Installation von 45 Kameras und 200+ Sensoren",
                        "Entwicklung des Echtzeit-Dashboards",
                        "Integration in bestehendes ERP-System",
                        "Performance-Optimierung"
                    ]
                },
                {
                    title: "Phase 3: Optimierung",
                    duration: "4 Wochen",
                    description: "Fine-Tuning und erweiterte Features",
                    tasks: [
                        "Fine-Tuning der ML-Modelle",
                        "Implementierung von Predictive Analytics",
                        "Mobile App Entwicklung",
                        "Schulung der Mitarbeiter"
                    ]
                }
            ]
        },

        challenges: {
            title: "Herausforderungen & Lösungen",
            items: [
                {
                    challenge: "Variierende Lichtverhältnisse",
                    solution: "HDR-Kameras mit adaptiver Bildvorverarbeitung und augmentierten Trainingsdaten"
                },
                {
                    challenge: "Echtzeitverarbeitung großer Datenmengen",
                    solution: "Edge Computing für Vorverarbeitung und Apache Kafka für Stream Processing"
                },
                {
                    challenge: "Legacy-System Integration",
                    solution: "Entwicklung eines Adapter-Layers mit bidirektionaler Synchronisation"
                }
            ]
        },

        results: {
            title: "Ergebnisse",
            description: "Das System transformierte die Lagerverwaltung vollständig:",
            metrics: [
                { label: "Erkennungsgenauigkeit", value: "98,7%" },
                { label: "Reduktion Inventurzeit", value: "85%" },
                { label: "Weniger Fehlbestände", value: "60%" },
                { label: "Lagerplatznutzung", value: "+35%" },
                { label: "ROI", value: "14 Monate" },
                { label: "System-Uptime", value: "99,95%" }
            ],
            impact: "Die Echtzeit-Transparenz ermöglichte proaktive Entscheidungen und verhinderte Lieferengpässe. Mitarbeiter konnten sich auf wertschöpfende Tätigkeiten fokussieren, während die KI die Bestandsführung übernahm."
        },

        performance: {
            title: "Performance Metriken",
            metrics: {
                processing: {
                    title: "Verarbeitung",
                    items: [
                        "Bildverarbeitung: <50ms pro Frame",
                        "API Response Time: p95 < 100ms",
                        "Datenverarbeitung: 500 Events/Sekunde",
                        "System Uptime: 99.95%"
                    ]
                },
                scale: {
                    title: "Skalierung",
                    items: [
                        "45 Kameras aktiv (bis 200 möglich)",
                        "200+ IoT Sensoren",
                        "50+ Concurrent Users",
                        "50TB Datenspeicher"
                    ]
                },
                ml: {
                    title: "ML Performance",
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
            text: "Die Implementierung hat unsere Lagerprozesse revolutioniert. Was früher Tage dauerte, passiert jetzt in Echtzeit. Die Genauigkeit und Effizienz sind beeindruckend.",
            author: "Thomas Weber",
            position: "Head of Logistics",
            company: "LogiTech Solutions GmbH"
        },

        learnings: {
            title: "Lessons Learned",
            items: [
                "Edge Computing ist essentiell: Die Vorverarbeitung direkt an der Kamera reduzierte die Netzwerklast um 70%",
                "Datenqualität vor Quantität: 1.000 hochqualitative Annotationen waren wertvoller als 10.000 automatisch generierte",
                "Iterative Entwicklung: Frühe Pilotierung in einem Bereich ermöglichte schnelle Anpassungen",
                "Change Management: Frühzeitige Einbindung der Mitarbeiter war entscheidend für die Akzeptanz"
            ]
        },

        future: {
            title: "Zukunftsperspektiven",
            description: "Das System wurde als White-Label-Lösung konzipiert und kann mit minimalen Anpassungen in anderen Lagern eingesetzt werden.",
            plans: [
                "Integration von Robotik für automatisierte Kommissionierung",
                "Erweiterung auf Außenlager und mobile Einheiten",
                "KI-basierte Vorhersage von Wartungsbedarf",
                "Blockchain-Integration für Supply Chain Transparenz",
                "AR-Brillen für Lagermitarbeiter mit visuellen Hinweisen"
            ]
        }
    }
};

export default smartWarehouse;