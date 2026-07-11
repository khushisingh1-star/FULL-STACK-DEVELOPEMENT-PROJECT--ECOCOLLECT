# EcoCollect: Your Green Companion
## Full Stack Development Project Documentation

---

## Table of Contents

1. Project Overview
2. System Architecture
3. Technology Stack
4. Features Breakdown
5. Database Design
6. API Documentation
7. Frontend Implementation
8. Backend Implementation
9. Authentication System
10. Gamification System
11. Community Features
12. Educational Modules
13. Interactive Gameplay
14. Security Considerations
15. Testing Strategy
16. Deployment Guide
17. Performance Optimization
18. Future Enhancements
19. Troubleshooting Guide
20. Project Team

---

## 1. Project Overview

### 1.1 Introduction

EcoCollect is a comprehensive full-stack web application designed to bridge the gap between environmental awareness and sustainable action. The platform leverages modern web technologies to create an engaging, educational, and motivational ecosystem that encourages users to adopt and maintain eco-friendly behaviors.

The project was developed as part of the Full Stack Development curriculum for the Third Year B.Tech CSE (Cybersecurity and Forensics) program. It demonstrates the practical application of full-stack development principles, database management, API design, and user experience optimization.

### 1.2 Problem Statement

Despite growing awareness of environmental issues, many individuals struggle to translate knowledge into consistent sustainable actions. Existing recycling programs often lack engagement mechanisms, real-time feedback, and social accountability features. This gap between awareness and action results in lower recycling rates and reduced environmental impact.

### 1.3 Solution

EcoCollect addresses this challenge by providing:

- Interactive educational content that makes learning about sustainability engaging
- Gamification elements that reward consistent eco-friendly behaviors
- Social features that foster community accountability and support
- Real-time tracking and visualization of environmental impact
- Practical tools for scheduling and managing recycling activities

### 1.4 Project Objectives

- Educate users on environmental concepts and sustainable practices
- Provide a platform for tracking and visualizing personal environmental impact
- Motivate engagement through gamification and reward systems
- Foster social accountability through community features
- Deliver a seamless, responsive user experience

### 1.5 Theoretical Foundations

The project is grounded in established psychological and pedagogical theories:

- **Behavioral Psychology**: Positive reinforcement through XP, badges, and streaks
- **Habit Formation**: Consistent engagement through daily tasks and challenges
- **Social Learning Theory**: Peer comparison and community engagement
- **Experiential Learning**: Hands-on activities and interactive modules
- **Multimedia Learning Theory**: Combining visuals, text, and interactivity

---

## 2. System Architecture

### 2.1 High-Level Architecture

EcoCollect follows a modern three-tier architecture:

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │   HTML/CSS  │  │  JavaScript │  │   Bootstrap 5       │ │
│  │   Frontend  │  │  (SPA)      │  │   Chart.js          │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP/REST API
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      APPLICATION LAYER                      │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                    Node.js + Express                    ││
│  │  ┌─────────┐  ┌─────────┐  ┌─────────────────────────┐ ││
│  │  │ Routes  │  │ Controllers│  │   Middleware           │ ││
│  │  └─────────┘  └─────────┘  └─────────────────────────┘ ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
                              │
                              │ MongoDB Driver
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       DATA LAYER                           │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                    MongoDB Atlas                        ││
│  │  ┌─────────┐  ┌─────────┐  ┌─────────────────────────┐ ││
│  │  │  Users  │  │ Pickups │  │     Pledges            │ ││
│  │  └─────────┘  └─────────┘  └─────────────────────────┘ ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Component Breakdown

#### Frontend (Client Layer)
- **Single Page Application (SPA)**: All modules accessible without page reloads
- **Responsive Design**: Bootstrap 5 ensures compatibility across devices
- **Data Visualization**: Chart.js for interactive dashboards
- **Real-time Feedback**: Confetti effects and sound notifications
- **Drag-and-Drop**: Interactive game mechanics

#### Backend (Application Layer)
- **RESTful API**: Express.js provides structured endpoints
- **Authentication**: Password hashing with bcryptjs
- **Business Logic**: XP calculation, badge assignment, streak tracking
- **Data Validation**: Schema validation through Mongoose

#### Database (Data Layer)
- **MongoDB Atlas**: Cloud-based document storage
- **Mongoose ODM**: Object modeling and validation
- **Collections**: Users, Pickups, Pledges

---

## 3. Technology Stack

### 3.1 Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| HTML5 | - | Semantic markup and structure |
| CSS3 | - | Custom styling and animations |
| JavaScript (ES6+) | - | Dynamic functionality |
| Bootstrap | 5.3.0 | Responsive layout and components |
| Chart.js | 4.4.1 | Data visualization |
| Canvas Confetti | 1.6.0 | Celebration effects |
| Font Awesome | 6.4.0 | Iconography |

### 3.2 Backend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 18.x | JavaScript runtime |
| Express.js | 4.18.2 | Web application framework |
| Mongoose | 7.5.0 | MongoDB object modeling |
| bcryptjs | 2.4.3 | Password hashing |
| cors | 2.8.5 | Cross-origin resource sharing |
| dotenv | 16.3.1 | Environment variable management |
| Nodemon | 3.0.1 | Development auto-restart |

### 3.3 Database Technology

| Technology | Version | Purpose |
|------------|---------|---------|
| MongoDB Atlas | 5.9.2 | Cloud database service |
| MongoDB Driver | - | Native driver connection |
| Mongoose | 7.5.0 | Schema definition and validation |

### 3.4 Development Tools

| Tool | Purpose |
|------|---------|
| Visual Studio Code | Code editor |
| Git | Version control |
| GitHub | Repository hosting |
| Postman | API testing |
| MongoDB Compass | Database GUI |
| Chrome DevTools | Frontend debugging |

---

## 4. Features Breakdown

### 4.1 Core Features Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    ECOCOLLECT PLATFORM                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │            USER AUTHENTICATION                      │   │
│  │  • Registration  • Login  • Session Management     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              DASHBOARD MODULE                       │   │
│  │  • Statistics  • Charts  • Achievements            │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │            SCHEDULE PICKUP MODULE                   │   │
│  │  • Scheduling  • Tracking  • Completion            │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              ECO GUIDE MODULE                       │   │
│  │  • Educational Content  • Interactive Carousel     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │               ECO QUIZ MODULE                       │   │
│  │  • Knowledge Testing  • Streak Tracking            │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │        FUN INTERACTION GAME MODULE                  │   │
│  │  • Drag-and-Drop  • Categorization  • Scoring      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │           COMMUNITY MODULE                          │   │
│  │  • Leaderboard  • Goals  • Pledges                │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Feature Descriptions

#### 4.2.1 Authentication Module
- Secure user registration with password hashing
- Login with email and password
- Session management via user object
- Logout functionality

#### 4.2.2 Dashboard Module
- Real-time recycling statistics
- Interactive data visualizations
- Progress tracking and goal setting
- Achievement display and streak monitoring

#### 4.2.3 Schedule Pickup Module
- Create and schedule recycling pickups
- Track pickup status (scheduled/completed)
- Automatic XP rewards for completion
- History view of past pickups

#### 4.2.4 Eco Guide Module
- Educational content on sustainability
- Carousel-based interactive learning
- Theoretical and practical information
- Environmental impact explanations

#### 4.2.5 Eco Quiz Module
- Multiple-choice question format
- Immediate feedback on answers
- Streak tracking for consecutive correct answers
- XP rewards for completion

