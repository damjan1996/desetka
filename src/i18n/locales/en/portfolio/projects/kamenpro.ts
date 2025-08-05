// src/i18n/locales/en/portfolio/projects/kamenpro.ts
export const kamenpro = {
    meta: {
        slug: 'kamenpro',
        title: "KamenPro: Digital Transformation for Decorative Stone Cladding",
        description: "Development of a modern multi-location PWA for a decorative stone cladding manufacturer from Bijeljina using React 18.3 and Supabase",
        excerpt: "From stone to pixel: How a traditional craft business generates 300% more inquiries through modern web technology.",
        date: "2024-11",
        category: "Web Development",
        client: "KamenPro - Željko",
        duration: "3 months",
        url: "https://kamenpro.net",
        repository: "",
        documentation: "",
        published: true,
        featured: true,
        technologies: ["React 18.3", "TypeScript", "Vite", "Supabase", "Framer Motion", "TailwindCSS", "PWA", "Schema.org"],
        tags: ["Multi-Location SEO", "E-Commerce", "PWA", "Local Business", "Performance"]
    },
    content: {
        intro: "KamenPro, an established manufacturer of decorative stone cladding from Bijeljina, faced the challenge of bringing their traditional craft into the digital world. This case study shows how modern web technology helped a local craft business achieve regional success.",

        challenge: {
            title: "The Challenge",
            description: "As a manufacturer of high-quality stone cladding made from white cement, KamenPro lacked the digital presence to compete with online competition.",
            points: [
                "No digital presence despite high online demand",
                "Customers searched online for 'dekorativni kamen' without finding KamenPro",
                "Missing product presentation for 3 different stone textures",
                "No local SEO presence in Bijeljina, Brčko and Tuzla",
                "Loss of potential customers to digitally present competition"
            ]
        },

        solution: {
            title: "The Solution Approach",
            description: "A modern PWA with multi-location SEO strategy for maximum local visibility",
            content: "We developed a high-performance Progressive Web App that makes KamenPro's craftsmanship digitally tangible. The focus was on local discoverability in three cities and optimal product presentation for builders and architects.",
            points: [
                "Multi-location SEO for Bijeljina, Brčko and Tuzla",
                "Product catalog with HD images of stone textures",
                "PWA for offline availability on construction sites",
                "Supabase backend for product management and inquiries",
                "Schema.org LocalBusiness for optimal Google presence"
            ]
        },

        technical: {
            title: "Technical Implementation",
            description: "Multi-location SEO architecture with location-specific landing pages:",
            points: [
                "Location-based routing for 3 cities",
                "Product catalog system with Supabase",
                "Image optimization for heavy stone texture photos",
                "PWA for offline product catalog",
                "Schema.org LocalBusiness for each city"
            ],
            code: `// Multi-location SEO with Schema.org
const LocationPage: React.FC<{city: string}> = ({ city }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": \`KamenPro \${city}\`,
    "description": \`Decorative stone and facade cladding in \${city}\`,
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
        <title>Decorative Stone {city} | KamenPro</title>
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

// Product management with Supabase
interface StoneProduct {
  id: string;
  name: string;
  type: 'decorative_stone' | 'rustic_brick';
  dimensions: { length: 44, width: 8.5, thickness: 15 };
  price_per_m2: number; // 33-40 BAM
  weight_per_m2: 32; // kg
  textures: string[]; // 3 different
  available_colors: string[];
}`
        },

        implementation: {
            title: "Local SEO Success",
            description: "Through targeted multi-location optimization, we achieved top rankings:",
            points: [
                "Rank #1 for 'dekorativni kamen bijeljina'",
                "Rank #2 for 'fasadne obloge brčko'",
                "Rank #1 for 'rustik cigla tuzla'",
                "Google My Business integration for all locations",
                "Local backlinks from construction companies"
            ]
        },

        results: {
            title: "Measurable Business Results",
            description: "The digital transformation delivered impressive results:",
            points: [
                "300% more inquiries in the first 3 months",
                "From 0 to rank 1-3 for local searches",
                "45 inquiries/month instead of ~12 previously",
                "25-30 projects/quarter instead of 8-10",
                "ROI of 275% in 6 months",
                "Expansion into new markets through online presence"
            ]
        },

        conclusion: "KamenPro's digital transformation impressively shows how a traditional craft business can open up new markets through modern web technology. The combination of multi-location SEO, optimized product presentation and technical excellence led to a tripling of customer inquiries. Particularly remarkable: A local stone cladding manufacturer from Bijeljina now reaches customers throughout the region - proof that thoughtful digitalization brings measurable success even in traditional crafts."
    }
};

// Re-export for compatibility with the project import system
export default kamenpro;