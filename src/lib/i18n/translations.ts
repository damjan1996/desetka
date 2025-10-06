import { Language } from './config';

export interface TranslationKeys {
  // Navigation
  nav: {
    home: string;
    about: string;
    music: string;
    blog: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    subtitle: string;
    music: string;
    about: string;
    faq: string;
    contact_cta: string;
    skip_content: string;
  };
  
  // Music Section
  music: {
    title: string;
    subtitle: string;
    play: string;
    pause: string;
    previous: string;
    next: string;
    stream_on: string;
    spotify: string;
    youtube: string;
    soundcloud: string;
    view_all: string;
    mute: string;
    unmute: string;
    all_songs_title: string;
    all_songs_subtitle: string;
  };
  
  // About Section
  about: {
    title: string;
    description1: string;
    description2: string;
    views: string;
    followers: string;
    tracks: string;
    budget: string;
    views_per_euro: string;
    learn_more: string;
  };
  
  // FAQ Section
  faq: {
    title: string;
    subtitle: string;
    contact_cta: string;
    contact_button: string;
    items: Array<{
      id: string;
      question: string;
      answer: string;
      category: string;
    }>;
  };
  
  // Footer
  footer: {
    tagline: string;
    music: string;
    all_songs: string;
    about_section: string;
    about_me: string;
    connect: string;
    rights_reserved: string;
    imprint: string;
    privacy: string;
  };
  
  // Linktree
  linktree: {
    title: string;
    subtitle: string;
    youtube_music: string;
    spotify: string;
    soundcloud: string;
    instagram: string;
    tiktok: string;
  };
  