#### 4.2.6 Fun Interaction Game
- Drag-and-drop recycling categorization
- Real-time scoring
- Visual and audio feedback
- Learning through hands-on activity

#### 4.2.7 Community Module
- Leaderboard showing top users by XP
- Community carbon offset goals
- Public pledge system
- Social accountability features

---

## 5. Database Design

### 5.1 Schema Design

#### 5.1.1 User Schema

```javascript
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  xp: {
    type: Number,
    default: 0,
    min: 0
  },
  streak: {
    type: Number,
    default: 0,
    min: 0
  },
  badges: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
```

**Field Descriptions:**
- `email`: Primary identifier, unique constraint
- `password`: Hashed password for security
- `xp`: Experience points earned through activities
- `streak`: Consecutive days of engagement
- `badges`: Array of earned achievement badges
- `createdAt`: Timestamp of account creation

#### 5.1.2 Pickup Schema

```javascript
const pickupSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    ref: 'User'
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  pickupType: {
    type: String,
    enum: ['Doorstep', 'Drop-off'],
    required: true
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/
  },
  materials: {
    type: [String],
    enum: ['Plastics', 'Metal', 'Paper'],
    required: true
  },
  notes: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Completed'],
    default: 'Scheduled'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
```

**Field Descriptions:**
- `user`: Reference to user email (foreign key)
- `date`: Scheduled pickup date
- `time`: Scheduled pickup time
- `location`: Address or location description
- `pickupType`: Doorstep or Drop-off
- `phone`: Contact phone number (10 digits)
- `materials`: Array of materials to be recycled
- `notes`: Additional instructions or information
- `status`: Current state of pickup
- `createdAt`: Scheduling timestamp

#### 5.1.3 Pledge Schema

```javascript
const pledgeSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    ref: 'User'
  },
  pledge: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
```

**Field Descriptions:**
- `user`: Reference to user email (foreign key)
- `pledge`: Text content of the pledge
- `createdAt`: Pledge creation timestamp

### 5.2 Data Relationships

```
┌────────────────┐     ┌────────────────┐     ┌────────────────┐
│     USERS      │     │    PICKUPS     │     │    PLEDGES     │
├────────────────┤     ├────────────────┤     ├────────────────┤
│ email (PK)     │────<│ user (FK)      │     │ user (FK)      │<───┐
│ password       │     │ date           │     │ pledge         │    │
│ xp             │     │ time           │     │ createdAt      │    │
│ streak         │     │ location       │     └────────────────┘    │
│ badges         │     │ pickupType     │                           │
│ createdAt      │     │ phone          │                           │
└────────────────┘     │ materials      │                           │
                       │ notes          │                           │
                       │ status         │                           │
                       │ createdAt      │                           │
                       └────────────────┘                           │
                                                                    │
                    ┌────────────────────────────────────────────┘
                    │
                    └─── One-to-Many Relationship

PK: Primary Key
FK: Foreign Key
```

### 5.3 Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         DATA FLOW                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. User Registration/Login                                     │
│     ┌──────────┐     ┌──────────┐     ┌──────────┐           │
│     │  Client  │────▶│   API    │────▶│   DB     │           │
│     │ Request  │     │  Route   │     │  Save    │           │
│     └──────────┘     └──────────┘     └──────────┘           │
│                                                                 │
│  2. Schedule Pickup                                             │
│     ┌──────────┐     ┌──────────┐     ┌──────────┐           │
│     │  Client  │────▶│   API    │────▶│   DB     │           │
│     │  Form    │     │  Route   │     │  Create  │           │
│     └──────────┘     └──────────┘     └──────────┘           │
│                                                                 │
│  3. Complete Pickup                                             │
│     ┌──────────┐     ┌──────────┐     ┌──────────┐           │
│     │  Client  │────▶│   API    │────▶│   DB     │           │
│     │  Action  │     │  Route   │     │  Update  │           │
│     └──────────┘     └──────────┘     └──────────┘           │
│                                                                 │
│  4. Fetch Stats                                                 │
│     ┌──────────┐     ┌──────────┐     ┌──────────┐           │
│     │  Client  │────▶│   API    │────▶│   DB     │           │
│     │  Request │     │  Route   │     │  Query   │           │
│     └──────────┘     └──────────┘     └──────────┘           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. API Documentation

### 6.1 Base URL

```
Development: http://localhost:3000/api
Production: https://your-domain.com/api
```

### 6.2 Authentication Endpoints

#### 6.2.1 User Registration

**POST /api/register**

Registers a new user in the system.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Success Response (201 Created):**
```json
{
  "message": "User registered successfully"
}
```

**Error Responses:**
```json
{
  "message": "User already exists"
}
```
```json
{
  "message": "Server error",
  "error": "Detailed error message"
}
```

#### 6.2.2 User Login

**POST /api/login**

Authenticates a user and returns user data.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Success Response (200 OK):**
```json
{
  "message": "Login successful",
  "user": {
    "email": "user@example.com",
    "xp": 150,
    "streak": 7,
    "badges": ["Plastic Buster"]
  }
}
```

**Error Responses:**
```json
{
  "message": "Invalid credentials"
}
```
```json
{
  "message": "Server error",
  "error": "Detailed error message"
}
```

### 6.3 Pickup Management Endpoints

#### 6.3.1 Schedule Pickup

**POST /api/pickups**

Creates a new pickup schedule.

**Request Body:**
```json
{
  "user": "user@example.com",
  "date": "2026-07-15",
  "time": "14:30",
  "location": "123 Green Street, City",
  "pickupType": "Doorstep",
  "phone": "9876543210",
  "materials": ["Plastics", "Paper"],
  "notes": "Call before arrival"
}
```

**Success Response (201 Created):**
```json
{
  "message": "Pickup scheduled successfully",
  "pickup": {
    "_id": "507f1f77bcf86cd799439011",
    "user": "user@example.com",
    "date": "2026-07-15",
    "time": "14:30",
    "location": "123 Green Street, City",
    "pickupType": "Doorstep",
    "phone": "9876543210",
    "materials": ["Plastics", "Paper"],
    "notes": "Call before arrival",
    "status": "Scheduled",
    "createdAt": "2026-07-11T10:30:00.000Z"
  }
}
```

#### 6.3.2 Get User Pickups

**GET /api/pickups/:userEmail**

Retrieves all pickups for a specific user.

**Parameters:**
- `userEmail`: Email address of the user (path parameter)

**Success Response (200 OK):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "user": "user@example.com",
    "date": "2026-07-15",
    "time": "14:30",
    "location": "123 Green Street, City",
    "pickupType": "Doorstep",
    "phone": "9876543210",
    "materials": ["Plastics", "Paper"],
    "notes": "Call before arrival",
    "status": "Scheduled",
    "createdAt": "2026-07-11T10:30:00.000Z"
  }
]
```

#### 6.3.3 Complete Pickup

**PUT /api/pickups/:id/complete**

Marks a pickup as completed and awards XP.

**Parameters:**
- `id`: Pickup document ID (path parameter)

**Success Response (200 OK):**
```json
{
  "message": "Pickup marked as completed",
  "pickup": {
    "_id": "507f1f77bcf86cd799439011",
    "user": "user@example.com",
    "status": "Completed",
    // ... other fields
  }
}
```

### 6.4 Pledge Endpoints

#### 6.4.1 Create Pledge

**POST /api/pledges**

Creates a new community pledge.

**Request Body:**
```json
{
  "user": "user@example.com",
  "pledge": "I will carry my own bag to reduce plastic waste"
}
```

**Success Response (201 Created):**
```json
{
  "message": "Pledge added successfully",
  "pledge": {
    "_id": "507f1f77bcf86cd799439012",
    "user": "user@example.com",
    "pledge": "I will carry my own bag to reduce plastic waste",
    "createdAt": "2026-07-11T10:30:00.000Z"
  }
}
```

#### 6.4.2 Get Pledges

**GET /api/pledges**

Retrieves recent pledges (limited to 20).

**Success Response (200 OK):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "user": "user@example.com",
    "pledge": "I will carry my own bag to reduce plastic waste",
    "createdAt": "2026-07-11T10:30:00.000Z"
  }
]
```

