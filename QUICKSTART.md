# Quick Start Guide

## Where to Start?

You now have a complete plan and structure for your Montenegrin language learning platform. Here's your roadmap:

## Step 1: Choose Your Tech Stack

### Recommended Stack (Fastest Development)
- **Backend**: Node.js + Express + TypeScript
- **Frontend**: Next.js + React + TypeScript
- **Database**: PostgreSQL
- **Authentication**: JWT

### Alternative Stack (More Features Later)
- **Backend**: Python + FastAPI
- **Frontend**: Next.js + React + TypeScript
- **Database**: PostgreSQL
- **Authentication**: JWT

## Step 2: Initial Setup

### Option A: Node.js Backend (Recommended)

```bash
# Create backend directory
mkdir backend
cd backend
npm init -y

# Install dependencies
npm install express cors dotenv bcrypt jsonwebtoken
npm install -D typescript @types/node @types/express @types/bcrypt @types/jsonwebtoken ts-node nodemon

# Install database
npm install pg  # PostgreSQL client
# OR
npm install typeorm  # ORM option
# OR
npm install prisma  # Prisma ORM (recommended for ease of use)
```

### Option B: Python Backend

```bash
# Create backend directory
mkdir backend
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install fastapi uvicorn sqlalchemy psycopg2-binary python-jose[cryptography] passlib[bcrypt] python-dotenv
```

### Frontend Setup

```bash
# Create frontend directory
npx create-next-app@latest frontend --typescript --tailwind --app
cd frontend

# Install additional dependencies
npm install axios zustand react-query
```

## Step 3: Database Setup

1. Install PostgreSQL locally or use a cloud service (Supabase, Railway, etc.)

2. Create database:
```sql
CREATE DATABASE montenegrin_learning;
```

3. Run the schema from `database/schema.sql` (to be created)

## Step 4: Development Order

1. **Backend Setup** (Day 1)
   - Set up Express/FastAPI server
   - Configure database connection
   - Create basic folder structure

2. **Authentication** (Day 2)
   - User registration
   - User login
   - JWT token generation

3. **Database Models** (Day 2-3)
   - Create all tables
   - Set up relationships
   - Create seed data structure

4. **Lessons API** (Day 3-4)
   - CRUD endpoints for lessons
   - Get lessons by level/topic

5. **Exercises API** (Day 4-5)
   - Exercise endpoints
   - Answer validation logic

6. **Progress Tracking** (Day 5-6)
   - Track lesson completion
   - XP calculation
   - Streak tracking

7. **Frontend** (Day 7+)
   - Authentication pages
   - Dashboard
   - Lesson browser
   - Exercise interface

## Step 5: Content Creation

Once the system is set up, you'll need to create:
- 10-20 beginner lessons
- Exercises for each lesson
- Vocabulary database
- Audio files (optional initially)

## Getting Help

- **Documentation**: See `docs/` folder for detailed architecture and API docs
- **Plan**: See `PLAN.md` for day-by-day development plan
- **Architecture**: See `docs/architecture.md` for system design

## Next Immediate Actions

1. **Decide on tech stack** (Node.js vs Python)
2. **Set up backend project** with chosen framework
3. **Set up frontend project** with Next.js
4. **Create database schema** and initial migrations
5. **Implement authentication** (registration + login)

## Questions to Answer

Before starting development, consider:
- Do you want both Cyrillic and Latin script support from day 1?
- Will you create content yourself or need a CMS?
- Do you want mobile app support?
- Will you need offline functionality?

## Recommended First Steps

I recommend starting with:
1. **Node.js + Express backend** (simpler, faster to prototype)
2. **Next.js frontend** (great DX, SSR capabilities)
3. **Prisma ORM** (excellent TypeScript support, easy migrations)
4. **PostgreSQL** (robust, well-supported)

Would you like me to:
- Set up the initial backend project structure?
- Set up the frontend project structure?
- Create the database schema files?
- Start implementing authentication?

Let me know what you'd like to tackle first!

