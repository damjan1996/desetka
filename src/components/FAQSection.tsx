import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { trackFAQInteraction } from '../services/gtm';

export function FAQSection() {
  const { t } = useTranslation();
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = t('faq.questions', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
    category?: string;
  }>;

  const toggleItem = (index: number) => {
    const isOpening = openItem !== index;
    const question = faqs[index]?.question || '';
    
    // Track FAQ interaction
    trackFAQInteraction(question, isOpening ? 'open' : 'close');
    
    setOpenItem(prev => prev === index ? null : index);
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
        {t('faq.title')}
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
              aria-expanded={openItem === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-lg font-medium text-white pr-4">
                {faq.question}
              </h3>
              {openItem === index ? (
                <ChevronUp className="h-5 w-5 text-zinc-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-zinc-400 flex-shrink-0" />
              )}
            </button>
            
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                openItem === index ? 'max-h-96' : 'max-h-0'
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
          {t('faq.moreQuestions')}{' '}
          <a 
            href="/contact" 
            className="text-white hover:text-zinc-300 underline transition-colors"
          >
            {t('faq.contactUs')}
          </a>
        </p>
      </div>
    </section>
  );
}