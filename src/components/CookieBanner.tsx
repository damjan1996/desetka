import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';

const CookieBanner = () => {
    const { t } = useTranslation();

    return (
        <CookieConsent
            location="bottom"
            buttonText={t('common.cookies.accept')}
            declineButtonText={t('common.cookies.decline')}
            enableDeclineButton
            style={{
                background: '#1a1a1a',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            buttonStyle={{
                background: '#ff6b00',
                color: 'white',
                fontSize: '14px',
                borderRadius: '6px',
                padding: '8px 16px',
            }}
            declineButtonStyle={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '14px',
                borderRadius: '6px',
                padding: '8px 16px',
            }}
            expires={365}
            onAccept={() => {
                // Initialize analytics only after consent
                window.initializeAnalytics();
            }}
        >
            {t('common.cookies.message')}
        </CookieConsent>
    );
};

export default CookieBanner;