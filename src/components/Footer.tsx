// components/Footer.tsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-900 pt-16 pb-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            {t('footer.sections.contact.title')}
                        </h3>
                        <div className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors">
                            <Mail size={18} />
                            <a
                                href={`mailto:${t('footer.sections.contact.email')}`}
                                className="hover:underline"
                                aria-label={t('footer.sections.contact.aria.emailLink')}
                            >
                                {t('footer.sections.contact.email')}
                            </a>
                        </div>
                        <div className="flex items-center space-x-2 text-zinc-400">
                            <MapPin size={18} />
                            <span aria-label={t('footer.sections.contact.aria.locationText')}>
                                {t('footer.sections.contact.location')}
                            </span>
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            {t('footer.sections.navigation.title')}
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/portfolio" className="text-zinc-400 hover:text-white transition-colors">
                                    {t('footer.sections.navigation.links.portfolio')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-zinc-400 hover:text-white transition-colors">
                                    {t('footer.sections.navigation.links.blog')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-zinc-400 hover:text-white transition-colors">
                                    {t('footer.sections.navigation.links.about')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-zinc-400 hover:text-white transition-colors">
                                    {t('footer.sections.navigation.links.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            {t('footer.sections.social.title')}
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/damjan-savić-720288127/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white transition-colors"
                                aria-label={t('footer.sections.social.aria.linkedin')}
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://github.com/damjan1996"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white transition-colors"
                                aria-label={t('footer.sections.social.aria.github')}
                            >
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Legal Section */}
                <div className="border-t border-zinc-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-zinc-400 text-sm">
                            &copy; {currentYear} Damjan Savić. {t('footer.legal.copyright')}
                        </p>
                        <div className="flex space-x-6">
                            <Link to="/privacy" className="text-zinc-400 hover:text-white text-sm transition-colors">
                                {t('footer.legal.links.privacy')}
                            </Link>
                            <Link to="/terms" className="text-zinc-400 hover:text-white text-sm transition-colors">
                                {t('footer.legal.links.terms')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;