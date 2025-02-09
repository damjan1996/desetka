// mdxLoader.ts

// Definiere den Typ BlogPost, der der erwarteten Struktur entspricht
export interface BlogPost {
    title: string;
    date: string;
    excerpt: string;
    category?: string;
    tags?: string[];
    coverImage?: string;
    content: any; // Passe den Typ hier bei Bedarf an
    slug: string;
}

export async function getBlogPostBySlug(
    slug: string,
    language: string = 'de'
): Promise<BlogPost | null> {
    try {
        // Import der Übersetzungsdatei
        const translationModule = await import(
            `@/i18n/locales/${language}/blog/posts/${slug}.ts`
            );
        // Zugriff auf die richtige Struktur (passe diesen Zugriff an deine Datenstruktur an)
        const postData = translationModule.default.posts.erp_integration;

        if (!postData) {
            console.warn(`Translation not found for ${slug} in ${language}`);
            return null;
        }

        return {
            title: postData.title,
            date: postData.date,
            excerpt: postData.excerpt,
            category: postData.category,
            tags: postData.tags,
            coverImage: postData.coverImage,
            content: postData.content,
            slug
        };
    } catch (error) {
        console.error(`Error loading blog post: ${slug}`, error);
        return null;
    }
}
