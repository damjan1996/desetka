import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import Breadcrumbs from '../components/Breadcrumbs';

const TermsPage = () => {
  const { t } = useTranslation();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service',
    description: 'Terms of Service for Damjan Savić\'s portfolio website'
  };

  return (
    <PageTransition>
      <SEO 
        title="Terms of Service"
        description="Terms of Service for Damjan Savić's portfolio website"
        schema={schema}
      />
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs currentTitle="Terms of Service" />
          
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">Last updated: March 10, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
              <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Damjan Savić and is protected by intellectual property laws.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p>When using our website, you agree to:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Provide accurate information</li>
                <li>Use the website legally and ethically</li>
                <li>Not attempt to gain unauthorized access</li>
                <li>Not interfere with the website's operation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
              <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of Germany, without regard to its conflict of law provisions.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
              <p>For any questions about these Terms of Service, please contact us at:</p>
              <p>Email: legal@damjan-savic.com</p>
              <p>Address: {t('contact.address')}</p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TermsPage;