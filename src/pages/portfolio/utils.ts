// src/pages/portfolio/utils.ts
import { type ComponentType } from 'react';

export interface Project {
    slug: string;
    title: string;
    description: string;
    excerpt: string;
    date: string;
    category: string;
    coverImage: string;
    client: string;
    duration: string;
    url?: string;
    repository?: string;
    documentation?: string;
    published: boolean;
    featured: boolean;
    technologies: string[];
    tags: string[];
}

export type ProjectWithContent = Project & {
    content: ComponentType;
};

interface ProjectModule {
    frontmatter: unknown;
    default: ComponentType;
}

/**
 * Validiert, ob das übergebene Frontmatter den Anforderungen eines Project entspricht.
 */
const validateProjectFrontmatter = (frontmatter: unknown): frontmatter is Project => {
    if (!frontmatter || typeof frontmatter !== 'object') return false;
    const fm = frontmatter as Record<string, unknown>;

    const requiredFields: (keyof Project)[] = [
        'slug',
        'title',
        'description',
        'excerpt',
        'date',
        'category',
        'coverImage',
        'client',
        'duration',
        'published',
        'featured',
        'technologies',
        'tags'
    ];

    const missingFields = requiredFields.filter(field => !(field in fm));
    if (missingFields.length > 0) {
        console.warn(`Missing required fields in project frontmatter: ${missingFields.join(', ')}`);
        return false;
    }

    // Validierungen: Bei Feldern, die Arrays sein sollen, prüfen wir, ob jedes Element vom erwarteten Typ ist.
    const validations = [
        { field: 'slug', type: 'string' },
        { field: 'title', type: 'string' },
        { field: 'description', type: 'string' },
        { field: 'excerpt', type: 'string' },
        { field: 'date', type: 'string' },
        { field: 'category', type: 'string' },
        { field: 'coverImage', type: 'string' },
        { field: 'client', type: 'string' },
        { field: 'duration', type: 'string' },
        { field: 'published', type: 'boolean' },
        { field: 'featured', type: 'boolean' },
        { field: 'technologies', type: 'object', arrayOf: 'string' },
        { field: 'tags', type: 'object', arrayOf: 'string' }
    ];

    for (const validation of validations) {
        const value = fm[validation.field];
        if (validation.type === 'object' && validation.arrayOf) {
            if (!Array.isArray(value) || !value.every(item => typeof item === validation.arrayOf)) {
                console.warn(`Invalid type for ${validation.field}. Expected array of ${validation.arrayOf}`);
                return false;
            }
        } else if (typeof value !== validation.type) {
            console.warn(`Invalid type for ${validation.field}. Expected ${validation.type}`);
            return false;
        }
    }

    return true;
};

export const getAllProjects = async (): Promise<Project[]> => {
    try {
        const modules = import.meta.glob('./projects/*.mdx', { eager: true }) as Record<string, ProjectModule>;
        console.log('Found project files:', Object.keys(modules));

        const projects = Object.entries(modules)
            .map(([path, module]: [string, ProjectModule]) => {
                console.log('Processing:', path);
                const frontmatter = module.frontmatter;
                if (!validateProjectFrontmatter(frontmatter)) {
                    console.warn(`Invalid or missing frontmatter in project: ${path}`);
                    return null;
                }
                const fm = frontmatter as Project;

                // Cast fm zuerst zu unknown und dann zu Record<string, unknown>
                const fmAny = fm as unknown as Record<string, unknown>;
                if ('image' in fmAny && !fm.coverImage) {
                    fm.coverImage = fmAny['image'] as string;
                    delete fmAny['image'];
                }
                return fm;
            })
            .filter((project): project is Project => project !== null && project.published);

        // Sortiere nach Datum absteigend (neueste zuerst)
        return projects.sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    } catch (error) {
        console.error('Error loading projects:', error);
        return [];
    }
};

export const getFeaturedProjects = async (): Promise<Project[]> => {
    const projects = await getAllProjects();
    return projects.filter(project => project.featured);
};

export const getProjectsByCategory = async (category: string): Promise<Project[]> => {
    const projects = await getAllProjects();
    return projects.filter(project => project.category === category);
};

export const getProjectBySlug = async (slug: string): Promise<ProjectWithContent | null> => {
    if (!slug) return null;

    try {
        const modules = import.meta.glob('./projects/*.mdx', { eager: true }) as Record<string, ProjectModule>;
        const projectEntry = Object.entries(modules).find(([path]) =>
            path.includes(`${slug}.mdx`)
        );

        if (!projectEntry) {
            console.warn(`Project not found: ${slug}`);
            return null;
        }

        const module = projectEntry[1];
        const frontmatter = module.frontmatter;
        if (!validateProjectFrontmatter(frontmatter)) {
            console.warn(`Invalid frontmatter in project: ${slug}`);
            return null;
        }
        const fm = frontmatter as Project;
        if (!fm.published) {
            console.warn(`Attempting to access unpublished project: ${slug}`);
            return null;
        }

        const fmAny = fm as unknown as Record<string, unknown>;
        if ('image' in fmAny && !fm.coverImage) {
            fm.coverImage = fmAny['image'] as string;
            delete fmAny['image'];
        }

        return {
            ...fm,
            content: module.default
        };
    } catch (error) {
        console.error(`Error loading project: ${slug}`, error);
        return null;
    }
};

export const getRelatedProjects = async (
    currentSlug: string,
    tags: string[],
    limit: number = 3
): Promise<Project[]> => {
    const allProjects = await getAllProjects();

    return allProjects
        .filter(project =>
            project.slug !== currentSlug &&
            project.tags.some(tag => tags.includes(tag))
        )
        .sort((a, b) => {
            const aMatches = a.tags.filter(tag => tags.includes(tag)).length;
            const bMatches = b.tags.filter(tag => tags.includes(tag)).length;
            return bMatches - aMatches;
        })
        .slice(0, limit);
};

export const getAllProjectCategories = async (): Promise<string[]> => {
    const projects = await getAllProjects();
    const categories = new Set(projects.map(project => project.category));
    return Array.from(categories).sort();
};
