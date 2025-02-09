// pages/portfolio/types.ts
import { ReactNode } from 'react';

export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    slug: string;
    date: string;
    content: ReactNode;
    client?: string;
    technologies?: string[];
    links?: {
        github?: string;
        live?: string;
    };
}