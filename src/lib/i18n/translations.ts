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
    months_working: string;
    months_working_label: string;
    total_viewers: string;
    total_viewers_label: string;
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
      title: 'Timeless Frequencies',
      description1: 'Desetka is a sonic journey through space and time – a sound where 80s Synthwave, 90s Balkan vibes, and modern Trap merge together. Raw, melancholic, and yet futuristic.',
      description2: 'Desetka is not a genre – it\'s a feeling. A mix of retro soul and urban pulse that breaks boundaries and connects generations.',
      views: 'Views',
      followers: 'Followers',
      tracks: 'Tracks',
      budget: '€5K',
      views_per_euro: '50K',
      months_working: '2',
      months_working_label: 'Months Working',
      total_viewers: '250K',
      total_viewers_label: 'Viewers',
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
          answer: 'Desetka creates the kind of music he wants to hear while driving through the night — honest, emotional, and timeless. In a world flooded with low-effort and disposable sounds, he strives to bring back quality, depth, and meaning to modern music. His style fuses 80s Synthwave energy, 90s Balkan nostalgia, and the raw pulse of modern trap, creating a sound that feels both familiar and new. For Desetka, music isn\'t just entertainment — it\'s a statement against mediocrity.',
          category: 'General'
        },
        {
          id: '2',
          question: 'What is Synthwave Balkan?',
          answer: 'Synthwave Balkan is a distinctive genre fusion that blends nostalgic 80s synthesizer aesthetics with authentic 90s Turbo-Folk melodies — reimagined through a modern lens. It\'s not just a remix of the past, but a reinvention: the emotional depth of Balkan music meets the futuristic pulse of Synthwave. Each track carries original lyrics written by the artist himself, reflecting personal stories, nostalgia, and the spirit of a generation in transition. At times, Trap influences and urban rhythms are woven in, creating a soundscape that is both retro and contemporary, melancholic and powerful. Synthwave Balkan is musical time travel — but with its eyes set firmly on the future.',
          category: 'Music'
        },
        {
          id: '3',
          question: 'Where can I listen to the music?',
          answer: 'All tracks are available on Spotify, YouTube Music, and SoundCloud. Most new songs are first uploaded to SoundCloud, where you can hear the latest releases right after they\'re created. You can find all links in the Music section.',
          category: 'Music'
        },
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
        description1: 'Desetka is a music project from the Balkans that connects the nostalgia of the past with modern sounds – the number 10 represents perfect balance.',
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
        quote: 'A symbol of the nostalgia of a generation living between past and future.',
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
      title: 'Zeitlose Frequenzen',
      description1: 'Desetka ist eine Klangreise durch Raum und Zeit – ein Sound, in dem 80er-Synthwave, 90er-Balkan-Vibes und moderner Trap miteinander verschmelzen. Roh, melancholisch und zugleich futuristisch.',
      description2: 'Desetka ist kein Genre – es ist ein Gefühl. Ein Mix aus Retro-Seele und urbanem Puls, der Grenzen sprengt und Generationen verbindet.',
      views: 'Views',
      followers: 'Followers',
      tracks: 'Tracks',
      budget: '€5K',
      views_per_euro: '50K',
      months_working: '2',
      months_working_label: 'Monate Arbeit',
      total_viewers: '250K',
      total_viewers_label: 'Zuschauer',
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
          answer: 'Desetka kreiert die Art von Musik, die er selbst beim nächtlichen Autofahren hören möchte — ehrlich, emotional und zeitlos. In einer Welt voller oberflächlicher und wegwerfbarer Sounds strebt er danach, Qualität, Tiefe und Bedeutung in die moderne Musik zurückzubringen. Sein Stil fusioniert 80er-Synthwave-Energie, 90er-Balkan-Nostalgie und den rohen Puls des modernen Trap und schafft einen Sound, der sich sowohl vertraut als auch neu anfühlt. Für Desetka ist Musik nicht nur Unterhaltung — sie ist ein Statement gegen Mittelmäßigkeit.',
          category: 'Allgemein'
        },
        {
          id: '2',
          question: 'Was ist Synthwave Balkan?',
          answer: 'Synthwave Balkan ist eine unverwechselbare Genre-Fusion, die nostalgische 80er-Synthesizer-Ästhetik mit authentischen 90er-Turbo-Folk-Melodien verbindet — neu interpretiert durch eine moderne Linse. Es ist nicht nur ein Remix der Vergangenheit, sondern eine Neuerfindung: die emotionale Tiefe der Balkan-Musik trifft auf den futuristischen Puls des Synthwave. Jeder Track trägt originale Texte, die der Künstler selbst geschrieben hat und die persönliche Geschichten, Nostalgie und den Geist einer Generation im Wandel widerspiegeln. Zeitweise werden Trap-Einflüsse und urbane Rhythmen eingewoben, die eine Klanglandschaft schaffen, die sowohl retro als auch zeitgenössisch, melancholisch und kraftvoll ist. Synthwave Balkan ist musikalische Zeitreise — aber mit dem Blick fest auf die Zukunft gerichtet.',
          category: 'Musik'
        },
        {
          id: '3',
          question: 'Wo kann ich die Musik hören?',
          answer: 'Alle Tracks sind verfügbar auf Spotify, YouTube Music und SoundCloud. Die meisten neuen Songs werden zuerst auf SoundCloud hochgeladen, wo du die neuesten Releases direkt nach ihrer Entstehung hören kannst. Alle Links findest du in der Music-Section.',
          category: 'Musik'
        },
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
        description1: 'Desetka ist ein Musikprojekt vom Balkan, das die Nostalgie vergangener Zeiten mit modernen Klängen verbindet – die Zahl 10 steht für perfekte Balance.',
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
        quote: 'Ein Symbol für die Nostalgie einer Generation, die zwischen Vergangenheit und Zukunft lebt.',
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
      title: 'Bezvremenske Frekvencije',
      description1: 'Desetka je zvučno putovanje kroz prostor i vreme – zvuk u kome se spajaju 80-ih Synthwave, 90-ih balkanski vajbovi i moderni Trap. Sirov, melanholičan i ipak futuristički.',
      description2: 'Desetka nije žanr – to je osećaj. Mešavina retro duše i urbanog pulsa koja ruši granice i povezuje generacije.',
      views: 'Pregledi',
      followers: 'Pratioci',
      tracks: 'Pesme',
      budget: '€5K',
      views_per_euro: '50K',
      months_working: '2',
      months_working_label: 'Meseca rada',
      total_viewers: '250K',
      total_viewers_label: 'Gledalaca',
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
          answer: 'Desetka pravi muziku kakvu želi da čuje dok vozi kroz noć — iskrenu, emotivnu i bezvremensku. U svetu preplavljenom površnim i jednokratnim zvucima, teži da vrati kvalitet, dubinu i značenje u modernu muziku. Njegov stil spaja energiju 80-ih Synthwave-a, nostalgiju 90-ih Balkana i sirovi puls modernog trap-a, stvarajući zvuk koji deluje i poznato i novo. Za Desetka, muzika nije samo zabava — to je izjava protiv prosečnosti.',
          category: 'Opšte'
        },
        {
          id: '2',
          question: 'Šta je Synthwave Balkan?',
          answer: 'Synthwave Balkan je prepoznatljiva fuzija žanrova koja spaja nostalgičnu estetiku 80-ih sintisajzera sa autentičnim melodijama 90-ih Turbo-Folk-a — reimaginovano kroz modernu prizmu. To nije samo remiksovanje prošlosti, već reinvencija: emocionalna dubina balkanske muzike susreće futuristički puls Synthwave-a. Svaki trag nosi originalne tekstove koje je sam umetnik napisao, reflektujući lične priče, nostalgiju i duh generacije u tranziciji. Ponekad se utkan i uticaj Trap-a i urbanih ritmova, stvarajući zvučni pejzaž koji je istovremeno retro i savremeni, melanholičan i snažan. Synthwave Balkan je muzičko putovanje kroz vreme — ali sa pogledom čvrsto usmerenim na budućnost.',
          category: 'Muzika'
        },
        {
          id: '3',
          question: 'Gde mogu da slušam muziku?',
          answer: 'Sve pesme su dostupne na Spotify-u, YouTube Music-u i SoundCloud-u. Većina novih pesama se prvo postavlja na SoundCloud, gde možeš čuti najnovije izdanja odmah nakon što su stvorene. Sve linkove možeš naći u muzičkoj sekciji.',
          category: 'Muzika'
        },
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
        description1: 'Desetka je muzički projekat sa Balkana koji povezuje nostalgiju prošlih vremena sa modernim zvukom – broj 10 kao simbol savršene ravnoteže.',
        description2: 'Rođen iz čežnje za 90-ima, hranjen Synthwave-om 80-ih. Svaki trag je vremenska kapsula, svaka melodija uspomena, svaki bit otkucaj nostalgije.',
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
        quote: 'Simbol nostalgije generacije koja živi između prošlosti i budućnosti.',
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