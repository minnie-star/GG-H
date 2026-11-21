# Quick Start: MongoDB Integration for Tributes

## 1️⃣ Install & Start MongoDB

### Option A: Local MongoDB (Easiest for Development)
```bash
# Download MongoDB Community: https://www.mongodb.com/try/download/community
# After installation, MongoDB runs on localhost:27017

# Verify it's running (Windows):
mongod.exe

# Or check Windows Service:
Get-Service MongoDB
```

### Option B: MongoDB Atlas (Cloud - Best for Production)
```
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account & cluster
3. Get connection string (looks like: mongodb+srv://user:pass@cluster.mongodb.net/funeral-memorial)
4. Update .env.local with your connection string
```

## 2️⃣ Configuration

The `.env.local` file is already created:
```
MONGODB_URI=mongodb://localhost:27017/funeral-memorial
```

**For MongoDB Atlas**, replace with your connection string.

## 3️⃣ Start the Application

```bash
npm run dev
```

The app runs on http://localhost:3000

## 4️⃣ Test the Feature

1. Navigate to the "Tributes & Condolences" section
2. Fill in:
   - Your Name (required)
   - Relationship (optional)
   - Message (required)
3. Click "Share Tribute"
4. ✅ Your tribute appears at the top of the list
5. 🔄 Refresh page - tribute persists in MongoDB!

## 5️⃣ View Data in MongoDB

### Local MongoDB:
```bash
# Download MongoDB Compass: https://www.mongodb.com/try/download/compass
# Connect to: mongodb://localhost:27017
# Database: funeral-memorial
# Collection: tributes
```

### MongoDB Atlas:
```
1. Log in to MongoDB Atlas
2. Click "Browse Collections"
3. Select funeral-memorial database
4. View tributes collection
```

## ✨ What You Get

✅ Tributes saved permanently to database
✅ Automatic page load - shows all previous tributes
✅ Real-time submission feedback
✅ Error handling with user-friendly messages
✅ Loading states so users know something is happening
✅ Works on any device - tributes sync across all users

## 🆘 Troubleshooting

**"Cannot connect to MongoDB"**
- Ensure MongoDB service is running
- Check connection string in .env.local
- Verify database name is correct

**"Tributes not saving"**
- Check browser developer console (F12) for errors
- Check server logs in terminal
- Restart npm dev server

**"Old tributes disappeared"**
- They're in MongoDB! Try GET /api/tributes in browser
- Database might be corrupted - check MongoDB logs

## 📚 API Endpoints

```
POST /api/tributes
- Submit new tribute
- Body: { author, relationship, message }

GET /api/tributes
- Get all tributes
- Returns array sorted by newest first
```

## 🎯 Next: Deploy to Production

When ready to deploy:
1. Use MongoDB Atlas (not local MongoDB)
2. Set environment variables on hosting platform
3. Ensure MONGODB_URI is kept secure
4. Consider adding rate limiting to prevent spam

---

**Enjoy! Your memorial website is now collecting tributes safely in the database.**
