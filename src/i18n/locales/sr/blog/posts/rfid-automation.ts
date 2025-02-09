// src/i18n/locales/sr/blog/posts/rfid-automation.ts
export const rfidAutomation = {
    meta: {
        title: 'RFID automatizacija etiketa: Od baze podataka do štampača',
        date: '2024-02-09',
        excerpt: 'Detaljna tehnička analiza implementacije automatizovanog sistema za štampanje RFID etiketa sa Python-om',
        category: 'Sistemska integracija',
        coverImage: '/images/posts/rfid-automation/cover.jpg',
        tags: ['RFID', 'Python', 'ZPL', 'Automatizacija', 'Zebra štampač', 'EPC']
    },
    content: {
        intro: {
            title: 'RFID automatizacija etiketa: Od baze podataka do štampača',
            description: 'U modernim logističkim i maloprodajnim okruženjima, efikasno i besprekorno označavanje proizvoda RFID tagovima je od ključnog značaja. U ovom članku delim svoja iskustva u implementaciji automatizovanog rešenja za generisanje i štampanje RFID etiketa sa kodiranjem čipa.'
        },
        requirements: {
            title: 'Pozadina projekta',
            points: [
                'Automatsko generisanje EPC kodova (Electronic Product Code)',
                'Kreiranje ZPL koda za Zebra štampače',
                'Direktna mrežna komunikacija sa štampačem',
                'Integracija sa postojećim podacima o proizvodima',
                'Rukovanje greškama i logovanje'
            ]
        },
        implementation: {
            title: 'Tehnička implementacija',
            epcGeneration: {
                title: 'Generisanje EPC koda',
                description: 'EPC kodovi se generišu prema SGTIN standardu (Serialized Global Trade Item Number):',
                code: `def generate_encoded_epc(company_prefix, indicator, item_ref, serial):
    sgtin = SGTIN(company_prefix, indicator, item_ref, serial)
    return sgtin.encode()`
            },
            zplTemplates: {
                title: 'Upravljanje ZPL šablonima',
                description: 'Za različite tipove etiketa implementirani su ZPL šabloni:',
                code: `def generate_zpl_code(artikelnr, description, ean, price, material, water_resistance, glass_type, encoded_epc):
    formatted_price = f'{price:.2f}'
    return f'''
CT~~CD,~CC^~CT~
^XA
~TA000
~JSN
^LT35
^MNW
^MTT
^PON
^PMN
^LH0,0
^JMA
^PR2,2
~SD23
^JUS
^LRN
^CI27
^PA0,1,1,0
^RS8,,,3
^XZ
^XA
^MMT
^PW413
^LL531
^LS-24
^FT150,57^A0N,33,33^FH\\^CI27^FD{artikelnr}^FS^CI27
^FT44,86^A0N,21,20^FH\\^CI27^FD{description}^FS^CI27
^FT130,141^A0N,50,51^FH\\^CI27^FD{formatted_price} €^FS^CI27
^FT167,175^A0N,21,20^FH\\^CI27^FD{material}^FS^CI27
^FT185,201^A0N,21,20^FH\\^CI27^FD{water_resistance}^FS^CI27
^FT155,227^A0N,21,20^FH\\^CI27^FD{glass_type}^FS^CI27
^BY3,2,113^FT73,420^BEN,,Y,N
^FH\\^FD{ean}^FS
^RFW,H,1,2,1^FD3000^FS
^RFW,H,2,12,1^FD{encoded_epc}^FS
^PQ1,0,1,Y
^XZ'''`
            },
            printerCommunication: {
                title: 'Mrežna komunikacija sa štampačem',
                description: 'Komunikacija sa Zebra štampačem se odvija preko TCP/IP:',
                code: `def send_to_printer(data, printer_ip='192.168.68.50', printer_port=9100):
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.connect((printer_ip, printer_port))
            sock.sendall(data.encode('utf-8'))
        logger.info('Podaci uspešno poslati štampaču')
    except Exception as e:
        logger.error(f'Greška pri slanju podataka štampaču: {e}')`
            },
            serialNumberManagement: {
                title: 'Obrada podataka i upravljanje serijskim brojevima',
                description: 'Upravljanje serijskim brojevima je kritično za jedinstvenost EPC kodova:',
                code: `def initialize_serial_number():
    global current_serial_number
    try:
        serial_log_content = SERIAL_NUMBER_LOG_PATH.read_text().strip()
        current_serial_number = int(serial_log_content)
    except (FileNotFoundError, ValueError):
        current_serial_number = START_SERIAL_NUMBER
def get_next_serial_number():
    global current_serial_number
    current_serial_number += 1
    return current_serial_number
def finalize_serial_number():
    SERIAL_NUMBER_LOG_PATH.write_text(str(current_serial_number))`
            }
        },
        features: {
            title: 'Implementirane funkcionalnosti',
            errorHandling: {
                title: '1. Robusno rukovanje greškama',
                points: [
                    'Validacija ulaznih podataka',
                    'Provera mrežne veze',
                    'Perzistencija serijskih brojeva',
                    'Detaljno logovanje svih operacija'
                ]
            },
            configurability: {
                title: '2. Konfigurabilnost',
                points: [
                    'Podesiva IP adresa i port štampača',
                    'Prilagodljivi ZPL šabloni',
                    'Fleksibilno generisanje EPC kodova',
                    'Podesivi opsezi serijskih brojeva'
                ]
            },
            scalability: {
                title: '3. Skalabilnost',
                points: [
                    'Batch obrada podataka o proizvodima',
                    'Mogući paralelni zadaci štampanja',
                    'Efikasno upravljanje resursima',
                    'Modularan kod za jednostavno proširivanje'
                ]
            }
        },
        bestPractices: {
            title: 'Najbolje prakse',
            dataValidation: {
                title: '1. Validacija podataka',
                points: [
                    'Striktna tipizacija za kritična polja podataka',
                    'Provera obaveznih polja',
                    'Provere formata i verodostojnosti'
                ]
            },
            faultTolerance: {
                title: '2. Tolerancija na greške',
                points: [
                    'Automatski pokušaji ponavljanja',
                    'Graceful degradacija',
                    'Detaljni zapisi o greškama'
                ]
            },
            maintainability: {
                title: '3. Održivost',
                points: [
                    'Modularna struktura koda',
                    'Detaljna dokumentacija',
                    'Jasno odvajanje konfiguracije i koda'
                ]
            }
        },
        lessonsLearned: {
            title: 'Naučene lekcije',
            zplSpecifics: {
                title: '1. ZPL specifičnosti',
                points: [
                    'Neophodno precizno poznavanje ZPL specifikacija',
                    'Pažljiva validacija generisanih ZPL kodova',
                    'Redovno testiranje sa različitim modelima štampača'
                ]
            },
            rfidStandards: {
                title: '2. RFID standardi',
                points: [
                    'Kritično poštovanje EPC standarda',
                    'Pažljivo upravljanje serijskim brojevima',
                    'Validacija generisanih EPC kodova'
                ]
            },
            networkCommunication: {
                title: '3. Mrežna komunikacija',
                points: [
                    'Robusno rukovanje mrežnim problemima',
                    'Tajmauti i pokušaji ponavljanja',
                    'Baferovanje zadataka štampanja'
                ]
            }
        },
        conclusion: {
            title: 'Zaključak',
            description: 'Implementirano rešenje omogućava efikasnu i pouzdanu automatizaciju procesa RFID označavanja. Kombinacijom generisanja EPC kodova, upravljanja ZPL šablonima i direktne komunikacije sa štampačem, kreiran je robustan sistem koji se dokazao u praksi.',
            keyPoints: [
                'Temeljno planiranje sistemske arhitekture',
                'Sveobuhvatno rukovanje greškama',
                'Pažljiva dokumentacija',
                'Redovno testiranje i validacija'
            ],
            results: 'Rešenje stabilno radi u produkciji već nekoliko meseci i svakodnevno obrađuje stotine etiketa.'
        }
    }
};
