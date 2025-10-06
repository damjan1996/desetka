'use client';

import { motion } from 'framer-motion';

export default function AboutPageHero() {
    
    return (
        <section className="pt-6 pb-0 sm:pt-8 sm:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <h1 className="text-5xl font-bold text-zinc-900 mb-4">About</h1>
                    <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                        Entdecke die Geschichte hinter der mysteriösen Synthwave-Persona
                    </p>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-6" />
                </motion.div>
            </div>
        </section>
    );
}