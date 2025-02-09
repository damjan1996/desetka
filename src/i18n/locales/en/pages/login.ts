// src/i18n/locales/en/pages/login.ts
export const login = {
    // SEO
    seo: {
        title: 'Login',
        description: 'Sign in to access the dashboard'
    },
    // Main heading
    header: {
        title: 'Sign in to Dashboard'
    },
    // Form
    form: {
        // Fields
        email: {
            label: 'Email Address',
            placeholder: 'your.email@example.com'
        },
        password: {
            label: 'Password',
            placeholder: 'Your password'
        },
        // Buttons
        submit: {
            default: 'Sign In',
            loading: 'Signing in...'
        },
        // Error messages
        errors: {
            default: 'An error has occurred',
            invalidCredentials: 'Invalid credentials',
            emailRequired: 'Please enter your email address',
            passwordRequired: 'Please enter your password',
            emailInvalid: 'Please enter a valid email address'
        }
    },
    // Links and help
    help: {
        forgotPassword: 'Forgot Password?',
        needHelp: 'Need Help?',
        contactSupport: 'Contact Support'
    },
    // Status messages
    status: {
        authenticating: 'Authenticating...',
        success: 'Successfully signed in',
        redirecting: 'Redirecting to dashboard...'
    },
    // Security notices
    security: {
        secureConnection: 'Secure Connection',
        privacyNote: 'Your data is transmitted encrypted'
    }
};
