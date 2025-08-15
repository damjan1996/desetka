import React from 'react';

export function WebsiteSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://damjan-savic.com/#website",
    "url": "https://damjan-savic.com",
    "name": "Damjan Savić - Senior Fullstack Developer & Digital Solutions Consultant",
    "alternateName": ["Damjan Savic Portfolio", "CoderConda"],
    "description": "Offizielle Website von Damjan Savić - Senior Fullstack Entwickler und Digital Solutions Consultant aus Köln. Spezialisiert auf Enterprise Software Development, KI-Integration, Cloud Architecture und moderne Web-Technologien. Entdecken Sie innovative Lösungen von Damjan Savić.",
    "publisher": {
      "@id": "https://damjan-savic.com/#person"
    },
    "potentialAction": {
      "@type": "ContactAction",
      "target": {
        "@type": "EntryPoint",
        "url": "https://damjan-savic.com/contact"
      },
      "name": "Damjan Savić kontaktieren"
    },
    "keywords": "Damjan Savić, Senior Fullstack Developer, Digital Solutions Consultant, Software Architect Köln, Python Experte, React Spezialist, KI Integration",
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
      "caption": "Damjan Savić Logo"
    },
    "image": "https://damjan-savic.com/logo.png",
    "inLanguage": ["de-DE", "en-US", "sr-RS"]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Damjan Savić",
        "item": "https://damjan-savic.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Über Damjan Savić",
        "item": "https://damjan-savic.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Portfolio von Damjan Savić",
        "item": "https://damjan-savic.com/portfolio"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Blog von Damjan Savić",
        "item": "https://damjan-savic.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Kontakt Damjan Savić",
        "item": "https://damjan-savic.com/contact"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wer ist Damjan Savić?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Damjan Savić ist ein Senior Fullstack Entwickler und Digital Solutions Consultant aus Köln mit über 10 Jahren Erfahrung. Damjan Savić ist spezialisiert auf Enterprise Software Development, Cloud Architecture, KI-Integration mit OLLAMA und moderne Web-Technologien wie Python, React, TypeScript und Next.js. Als Software Architect entwickelt Damjan Savić skalierbare Lösungen für komplexe Geschäftsanforderungen."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Dienstleistungen bietet Damjan Savić an?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Damjan Savić bietet umfassende IT-Dienstleistungen: Enterprise Software Development, Cloud-native Lösungen (AWS, Azure), Microservices Architecture, KI/ML-Integration mit OLLAMA und LLMs, SAP/ERP-Systemintegration, E-Commerce-Plattformen (Shopify, WooCommerce), Business Process Automation, DevOps & CI/CD, Progressive Web Apps, Electron Desktop-Anwendungen und Digital Transformation Consulting. Damjan Savić arbeitet mit modernsten Technologien wie Python, React, TypeScript, Docker, Kubernetes und mehr."
        }
      },
      {
        "@type": "Question",
        "name": "Wie kann ich Damjan Savić kontaktieren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sie können Damjan Savić auf verschiedenen Wegen erreichen: Über das Kontaktformular auf https://damjan-savic.com/contact, per E-Mail an info@damjan-savic.com, auf LinkedIn unter https://linkedin.com/in/damjansavic, auf GitHub unter https://github.com/damjansavic oder telefonisch während der Geschäftszeiten (Mo-Fr, 9-18 Uhr MEZ). Damjan Savić antwortet in der Regel innerhalb von 24 Stunden auf Anfragen."
        }
      },
      {
        "@type": "Question",
        "name": "Wo ist Damjan Savić ansässig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Damjan Savić ist in Köln, Nordrhein-Westfalen, Deutschland ansässig. Als erfahrener Remote-First Developer arbeitet Damjan Savić erfolgreich mit Kunden aus ganz Deutschland, Europa und weltweit zusammen. Damjan Savić bietet flexible Zusammenarbeitsmodelle: vor Ort in Köln und Umgebung, hybrid oder vollständig remote. Die Arbeitssprachen von Damjan Savić sind Deutsch, Englisch und Serbisch."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}