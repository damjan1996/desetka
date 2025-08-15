import React from 'react';

export function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://damjan-savic.com/#localbusiness",
    "name": "Damjan Savić - Senior Fullstack Developer & IT Consultant",
    "alternateName": ["CoderConda", "Damjan Savic IT Services"],
    "description": "Damjan Savić bietet professionelle IT-Dienstleistungen in Köln und Umgebung. Spezialisiert auf Enterprise Software Development, KI-Integration, Cloud Architecture und digitale Transformation. Damjan Savić entwickelt maßgeschneiderte Lösungen für Ihr Unternehmen.",
    "url": "https://damjan-savic.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://damjan-savic.com/logo.png",
      "width": "1000",
      "height": "1000",
      "caption": "Damjan Savić - Senior Fullstack Developer & IT Consultant Logo"
    },
    "image": "https://damjan-savic.com/logo.png",
    "telephone": "+49-XXX-XXXXXXX",
    "email": "info@damjan-savic.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Köln",
      "addressRegion": "Nordrhein-Westfalen",
      "postalCode": "50667",
      "addressCountry": "DE",
      "streetAddress": "Geschäftsadresse auf Anfrage"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.9375",
      "longitude": "6.9603"
    },
    "priceRange": "€€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Köln"
      },
      {
        "@type": "State",
        "name": "Nordrhein-Westfalen"
      },
      {
        "@type": "Country",
        "name": "Deutschland"
      },
      {
        "@type": "Continent",
        "name": "Europa"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "50.9375",
        "longitude": "6.9603"
      },
      "geoRadius": "500 km"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise Software Development",
          "description": "Maßgeschneiderte Unternehmenssoftware von Damjan Savić"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "KI/AI Integration Services",
          "description": "Integration von KI-Lösungen mit OLLAMA und LLMs durch Damjan Savić"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Architecture Consulting",
          "description": "Cloud-native Lösungen und Migration von Damjan Savić"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Transformation",
          "description": "Digitale Transformation und Prozessoptimierung mit Damjan Savić"
        }
      }
    ],
    "founder": {
      "@id": "https://damjan-savic.com/#person"
    },
    "employee": {
      "@id": "https://damjan-savic.com/#person"
    },
    "sameAs": [
      "https://github.com/damjansavic",
      "https://linkedin.com/in/damjansavic",
      "https://twitter.com/damjansavic"
    ],
    "knowsLanguage": ["de-DE", "en-US", "sr-RS"],
    "paymentAccepted": ["Überweisung", "PayPal", "Rechnung"],
    "currenciesAccepted": "EUR",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT-Dienstleistungen von Damjan Savić",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Fullstack Web Development",
          "description": "Entwicklung moderner Webanwendungen mit React, Python und TypeScript"
        },
        {
          "@type": "Service",
          "name": "API Development & Integration",
          "description": "RESTful APIs, GraphQL und Microservices Architecture"
        },
        {
          "@type": "Service",
          "name": "DevOps & Cloud Infrastructure",
          "description": "CI/CD, Docker, Kubernetes und Cloud-Deployment"
        },
        {
          "@type": "Service",
          "name": "E-Commerce Solutions",
          "description": "Shopify, WooCommerce und Custom E-Commerce Plattformen"
        },
        {
          "@type": "Service",
          "name": "Business Process Automation",
          "description": "Automatisierung von Geschäftsprozessen mit Python"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}