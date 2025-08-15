import React from 'react';
import { useTranslation } from 'react-i18next';

export function LocalizedPersonSchema() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://damjan-savic.com/#person",
    "name": currentLanguage === 'sr' ? "Дамјан Савић" : "Damjan Savić",
    "alternateName": currentLanguage === 'sr' ? ["Damjan Savić", "Damjan Savic"] : "Damjan Savic",
    "jobTitle": currentLanguage === 'de' ? 
      ["Senior Fullstack Entwickler", "Digital Solutions Consultant", "Software Architekt", "KI/AI Spezialist"] :
      currentLanguage === 'sr' ? 
      ["Старији програмер пуног стека", "Консултант за дигитална решења", "Софтверски архитекта", "Специјалиста за вештачку интелигенцију"] :
      ["Senior Fullstack Developer", "Digital Solutions Consultant", "Software Architect", "AI Specialist"],
    "description": currentLanguage === 'de' ? 
      "Damjan Savić ist ein Senior Fullstack Entwickler und Digital Solutions Consultant aus Köln. Damjan Savić ist spezialisiert auf Python, JavaScript, React, Next.js, TypeScript und KI-Integration. Mit über 10 Jahren Erfahrung entwickelt Damjan Savić maßgeschneiderte Enterprise-Lösungen, moderne Web-Applikationen und innovative KI-gestützte Systeme für Unternehmen jeder Größe." :
      currentLanguage === 'sr' ?
      "Дамјан Савић је старији програмер пуног стека и консултант за дигитална решења из Келна. Дамјан Савић је специјализован за Python, JavaScript, React, Next.js, TypeScript и интеграцију вештачке интелигенције. Са преко 10 година искуства, Дамјан Савић развија прилагођена решења за предузећа, модерне веб апликације и иновативне системе подржане вештачком интелигенцијом." :
      "Damjan Savić is a Senior Fullstack Developer and Digital Solutions Consultant based in Cologne, Germany. Damjan Savić specializes in Python, JavaScript, React, Next.js, TypeScript, and AI integration. With over 10 years of experience, Damjan Savić delivers custom enterprise solutions, modern web applications, and innovative AI-powered systems.",
    "url": "https://damjan-savic.com",
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://damjan-savic.com/portrait.jpg",
        "caption": currentLanguage === 'sr' ? "Дамјан Савић портрет" : "Damjan Savić Portrait"
      },
      {
        "@type": "ImageObject", 
        "url": "https://damjan-savic.com/logo.png",
        "caption": currentLanguage === 'sr' ? "Дамјан Савић лого" : "Damjan Savić Logo"
      }
    ],
    "logo": "https://damjan-savic.com/logo.png",
    "email": "info@damjan-savic.com",
    "telephone": "+49-XXX-XXXXXXX",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@damjan-savic.com",
      "contactType": currentLanguage === 'de' ? "Geschäftsanfragen" : 
                      currentLanguage === 'sr' ? "Пословни упити" : 
                      "Business Inquiries",
      "availableLanguage": ["de", "en", "sr"],
      "areaServed": ["DE", "EU"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "sameAs": [
      "https://github.com/damjansavic",
      "https://linkedin.com/in/damjansavic",
      "https://twitter.com/damjansavic",
      "https://stackoverflow.com/users/damjansavic"
    ],
    "knowsAbout": currentLanguage === 'de' ? [
      "Python Entwicklung",
      "JavaScript Entwicklung",
      "React.js",
      "Next.js",
      "TypeScript",
      "Electron Desktop Anwendungen",
      "Künstliche Intelligenz (KI/AI)",
      "OLLAMA AI/ML Integration",
      "Machine Learning",
      "Large Language Models (LLM)",
      "ERP Systeme Integration",
      "SAP Integration",
      "E-Commerce Entwicklung",
      "Shopify Entwicklung",
      "WooCommerce Integration",
      "Prozessautomatisierung",
      "Workflow-Optimierung",
      "Backend Entwicklung",
      "Frontend Entwicklung",
      "Full Stack Entwicklung",
      "Cloud Architektur",
      "AWS Services",
      "Docker & Kubernetes",
      "Microservices Architektur",
      "DevOps & CI/CD",
      "Agile Entwicklung",
      "Software Architektur"
    ] : currentLanguage === 'sr' ? [
      "Python развој",
      "JavaScript развој",
      "React.js",
      "Next.js",
      "TypeScript",
      "Electron десктоп апликације",
      "Вештачка интелигенција (AI)",
      "OLLAMA AI/ML интеграција",
      "Машинско учење",
      "Велики језички модели (LLM)",
      "ERP системи интеграција",
      "SAP интеграција",
      "E-Commerce развој",
      "Shopify развој",
      "WooCommerce интеграција",
      "Аутоматизација процеса",
      "Оптимизација радног тока",
      "Backend развој",
      "Frontend развој",
      "Full Stack развој",
      "Облак архитектура",
      "AWS сервиси",
      "Docker & Kubernetes",
      "Microservices архитектура",
      "DevOps & CI/CD",
      "Агилни развој",
      "Софтверска архитектура"
    ] : [
      "Python Development",
      "JavaScript Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "Electron Desktop Applications",
      "Artificial Intelligence (AI)",
      "OLLAMA AI/ML Integration",
      "Machine Learning",
      "Large Language Models (LLM)",
      "ERP Systems Integration",
      "SAP Integration",
      "E-Commerce Development",
      "Shopify Development",
      "WooCommerce Integration",
      "Process Automation",
      "Workflow Optimization",
      "Backend Development",
      "Frontend Development",
      "Full Stack Development",
      "Cloud Architecture",
      "AWS Services",
      "Docker & Kubernetes",
      "Microservices Architecture",
      "DevOps & CI/CD",
      "Agile Development",
      "Software Architecture"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": currentLanguage === 'sr' ? "Келн" : currentLanguage === 'de' ? "Köln" : "Cologne",
      "addressRegion": currentLanguage === 'sr' ? "Северна Рајна-Вестфалија" : currentLanguage === 'de' ? "Nordrhein-Westfalen" : "North Rhine-Westphalia",
      "addressCountry": currentLanguage === 'sr' ? "Немачка" : currentLanguage === 'de' ? "DE" : "Germany"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "CoderConda",
      "description": currentLanguage === 'de' ? 
        "Moderne Softwareentwicklung, KI-Integration und Prozessautomatisierung von Damjan Savić" :
        currentLanguage === 'sr' ?
        "Модерни развој софтвера, интеграција вештачке интелигенције и аутоматизација процеса од Дамјана Савића" :
        "Modern software development, AI integration, and process automation by Damjan Savić",
      "url": "https://damjan-savic.com",
      "founder": currentLanguage === 'sr' ? "Дамјан Савић" : "Damjan Savić",
      "foundingDate": "2020",
      "slogan": currentLanguage === 'de' ? 
        "Innovative Lösungen für digitale Herausforderungen" :
        currentLanguage === 'sr' ?
        "Иновативна решења за дигиталне изазове" :
        "Innovative solutions for digital challenges"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": currentLanguage === 'sr' ? "Технички универзитет" : currentLanguage === 'de' ? "Technische Universität" : "Technical University",
        "url": "https://www.tu.edu"
      }
    ],
    "award": currentLanguage === 'de' ? [
      "Zertifizierter Cloud Architekt",
      "Python Professional Zertifizierung",
      "React Expert Zertifizierung"
    ] : currentLanguage === 'sr' ? [
      "Сертификовани облак архитекта",
      "Python професионална сертификација",
      "React експерт сертификација"
    ] : [
      "Certified Cloud Architect",
      "Python Professional Certification",
      "React Expert Certification"
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": currentLanguage === 'de' ? "Deutsch" : currentLanguage === 'sr' ? "Немачки" : "German",
        "alternateName": "de"
      },
      {
        "@type": "Language",
        "name": currentLanguage === 'de' ? "Englisch" : currentLanguage === 'sr' ? "Енглески" : "English",
        "alternateName": "en"
      },
      {
        "@type": "Language",
        "name": currentLanguage === 'de' ? "Serbisch" : currentLanguage === 'sr' ? "Српски" : "Serbian",
        "alternateName": "sr"
      },
      {
        "@type": "Language",
        "name": currentLanguage === 'de' ? "Französisch" : currentLanguage === 'sr' ? "Француски" : "French",
        "alternateName": "fr"
      },
      {
        "@type": "Language",
        "name": currentLanguage === 'de' ? "Spanisch" : currentLanguage === 'sr' ? "Шпански" : "Spanish",
        "alternateName": "es"
      },
      {
        "@type": "Language",
        "name": currentLanguage === 'de' ? "Russisch" : currentLanguage === 'sr' ? "Руски" : "Russian",
        "alternateName": "ru"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}

