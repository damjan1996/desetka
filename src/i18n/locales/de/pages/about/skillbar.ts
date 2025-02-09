export const skillbar = {
    // Accessibility labels
    ariaLabel: {
        skillLevel: 'Fähigkeitsniveau',
        progressBar: 'Fortschrittsbalken'
    },
    // Screen reader text
    screenReader: {
        progress: '{{level}} Prozent Fortschritt für {{skill}}'
    }
} as const;
// Type für Typsicherheit
export type SkillBarTranslations = typeof skillbar;
