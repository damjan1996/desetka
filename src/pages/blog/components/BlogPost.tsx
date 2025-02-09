import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Tag, Loader2, Folder } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../../../components/PageTransition';
import SEO from '../../../components/SEO';

import { blog as blogDe } from '../../../i18n/locales/de/blog/';
import { blog as blogEn } from '../../../i18n/locales/en/blog';
import { blog as blogSr } from '../../../i18n/locales/sr/blog';

/* =======================
   Typdefinitionen
========================== */

// Typ für einen Blog-Post, wie er in der Komponente genutzt wird (enthält slug)
interface BlogPostType {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    coverImage?: string;
    category?: string;
    tags?: string[];
    content: {
        intro: {
            title: string;
            description: string;
        };
        background: {
            title: string;
            systems: Record<string, string>;
            challenges: Record<string, string>;
        };
        tech: {
            title: string;
            components: {
                title: string;
                code: string;
            };
        };
        api: {
            title: string;
            apparel_magic: {
                title: string;
                description: string;
            };
        };
        conclusion: {
            title: string;
            requirements: Record<string, string>;
            results: string;
        };
    };
}

// Typ für einen Blog-Post in der Konfiguration (ohne slug)
type BlogPostConfig = Omit<BlogPostType, 'slug'>;

// Typ für die Blog-Konfiguration (UI-Text, Kategorien, Posts)
interface BlogConfig {
    meta?: {
        title: string;
        description: string;
        header: unknown;
    };
    ui: {
        loading: {
            post: string;
        };
        notFound: {
            title: string;
            message: string;
        };
        backToBlog: string;
    };
    categories: Record<string, string>;
    posts: Record<string, BlogPostConfig>;
}

/* =======================
   BlogPost Component
========================== */

const BlogPost: React.FC = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const [post, setPost] = useState<BlogPostType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    // Memoized Funktion zur Ermittlung der aktuellen Blog-Konfiguration anhand der Sprache.
    const getBlogConfig = useCallback((): BlogConfig => {
        switch (i18n.language) {
            case 'en':
                return blogEn as unknown as BlogConfig;
            case 'sr':
                return blogSr as unknown as BlogConfig;
            case 'de':
            default:
                return blogDe as unknown as BlogConfig;
        }
    }, [i18n.language]);

    const blog = getBlogConfig();

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            try {
                if (slug) {
                    const currentBlog = getBlogConfig();
                    const postData = currentBlog.posts[slug];
                    if (postData) {
                        // Wir fügen hier den slug hinzu, da er in der Konfiguration nicht enthalten ist.
                        setPost({
                            ...postData,
                            slug,
                        });
                    } else {
                        // Statt eine Exception zu werfen, setzen wir den Fehler direkt.
                        setError(new Error('Post not found'));
                    }
                }
            } catch (err) {
                console.error('Error loading blog post:', err);
                setError(err instanceof Error ? err : new Error('Failed to load post'));
            } finally {
                setLoading(false);
            }
        };
        loadPost();
    }, [slug, getBlogConfig]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const getFormattedDate = (date: string): string => {
        const languageMap: Record<string, string> = {
            de: 'de-DE',
            en: 'en-US',
            sr: 'sr-RS',
        };

        return new Date(date).toLocaleDateString(
            languageMap[i18n.language] || 'de-DE',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center space-y-4"
                >
                    <Loader2 className="h-8 w-8 text-zinc-400 animate-spin" />
                    <p className="text-zinc-400 text-sm">{blog.ui.loading.post}</p>
                </motion.div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center space-y-6 px-4 text-center"
                >
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-white">{blog.ui.notFound.title}</h3>
                        <p className="text-zinc-400 text-sm max-w-md">
                            {error?.message || blog.ui.notFound.message}
                        </p>
                    </div>
                    <Link
                        to="/blog"
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>{blog.ui.backToBlog}</span>
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <PageTransition>
            <SEO title={`${post.title} - Blog`} description={post.excerpt} />
            <main className="min-h-screen bg-zinc-900">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible">
                        {/* Back Navigation */}
                        <motion.div variants={itemVariants} className="mb-8">
                            <button
                                onClick={() => navigate(-1)}
                                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                <span>{blog.ui.backToBlog}</span>
                            </button>
                        </motion.div>

                        {/* Post Header */}
                        <div className="mb-12">
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap items-center gap-4 mb-6"
                            >
                                <div className="flex items-center gap-2 text-zinc-400">
                                    <Calendar className="h-4 w-4" />
                                    <time>{getFormattedDate(post.date)}</time>
                                </div>
                                {post.category && (
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <Folder className="h-4 w-4" />
                                        <span>{blog.categories[post.category] || post.category}</span>
                                    </div>
                                )}
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8"
                            >
                                {post.title}
                            </motion.h1>
                        </div>

                        {/* Cover Image */}
                        {post.coverImage && (
                            <motion.div variants={itemVariants} className="mb-12">
                                <div className="relative rounded-lg overflow-hidden bg-zinc-800">
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        className="w-full aspect-video object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* Content */}
                        <motion.div
                            variants={itemVariants}
                            className="prose prose-invert max-w-none
                             prose-headings:text-white prose-headings:font-semibold
                             prose-p:text-zinc-300 prose-p:leading-relaxed
                             prose-a:text-white prose-a:no-underline hover:prose-a:text-zinc-300
                             prose-strong:text-white
                             prose-code:text-zinc-300 prose-code:bg-zinc-800/50
                             prose-pre:bg-zinc-800/50 prose-pre:border prose-pre:border-zinc-800
                             prose-img:rounded-lg
                             prose-blockquote:border-l-zinc-700 prose-blockquote:text-zinc-400"
                        >
                            {/* Intro Section */}
                            <section>
                                <h2>{post.content.intro.title}</h2>
                                <p>{post.content.intro.description}</p>
                            </section>

                            {/* Background Section */}
                            <section>
                                <h2>{post.content.background.title}</h2>
                                <div className="mb-6">
                                    <h3>Systems</h3>
                                    <ul>
                                        {Object.values(post.content.background.systems).map((system, index) => (
                                            <li key={index}>{system}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3>Challenges</h3>
                                    <ul>
                                        {Object.values(post.content.background.challenges).map((challenge, index) => (
                                            <li key={index}>{challenge}</li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Technical Architecture */}
                            <section>
                                <h2>{post.content.tech.title}</h2>
                                <h3>{post.content.tech.components.title}</h3>
                                <pre>
                                    <code>{post.content.tech.components.code}</code>
                                </pre>
                            </section>

                            {/* API Section */}
                            <section>
                                <h2>{post.content.api.title}</h2>
                                <div className="mb-6">
                                    <h3>{post.content.api.apparel_magic.title}</h3>
                                    <p>{post.content.api.apparel_magic.description}</p>
                                </div>
                            </section>

                            {/* Conclusion */}
                            <section>
                                <h2>{post.content.conclusion.title}</h2>
                                <ul>
                                    {Object.values(post.content.conclusion.requirements).map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                                <p>{post.content.conclusion.results}</p>
                            </section>
                        </motion.div>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <motion.div variants={itemVariants} className="mt-12 pt-6 border-t border-zinc-800">
                                <div className="flex items-center gap-4">
                                    <Tag className="h-4 w-4 text-zinc-400" />
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-zinc-800/50 border border-zinc-800 rounded-full text-sm text-zinc-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </article>
            </main>
        </PageTransition>
    );
};

export default BlogPost;
