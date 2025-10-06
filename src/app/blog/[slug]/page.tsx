// src/app/blog/[slug]/page.tsx
'use client';

import { getPostBySlug } from '@/lib/data/blog';
import BlogPost from '@/components/blog/BlogPost';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    return <BlogPost post={post} />;
}