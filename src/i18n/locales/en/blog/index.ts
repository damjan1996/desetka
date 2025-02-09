// src/i18n/locales/en/blog/index.ts
export const blog = {
    meta: {
        title: 'Blog - JTL Integration & Digital Solutions',
        description: 'Insights and Best Practices on JTL-WaWi, E-Commerce, and Digital Transformation',
        header: {
            title: 'Insights & Best Practices',
            subtitle: 'Insights and Best Practices on JTL-WaWi, E-Commerce, and Digital Transformation'
        }
    },
    posts: {
        'erp-integration-breuninger': {
            title: 'ApparelMagic and TradeByte: Analysis of Complex Integrations',
            date: '2024-02-09',
            excerpt: 'Detailed analysis of an e-commerce integration between Apparel Magic and Breuninger via TradeByte',
            category: 'System Integration',
            tags: ['ERP', 'Apparel Magic', 'TradeByte', 'API Integration', 'Python', 'MariaDB'],
            coverImage: '/images/posts/erp-integration-breuninger/cover.jpg',
            content: {
                intro: {
                    title: 'Apparel Magic meets Breuninger: A Technical Analysis of the TradeByte Integration',
                    description: 'The integration of e-commerce systems with established marketplaces poses unique challenges for companies. In this article, I share my experiences from a complex integration project between Apparel Magic as an ERP system and the Breuninger platform via TradeByte.'
                },
                background: {
                    title: 'Project Background',
                    systems: {
                        erp: 'Apparel Magic as an ERP system for product data and inventory management',
                        middleware: 'TradeByte as the middleware for the Breuninger platform'
                    },
                    challenges: {
                        sync: 'Bidirectional synchronization of orders',
                        customers: 'Automated customer creation',
                        delivery: 'Management of delivery notes',
                        inventory: 'Real-time inventory management'
                    }
                },
                tech: {
                    title: 'Technical Architecture',
                    components: {
                        title: 'Key Components'
                    },
                    database: {
                        title: 'Middleware Database',
                        description: 'The MariaDB database serves as the central data store for the integration:'
                    }
                },
                api: {
                    title: 'API Integrations',
                    apparel_magic: {
                        title: 'Apparel Magic API',
                        description: 'The REST API of Apparel Magic is used for customer creation and inventory management:'
                    },
                    tradebyte: {
                        title: 'TradeByte Integration',
                        description: 'The TradeByte API uses a combination of REST and XML:'
                    }
                },
                order_process: {
                    title: 'Order Process',
                    steps: {
                        fetch: 'Regular retrieval of new orders from TradeByte',
                        customers: 'Automatic customer creation in Apparel Magic',
                        process: 'Order processing and status update',
                        delivery: 'Generation and storage of delivery notes'
                    },
                    delivery_notes: {
                        title: 'Delivery Note Management'
                    }
                },
                challenges: {
                    title: 'Challenges and Solutions',
                    status: {
                        title: '1. Status Management',
                        description: 'A particular challenge was managing order statuses:'
                    },
                    error_handling: {
                        title: '2. Error Handling and Monitoring',
                        description: 'Robust error handling was essential for production operation:'
                    }
                },
                best_practices: {
                    title: 'Best Practices',
                    api: {
                        title: '1. API Communication',
                        items: {
                            retry: 'Implementation of retry mechanisms',
                            errors: 'Careful error handling',
                            logging: 'Comprehensive logging of all communications'
                        }
                    },
                    data: {
                        title: '2. Data Management',
                        items: {
                            storage: 'Central data storage in MariaDB',
                            transactions: 'Transactional security for critical operations',
                            validation: 'Regular data validation'
                        }
                    },
                    automation: {
                        title: '3. Process Automation',
                        items: {
                            customers: 'Automated customer creation',
                            status: 'Automatic status updates',
                            delivery: 'Systematic delivery note management'
                        }
                    }
                },
                lessons: {
                    title: 'Lessons Learned',
                    api: {
                        title: '1. API Design',
                        items: {
                            docs: 'Thorough API documentation is essential',
                            auth: 'Understanding of various authentication methods',
                            limits: 'Consideration of rate limits'
                        }
                    },
                    validation: {
                        title: '2. Data Validation',
                        items: {
                            rules: 'Implementation of strict validation rules',
                            edge_cases: 'Careful handling of edge cases',
                            cleanup: 'Automated data cleanup'
                        }
                    },
                    optimization: {
                        title: '3. Process Optimization',
                        items: {
                            automation: 'Continuous improvement of automation',
                            performance: 'Regular performance reviews',
                            monitoring: 'Proactive monitoring'
                        }
                    }
                },
                conclusion: {
                    title: 'Conclusion',
                    requirements: {
                        understanding: 'Deep understanding of both systems',
                        implementation: 'Careful implementation of API communication',
                        error_handling: 'Robust error handling',
                        monitoring: 'Continuous monitoring'
                    },
                    results: 'The developed solution successfully processes orders and enables seamless integration between the systems. In particular, automated customer creation and delivery note management have proven to be efficiency boosters.'
                }
            }
        },
    },
    ui: {
        readMore: 'Read More',
        loading: {
            posts: 'Loading blog posts...',
            post: 'Loading blog post...'
        },
        errors: {
            posts: 'Error loading blog posts',
            post: 'The requested blog post does not exist or has been moved.'
        },
        backToBlog: 'Back to Blog',
        publishedOn: 'Published on',
        category: 'Category',
        tags: 'Tags',
        notFound: {
            title: 'Post Not Found',
            message: 'The requested blog post does not exist or has been moved.'
        }
    },
    categories: {
        'Integration': 'Integration',
        'Entwicklung': 'Development',
        'Automatisierung': 'Automation'
    }
} as const;

export type BlogConfig = typeof blog;
export type BlogPost = BlogConfig['posts'][keyof BlogConfig['posts']];
