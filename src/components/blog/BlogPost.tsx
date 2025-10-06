'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import type { BlogPost as BlogPostType } from '@/types';
import { formatDate } from '@/lib/utils';
import { useTranslations, useLanguage } from '@/contexts/LanguageContext';
import { getLocalizedPost } from '@/lib/data/blog';

interface BlogPostProps {
    post: BlogPostType | undefined;
}

export default function BlogPost({ post }: BlogPostProps) {
    const t = useTranslations();
    const { language } = useLanguage();
    
    if (!post) {
        return (
            <div className="min-h-screen py-24 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-zinc-900 mb-4">{t.blog.post_not_found}</h1>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/90 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>{t.blog.back_to_blog}</span>
                    </Link>
                </div>
            </div>
        );
    }

    const localizedPost = getLocalizedPost(post, language);
    
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: localizedPost.title,
                    text: localizedPost.excerpt,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Share failed:', err);
            }
        }
    };

    return (
        <article className="min-h-screen py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>{t.blog.back_to_blog}</span>
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-12"
                >
                    {/* Category & Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
              {localizedPost.category}
            </span>
                        <div className="flex items-center gap-4 text-zinc-600 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(localizedPost.publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{localizedPost.readingTime}</span>
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
                        {localizedPost.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-xl text-zinc-700 leading-relaxed mb-8">{localizedPost.excerpt}</p>

                    {/* Author & Share */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
                                <span className="text-xl">🎭</span>
                            </div>
                            <div>
                                <p className="text-zinc-900 font-medium">{localizedPost.author}</p>
                                <p className="text-zinc-600 text-sm">{t.blog.author}</p>
                            </div>
                        </div>

                        <button
                            onClick={handleShare}
                            className="p-3 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-700 rounded-xl transition-colors shadow-sm"
                            aria-label={t.blog.share_post}
                        >
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </motion.header>

                {/* Cover Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative aspect-video rounded-3xl overflow-hidden bg-zinc-100 mb-12"
                >
                    <Image src={localizedPost.coverImage} alt={localizedPost.title} fill className="object-cover" priority />
                    <div className="absolute inset-0 vhs-effect opacity-10" />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="prose prose-lg max-w-none mb-12"
                >
                    <div className="text-zinc-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: localizedPost.content }} />
                </motion.div>

                {/* Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-wrap gap-2 mb-12"
                >
                    {localizedPost.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-lg text-sm transition-colors"
                        >
              #{tag}
            </span>
                    ))}
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-zinc-200 mb-12" />

                {/* Back to Blog */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-center"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-800 rounded-xl transition-colors shadow-sm"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>{t.blog.more_posts}</span>
                    </Link>
                </motion.div>
            </div>
        </article>
    );
}
