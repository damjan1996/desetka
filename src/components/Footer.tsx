// components/Footer.tsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-zinc-800/50 backdrop-blur-sm border-t border-zinc-700/30 pt-8 pb-4 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col space-y-8">
                    {/* Contact Section */}
                    <div>
                        <h3 className="text-white text-base font-semibold mb-3">
                            {t('footer.sections.contact.title')}
                        </h3>
                        <div className="flex flex-col space-y-2">
                            <a
                                href={`mailto:${t('footer.sections.contact.email')}`}
                                className="group flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors text-sm"
                                aria-label={t('footer.sections.contact.aria.emailLink')}
                            >
                                <Mail className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors" size={16} />
                                <span>{t('footer.sections.contact.email')}</span>
                            </a>
                            <div className="flex items-center space-x-2 text-zinc-400 text-sm">
                                <MapPin className="h-4 w-4 text-zinc-500" size={16} />
                                <span>{t('footer.sections.contact.location')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div>
                        <h3 className="text-white text-base font-semibold mb-3">
                            {t('footer.sections.navigation.title')}
                        </h3>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                to="/portfolio"
                                className="text-zinc-400 hover:text-white transition-colors text-sm"
                            >
                                {t('footer.sections.navigation.links.portfolio')}
                            </Link>
                            <Link
                                to="/blog"
                                className="text-zinc-400 hover:text-white transition-colors text-sm"
                            >
                                {t('footer.sections.navigation.links.blog')}
                            </Link>
                            <Link
                                to="/about"
                                className="text-zinc-400 hover:text-white transition-colors text-sm"
                            >
                                {t('footer.sections.navigation.links.about')}
                            </Link>
                            <Link
                                to="/contact"
                                className="text-zinc-400 hover:text-white transition-colors text-sm"
                            >
                                {t('footer.sections.navigation.links.contact')}
                            </Link>
                        </nav>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-white text-base font-semibold mb-3">
                            {t('footer.sections.social.title')}
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/damjan-savić-720288127/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group text-zinc-400 hover:text-white transition-colors"
                                aria-label={t('footer.sections.social.aria.linkedin')}
                            >
                                <Linkedin className="transform transition-transform group-hover:scale-110" size={20} />
                            </a>
                            <a
                                href="https://github.com/damjan1996"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group text-zinc-400 hover:text-white transition-colors"
                                aria-label={t('footer.sections.social.aria.github')}
                            >
                                <Github className="transform transition-transform group-hover:scale-110" size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Legal Section */}
                    <div className="border-t border-zinc-700/30 pt-4">
                        <div className="flex flex-col space-y-4">
                            <p className="text-zinc-400 text-xs text-center">
                                &copy; {currentYear} Damjan Savić. {t('footer.legal.copyright')}
                            </p>
                            <div className="flex justify-center space-x-4">
                                <Link
                                    to="/privacy"
                                    className="text-zinc-400 hover:text-white text-xs transition-colors"
                                >
                                    {t('footer.legal.links.privacy')}
                                </Link>
                                <Link
                                    to="/terms"
                                    className="text-zinc-400 hover:text-white text-xs transition-colors"
                                >
                                    {t('footer.legal.links.terms')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;