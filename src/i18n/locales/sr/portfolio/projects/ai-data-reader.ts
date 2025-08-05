// src/i18n/locales/sr/portfolio/projects/ai-data-reader.ts
export const aiDataReader = {
    meta: {
        slug: 'ai-data-reader',
        title: "Veštačka inteligencija za ekstrakciju podataka iz PDF dokumenata",
        description: "Razvoj automatizovanog sistema za ekstrakciju i strukturiranje podataka o proizvodima iz PDF dokumenata",
        excerpt: "Integracija Claude AI za inteligentnu obradu informacija o proizvodima i besprekornu JTL-ERP integraciju.",
        date: "2024-02",
        category: "Data Processing",
        client: "Amazon Seller",
        duration: "2 meseca",
        url: "https://www.damjan-savic.com",
        repository: "",
        documentation: "",
        published: true,
        featured: true,
        technologies: ["Python", "FastAPI", "Claude AI", "PyPDF", "Pydantic", "JTL-Wawi"],
        tags: ["Ekstrakcija podataka", "ERP", "Automatizacija procesa", "PDF obrada"]
    },
    content: {
        intro: "AI sistem za automatizovanu ekstrakciju podataka o proizvodima iz PDF dokumenata sa direktnom integracijom u JTL sisteme za upravljanje robom, razvijen za maksimalnu efikasnost u održavanju podataka o proizvodima.",

        challenge: {
            title: "Izazov",
            description: "Ručna obrada podataka o proizvodima iz PDF dokumenata bila je vremenski zahtevna i podložna greškama.",
            points: [
                "Velika količina PDF dokumenata sa informacijama o proizvodima",
                "Vremenski zahtevno ručno unošenje podataka",
                "Nekonzistentan kvalitet podataka",
                "Visoki zahtevi za osobljem"
            ]
        },

        solution: {
            title: "Naše rešenje",
            description: "Razvoj AI sistema za automatizovanu ekstrakciju podataka",
            content: "Koristeći Claude AI i moderne Python tehnologije, stvorili smo potpuno automatizovano rešenje koje obrađuje PDF dokumente i integriše izdvojene podatke direktno u JTL sistem za upravljanje robom.",
            points: [
                "Automatizovana obrada PDF-ova",
                "AI ekstrakcija podataka",
                "Inteligentna validacija podataka",
                "Besprekorna JTL integracija"
            ]
        },

        technical: {
            title: "Tehnička implementacija",
            description: "Rešenje je zasnovano na modularnoj Python arhitekturi sa nekoliko ključnih komponenti:",
            points: [
                "Robusna ekstrakcija teksta iz PDF-a sa PyPDF",
                "AI ekstrakcija podataka sa Claude AI",
                "Validacija kroz Pydantic modele",
                "JTL-ERP integracija preko CSV izvoza"
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
    '''Ekstrahuje strukturirane podatke sa Claude AI.'''
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
            title: "Proces implementacije",
            description: "Automatizovani tok rada je implementiran u nekoliko faza:",
            points: [
                "Batch obrada PDF-ova iz ulaznog direktorijuma",
                "Inteligentno prepoznavanje i strukturiranje teksta",
                "Višeslojna logika validacije",
                "Robusno rukovanje greškama",
                "Integracija sa postojećim sistemima"
            ]
        },

        results: {
            title: "Rezultati i uticaj",
            description: "Implementacija je dovela do značajnih poboljšanja u poslovnim procesima:",
            points: [
                "90% uštede vremena u održavanju podataka o proizvodima",
                "99% preciznost u ekstrakciji podataka",
                "Eliminacija ručnog unosa podataka",
                "Standardizovan kvalitet podataka o proizvodima",
                "Značajno smanjena stopa grešaka"
            ]
        },

        conclusion: "Razvijeni sistem je revolucionirao upravljanje podacima o proizvodima. Kombinovanjem AI tehnologije sa automatizovanom obradom podataka, ne samo da smo drastično povećali efikasnost već smo i značajno poboljšali kvalitet podataka. Projekat impresivno demonstrira kako moderna AI rešenja mogu rešiti praktične poslovne probleme."
    }
};

// Re-export za kompatibilnost sa sistemom za uvoz projekata
export default aiDataReader;