// src/components/MDXProvider.tsx
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
    h1: (props: React.ComponentProps<'h1'>) => (
        <h1 className="text-3xl font-bold my-6" {...props} />
    ),
    h2: (props: React.ComponentProps<'h2'>) => (
        <h2 className="text-2xl font-bold my-4" {...props} />
    ),
    h3: (props: React.ComponentProps<'h3'>) => (
        <h3 className="text-xl font-bold my-3" {...props} />
    ),
    p: (props: React.ComponentProps<'p'>) => (
        <p className="my-4 text-muted-foreground" {...props} />
    ),
    code: (props: React.ComponentProps<'code'>) => (
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm" {...props} />
    ),
    pre: (props: React.ComponentProps<'pre'>) => (
        <pre className="bg-muted p-4 rounded-lg my-4 overflow-x-auto" {...props} />
    ),
};

export function MDXLayout({ children }: { children: React.ReactNode }) {
    return <MDXProvider components={components}>{children}</MDXProvider>;
}
