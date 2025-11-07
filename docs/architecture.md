# System Architecture

## High-Level Architecture

```
┌─────────────────┐
│   Web Browser   │
│   (React/Next)  │
└────────┬────────┘
         │ HTTP/REST API
         │ JWT Authentication
         ▼
┌─────────────────┐
│  Backend API    │
│  (Express/Fast) │
└────────┬────────┘
         │
         ├──────────┐
         │          │
         ▼          ▼
┌─────────────┐ ┌──────────┐
│ PostgreSQL  │ │  Redis   │
│  Database   │ │  Cache   │
└─────────────┘ └──────────┘
```

## Component Architecture

### Backend Layers

1. **Routes Layer** (`/routes`)
   - Define API endpoints
   - Request validation
   - Route handlers

2. **Controllers Layer** (`/controllers`)
   - Business logic orchestration
   - Call services
   - Format responses

3. **Services Layer** (`/services`)
   - Core business logic
   - Data processing
   - External integrations

4. **Models Layer** (`/models`)
   - Database models/schemas
   - Data access layer
   - ORM/Query builders

5. **Middleware** (`/middleware`)
   - Authentication
   - Authorization
   - Error handling
   - Logging
   - Validation

## Database Schema Design

### Users Table
```sql
users
├── id (UUID, PK)
├── email (VARCHAR, UNIQUE)
├── password_hash (VARCHAR)
├── username (VARCHAR, UNIQUE)
├── preferred_script (ENUM: 'latin', 'cyrillic')
├── current_level (INTEGER)
├── total_xp (INTEGER)
├── current_streak (INTEGER)
├── longest_streak (INTEGER)
├── last_active_date (DATE)
├── created_at (TIMESTAMP)
└── updated_at (TIMESTAMP)
```

### Lessons Table
```sql
lessons
├── id (UUID, PK)
├── title (VARCHAR)
├── description (TEXT)
├── level (INTEGER: 1-5)
├── topic (VARCHAR: 'greetings', 'numbers', etc.)
├── order_index (INTEGER)
├── xp_reward (INTEGER)
├── created_at (TIMESTAMP)
└── updated_at (TIMESTAMP)
```

### Exercises Table
```sql
exercises
├── id (UUID, PK)
├── lesson_id (UUID, FK)
├── type (ENUM: 'translation', 'multiple_choice', 'fill_blank', 'matching')
├── question (TEXT)
├── correct_answer (TEXT)
├── options (JSONB) -- for multiple choice
├── hints (TEXT[])
├── explanation (TEXT)
├── order_index (INTEGER)
└── created_at (TIMESTAMP)
```

### User Progress Table
```sql
user_progress
├── id (UUID, PK)
├── user_id (UUID, FK)
├── lesson_id (UUID, FK)
├── exercise_id (UUID, FK, nullable)
├── status (ENUM: 'not_started', 'in_progress', 'completed')
├── attempts (INTEGER)
├── correct_attempts (INTEGER)
├── completed_at (TIMESTAMP, nullable)
└── updated_at (TIMESTAMP)
```

### Vocabulary Table
```sql
vocabulary
├── id (UUID, PK)
├── montenegrin_latin (VARCHAR)
├── montenegrin_cyrillic (VARCHAR)
├── english_translation (VARCHAR)
├── pronunciation (VARCHAR) -- IPA
├── audio_url (VARCHAR, nullable)
├── part_of_speech (VARCHAR)
├── lesson_id (UUID, FK, nullable)
└── created_at (TIMESTAMP)
```

### User Vocabulary Table
```sql
user_vocabulary
├── id (UUID, PK)
├── user_id (UUID, FK)
├── vocabulary_id (UUID, FK)
├── mastery_level (INTEGER: 0-5)
├── next_review_date (DATE)
├── review_count (INTEGER)
└── created_at (TIMESTAMP)
```

### Achievements Table
```sql
achievements
├── id (UUID, PK)
├── name (VARCHAR)
├── description (TEXT)
├── icon_url (VARCHAR)
├── xp_threshold (INTEGER, nullable)
├── streak_threshold (INTEGER, nullable)
└── created_at (TIMESTAMP)
```

### User Achievements Table
```sql
user_achievements
├── id (UUID, PK)
├── user_id (UUID, FK)
├── achievement_id (UUID, FK)
├── unlocked_at (TIMESTAMP)
└── UNIQUE(user_id, achievement_id)
```

## API Endpoints Design

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh JWT token
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Lessons
- `GET /api/lessons` - List all lessons (with filters)
- `GET /api/lessons/:id` - Get lesson details
- `GET /api/lessons/:id/exercises` - Get exercises for lesson
- `GET /api/lessons/level/:level` - Get lessons by level

### Exercises
- `GET /api/exercises/:id` - Get exercise details
- `POST /api/exercises/:id/submit` - Submit exercise answer
- `GET /api/exercises/:id/hint` - Get hint (costs points)

### Progress
- `GET /api/progress` - Get user's overall progress
- `GET /api/progress/lessons` - Get lesson progress
- `POST /api/progress/lessons/:id/complete` - Mark lesson complete
- `GET /api/progress/stats` - Get user statistics

### Vocabulary
- `GET /api/vocabulary` - Get vocabulary list
- `POST /api/vocabulary/:id/save` - Save word to personal list
- `GET /api/vocabulary/personal` - Get user's saved vocabulary
- `POST /api/vocabulary/:id/review` - Update review status

### User Profile
- `GET /api/users/me` - Get user profile
- `PATCH /api/users/me` - Update user profile
- `GET /api/users/me/achievements` - Get user achievements
- `GET /api/users/me/stats` - Get user statistics

## Security Considerations

1. **Authentication**
   - JWT tokens with expiration
   - Refresh token rotation
   - Password hashing with bcrypt (10+ rounds)

2. **Authorization**
   - Role-based access control (future: admin role)
   - User can only access their own data

3. **Input Validation**
   - Validate all user inputs
   - Sanitize user-generated content
   - Rate limiting on API endpoints

4. **Data Protection**
   - HTTPS in production
   - CORS configuration
   - SQL injection prevention (parameterized queries)

## Performance Considerations

1. **Caching Strategy**
   - Cache lesson content (Redis)
   - Cache user progress (short TTL)
   - Cache vocabulary lists

2. **Database Optimization**
   - Indexes on frequently queried columns
   - Pagination for large lists
   - Connection pooling

3. **Frontend Optimization**
   - Code splitting
   - Lazy loading
   - Image optimization
   - API response caching

## Deployment Architecture

### Development
- Local PostgreSQL database
- Backend and frontend run separately
- Hot reload enabled

### Production
- Docker containers for backend and database
- Frontend deployed to Vercel/Netlify
- Backend deployed to Railway/Render/AWS
- PostgreSQL on managed service (Supabase, AWS RDS)

## Technology Choices Rationale

### Backend: Node.js + Express
- **Pros**: JavaScript ecosystem, fast development, good for real-time features
- **Cons**: Single-threaded (but fine for this use case)

### Frontend: Next.js
- **Pros**: SSR, great DX, built-in routing, API routes
- **Cons**: Slightly more complex than plain React

### Database: PostgreSQL
- **Pros**: Relational data fits well, ACID compliance, JSON support
- **Cons**: Requires schema management (but worth it)

### Authentication: JWT
- **Pros**: Stateless, scalable, works well with SPAs
- **Cons**: Harder to revoke (but refresh tokens help)

