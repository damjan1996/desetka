import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ExternalLink, Tag } from 'lucide-react';
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
            tags: blogPost?.tags || post.tags,
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
        visible: { opacity: 1, y: 0 }
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
        <Link
            to={`/blog/${post.slug}`}
            className="group relative block bg-zinc-900/50 backdrop-blur-sm
                     rounded-xl shadow-lg hover:shadow-2xl
                     ring-1 ring-zinc-800 hover:ring-zinc-700
                     transition-all duration-500 focus:outline-none focus:ring-2
                     focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-950
                     transform hover:-translate-y-1"
        >
            <motion.div
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-xl"
                style={{
                    transform: 'translateZ(0)',
                    willChange: 'opacity, transform'
                }}
            >
                {/* Image Container - same as PortfolioCard */}
                <div className="aspect-[16/9] w-full relative overflow-hidden bg-zinc-900">
                    <img
                        src={getImagePath(post.coverImage)}
                        alt={translatedPost.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700
                                 group-hover:scale-110"
                        loading="lazy"
                        style={{ transformOrigin: 'center center' }}
                        onError={(e) => {
                            console.error('Image load error:', e);
                        }}
                    />
                    {/* Gradient overlay that extends beyond the image */}
                    <div className="absolute inset-x-0 -bottom-20 top-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent
                                  opacity-95" />
                </div>

                {/* Content - with relative positioning to overlap the gradient */}
                <div className="relative -mt-2 p-6 bg-zinc-900 z-10">
                    {/* Post Info */}
                    <div className="flex items-center gap-4 mb-4 text-zinc-500">
                        <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>{getFormattedDate(post.date)}</span>
                        </div>
                        {translatedPost.tags && translatedPost.tags.length > 0 && (
                            <div className="flex items-center gap-2 text-sm">
                                <Tag className="h-4 w-4" />
                                <span>
                                    {blog.ui.tagsCount 
                                        ? blog.ui.tagsCount.replace('{{count}}', translatedPost.tags.length.toString())
                                        : `${translatedPost.tags.length} Tags`}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-semibold text-white mb-3
                                 group-hover:text-zinc-100 transition-colors duration-300">
                        {translatedPost.title}
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-2 mb-4
                                group-hover:text-zinc-300 transition-colors duration-300">
                        {translatedPost.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {translatedPost.tags && translatedPost.tags.slice(0, 3).map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-zinc-800/50
                                         text-sm text-zinc-400 rounded-full
                                         ring-1 ring-zinc-700/50 group-hover:ring-zinc-600/50
                                         group-hover:bg-zinc-800/70 group-hover:text-zinc-300
                                         transition-all duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                        {translatedPost.tags && translatedPost.tags.length > 3 && (
                            <span className="text-sm text-zinc-600">
                                +{translatedPost.tags.length - 3} {blog.ui.more || 'more'}
                            </span>
                        )}
                    </div>

                    {/* Link Icon - same as PortfolioCard */}
                    <div className="absolute top-6 right-6 p-2.5 rounded-full
                                  bg-zinc-800/60 backdrop-blur-sm ring-1 ring-zinc-700/50
                                  opacity-0 group-hover:opacity-100
                                  transform translate-y-2 group-hover:translate-y-0
                                  transition-all duration-300">
                        <ExternalLink className="h-4 w-4 text-zinc-400" />
                    </div>
                </div>

                {/* Subtle Hover Border */}
                <div className="absolute inset-0 rounded-xl pointer-events-none
                              ring-1 ring-zinc-600/0 group-hover:ring-zinc-600/30
                              transition-all duration-500" />
            </motion.div>
        </Link>
    );
};

export default BlogPostCard;