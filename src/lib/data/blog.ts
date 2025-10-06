import { BlogPost } from '@/types';
import { Language } from '../i18n/config';

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'die-reise-von-desetka',
        title: 'The Journey of Desetka: From 0 to 100',
        excerpt: 'How a mysterious masked persona revolutionizes Balkan Synthwave.',
        content: `
# The Journey of Desetka: From 0 to 100

The story begins with a vision: 80s Synthwave meets 90s Balkan nostalgia...

## The Beginning

It was 2024 when the idea was born. The longing for the 90s, combined with the fascination for Synthwave culture, led to the birth of Desetka.

### The Inspiration

The 90s in the Balkans were a special time. An era full of contrasts, emotions and unforgettable music. These memories should not fade, but be cast into a new form.

## The Music

Every track tells a story. From "Svetla Severa" to "Retro Snovi" - every melody is a time capsule that takes you back to a time that never really ends.

### The Process

1. **Creation**: AI-powered music production with Suno
2. **Production**: Manual post-production for perfect sound
3. **Distribution**: Multi-platform release
4. **Promotion**: Community building through TikTok, Instagram, YouTube

## The Future

The journey has just begun. From 549K views to millions, from small clubs to big festivals - Desetka is ready to revolutionize the Synthwave scene.
    `,
        coverImage: '/images/blog/desetka-journey.jpg',
        author: 'Desetka',
        publishedAt: '2025-01-15',
        category: 'Story',
        tags: ['Synthwave', 'Balkan', 'Music', 'Nostalgia'],
        readingTime: '5 min',
        translations: {
            de: {
                title: 'Die Reise von Desetka: Von 0 auf 100',
                excerpt: 'Wie eine mysteriöse Masken-Persona den Balkan-Synthwave revolutioniert.',
                content: `
# Die Reise von Desetka: Von 0 auf 100

Die Geschichte beginnt mit einer Vision: 80er Synthwave trifft auf 90er Balkan-Nostalgie...

## Der Anfang

Es war 2024, als die Idee geboren wurde. Die Sehnsucht nach den 90ern, kombiniert mit der Faszination für Synthwave-Kultur, führte zur Geburt von Desetka.

### Die Inspiration

Die 90er Jahre auf dem Balkan waren eine besondere Zeit. Eine Ära voller Kontraste, Emotionen und unvergesslicher Musik. Diese Erinnerungen sollten nicht verblassen, sondern in eine neue Form gegossen werden.

## Die Musik

Jeder Track erzählt eine Geschichte. Von "Svetla Severa" bis "Retro Snovi" - jede Melodie ist eine Zeitkapsel, die dich zurück in eine Zeit bringt, die nie wirklich endet.

### Der Prozess

1. **Kreation**: AI-gestützte Musikproduktion mit Suno
2. **Produktion**: Manuelle Post-Production für den perfekten Sound
3. **Distribution**: Multi-Plattform Release
4. **Promotion**: Community-Building durch TikTok, Instagram, YouTube

## Die Zukunft

Die Reise hat gerade erst begonnen. Von 549K Views zu Millionen, von kleinen Clubs zu großen Festivals - Desetka ist bereit, die Synthwave-Szene zu revolutionieren.
    `,
                category: 'Story',
                tags: ['Synthwave', 'Balkan', 'Musik', 'Nostalgie']
            },
            en: {
                title: 'The Journey of Desetka: From 0 to 100',
                excerpt: 'How a mysterious masked persona revolutionizes Balkan Synthwave.',
                content: `
# The Journey of Desetka: From 0 to 100

The story begins with a vision: 80s Synthwave meets 90s Balkan nostalgia...

## The Beginning

It was 2024 when the idea was born. The longing for the 90s, combined with the fascination for Synthwave culture, led to the birth of Desetka.

### The Inspiration

The 90s in the Balkans were a special time. An era full of contrasts, emotions and unforgettable music. These memories should not fade, but be cast into a new form.

## The Music

Every track tells a story. From "Svetla Severa" to "Retro Snovi" - every melody is a time capsule that takes you back to a time that never really ends.

### The Process

1. **Creation**: AI-powered music production with Suno
2. **Production**: Manual post-production for perfect sound
3. **Distribution**: Multi-platform release
4. **Promotion**: Community building through TikTok, Instagram, YouTube

## The Future

The journey has just begun. From 549K views to millions, from small clubs to big festivals - Desetka is ready to revolutionize the Synthwave scene.
    `,
                category: 'Story',
                tags: ['Synthwave', 'Balkan', 'Music', 'Nostalgia']
            },
            sr: {
                title: 'Put Desetka: Od 0 do 100',
                excerpt: 'Kako misteriozna ličnost sa maskom revolucioniše balkanski Synthwave.',
                content: `
# Put Desetka: Od 0 do 100

Priča počinje sa vizijom: 80-ih Synthwave sreće 90-ih balkansku nostalgiju...

## Početak

Bila je 2024. kada je ideja rođena. Čežnja za 90-ima, kombinovana sa fascincijom Synthwave kulturom, dovela je do rođenja Desetka.

### Inspiracija

90-e na Balkanu su bile posebno vreme. Era puna kontrasta, emocija i nezaboravne muzike. Ove uspomene ne treba da blede, već da budu ulite u novi oblik.

## Muzika

Svaka pesma priča priču. Od "Svetla Severa" do "Retro Snovi" - svaka melodija je vremenska kapsula koja te vraća u vreme koje nikad zaista ne završava.

### Proces

1. **Kreacija**: AI-bazirana muzička produkcija sa Suno
2. **Produkcija**: Ručna post-produkcija za savršen zvuk
3. **Distribucija**: Multi-platformsko izdanje
4. **Promocija**: Izgradnja zajednice kroz TikTok, Instagram, YouTube

## Budućnost

Putovanje je tek počelo. Od 549K pregleda do miliona, od malih klubova do velikih festivala - Desetka je spremna da revolucioniše Synthwave scenu.
    `,
                category: 'Priča',
                tags: ['Synthwave', 'Balkan', 'Muzika', 'Nostalgija']
            }
        }
    },
    {
        id: '2',
        slug: 'synthwave-production-guide',
        title: 'Synthwave Production: My Workflow',
        excerpt: 'A look behind the scenes: How I produce Synthwave tracks.',
        content: `
# Synthwave Production: My Workflow

In this guide I show you how I create my Synthwave tracks - from the first idea to the finished master.

## Tools & Tech Stack

### AI Production
- **Suno AI**: For initial track generation
- Precise prompts for Synthwave sound
- Integration of Balkan melodies

### Post-Production
- **Audacity**: EQ, Compression, Mastering
- **VHS Effects**: For nostalgic touch
- **Sample Integration**: 90s Balkan sounds

## The Workflow

### 1. Conception (30 Min)
- Define theme
- Define mood (nostalgic, melancholic, euphoric)
- Choose BPM (100-120 for Synthwave)

### 2. AI Generation (1 Hour)
- Create Suno prompts
- Generate multiple variants
- Select best version

### 3. Post-Production (2-3 Hours)
- Mastering in Audacity
- Add VHS effects
- Integrate Balkan samples
- Create variants (Original, Slowed, Extended)

### 4. Distribution (1 Hour)
- Upload to all platforms
- Optimize metadata
- Create artwork

## Tips for Beginners

1. **Start Simple**: Don't start too complex
2. **Nostalgia is Key**: Build in real emotions
3. **Quality > Quantity**: Better one good track than ten mediocre ones
4. **Community**: Get feedback and learn

The magic lies in the details. Every track needs time, love and attention.
    `,
        coverImage: '/images/blog/synthwave-production.jpg',
        author: 'Desetka',
        publishedAt: '2025-01-22',
        category: 'Tutorial',
        tags: ['Production', 'Synthwave', 'Tutorial', 'DAW'],
        readingTime: '8 min',
        translations: {
            de: {
                title: 'Synthwave Production: Mein Workflow',
                excerpt: 'Ein Blick hinter die Kulissen: Wie ich Synthwave-Tracks produziere.',
                content: `
# Synthwave Production: Mein Workflow

In diesem Guide zeige ich euch, wie ich meine Synthwave-Tracks kreiere - von der ersten Idee bis zum fertigen Master.

## Tools & Tech Stack

### AI Production
- **Suno AI**: Für die initiale Track-Generierung
- Präzise Prompts für Synthwave-Sound
- Integration von Balkan-Melodien

### Post-Production
- **Audacity**: EQ, Compression, Mastering
- **VHS-Effekte**: Für den nostalgischen Touch
- **Sample-Integration**: 90er Balkan-Sounds

## Der Workflow

### 1. Konzeption (30 Min)
- Thema festlegen
- Mood definieren (nostalgisch, melancholisch, euphorisch)
- BPM wählen (100-120 für Synthwave)

### 2. AI-Generation (1 Stunde)
- Suno-Prompts erstellen
- Mehrere Varianten generieren
- Beste Version auswählen

### 3. Post-Production (2-3 Stunden)
- Mastering in Audacity
- VHS-Effekte hinzufügen
- Balkan-Samples integrieren
- Varianten erstellen (Original, Slowed, Extended)

### 4. Distribution (1 Stunde)
- Upload auf alle Plattformen
- Metadaten optimieren
- Artwork erstellen

## Tipps für Anfänger

1. **Start Simple**: Nicht zu komplex anfangen
2. **Nostalgie ist Key**: Echte Emotionen einbauen
3. **Qualität > Quantität**: Lieber ein guter Track als zehn mittelmäßige
4. **Community**: Feedback einholen und lernen

Die Magie liegt im Detail. Jeder Track braucht Zeit, Liebe und Aufmerksamkeit.
    `,
                category: 'Tutorial',
                tags: ['Production', 'Synthwave', 'Tutorial', 'DAW']
            },
            en: {
                title: 'Synthwave Production: My Workflow',
                excerpt: 'A look behind the scenes: How I produce Synthwave tracks.',
                content: `
# Synthwave Production: My Workflow

In this guide I show you how I create my Synthwave tracks - from the first idea to the finished master.

## Tools & Tech Stack

### AI Production
- **Suno AI**: For initial track generation
- Precise prompts for Synthwave sound
- Integration of Balkan melodies

### Post-Production
- **Audacity**: EQ, Compression, Mastering
- **VHS Effects**: For nostalgic touch
- **Sample Integration**: 90s Balkan sounds

## The Workflow

### 1. Conception (30 Min)
- Define theme
- Define mood (nostalgic, melancholic, euphoric)
- Choose BPM (100-120 for Synthwave)

### 2. AI Generation (1 Hour)
- Create Suno prompts
- Generate multiple variants
- Select best version

### 3. Post-Production (2-3 Hours)
- Mastering in Audacity
- Add VHS effects
- Integrate Balkan samples
- Create variants (Original, Slowed, Extended)

### 4. Distribution (1 Hour)
- Upload to all platforms
- Optimize metadata
- Create artwork

## Tips for Beginners

1. **Start Simple**: Don't start too complex
2. **Nostalgia is Key**: Build in real emotions
3. **Quality > Quantity**: Better one good track than ten mediocre ones
4. **Community**: Get feedback and learn

The magic lies in the details. Every track needs time, love and attention.
    `,
                category: 'Tutorial',
                tags: ['Production', 'Synthwave', 'Tutorial', 'DAW']
            },
            sr: {
                title: 'Synthwave produkcija: Moj radni tok',
                excerpt: 'Pogled iza kulisa: Kako pravim Synthwave pesme.',
                content: `
# Synthwave produkcija: Moj radni tok

U ovom vodiču pokazujem kako kreiram moje Synthwave pesme - od prve ideje do gotovog mastera.

## Alati i Tech Stack

### AI Produkcija
- **Suno AI**: Za inicijalno generisanje pesama
- Precizni promptovi za Synthwave zvuk
- Integracija balkanskih melodija

### Post-produkcija
- **Audacity**: EQ, kompresija, mastering
- **VHS efekti**: Za nostalgični dodir
- **Integracija semplova**: 90-ih balkanski zvukovi

## Radni tok

### 1. Koncepcija (30 min)
- Definisati temu
- Definisati raspoloženje (nostalgično, melanholično, euforično)
- Izabrati BPM (100-120 za Synthwave)

### 2. AI generisanje (1 sat)
- Kreirati Suno promptove
- Generisati više varijanti
- Odabrati najbolju verziju

### 3. Post-produkcija (2-3 sata)
- Mastering u Audacity
- Dodati VHS efekte
- Integrisati balkanske semplove
- Kreirati varijante (Original, Usporeno, Prošireno)

### 4. Distribucija (1 sat)
- Otpremiti na sve platforme
- Optimizovati metapodatke
- Kreirati grafike

## Saveti za početnike

1. **Počni jednostavno**: Ne počinji previše složeno
2. **Nostalgija je ključ**: Ugradi prave emocije
3. **Kvalitet > Količina**: Bolje jedna dobra pesma nego deset osrednjih
4. **Zajednica**: Traži povratne informacije i uči

Magija leži u detaljima. Svaka pesma treba vreme, ljubav i pažnju.
    `,
                category: 'Tutorijal',
                tags: ['Produkcija', 'Synthwave', 'Tutorijal', 'DAW']
            }
        }
    },
    {
        id: '3',
        slug: '90er-nostalgie-balkan',
        title: '90s Nostalgia: The Balkan Feeling',
        excerpt: 'Why the 90s in the Balkans were such a special time.',
        content: `
# 90s Nostalgia: The Balkan Feeling

The 90s in the Balkans - a time full of contrasts, emotions and unforgettable moments.

## The Music

### Turbo-Folk Era
The 90s were shaped by Turbo-Folk. Ceca, Lepa Brena, Alen Islamović - these names are more than just music. They are memories.

### The First CDs
The switch from cassettes to CDs. The feeling of buying your first CD - priceless.

## The Culture

### TV Shows
- Slagalica
- Maximalno Opušteno
- Yugoslav Films

### Technology
- Tamagotchi
- Game Boy
- First computers (Amiga, Commodore)
- VHS cassettes

## The Atmosphere

It was a time of innocence, despite all challenges. Children played outside until it got dark. Neighbors knew each other. The community was family.

### Memories
- Ice cream vendor in summer
- Football on the street
- First love
- School trips
- Sunday family dinners

## Why This Nostalgia is Important

These memories define us. They show where we come from and who we are. Desetka honors this time not out of melancholy, but out of respect.

The 90s in the Balkans weren't perfect, but they were OUR time. And this time deserves to be transformed into music.
    `,
        coverImage: '/images/blog/90er-balkan.jpg',
        author: 'Desetka',
        publishedAt: '2025-02-01',
        category: 'Culture',
        tags: ['90s', 'Balkan', 'Nostalgia', 'Culture'],
        readingTime: '6 min',
        translations: {
            de: {
                title: '90er Nostalgie: Das Balkan-Gefühl',
                excerpt: 'Warum die 90er auf dem Balkan so eine besondere Zeit waren.',
                content: `
# 90er Nostalgie: Das Balkan-Gefühl

Die 90er Jahre auf dem Balkan - eine Zeit voller Gegensätze, Emotionen und unvergesslicher Momente.

## Die Musik

### Turbo-Folk Ära
Die 90er waren geprägt von Turbo-Folk. Ceca, Lepa Brena, Alen Islamović - diese Namen sind mehr als nur Musik. Sie sind Erinnerungen.

### Die ersten CDs
Der Wechsel von Kassetten zu CDs. Das Gefühl, die erste CD zu kaufen - unbezahlbar.

## Die Kultur

### TV-Shows
- Slagalica
- Maximalno Opušteno
- Jugoslovenski Filmovi

### Technologie
- Tamagotchi
- Game Boy
- Erste Computer (Amiga, Commodore)
- VHS-Kassetten

## Die Atmosphäre

Es war eine Zeit der Unschuld, trotz aller Herausforderungen. Kinder spielten draußen bis es dunkel wurde. Nachbarn kannten sich. Die Community war Familie.

### Erinnerungen
- Eisverkäufer im Sommer
- Fußball auf der Straße
- Erste Liebe
- Schulausflüge
- Familienessen am Sonntag

## Warum diese Nostalgie wichtig ist

Diese Erinnerungen definieren uns. Sie zeigen, woher wir kommen und wer wir sind. Desetka ehrt diese Zeit nicht aus Melancholie, sondern aus Respekt.

Die 90er auf dem Balkan waren nicht perfekt, aber sie waren UNSERE Zeit. Und diese Zeit verdient es, in Musik verwandelt zu werden.
    `,
                category: 'Kultur',
                tags: ['90er', 'Balkan', 'Nostalgie', 'Kultur']
            },
            en: {
                title: '90s Nostalgia: The Balkan Feeling',
                excerpt: 'Why the 90s in the Balkans were such a special time.',
                content: `
# 90s Nostalgia: The Balkan Feeling

The 90s in the Balkans - a time full of contrasts, emotions and unforgettable moments.

## The Music

### Turbo-Folk Era
The 90s were shaped by Turbo-Folk. Ceca, Lepa Brena, Alen Islamović - these names are more than just music. They are memories.

### The First CDs
The switch from cassettes to CDs. The feeling of buying your first CD - priceless.

## The Culture

### TV Shows
- Slagalica
- Maximalno Opušteno
- Yugoslav Films

### Technology
- Tamagotchi
- Game Boy
- First computers (Amiga, Commodore)
- VHS cassettes

## The Atmosphere

It was a time of innocence, despite all challenges. Children played outside until it got dark. Neighbors knew each other. The community was family.

### Memories
- Ice cream vendor in summer
- Football on the street
- First love
- School trips
- Sunday family dinners

## Why This Nostalgia is Important

These memories define us. They show where we come from and who we are. Desetka honors this time not out of melancholy, but out of respect.

The 90s in the Balkans weren't perfect, but they were OUR time. And this time deserves to be transformed into music.
    `,
                category: 'Culture',
                tags: ['90s', 'Balkan', 'Nostalgia', 'Culture']
            },
            sr: {
                title: '90-ih nostalgija: Balkansko osećanje',
                excerpt: 'Zašto su 90-e na Balkanu bile tako posebno vreme.',
                content: `
# 90-ih nostalgija: Balkansko osećanje

90-e na Balkanu - vreme puno kontrasta, emocija i nezaboravnih momenata.

## Muzika

### Turbo-folk era
90-e su bile oblikovane turbo-folkom. Ceca, Lepa Brena, Alen Islamović - ova imena su više od muzike. Oni su uspomene.

### Prvi CD-ovi
Prelazak sa kaseta na CD-ove. Osećaj kupovine prvog CD-a - neprocenjiv.

## Kultura

### TV emisije
- Slagalica
- Maksimalno opušteno
- Jugoslovenski filmovi

### Tehnologija
- Tamagoči
- Game Boy
- Prvi kompjuteri (Amiga, Commodore)
- VHS kasete

## Atmosfera

Bilo je to vreme nevinosti, uprkos svim izazovima. Deca su se igrala napolju dok nije palo mrak. Komšije su se poznavale. Zajednica je bila porodica.

### Uspomene
- Sladoledžija leti
- Fudbal na ulici
- Prva ljubav
- Školski izleti
- Nedeljni porodični ručkovi

## Zašto je ova nostalgija važna

Ove uspomene nas definišu. One pokazuju odakle dolazimo i ko smo. Desetka poštuje ovo vreme ne iz melanholije, već iz poštovanja.

90-e na Balkanu nisu bile savršene, ali su bile NAŠE vreme. I to vreme zaslužuje da bude transformisano u muziku.
    `,
                category: 'Kultura',
                tags: ['90-e', 'Balkan', 'Nostalgija', 'Kultura']
            }
        }
    },
];

export const getFeaturedPosts = (): BlogPost[] => {
    return blogPosts.slice(0, 3);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find((post) => post.slug === slug);
};

export const getLocalizedPost = (post: BlogPost, language: Language): BlogPost => {
    console.log(`[Blog] getLocalizedPost called with language: ${language}, post id: ${post.id}`);
    console.log(`[Blog] Available translations:`, Object.keys(post.translations || {}));
    
    // Always prioritize translations over main fields
    if (post.translations && post.translations[language]) {
        console.log(`[Blog] Using translation for ${language}`);
        const translation = post.translations[language];
        return {
            ...post,
            title: translation.title,
            excerpt: translation.excerpt,
            content: translation.content,
            category: translation.category,
            tags: translation.tags,
        };
    }
    
    console.log(`[Blog] No translation found for ${language}, using main fields (English)`);
    // If requested language not available, fall back to English (main fields)
    return {
        ...post,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        tags: post.tags,
    };
};