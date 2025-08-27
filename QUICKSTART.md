# Quick Start Guide

## 🚀 Get the Authentication API Running in 5 Minutes

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

### Step 2: Setup Environment
```bash
# Copy the environment template
cp .env.example .env

# The default settings in .env.example will work for local development
# Just make sure MongoDB is running on localhost:27017
```

### Step 3: Start MongoDB
```bash
# Option 1: If you have MongoDB installed locally
sudo service mongod start

# Option 2: Using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Option 3: Use MongoDB Atlas (cloud)
# Update MONGODB_URI in .env with your Atlas connection string
```

### Step 4: Start the Server
```bash
# Development mode (recommended)
npm run dev

# Or production mode
npm start
```

### Step 5: Test the API
```bash
# Health check
curl http://localhost:5000/api/health

# API documentation
curl http://localhost:5000/api/docs
```

### Step 6: Seed Sample Data (Optional)
```bash
# Create sample users (including admin)
npm run seed

# Remove all users
npm run seed:destroy
```

## 🧪 Test Authentication Flow

### Register a New User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "username": "testuser",
    "email": "test@example.com",
    "phone": "+1234567890",
    "password": "password123",
    "confirmPassword": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "password123"
  }'
```

### Access Protected Route
```bash
# Replace YOUR_JWT_TOKEN with the token from login response
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 📱 Frontend Integration

Your frontend (running on http://localhost:5173) can now:

1. **Register users**: POST to `/api/auth/register`
2. **Login users**: POST to `/api/auth/login`
3. **Access protected routes**: Include `Authorization: Bearer <token>` header
4. **Verify tokens**: GET `/api/auth/verify`

The API is configured with CORS to allow requests from your React frontend.

## 🔧 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running on port 27017
- Check the MONGODB_URI in your .env file
- For MongoDB Atlas, ensure your IP is whitelisted

### Port Already in Use
- Change the PORT in .env file
- Kill the process using port 5000: `lsof -ti:5000 | xargs kill -9`

### CORS Issues
- Frontend origin is allowed in index.js
- Add your production frontend URL to the CORS origins array

### Token Issues
- Ensure JWT_SECRET is set in .env
- Check token format: `Bearer <token>`
- Verify token hasn't expired (default: 7 days)

## 📊 Monitoring

View real-time logs:
```bash
# Application logs
tail -f logs/app.log

# Error logs only
tail -f logs/error.log
```

## 🎯 Next Steps

1. **Production Deployment**: Update environment variables for production
2. **Rate Limiting**: Add express-rate-limit for API protection
3. **Email Verification**: Implement email verification for new users
4. **Password Reset**: Add forgot/reset password functionality
5. **Social Login**: Integrate OAuth providers (Google, Facebook, etc.)

Your authentication API is now ready! 🎉
