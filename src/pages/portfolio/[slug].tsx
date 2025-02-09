// components/ProjectContentTemplate.tsx
import React from 'react';

export interface TranslatedContent {
    meta: {
        title: string;
        description: string;
        date: string;
        client: string;
        duration: string;
        technologies: string[];
    };
    content: {
        intro: string;
        challenge: {
            title: string;
            description: string;
            points?: string[];
        };
        solution: {
            title: string;
            description: string;
            content?: string;
            points?: string[];
        };
        technical: {
            title: string;
            description: string;
            points?: string[];
            code?: string;
        };
        implementation: {
            title: string;
            description: string;
            points?: string[];
        };
        results: {
            title: string;
            description: string;
            points?: string[];
        };
        conclusion?: string;
    };
}

interface ProjectContentTemplateProps {
    content: TranslatedContent;
}

const ProjectContentTemplate: React.FC<ProjectContentTemplateProps> = ({ content }) => {
    return (
        <div>
            {/* Beispielhaftes Rendering */}
            <h1>{content.meta.title}</h1>
            <p>{content.meta.description}</p>
            {/* Weitere Darstellung des Inhalts */}
        </div>
    );
};

export default ProjectContentTemplate;
