import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../../components/PageTransition';
import SEO from '../../components/SEO';
import BlogPostCard from './components/BlogpostCard';
import type { BlogPost } from './utils/mdxLoader';

// Import aller Sprachversionen
import { blog as blogDe } from '../../i18n/locales/de/blog/index';
import { blog as blogEn } from '../../i18n/locales/en/blog/index';
import { blog as blogSr } from '../../i18n/locales/sr/blog/index';

const BlogPage: React.FC = () => {
    const { i18n } = useTranslation();
    // Wir erwarten hier Posts, bei denen coverImage garantiert ein string ist und slug vorhanden ist.
    const [posts, setPosts] = useState<(BlogPost & { coverImage: string; slug: string })[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    // Ermittelt die aktuelle Blog-Konfiguration anhand der Sprache.
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

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            try {
                // Aus der aktuellen Sprachkonfiguration werden alle Posts extrahiert.
                const currentBlog = getBlogConfig();
                const blogPosts = Object.entries(currentBlog.posts).map(([slug, post]) => ({
                    ...post,
                    slug,
                    // Falls coverImage nicht definiert ist, setzen wir einen leeren String als Fallback.
                    coverImage: post.coverImage ?? ''
                })) as (BlogPost & { coverImage: string; slug: string })[];
                setPosts(blogPosts);
            } catch (error) {
                console.error('Error loading blog posts:', error);
                setError(
                    error instanceof Error
                        ? error
                        : new Error(blog.ui.errors.posts)
                );
            } finally {
                setLoading(false);
            }
        };
        loadPosts();
    }, [i18n.language]);

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: blog.meta.title,
        description: blog.meta.description
    };

    const metaDescription = blog.meta.description;

    if (loading) {
        return (
            <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center space-y-4"
                >
                    <Loader2 className="h-8 w-8 text-zinc-400 animate-spin" />
                    <p className="text-zinc-400 text-sm">{blog.ui.loading.posts}</p>
                </motion.div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center space-y-6 px-4 text-center"
                >
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-white">{blog.ui.errors.posts}</h3>
                        <p className="text-zinc-400 text-sm max-w-md">{error.message}</p>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <PageTransition>
            {/* SEO-Aufruf: Wir übergeben hier nur die Properties, die im SEOProps-Typ definiert sind */}
            <SEO
                title={blog.meta.title}
                description={metaDescription}
                schema={schema}
            />
            <main className="min-h-screen bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12 sm:mb-16 lg:mb-20"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <ArrowRight className="h-5 w-5 text-zinc-500" />
                            <h2 className="text-white text-sm tracking-wider">BLOG</h2>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                        >
                            {blog.meta.header.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg sm:text-xl text-zinc-400 max-w-2xl"
                        >
                            {blog.meta.header.subtitle}
                        </motion.p>
                    </motion.div>

                    {/* Blog Posts Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    >
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * (index + 4) }}
                            >
                                <BlogPostCard post={post} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Empty State */}
                    {posts.length === 0 && !loading && !error && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-center py-12"
                        >
                            <p className="text-zinc-400">{blog.ui.notFound.message}</p>
                        </motion.div>
                    )}
                </div>
            </main>
        </PageTransition>
    );
};

export default BlogPage;
