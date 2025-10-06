export interface Song {
    id: string;
    title: string;
    artist: string;
    duration: string;
    coverImage: string;
    audioUrl: string;
    genre: string;
    releaseDate: string;
    description?: string;
    streamingLinks?: {
        spotify?: string;
        youtube?: string;
        soundcloud?: string;
        appleMusic?: string;
    };
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    author: string;
    publishedAt: string;
    category: string;
    tags: string[];
    readingTime: string;
    translations?: {
        [key: string]: {
            title: string;
            excerpt: string;
            content: string;
            category: string;
            tags: string[];
        };
    };
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: string;
}

export interface NavLink {
    label: string;
    href: string;
    external?: boolean;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}