import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag, Folder } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { blog as blogDe } from '../../../i18n/locales/de/blog/index';
import { blog as blogEn } from '../../../i18n/locales/en/blog/index';
import { blog as blogSr } from '../../../i18n/locales/sr/blog/index';

// Eigene Typdefinition, da 'BlogPostFrontmatter' nicht aus mdxLoader exportiert wird.
export interface BlogPostFrontmatter {
    title: string;
    date: string;
    excerpt: string;
    coverImage: string;
    category?: string;
    tags?: string[];
}

interface BlogPostCardProps {
    post: BlogPostFrontmatter & { slug: string };
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
    const { i18n } = useTranslation();

    // Ermittelt die aktuelle Blog-Konfiguration anhand der Sprache
    const getBlogConfig = () => {
        switch (i18n.language) {
            case 'en':
                return blogEn;
            case 'sr':
                return blogSr;
            case 'de':
            default:
                return blogDe;
        }
    };

    const blog = getBlogConfig();

    // Übersetzte Post-Daten ermitteln
    const getTranslatedPost = () => {
        const blogPost = blog.posts[post.slug as keyof typeof blog.posts];
        return {
            ...post,
            title: blogPost?.title || post.title,
            excerpt: blogPost?.excerpt || post.excerpt,
            category: blogPost?.category || post.category,
        };
    };

    const translatedPost = getTranslatedPost();

    // Bildpfad ermitteln
    const getImagePath = (coverImage: string) => {
        // Wenn der Pfad bereits absolut ist und mit "http" beginnt
        if (coverImage.startsWith('http')) {
            return coverImage;
        }
        // Ersetze "/blog/" mit "/images/posts/"
        return coverImage.replace('/blog/', '/images/posts/');
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Datum formatiert in der aktuellen Sprache
    const getFormattedDate = (date: string) => {
        const languageMap = {
            de: 'de-DE',
            en: 'en-US',
            sr: 'sr-RS',
        };

        return new Date(date).toLocaleDateString(
            languageMap[i18n.language as keyof typeof languageMap] || 'de-DE',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
        );
    };

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative"
        >
            <Link
                to={`/blog/${post.slug}`}
                className="block relative bg-zinc-800/30 border border-zinc-800
                   rounded-lg overflow-hidden hover:bg-zinc-800/50
                   hover:border-zinc-700 transition-all duration-300"
            >
                {/* Image Container */}
                <div className="aspect-video relative overflow-hidden">
                    <img
                        src={getImagePath(post.coverImage)}
                        alt={translatedPost.title}
                        className="h-full w-full object-cover transition-transform
                       duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                            console.error('Image load error:', e);
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900
                          via-zinc-900/50 to-transparent opacity-80
                          group-hover:opacity-70 transition-opacity duration-300" />

                    {/* Category Badge */}
                    {translatedPost.category && (
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                            <div className="flex items-center gap-2 px-3 py-1
                              bg-zinc-900/80 backdrop-blur-sm border
                              border-zinc-800 rounded-full">
                                <Folder className="h-3 w-3 text-zinc-400" />
                                <span className="text-xs text-zinc-300">
                  {blog.categories[translatedPost.category as keyof typeof blog.categories] ||
                      translatedPost.category}
                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Metadata */}
                    <div className="flex items-center gap-4 mb-4">
                        <time className="flex items-center gap-2 text-sm text-zinc-400">
                            <Calendar className="h-4 w-4" />
                            {getFormattedDate(post.date)}
                        </time>
                        {post.tags && (
                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                                <Tag className="h-4 w-4" />
                                <span>
                  {post.tags.length} {blog.ui.tags}
                </span>
                            </div>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3
                         group-hover:text-zinc-100 transition-colors
                         duration-300 line-clamp-2">
                        {translatedPost.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-zinc-400 text-sm line-clamp-3 mb-6
                        group-hover:text-zinc-300 transition-colors duration-300">
                        {translatedPost.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center text-white group/link">
                        <span className="text-sm font-medium">{blog.ui.readMore}</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform
                                  group-hover/link:translate-x-1" />
                    </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/5 opacity-0
                        group-hover:opacity-100 pointer-events-none
                        transition-opacity duration-300" />
            </Link>
        </motion.div>
    );
};

export default BlogPostCard;
