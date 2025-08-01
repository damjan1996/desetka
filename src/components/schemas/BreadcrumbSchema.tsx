import React from 'react';
import { useTranslation } from 'react-i18next';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Hook to generate breadcrumb items based on current route
export function useBreadcrumbs(pathname: string) {
  const { t, i18n } = useTranslation();
  const siteUrl = 'https://damjan-savic.com';
  const currentLang = i18n.language;
  
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];
  
  // Always add home
  breadcrumbs.push({
    name: t('navigation.home', 'Home'),
    url: currentLang === 'de' ? siteUrl : `${siteUrl}/${currentLang}`
  });
  
  // Build breadcrumbs from path segments
  let currentPath = currentLang === 'de' ? '' : `/${currentLang}`;
  
  segments.forEach((segment, index) => {
    // Skip language segment
    if (index === 0 && ['en', 'de', 'sr'].includes(segment)) {
      return;
    }
    
    currentPath += `/${segment}`;
    
    // Map segment to readable name
    let name = segment;
    switch (segment) {
      case 'portfolio':
        name = t('navigation.portfolio', 'Portfolio');
        break;
      case 'blog':
        name = t('navigation.blog', 'Blog');
        break;
      case 'about':
        name = t('navigation.about', 'About');
        break;
      case 'contact':
        name = t('navigation.contact', 'Contact');
        break;
      default:
        // For dynamic segments like project names, format them nicely
        name = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
    }
    
    breadcrumbs.push({
      name,
      url: `${siteUrl}${currentPath}`
    });
  });
  
  return breadcrumbs;
}

// Component with automatic breadcrumb generation
export function AutoBreadcrumbs() {
  const pathname = window.location.pathname;
  const breadcrumbs = useBreadcrumbs(pathname);
  
  // Don't show breadcrumbs on home page
  if (breadcrumbs.length <= 1) {
    return null;
  }
  
  return <BreadcrumbSchema items={breadcrumbs} />;
}