  // Contact
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
    connect_title: string;
    connect_description: string;
    subject: string;
    name_placeholder: string;
    email_placeholder: string;
    subject_placeholder: string;
    message_placeholder: string;
    sending: string;
    sent: string;
    follow_me: string;
  };
  
  // Blog
  blog: {
    title: string;
    read_more: string;
    back_to_blog: string;
    subtitle: string;
    featured: string;
    read_now: string;
    author: string;
    share_post: string;
    no_posts: string;
    post_not_found: string;
    more_posts: string;
  };
  
  // About Page
  aboutPage: {
    hero: {
      story: string;
      description1: string;
      description2: string;
      stats: {
        start: string;
        tracks: string;
        views: string;
      };
    };
    process: {
      title: string;
      subtitle: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
      techStack: {
        title: string;
        aiProduction: string;
        postProduction: string;
        videoEditing: string;
        distribution: string;
      };
    };
    inspiration: {
      title: string;
      subtitle: string;
      categories: {
        synthwave: string;
        balkan: string;
        visual: string;
      };
      quote: string;
      vision: {
        title: string;
        content: string;
      };
      mission: {
        title: string;
        content: string;
      };
    };
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    back: string;
  };
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      music: 'Music',
      blog: 'Blog',
      contact: 'Contact'
    },
    hero: {
      subtitle: 'SYNTHWAVE PRODUCER',
      music: 'Music',
      about: 'About',
      faq: 'FAQ',
      contact_cta: 'Get in touch',
      skip_content: 'Skip to content'
    },
    music: {
      title: 'Featured Tracks',
      subtitle: 'Discover the latest Synthwave hits from the Balkans',
      play: 'Play',
      pause: 'Pause',
      previous: 'Previous song',
      next: 'Next song',
      stream_on: 'Stream on:',
      spotify: 'Spotify',
      youtube: 'YouTube',
      soundcloud: 'SoundCloud',
      view_all: 'View all songs',
      mute: 'Mute',
      unmute: 'Unmute',
      all_songs_title: 'All Songs',
      all_songs_subtitle: 'Discover the complete Synthwave collection from Desetka'
    },
    about: {
      title: 'The mysterious persona behind the mask',
      description1: 'Desetka is more than just music — it\'s a journey through time. A fusion of 80s Synthwave and 90s Balkan nostalgia that speaks to an entire generation.',
      description2: 'The mask is not a hiding place, but a symbol. It represents collective memory, nostalgic feelings, and the longing for a time that never really passes.',
      views: 'Views',
      followers: 'Followers',
      tracks: 'Tracks',
      budget: 'No Ads',
      views_per_euro: 'Views/€',
      learn_more: 'More about Desetka'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about Desetka',
      contact_cta: 'Still have questions? Contact me!',
      contact_button: 'Get in touch',
      items: [
        {
          id: '1',
          question: 'Who is Desetka?',
          answer: 'Desetka is a mysterious masked persona from the Balkans who merges 80s Synthwave with 90s Serbian folk melodies. The name "Desetka" (10) symbolizes the perfect balance between past and future.',
          category: 'General'
        },
        {
          id: '2',
          question: 'What is Synthwave Balkan?',
          answer: 'Synthwave Balkan is a unique genre fusion that combines nostalgic 80s synthesizer sounds with traditional Balkan melodies from the 90s. It\'s a musical time travel that honors both eras.',
          category: 'Music'
        },
        {
          id: '3',
          question: 'Why a mask?',
          answer: 'The mask is not for hiding, but a symbol. It represents collective memory, nostalgic feelings, and the longing for a time that never really passes.',
          category: 'Identity'
        },
        {
          id: '4',
          question: 'Where can I listen to the music?',
          answer: 'All tracks are available on Spotify, YouTube Music, SoundCloud, Apple Music and other streaming platforms. You can find links in the Music section.',
          category: 'Music'
        },
        {
          id: '5',
          question: 'Are there live performances?',
          answer: 'Yes! Live shows are planned for 2025. The first gigs will take place in Belgrade, Zagreb and Sarajevo. Updates are available on Instagram and TikTok.',
          category: 'Events'
        },
        {
          id: '6',
          question: 'Can I book Desetka for an event?',
          answer: 'Yes, for booking inquiries please write to info@desetka.net. We play at festivals, club nights and special events.',
          category: 'Booking'
        }
      ]
    },
    footer: {
      tagline: 'Synthwave × 90s Balkan Nostalgia',
      music: 'Music',
      all_songs: 'All Songs',
      about_section: 'About',
      about_me: 'About me',
      connect: 'Connect',
      rights_reserved: 'All rights reserved.',
      imprint: 'Imprint',
      privacy: 'Privacy'
    },
    linktree: {
      title: 'DESETKA',
      subtitle: 'All links at a glance',
      youtube_music: 'YouTube Music',
      spotify: 'Spotify',
      soundcloud: 'SoundCloud',
      instagram: 'Instagram',
      tiktok: 'TikTok'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s create something amazing together',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
      connect_title: 'Let\'s Connect',
      connect_description: 'Whether for collabs, bookings, remixes or just to chat about Synthwave and 90s nostalgia – I\'m looking forward to hearing from you!',
      subject: 'Subject',
      name_placeholder: 'Your name',
      email_placeholder: 'your@email.com',
      subject_placeholder: 'What\'s it about?',
      message_placeholder: 'Your message...',
      sending: 'Sending...',
      sent: 'Message sent!',
      follow_me: 'Follow me on:'
    },
    blog: {
      title: 'Blog',
      read_more: 'Read more',
      back_to_blog: 'Back to Blog',
      subtitle: 'Stories, tutorials and insights into the world of Desetka',
      featured: 'Featured',
      read_now: 'Read now',
      author: 'Author',
      share_post: 'Share post',
      no_posts: 'No blog posts found. Come back soon!',
      post_not_found: 'Post not found',
      more_posts: 'More blog posts'
    },
    aboutPage: {
      hero: {
        story: 'The Story',
        description1: 'A mysterious masked persona from the heart of the Balkans. Desetka stands for the perfect balance between past and future – 10 as a symbol of perfection.',
        description2: 'Born from the longing for the 90s, nourished by the Synthwave of the 80s. Every track is a time capsule, every melody a memory, every beat a heartbeat of nostalgia.',
        stats: {
          start: 'Start',
          tracks: 'Tracks',
          views: 'Views'
        }
      },
      process: {
        title: 'The Creative Process',
        subtitle: 'From idea to finished track – this is how Synthwave Balkan is created',
        steps: [
          {
            title: 'Creation',
            description: 'AI-powered music production with Suno, combined with manual post-production for the perfect Synthwave sound.'
          },
          {
            title: 'Production',
            description: 'Mastering, VHS effects and Balkan samples are carefully integrated. Each track goes through multiple revisions.'
          },
          {
            title: 'Distribution',
            description: 'Multi-platform release on Spotify, YouTube, SoundCloud and Apple Music with optimized metadata.'
          },
          {
            title: 'Promotion',
            description: 'TikTok, Instagram and YouTube Shorts for maximum reach. New content for the community every day.'
          }
        ],
        techStack: {
          title: 'Tech Stack',
          aiProduction: 'AI Production',
          postProduction: 'Post-Production',
          videoEditing: 'Video Editing',
          distribution: 'Distribution'
        }
      },
      inspiration: {
        title: 'Inspirations & Influences',
        subtitle: 'The musical and visual roots of Desetka',
        categories: {
          synthwave: 'Synthwave Artists',
          balkan: '90s Balkan',
          visual: 'Visual Aesthetics'
        },
        quote: 'The mask is not for hiding. It is a symbol for the collective nostalgia of a generation.',
        vision: {
          title: 'Vision',
          content: 'Make Synthwave Balkan the dominant force in the electronic music scene in the Balkans. Create a movement that connects generations and transforms nostalgia into modern art.'
        },
        mission: {
          title: 'Mission',
          content: 'Produce authentic content every day that unites the soul of the Balkans with the aesthetics of the 80s. Make the community a family and grow together.'
        }
      }
    },
    common: {
      loading: 'Loading...',
      error: 'Something went wrong',
      back: 'Back'
    }
  },
  de: {
    nav: {
      home: 'Home',
      about: 'About',
      music: 'Musik',
      blog: 'Blog',
      contact: 'Kontakt'
    },
    hero: {
      subtitle: 'SYNTHWAVE PRODUCER',
      music: 'Musik',
      about: 'About',
      faq: 'FAQ',
      contact_cta: 'Kontakt aufnehmen',
      skip_content: 'Zum Inhalt springen'
    },
    music: {
      title: 'Featured Tracks',
      subtitle: 'Entdecke die neuesten Synthwave-Hits aus dem Balkan',
      play: 'Abspielen',
      pause: 'Pausieren',
      previous: 'Vorheriger Song',
      next: 'Nächster Song',
      stream_on: 'Stream auf:',
      spotify: 'Spotify',
      youtube: 'YouTube',
      soundcloud: 'SoundCloud',
      view_all: 'Alle Songs ansehen',
      mute: 'Stumm schalten',
      unmute: 'Ton einschalten',
      all_songs_title: 'Alle Songs',
      all_songs_subtitle: 'Entdecke die komplette Synthwave-Kollektion von Desetka'
    },
    about: {
      title: 'Die mysteriöse Persona hinter der Maske',
      description1: 'Desetka ist mehr als nur Musik — es ist eine Reise durch die Zeit. Eine Fusion aus 80er Synthwave und 90er Balkan-Nostalgie, die eine ganze Generation anspricht.',
      description2: 'Die Maske ist kein Versteck, sondern ein Symbol. Sie steht für die kollektive Erinnerung, die nostalgischen Gefühle und die Sehnsucht nach einer Zeit, die nie wirklich vergeht.',
      views: 'Views',
      followers: 'Followers',
      tracks: 'Tracks',
      budget: 'No Ads',
      views_per_euro: 'Views/€',
      learn_more: 'Mehr über Desetka'
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      subtitle: 'Alles was du über Desetka wissen musst',
      contact_cta: 'Noch Fragen? Schreib mir!',
      contact_button: 'Kontakt aufnehmen',
      items: [
        {
          id: '1',
          question: 'Wer ist Desetka?',
          answer: 'Desetka ist eine mysteriöse Masken-Persona aus dem Balkan, die 80er Synthwave mit 90er serbischen Folk-Melodien verschmilzt. Der Name "Desetka" (10) symbolisiert die perfekte Balance zwischen Vergangenheit und Zukunft.',
          category: 'Allgemein'
        },
        {
          id: '2',
          question: 'Was ist Synthwave Balkan?',
          answer: 'Synthwave Balkan ist eine einzigartige Genre-Fusion, die nostalgische 80er Synthesizer-Sounds mit traditionellen Balkan-Melodien aus den 90ern verbindet. Es ist eine musikalische Zeitreise, die beide Epochen ehrt.',
          category: 'Musik'
        },
        {
          id: '3',
          question: 'Warum eine Maske?',
          answer: 'Die Maske ist nicht zum Verstecken, sondern ein Symbol. Sie steht für die kollektive Erinnerung, die nostalgischen Gefühle und die Sehnsucht nach einer Zeit, die nie wirklich vergeht.',
          category: 'Identität'
        },
        {
          id: '4',
          question: 'Wo kann ich die Musik hören?',
          answer: 'Alle Tracks sind verfügbar auf Spotify, YouTube Music, SoundCloud, Apple Music und anderen Streaming-Plattformen. Links findest du in der Music-Section.',
          category: 'Musik'
        },
        {
          id: '5',
          question: 'Gibt es Live-Auftritte?',
          answer: 'Ja! Live-Shows sind geplant für 2025. Die ersten Gigs werden in Belgrad, Zagreb und Sarajevo stattfinden. Updates gibt es auf Instagram und TikTok.',
          category: 'Events'
        },
        {
          id: '6',
          question: 'Kann ich Desetka für ein Event buchen?',
          answer: 'Ja, für Booking-Anfragen schreibe bitte an info@desetka.net. Wir spielen bei Festivals, Club-Nächten und besonderen Events.',
          category: 'Booking'
        }
      ]
    },
    footer: {
      tagline: 'Synthwave × 90er Balkan Nostalgie',
      music: 'Musik',
      all_songs: 'Alle Songs',
      about_section: 'Über',
      about_me: 'Über mich',
      connect: 'Connect',
      rights_reserved: 'Alle Rechte vorbehalten.',
      imprint: 'Impressum',
      privacy: 'Datenschutz'
    },
    linktree: {
      title: 'DESETKA',
      subtitle: 'Alle Links auf einen Blick',
      youtube_music: 'YouTube Music',
      spotify: 'Spotify',
      soundcloud: 'SoundCloud',
      instagram: 'Instagram',
      tiktok: 'TikTok'
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Lass uns zusammen etwas Großartiges schaffen',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Nachricht senden',
      success: 'Nachricht erfolgreich gesendet!',
      connect_title: 'Let\'s Connect',
      connect_description: 'Ob für Collabs, Bookings, Remixes oder einfach nur zum Austausch über Synthwave und 90er Nostalgie – ich freue mich von Dir zu hören!',
      subject: 'Betreff',
      name_placeholder: 'Dein Name',
      email_placeholder: 'deine@email.com',
      subject_placeholder: 'Worum geht\'s?',
      message_placeholder: 'Deine Nachricht...',
      sending: 'Wird gesendet...',
      sent: 'Nachricht gesendet!',
      follow_me: 'Folge mir auf:'
    },
    blog: {
      title: 'Blog',
      read_more: 'Weiterlesen',
      back_to_blog: 'Zurück zum Blog',
      subtitle: 'Geschichten, Tutorials und Einblicke in die Welt von Desetka',
      featured: 'Featured',
      read_now: 'Jetzt lesen',
      author: 'Autor',
      share_post: 'Post teilen',
      no_posts: 'Keine Blog-Posts gefunden. Komme bald zurück!',
      post_not_found: 'Post nicht gefunden',
      more_posts: 'Weitere Blog-Posts'
    },
    aboutPage: {
      hero: {
        story: 'Die Geschichte',
        description1: 'Eine mysteriöse Masken-Persona aus dem Herzen des Balkans. Desetka steht für die perfekte Balance zwischen Vergangenheit und Zukunft – 10 als Symbol der Vollkommenheit.',
        description2: 'Geboren aus der Sehnsucht nach den 90ern, genährt vom Synthwave der 80er. Jeder Track ist eine Zeitkapsel, jede Melodie eine Erinnerung, jeder Beat ein Herzschlag der Nostalgie.',
        stats: {
          start: 'Start',
          tracks: 'Tracks',
          views: 'Views'
        }
      },
      process: {
        title: 'Der kreative Prozess',
        subtitle: 'Von der Idee zum fertigen Track – so entsteht Synthwave Balkan',
        steps: [
          {
            title: 'Kreation',
            description: 'AI-gestützte Musikproduktion mit Suno, kombiniert mit manueller Post-Production für den perfekten Synthwave-Sound.'
          },
          {
            title: 'Produktion',
            description: 'Mastering, VHS-Effekte und Balkan-Samples werden sorgfältig integriert. Jeder Track durchläuft mehrere Revisionen.'
          },
          {
            title: 'Distribution',
            description: 'Multi-Plattform Release auf Spotify, YouTube, SoundCloud und Apple Music mit optimierten Metadaten.'
          },
          {
            title: 'Promotion',
            description: 'TikTok, Instagram und YouTube Shorts für maximale Reichweite. Jeden Tag neuer Content für die Community.'
          }
        ],
        techStack: {
          title: 'Tech Stack',
          aiProduction: 'AI Production',
          postProduction: 'Post-Production',
          videoEditing: 'Video Editing',
          distribution: 'Distribution'
        }
      },
      inspiration: {
        title: 'Inspirationen & Einflüsse',
        subtitle: 'Die musikalischen und visuellen Wurzeln von Desetka',
        categories: {
          synthwave: 'Synthwave Artists',
          balkan: '90er Balkan',
          visual: 'Visual Aesthetics'
        },
        quote: 'Die Maske ist nicht zum Verstecken. Sie ist ein Symbol für die kollektive Nostalgie einer Generation.',
        vision: {
          title: 'Vision',
          content: 'Synthwave Balkan zur dominanten Kraft in der elektronischen Musikszene auf dem Balkan machen. Eine Bewegung kreieren, die Generationen verbindet und Nostalgie in moderne Kunst verwandelt.'
        },
        mission: {
          title: 'Mission',
          content: 'Jeden Tag authentischen Content produzieren, der die Seele des Balkans mit der Ästhetik der 80er vereint. Die Community zu Familie machen und gemeinsam wachsen.'
        }
      }
    },
    common: {
      loading: 'Lädt...',
      error: 'Etwas ist schief gelaufen',
      back: 'Zurück'
    }
  },
  sr: {
    nav: {
      home: 'Početna',
      about: 'O meni',
      music: 'Muzika',
      blog: 'Blog',
      contact: 'Kontakt'
    },
    hero: {
      subtitle: 'SYNTHWAVE PRODUCENT',
      music: 'Muzika',
      about: 'O meni',
      faq: 'ČPP',
      contact_cta: 'Stupi u kontakt',
      skip_content: 'Pređi na sadržaj'
    },
    music: {
      title: 'Istaknute pesme',
      subtitle: 'Otkrijte najnovije Synthwave hitove sa Balkana',
      play: 'Pusti',
      pause: 'Pauziraj',
      previous: 'Prethodna pesma',
      next: 'Sledeća pesma',
      stream_on: 'Slušaj na:',
      spotify: 'Spotify',
      youtube: 'YouTube',
      soundcloud: 'SoundCloud',
      view_all: 'Pogledaj sve pesme',
      mute: 'Isključi zvuk',
      unmute: 'Uključi zvuk',
      all_songs_title: 'Sve pesme',
      all_songs_subtitle: 'Otkrijte kompletnu Synthwave kolekciju od Desetka'
    },
    about: {
      title: 'Misteriozna persona iza maske',
      description1: 'Desetka je više od muzike — to je putovanje kroz vreme. Fuzija 80-ih Synthwave-a i 90-ih balkanske nostalgije koja govori celoj generaciji.',
      description2: 'Maska nije skrovište, već simbol. Ona predstavlja kolektivno pamćenje, nostalgične osećaje i čežnju za vremenom koje nikad zaista ne prolazi.',
      views: 'Pregledi',
      followers: 'Pratioci',
      tracks: 'Pesme',
      budget: 'Bez reklama',
      views_per_euro: 'Pregledi/€',
      learn_more: 'Više o Desetka'
    },
    faq: {
      title: 'Često postavljana pitanja',
      subtitle: 'Sve što treba da znaš o Desetka',
      contact_cta: 'Imaš još pitanja? Piši mi!',
      contact_button: 'Stupi u kontakt',
      items: [
        {
          id: '1',
          question: 'Ko je Desetka?',
          answer: 'Desetka je misteriozna ličnost sa maskom sa Balkana koja spaja 80-ih Synthwave sa 90-ih srpskim folk melodijama. Ime "Desetka" (10) simbolizuje savršenu ravnotežu između prošlosti i budućnosti.',
          category: 'Opšte'
        },
        {
          id: '2',
          question: 'Šta je Synthwave Balkan?',
          answer: 'Synthwave Balkan je jedinstvena fuzija žanrova koja kombinuje nostalgične 80-ih sintisajzer zvukove sa tradicionalnim balkanskim melodijama iz 90-ih. To je muzičko putovanje kroz vreme koje poštuje oba perioda.',
          category: 'Muzika'
        },
        {
          id: '3',
          question: 'Zašto maska?',
          answer: 'Maska nije za skrivanje, već simbol. Ona predstavlja kolektivno pamćenje, nostalgične osećaje i čežnju za vremenom koje nikad zaista ne prolazi.',
          category: 'Identitet'
        },
        {
          id: '4',
          question: 'Gde mogu da slušam muziku?',
          answer: 'Svi tragovi su dostupni na Spotify, YouTube Music, SoundCloud, Apple Music i drugim striming platformama. Linkove možeš naći u Music sekciji.',
          category: 'Muzika'
        },
        {
          id: '5',
          question: 'Ima li živih nastupa?',
          answer: 'Da! Živi nastupi su planirani za 2025. Prvi koncerti će se održati u Beogradu, Zagrebu i Sarajevu. Ažuriranja možeš pratiti na Instagram i TikTok.',
          category: 'Događaji'
        },
        {
          id: '6',
          question: 'Mogu li da rezervišem Desetka za događaj?',
          answer: 'Da, za upite o rezervaciji piši na info@desetka.net. Sviramo na festivalima, klubskim noćima i posebnim događajima.',
          category: 'Rezervacija'
        }
      ]
    },
    footer: {
      tagline: 'Synthwave × 90-ih balkanska nostalgija',
      music: 'Muzika',
      all_songs: 'Sve pesme',
      about_section: 'O meni',
      about_me: 'O meni',
      connect: 'Poveži se',
      rights_reserved: 'Sva prava zadržana.',
      imprint: 'Impresion',
      privacy: 'Privatnost'
    },
    linktree: {
      title: 'DESETKA',
      subtitle: 'Svi linkovi na jednom mestu',
      youtube_music: 'YouTube Music',
      spotify: 'Spotify',
      soundcloud: 'SoundCloud',
      instagram: 'Instagram',
      tiktok: 'TikTok'
    },
    contact: {
      title: 'Stupi u kontakt',
      subtitle: 'Hajde da zajedno stvorimo nešto neverovatno',
      name: 'Ime',
      email: 'Imejl',
      message: 'Poruka',
      send: 'Pošalji poruku',
      success: 'Poruka je uspešno poslata!',
      connect_title: 'Hajde da se povežemo',
      connect_description: 'Bilo za saradnje, rezervacije, remiksove ili samo da razgovaramo o Synthwave-u i nostalgiji 90-ih – radujem se da čujem od tebe!',
      subject: 'Tema',
      name_placeholder: 'Tvoje ime',
      email_placeholder: 'tvoj@email.com',
      subject_placeholder: 'O čemu se radi?',
      message_placeholder: 'Tvoja poruka...',
      sending: 'Šalje se...',
      sent: 'Poruka je poslata!',
      follow_me: 'Prati me na:'
    },
    blog: {
      title: 'Blog',
      read_more: 'Pročitaj više',
      back_to_blog: 'Nazad na blog',
      subtitle: 'Priče, tutorijali i uvidi u svet Desetka',
      featured: 'Istaknuto',
      read_now: 'Pročitaj sada',
      author: 'Autor',
      share_post: 'Podeli post',
      no_posts: 'Nije pronađen nijedan blog post. Vrati se uskoro!',
      post_not_found: 'Post nije pronađen',
      more_posts: 'Više blog postova'
    },
    aboutPage: {
      hero: {
        story: 'Priča',
        description1: 'Misteriozna ličnost sa maskom iz srca Balkana. Desetka predstavlja savršenu ravnotežu između prošlosti i budućnosti – 10 kao simbol savršenstva.',
        description2: 'Rođena iz čežnje za 90-ima, hranjena Synthwave-om 80-ih. Svaka pesma je vremenska kapsula, svaka melodija uspomena, svaki ritam otkucaj nostalgije.',
        stats: {
          start: 'Početak',
          tracks: 'Pesme',
          views: 'Pregledi'
        }
      },
      process: {
        title: 'Kreativni proces',
        subtitle: 'Od ideje do gotove pesme – tako nastaje Synthwave Balkan',
        steps: [
          {
            title: 'Kreacija',
            description: 'AI-bazirana muzička produkcija sa Suno, kombinovana sa ručnom post-produkcijom za savršen Synthwave zvuk.'
          },
          {
            title: 'Produkcija',
            description: 'Mastering, VHS efekti i balkanski semplovi se pažljivo integrišu. Svaka pesma prolazi kroz više revizija.'
          },
          {
            title: 'Distribucija',
            description: 'Multi-platformsko izdanje na Spotify, YouTube, SoundCloud i Apple Music sa optimizovanim metapodacima.'
          },
          {
            title: 'Promocija',
            description: 'TikTok, Instagram i YouTube Shorts za maksimalni doseg. Svaki dan novi sadržaj za zajednicu.'
          }
        ],
        techStack: {
          title: 'Tech Stack',
          aiProduction: 'AI Produkcija',
          postProduction: 'Post-produkcija',
          videoEditing: 'Montaža videa',
          distribution: 'Distribucija'
        }
      },
      inspiration: {
        title: 'Inspiracije i uticaji',
        subtitle: 'Muzički i vizuelni koreni Desetka',
        categories: {
          synthwave: 'Synthwave Umetnici',
          balkan: '90-ih Balkan',
          visual: 'Vizuelna estetika'
        },
        quote: 'Maska nije za skrivanje. Ona je simbol za kolektivnu nostalgiju generacije.',
        vision: {
          title: 'Vizija',
          content: 'Učiniti Synthwave Balkan dominantnom silom u elektronskoj muzičkoj sceni na Balkanu. Stvoriti pokret koji povezuje generacije i transformiše nostalgiju u modernu umetnost.'
        },
        mission: {
          title: 'Misija',
          content: 'Proizvoditi autentičan sadržaj svaki dan koji ujedinjuje dušu Balkana sa estetikom 80-ih. Učiniti zajednicu porodicom i rasti zajedno.'
        }
      }
    },
    common: {
      loading: 'Učitava...',
      error: 'Nešto je pošlo po zlu',
      back: 'Nazad'
    }
  }
};