// src/i18n/locales/de/portfolio/projects/ai-data-reader.ts
export const aiDataReader = {
    meta: {
        slug: 'ai-data-reader',
        title: "KI-basierte Produktdatenpflege aus PDF-Dateien",
        description: "Entwicklung eines automatisierten Systems zur Extraktion und Strukturierung von Produktdaten aus PDF-Dokumenten",
        excerpt: "Integration von Claude AI für die intelligente Verarbeitung von Produktinformationen und nahtlose JTL-ERP-Integration.",
        date: "2024-02",
        category: "Data Processing",
        client: "Amazon Seller",
        duration: "2 Monate",
        url: "https://www.damjan-savic.com",
        repository: "",
        documentation: "",
        published: true,
        featured: true,
        technologies: ["Python", "FastAPI", "Claude AI", "PyPDF", "Pydantic", "JTL-Wawi"],
        tags: ["Data Extraction", "ERP", "Process Automation", "PDF Processing"]
    },
    content: {
        intro: "Ein KI-gestütztes System zur automatisierten Extraktion von Produktdaten aus PDF-Dokumenten mit direkter Integration in JTL-Warenwirtschaftssysteme, entwickelt für maximale Effizienz in der Produktdatenpflege.",

        challenge: {
            title: "Die Herausforderung",
            description: "Die manuelle Erfassung von Produktdaten aus PDF-Dokumenten war zeitaufwendig und fehleranfällig.",
            points: [
                "Große Mengen an PDF-Dokumenten mit Produktinformationen",
                "Zeitintensive manuelle Dateneingabe",
                "Inkonsistente Datenqualität",
                "Hoher personeller Aufwand"
            ]
        },

        solution: {
            title: "Unsere Lösung",
            description: "Entwicklung eines KI-gestützten Systems zur automatisierten Datenextraktion",
            content: "Durch den Einsatz von Claude AI und modernen Python-Technologien haben wir eine vollautomatische Lösung geschaffen, die PDF-Dokumente verarbeitet und die extrahierten Daten direkt in das JTL-Warenwirtschaftssystem integriert.",
            points: [
                "Automatisierte PDF-Verarbeitung",
                "KI-gestützte Datenextraktion",
                "Intelligente Datenvalidierung",
                "Nahtlose JTL-Integration"
            ]
        },

        technical: {
            title: "Technische Umsetzung",
            description: "Die Lösung basiert auf einer modularen Python-Architektur mit verschiedenen Kernkomponenten:",
            points: [
                "Robuste PDF-Textextraktion mit PyPDF",
                "KI-gestützte Datenextraktion mit Claude AI",
                "Validierung durch Pydantic Models",
                "JTL-ERP Integration über CSV-Export"
            ],
            code: `class ProductData(BaseModel):
    artikel_nummer: str
    name: str
    hersteller: str
    inhaltsstoffe: List[str]
    allergene: List[str]
    naehrwerte: NaehrwertData
    nettogewicht: str
    vegan: bool
    vegetarisch: bool

def _extract_with_claude(self, prompt: str) -> Dict[str, Any]:
    '''Extrahiert strukturierte Daten mit Claude AI.'''
    response = self.client.messages.create(
        model='claude-3-sonnet-20240229',
        messages=[{
            'role': 'user',
            'content': prompt
        }]
    )
    return self._clean_json_string(response.content)`
        },

        implementation: {
            title: "Implementierungsprozess",
            description: "Der automatisierte Workflow wurde in mehreren Phasen implementiert:",
            points: [
                "PDF-Batch-Verarbeitung aus Input-Verzeichnis",
                "Intelligente Texterkennung und -strukturierung",
                "Mehrschichtige Validierungslogik",
                "Robuste Fehlerbehandlung",
                "Integration in bestehende Systeme"
            ]
        },

        results: {
            title: "Ergebnisse und Auswirkungen",
            description: "Die Implementierung führte zu signifikanten Verbesserungen im Geschäftsprozess:",
            points: [
                "90% Zeitersparnis bei der Produktdatenpflege",
                "99% Genauigkeit bei der Datenextraktion",
                "Eliminierung manueller Dateneingaben",
                "Standardisierte Produktdatenqualität",
                "Deutlich reduzierte Fehlerquote"
            ]
        },

        conclusion: "Das entwickelte System hat die Produktdatenpflege grundlegend revolutioniert. Durch die Kombination von KI-Technologie und automatisierter Datenverarbeitung wurde nicht nur die Effizienz drastisch gesteigert, sondern auch die Datenqualität erheblich verbessert. Das Projekt zeigt eindrucksvoll, wie moderne KI-Lösungen praktische Geschäftsprobleme lösen können."
    }
};

// Re-export für Kompatibilität mit dem Projektimport-System
export default aiDataReader;