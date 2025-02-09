// src/i18n/locales/en/pages/home/projects.ts
export const projects = {
    title: 'Portfolio',
    viewAll: 'All Projects →',
    loading: 'Loading projects...',
    error: {
        loading: 'Error loading projects'
    }
} as const;
export type ProjectsTranslations = typeof projects;
