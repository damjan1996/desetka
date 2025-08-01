import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://damjan-savic.com';
const LANGUAGES = ['de', 'en', 'sr'];
const DEFAULT_LANGUAGE = 'de';

// Static pages that exist in your application
const staticPages = [
  '/',
  '/about',
  '/portfolio',
  '/blog',
  '/contact',
  '/privacy',
  '/terms'
];

// Blog posts (you can dynamically read these from your MDX files)
const blogPosts = [
  'erp-integration-breuninger',
  'fullstack-development-timetracking',
  'rfid-automation'
];

// Projects (you can dynamically read these from your project data)
const projects = [
  'ai-data-reader',
  'bi-vision',
  'business-intelligence-ai',
  'claude-personal-assistant',
  'e-commerce-integration',
  'local-llm-training',
  'rfid-automation',
  'timetracking-software'
];

function generateUrl(path, language) {
  const langPrefix = language === DEFAULT_LANGUAGE ? '' : `/${language}`;
  return `${SITE_URL}${langPrefix}${path}`;
}

function generateSitemapXML() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  // Generate entries for static pages
  staticPages.forEach(page => {
    LANGUAGES.forEach(lang => {
      const url = generateUrl(page, lang);
      const priority = page === '/' ? '1.0' : page === '/portfolio' || page === '/blog' ? '0.9' : '0.8';
      const changefreq = page === '/' || page === '/portfolio' || page === '/blog' ? 'weekly' : 'monthly';
      
      xml += '  <url>\n';
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      
      // Add alternate language links
      LANGUAGES.forEach(altLang => {
        if (altLang !== lang) {
          const altUrl = generateUrl(page, altLang);
          xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}"/>\n`;
        }
      });
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${generateUrl(page, DEFAULT_LANGUAGE)}"/>\n`;
      
      xml += '  </url>\n';
    });
  });

  // Generate entries for blog posts
  blogPosts.forEach(post => {
    LANGUAGES.forEach(lang => {
      const url = generateUrl(`/blog/${post}`, lang);
      
      xml += '  <url>\n';
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += '    <changefreq>monthly</changefreq>\n';
      xml += '    <priority>0.7</priority>\n';
      
      // Add alternate language links
      LANGUAGES.forEach(altLang => {
        if (altLang !== lang) {
          const altUrl = generateUrl(`/blog/${post}`, altLang);
          xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}"/>\n`;
        }
      });
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${generateUrl(`/blog/${post}`, DEFAULT_LANGUAGE)}"/>\n`;
      
      xml += '  </url>\n';
    });
  });

  // Generate entries for projects
  projects.forEach(project => {
    LANGUAGES.forEach(lang => {
      const url = generateUrl(`/portfolio/${project}`, lang);
      
      xml += '  <url>\n';
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += '    <changefreq>monthly</changefreq>\n';
      xml += '    <priority>0.8</priority>\n';
      
      // Add alternate language links
      LANGUAGES.forEach(altLang => {
        if (altLang !== lang) {
          const altUrl = generateUrl(`/portfolio/${project}`, altLang);
          xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}"/>\n`;
        }
      });
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${generateUrl(`/portfolio/${project}`, DEFAULT_LANGUAGE)}"/>\n`;
      
      xml += '  </url>\n';
    });
  });

  xml += '</urlset>';
  
  return xml;
}

// Generate and save the sitemap
const sitemapXML = generateSitemapXML();
const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

fs.writeFileSync(outputPath, sitemapXML, 'utf-8');
console.log(`✅ Sitemap generated successfully at ${outputPath}`);

// Also generate a robots.txt if it doesn't exist or update it
const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
const robotsContent = `# Allow all crawlers
User-agent: *
Allow: /
Crawl-delay: 1

# Disallow admin or sensitive paths if any
Disallow: /admin
Disallow: /api/
Disallow: /.env

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Language specific sitemaps
Sitemap: ${SITE_URL}/sitemap-de.xml
Sitemap: ${SITE_URL}/sitemap-en.xml
Sitemap: ${SITE_URL}/sitemap-sr.xml
`;

fs.writeFileSync(robotsPath, robotsContent, 'utf-8');
console.log(`✅ robots.txt updated successfully at ${robotsPath}`);