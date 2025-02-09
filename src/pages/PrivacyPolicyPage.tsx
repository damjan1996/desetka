import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import Breadcrumbs from '../components/Breadcrumbs';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description: 'Privacy Policy for Damjan Savić\'s portfolio website'
  };

  return (
    <PageTransition>
      <SEO 
        title="Privacy Policy"
        description="Privacy Policy for Damjan Savić's portfolio website"
        schema={schema}
      />
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs currentTitle="Privacy Policy" />
          
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">Last updated: March 10, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-2">2.1 Information You Provide</h3>
              <p>When using our contact form, we collect:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Message content</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">2.2 Automatically Collected Information</h3>
              <p>We automatically collect:</p>
              <ul className="list-disc list-inside mb-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time spent on site</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Respond to your inquiries</li>
                <li>Improve our website</li>
                <li>Analyze usage patterns</li>
                <li>Prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
              <p>We use cookies to:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Remember your preferences</li>
                <li>Analyze site traffic</li>
                <li>Understand user behavior</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information, including:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Encryption of data in transit</li>
                <li>Regular security assessments</li>
                <li>Access controls</li>
                <li>Secure data storage</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Access your personal data</li>
                <li>Request data correction</li>
                <li>Request data deletion</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
              <p>For privacy-related inquiries, contact us at:</p>
              <p>Email: privacy@damjan-savic.com</p>
              <p>Address: {t('contact.address')}</p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicyPage;