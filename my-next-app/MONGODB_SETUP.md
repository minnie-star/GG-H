# MongoDB Setup Guide for Funeral Memorial Website

## Overview
The tribute and condolence system now stores messages in MongoDB. Here's how to set it up and use it.

## Installation

The necessary dependency has been installed:
- **mongoose** - MongoDB object modeling library

## Configuration

### Local Setup (Development)

1. **Install MongoDB Community Edition**
   - Download from: https://www.mongodb.com/try/download/community
   - Follow installation instructions for your OS
   - Start MongoDB service

2. **Verify MongoDB is running**
   ```bash
   # Windows (if using default installation)
   mongod.exe
   
   # Or check if service is running
   Get-Service MongoDB
   ```

3. **Environment Variable**
   - The `.env.local` file is already created with:
   ```
   MONGODB_URI=mongodb://localhost:27017/funeral-memorial
   ```
   - No changes needed for local development

### MongoDB Atlas Setup (Cloud - Recommended for Production)

1. **Create MongoDB Atlas Account**
   - Go to: https://www.mongodb.com/cloud/atlas
   - Sign up for a free account
   - Create a new project and cluster

2. **Get Connection String**
   - In MongoDB Atlas, click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - It will look like: `mongodb+srv://username:password@cluster.mongodb.net/funeral-memorial`

3. **Update .env.local**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/funeral-memorial
   ```

## Project Structure

### New Files Created:

```
lib/
├── mongodb.ts          # Database connection utility
└── models/
    └── Tribute.ts      # Tribute schema and model

app/
└── api/
    └── tributes/
        └── route.ts    # API endpoints for tributes
```

### Updated Files:

- `app/Tributes.tsx` - Now fetches/posts to MongoDB via API

## API Endpoints

### POST /api/tributes
**Submit a new tribute or condolence message**

Request:
```json
{
  "author": "John Doe",
  "relationship": "Friend",
  "message": "She was a wonderful person..."
}
```

Response (201 Created):
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "author": "John Doe",
  "relationship": "Friend",
  "message": "She was a wonderful person...",
  "date": "11/19/2026",
  "createdAt": "2026-11-19T17:12:09.447Z",
  "updatedAt": "2026-11-19T17:12:09.447Z"
}
```

### GET /api/tributes
**Retrieve all tributes, sorted by newest first**

Response (200 OK):
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "author": "John Doe",
    "relationship": "Friend",
    "message": "She was a wonderful person...",
    "date": "11/19/2026",
    "createdAt": "2026-11-19T17:12:09.447Z"
  },
  ...
]
```

## Features

✅ **Automatic Loading**: Tributes load on page refresh
✅ **Real-time Submission**: Submit new tributes and see them immediately
✅ **Error Handling**: User-friendly error messages
✅ **Success Feedback**: Confirmation when tribute is posted
✅ **Loading State**: Button shows "Sharing..." while submitting
✅ **Validation**: Author and message are required fields
✅ **Data Persistence**: All tributes stored permanently in MongoDB

## Development Workflow

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Test locally**:
   - Navigate to http://localhost:3000
   - Scroll to "Tributes & Condolences" section
   - Fill in the form and click "Share Tribute"
   - Your message should appear immediately

3. **Verify data in MongoDB**:
   - Use MongoDB Compass or MongoDB Atlas UI
   - Database: `funeral-memorial`
   - Collection: `tributes`

## Troubleshooting

### "MONGODB_URI environment variable not found"
- Solution: Ensure `.env.local` file exists in the project root with the correct URI

### "Failed to connect to MongoDB"
- Solution: Verify MongoDB is running (local) or Atlas credentials are correct (cloud)
- Check connection string in `.env.local`

### "Port 27017 is already in use"
- Solution: MongoDB might already be running. Check running processes or change the port in connection string

### Tributes not loading/saving
- Check browser console for errors
- Verify API endpoint is working: Visit http://localhost:3000/api/tributes in browser
- Check server logs for backend errors

## Security Notes

⚠️ **Important for Production**:
- Never commit `.env.local` to version control
- Keep MongoDB credentials secure
- Implement rate limiting to prevent spam
- Add CAPTCHA to form if deployed publicly
- Consider email verification for tribute authors

## Next Steps (Optional Enhancements)

- Add tribute moderation system
- Send email notifications for new tributes
- Add tribute editing/deletion for authors
- Implement pagination for large tribute lists
- Add attachment support for photos/videos
- Add tribute search functionality
