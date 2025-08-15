import React from 'react';

export function ServiceSchema() {
  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://damjan-savic.com/#service-fullstack",
      "name": "Fullstack Web Development von Damjan Savić",
      "description": "Professionelle Fullstack-Entwicklung durch Damjan Savić. Moderne Webanwendungen mit React, Next.js, Python, Django, FastAPI und TypeScript. Von der Konzeption bis zum Deployment entwickelt Damjan Savić skalierbare Lösungen.",
      "provider": {
        "@id": "https://damjan-savic.com/#person"
      },
      "serviceType": "Software Development",
      "areaServed": ["Köln", "Deutschland", "Europa", "Weltweit"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Fullstack Development Services",
        "itemListElement": [
          "Frontend Development (React, Vue, Angular)",
          "Backend Development (Python, Node.js)",
          "Database Design (PostgreSQL, MongoDB)",
          "API Development (REST, GraphQL)",
          "Progressive Web Apps (PWA)",
          "Single Page Applications (SPA)"
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://damjan-savic.com/#service-ai",
      "name": "KI/AI Integration Services von Damjan Savić",
      "description": "Damjan Savić integriert künstliche Intelligenz in Ihre Geschäftsprozesse. Spezialisiert auf OLLAMA, Large Language Models (LLMs), Machine Learning und Computer Vision. Damjan Savić entwickelt maßgeschneiderte KI-Lösungen.",
      "provider": {
        "@id": "https://damjan-savic.com/#person"
      },
      "serviceType": "AI/ML Development",
      "areaServed": ["Köln", "Deutschland", "Europa", "Weltweit"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Integration Services",
        "itemListElement": [
          "OLLAMA Integration",
          "Large Language Model Implementation",
          "Natural Language Processing (NLP)",
          "Computer Vision Solutions",
          "Predictive Analytics",
          "AI-powered Automation"
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://damjan-savic.com/#service-cloud",
      "name": "Cloud Architecture & DevOps von Damjan Savić",
      "description": "Cloud-native Lösungen und DevOps-Expertise von Damjan Savić. AWS, Azure, Google Cloud Platform, Docker, Kubernetes und CI/CD Pipelines. Damjan Savić migriert und optimiert Ihre Cloud-Infrastruktur.",
      "provider": {
        "@id": "https://damjan-savic.com/#person"
      },
      "serviceType": "Cloud Consulting",
      "areaServed": ["Köln", "Deutschland", "Europa", "Weltweit"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cloud & DevOps Services",
        "itemListElement": [
          "AWS Architecture & Migration",
          "Docker Containerization",
          "Kubernetes Orchestration",
          "CI/CD Pipeline Setup",
          "Infrastructure as Code (IaC)",
          "Cloud Cost Optimization"
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://damjan-savic.com/#service-ecommerce",
      "name": "E-Commerce Development von Damjan Savić",
      "description": "Damjan Savić entwickelt moderne E-Commerce-Lösungen. Shopify, WooCommerce, Magento und Custom-Shops. Von der Produktverwaltung bis zur Payment-Integration bietet Damjan Savić vollständige E-Commerce-Services.",
      "provider": {
        "@id": "https://damjan-savic.com/#person"
      },
      "serviceType": "E-Commerce Development",
      "areaServed": ["Köln", "Deutschland", "Europa", "Weltweit"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "E-Commerce Services",
        "itemListElement": [
          "Shopify Store Development",
          "WooCommerce Integration",
          "Payment Gateway Integration",
          "Inventory Management Systems",
          "Order Processing Automation",
          "Multi-Channel Commerce"
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://damjan-savic.com/#service-automation",
      "name": "Process Automation von Damjan Savić",
      "description": "Geschäftsprozess-Automatisierung durch Damjan Savić. Python-basierte Automatisierungslösungen, Workflow-Optimierung und Integration von Systemen. Damjan Savić steigert Ihre Effizienz durch intelligente Automatisierung.",
      "provider": {
        "@id": "https://damjan-savic.com/#person"
      },
      "serviceType": "Business Process Automation",
      "areaServed": ["Köln", "Deutschland", "Europa", "Weltweit"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Automation Services",
        "itemListElement": [
          "Python Automation Scripts",
          "Workflow Automation",
          "Data Processing Pipelines",
          "API Integration & Orchestration",
          "Report Generation & Analytics",
          "Task Scheduling & Monitoring"
        ]
      }
    }
  ];

  return (
    <>
      {services.map((service, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
    </>
  );
}