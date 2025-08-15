import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { initGA, logPageView, initFBPixel, initFunctionalCookies } from '../utils/analytics';
import { loadGoogleTagManager } from '../services/gtm';

// Feste Übersetzungen direkt in der Komponente
const translations = {
    de: {
        title: "Cookie-Einstellungen",
        message: "Diese Website verwendet Cookies, um Ihr Erlebnis zu verbessern. Daten werden ohne Ihre Zustimmung nicht an Dritte weitergegeben.",
        acceptAll: "Alle akzeptieren",
        save: "Einstellungen speichern",
        decline: "Ablehnen",
        necessary: "Notwendige Cookies",
        necessaryDesc: "Für grundlegende Funktionen der Website",
        analytics: "Analyse-Cookies",
        analyticsDesc: "Für Analysen zur Verbesserung der Website",
        marketing: "Marketing-Cookies",
        marketingDesc: "Für personalisierte Werbung und Inhalte",
        functional: "Funktionale Cookies",
        functionalDesc: "Für erweiterte Funktionen und Personalisierung",
        learnMore: "Mehr erfahren",
        alwaysActive: "Immer aktiv"
    },
    en: {
        title: "Cookie Settings",
        message: "This website uses cookies to enhance your browsing experience. Data will not be shared with third parties without your consent.",
        acceptAll: "Accept All",
        save: "Save Settings",
        decline: "Decline All",
        necessary: "Necessary Cookies",
        necessaryDesc: "For basic website functions",
        analytics: "Analytics Cookies",
        analyticsDesc: "For analyzing website usage",
        marketing: "Marketing Cookies",
        marketingDesc: "For personalized ads and content",
        functional: "Functional Cookies",
        functionalDesc: "For enhanced functionality and personalization",
        learnMore: "Learn more",
        alwaysActive: "Always active"
    },
    sr: {
        title: "Podešavanja kolačića",
        message: "Ovaj sajt koristi kolačiće za bolje iskustvo pretraživanja. Podaci neće biti deljeni sa trećim licima bez vaše saglasnosti.",
        acceptAll: "Prihvati sve",
        save: "Sačuvaj podešavanja",
        decline: "Odbij sve",
        necessary: "Neophodni kolačići",
        necessaryDesc: "Za osnovne funkcije sajta",
        analytics: "Analitički kolačići",
        analyticsDesc: "Za analizu korišćenja sajta",
        marketing: "Marketing kolačići",
        marketingDesc: "Za personalizovane reklame i sadržaj",
        functional: "Funkcionalni kolačići",
        functionalDesc: "Za napredne funkcije i personalizaciju",
        learnMore: "Saznajte više",
        alwaysActive: "Uvek aktivno"
    }
};

// Definition der verschiedenen Services
const cookieServices = {
    essentiell: {
        category: 'necessary',
        services: [
            {
                name: 'Session Cookies',
                provider: 'Eigentümer der Website',
                purpose: 'Speichert Ihre Sitzungsinformationen'
            }
        ]
    },
    funktional: {
        category: 'functional',
        services: [
            {
                name: 'Spracheinstellungen',
                provider: 'Eigentümer der Website',
                purpose: 'Speichert Ihre bevorzugte Sprache'
            },
            {
                name: 'Google Fonts',
                provider: 'Google LLC',
                purpose: 'Anzeige von Webschriften'
            }
        ]
    },
    analyse: {
        category: 'analytics',
        services: [
            {
                name: 'Google Analytics',
                provider: 'Google LLC',
                purpose: 'Analysiert Webseitennutzung und Nutzerverhalten'
            }
        ]
    },
    marketing: {
        category: 'marketing',
        services: [
            {
                name: 'Google Ads',
                provider: 'Google LLC',
                purpose: 'Personalisierte Werbung'
            },
            {
                name: 'Facebook Pixel',
                provider: 'Meta Platforms Inc.',
                purpose: 'Tracking von Werbekonversionen'
            }
        ]
    }
};

interface CookieSettings {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
}

// Entfernt externe Google Fonts, falls keine Zustimmung vorliegt
const removeExternalGoogleFonts = () => {
    // Suche nach allen Google Fonts Link-Elementen und entferne sie
    const linkElements = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
    linkElements.forEach(link => {
        link.parentNode?.removeChild(link);
    });

    // Suche nach allen Google Fonts Script-Elementen und entferne sie
    const scriptElements = document.querySelectorAll('script[src*="fonts.googleapis.com"]');
    scriptElements.forEach(script => {
        script.parentNode?.removeChild(script);
    });
};

// Funktion zum Blockieren von Google Analytics falls noch keine Zustimmung vorliegt
const blockGoogleAnalytics = () => {
    // Entferne alle bestehenden GA Cookies
    document.cookie.split(';').forEach(function(c) {
        if (c.trim().indexOf('_ga') === 0) {
            document.cookie = c.trim().split('=')[0] + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
        }
    });
};

