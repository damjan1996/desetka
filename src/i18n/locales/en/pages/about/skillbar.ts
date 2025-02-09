export const skillbar = {
    // Accessibility labels
    ariaLabel: {
        skillLevel: 'Skill Level',
        progressBar: 'Progress Bar'
    },
    // Screen reader text
    screenReader: {
        progress: '{{level}} percent progress for {{skill}}'
    }
} as const;
// Type for type safety
export type SkillBarTranslations = typeof skillbar;
