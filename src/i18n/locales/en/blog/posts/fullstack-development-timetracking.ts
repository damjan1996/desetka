// src/i18n/locales/en/blog/posts/fullstack-development-timetracking.ts
export const fullstackDevelopmentTimetracking = {
    meta: {
        title: 'Fullstack Development with Python and React: Architecture of our Time Tracking Solution',
        date: '2024-02-09',
        excerpt: 'A technical deep dive into the implementation of a modern time tracking solution',
        category: 'System Architecture',
        coverImage: '/images/posts/fullstack-development-timetracking/cover.jpg',
        tags: ['Python', 'React', 'TypeScript', 'MSSQL', 'System Design']
    },
    content: {
        intro: {
            title: 'Fullstack Development with Python and React: Architecture of our Time Tracking Solution',
            description: 'Developing a robust time tracking solution requires not only technical expertise but also a deep understanding of complex business rules and user requirements. In this article, I share our experiences in implementing a modern fullstack time tracking solution with Python and React.'
        },
        systemArchitecture: {
            title: 'System Architecture',
            frontend: {
                title: 'Frontend (Next.js + TypeScript)',
                description: 'The frontend architecture is based on Next.js with TypeScript and follows a component-based approach:',
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
                description: 'The backend uses Flask for the API and MSSQL for data persistence:',
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
            title: 'Business Logic Implementation',
            validation: {
                title: 'Time Entry Validation',
                description: 'The validation logic ensures that all business rules are followed:',
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
            title: 'Database Design',
            description: 'The MSSQL database schema is designed for efficiency and integrity:',
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
            title: 'Security Implementation',
            authentication: {
                title: 'JWT Authentication',
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
            title: 'Best Practices and Learnings',
            points: [
                {
                    title: 'Data Validation at Multiple Levels',
                    items: [
                        'Frontend validation for immediate feedback',
                        'Backend validation for business rules',
                        'Database constraints for data integrity'
                    ]
                },
                {
                    title: 'Error Handling',
                    items: [
                        'Structured error messages',
                        'User-friendly error messages in frontend',
                        'Detailed logging in backend'
                    ]
                },
                {
                    title: 'Performance Optimization',
                    items: [
                        'Indexing of critical database fields',
                        'Frontend caching of time entries',
                        'Lazy loading for historical data'
                    ]
                }
            ]
        },
        challenges: {
            title: 'Challenges and Solutions',
            timezones: {
                title: '1. Timezone Handling',
                description: 'A particular challenge was the correct handling of timezones:',
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
                description: 'Handling concurrent updates required special attention:',
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
                title: '3. Offline Capability',
                description: 'For offline functionality, we implemented a service worker strategy:',
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
            title: 'Conclusion',
            description: 'Developing a time tracking solution requires careful planning and consideration of numerous business rules. By using modern technologies like Next.js, TypeScript, and Flask, we were able to implement a robust and user-friendly solution.',
            keyPoints: [
                'Strict typing with TypeScript',
                'Comprehensive validation logic',
                'Efficient database design',
                'User-friendly error handling'
            ],
            results: 'The solution has been successfully in use for several months and reliably processes hundreds of time entries daily.'
        }
    }
};
