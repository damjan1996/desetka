import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export function FAQSection() {
  const { t, i18n } = useTranslation();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs: FAQItem[] = i18n.language === 'de' ? [
    {
      question: "Wie kann ich Python für Prozessautomatisierung einsetzen?",
      answer: "Python eignet sich hervorragend für Prozessautomatisierung durch Libraries wie Selenium für Web-Automation, Pandas für Datenverarbeitung und Schedule für zeitgesteuerte Aufgaben. Ich entwickle maßgeschneiderte Automatisierungslösungen für Ihre Geschäftsprozesse.",
      category: "python"
    },
    {
      question: "Was macht OLLAMA ideal für lokale KI-Entwicklung?",
      answer: "OLLAMA ermöglicht das Ausführen großer Sprachmodelle lokal, was Datenschutz gewährleistet und API-Kosten reduziert. Ich spezialisiere mich auf die Integration von OLLAMA in Anwendungen für individuelle KI-Lösungen ohne Cloud-Abhängigkeiten.",
      category: "ai"
    },
    {
      question: "Welche Vorteile bieten Electron Desktop Apps?",
      answer: "Electron ermöglicht die Entwicklung plattformübergreifender Desktop-Anwendungen mit Web-Technologien. Sie erhalten eine native App für Windows, Mac und Linux aus einer einzigen Codebasis. Ideal für Tools mit komplexer UI und Offline-Funktionalität.",
      category: "electron"
    },
    {
      question: "Wie lange dauert die Entwicklung einer Web-Anwendung?",
      answer: "Die Entwicklungsdauer hängt vom Umfang ab. Ein MVP kann in 4-8 Wochen entwickelt werden, während komplexe Enterprise-Anwendungen 3-6 Monate benötigen. Ich arbeite agil und liefere in 2-Wochen-Sprints nutzbare Zwischenergebnisse.",
      category: "general"
    },
    {
      question: "Können Sie bestehende Python-Skripte in Web-Apps umwandeln?",
      answer: "Ja, ich kann Ihre Python-Skripte in moderne Web-Anwendungen mit FastAPI oder Django Backend und React Frontend transformieren. Dies ermöglicht Multi-User-Zugriff, bessere UI/UX und zentrale Datenverwaltung.",
      category: "python"
    },
    {
      question: "Wie integrieren Sie KI in bestehende Geschäftsprozesse?",
      answer: "Ich analysiere Ihre Workflows und identifiziere Automatisierungspotenziale. Mit OLLAMA oder anderen KI-Modellen entwickle ich Lösungen für Textanalyse, Dokumentenverarbeitung, Kundenservice-Automation oder Datenextraktion - alles datenschutzkonform on-premise.",
      category: "ai"
    }
  ] : [
    {
      question: "How can I use Python for process automation?",
      answer: "Python excels at process automation through libraries like Selenium for web automation, Pandas for data processing, and Schedule for timed tasks. I develop custom automation solutions tailored to your business processes.",
      category: "python"
    },
    {
      question: "What makes OLLAMA ideal for local AI development?",
      answer: "OLLAMA enables running large language models locally, ensuring data privacy and reducing API costs. I specialize in integrating OLLAMA into applications for custom AI solutions without cloud dependencies.",
      category: "ai"
    },
    {
      question: "What are the advantages of Electron desktop apps?",
      answer: "Electron enables cross-platform desktop app development using web technologies. You get a native app for Windows, Mac, and Linux from a single codebase. Ideal for tools requiring complex UI and offline functionality.",
      category: "electron"
    },
    {
      question: "How long does web application development take?",
      answer: "Development time depends on scope. An MVP can be developed in 4-8 weeks, while complex enterprise applications require 3-6 months. I work agile and deliver usable results in 2-week sprints.",
      category: "general"
    },
    {
      question: "Can you convert existing Python scripts into web apps?",
      answer: "Yes, I can transform your Python scripts into modern web applications with FastAPI or Django backend and React frontend. This enables multi-user access, better UI/UX, and centralized data management.",
      category: "python"
    },
    {
      question: "How do you integrate AI into existing business processes?",
      answer: "I analyze your workflows and identify automation potential. Using OLLAMA or other AI models, I develop solutions for text analysis, document processing, customer service automation, or data extraction - all privacy-compliant on-premise.",
      category: "ai"
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="faq-section py-16 px-4 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        {t('faq.title', 'Frequently Asked Questions')}
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="faq-item bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zinc-800/70 transition-colors"
              aria-expanded={openItems.includes(index)}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-lg font-medium text-white pr-4">
                {faq.question}
              </h3>
              {openItems.includes(index) ? (
                <ChevronUp className="h-5 w-5 text-zinc-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-zinc-400 flex-shrink-0" />
              )}
            </button>
            
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(index) ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 py-4 text-zinc-300 border-t border-zinc-700">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-zinc-400">
          {t('faq.moreQuestions', 'Have more questions?')}{' '}
          <a 
            href="/contact" 
            className="text-white hover:text-zinc-300 underline transition-colors"
          >
            {t('faq.contactUs', 'Contact us')}
          </a>
        </p>
      </div>
    </section>
  );
}