export function LocalizedWebsiteSchema() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://damjan-savic.com/#website",
    "url": "https://damjan-savic.com",
    "name": currentLanguage === 'de' ? 
      "Damjan Savić - Senior Fullstack Entwickler & Digital Solutions Consultant" :
      currentLanguage === 'sr' ?
      "Дамјан Савић - Старији програмер пуног стека и консултант за дигитална решења" :
      "Damjan Savić - Senior Fullstack Developer & Digital Solutions Consultant",
    "alternateName": ["Damjan Savic Portfolio", "CoderConda"],
    "description": currentLanguage === 'de' ? 
      "Offizielle Website von Damjan Savić - Senior Fullstack Entwickler und Digital Solutions Consultant aus Köln. Spezialisiert auf Enterprise Software Development, KI-Integration, Cloud Architecture und moderne Web-Technologien. Entdecken Sie innovative Lösungen von Damjan Savić." :
      currentLanguage === 'sr' ?
      "Званична веб страница Дамјана Савића - старији програмер пуног стека и консултант за дигитална решења из Келна. Специјализован за развој софтвера за предузећа, интеграцију вештачке интелигенције, облак архитектуру и модерне веб технологије." :
      "Official website of Damjan Savić - Senior Fullstack Developer and Digital Solutions Consultant based in Cologne, Germany. Specializing in Enterprise Software Development, AI Integration, Cloud Architecture, and modern web technologies. Discover innovative solutions by Damjan Savić.",
    "publisher": {
      "@id": "https://damjan-savic.com/#person"
    },
    "potentialAction": {
      "@type": "ContactAction",
      "target": {
        "@type": "EntryPoint",
        "url": "https://damjan-savic.com/contact"
      },
      "name": currentLanguage === 'de' ? 
        "Damjan Savić kontaktieren" :
        currentLanguage === 'sr' ?
        "Контактирајте Дамјана Савића" :
        "Contact Damjan Savić"
    },
    "keywords": currentLanguage === 'de' ? 
      "Damjan Savić, Senior Fullstack Developer, Digital Solutions Consultant, Software Architekt Köln, Python Experte, React Spezialist, KI Integration" :
      currentLanguage === 'sr' ?
      "Дамјан Савић, Старији програмер пуног стека, Консултант за дигитална решења, Софтверски архитекта, Python експерт, React специјалиста, интеграција вештачке интелигенције" :
      "Damjan Savić, Senior Fullstack Developer, Digital Solutions Consultant, Software Architect Cologne, Python Expert, React Specialist, AI Integration",
    "dateCreated": "2020-01-01",
    "dateModified": "2025-01-15",
    "creator": {
      "@id": "https://damjan-savic.com/#person"
    },
    "copyrightHolder": {
      "@id": "https://damjan-savic.com/#person"
    },
    "copyrightYear": "2025",
    "logo": {
      "@type": "ImageObject",
      "url": "https://damjan-savic.com/logo.png",
      "width": "1000",
      "height": "1000",
      "caption": currentLanguage === 'sr' ? "Дамјан Савић лого" : "Damjan Savić Logo"
    },
    "image": "https://damjan-savic.com/logo.png",
    "inLanguage": currentLanguage === 'de' ? ["de-DE"] : 
                  currentLanguage === 'sr' ? ["sr-RS"] : 
                  ["en-US"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}