### 6.5 Statistics Endpoints

#### 6.5.1 Get User Statistics

**GET /api/stats/:userEmail**

Retrieves comprehensive user statistics.

**Parameters:**
- `userEmail`: Email address of the user (path parameter)

**Success Response (200 OK):**
```json
{
  "itemsRecycled": 25,
  "totalWeight": 12.5,
  "carbonOffset": 31,
  "xpEarned": 150,
  "totalPickups": 5,
  "streakDays": 7,
  "badgesEarned": "Plastic Buster, Paper Saver"
}
```

**Field Descriptions:**
- `itemsRecycled`: Total number of items recycled
- `totalWeight`: Total weight in kilograms (0.5kg per item)
- `carbonOffset`: Estimated CO2 offset in kilograms
- `xpEarned`: Total experience points earned
- `totalPickups`: Number of completed pickups
- `streakDays`: Current consecutive engagement streak
- `badgesEarned`: Comma-separated list of earned badges

### 6.6 Community Endpoints

#### 6.6.1 Get Leaderboard

**GET /api/community/leaderboard**

Retrieves top 10 users by XP.

**Success Response (200 OK):**
```json
[
  {
    "email": "user1@example.com",
    "xp": 500,
    "badges": ["Plastic Buster", "Paper Saver", "Eco Warrior"]
  },
  {
    "email": "user2@example.com",
    "xp": 450,
    "badges": ["Plastic Buster"]
  }
]
```

#### 6.6.2 Get Community Goal

**GET /api/community/goal**

Retrieves total community carbon offset.

**Success Response (200 OK):**
```json
{
  "totalCarbon": 250
}
```

### 6.7 Health Check Endpoint

**GET /api/health**

Checks API and database connectivity.

**Success Response (200 OK):**
```json
{
  "message": "EcoCollect API is running!",
  "database": "Connected"
}
```

---

## 7. Frontend Implementation

### 7.1 Application Structure

```
Frontend Application
│
├── HTML Structure
│   ├── Navigation Bar
│   ├── Login Page
│   └── Dashboard
│       ├── Sidebar Menu
│       ├── Stats Module
│       ├── Pickup Module
│       ├── Eco Guide Module
│       ├── Quiz Module
│       ├── Game Module
│       └── Community Module
│
├── CSS Styling
│   ├── Custom Animations
│   ├── Bootstrap Overrides
│   ├── Responsive Design
│   └── Theming
│
└── JavaScript Logic
    ├── Authentication
    ├── API Integration
    ├── State Management
    ├── Chart Rendering
    ├── Quiz Engine
    ├── Game Mechanics
    └── Event Handlers
```

### 7.2 Page Layout

#### 7.2.1 Navigation Bar

The navigation bar provides access to user authentication and logout functionality:

```html
<nav class="navbar fixed-top">
  <div class="container-fluid">
    <span class="navbar-brand">
      <i class="fas fa-recycle"></i> EcoCollect
    </span>
    <button class="btn btn-sm btn-secondary" onclick="logout()">Logout</button>
  </div>
</nav>
```

#### 7.2.2 Login Page

The login page handles user authentication:

```html
<div id="loginPage" class="row justify-content-center">
  <div class="col-md-5">
    <div class="card p-4 my-5">
      <h3 class="mb-3 text-center">Welcome to EcoCollect</h3>
      <input id="email" class="form-control mb-3" placeholder="you@eco.com">
      <input id="password" type="password" class="form-control mb-3" placeholder="password">
      <div class="d-flex justify-content-center gap-3">
        <button class="btn btn-primary" onclick="login()">Login</button>
        <button class="btn btn-secondary" onclick="register()">Register</button>
      </div>
      <div id="loginMessage" class="mt-2 text-center"></div>
    </div>
  </div>
</div>
```

#### 7.2.3 Dashboard Layout

The dashboard uses a sidebar navigation pattern:

```html
<div id="dashboard" style="display:none">
  <div class="row">
    <!-- Sidebar -->
    <div class="col-md-3 mb-4">
      <div class="card p-3 h-100">
        <h5>Menu</h5>
        <div><a onclick="show('stats')">Dashboard</a></div>
        <div><a onclick="show('pickup')">Schedule Pickup</a></div>
        <div><a onclick="show('guide')">Eco Guide</a></div>
        <div><a onclick="show('quiz')">Eco Quiz</a></div>
        <div><a onclick="show('funInteractions')">Fun Interaction</a></div>
        <div><a onclick="show('communitySection')">Community</a></div>
        <hr>
        <div id="userEmail" class="small text-muted"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="col-md-9">
      <!-- Various modules -->
    </div>
  </div>
</div>
```

### 7.3 Key Frontend Functions

#### 7.3.1 Authentication Functions

```javascript
// Register a new user
async function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (!email || !password) {
    showMessage('Please fill all fields', 'error');
    return;
  }

  setLoading(true);
  try {
    const response = await fetch(`${API_BASE}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    if (response.ok) {
      showMessage('Registered successfully! Please login.');
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
    } else {
      showMessage(data.message, 'error');
    }
  } catch (error) {
    showMessage('Registration failed. Make sure backend is running.', 'error');
  } finally {
    setLoading(false);
  }
}

