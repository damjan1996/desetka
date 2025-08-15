import PageTransition from '../../components/PageTransition';
import SEO from '../../components/SEO';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import { FAQSection } from '../../components/FAQSection';
import { LocalizedWebsiteSchema, LocalizedPersonSchema } from '../../components/schemas/LocalizedSchemas';
import { LocalBusinessSchema } from '../../components/schemas/LocalBusinessSchema';
import { ServiceSchema } from '../../components/schemas/ServiceSchema';

const HomePage = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': 'https://damjan-savic.com/#profilepage',
        name: 'Damjan Savić - Senior Fullstack Entwickler & Digital Solutions Consultant',
        description:
            'Damjan Savić ist Senior Fullstack Entwickler und Digital Solutions Consultant in Köln. Spezialisiert auf Enterprise Software Development, KI-Integration, Cloud Architecture und digitale Transformation.',
        mainEntity: {
            '@type': 'Person',
            name: 'Damjan Savić',
            jobTitle: ['Senior Fullstack Developer', 'Digital Solutions Consultant', 'Software Architect'],
            description:
                'Damjan Savić ist Senior Fullstack Entwickler und Digital Solutions Consultant mit über 10 Jahren Erfahrung in Enterprise Software Development, Cloud-native Lösungen und KI-Integration.',
            knowsLanguage: [
                'English',
                'German',
                'Serbian',
                'French',
                'Spanish',
                'Russian'
            ],
            hasOccupation: {
                '@type': 'Occupation',
                name: 'Senior Fullstack Developer & Digital Solutions Consultant',
                skills: [
                    'Enterprise Software Development',
                    'Cloud Architecture (AWS, Azure)',
                    'Python Development',
                    'React & TypeScript',
                    'KI/ML Integration (OLLAMA, LLMs)',
                    'Microservices Architecture',
                    'SAP & ERP Integration',
                    'E-commerce Solutions',
                    'DevOps & CI/CD',
                    'Digital Transformation Consulting'
                ]
            },
            alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Technische Universität'
            },
            worksFor: {
                '@type': 'Organization',
                name: 'CoderConda',
                description: 'IT-Beratung und Software Development von Damjan Savić',
                founder: 'Damjan Savić',
                location: 'Köln, Deutschland'
            },
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Köln',
                addressRegion: 'Nordrhein-Westfalen',
                addressCountry: 'Deutschland'
            }
        }
    };

    const metaDescription =
        'Damjan Savić - Senior Fullstack Entwickler & Digital Solutions Consultant in Köln. Spezialisiert auf Enterprise Software Development, ' +
        'Cloud Architecture, KI-Integration mit OLLAMA, Microservices und digitale Transformation. Damjan Savić entwickelt maßgeschneiderte ' +
        'Lösungen mit Python, React, TypeScript für E-Commerce, ERP-Integration und Business Process Automation. Kontaktieren Sie Damjan Savić.';

    return (
        <>
            <SEO
                title="Damjan Savić - Senior Fullstack Entwickler & Digital Solutions Consultant Köln | Enterprise Software & KI-Experte"
                description={metaDescription}
                schema={schema}
            />
            <LocalizedWebsiteSchema />
            <LocalizedPersonSchema />
            <LocalBusinessSchema />
            <ServiceSchema />
            <main className="min-h-screen">
                {/* Hero Section */}
                <div id="home">
                    <Hero />
                </div>

                {/* Experience Section */}
                <div id="experience">
                    <Experience />
                </div>

                {/* Skills Section */}
                <div id="skills">
                    <Skills />
                </div>

                {/* Projects Section */}
                <div id="projects">
                    <Projects />
                </div>

                {/* About Section */}
                <div id="about">
                    <About />
                </div>
                
                {/* FAQ Section */}
                <div id="faq" className="py-16">
                    <FAQSection />
                </div>
            </main>
        </>
    );
};

export default HomePage;
