'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';
import { useTranslations, useLanguage } from '@/contexts/LanguageContext';
import { getLocalizedPost } from '@/lib/data/blog';

interface BlogCardProps {
    post: BlogPost;
    index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
    const t = useTranslations();
    const { language } = useLanguage();
    
    const localizedPost = getLocalizedPost(post, language);
    
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
        >
            <Link href={`/blog/${localizedPost.slug}`}>
                <div className="bg-white/90 rounded-2xl overflow-hidden border border-zinc-200 hover:border-primary/30 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md">
                    {/* Cover Image */}
                    <div className="relative aspect-video overflow-hidden bg-zinc-100">
                        <Image
                            src={localizedPost.coverImage}
                            alt={localizedPost.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                {localizedPost.category}
              </span>
                        </div>
                        {/* VHS Effect (optional) */}
                        <div className="absolute inset-0 vhs-effect opacity-10 pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-zinc-600 text-sm mb-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(localizedPost.publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{localizedPost.readingTime}</span>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {localizedPost.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-zinc-700 leading-relaxed mb-4 line-clamp-3 flex-1">
                            {localizedPost.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {localizedPost.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-xs"
                                >
                  #{tag}
                </span>
                            ))}
                        </div>

                        {/* Read More */}
                        <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                            <span className="text-sm font-medium">{t.blog.read_more}</span>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
