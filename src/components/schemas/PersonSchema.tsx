import React from 'react';

export function PersonSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://damjan-savic.com/#person",
    "name": "Damjan Savić",
    "alternateName": "Damjan Savic",
    "jobTitle": ["Senior Fullstack Developer", "Digital Solutions Consultant", "Software Architect", "KI/AI Spezialist"],
    "description": "Damjan Savić ist ein Senior Fullstack Entwickler und Digital Solutions Consultant aus Köln. Damjan Savić ist spezialisiert auf Python, JavaScript, React, Next.js, TypeScript und KI-Integration. Mit über 10 Jahren Erfahrung entwickelt Damjan Savić maßgeschneiderte Enterprise-Lösungen, moderne Web-Applikationen und innovative KI-gestützte Systeme für Unternehmen jeder Größe.",
    "url": "https://damjan-savic.com",
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://damjan-savic.com/portrait.jpg",
        "caption": "Damjan Savić Portrait"
      },
      {
        "@type": "ImageObject", 
        "url": "https://damjan-savic.com/logo.png",
        "caption": "Damjan Savić Logo"
      }
    ],
    "logo": "https://damjan-savic.com/logo.png",
    "email": "info@damjan-savic.com",
    "telephone": "+49-XXX-XXXXXXX",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@damjan-savic.com",
      "contactType": "Business Inquiries",
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
    "knowsAbout": [
      "Python Development",
      "JavaScript Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "Electron Desktop Applications",
      "Künstliche Intelligenz (KI/AI)",
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
    "hasSkill": [
      {
        "@type": "DefinedTerm",
        "name": "Python Development",
        "description": "Damjan Savić bietet Expert-level Python programming for automation, backend development, and AI/ML applications"
      },
      {
        "@type": "DefinedTerm",
        "name": "JavaScript/TypeScript Development",
        "description": "Full-stack JavaScript development with React, Next.js, Node.js, and TypeScript"
      },
      {
        "@type": "DefinedTerm",
        "name": "AI/ML with OLLAMA",
        "description": "Implementation of AI solutions using OLLAMA for local language models"
      },
      {
        "@type": "DefinedTerm",
        "name": "ERP & E-Commerce Integration",
        "description": "Custom ERP system development and e-commerce platform integration"
      },
      {
        "@type": "DefinedTerm",
        "name": "Electron Desktop Development",
        "description": "Cross-platform desktop application development with Electron and modern web technologies"
      },
      {
        "@type": "DefinedTerm",
        "name": "Process Automation",
        "description": "Business process automation using Python, APIs, and custom integration solutions"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Köln",
      "addressRegion": "NRW",
      "addressCountry": "DE"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "CoderConda",
      "description": "Moderne Softwareentwicklung, KI-Integration und Prozessautomatisierung von Damjan Savić",
      "url": "https://damjan-savic.com",
      "founder": "Damjan Savić",
      "foundingDate": "2020",
      "slogan": "Innovative Lösungen für digitale Herausforderungen"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Technische Universität",
        "url": "https://www.tu.edu"
      }
    ],
    "award": [
      "Certified Cloud Architect",
      "Python Professional Certification",
      "React Expert Certification"
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "Deutsch",
        "alternateName": "de"
      },
      {
        "@type": "Language",
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language",
        "name": "Srpski",
        "alternateName": "sr"
      },
      {
        "@type": "Language",
        "name": "Français",
        "alternateName": "fr"
      },
      {
        "@type": "Language",
        "name": "Español",
        "alternateName": "es"
      },
      {
        "@type": "Language",
        "name": "Russian",
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