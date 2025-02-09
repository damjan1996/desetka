export const workflow = {
    // Seitentitel
    title: 'MEIN WORKFLOW',
    description: 'Systematischer Ansatz zur Softwareentwicklung durch definierte Schritte',
    // Workflow-Schritte
    steps: [
        {
            number: '01',
            title: 'ANFORDERUNGSANALYSE'
        },
        {
            number: '02',
            title: 'ABFRAGE VON DEADLINES UND EINSCHRÄNKUNGEN'
        },
        {
            number: '03',
            title: 'EINRICHTUNG DER ENTWICKLUNGSUMGEBUNG'
        },
        {
            number: '04',
            title: 'PROGRAMMIERUNG'
        },
        {
            number: '05',
            title: 'TESTEN DER ERGEBNISSE'
        },
        {
            number: '06',
            title: 'SUPPORT UND SKALIERUNG DES CODES'
        }
    ],
    // Aria Labels für Barrierefreiheit
    aria: {
        workflowSection: 'Workflow-Prozess',
        stepNumber: 'Schritt {{number}}',
        stepDescription: 'Workflow-Schritt: {{title}}'
    },
    // Screen Reader Texte
    screenReader: {
        stepProgress: 'Schritt {{number}} von {{total}}: {{title}}'
    }
} as const;
// Type für Typsicherheit
export type WorkflowTranslations = typeof workflow;