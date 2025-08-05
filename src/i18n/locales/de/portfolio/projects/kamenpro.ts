// src/i18n/locales/de/portfolio/projects/kamenpro.ts
export const kamenpro = {
    meta: {
        slug: 'kamenpro',
        title: "KamenPro: Digitale Transformation für dekorative Steinverkleidungen",
        description: "Entwicklung einer modernen Multi-Location PWA für einen Hersteller dekorativer Steinverkleidungen aus Bijeljina mit React 18.3 und Supabase",
        excerpt: "Von Stein zu Pixel: Wie ein traditioneller Handwerksbetrieb durch moderne Webtechnologie 300% mehr Anfragen generiert.",
        date: "2024-11",
        category: "Web Development",
        client: "KamenPro - Željko",
        duration: "3 Monate",
        url: "https://kamenpro.net",
        repository: "",
        documentation: "",
        published: true,
        featured: true,
        technologies: ["React 18.3", "TypeScript", "Vite", "Supabase", "Framer Motion", "TailwindCSS", "PWA", "Schema.org"],
        tags: ["Multi-Location SEO", "E-Commerce", "PWA", "Local Business", "Performance"]
    },
    content: {
        intro: "KamenPro, ein etablierter Hersteller dekorativer Steinverkleidungen aus Bijeljina, stand vor der Herausforderung, sein traditionelles Handwerk in die digitale Welt zu übertragen. Diese Case Study zeigt, wie moderne Webtechnologie einem lokalen Handwerksbetrieb zu überregionalem Erfolg verhalf.",

        challenge: {
            title: "Die Herausforderung",
            description: "Als Hersteller hochwertiger Steinverkleidungen aus Weißzement fehlte KamenPro die digitale Präsenz, um mit der Online-Konkurrenz mitzuhalten.",
            points: [
                "Keine digitale Präsenz trotz hoher Online-Nachfrage",
                "Kunden suchten online nach 'dekorativni kamen' ohne KamenPro zu finden",
                "Fehlende Produktpräsentation für 3 verschiedene Steinstrukturen",
                "Keine lokale SEO-Präsenz in Bijeljina, Brčko und Tuzla",
                "Verlust potenzieller Kunden an digital präsente Konkurrenz"
            ]
        },

        solution: {
            title: "Der Lösungsansatz",
            description: "Eine moderne PWA mit Multi-Location SEO-Strategie für maximale lokale Sichtbarkeit",
            content: "Wir entwickelten eine hochperformante Progressive Web App, die die handwerkliche Qualität von KamenPro digital erlebbar macht. Der Fokus lag auf lokaler Auffindbarkeit in drei Städten und einer optimalen Produktpräsentation für Bauherren und Architekten.",
            points: [
                "Multi-Location SEO für Bijeljina, Brčko und Tuzla",
                "Produktkatalog mit HD-Bildern der Steinstrukturen",
                "PWA für Offline-Verfügbarkeit auf Baustellen",
                "Supabase-Backend für Produktverwaltung und Anfragen",
                "Schema.org LocalBusiness für optimale Google-Präsenz"
            ]
        },

        technical: {
            title: "Technische Implementierung",
            description: "Multi-Location SEO-Architektur mit standortspezifischen Landing Pages:",
            points: [
                "Standort-basiertes Routing für 3 Städte",
                "Produktkatalog-System mit Supabase",
                "Bildoptimierung für schwere Steinstruktur-Fotos",
                "PWA für Offline-Produktkatalog",
                "Schema.org LocalBusiness für jede Stadt"
            ],
            code: `// Multi-Location SEO mit Schema.org
const LocationPage: React.FC<{city: string}> = ({ city }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": \`KamenPro \${city}\`,
    "description": \`Dekorativni kamen i fasadne obloge u \${city}\`,
    "telephone": "+387 65 678 634",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressCountry": "BA"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoRadius": "50000"
    }
  };

  return (
    <>
      <Helmet>
        <title>Dekorativni kamen {city} | KamenPro</title>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <LocationHero city={city} />
      <ProductShowcase />
      <ContactSection city={city} />
    </>
  );
};

// Produktverwaltung mit Supabase
interface StoneProduct {
  id: string;
  name: string;
  type: 'decorative_stone' | 'rustic_brick';
  dimensions: { length: 44, width: 8.5, thickness: 15 };
  price_per_m2: number; // 33-40 BAM
  weight_per_m2: 32; // kg
  textures: string[]; // 3 verschiedene
  available_colors: string[];
}`
        },

        implementation: {
            title: "Lokale SEO-Erfolge",
            description: "Durch gezielte Multi-Location-Optimierung erreichten wir Top-Rankings:",
            points: [
                "Rank #1 für 'dekorativni kamen bijeljina'",
                "Rank #2 für 'fasadne obloge brčko'",
                "Rank #1 für 'rustik cigla tuzla'",
                "Google My Business Integration für alle Standorte",
                "Lokale Backlinks von Bauunternehmen"
            ]
        },

        results: {
            title: "Messbare Geschäftsergebnisse",
            description: "Die digitale Transformation brachte beeindruckende Ergebnisse:",
            points: [
                "300% mehr Anfragen in den ersten 3 Monaten",
                "Von 0 auf Platz 1-3 bei lokalen Suchanfragen",
                "45 Anfragen/Monat statt vorher ~12",
                "25-30 Projekte/Quartal statt 8-10",
                "ROI von 275% in 6 Monaten",
                "Expansion in neue Märkte durch Online-Präsenz"
            ]
        },

        conclusion: "Die digitale Transformation von KamenPro zeigt eindrucksvoll, wie ein traditioneller Handwerksbetrieb durch moderne Webtechnologie neue Märkte erschließen kann. Die Kombination aus Multi-Location SEO, optimierter Produktpräsentation und technischer Exzellenz führte zu einer Verdreifachung der Kundenanfragen. Besonders bemerkenswert: Ein lokaler Steinverkleidungs-Hersteller aus Bijeljina erreicht nun Kunden in der gesamten Region - ein Beweis dafür, dass durchdachte Digitalisierung auch im traditionellen Handwerk messbare Erfolge bringt."
    }
};

// Re-export für Kompatibilität mit dem Projektimport-System
export default kamenpro;