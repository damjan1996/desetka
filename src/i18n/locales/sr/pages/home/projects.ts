// src/i18n/locales/sr/pages/home/projects.ts
export const projects = {
    title: 'Portfolio',
    viewAll: 'Svi projekti →',
    loading: 'Učitavanje projekata...',
    error: {
        loading: 'Greška pri učitavanju projekata'
    }
} as const;
export type ProjectsTranslations = typeof projects;
