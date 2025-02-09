// src/i18n/locales/en/portfolio/projects/ai-data-reader.ts
export const aiDataReader = {
    meta: {
        slug: 'ai-data-reader',
        title: "AI-Based Product Data Management from PDF Files",
        description: "Development of an automated system for extracting and structuring product data from PDF documents",
        excerpt: "Integration of Claude AI for intelligent processing of product information and seamless JTL ERP integration.",
        date: "2024-02",
        category: "Data Processing",
        client: "Amazon Seller",
        duration: "2 months",
        url: "https://www.damjan-savic.com",
        repository: "",
        documentation: "",
        published: true,
        featured: true,
        technologies: ["Python", "FastAPI", "Claude AI", "PyPDF", "Pydantic", "JTL-Wawi"],
        tags: ["Data Extraction", "ERP", "Process Automation", "PDF Processing"]
    },
    content: {
        intro: "An AI-powered system for automated extraction of product data from PDF documents with direct integration into JTL inventory management systems, developed for maximum efficiency in product data management.",

        challenge: {
            title: "The Challenge",
            description: "Manual processing of product data from PDF documents was time-consuming and error-prone.",
            points: [
                "Large volumes of PDF documents containing product information",
                "Time-intensive manual data entry",
                "Inconsistent data quality",
                "High personnel requirements"
            ]
        },

        solution: {
            title: "Our Solution",
            description: "Development of an AI-powered system for automated data extraction",
            content: "By leveraging Claude AI and modern Python technologies, we created a fully automated solution that processes PDF documents and integrates the extracted data directly into the JTL inventory management system.",
            points: [
                "Automated PDF processing",
                "AI-powered data extraction",
                "Intelligent data validation",
                "Seamless JTL integration"
            ]
        },

        technical: {
            title: "Technical Implementation",
            description: "The solution is based on a modular Python architecture with several core components:",
            points: [
                "Robust PDF text extraction with PyPDF",
                "AI-powered data extraction with Claude AI",
                "Validation through Pydantic Models",
                "JTL ERP integration via CSV export"
            ],
            code: `class ProductData(BaseModel):
    artikel_nummer: str
    name: str
    hersteller: str
    inhaltsstoffe: List[str]
    allergene: List[str]
    naehrwerte: NaehrwertData
    nettogewicht: str
    vegan: bool
    vegetarisch: bool

def _extract_with_claude(self, prompt: str) -> Dict[str, Any]:
    '''Extracts structured data with Claude AI.'''
    response = self.client.messages.create(
        model='claude-3-sonnet-20240229',
        messages=[{
            'role': 'user',
            'content': prompt
        }]
    )
    return self._clean_json_string(response.content)`
        },

        implementation: {
            title: "Implementation Process",
            description: "The automated workflow was implemented in several phases:",
            points: [
                "PDF batch processing from input directory",
                "Intelligent text recognition and structuring",
                "Multi-layer validation logic",
                "Robust error handling",
                "Integration with existing systems"
            ]
        },

        results: {
            title: "Results and Impact",
            description: "The implementation led to significant improvements in business processes:",
            points: [
                "90% time savings in product data management",
                "99% accuracy in data extraction",
                "Elimination of manual data entry",
                "Standardized product data quality",
                "Significantly reduced error rate"
            ]
        },

        conclusion: "The developed system has revolutionized product data management. By combining AI technology with automated data processing, we not only drastically increased efficiency but also significantly improved data quality. The project demonstrates impressively how modern AI solutions can solve practical business problems."
    }
};

// Re-export for compatibility with the project import system
export default aiDataReader;