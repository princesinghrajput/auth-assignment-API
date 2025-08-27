# Authentication API Backend

Simple Express.js authentication API with JWT tokens for the React frontend.

## Quick Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Setup
Create `.env` file:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/auth_app
JWT_SECRET=your_secret_key_here
```

### 3. Start MongoDB
```bash
# Option 1: Local MongoDB
sudo service mongod start

# Option 2: Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### 4. Start Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (requires auth)

### Health Check
- `GET /api/health` - API status

## Request/Response Examples

### Register
**Request:**
```json
POST /api/auth/register
{
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "_id": "...",
      "name": "John Doe",
      "username": "johndoe",
      "email": "john@example.com",
      "phone": "+1234567890"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Login
**Request:**
```json
POST /api/auth/login
{
  "username": "johndoe",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": { /* user object */ },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

## Tech Stack
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT
- **Password Hashing:** bcryptjs
- **Validation:** express-validator

## Project Structure
```
backend/
├── controllers/authController.js  # Auth logic
├── middleware/
│   ├── auth.js                   # JWT middleware
│   └── validation.js             # Input validation
├── models/User.js                # User schema
├── routes/authRoutes.js          # API routes
├── index.js                      # Main server
└── package.json                  # Dependencies
```

## Frontend Integration
The React frontend should:
1. Call `/api/auth/register` for signup
2. Call `/api/auth/login` for login
3. Store the returned JWT token
4. Include token in Authorization header for protected routes

Server runs on `http://localhost:5000` with CORS enabled for frontend.