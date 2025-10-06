'use client';

import { motion } from 'framer-motion';
import { blogPosts, getLocalizedPost } from '@/lib/data/blog';
import BlogCard from './BlogCard';
import { useTranslations } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogOverview() {
    const t = useTranslations();
    const { language } = useLanguage();
    
    const localizedPosts = blogPosts.map(post => getLocalizedPost(post, language));
    
    return (
        <section className="min-h-screen py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
                        {t.blog.title}
                    </h1>
                    <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                        {t.blog.subtitle}
                    </p>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-6" />
                </motion.div>

                {/* Featured Post (First Post) */}
                {localizedPosts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-16"
                    >
                        <div className="relative bg-white/90 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
                                {/* Image */}
                                <div className="relative aspect-video lg:aspect-auto lg:h-full bg-zinc-100">
                                    <img
                                        src={localizedPosts[0].coverImage}
                                        alt={localizedPosts[0].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 vhs-effect opacity-10" />
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs sm:text-sm font-semibold rounded-full">
                      {t.blog.featured}
                    </span>
                                        <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs sm:text-sm rounded-full">
                      {localizedPosts[0].category}
                    </span>
                                    </div>

                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 mb-3 sm:mb-4">
                                        {localizedPosts[0].title}
                                    </h2>

                                    <p className="text-zinc-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                                        {localizedPosts[0].excerpt}
                                    </p>

                                    <div className="flex items-center gap-3 sm:gap-4 text-zinc-600 text-xs sm:text-sm mb-4 sm:mb-6">
                                        <span>{localizedPosts[0].readingTime}</span>
                                        <span>•</span>
                                        <span>{localizedPosts[0].publishedAt}</span>
                                    </div>

                                    <a
                                        href={`/blog/${localizedPosts[0].slug}`}
                                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary hover:bg-primary/90 text-white rounded-xl transition-colors w-fit touch-manipulation text-sm sm:text-base"
                                    >
                                        <span>{t.blog.read_now}</span>
                                        <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {localizedPosts.slice(1).map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>

                {/* Empty State */}
                {localizedPosts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center py-24"
                    >
                        <p className="text-zinc-600 text-lg">
                            {t.blog.no_posts}
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
