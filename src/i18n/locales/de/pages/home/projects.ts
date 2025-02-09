// src/i18n/locales/de/pages/home/projects.ts
export const projects = {
    title: 'Portfolio',
    viewAll: 'Alle Projekte →',
    loading: 'Projekte werden geladen...',
    error: {
        loading: 'Fehler beim Laden der Projekte'
    }
} as const;
export type ProjectsTranslations = typeof projects;
