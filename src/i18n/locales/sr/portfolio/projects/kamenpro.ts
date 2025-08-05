// src/i18n/locales/sr/portfolio/projects/kamenpro.ts
export const kamenpro = {
    meta: {
        slug: 'kamenpro',
        title: "KamenPro: Digitalna transformacija za dekorativni kamen",
        description: "Razvoj moderne multi-lokacijske PWA aplikacije za proizvođača dekorativnog kamena iz Bijeljine koristeći React 18.3 i Supabase",
        excerpt: "Od kamena do piksela: Kako tradicionalna zanatska radnja generiše 300% više upita kroz modernu web tehnologiju.",
        date: "2024-11",
        category: "Web Development",
        client: "KamenPro - Željko",
        duration: "3 meseca",
        url: "https://kamenpro.net",
        repository: "",
        documentation: "",
        published: true,
        featured: true,
        technologies: ["React 18.3", "TypeScript", "Vite", "Supabase", "Framer Motion", "TailwindCSS", "PWA", "Schema.org"],
        tags: ["Multi-Location SEO", "E-Commerce", "PWA", "Lokalni biznis", "Performance"]
    },
    content: {
        intro: "KamenPro, etablirani proizvođač dekorativnog kamena iz Bijeljine, suočio se sa izazovom prenošenja svog tradicionalnog zanata u digitalni svet. Ova studija slučaja pokazuje kako moderna web tehnologija pomaže lokalnoj zanatskoj radnji da postigne regionalni uspeh.",

        challenge: {
            title: "Izazov",
            description: "Kao proizvođač visokokvalitetnih kamenih obloga od belog cementa, KamenPro-u je nedostajala digitalna prezentacija za takmičenje sa online konkurencijom.",
            points: [
                "Bez digitalne prezentacije uprkos visokoj online potražnji",
                "Kupci su tražili 'dekorativni kamen' bez pronalaženja KamenPro",
                "Nedostaje prezentacija proizvoda za 3 različite teksture kamena",
                "Bez lokalne SEO prezentacije u Bijeljini, Brčkom i Tuzli",
                "Gubitak potencijalnih kupaca zbog digitalno prisutne konkurencije"
            ]
        },

        solution: {
            title: "Pristup rešenju",
            description: "Moderna PWA sa multi-lokacijskom SEO strategijom za maksimalnu lokalnu vidljivost",
            content: "Razvili smo visoko-performantnu Progressive Web aplikaciju koja čini KamenPro-ov zanat digitalno opipljivim. Fokus je bio na lokalnoj vidljivosti u tri grada i optimalnoj prezentaciji proizvoda za graditelje i arhitekte.",
            points: [
                "Multi-lokacijski SEO za Bijeljinu, Brčko i Tuzlu",
                "Katalog proizvoda sa HD slikama tekstura kamena",
                "PWA za offline dostupnost na gradilištima",
                "Supabase backend za upravljanje proizvodima i upitima",
                "Schema.org LocalBusiness za optimalnu Google prezentaciju"
            ]
        },

        technical: {
            title: "Tehnička implementacija",
            description: "Multi-lokacijska SEO arhitektura sa lokacijski specifičnim landing stranicama:",
            points: [
                "Rutiranje bazirano na lokaciji za 3 grada",
                "Sistem kataloga proizvoda sa Supabase",
                "Optimizacija slika za teške fotografije teksture kamena",
                "PWA za offline katalog proizvoda",
                "Schema.org LocalBusiness za svaki grad"
            ],
            code: `// Multi-lokacijski SEO sa Schema.org
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

// Upravljanje proizvodima sa Supabase
interface StoneProduct {
  id: string;
  name: string;
  type: 'decorative_stone' | 'rustic_brick';
  dimensions: { length: 44, width: 8.5, thickness: 15 };
  price_per_m2: number; // 33-40 BAM
  weight_per_m2: 32; // kg
  textures: string[]; // 3 različite
  available_colors: string[];
}`
        },

        implementation: {
            title: "Lokalni SEO uspesi",
            description: "Kroz ciljanu multi-lokacijsku optimizaciju postigli smo top rangiranja:",
            points: [
                "Rang #1 za 'dekorativni kamen bijeljina'",
                "Rang #2 za 'fasadne obloge brčko'",
                "Rang #1 za 'rustik cigla tuzla'",
                "Google My Business integracija za sve lokacije",
                "Lokalni backlink-ovi od građevinskih kompanija"
            ]
        },

        results: {
            title: "Merljivi poslovni rezultati",
            description: "Digitalna transformacija donela je impresivne rezultate:",
            points: [
                "300% više upita u prva 3 meseca",
                "Od 0 do ranga 1-3 za lokalne pretrage",
                "45 upita/mesec umesto prethodnih ~12",
                "25-30 projekata/kvartal umesto 8-10",
                "ROI od 275% za 6 meseci",
                "Ekspanzija na nova tržišta kroz online prisustvo"
            ]
        },

        conclusion: "Digitalna transformacija KamenPro impresivno pokazuje kako tradicionalna zanatska radnja može otvoriti nova tržišta kroz modernu web tehnologiju. Kombinacija multi-lokacijskog SEO, optimizovane prezentacije proizvoda i tehničke izvrsnosti dovela je do utrostručavanja upita kupaca. Posebno značajno: lokalni proizvođač kamenih obloga iz Bijeljine sada dostiže kupce u celom regionu - dokaz da promišljena digitalizacija donosi merljive uspehe čak i u tradicionalnom zanatu."
    }
};

// Re-export za kompatibilnost sa sistemom uvoza projekata
export default kamenpro;