// Login user
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (!email || !password) {
    showMessage('Please fill all fields', 'error');
    return;
  }

  setLoading(true);
  try {
    const response = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    if (response.ok) {
      currentUser = data.user;
      document.getElementById('loginPage').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
      document.getElementById('userEmail').innerText = email;
      show('stats');
      showMessage('Login successful!', 'success');
    } else {
      showMessage(data.message, 'error');
    }
  } catch (error) {
    showMessage('Login failed. Make sure backend is running on port 3000.', 'error');
  } finally {
    setLoading(false);
  }
}
```

#### 7.3.2 Navigation Function

```javascript
function show(id) {
  // Hide all modules
  ['stats','pickup','guide','quiz','funInteractions','communitySection'].forEach(x => 
    document.getElementById(x).style.display = 'none'
  );
  // Show selected module
  document.getElementById(id).style.display = 'block';
  
  // Load module-specific data
  if (id === 'stats') loadStats();
  if (id === 'pickup') loadPickupTracker();
  if (id === 'quiz') startQuiz();
  if (id === 'funInteractions') initSortingGame();
  if (id === 'communitySection') {
    updateCommunityLeaderboard();
    updateCommunityGoal();
    renderPledges();
  }
}
```

#### 7.3.3 Dashboard Statistics Loader

```javascript
async function loadStats() {
  if (!currentUser) return;
  
  try {
    const response = await fetch(`${API_BASE}/stats/${currentUser.email}`);
    if (!response.ok) throw new Error('Failed to load stats');
    
    const stats = await response.json();
    
    // Update stat displays
    document.getElementById('itemsRecycled').innerText = stats.itemsRecycled;
    document.getElementById('totalWeight').innerText = stats.totalWeight;
    document.getElementById('carbonOffset').innerText = stats.carbonOffset;
    document.getElementById('xpEarned').innerText = stats.xpEarned;
    document.getElementById('totalPickups').innerText = stats.totalPickups;
    document.getElementById('streakDays').innerText = stats.streakDays;
    document.getElementById('badgesEarned').innerText = stats.badgesEarned;
    
    // Update charts
    updateCharts(stats);
    
    // Update carbon progress
    const goal = 100;
    const percent = Math.min(100, Math.round(stats.carbonOffset / goal * 100));
    const carbonProgress = document.getElementById('carbonProgress');
    carbonProgress.style.width = percent + '%';
    carbonProgress.innerText = percent + '%';
    
    // Update impact equivalents
    document.getElementById('impactEquivalents').innerText = 
      `Trees saved: ${Math.floor(stats.carbonOffset/5)} | Water saved: ${stats.itemsRecycled * 10}L | Energy saved: ${stats.itemsRecycled * 3} kWh`;
    
  } catch (error) {
    console.error('Error loading stats:', error);
  }
}
```

#### 7.3.4 Chart Rendering

```javascript
function updateCharts(stats) {
  // Monthly Bar Chart
  const ctx = document.getElementById('monthlyChart').getContext('2d');
  if (window.monthlyChartObj) window.monthlyChartObj.destroy();
  window.monthlyChartObj = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr"],
      datasets: [{
        data: [stats.itemsRecycled/4, stats.itemsRecycled/3, stats.itemsRecycled/2, stats.itemsRecycled],
        backgroundColor: "#a1c4fd"
      }]
    },
    options: { 
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Materials Pie Chart
  const ctx2 = document.getElementById('materialsChart').getContext('2d');
  if (window.materialsChartObj) window.materialsChartObj.destroy();
  window.materialsChartObj = new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ["Plastics", "Metal", "Paper"],
      datasets: [{
        data: [40, 30, 30],
        backgroundColor: ["#a1c4fd", "#fbc2eb", "#c2e9fb"]
      }]
    }
  });

  // Quiz Doughnut Chart
  const ctx3 = document.getElementById('quizChart').getContext('2d');
  if (window.quizChartObj) window.quizChartObj.destroy();
  window.quizChartObj = new Chart(ctx3, {
    type: 'doughnut', 
    data: {
      labels: ["Score", "Remaining"],
      datasets: [{
        data: [6, 4],
        backgroundColor: ["#a1c4fd", "#fbc2eb"]
      }]
    }
  });
}
```

### 7.4 Styling and Animations

#### 7.4.1 Background Animation

```css
@keyframes floatBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

