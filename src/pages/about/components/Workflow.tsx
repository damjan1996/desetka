import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface WorkflowStep {
    number: string;
    title: string;
}

const Workflow = () => {
    const { t } = useTranslation();

    const getWorkflowSteps = () => {
        try {
            const steps = t('pages.about.workflow.steps', { returnObjects: true });
            return Array.isArray(steps) ? steps : [];
        } catch (error) {
            console.error('Error loading workflow steps:', error);
            return [];
        }
    };

    const workflowSteps = getWorkflowSteps();
    const totalSteps = workflowSteps.length;

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section
            className="relative w-full bg-zinc-900 py-24 px-4 sm:px-6 lg:px-8"
            aria-label={t('pages.about.workflow.aria.workflowSection')}
        >
            {/* Section Title and Description */}
            <div className="max-w-7xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-4"
                >
                    <div className="flex items-center gap-4">
                        <ArrowRight className="h-6 w-6 text-zinc-500" />
                        <h2 className="text-white text-sm tracking-wider">
                            {t('pages.about.workflow.title')}
                        </h2>
                    </div>
                    <p className="text-zinc-400 text-sm pl-10">
                        {t('pages.about.workflow.description')}
                    </p>
                </motion.div>
            </div>

            {/* Workflow Steps */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto"
                role="list"
            >
                {workflowSteps.map((step: WorkflowStep) => (
                    <motion.div
                        key={step.number}
                        variants={itemVariants}
                        transition={{ duration: 0.5 }}
                        className="group relative"
                        role="listitem"
                        aria-label={t('pages.about.workflow.screenReader.stepProgress', {
                            number: step.number,
                            total: totalSteps,
                            title: step.title,
                        })}
                    >
                        <div className="flex items-center py-6 border-b border-zinc-800 group-hover:border-zinc-700 transition-colors duration-300">
                            <div
                                className="w-12 sm:w-20 text-sm text-zinc-600 font-light"
                                aria-label={t('pages.about.workflow.aria.stepNumber', {
                                    number: step.number,
                                })}
                            >
                                {step.number}
                            </div>
                            <h3 className="text-sm sm:text-base text-zinc-400 group-hover:text-white transition-colors duration-300">
                                {step.title}
                            </h3>
                        </div>

                        {/* Line Indicator */}
                        <div
                            className="absolute left-0 bottom-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500 ease-out"
                            aria-hidden="true"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Workflow;
