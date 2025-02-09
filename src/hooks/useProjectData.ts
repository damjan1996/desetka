// src/hooks/useProjectData.ts
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export const useProjectData = <T = unknown>(projectId: string): T | null => {
    const { i18n } = useTranslation();
    const [projectData, setProjectData] = useState<T | null>(null);

    useEffect(() => {
        const loadProjectData = async () => {
            try {
                const projectModule = await import(
                    `../i18n/locales/${i18n.language}/portfolio/projects/${projectId}`
                    );
                setProjectData(projectModule[projectId] as T);
            } catch (error) {
                console.error(`Failed to load project data for ${projectId}:`, error);
                setProjectData(null);
            }
        };

        loadProjectData();
    }, [projectId, i18n.language]);

    return projectData;
};
