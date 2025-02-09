export const common = {
    // SEO & Meta
    siteTitle: 'Damjan Savić - Digital Solutions & JTL Integration',
    siteDescription: 'Developer of custom solutions for process automation',
    // Navigation
    nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        portfolio: 'Portfolio',
        blog: 'Blog',
        contact: 'Contact'
    },
    // Common Actions
    actions: {
        readMore: 'Read More',
        viewMore: 'View More',
        viewAll: 'View All',
        back: 'Back',
        close: 'Close',
        submit: 'Submit',
        loading: 'Loading...'
    },
    // UI Components
    ui: {
        published: 'Published on',
        lastUpdated: 'Last updated on',
        category: 'Category',
        categories: 'Categories',
        tag: 'Tag',
        tags: 'Tags',
        author: 'Author',
        minuteRead: 'minute read',
        tableOfContents: 'Table of Contents'
    },
    // Error Messages
    errors: {
        generic: 'An error has occurred',
        notFound: 'Page not found',
        loading: 'Error loading',
        return: 'Return to homepage'
    },
    // Loading States
    loading: {
        content: 'Loading content',
        page: 'Loading page',
        processing: 'Processing'
    },
    // Dates
    dates: {
        months: {
            long: [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ],
            short: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ]
        },
        weekdays: {
            long: [
                'Sunday', 'Monday', 'Tuesday', 'Wednesday',
                'Thursday', 'Friday', 'Saturday'
            ],
            short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        }
    },
    // Social Media
    social: {
        followMe: 'Follow me on',
        shareOn: 'Share on',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Email'
    },
    // Contact Form
    contact: {
        title: 'Contact',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        success: 'Your message has been sent successfully',
        error: 'There was an error sending your message'
    },
    // Accessibility
    a11y: {
        skipToContent: 'Skip to main content',
        menuOpen: 'Open menu',
        menuClose: 'Close menu',
        darkMode: 'Toggle dark mode',
        carousel: {
            next: 'Next image',
            previous: 'Previous image'
        }
    }
} as const;
export type CommonTranslations = typeof common;
