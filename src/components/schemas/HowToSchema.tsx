import React from 'react';

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  title: string;
  description: string;
  totalTime?: string;
  estimatedCost?: {
    value: string;
    currency: string;
  };
  supply?: string[];
  tool?: string[];
  steps: HowToStep[];
  image?: string;
  video?: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration: string;
    embedUrl: string;
  };
}

export function HowToSchema({
  title,
  description,
  totalTime,
  estimatedCost,
  supply,
  tool,
  steps,
  image,
  video
}: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "image": image,
    ...(totalTime && { "totalTime": totalTime }),
    ...(estimatedCost && {
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": estimatedCost.currency,
        "value": estimatedCost.value
      }
    }),
    ...(supply && supply.length > 0 && {
      "supply": supply.map(item => ({
        "@type": "HowToSupply",
        "name": item
      }))
    }),
    ...(tool && tool.length > 0 && {
      "tool": tool.map(item => ({
        "@type": "HowToTool",
        "name": item
      }))
    }),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "name": step.name,
      "text": step.text,
      "position": index + 1,
      ...(step.image && { "image": step.image }),
      ...(step.url && { "url": step.url })
    })),
    ...(video && {
      "video": {
        "@type": "VideoObject",
        "name": video.name,
        "description": video.description,
        "thumbnailUrl": video.thumbnailUrl,
        "uploadDate": video.uploadDate,
        "duration": video.duration,
        "embedUrl": video.embedUrl
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Example HowTo content for common queries
export const howToExamples = {
  pythonAutomation: {
    title: "Wie kann ich Python für Prozessautomatisierung einsetzen?",
    description: "Schritt-für-Schritt Anleitung zur Automatisierung von Geschäftsprozessen mit Python",
    totalTime: "PT30M",
    tool: ["Python 3.8+", "pip", "Virtual Environment", "Code Editor (VS Code)"],
    steps: [
      {
        name: "Python-Umgebung einrichten",
        text: "Installieren Sie Python 3.8 oder höher und erstellen Sie eine virtuelle Umgebung mit 'python -m venv automation-env'"
      },
      {
        name: "Notwendige Libraries installieren",
        text: "Aktivieren Sie die virtuelle Umgebung und installieren Sie benötigte Pakete: pip install selenium pandas schedule requests"
      },
      {
        name: "Automatisierungsskript erstellen",
        text: "Erstellen Sie ein Python-Skript, das Ihre spezifischen Aufgaben automatisiert. Nutzen Sie Selenium für Web-Automation, Pandas für Datenverarbeitung"
      },
      {
        name: "Zeitgesteuerte Ausführung einrichten",
        text: "Verwenden Sie die Schedule-Library oder Cron-Jobs (Linux/Mac) bzw. Task Scheduler (Windows) für regelmäßige Ausführung"
      },
      {
        name: "Monitoring und Logging implementieren",
        text: "Fügen Sie Logging hinzu, um Fehler zu tracken und den Erfolg der Automatisierung zu überwachen"
      }
    ]
  },
  ollamaSetup: {
    title: "How to Set Up OLLAMA for Local AI Development",
    description: "Complete guide to installing and using OLLAMA for privacy-focused AI applications",
    totalTime: "PT45M",
    tool: ["OLLAMA CLI", "Python 3.8+", "8GB+ RAM", "Terminal/Command Prompt"],
    steps: [
      {
        name: "Install OLLAMA",
        text: "Download and install OLLAMA from ollama.ai. For Mac/Linux: curl -fsSL https://ollama.ai/install.sh | sh"
      },
      {
        name: "Download a Language Model",
        text: "Pull a model like Llama 2: ollama pull llama2. This downloads the model locally to your machine"
      },
      {
        name: "Test the Model",
        text: "Run the model interactively: ollama run llama2. Ask a test question to verify it's working"
      },
      {
        name: "Install Python Integration",
        text: "Install the Python library: pip install ollama. This allows you to use OLLAMA in your Python applications"
      },
      {
        name: "Create Your First Application",
        text: "Write Python code to interact with OLLAMA: import ollama; response = ollama.chat(model='llama2', messages=[{'role': 'user', 'content': 'Hello'}])"
      },
      {
        name: "Optimize for Production",
        text: "Configure model parameters, implement caching, and set up proper error handling for production use"
      }
    ]
  }
};