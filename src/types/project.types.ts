// src/types/project.types.ts
export interface ProjectMeta {
    slug: string;
    title: string;
    description: string;
    excerpt: string;
    date: string;
    category: string;
    client: string;
    duration: string;
    url?: string;
    repository?: string;
    documentation?: string;
    technologies: string[];
    tags: string[];
}

export interface ProjectContent {
    intro: string;
    systemArchitecture: {
        title: string;
        description: string;
        points: string[];
    };
    dataModels: {
        title: string;
        code: string;
    };
    extractionProcess: {
        title: string;
        description: string;
        points: string[];
    };
    validation: {
        title: string;
        description: string;
        points: string[];
    };
    aiImplementation: {
        title: string;
        code: string;
    };
    errorHandling: {
        title: string;
        description: string;
        points: string[];
    };
    jtlIntegration: {
        title: string;
        description: string;
        points: string[];
    };
    monitoring: {
        title: string;
        description: string;
        points: string[];
    };
    results: {
        title: string;
        description: string;
        points: string[];
    };
}

export interface Project {
    meta: ProjectMeta;
    content: ProjectContent;
}