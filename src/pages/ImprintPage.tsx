import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import Breadcrumbs from '../components/Breadcrumbs';

const ImprintPage = () => {
  const { t } = useTranslation();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Impressum',
    description: 'Impressum für die Portfolio-Website von Damjan Savić'
  };

  return (
    <PageTransition>
      <SEO 
        title="Impressum"
        description="Impressum für die Portfolio-Website von Damjan Savić"
        schema={schema}
      />
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs currentTitle="Impressum" />
          
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
              <div className="bg-white/5 p-6 rounded-lg">
                <p className="mb-2 text-lg font-semibold">Damjan Savić</p>
                <p className="mb-2">Fullstack Developer & Digital Solutions Consultant</p>
                
                <p className="mb-2"><strong>E-Mail:</strong></p>
                <p className="mb-2">info@damjan-savic.com</p>
                <p className="mb-4">Website: https://damjan-savic.com</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">Haftung für Inhalte</h3>
              <p>Die Inhalte meiner Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">Haftung für Links</h3>
              <p>Meine Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>
              <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
              <p className="mt-2">Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Bildnachweise</h2>
              <p>Die auf dieser Website verwendeten Bilder und Grafiken stammen aus folgenden Quellen:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Eigene Aufnahmen und Erstellungen</li>
                <li>Icons: Heroicons, Tabler Icons (MIT Lizenz)</li>
                <li>Weitere Bildquellen sind direkt bei den jeweiligen Bildern angegeben</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Datenschutz</h2>
              <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>
              <p className="mt-2">Weitere Informationen zum Datenschutz finden Sie in unserer <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">Datenschutzerklärung</a>.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technische Umsetzung</h2>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="mb-2"><strong>Design & Entwicklung:</strong> Damjan Savić</p>
                <p><strong>Technologien:</strong> React, TypeScript, Tailwind CSS</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Copyright</h2>
              <p>© {new Date().getFullYear()} Damjan Savić. Alle Rechte vorbehalten.</p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ImprintPage;