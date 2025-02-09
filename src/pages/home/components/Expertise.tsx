"use client"

import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Code2, ShoppingBag, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/Card";
import { Badge } from "../../../components/Badge";

// Definiere den Typ für einen Expertise-Bereich
interface ExpertiseArea {
    title: string;
    description: string;
    skills: string[];
}

// Typisierung für iconMap: Wir erwarten ein React-Komponenten-Typ, der optional eine className erhält
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'ERP Integration': ShoppingBag,
    'Entwicklung': Code2,
    'E-Commerce': ShoppingBag,
    'Digitales Marketing': TrendingUp,
    // English mappings
    'Development': Code2,
    'Digital Marketing': TrendingUp
};

const Expertise = () => {
    const { t } = useTranslation('home');

    // Wir casten den Rückgabewert explizit zu ExpertiseArea[]
    const expertiseAreas = t('expertise.areas', { returnObjects: true }) as ExpertiseArea[];

    return (
        <section className="py-12 sm:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {t('expertise.title')}
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {expertiseAreas.map((area: ExpertiseArea, index: number) => {
                        const Icon = iconMap[area.title] || ShoppingBag;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full bg-card hover:bg-accent transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6 text-primary-foreground" />
                                        </div>
                                        <CardTitle className="text-xl font-semibold text-foreground">
                                            {area.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-muted-foreground mb-4">
                                            {area.description}
                                        </CardDescription>
                                        <div className="flex flex-wrap gap-2">
                                            {area.skills.map((skill: string, skillIndex: number) => (
                                                <Badge
                                                    key={skillIndex}
                                                    variant="secondary"
                                                    className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
