# EcoCollect: Your Green Companion

## Full Stack Development Project

---

## Project Overview

EcoCollect is a full-stack web application that promotes environmental awareness and sustainable recycling practices through gamification, education, and community engagement. Built with the MERN-like stack (MongoDB, Express, React-style frontend, Node.js), the platform combines interactive learning, real-time tracking, and social accountability to motivate eco-conscious behavior.

**Live Demo:** [GitHub Repository](https://github.com/khushisingh1-star/FULL-STACK-DEVELOPEMENT-PROJECT--ECOCOLLECT)

---

## Technology Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, Chart.js |
| **Backend** | Node.js, Express.js, bcryptjs, CORS |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Tools** | Git, GitHub, Nodemon, Postman |

---

## Key Features

### User Authentication
- Secure registration and login with bcryptjs password hashing
- Session management

### Interactive Dashboard
- Real-time recycling statistics visualization
- Monthly bar charts, material distribution pie charts, quiz performance doughnut charts
- Carbon offset progress tracking with impact equivalents (trees saved, water conserved, energy saved)
- Achievement badges and streak tracking

### Schedule Pickup Module
- Create and manage recycling pickups with date, time, location, and material selection
- Pickup tracker with status updates
- XP rewards for scheduling and completing pickups

### Eco Guide
- Educational carousel with sustainability topics
- Recycling hierarchies and environmental impact calculations

### Eco Quiz
- Multiple-choice questions with immediate feedback
- Streak tracking and XP rewards
- Gamification with confetti and sound effects

### Drag-and-Drop Recycling Game
- Interactive categorization of recyclable vs. non-recyclable items
- Real-time scoring with visual feedback

### Community Module
- Leaderboard ranking users by XP
- Collective carbon offset goals with progress tracking
- Public pledge system with XP rewards

---

## System Architecture

```
┌─────────────────────────────────────────────────────┐
│                   CLIENT LAYER                      │
│    HTML/CSS/JS (SPA) + Bootstrap + Chart.js        │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│                   APPLICATION LAYER                 │
│         Node.js + Express (RESTful API)            │
│    Authentication | Business Logic | Validation     │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│                    DATA LAYER                       │
│              MongoDB Atlas (Cloud)                  │
│          Users | Pickups | Pledges                 │
└─────────────────────────────────────────────────────┘
```

---

## Database Schema

### User
```
email: String (unique, required)
password: String (hashed, required)
xp: Number (default: 0)
streak: Number (default: 0)
badges: [String]
createdAt: Date
```

### Pickup
```
user: String (required)
date: String (required)
time: String (required)
location: String (required)
pickupType: String (required)
phone: String (required)
materials: [String] (required)
notes: String
status: String (default: "Scheduled")
createdAt: Date
```

### Pledge
```
user: String (required)
pledge: String (required)
createdAt: Date
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register` | Register new user |
| POST | `/api/login` | Authenticate user |
| POST | `/api/pickups` | Schedule pickup |
| GET | `/api/pickups/:userEmail` | Get user pickups |
| PUT | `/api/pickups/:id/complete` | Complete pickup |
| GET | `/api/stats/:userEmail` | Get user statistics |
| GET | `/api/community/leaderboard` | Get top 10 users |
| GET | `/api/community/goal` | Get community carbon offset |
| POST | `/api/pledges` | Create pledge |
| GET | `/api/pledges` | Get recent pledges |

---

## Gamification System

| Activity | XP Reward | Badge | XP Required |
|----------|-----------|-------|-------------|
| Schedule Pickup | 10 | Plastic Buster | 100 |
| Complete Pickup | 20 | Paper Saver | 200 |
| Make Pledge | 5 | Eco Warrior | 500 |
| Quiz Completion | Variable | - | - |

---

## Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)

### Steps

```bash
# Clone repository
git clone https://github.com/khushisingh1-star/FULL-STACK-DEVELOPEMENT-PROJECT--ECOCOLLECT.git
cd FULL-STACK-DEVELOPEMENT-PROJECT--ECOCOLLECT

# Install backend dependencies
cd backend
npm install

# Create .env file
echo "MONGODB_URI=your_mongodb_connection_string" > .env
echo "PORT=3000" >> .env

# Start server
npm start
```

---

## Testing

**Functional Testing**
- API endpoints tested with Postman
- Dashboard, quiz, game, and pickup tracking verified
- Authentication flow validated

**UI/UX Testing**
- Responsive design tested across devices
- Animations and visual feedback confirmed
- Accessibility standards maintained

**Engagement Testing**
- Streak tracking verified
- Leaderboard and community features functional
- Gamification rewards triggered correctly

---

## Future Enhancements

- **Authentication**: Implement JWT with refresh tokens
- **Mobile**: React Native app with camera integration
- **AI Integration**: Personalized recycling tips and image recognition
- **Social Features**: Friend system, group challenges
- **Analytics**: Enhanced reports and predictions
- **Notifications**: Push reminders for pickups and achievements

---

## Contributor

khushi singh

---

## References

1. EPA - Recycling Basics
2. UN Sustainable Development Goals - Goal 12
3. Chou, Y. (2015). Actionable Gamification
4. Express.js Documentation
5. MongoDB Documentation
6. Mongoose ODM Documentation

---

