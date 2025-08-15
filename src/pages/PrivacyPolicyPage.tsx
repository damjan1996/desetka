import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import Breadcrumbs from '../components/Breadcrumbs';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung für die Portfolio-Website von Damjan Savić'
  };

  return (
    <PageTransition>
      <SEO 
        title="Datenschutzerklärung"
        description="Datenschutzerklärung für die Portfolio-Website von Damjan Savić"
        schema={schema}
      />
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs currentTitle="Datenschutzerklärung" />
          
          <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Verantwortlicher</h2>
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
              <div className="bg-white/5 p-4 rounded-lg mt-4">
                <p className="mb-2"><strong>Damjan Savić</strong></p>
                <p className="mb-2">Köln, Deutschland</p>
                <p className="mb-2">E-Mail: contact@damjan-savic.com</p>
                <p>Telefon: +49 151 74477788</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise</h2>
              <p>Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ich verarbeite Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In dieser Datenschutzerklärung informiere ich Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen meiner Website.</p>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">2.1 Datenminimierung</h3>
              <p>Ich erhebe nur solche personenbezogenen Daten, die für die Erfüllung der jeweiligen Zwecke erforderlich sind. Eine darüber hinausgehende Datenerhebung findet nicht statt.</p>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">2.2 Rechtsgrundlagen</h3>
              <p>Die Verarbeitung Ihrer Daten erfolgt auf Basis folgender Rechtsgrundlagen:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">3.1 Cookies</h3>
              <p>Diese Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
              
              <p className="mt-4"><strong>Folgende Arten von Cookies werden verwendet:</strong></p>
              <ul className="list-disc list-inside mb-4">
                <li><strong>Notwendige Cookies:</strong> Diese Cookies sind für den Betrieb der Website unerlässlich (z.B. Session-Cookies)</li>
                <li><strong>Funktionale Cookies:</strong> Diese Cookies ermöglichen erweiterte Funktionen (z.B. Spracheinstellungen)</li>
                <li><strong>Analyse-Cookies:</strong> Diese Cookies helfen uns, die Nutzung unserer Website zu verstehen (nur mit Ihrer Zustimmung)</li>
                <li><strong>Marketing-Cookies:</strong> Diese Cookies werden für personalisierte Werbung verwendet (nur mit Ihrer Zustimmung)</li>
              </ul>
              
              <p>Sie können Ihre Cookie-Einstellungen jederzeit über den Cookie-Banner auf unserer Website anpassen.</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">3.2 Server-Log-Dateien</h3>
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (anonymisiert)</li>
              </ul>
              <p>Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Daten werden nach 7 Tagen automatisch gelöscht.</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">3.3 Kontaktformular</h3>
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
              <p><strong>Verarbeitete Daten:</strong></p>
              <ul className="list-disc list-inside mb-4">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Betreff</li>
                <li>Nachrichteninhalt</li>
                <li>Datum und Uhrzeit der Anfrage</li>
              </ul>
              <p><strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).</p>
              <p><strong>Speicherdauer:</strong> Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind, spätestens jedoch nach 6 Monaten.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Externe Dienste und Inhalte</h2>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">4.1 Google Analytics</h3>
              <p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google LLC ("Google"). Google Analytics wird nur aktiviert, wenn Sie der Verwendung von Analyse-Cookies ausdrücklich zugestimmt haben.</p>
              <p><strong>Verarbeitete Daten:</strong></p>
              <ul className="list-disc list-inside mb-4">
                <li>Anonymisierte IP-Adresse</li>
                <li>Geräteinformationen</li>
                <li>Browserinformationen</li>
                <li>Nutzungsverhalten (besuchte Seiten, Verweildauer, etc.)</li>
              </ul>
              <p><strong>Zweck:</strong> Analyse der Websitenutzung zur Verbesserung unseres Angebots</p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
              <p><strong>Speicherdauer:</strong> 14 Monate</p>
              <p>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern oder Ihre Einwilligung jederzeit über unseren Cookie-Banner widerrufen.</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">4.2 Google Fonts</h3>
              <p>Diese Website nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts. Google Fonts werden nur geladen, wenn Sie der Verwendung funktionaler Cookies zugestimmt haben.</p>
              <p><strong>Verarbeitete Daten:</strong> IP-Adresse</p>
              <p><strong>Zweck:</strong> Einheitliche Darstellung von Schriftarten</p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">4.3 Facebook Pixel</h3>
              <p>Diese Website nutzt das Facebook-Pixel von Meta Platforms Inc. Das Facebook-Pixel wird nur aktiviert, wenn Sie der Verwendung von Marketing-Cookies ausdrücklich zugestimmt haben.</p>
              <p><strong>Verarbeitete Daten:</strong></p>
              <ul className="list-disc list-inside mb-4">
                <li>Cookie-ID</li>
                <li>Geräteinformationen</li>
                <li>Nutzungsverhalten</li>
              </ul>
              <p><strong>Zweck:</strong> Remarketing und Conversion-Tracking</p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Ihre Rechte</h2>
              <p>Nach der Datenschutz-Grundverordnung stehen Ihnen folgende Rechte zu:</p>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">5.1 Auskunftsrecht (Art. 15 DSGVO)</h3>
              <p>Sie haben das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten.</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">5.2 Recht auf Berichtigung (Art. 16 DSGVO)</h3>
              <p>Sie haben das Recht, unrichtige oder unvollständige personenbezogene Daten berichtigen zu lassen.</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">5.3 Recht auf Löschung (Art. 17 DSGVO)</h3>
              <p>Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern die gesetzlichen Voraussetzungen vorliegen.</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">5.4 Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
              <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">5.5 Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
              <p>Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">5.6 Widerspruchsrecht (Art. 21 DSGVO)</h3>
              <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen.</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">5.7 Recht auf Widerruf der Einwilligung</h3>
              <p>Sie haben das Recht, Ihre einmal erteilte Einwilligung jederzeit zu widerrufen. Die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung wird dadurch nicht berührt.</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">5.8 Beschwerderecht bei der Aufsichtsbehörde</h3>
              <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:</p>
              <div className="bg-white/5 p-4 rounded-lg mt-4">
                <p className="mb-2"><strong>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen</strong></p>
                <p className="mb-2">Postfach 20 04 44</p>
                <p className="mb-2">40102 Düsseldorf</p>
                <p className="mb-2">Telefon: 0211/38424-0</p>
                <p>E-Mail: poststelle@ldi.nrw.de</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Datensicherheit</h2>
              <p>Ich verwende innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.</p>
              <p>Darüber hinaus bediene ich mich geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}.</p>
              <p>Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter /privacy von Ihnen abgerufen und ausgedruckt werden.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Kontakt</h2>
              <p>Für Fragen zum Datenschutz können Sie sich jederzeit an mich wenden:</p>
              <div className="bg-white/5 p-4 rounded-lg mt-4">
                <p className="mb-2">E-Mail: privacy@damjan-savic.com</p>
                <p>Telefon: +49 151 74477788</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicyPage;