import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

export default defineConfig({
    plugins: [
        {
            ...mdx({
                remarkPlugins: [
                    remarkFrontmatter,
                    [remarkMdxFrontmatter, { name: 'frontmatter' }]
                ],
                rehypePlugins: [],
                providerImportSource: "@mdx-js/react"
            }),
            enforce: 'pre'
        },
        react(),
        VitePWA({
            strategies: 'injectManifest',
            srcDir: 'src',
            filename: 'service-worker.ts',
            registerType: 'autoUpdate',
            injectRegister: 'auto',
            manifest: {
                name: 'Damjan Savić - JTL Integration Expert',
                short_name: 'Damjan Savić',
                description: 'JTL Integration and E-commerce Solutions',
                theme_color: '#000000',
                background_color: '#000000',
                display: 'standalone',
                start_url: '/',
                scope: '/',
                icons: [
                    {
                        src: '/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
                navigateFallback: 'index.html',
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'gstatic-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern: /^https:\/\/www\.googletagmanager\.com\/.*/i,
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'analytics-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    }
                ]
            },
            devOptions: {
                enabled: true,
                type: 'module'
            }
        })
    ],
    optimizeDeps: {
        include: ['react/jsx-runtime']
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    }
});