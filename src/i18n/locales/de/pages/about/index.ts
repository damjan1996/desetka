import { hero } from './hero';
import { journey } from './journey';
import { schema } from './schema';
import { skillbar } from './skillbar';
import { skillgroup } from './skillgroup';
import { skills } from './skills';
import { workflow } from './workflow';
export const about = {
    hero,
    journey,
    schema,
    skillbar,
    skillgroup,
    skills,
    workflow
} as const;
// Typen exportieren
export type { HeroTranslations } from './hero';
export type { JourneyTranslations } from './journey';
export type { SchemaTranslations } from './schema';
export type { SkillBarTranslations } from './skillbar';
export type { SkillGroupTranslations } from './skillgroup';
export type { SkillsTranslations } from './skills';
export type { WorkflowTranslations } from './workflow';
