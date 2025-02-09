export const workflow = {
    // Naslov stranice
    title: 'MOJ WORKFLOW',
    description: 'Sistematski pristup razvoju softvera kroz definisane korake',
    // Workflow koraci
    steps: [
        {
            number: '01',
            title: 'ANALIZA ZAHTEVA'
        },
        {
            number: '02',
            title: 'PROVERA ROKOVA I OGRANIČENJA'
        },
        {
            number: '03',
            title: 'POSTAVLJANJE RAZVOJNOG OKRUŽENJA'
        },
        {
            number: '04',
            title: 'PROGRAMIRANJE'
        },
        {
            number: '05',
            title: 'TESTIRANJE REZULTATA'
        },
        {
            number: '06',
            title: 'PODRŠKA I SKALIRANJE KODA'
        }
    ],
    // Aria oznake za pristupačnost
    aria: {
        workflowSection: 'Workflow proces',
        stepNumber: 'Korak {{number}}',
        stepDescription: 'Workflow korak: {{title}}'
    },
    // Tekstovi za čitače ekrana
    screenReader: {
        stepProgress: 'Korak {{number}} od {{total}}: {{title}}'
    }
} as const;
// Tip za tipsku sigurnost
export type WorkflowTranslations = typeof workflow;