body {
  background: linear-gradient(-45deg, #a8edea, #fed6e3, #fbc2eb, #a6c1ee);
  background-size: 400% 400%;
  animation: floatBG 20s ease infinite;
  margin: 0;
  padding-top: 70px;
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #333;
}
```

#### 7.4.2 Card Styling

```css
.card {
  background: #fff;
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.btn-primary {
  background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
  border: none;
  color: #333;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.stat-card {
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s;
}

.stat-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}
```

#### 7.4.3 Responsive Design

The application is fully responsive across all device sizes using Bootstrap's grid system:

```html
<!-- Desktop: 3-column sidebar, 9-column content -->
<div class="row">
  <div class="col-md-3 mb-4">Sidebar</div>
  <div class="col-md-9">Content</div>
</div>

<!-- Mobile: Full width -->
<div class="row">
  <div class="col-12 mb-4">Sidebar</div>
  <div class="col-12">Content</div>
</div>
```

---

## 8. Backend Implementation

### 8.1 Server Setup

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecocollect');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});
```

### 8.2 Database Models

#### 8.2.1 User Model

```javascript
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  xp: { type: Number, default: 0 },
  streak: { type: Number, default: 0 },
  badges: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
```

#### 8.2.2 Pickup Model

```javascript
const pickupSchema = new mongoose.Schema({
  user: { type: String, required: true },
  date: String,
  location: String,
  pickupType: String,
  time: String,
  phone: String,
  materials: [String],
  notes: String,
  status: { type: String, default: 'Scheduled' },
  createdAt: { type: Date, default: Date.now }
});

const Pickup = mongoose.model('Pickup', pickupSchema);
```

#### 8.2.3 Pledge Model

```javascript
const pledgeSchema = new mongoose.Schema({
  user: String,
  pledge: String,
  createdAt: { type: Date, default: Date.now }
});

const Pledge = mongoose.model('Pledge', pledgeSchema);
```

### 8.3 Route Implementation

#### 8.3.1 Authentication Routes

```javascript
// Register Route
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      email,
      password: hashedPassword
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({ 
      message: 'Login successful',
      user: { 
        email: user.email, 
        xp: user.xp, 
        streak: user.streak,
        badges: user.badges 
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
```

#### 8.3.2 Pickup Routes

```javascript
// Schedule Pickup
app.post('/api/pickups', async (req, res) => {
  try {
    const pickup = new Pickup(req.body);
    await pickup.save();
    
    // Update user XP
    await User.findOneAndUpdate(
      { email: req.body.user },
      { $inc: { xp: 10 } }
    );

    res.status(201).json({ message: 'Pickup scheduled successfully', pickup });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get User Pickups
app.get('/api/pickups/:userEmail', async (req, res) => {
  try {
    const pickups = await Pickup.find({ user: req.params.userEmail }).sort({ createdAt: -1 });
    res.json(pickups);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Complete Pickup
app.put('/api/pickups/:id/complete', async (req, res) => {
  try {
    const pickup = await Pickup.findByIdAndUpdate(
      req.params.id,
      { status: 'Completed' },
      { new: true }
    );

    if (!pickup) {
      return res.status(404).json({ message: 'Pickup not found' });
    }

    // Add more XP for completion
    await User.findOneAndUpdate(
      { email: pickup.user },
      { 
        $inc: { xp: 20, streak: 1 }
      }
    );

    res.json({ message: 'Pickup marked as completed', pickup });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
```

#### 8.3.3 Statistics Route

```javascript
app.get('/api/stats/:userEmail', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.userEmail });
    const pickups = await Pickup.find({ user: req.params.userEmail });
    
    let itemsRecycled = 0;
    pickups.forEach(p => itemsRecycled += p.materials.length);
    const totalWeight = itemsRecycled * 0.5;
    const carbonOffset = Math.round(totalWeight * 2.5);

    // Determine badges based on XP
    let badges = [];
    if (user.xp >= 100) badges.push('Plastic Buster');
    if (user.xp >= 200) badges.push('Paper Saver');
    if (user.xp >= 500) badges.push('Eco Warrior');

    // Update user badges if new ones earned
    if (badges.length > user.badges.length) {
      await User.findOneAndUpdate(
        { email: req.params.userEmail },
        { badges: badges }
      );
    }

    const stats = {
      itemsRecycled: itemsRecycled,
      totalWeight: Math.round(totalWeight * 10) / 10,
      carbonOffset: carbonOffset,
      xpEarned: user.xp,
      totalPickups: pickups.length,
      streakDays: user.streak,
      badgesEarned: badges.length > 0 ? badges.join(', ') : 'None'
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
```

#### 8.3.4 Community Routes

```javascript
// Leaderboard
app.get('/api/community/leaderboard', async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $project: {
          email: 1,
          xp: 1,
          badges: 1
        }
      },
      { $sort: { xp: -1 } },
      { $limit: 10 }
    ]);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Community Goal
app.get('/api/community/goal', async (req, res) => {
  try {
    const pickups = await Pickup.find();
    let totalItems = 0;
    pickups.forEach(p => totalItems += p.materials.length);
    const totalCarbon = Math.round(totalItems * 0.5 * 2.5);
    
    res.json({ totalCarbon: totalCarbon });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
```

---

## 9. Authentication System

### 9.1 Security Overview

EcoCollect implements a secure authentication system with the following features:

- Password hashing using bcryptjs
- No plaintext password storage
- Secure login validation
- Session management via user object

### 9.2 Password Hashing

Password hashing is implemented using bcryptjs:

```javascript
// Password hashing during registration
const hashedPassword = await bcrypt.hash(password, 10);

// Password verification during login
const isMatch = await bcrypt.compare(password, user.password);
```

**bcryptjs Features:**
- Salt generation (10 rounds by default)
- One-way hashing
- Constant-time comparison
- Resistant to rainbow table attacks

### 9.3 Authentication Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                     AUTHENTICATION FLOW                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Registration:                                                  │
│  1. User submits email and password                            │
│  2. Server checks if user already exists                       │
│  3. Password is hashed using bcryptjs                          │
│  4. User document is created in MongoDB                        │
│  5. Success response is returned                               │
│                                                                 │
│  Login:                                                         │
│  1. User submits email and password                            │
│  2. Server looks up user by email                              │
│  3. Password is compared with stored hash                      │
│  4. User data (excluding password) is returned                 │
│  5. Client stores user data in memory                          │
│                                                                 │
│  Logout:                                                        │
│  1. User clicks logout button                                  │
│  2. User data is cleared from client memory                    │
│  3. Dashboard is hidden, login page is shown                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 9.4 Security Best Practices

1. **Password Requirements**
   - Minimum 6 characters
   - Hashed before storage
   - Never transmitted in plain text

2. **Error Handling**
   - Generic error messages to prevent user enumeration
   - "Invalid credentials" instead of "User not found"
   - Rate limiting could be implemented for production

3. **Data Protection**
   - Passwords never returned in API responses
   - Only non-sensitive user data is sent to client
   - No session tokens stored (simple login for development)

### 9.5 Login State Management

```javascript
let currentUser = null;

function login() {
  // After successful login
  currentUser = data.user;
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('userEmail').innerText = email;
  show('stats');
}

function logout() {
  currentUser = null;
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('loginPage').style.display = 'block';
}
```

---

## 10. Gamification System

### 10.1 Overview

The gamification system is designed to motivate consistent engagement through:

- Experience Points (XP)
- Achievement Badges
- Streak Tracking
- Leaderboard Rankings
- Visual Celebrations

### 10.2 XP System

#### 10.2.1 XP Earning Activities

| Activity | XP Earned | Trigger |
|----------|-----------|---------|
| Schedule Pickup | 10 | Creating a new pickup |
| Complete Pickup | 20 | Marking pickup as completed |
| Make Pledge | 5 | Creating a new pledge |
| Quiz Completion | Variable | Completing all quiz questions |

#### 10.2.2 XP Calculation

```javascript
// Schedule Pickup XP
await User.findOneAndUpdate(
  { email: req.body.user },
  { $inc: { xp: 10 } }
);

// Complete Pickup XP
await User.findOneAndUpdate(
  { email: pickup.user },
  { 
    $inc: { xp: 20, streak: 1 }
  }
);

// Make Pledge XP
await User.findOneAndUpdate(
  { email: req.body.user },
  { $inc: { xp: 5 } }
);
```

### 10.3 Badge System

#### 10.3.1 Badge Levels

| Badge Name | XP Required | Description |
|------------|-------------|-------------|
| Plastic Buster | 100 | Earned by reaching 100 XP |
| Paper Saver | 200 | Earned by reaching 200 XP |
| Eco Warrior | 500 | Earned by reaching 500 XP |

#### 10.3.2 Badge Assignment Logic

```javascript
// Determine badges based on XP
let badges = [];
if (user.xp >= 100) badges.push('Plastic Buster');
if (user.xp >= 200) badges.push('Paper Saver');
if (user.xp >= 500) badges.push('Eco Warrior');

// Update user badges if new ones earned
if (badges.length > user.badges.length) {
  await User.findOneAndUpdate(
    { email: req.params.userEmail },
    { badges: badges }
  );
}
```

### 10.4 Streak Tracking

#### 10.4.1 Streak Mechanism

- Streak is incremented by 1 for each completed pickup
- Streak is reset if user misses a day (currently manual)
- Streak is displayed on the dashboard

```javascript
// Increment streak on pickup completion
await User.findOneAndUpdate(
  { email: pickup.user },
  { 
    $inc: { xp: 20, streak: 1 }
  }
);
```

### 10.5 Visual Rewards

#### 10.5.1 Confetti Effect

```javascript
function confettiEffect() {
  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}
```

#### 10.5.2 Chime Sound

```javascript
function playChime() {
  const chime = document.getElementById('chime');
  chime.currentTime = 0;
  chime.play().catch(e => console.log('Audio play failed:', e));
}
```

### 10.6 Leaderboard System

The leaderboard ranks users by XP:

```javascript
const users = await User.aggregate([
  {
    $project: {
      email: 1,
      xp: 1,
      badges: 1
    }
  },
  { $sort: { xp: -1 } },
  { $limit: 10 }
]);
```

---

## 11. Community Features

### 11.1 Overview

The community module fosters social engagement through:

- Leaderboard rankings
- Collective goal tracking
- Public pledge system
- Social accountability

### 11.2 Leaderboard

#### 11.2.1 Implementation

```javascript
app.get('/api/community/leaderboard', async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $project: {
          email: 1,
          xp: 1,
          badges: 1
        }
      },
      { $sort: { xp: -1 } },
      { $limit: 10 }
    ]);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
```

#### 11.2.2 Frontend Display

```javascript
async function updateCommunityLeaderboard() {
  try {
    const response = await fetch(`${API_BASE}/community/leaderboard`);
    const leaderboard = await response.json();
    
    document.getElementById('communityLeaderboard').innerHTML = 
      leaderboard.map((u, i) => 
        `<li class="list-group-item">${i + 1}. ${u.email} - ${u.xp} XP ${u.badges && u.badges.length > 0 ? 'Badges' : ''}</li>`
      ).join('');
  } catch (error) {
    console.error('Error loading leaderboard:', error);
  }
}
```

### 11.3 Community Goals

#### 11.3.1 Goal Tracking

```javascript
app.get('/api/community/goal', async (req, res) => {
  try {
    const pickups = await Pickup.find();
    let totalItems = 0;
    pickups.forEach(p => totalItems += p.materials.length);
    const totalCarbon = Math.round(totalItems * 0.5 * 2.5);
    
    res.json({ totalCarbon: totalCarbon });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
```

#### 11.3.2 Progress Display

```javascript
async function updateCommunityGoal() {
  try {
    const response = await fetch(`${API_BASE}/community/goal`);
    const data = await response.json();
    
    const goal = 1000;
    const percent = Math.min(100, Math.round(data.totalCarbon / goal * 100));
    document.getElementById('communityCarbon').innerText = data.totalCarbon;
    const progressBar = document.getElementById('communityGoalProgress');
    progressBar.style.width = percent + '%';
    progressBar.innerText = percent + '%';
    progressBar.className = `progress-bar ${percent >= 75 ? 'bg-success' : percent >= 50 ? 'bg-warning' : 'bg-danger'}`;
  } catch (error) {
    console.error('Error loading community goal:', error);
  }
}
```

### 11.4 Pledge System

#### 11.4.1 Creating Pledges

```javascript
app.post('/api/pledges', async (req, res) => {
  try {
    const pledge = new Pledge(req.body);
    await pledge.save();
    
    // Add XP for making a pledge
    await User.findOneAndUpdate(
      { email: req.body.user },
      { $inc: { xp: 5 } }
    );

    res.status(201).json({ message: 'Pledge added successfully', pledge });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
```

#### 11.4.2 Viewing Pledges

```javascript
app.get('/api/pledges', async (req, res) => {
  try {
    const pledges = await Pledge.find().sort({ createdAt: -1 }).limit(20);
    res.json(pledges);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
```

---

## 12. Educational Modules

### 12.1 Eco Guide Module

The Eco Guide provides interactive educational content about sustainability:

#### 12.1.1 Content Structure

```html
<div id="guideCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner text-center p-4" style="font-size:18px;">
    <div class="carousel-item active">
      Reduce waste by using reusable bags, bottles, and containers.
    </div>
    <div class="carousel-item">
      Separate recyclables properly: Paper, Plastic, Metal, Glass.
    </div>
    <div class="carousel-item">
      Conserve water: turn off taps, collect rainwater, fix leaks.
    </div>
    <div class="carousel-item">
      Save energy: LED bulbs, switch off devices, use renewable energy.
    </div>
    <div class="carousel-item">
      Compost food scraps to reduce landfill waste.
    </div>
  </div>
  <button class="carousel-control-prev" type="button" 
          data-bs-target="#guideCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" 
          data-bs-target="#guideCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```

#### 12.1.2 Topics Covered

1. **Reduce, Reuse, Recycle**
   - Waste reduction strategies
   - Product reuse examples
   - Recycling hierarchy

2. **Recycling Best Practices**
   - Material sorting guidelines
   - Common recycling mistakes
   - Proper preparation of recyclables

3. **Water Conservation**
   - Water saving techniques
   - Rainwater harvesting
   - Leak prevention

4. **Energy Efficiency**
   - Energy saving habits
   - Renewable energy sources
   - Carbon footprint reduction

5. **Waste Management**
   - Composting techniques
   - Landfill reduction
   - Circular economy concepts

### 12.2 Eco Quiz Module

The quiz module tests user knowledge with multiple-choice questions:

#### 12.2.1 Question Bank

```javascript
const qs = [
  {q: "Which is NOT recyclable?", opts: ["Can", "Jar", "Soiled Pizza box"], a: 2},
  {q: "Aluminum can be recycled?", opts: ["Once", "Infinitely"], a: 1},
  {q: "Paper can be recycled?", opts: ["Yes", "No"], a: 0},
  {q: "Plastic bags are?", opts: ["Recyclable", "Not Recyclable"], a: 1},
  {q: "Glass bottles?", opts: ["Yes", "No"], a: 0},
  {q: "Composting food scraps?", opts: ["Yes", "No"], a: 0}
];
```

#### 12.2.2 Quiz Engine

```javascript
let qi = 0, score = 0, quizStreak = 0;

function startQuiz() {
  qi = 0; score = 0; quizStreak = 0;
  document.getElementById('quizDone').style.display = 'none';
  document.getElementById('questionArea').style.display = 'block';
  loadQ();
}

function loadQ() {
  let q = qs[qi];
  document.getElementById('questionNumber').innerText = "Q " + (qi + 1) + "/" + qs.length;
  document.getElementById('questionText').innerText = q.q;
  document.getElementById('options').innerHTML = '';
  q.opts.forEach((o, i) => {
    let d = document.createElement('div');
    d.className = 'quiz-option';
    d.innerText = o;
    d.onclick = () => selectOpt(d, i === q.a);
    document.getElementById('options').appendChild(d);
  });
  document.getElementById('nextQ').disabled = true;
}

function selectOpt(d, ok) {
  document.querySelectorAll('.quiz-option').forEach(x => x.onclick = null);
  if (ok) {
    d.classList.add('correct');
    score++;
    quizStreak++;
  } else {
    d.classList.add('incorrect');
    quizStreak = 0;
  }
  document.getElementById('quizStreak').innerText = `Streak: ${quizStreak}`;
  document.getElementById('nextQ').disabled = false;
}
```

#### 12.2.3 Feedback Mechanisms

- **Correct Answer**: Green highlight, confetti, chime sound
- **Incorrect Answer**: Red highlight, streak reset
- **Quiz Completion**: Final score display with celebration

### 12.3 Theoretical Foundations

The educational modules are built on established learning theories:

1. **Multimedia Learning Theory**
   - Text and visual content integration
   - Reduced cognitive load
   - Enhanced comprehension

2. **Retrieval Practice**
   - Quiz-based knowledge testing
   - Active recall enhancement
   - Memory consolidation

3. **Game-Based Learning**
   - Engaging question formats
   - Immediate feedback
   - Progress tracking

---

## 13. Interactive Gameplay

### 13.1 Drag-and-Drop Recycling Game

The interactive game teaches recycling categorization through hands-on activity:

#### 13.1.1 Game Mechanics

```javascript
function initSortingGame() {
  const itemsPool = document.getElementById('itemsPool');
  itemsPool.innerHTML = "<p class='text-muted'>Drag items from here to the correct bins</p>";
  gameScoreCount = 0;
  document.getElementById('gameScore').innerText = "Score: 0";
  
  let items = ["Plastic Bottle", "Glass Jar", "Aluminum Can", "Pizza Box", "Plastic Bag", "Newspaper"];
  items.forEach(it => {
    let d = document.createElement('div');
    d.className = 'draggable-item';
    d.innerText = it;
    d.draggable = true;
    d.ondragstart = (e) => {
      e.dataTransfer.setData("text", it);
    };
    itemsPool.appendChild(d);
  });

  // Setup drop targets
  [document.getElementById('recyclableBin'), document.getElementById('nonRecyclableBin')].forEach(bin => {
    bin.ondragover = (e) => e.preventDefault();
    bin.ondrop = (e) => {
      e.preventDefault();
      let data = e.dataTransfer.getData("text");
      
      const recyclableItems = ["Plastic Bottle", "Glass Jar", "Aluminum Can", "Newspaper"];
      const nonRecyclableItems = ["Pizza Box", "Plastic Bag"];
      
      if (bin.id === "recyclableBin" && recyclableItems.includes(data)) {
        gameScoreCount += 1;
        bin.style.background = "#4caf50";
      } else if (bin.id === "nonRecyclableBin" && nonRecyclableItems.includes(data)) {
        gameScoreCount += 1;
        bin.style.background = "#4caf50";
      } else {
        gameScoreCount -= 1;
        bin.style.background = "#f44336";
      }
      
      document.getElementById('gameScore').innerText = "Score: " + gameScoreCount;
      
      // Reset bin color after delay
      setTimeout(() => {
        if (bin.id === "recyclableBin") {
          bin.style.background = "#198754";
        } else {
          bin.style.background = "#dc3545";
        }
      }, 500);
      
      e.dataTransfer.clearData();
    };
  });
}
```

#### 13.1.2 Game Elements

| Element | Description | Styling |
|---------|-------------|---------|
| Items Pool | Draggable items to sort | Light background, draggable cursor |
| Recyclable Bin | Drop target for recyclable items | Green background |
| Non-Recyclable Bin | Drop target for non-recyclable items | Red background |
| Score Display | Shows current score | Bold text |

#### 13.1.3 Item Classification

| Item | Classification | Correct Bin |
|------|---------------|-------------|
| Plastic Bottle | Recyclable | Recyclable Bin |
| Glass Jar | Recyclable | Recyclable Bin |
| Aluminum Can | Recyclable | Recyclable Bin |
| Newspaper | Recyclable | Recyclable Bin |
| Pizza Box | Not Recyclable | Non-Recyclable Bin |
| Plastic Bag | Not Recyclable | Non-Recyclable Bin |

### 13.2 Learning Outcomes

The game supports:

1. **Experiential Learning**
   - Hands-on categorization practice
   - Immediate feedback on decisions
   - Learning through trial and error

2. **Knowledge Transfer**
   - Applying theoretical knowledge
   - Practicing sorting skills
   - Building confidence

3. **Engagement**
   - Interactive gameplay
   - Score tracking
   - Visual and audio feedback

### 13.3 Theoretical Basis

The game is based on:

- **Kolb's Experiential Learning Theory**: Learning through experience
- **Behaviorist Principles**: Reinforcement through reward and correction
- **Constructivist Learning**: Building knowledge through active engagement

---

## 14. Security Considerations

### 14.1 Password Security

#### 14.1.1 Hashing Implementation

```javascript
// Password hashing
const hashedPassword = await bcrypt.hash(password, 10);

// Password verification
const isMatch = await bcrypt.compare(password, user.password);
```

**Security Features:**
- Salt generation for each password
- 10 rounds of hashing (configurable)
- Constant-time comparison prevents timing attacks
- No plaintext password storage

#### 14.1.2 Password Requirements

- Minimum length: 6 characters
- Hashed before storage
- Never logged or transmitted in plain text

### 14.2 Data Protection

#### 14.2.1 Sensitive Data Handling

```javascript
// Returning user data (password excluded)
res.json({ 
  message: 'Login successful',
  user: { 
    email: user.email, 
    xp: user.xp, 
    streak: user.streak,
    badges: user.badges 
  }
});
```

**Protection Measures:**
- Passwords never returned in API responses
- Only necessary data sent to client
- Validation middleware for all routes

#### 14.2.2 Input Validation

```javascript
// Schema validation
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
```

### 14.3 API Security

#### 14.3.1 CORS Configuration

```javascript
app.use(cors());
```

#### 14.3.2 Error Handling

```javascript
// Generic error messages
return res.status(400).json({ message: 'Invalid credentials' });
```

### 14.4 Production Security Recommendations

1. **Rate Limiting**
   - Implement to prevent brute force attacks
   - Use express-rate-limit or similar package

2. **HTTPS**
   - Use SSL/TLS encryption
   - Secure cookies with secure flags

3. **Environment Variables**
   - Keep secrets in .env file
   - Never commit sensitive data

4. **Input Sanitization**
   - Sanitize user inputs
   - Prevent XSS and injection attacks

5. **Session Management**
   - Use JWT or secure session cookies
   - Implement session timeouts

---

## 15. Testing Strategy

### 15.1 Functional Testing

#### 15.1.1 API Testing

| Endpoint | Test Cases | Expected Result |
|----------|-----------|-----------------|
| /api/register | New user registration | 201 Created |
| /api/register | Duplicate user | 400 Bad Request |
| /api/login | Valid credentials | 200 OK |
| /api/login | Invalid credentials | 400 Bad Request |
| /api/pickups | Create pickup | 201 Created |
| /api/pickups/:email | Get user pickups | 200 OK |
| /api/pickups/:id/complete | Complete pickup | 200 OK |
| /api/stats/:email | Get user stats | 200 OK |
| /api/community/leaderboard | Get leaderboard | 200 OK |

#### 15.1.2 Frontend Testing

| Feature | Test Cases | Expected Result |
|---------|-----------|-----------------|
| Registration | Fill and submit form | Success message |
| Login | Valid credentials | Dashboard visible |
| Login | Invalid credentials | Error message |
| Dashboard | Load stats | Data displayed |
| Pickup Scheduling | Submit form | Item in tracker |
| Quiz | Answer questions | Score displayed |
| Game | Drag items | Score updates |

### 15.2 User Interface Testing

#### 15.2.1 Responsiveness Testing

| Device | Resolution | Expected Behavior |
|--------|-----------|------------------|
| Desktop | 1920x1080 | Full layout |
| Tablet | 768x1024 | Collapsed sidebar |
| Mobile | 375x667 | Full width, stacked |

#### 15.2.2 Usability Testing

- Navigation between modules
- Form submission and validation
- Visual feedback on actions
- Performance on different browsers

### 15.3 Engagement Testing

| Metric | Target | Testing Method |
|--------|--------|----------------|
| Streak retention | Positive trend | Track over time |
| XP accumulation | Increasing | Dashboard review |
| Quiz participation | High rate | Analytics review |
| Community engagement | Active users | Leaderboard tracking |

### 15.4 Test Automation Potential

```javascript
// Example test scenario
async function testPickupFlow() {
  // Login
  const loginResponse = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'test@test.com', password: 'password123' })
  });
  
  // Schedule pickup
  const pickupResponse = await fetch('/api/pickups', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: 'test@test.com',
      date: '2026-07-15',
      time: '14:30',
      location: 'Test Location',
      pickupType: 'Doorstep',
      phone: '9876543210',
      materials: ['Plastics']
    })
  });
  
  // Verify pickup created
  assert(pickupResponse.status === 201);
}
```

---

## 16. Deployment Guide

### 16.1 Prerequisites

**Software Requirements:**
- Node.js (v18.x or higher)
- MongoDB Atlas account (or local MongoDB)
- Git (for version control)
- Code editor (VS Code recommended)

### 16.2 Local Development Setup

#### 16.2.1 Clone Repository

```bash
git clone https://github.com/khushisingh1-star/FULL-STACK-DEVELOPEMENT-PROJECT--ECOCOLLECT.git
cd FULL-STACK-DEVELOPEMENT-PROJECT--ECOCOLLECT
```

#### 16.2.2 Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Dependencies will be installed:
# - express
# - mongoose
# - cors
# - bcryptjs
# - dotenv
# - nodemon (dev)
```

#### 16.2.3 Environment Variables

Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecocollect
PORT=3000
```

#### 16.2.4 Run Application

```bash
# Start backend server
npm start
# or for development with auto-reload
npm run dev

# Open ecocollect.html in browser
# Or serve with any static server
```

### 16.3 Cloud Deployment

#### 16.3.1 Backend Deployment (Heroku/Render)

1. **Create account on Render or Heroku**
2. **Connect GitHub repository**
3. **Set environment variables**
   - MONGODB_URI
   - PORT (auto-assigned)
4. **Deploy**

#### 16.3.2 Frontend Deployment (Netlify/Vercel)

1. **Create account on Netlify or Vercel**
2. **Connect GitHub repository**
3. **Build settings**
   - Build command: None (static site)
   - Publish directory: frontend
4. **Set API URL**
   - Update API_BASE in JavaScript
   - Use environment variables

### 16.4 MongoDB Atlas Setup

1. **Create MongoDB Atlas account**
2. **Create new cluster**
3. **Set up database user**
4. **Whitelist IP address**
5. **Get connection string**
6. **Update .env file**

### 16.5 Production Considerations

| Aspect | Development | Production |
|--------|-------------|------------|
| Database | MongoDB Atlas | MongoDB Atlas |
| API URL | http://localhost:3000 | Your domain |
| Cors | All origins | Specific origins |
| Error Handling | Verbose | Minimal |
| Logging | Console | Log files |

---

## 17. Performance Optimization

### 17.1 Frontend Optimizations

#### 17.1.1 Loading Performance

- CDN loading for libraries (Bootstrap, Chart.js)
- Async/defer for JavaScript
- Minimize DOM operations

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
```

#### 17.1.2 Rendering Performance

- Efficient DOM updates
- Event delegation where appropriate
- Debounce search operations

#### 17.1.3 Animation Performance

- CSS animations instead of JavaScript
- GPU-accelerated properties
- RequestAnimationFrame for smooth animations

```css
.stat-card {
  transition: all 0.3s ease;
}
```

### 17.2 Backend Optimizations

#### 17.2.1 Database Indexing```javascript
// Add indexes for frequent queries
userSchema.index({ email: 1 }, { unique: true });
pickupSchema.index({ user: 1, status: 1 });
```

#### 17.2.2 Query Optimization

- Use aggregation pipelines
- Limit result sets
- Project only needed fields

```javascript
const users = await User.aggregate([
  { $project: { email: 1, xp: 1, badges: 1 } },
  { $sort: { xp: -1 } },
  { $limit: 10 }
]);
```

#### 17.2.3 Caching Strategy

- Implement Redis for frequent data
- Cache leaderboard and stats
- Set appropriate TTL values

### 17.3 Network Optimization

- Compression middleware
- Minify static assets
- Use HTTP/2 when available

---

## 18. Future Enhancements

### 18.1 Feature Roadmap

#### 18.1.1 Short-term Enhancements

1. **JWT Authentication**
   - Replace simple login with JWT tokens
   - Implement token refresh mechanism
   - Add session persistence

2. **Interactive Maps**
   - Show pickup locations on map
   - Display nearby recycling centers
   - Route planning for drop-offs

3. **Push Notifications**
   - Reminders for scheduled pickups
   - Achievement notifications
   - Community goal updates

4. **Enhanced Analytics**
   - Timeline visualizations
   - Weekly/monthly reports
   - Impact predictions

#### 18.1.2 Medium-term Enhancements

1. **AI Integration**
   - AI-powered recycling tips
   - Image recognition for items
   - Personalized recommendations

2. **Social Features**
   - Friend system
   - Group challenges
   - Achievements sharing

3. **Mobile App**
   - React Native or Flutter
   - Camera integration for items
   - Offline support

4. **Admin Dashboard**
   - User management
   - Analytics overview
   - Content management

#### 18.1.3 Long-term Enhancements

1. **Blockchain Integration**
   - Rewards tokenization
   - Transparent tracking
   - Decentralized verification

2. **IoT Integration**
   - Smart bins
   - Weight sensors
   - Real-time tracking

3. **API Marketplace**
   - Third-party integrations
   - Partner programs
   - Data sharing

### 18.2 Technical Improvements

| Area | Current | Enhancement |
|------|---------|-------------|
| Authentication | Simple login | JWT with refresh |
| Database | MongoDB Atlas | Add Redis cache |
| State Management | Global variables | State management library |
| Testing | Manual | Automated tests |
| CI/CD | None | GitHub Actions |
| Monitoring | Console logs | Analytics tools |

---

## 19. Troubleshooting Guide

### 19.1 Common Issues

#### 19.1.1 Backend Connection Issues

**Issue**: MongoDB connection fails

**Symptoms**:
- Server starts but database not connected
- API endpoints return errors

**Solutions**:
1. Check MongoDB Atlas connection string
2. Verify IP whitelist includes your IP
3. Ensure database user credentials are correct
4. Check network connectivity

**Error Message**: `MongoDB connection error:`

**Resolution**: 
```javascript
// Check connection status
console.log('MongoDB readyState:', mongoose.connection.readyState);
// 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
```

#### 19.1.2 CORS Issues

**Issue**: Frontend cannot access API

**Symptoms**:
- CORS errors in browser console
- API requests blocked

**Solutions**:
1. Ensure cors middleware is properly configured
2. Check API_BASE URL is correct
3. Verify port is correct (3000 default)
4. Check for typos in URL

**Error Message**: `Access-Control-Allow-Origin` missing

**Resolution**:
```javascript
// Verify CORS middleware
app.use(cors());
```

#### 19.1.3 Password Issues

**Issue**: Login fails with valid credentials

**Symptoms**:
- Invalid credentials error
- Unable to login

**Solutions**:
1. Verify password hasn't been changed
2. Check for case sensitivity in email
3. Ensure bcryptjs is properly installed
4. Verify hashing and comparison logic

**Debug**:
```javascript
console.log('Password comparison result:', isMatch);
```

### 19.2 Debugging Tips

#### 19.2.1 Backend Debugging

```javascript
// Add detailed logging
console.log('Request body:', req.body);
console.log('User found:', user);

// Check MongoDB queries
console.log('Query result:', result);
```

#### 19.2.2 Frontend Debugging

```javascript
// Log API responses
console.log('API response:', await response.json());

// Check user state
console.log('Current user:', currentUser);

// Debug DOM
console.log('Element exists:', document.getElementById('elementId'));
```

### 19.3 Error Scenarios

| Error | Cause | Solution |
|-------|-------|----------|
| 400 Bad Request | Missing required fields | Check request body |
| 404 Not Found | Invalid endpoint | Check URL spelling |
| 500 Internal Server | Server error | Check error logs |
| CORS Error | Cross-origin blocked | Configure CORS |

### 19.4 Quick Fixes

1. **Cannot connect to MongoDB**
   ```bash
   # Check if MongoDB is running
   mongod --version
   # Alternative: Use MongoDB Atlas connection string
   ```

2. **API not responding**
   ```bash
   # Check if server is running
   lsof -i :3000
   # Restart server
   npm start
   ```

3. **Frontend not loading**
   ```bash
   # Clear browser cache
   # Open developer tools console
   # Check for JavaScript errors
   ```

---
## AUTHOR

# KHUSHI SINGH

## Appendix

### A. Database Schema Diagrams

```
USERS Collection
┌─────────────────────────────────────────────┐
│ _id: ObjectId                              │
│ email: String (Unique, Required)           │
│ password: String (Required)                │
│ xp: Number (Default: 0)                    │
│ streak: Number (Default: 0)                │
│ badges: [String] (Default: [])             │
│ createdAt: Date (Default: Now)             │
└─────────────────────────────────────────────┘

PICKUPS Collection
┌─────────────────────────────────────────────┐
│ _id: ObjectId                              │
│ user: String (Required)                    │
│ date: String (Required)                    │
│ time: String (Required)                    │
│ location: String (Required)                │
│ pickupType: String (Required)              │
│ phone: String (Required)                   │
│ materials: [String] (Required)             │
│ notes: String (Default: "")                │
│ status: String (Default: "Scheduled")      │
│ createdAt: Date (Default: Now)             │
└─────────────────────────────────────────────┘

PLEDGES Collection
┌─────────────────────────────────────────────┐
│ _id: ObjectId                              │
│ user: String (Required)                    │
│ pledge: String (Required)                  │
│ createdAt: Date (Default: Now)             │
└─────────────────────────────────────────────┘
```

### B. API Endpoint Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/register | Register new user |
| POST | /api/login | Login user |
| POST | /api/pickups | Schedule pickup |
| GET | /api/pickups/:email | Get user pickups |
| PUT | /api/pickups/:id/complete | Complete pickup |
| GET | /api/stats/:email | Get user stats |
| GET | /api/community/leaderboard | Get leaderboard |
| GET | /api/community/goal | Get community goal |
| POST | /api/pledges | Create pledge |
| GET | /api/pledges | Get pledges |
| GET | /api/health | Health check |

### C. Environment Variables

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecocollect
PORT=3000
```

---

