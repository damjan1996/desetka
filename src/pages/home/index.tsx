import PageTransition from '../../components/PageTransition';
import SEO from '../../components/SEO';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import { FAQSection } from '../../components/FAQSection';

const HomePage = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: 'Damjan Savić - Digital Solutions Consultant',
        description:
            'Expert in JTL integration, e-commerce solutions, and process automation. Helping businesses optimize their digital operations.',
        mainEntity: {
            '@type': 'Person',
            name: 'Damjan Savić',
            jobTitle: 'Digital Solutions Consultant',
            description:
                'Software Developer & Digital Solutions Consultant specializing in ERP systems, e-commerce integration, and process automation.',
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
                name: 'Digital Solutions Consultant',
                skills: [
                    'JTL-Wawi',
                    'Python Development',
                    'E-commerce Integration',
                    'Process Automation',
                    'System Integration',
                    'Digital Marketing'
                ]
            },
            alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Middlesex University London'
            },
            worksFor: {
                '@type': 'Organization',
                name: 'RITTER Digital GmbH',
                location: 'Oberhausen, Germany'
            }
        }
    };

    const metaDescription =
        'Digital Solutions Consultant specializing in JTL integration, e-commerce solutions, ' +
        'and process automation. Expertise in Python development, system integration, and ' +
        'digital marketing automation. Based in Germany, working with clients worldwide.';

    return (
        <>
            <SEO
                title="Damjan Savić - Digital Solutions Consultant"
                description={metaDescription}
                schema={schema}
            />
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
