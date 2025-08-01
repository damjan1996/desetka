import React from 'react';

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  dateCreated: string;
  url?: string;
  liveUrl?: string;
  githubUrl?: string;
  screenshotUrl?: string;
  features?: string[];
  technicalChallenge?: string;
  businessImpact?: {
    roi?: string;
    performanceGain?: string;
    usersImpacted?: string;
  };
}

interface ProjectSchemaProps {
  project: Project;
}

export function ProjectSchema({ project }: ProjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "applicationCategory": project.category,
    "operatingSystem": "Web-based",
    "programmingLanguage": project.technologies,
    "author": {
      "@type": "Person",
      "name": "Damjan Savić",
      "@id": "https://damjan-savic.com/#person"
    },
    "dateCreated": project.dateCreated,
    "url": project.url || project.liveUrl,
    "screenshot": project.screenshotUrl,
    "featureList": project.features || [],
    "softwareRequirements": "Modern web browser with JavaScript enabled",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}