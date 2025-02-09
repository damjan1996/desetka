// src/i18n/locales/sr/blog/posts/fullstack-development-timetracking.ts
export const fullstackDevelopmentTimetracking = {
    meta: {
        title: 'Fullstack razvoj sa Python-om i React-om: Arhitektura našeg rešenja za evidenciju radnog vremena',
        date: '2024-02-09',
        excerpt: 'Tehnički dubinski uvid u implementaciju modernog rešenja za evidenciju radnog vremena',
        category: 'Sistemska arhitektura',
        coverImage: '/images/posts/fullstack-development-timetracking/cover.jpg',
        tags: ['Python', 'React', 'TypeScript', 'MSSQL', 'System Design']
    },
    content: {
        intro: {
            title: 'Fullstack razvoj sa Python-om i React-om: Arhitektura našeg rešenja za evidenciju radnog vremena',
            description: 'Razvoj robusnog rešenja za evidenciju radnog vremena zahteva ne samo tehničko znanje, već i duboko razumevanje kompleksnih poslovnih pravila i korisničkih zahteva. U ovom članku delim naša iskustva u implementaciji modernog fullstack rešenja za evidenciju radnog vremena sa Python-om i React-om.'
        },
        systemArchitecture: {
            title: 'Sistemska arhitektura',
            frontend: {
                title: 'Frontend (Next.js + TypeScript)',
                description: 'Frontend arhitektura je bazirana na Next.js-u sa TypeScript-om i prati komponentni pristup:',
                code: {
                    types: `// types/TimeEntry.ts
interface TimeEntry {
  id: number;
  date: string;
  checkIn: string;
  checkOut: string | null;
  userId: number;
  status: 'complete' | 'incomplete';
}`,
                    component: `// components/TimeEntryForm.tsx
const TimeEntryForm: React.FC<TimeEntryFormProps> = ({ onSubmit }) => {
  const [entry, setEntry] = useState<TimeEntry>({
    date: new Date().toISOString().split('T')[0],
    checkIn: new Date().toLocaleTimeString(),
    checkOut: null,
    status: 'incomplete'
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateTimeEntry(entry)) return;
    try {
      await onSubmit(entry);
    } catch (error) {
      console.error('Error submitting time entry:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <DateInput
        value={entry.date}
        onChange={(date) => setEntry({ ...entry, date })}
      />
      <TimeInput
        value={entry.checkIn}
        onChange={(time) => setEntry({ ...entry, checkIn: time })}
      />
      {/* Additional form elements */}
    </form>
  );
};`
                }
            },
            backend: {
                title: 'Backend (Flask + MSSQL)',
                description: 'Backend koristi Flask za API i MSSQL za perzistenciju podataka:',
                code: {
                    models: `# models/time_entry.py
class TimeEntry(db.Model):
    __tablename__ = 'Stundenzettel'
    id = db.Column('ID', db.Decimal, primary_key=True)
    personal_id = db.Column('Personal_ID', db.Decimal)
    datum = db.Column('Datum', db.Date)
    kommen = db.Column('Kommen', db.Time)
    gehen = db.Column('Gehen', db.Time)
    @validates('gehen')
    def validate_checkout(self, key, value):
        if value and value < self.kommen:
            raise ValueError('Checkout time cannot be before checkin time')
        return value`,
                    routes: `# routes/time_entries.py
@app.route('/api/time-entries', methods=['POST'])
@jwt_required
def create_time_entry():
    data = request.get_json()
    user_id = get_jwt_identity()
    try:
        validate_time_entry_creation(data, user_id)
        entry = TimeEntry(
            personal_id=user_id,
            datum=data['date'],
            kommen=data['checkIn'],
            gehen=data.get('checkOut')
        )
        db.session.add(entry)
        db.session.commit()
        return jsonify(entry.to_dict()), 201
    except ValidationError as e:
        return jsonify({'error': str(e)}), 400`
                }
            }
        },
        businessLogic: {
            title: 'Implementacija poslovne logike',
            validation: {
                title: 'Validacija vremenskih unosa',
                description: 'Logika validacije osigurava da su sva poslovna pravila ispoštovana:',
                code: `def validate_time_entry_creation(data: dict, user_id: int) -> None:
    '''Validates a new time entry according to business rules.'''
    # Check for existing incomplete entries
    incomplete_entry = TimeEntry.query.filter_by(
        personal_id=user_id,
        gehen=None,
        datum=data['date']
    ).first()
    if incomplete_entry:
        raise ValidationError('Cannot create new entry while incomplete entry exists')
    # Check for time overlap with existing entries
    overlapping_entry = TimeEntry.query.filter(
        TimeEntry.personal_id == user_id,
        TimeEntry.datum == data['date'],
        TimeEntry.kommen <= data['checkIn'],
        TimeEntry.gehen >= data['checkIn']
    ).first()
    if overlapping_entry:
        raise ValidationError('Time entry overlaps with existing entry')`
            }
        },
        databaseDesign: {
            title: 'Dizajn baze podataka',
            description: 'MSSQL šema baze podataka je dizajnirana za efikasnost i integritet:',
            code: `CREATE TABLE dbo.Stundenzettel (
    ID decimal NOT NULL PRIMARY KEY,
    Personal_ID decimal,
    Datum date,
    Kommen time,
    Gehen time,
    xStatus int,
    xBenutzer nvarchar(15),
    xDatum datetime,
    xVersion timestamp
);
CREATE INDEX idx_personal_datum
ON dbo.Stundenzettel(Personal_ID, Datum);`
        },
        security: {
            title: 'Implementacija sigurnosti',
            authentication: {
                title: 'JWT autentifikacija',
                code: `# auth/jwt_handler.py
from flask_jwt_extended import create_access_token
def authenticate_user(username: str, password: str) -> str:
    user = Personal.query.filter_by(
        Benutzername=username,
        Passwort=password  # In production, use proper password hashing
    ).first()
    if not user:
        raise AuthenticationError('Invalid credentials')
    return create_access_token(identity=user.ID)`
            }
        },
        bestPractices: {
            title: 'Najbolje prakse i naučene lekcije',
            points: [
                {
                    title: 'Validacija podataka na više nivoa',
                    items: [
                        'Frontend validacija za trenutni feedback',
                        'Backend validacija za poslovna pravila',
                        'Database constraints za integritet podataka'
                    ]
                },
                {
                    title: 'Rukovanje greškama',
                    items: [
                        'Strukturirane poruke o greškama',
                        'Korisnički prijateljske poruke o greškama na frontendu',
                        'Detaljno logovanje na backendu'
                    ]
                },
                {
                    title: 'Optimizacija performansi',
                    items: [
                        'Indeksiranje kritičnih polja u bazi',
                        'Frontend keširanje vremenskih unosa',
                        'Lazy loading za istorijske podatke'
                    ]
                }
            ]
        },
        challenges: {
            title: 'Izazovi i rešenja',
            timezones: {
                title: '1. Rukovanje vremenskim zonama',
                description: 'Poseban izazov je bilo ispravno rukovanje vremenskim zonama:',
                code: `// utils/dateTime.ts
export const formatTimeForDisplay = (time: string): string => {
  return new Date(\`1970-01-01T\${time}\`).toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit'
  });
};
export const formatTimeForAPI = (time: string): string => {
  return new Date(\`1970-01-01T\${time}\`).toISOString().split('T')[1];
};`
            },
            concurrency: {
                title: '2. Istovremena ažuriranja',
                description: 'Rukovanje istovremenim ažuriranjima je zahtevalo posebnu pažnju:',
                code: `from sqlalchemy import and_, or_
def update_time_entry(entry_id: int, data: dict) -> TimeEntry:
    entry = TimeEntry.query.filter_by(id=entry_id).with_for_update().first()
    if not entry:
        raise NotFoundError('Time entry not found')
    # Optimistic locking using version field
    if entry.xVersion != data['version']:
        raise ConcurrencyError('Entry was modified by another user')
    entry.gehen = data.get('checkOut')
    db.session.commit()
    return entry`
            },
            offline: {
                title: '3. Offline funkcionalnost',
                description: 'Za offline funkcionalnost implementirali smo Service Worker strategiju:',
                code: `// service-worker.ts
const CACHE_NAME = 'timetracking-v1';
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});`
            }
        },
        conclusion: {
            title: 'Zaključak',
            description: 'Razvoj rešenja za evidenciju radnog vremena zahteva pažljivo planiranje i razmatranje brojnih poslovnih pravila. Korišćenjem modernih tehnologija kao što su Next.js, TypeScript i Flask, uspeli smo da implementiramo robusno i korisnički prijateljsko rešenje.',
            keyPoints: [
                'Striktna tipizacija sa TypeScript-om',
                'Sveobuhvatna logika validacije',
                'Efikasan dizajn baze podataka',
                'Korisnički prijateljsko rukovanje greškama'
            ],
            results: 'Rešenje je uspešno u upotrebi već nekoliko meseci i pouzdano obrađuje stotine vremenskih unosa dnevno.'
        }
    }
};
