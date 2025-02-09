// src/i18n/locales/en/pages/contact/index.ts
export const contact = {
    breadcrumb: "CONTACT",
    hero: {
        title: "Let's Work Together",
        subtitle: "Have a project in mind? Let's discuss how we can help you achieve your goals."
    },
    contactInfo: {
        title: "Contact Information",
        description: "You can reach me through the following channels",
        address: {
            label: "Office Location",
            value: "Rotdornallee, Köln"
        },
        phone: {
            label: "Phone",
            value: "+49 175 695 0979"
        },
        email: {
            label: "Email",
            value: "info@damjan-savic.com"
        },
        availabilityNote: "Business hours: Monday to Friday, 9:00 AM - 5:00 PM",
        aria: {
            contactCard: "Contact information card",
            addressLink: "Open location in Google Maps",
            phoneLink: "Call",
            emailLink: "Send email",
            externalLink: "Opens in new tab"
        }
    },
    contactForm: {
        title: "Contact Me",
        description: "Have questions or want to collaborate? Send me a message.",
        name: {
            label: "Name",
            placeholder: "Your full name"
        },
        email: {
            label: "Email",
            placeholder: "your.email@example.com"
        },
        message: {
            label: "Message",
            placeholder: "Your message to me..."
        },
        submit: "Send Message",
        successMessage: "Thank you for your message! I will get back to you as soon as possible.",
        errorMessage: "Sorry, there was an error sending your message. Please try again later.",
        errors: {
            nameRequired: "Please enter your name",
            emailRequired: "Please enter your email address",
            emailInvalid: "Please enter a valid email address",
            messageRequired: "Please enter a message"
        },
        aria: {
            form: "Contact form",
            submitting: "Sending form",
            successAlert: "Success message",
            errorAlert: "Error message"
        }
    }
} as const;

export type ContactTranslations = typeof contact;

export default {
    pages: {
        contact: contact
    }
};