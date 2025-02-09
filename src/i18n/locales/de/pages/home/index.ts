// src/i18n/locales/de/pages/home/index.ts
import { hero } from './hero';
import { about } from './about';
import { experience } from './experience';
import { expertise } from './expertise';
import { skills } from './skills';
import { projects } from './projects';

export const home = {
    hero,
    about,
    experience,
    expertise,
    skills,
    projects
} as const;

export type HomeTranslations = typeof home;