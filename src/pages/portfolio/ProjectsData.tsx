// pages/portfolio/projectsData.ts
import { type ComponentType } from 'react';

export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    client: string;
    duration: string;
    technologies: string[];
    overview: string;
    challenges: string[];
    solutions: string[];
    results: string[];
    // Optionale Eigenschaften, die in den Filtern verwendet werden
    featured?: boolean;
    category?: string;
}

export interface ProjectWithContent extends Project {
    content: ComponentType;
}

/**
 * Lädt das Projekt mit dem übergebenen Slug.
 * Wird synchron geladen, da wir eager loading mit import.meta.glob verwenden.
 */
export const getProjectBySlug = (slug: string | undefined): Project | null => {
    if (!slug) return null;

    try {
        // Cast des Ergebnisses zu einem Record, dessen Module die Eigenschaft "default" haben.
        const projectFiles = import.meta.glob('./projects/*.mdx', { eager: true }) as Record<
            string,
            { default: Project }
        >;
        const projectModule = projectFiles[`./projects/${slug}.mdx`];
        if (projectModule) {
            return projectModule.default;
        }
        return null;
    } catch (error) {
        console.error('Failed to load project:', error);
        return null;
    }
};

/**
 * Lädt alle Projekte aus dem Verzeichnis projects.
 */
export const getAllProjects = (): Project[] => {
    const projectFiles = import.meta.glob('./projects/*.mdx', { eager: true }) as Record<
        string,
        { default: Project }
    >;
    const projects: Project[] = [];

    for (const path in projectFiles) {
        try {
            const projectModule = projectFiles[path];
            const project = projectModule.default;
            if (project) {
                projects.push(project);
            }
        } catch (error) {
            console.error(`Failed to load project from ${path}:`, error);
        }
    }

    return projects;
};

/**
 * Gibt alle als featured markierten Projekte zurück.
 */
export const getFeaturedProjects = (): Project[] => {
    return getAllProjects().filter((project) => project.featured);
};

/**
 * Gibt alle Projekte einer bestimmten Kategorie zurück.
 */
export const getProjectsByCategory = (category: string): Project[] => {
    return getAllProjects().filter((project) => project.category === category);
};
