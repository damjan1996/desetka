import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, ExternalLink, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/Card';

interface ContactMethod {
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string;
    type: 'address' | 'phone' | 'email';
    ariaLabel: string;
}

const ContactInfo = () => {
    const { t } = useTranslation();

    const contactMethods: ContactMethod[] = [
        {
            icon: <MapPin className="h-5 w-5" />,
            label: t('pages.home.contactinfo.addressLabel'),
            value: t('pages.home.contactinfo.address'),
            href: '',
            type: 'address',
            ariaLabel: t('pages.home.contactinfo.aria.addressLink')
        },
        {
            icon: <Phone className="h-5 w-5" />,
            label: t('pages.home.contactinfo.phoneLabel'),
            value: t('pages.home.contactinfo.phone'),
            href: 'tel:+49 175 695 0979',
            type: 'phone',
            ariaLabel: t('pages.home.contactinfo.aria.phoneLink')
        },
        {
            icon: <Mail className="h-5 w-5" />,
            label: t('pages.home.contactinfo.emailLabel'),
            value: t('pages.home.contactinfo.email'),
            href: 'mailto:info@damjan-savic.com',
            type: 'email',
            ariaLabel: t('pages.home.contactinfo.aria.emailLink')
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Card
            className="h-full bg-zinc-800/30 border border-zinc-800"
            aria-label={t('pages.home.contactinfo.aria.contactCard')}
        >
            <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                    <Building className="h-5 w-5 text-zinc-400" />
                    <CardTitle className="text-xl font-semibold text-white">
                        {t('pages.home.contactinfo.title')}
                    </CardTitle>
                </div>
                <CardDescription className="text-zinc-400">
                    {t('pages.home.contactinfo.description')}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid gap-4"
                >
                    {contactMethods.map((method) => (
                        <motion.div key={method.type} variants={item}>
                            <Card className="group bg-zinc-900/50 border border-zinc-800
                                         hover:bg-zinc-900/70 hover:border-zinc-700
                                         transition-all duration-300">
                                <CardContent className="p-4">
                                    <a
                                        href={method.href}
                                        target={method.type === 'address' ? '_blank' : undefined}
                                        rel={method.type === 'address' ? 'noopener noreferrer' : undefined}
                                        className="flex items-center gap-4"
                                        aria-label={method.ariaLabel}
                                    >
                                        <div className="rounded-full p-2.5 bg-zinc-800/50 text-zinc-400
                                                     group-hover:bg-zinc-800 group-hover:text-white
                                                     transition-colors duration-300">
                                            {method.icon}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-zinc-400 mb-1">
                                                {method.label}
                                            </p>
                                            <p className="text-base font-medium text-white truncate
                                                       group-hover:text-zinc-100">
                                                {method.value}
                                            </p>
                                        </div>

                                        <div className="self-center opacity-0 group-hover:opacity-100
                                                     transition-opacity duration-300">
                                            <ExternalLink
                                                className="h-4 w-4 text-zinc-400 group-hover:text-white"
                                                aria-label={method.type === 'address' ? t('pages.home.contactinfo.aria.externalLink') : undefined}
                                            />
                                        </div>
                                    </a>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
                    <p className="text-sm text-zinc-400">
                        {t('pages.home.contactinfo.availabilityNote')}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default ContactInfo;