# API Documentation

## Base URL
- Development: `http://localhost:3001/api`
- Production: `https://api.yourdomain.com/api`

## Authentication

Most endpoints require authentication via JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "username": "username",
  "password": "password123",
  "preferred_script": "latin"  // or "cyrillic"
}

Response: 201 Created
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "username",
    "preferred_script": "latin"
  },
  "token": "jwt_token",
  "refreshToken": "refresh_token"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Response: 200 OK
{
  "user": { ... },
  "token": "jwt_token",
  "refreshToken": "refresh_token"
}
```

#### Get Current User
```http
GET /auth/me
Authorization: Bearer <token>

Response: 200 OK
{
  "id": "uuid",
  "email": "user@example.com",
  "username": "username",
  "preferred_script": "latin",
  "current_level": 1,
  "total_xp": 0,
  "current_streak": 0,
  "longest_streak": 0
}
```

### Lessons

#### List Lessons
```http
GET /lessons?level=1&topic=greetings
Authorization: Bearer <token>

Response: 200 OK
{
  "lessons": [
    {
      "id": "uuid",
      "title": "Greetings",
      "description": "Learn basic greetings",
      "level": 1,
      "topic": "greetings",
      "order_index": 1,
      "xp_reward": 10,
      "progress": {
        "status": "not_started",
        "completed": false
      }
    }
  ],
  "total": 10
}
```

#### Get Lesson Details
```http
GET /lessons/:id
Authorization: Bearer <token>

Response: 200 OK
{
  "id": "uuid",
  "title": "Greetings",
  "description": "Learn basic greetings",
  "level": 1,
  "topic": "greetings",
  "xp_reward": 10,
  "exercise_count": 5,
  "progress": {
    "status": "in_progress",
    "completed_exercises": 2,
    "total_exercises": 5
  }
}
```

#### Get Lesson Exercises
```http
GET /lessons/:id/exercises
Authorization: Bearer <token>

Response: 200 OK
{
  "exercises": [
    {
      "id": "uuid",
      "type": "translation",
      "question": "Translate: Hello",
      "order_index": 1,
      "progress": {
        "status": "completed",
        "attempts": 1,
        "correct_attempts": 1
      }
    }
  ]
}
```

### Exercises

#### Get Exercise
```http
GET /exercises/:id
Authorization: Bearer <token>

Response: 200 OK
{
  "id": "uuid",
  "lesson_id": "uuid",
  "type": "translation",
  "question": "Translate: Hello",
  "options": null,  // null for translation, array for multiple_choice
  "hints_available": true,
  "hint_cost": 5
}
```

#### Submit Exercise Answer
```http
POST /exercises/:id/submit
Authorization: Bearer <token>
Content-Type: application/json

{
  "answer": "Zdravo"
}

Response: 200 OK
{
  "correct": true,
  "correct_answer": "Zdravo",
  "explanation": "Zdravo is the standard greeting in Montenegrin.",
  "xp_earned": 10,
  "progress": {
    "attempts": 1,
    "correct_attempts": 1,
    "status": "completed"
  }
}
```

#### Get Hint
```http
GET /exercises/:id/hint
Authorization: Bearer <token>

Response: 200 OK
{
  "hint": "This greeting starts with 'Z'",
  "xp_cost": 5
}
```

### Progress

#### Get User Progress
```http
GET /progress
Authorization: Bearer <token>

Response: 200 OK
{
  "total_lessons": 50,
  "completed_lessons": 5,
  "in_progress_lessons": 2,
  "total_xp": 250,
  "current_level": 1,
  "current_streak": 7,
  "longest_streak": 7,
  "level_progress": {
    "current_xp": 250,
    "xp_for_next_level": 500
  }
}
```

#### Get Lesson Progress
```http
GET /progress/lessons
Authorization: Bearer <token>

Response: 200 OK
{
  "lessons": [
    {
      "lesson_id": "uuid",
      "status": "completed",
      "completed_at": "2024-01-15T10:30:00Z",
      "xp_earned": 50
    }
  ]
}
```

#### Complete Lesson
```http
POST /progress/lessons/:id/complete
Authorization: Bearer <token>

Response: 200 OK
{
  "lesson_id": "uuid",
  "status": "completed",
  "xp_earned": 50,
  "total_xp": 300,
  "level_up": false
}
```

### Vocabulary

#### Get Vocabulary List
```http
GET /vocabulary?lesson_id=uuid&page=1&limit=20
Authorization: Bearer <token>

Response: 200 OK
{
  "vocabulary": [
    {
      "id": "uuid",
      "montenegrin_latin": "Zdravo",
      "montenegrin_cyrillic": "Здраво",
      "english_translation": "Hello",
      "pronunciation": "/zdrâʋo/",
      "audio_url": "https://...",
      "part_of_speech": "interjection"
    }
  ],
  "total": 100,
  "page": 1,
  "limit": 20
}
```

#### Save to Personal Vocabulary
```http
POST /vocabulary/:id/save
Authorization: Bearer <token>

Response: 201 Created
{
  "vocabulary_id": "uuid",
  "saved": true,
  "message": "Word added to your vocabulary list"
}
```

#### Get Personal Vocabulary
```http
GET /vocabulary/personal?review_due=true
Authorization: Bearer <token>

Response: 200 OK
{
  "vocabulary": [
    {
      "id": "uuid",
      "word": {
        "montenegrin_latin": "Zdravo",
        "montenegrin_cyrillic": "Здраво",
        "english_translation": "Hello"
      },
      "mastery_level": 3,
      "next_review_date": "2024-01-20",
      "review_count": 5
    }
  ]
}
```

### User Profile

#### Get User Stats
```http
GET /users/me/stats
Authorization: Bearer <token>

Response: 200 OK
{
  "total_xp": 1250,
  "current_level": 2,
  "current_streak": 15,
  "longest_streak": 15,
  "lessons_completed": 12,
  "exercises_completed": 150,
  "vocabulary_mastered": 45,
  "achievements_unlocked": 8,
  "total_achievements": 20
}
```

#### Update User Profile
```http
PATCH /users/me
Authorization: Bearer <token>
Content-Type: application/json

{
  "preferred_script": "cyrillic",
  "username": "new_username"
}

Response: 200 OK
{
  "id": "uuid",
  "username": "new_username",
  "preferred_script": "cyrillic",
  ...
}
```

## Error Responses

All errors follow this format:
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {} // Optional additional details
  }
}
```

### Common Error Codes
- `UNAUTHORIZED` (401) - Missing or invalid token
- `FORBIDDEN` (403) - User doesn't have permission
- `NOT_FOUND` (404) - Resource not found
- `VALIDATION_ERROR` (400) - Invalid input data
- `INTERNAL_ERROR` (500) - Server error

### Example Error Response
```http
Response: 401 Unauthorized
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired token"
  }
}
```

