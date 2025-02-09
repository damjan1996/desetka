// src/i18n/locales/en/pages/privacy.ts
export const privacy = {
    // SEO and Schema
    seo: {
        title: 'Privacy Policy',
        description: 'Privacy Policy for Damjan Savić\'s portfolio website'
    },
    schema: {
        name: 'Privacy Policy',
        description: 'Privacy Policy for Damjan Savić\'s portfolio website'
    },
    // Main content
    content: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: March 10, 2024',
        // Navigation
        breadcrumbs: {
            currentTitle: 'Privacy Policy'
        },
        // Sections
        sections: {
            introduction: {
                title: '1. Introduction',
                content: 'This Privacy Policy explains how we collect, use, and protect your personal data when you use our website.'
            },
            dataCollection: {
                title: '2. Data Collection',
                providedInfo: {
                    title: '2.1 Information You Provide',
                    intro: 'When using our contact form, we collect:',
                    items: [
                        'Name',
                        'Email address',
                        'Message content'
                    ]
                },
                automaticInfo: {
                    title: '2.2 Automatically Collected Information',
                    intro: 'We automatically collect:',
                    items: [
                        'IP address',
                        'Browser type',
                        'Device information',
                        'Pages visited',
                        'Time spent on the website'
                    ]
                }
            },
            dataUsage: {
                title: '3. Use of Your Data',
                intro: 'We use your data for:',
                items: [
                    'Responding to your inquiries',
                    'Improving our website',
                    'Analyzing usage patterns',
                    'Fraud prevention'
                ]
            },
            cookies: {
                title: '4. Cookies',
                intro: 'We use cookies for:',
                items: [
                    'Storing your preferences',
                    'Analyzing website traffic',
                    'Understanding user behavior'
                ]
            },
            security: {
                title: '5. Data Security',
                intro: 'We implement appropriate security measures to protect your personal data, including:',
                items: [
                    'Data transmission encryption',
                    'Regular security assessments',
                    'Access controls',
                    'Secure data storage'
                ]
            },
            rights: {
                title: '6. Your Rights',
                intro: 'You have the right to:',
                items: [
                    'Access your personal data',
                    'Rectify the data',
                    'Delete the data',
                    'Object to data processing',
                    'Data portability'
                ]
            },
            contact: {
                title: '7. Contact Information',
                intro: 'For privacy-related inquiries, contact us at:',
                email: 'Email: privacy@damjan-savic.com'
            }
        }
    }
};
