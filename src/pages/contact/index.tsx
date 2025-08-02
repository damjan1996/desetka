import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import ContactForm from './components/ContactForm';

const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <PageTransition>
            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="py-24 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        {t('pages.contact.hero.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-400 max-w-2xl mx-auto"
                    >
                        {t('pages.contact.hero.subtitle')}
                    </motion.p>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    {t('pages.contact.contactInfo.title')}
                                </h2>
                                <p className="text-zinc-400 mb-8">
                                    {t('pages.contact.contactInfo.description')}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-zinc-400 mt-1" />
                                    <div>
                                        <h3 className="text-sm font-medium text-zinc-300 mb-1">
                                            {t('pages.contact.contactInfo.address.label')}
                                        </h3>
                                        <p className="text-zinc-400">
                                            {t('pages.contact.contactInfo.address.value')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-zinc-400 mt-1" />
                                    <div>
                                        <h3 className="text-sm font-medium text-zinc-300 mb-1">
                                            {t('pages.contact.contactInfo.phone.label')}
                                        </h3>
                                        <p className="text-zinc-400">
                                            {t('pages.contact.contactInfo.phone.value')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-zinc-400 mt-1" />
                                    <div>
                                        <h3 className="text-sm font-medium text-zinc-300 mb-1">
                                            {t('pages.contact.contactInfo.email.label')}
                                        </h3>
                                        <p className="text-zinc-400">
                                            {t('pages.contact.contactInfo.email.value')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-zinc-500">
                                {t('pages.contact.contactInfo.availabilityNote')}
                            </p>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default ContactPage;