const CookieBanner = () => {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState<'de' | 'en' | 'sr'>('de');
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
        necessary: true, // Always true and disabled
        analytics: false,
        marketing: false,
        functional: false
    });

    // Initialisiere Dienste basierend auf den Cookie-Einstellungen
    const initializeServices = useCallback((settings: CookieSettings) => {
        // Blockieren von Diensten, wenn nicht zugestimmt wurde
        if (!settings.functional) {
            removeExternalGoogleFonts();
        }

        if (!settings.analytics) {
            blockGoogleAnalytics();
        } else {
            // Initialisiere Google Analytics nur wenn ausdrücklich zugestimmt wurde
            initGA();
            logPageView();
        }

        // Marketing-Dienste nur mit Zustimmung
        if (settings.marketing) {
            initFBPixel();
            loadGoogleTagManager();
        }

        // Funktionale Dienste nur mit Zustimmung
        if (settings.functional) {
            initFunctionalCookies();
        }
    }, []);

    // Aktuelle Sprache erkennen
    useEffect(() => {
        const lang = i18n.language.substring(0, 2);
        if (lang === 'de' || lang === 'en' || lang === 'sr') {
            setCurrentLang(lang);
        } else {
            setCurrentLang('en'); // Fallback to English
        }
    }, [i18n.language]);

    // Get text based on current language
    const getText = (key: keyof typeof translations.en) => {
        return translations[currentLang][key];
    };

    // DSGVO: Unmittelbar beim ersten Laden blockiere alle nicht-essentiellen Dienste
    useEffect(() => {
        // Blockiere externe Dienste bis Zustimmung vorliegt
        removeExternalGoogleFonts();
        blockGoogleAnalytics();
    }, []);

    // Prüfe beim Laden, ob bereits Zustimmung vorhanden ist
    useEffect(() => {
        try {
            const storedSettings = localStorage.getItem('cookieSettings');
            const hasConsent = localStorage.getItem('cookieConsent');
            
            if (storedSettings && hasConsent) {
                const parsedSettings = JSON.parse(storedSettings) as CookieSettings;
                setCookieSettings(parsedSettings);

                // Lade die entsprechenden Dienste basierend auf den Einstellungen
                initializeServices(parsedSettings);
                setShowBanner(false);
            } else {
                // Zeige Banner wenn keine Zustimmung vorhanden ist
                setShowBanner(true);
            }
        } catch (error) {
            console.error('Error loading cookie settings:', error);
            setShowBanner(true);
        }
    }, [initializeServices]);

    const handleSaveSettings = () => {
        localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));
        localStorage.setItem('cookieConsent', 'true');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());

        // Initialisiere Dienste basierend auf den ausgewählten Einstellungen
        initializeServices(cookieSettings);

        setShowSettings(false);
        setShowBanner(false);
    };

    const handleAcceptAll = () => {
        const allSettings: CookieSettings = {
            necessary: true,
            analytics: true,
            marketing: true,
            functional: true
        };

        localStorage.setItem('cookieSettings', JSON.stringify(allSettings));
        localStorage.setItem('cookieConsent', 'true');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        setCookieSettings(allSettings);

        // Initialisiere alle Dienste
        initializeServices(allSettings);

        setShowSettings(false);
        setShowBanner(false);
    };

    const handleDeclineAll = () => {
        const minimalSettings: CookieSettings = {
            necessary: true,
            analytics: false,
            marketing: false,
            functional: false
        };

        localStorage.setItem('cookieSettings', JSON.stringify(minimalSettings));
        localStorage.setItem('cookieConsent', 'true');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        setCookieSettings(minimalSettings);

        // Block all non-essential services
        initializeServices(minimalSettings);

        setShowSettings(false);
        setShowBanner(false);
    };

    const toggleSetting = (setting: keyof Omit<CookieSettings, 'necessary'>) => {
        setCookieSettings({
            ...cookieSettings,
            [setting]: !cookieSettings[setting]
        });
    };

    // If banner should not be shown, return null
    if (!showBanner) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50">
            <div
                className="bg-[rgba(18,18,18,0.95)] backdrop-blur-md border-t border-white/5 text-white p-4 md:p-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
            >
                <div className="max-w-7xl mx-auto">
                    {!showSettings ? (
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex-1">
                                <p className="text-sm md:text-base font-light">{getText('message')}</p>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-2 md:mt-0">
                                <button
                                    onClick={() => setShowSettings(true)}
                                    className="px-4 py-2 text-xs uppercase tracking-wider font-light text-white border border-white/30 hover:bg-white/10 transition-all"
                                >
                                    {getText('learnMore')}
                                </button>
                                <button
                                    onClick={handleDeclineAll}
                                    className="px-4 py-2 text-xs uppercase tracking-wider font-light text-white border border-white/30 hover:bg-white/10 transition-all"
                                >
                                    {getText('decline')}
                                </button>
                                <button
                                    onClick={handleAcceptAll}
                                    className="px-4 py-2 text-xs uppercase tracking-wider font-light bg-white text-black hover:bg-gray-200 transition-all"
                                >
                                    {getText('acceptAll')}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-medium">{getText('title')}</h3>
                                <button
                                    onClick={() => setShowSettings(false)}
                                    className="text-white/70 hover:text-white"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            <div className="mb-6">
                                <p className="text-sm text-white/80 mb-4">{getText('message')}</p>

                                {/* Cookie categories */}
                                <div className="space-y-4">
                                    {/* Necessary cookies - always enabled */}
                                    <div className="p-3 border border-white/10 bg-white/5">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="font-medium">{getText('necessary')}</div>
                                            <div className="text-xs text-white/60">{getText('alwaysActive')}</div>
                                        </div>
                                        <p className="text-xs text-white/70">{getText('necessaryDesc')}</p>

                                        {/* Services List */}
                                        <div className="mt-2 border-t border-white/10 pt-2">
                                            {cookieServices.essentiell.services.map((service, index) => (
                                                <div key={index} className="mt-2">
                                                    <div className="text-xs font-medium text-white/80">{service.name}</div>
                                                    <div className="text-xs text-white/60">Anbieter: {service.provider}</div>
                                                    <div className="text-xs text-white/60">Zweck: {service.purpose}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Analytics cookies */}
                                    <div className="p-3 border border-white/10 bg-white/5">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="font-medium">{getText('analytics')}</div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    checked={cookieSettings.analytics}
                                                    onChange={() => toggleSetting('analytics')}
                                                />
                                                <div className="w-9 h-5 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white/50"></div>
                                            </label>
                                        </div>
                                        <p className="text-xs text-white/70">{getText('analyticsDesc')}</p>

                                        {/* Services List */}
                                        <div className="mt-2 border-t border-white/10 pt-2">
                                            {cookieServices.analyse.services.map((service, index) => (
                                                <div key={index} className="mt-2">
                                                    <div className="text-xs font-medium text-white/80">{service.name}</div>
                                                    <div className="text-xs text-white/60">Anbieter: {service.provider}</div>
                                                    <div className="text-xs text-white/60">Zweck: {service.purpose}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Marketing cookies */}
                                    <div className="p-3 border border-white/10 bg-white/5">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="font-medium">{getText('marketing')}</div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    checked={cookieSettings.marketing}
                                                    onChange={() => toggleSetting('marketing')}
                                                />
                                                <div className="w-9 h-5 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white/50"></div>
                                            </label>
                                        </div>
                                        <p className="text-xs text-white/70">{getText('marketingDesc')}</p>

                                        {/* Services List */}
                                        <div className="mt-2 border-t border-white/10 pt-2">
                                            {cookieServices.marketing.services.map((service, index) => (
                                                <div key={index} className="mt-2">
                                                    <div className="text-xs font-medium text-white/80">{service.name}</div>
                                                    <div className="text-xs text-white/60">Anbieter: {service.provider}</div>
                                                    <div className="text-xs text-white/60">Zweck: {service.purpose}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Functional cookies */}
                                    <div className="p-3 border border-white/10 bg-white/5">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="font-medium">{getText('functional')}</div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    checked={cookieSettings.functional}
                                                    onChange={() => toggleSetting('functional')}
                                                />
                                                <div className="w-9 h-5 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white/50"></div>
                                            </label>
                                        </div>
                                        <p className="text-xs text-white/70">{getText('functionalDesc')}</p>

                                        {/* Services List */}
                                        <div className="mt-2 border-t border-white/10 pt-2">
                                            {cookieServices.funktional.services.map((service, index) => (
                                                <div key={index} className="mt-2">
                                                    <div className="text-xs font-medium text-white/80">{service.name}</div>
                                                    <div className="text-xs text-white/60">Anbieter: {service.provider}</div>
                                                    <div className="text-xs text-white/60">Zweck: {service.purpose}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={handleDeclineAll}
                                    className="px-4 py-2 text-xs uppercase tracking-wider font-light text-white border border-white/30 hover:bg-white/10 transition-all"
                                >
                                    {getText('decline')}
                                </button>
                                <button
                                    onClick={handleSaveSettings}
                                    className="px-4 py-2 text-xs uppercase tracking-wider font-light bg-white text-black hover:bg-gray-200 transition-all"
                                >
                                    {getText('save')}
                                </button>
                            </div>

                            <div className="mt-4 text-center space-x-4">
                                <a
                                    href="/privacy"
                                    className="text-xs text-white/70 hover:text-white underline"
                                >
                                    Datenschutzerklärung
                                </a>
                                <a
                                    href="/imprint"
                                    className="text-xs text-white/70 hover:text-white underline"
                                >
                                    Impressum
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;