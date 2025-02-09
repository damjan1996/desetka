// src/i18n/locales/de/blog/posts/fullstack-development-timetracking.ts
export const fullstackDevelopmentTimetracking = {
    meta: {
        title: 'Fullstack-Entwicklung mit Python und React: Architektur unserer Zeiterfassungslösung',
        date: '2024-02-09',
        excerpt: 'Eine technische Deep-Dive in die Implementierung einer modernen Zeiterfassungslösung',
        category: 'System Architecture',
        coverImage: '/images/posts/fullstack-development-timetracking/cover.jpg',
        tags: ['Python', 'React', 'TypeScript', 'MSSQL', 'System Design']
    },
    content: {
        intro: {
            title: 'Fullstack-Entwicklung mit Python und React: Architektur unserer Zeiterfassungslösung',
            description: 'Die Entwicklung einer robusten Zeiterfassungslösung erfordert nicht nur technisches Know-how, sondern auch ein tiefes Verständnis für komplexe Geschäftsregeln und Benutzeranforderungen. In diesem Artikel teile ich unsere Erfahrungen bei der Implementierung einer modernen Fullstack-Zeiterfassungslösung mit Python und React.'
        },
        systemArchitecture: {
            title: 'Systemarchitektur',
            frontend: {
                title: 'Frontend (Next.js + TypeScript)',
                description: 'Die Frontend-Architektur basiert auf Next.js mit TypeScript und folgt einem komponenten-basierten Ansatz:',
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
                description: 'Das Backend verwendet Flask für die API und MSSQL für die Datenpersistenz:',
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
            title: 'Geschäftslogik-Implementierung',
            validation: {
                title: 'Validierung von Zeiteinträgen',
                description: 'Die Validierungslogik stellt sicher, dass alle Geschäftsregeln eingehalten werden:',
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
            title: 'Datenbankdesign',
            description: 'Das MSSQL-Datenbankschema ist auf Effizienz und Integrität ausgelegt:',
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
            title: 'Sicherheitsimplementierung',
            authentication: {
                title: 'JWT-Authentifizierung',
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
            title: 'Best Practices und Learnings',
            points: [
                {
                    title: 'Datenvalidierung auf mehreren Ebenen',
                    items: [
                        'Frontend-Validierung für sofortiges Feedback',
                        'Backend-Validierung für Geschäftsregeln',
                        'Datenbankconstraints für Datenintegrität'
                    ]
                },
                {
                    title: 'Fehlerbehandlung',
                    items: [
                        'Strukturierte Fehlermeldungen',
                        'Benutzerfreundliche Fehlermeldungen im Frontend',
                        'Detailliertes Logging im Backend'
                    ]
                },
                {
                    title: 'Performance-Optimierung',
                    items: [
                        'Indexierung kritischer Datenbankfelder',
                        'Frontend-Caching von Zeiteinträgen',
                        'Lazy Loading für historische Daten'
                    ]
                }
            ]
        },
        challenges: {
            title: 'Herausforderungen und Lösungen',
            timezones: {
                title: '1. Zeitzonen-Handling',
                description: 'Eine besondere Herausforderung war die korrekte Behandlung von Zeitzonen:',
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
                title: '2. Concurrent Updates',
                description: 'Die Behandlung gleichzeitiger Updates erforderte spezielle Aufmerksamkeit:',
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
                title: '3. Offline-Fähigkeit',
                description: 'Für die Offline-Funktionalität implementierten wir eine Service Worker-Strategie:',
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
            title: 'Fazit',
            description: 'Die Entwicklung einer Zeiterfassungslösung erfordert sorgfältige Planung und Berücksichtigung zahlreicher Geschäftsregeln. Durch den Einsatz moderner Technologien wie Next.js, TypeScript und Flask konnten wir eine robuste und benutzerfreundliche Lösung implementieren.',
            keyPoints: [
                'Strikte Typisierung mit TypeScript',
                'Umfassende Validierungslogik',
                'Effizientes Datenbankdesign',
                'Benutzerfreundliche Fehlerbehandlung'
            ],
            results: 'Die Lösung ist seit mehreren Monaten erfolgreich im Einsatz und verarbeitet täglich hunderte von Zeiteinträgen zuverlässig.'
        }
    }
};
