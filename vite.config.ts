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
    react({
      // React Plugin Optimierungen
      babel: {
        babelrc: false,
        configFile: false,
      }
    }),
    VitePWA({
      strategies: 'generateSW',
      registerType: 'autoUpdate',
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
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
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
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/www\.googletagmanager\.com\/.*/i,
            handler: 'NetworkOnly'
          }
        ],
        cleanupOutdatedCaches: true
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
    exclude: ['@mdx-js/react']
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      postcss: {
        plugins: []
      }
    }
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'mdx-vendor': ['@mdx-js/react'],
          'i18n-vendor': ['i18next', 'react-i18next'],
          'ui-vendor': ['framer-motion', 'lucide-react']
        },
        // Optimierte Asset-Dateinamen
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(-1);
          if (/webp|png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    }
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});