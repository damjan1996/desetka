import React from 'react';

export function PersonSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://damjan-savic.com/#person",
    "name": "Damjan Savić",
    "alternateName": "Damjan Savic",
    "jobTitle": ["Fullstack Developer", "Software Engineer", "KI Spezialist"],
    "description": "Erfahrener Fullstack Entwickler spezialisiert auf Python, JavaScript, React, Next.js, TypeScript, Electron Desktop Apps, Automatisierungslösungen, KI/ML mit OLLAMA, ERP-Systeme, E-Commerce und Prozessautomatisierung",
    "url": "https://damjan-savic.com",
    "image": "https://damjan-savic.com/portrait.jpg",
    "sameAs": [
      "https://github.com/damjansavic",
      "https://linkedin.com/in/damjansavic"
    ],
    "knowsAbout": [
      "Python Development",
      "JavaScript Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "Electron Desktop Applications",
      "Künstliche Intelligenz (KI/AI)",
      "OLLAMA AI/ML",
      "ERP Systems Integration",
      "E-Commerce Development",
      "Process Automation",
      "Backend Development",
      "Frontend Development",
      "Full Stack Development"
    ],
    "hasSkill": [
      {
        "@type": "DefinedTerm",
        "name": "Python Development",
        "description": "Expert-level Python programming for automation, backend development, and AI/ML applications"
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
      "description": "Moderne Softwareentwicklung, KI-Integration und Prozessautomatisierung"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}