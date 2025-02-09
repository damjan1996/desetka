export const workflow = {
    // Page title
    title: 'MY WORKFLOW',
    description: 'Systematic approach to software development through defined steps',
    // Workflow steps
    steps: [
        {
            number: '01',
            title: 'REQUIREMENTS ANALYSIS'
        },
        {
            number: '02',
            title: 'ASSESSMENT OF DEADLINES AND CONSTRAINTS'
        },
        {
            number: '03',
            title: 'DEVELOPMENT ENVIRONMENT SETUP'
        },
        {
            number: '04',
            title: 'PROGRAMMING'
        },
        {
            number: '05',
            title: 'TESTING THE RESULTS'
        },
        {
            number: '06',
            title: 'CODE SUPPORT AND SCALING'
        }
    ],
    // Aria Labels for accessibility
    aria: {
        workflowSection: 'Workflow Process',
        stepNumber: 'Step {{number}}',
        stepDescription: 'Workflow step: {{title}}'
    },
    // Screen Reader texts
    screenReader: {
        stepProgress: 'Step {{number}} of {{total}}: {{title}}'
    }
} as const;
// Type for type safety
export type WorkflowTranslations = typeof workflow;