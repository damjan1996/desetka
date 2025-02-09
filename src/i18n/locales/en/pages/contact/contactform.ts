// src/i18n/locales/en/pages/contact/contactform.ts
export const contactform = {
    // Form Header
    title: 'Contact Me',
    description: 'Have questions or want to collaborate? Send me a message.',
    // Form Fields
    name: {
        label: 'Name',
        placeholder: 'Your full name'
    },
    email: {
        label: 'Email',
        placeholder: 'your.email@example.com'
    },
    message: {
        label: 'Message',
        placeholder: 'Your message to me...'
    },
    // Button
    submit: 'Send Message',
    // Status Messages
    successMessage: 'Thank you for your message! I will get back to you as soon as possible.',
    errorMessage: 'Sorry, there was an error sending your message. Please try again later.',
    // Error Messages
    errors: {
        nameRequired: 'Please enter your name',
        emailRequired: 'Please enter your email address',
        emailInvalid: 'Please enter a valid email address',
        messageRequired: 'Please enter a message'
    },
    // Aria Labels
    aria: {
        form: 'Contact form',
        submitting: 'Sending form',
        successAlert: 'Success message',
        errorAlert: 'Error message'
    }
} as const;

// Type for type safety
export type ContactFormTranslations = typeof contactform;