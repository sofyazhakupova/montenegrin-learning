# Montenegrin Language Learning Platform

A Duolingo-like platform specifically designed for learning Montenegrin (Serbian variant).

## Project Overview

This platform provides interactive language learning experiences with:
- Structured lessons organized by difficulty levels
- Multiple exercise types (translation, multiple choice, listening, speaking)
- Progress tracking and gamification
- User authentication and personalized learning paths

## Tech Stack Recommendation

### Backend
- **Node.js + Express** or **Python + Flask/FastAPI**
- **PostgreSQL** for relational data (users, lessons, progress)
- **JWT** for authentication
- **Redis** (optional) for caching and session management

### Frontend
- **React + Next.js** for web application
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Query** for data fetching

### Additional Tools
- **Docker** for containerization
- **Jest/Vitest** for testing
- **ESLint/Prettier** for code quality

## Project Structure

```
language-learning-platform/
├── backend/                 # Backend API
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Auth, validation, etc.
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Helper functions
│   │   └── config/         # Configuration files
│   ├── migrations/         # Database migrations
│   ├── tests/              # Backend tests
│   └── package.json
│
├── frontend/               # Frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # API client
│   │   ├── store/          # State management (Redux/Zustand)
│   │   ├── utils/          # Helper functions
│   │   └── styles/         # CSS/styling
│   ├── public/             # Static assets
│   └── package.json
│
├── shared/                 # Shared types/utilities
│   └── types/              # TypeScript types shared between frontend/backend
│
├── database/               # Database setup
│   ├── schema.sql          # Database schema
│   └── seeds/              # Seed data (lessons, exercises)
│
├── docs/                   # Documentation
│   ├── api.md              # API documentation
│   ├── architecture.md     # System architecture
│   └── features.md         # Feature specifications
│
├── docker-compose.yml      # Docker setup
└── README.md
```

## Core Features

### Phase 1: Foundation
1. **User Authentication**
   - User registration/login
   - JWT-based authentication
   - Password reset functionality

2. **Basic Course Structure**
   - Levels (Beginner, Intermediate, Advanced)
   - Lessons organized by topics
   - Topics: Greetings, Numbers, Food, Travel, etc.

3. **Exercise Types**
   - Translation (English ↔ Montenegrin)
   - Multiple choice
   - Fill in the blank
   - Word matching

### Phase 2: Core Learning Features
4. **Progress Tracking**
   - Lesson completion status
   - XP points system
   - Daily streaks
   - Skill tree visualization

5. **Gamification**
   - Achievements/badges
   - Leaderboards
   - Daily goals
   - Hearts/lives system (optional)

### Phase 3: Advanced Features
6. **Audio/Listening Exercises**
   - Audio playback
   - Pronunciation practice
   - Listening comprehension

7. **Vocabulary Management**
   - Personal vocabulary list
   - Spaced repetition system
   - Flashcard review

8. **Grammar Lessons**
   - Grammar explanations
   - Grammar exercises
   - Practice quizzes

## Database Schema Overview

### Core Tables
- `users` - User accounts and profiles
- `lessons` - Lesson content and metadata
- `exercises` - Exercise definitions
- `user_progress` - Track user's lesson/exercise completion
- `user_achievements` - User badges and achievements
- `vocabulary` - Word/phrase database
- `user_vocabulary` - User's saved vocabulary

## Development Roadmap

### Week 1-2: Setup & Infrastructure
- [ ] Initialize backend and frontend projects
- [ ] Set up database schema
- [ ] Implement user authentication
- [ ] Create basic API structure

### Week 3-4: Core Features
- [ ] Build lesson management system
- [ ] Create exercise engine
- [ ] Implement progress tracking
- [ ] Design basic UI/UX

### Week 5-6: Content & Polish
- [ ] Add initial lesson content (10-20 lessons)
- [ ] Implement gamification features
- [ ] Improve UI/UX
- [ ] Add audio functionality

### Week 7+: Advanced Features
- [ ] Spaced repetition system
- [ ] Advanced analytics
- [ ] Mobile responsiveness
- [ ] Performance optimization

## Getting Started

### Prerequisites
- Node.js 18+ or Python 3.10+
- PostgreSQL 14+
- npm/yarn or pip

### Installation
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

## Montenegrin Language Considerations

### Key Features to Implement
1. **Cyrillic and Latin Scripts**
   - Support both writing systems
   - Allow users to choose preferred script
   - Translation exercises for both

2. **Grammar Rules**
   - Cases (7 cases in Serbian/Montenegrin)
   - Verb conjugations
   - Gender agreement
   - Aspect (perfective/imperfective verbs)

3. **Pronunciation**
   - Audio files for native pronunciation
   - IPA notation support

## Contributing

This is a learning platform project. Contributions welcome!

## License

[Specify license]


