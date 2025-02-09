export const skillbar = {
    // Accessibility labels
    ariaLabel: {
        skillLevel: 'Nivo veštine',
        progressBar: 'Indikator napretka'
    },
    // Screen reader text
    screenReader: {
        progress: '{{level}} procenata napretka za {{skill}}'
    }
} as const;
// Tip za tipsku sigurnost
export type SkillBarTranslations = typeof skillbar;
