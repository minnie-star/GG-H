# 🎯 CSV Storage Setup & Workflow

## 📊 Setup Flowchart

```
START
  │
  ├─ Run: npm run dev
  │
  ├─ Website starts at http://localhost:3000
  │
  ├─ /data directory created automatically
  │
  ├─ /data/tributes.csv created with headers
  │
  └─ ✅ READY FOR TRIBUTES!
```

## 🔄 Submission Workflow

```
┌──────────────────────────────────────┐
│   Family Member Visits Website       │
│        http://localhost:3000         │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│   Scrolls to Tributes Section        │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│   Fills Form:                        │
│   • Name (required)                  │
│   • Relationship (optional)          │
│   • Message (required)               │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│   Clicks "Share Tribute" Button      │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│   POST /api/tributes                 │
│   Sends JSON data                    │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│   Backend Processing                 │
│   lib/csv.ts functions:              │
│   • Validate data                    │
│   • Escape CSV special chars         │
│   • Format as CSV row                │
│   • Add timestamp                    │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│   Write to /data/tributes.csv        │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│   Return Response                    │
│   {                                  │
│     author: "...",                   │
│     relationship: "...",             │
│     message: "...",                  │
│     date: "11/21/2026",             │
│     createdAt: "2026-11-21T..."      │
│   }                                  │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│   Browser Updates Instantly          │
│   ✅ Tribute appears at top of list  │
│   ✅ Success message shown           │
│   ✅ Form cleared                    │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│   Data Persists                      │
│   • Saved to tributes.csv            │
│   • Survives page refresh            │
│   • Available for backup             │
└──────────────────────────────────────┘
```

## 📱 Retrieval Workflow

```
GET /api/tributes
         │
         ▼
Read /data/tributes.csv
         │
         ▼
Parse CSV lines
         │
         ▼
Convert to JSON objects
         │
         ▼
Sort by newest first
         │
         ▼
Return array of tributes
         │
         ▼
Display in browser
         │
         ▼
✅ Ready for next submission
```

## 🎯 Event Day Timeline

```
7:00 AM  SETUP
├─ Run: npm run dev
├─ Terminal shows: "ready - started server on 0.0.0.0:3000"
├─ Check: http://localhost:3000 loads
└─ ✅ Ready

8:00 AM  PRE-EVENT
├─ Get IP address: ipconfig
├─ Create QR code (optional)
├─ Share link: http://[IP]:3000
├─ Family starts arriving
└─ ✅ Ready to receive tributes

9:00 AM  EVENT START
├─ Family members open link
├─ Scroll to Tributes section
├─ Start submitting tributes
├─ CSV updates automatically
└─ ✅ Tributes flowing in

DURING   EVENT RUNNING
├─ Monitor tributes appearing
├─ Help family if needed
├─ CSV file growing
└─ ✅ All data safe

5:00 PM  EVENT END
├─ Stop accepting tributes
├─ Stop server: Ctrl+C
├─ CSV file complete
└─ ✅ Ready for backup

AFTER    BACKUP & ARCHIVE
├─ Copy tributes.csv
├─ Email to family
├─ Upload to cloud
└─ ✅ Forever archived
```

## 💾 Data Persistence Flow

```
Day 1: Event Day
├─ Tributes submitted
├─ Stored in tributes.csv
├─ Browser closed
└─ Data persists ✅

Day 2: Next day
├─ Run npm run dev again
├─ Website loads
├─ GET /api/tributes
├─ Reads from tributes.csv
├─ Loads all previous tributes
└─ Data still there! ✅

Day 100: Years later
├─ tributes.csv file exists
├─ Can open in Excel
├─ All memories preserved
└─ Forever accessible ✅
```

## 🔄 CSV File Update Flow

```
Before First Tribute:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
author,relationship,message,date,createdAt
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After 1st Tribute:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
author,relationship,message,date,createdAt
"John","Friend","She was wonderful...",11/21/2026,"2026-11-21T04:35Z"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After 2nd Tribute:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
author,relationship,message,date,createdAt
"John","Friend","She was wonderful...",11/21/2026,"2026-11-21T04:35Z"
"Jane","Sister","Forever in our hearts",11/21/2026,"2026-11-21T04:36Z"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After 50+ Tributes:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
author,relationship,message,date,createdAt
"Name1",...50 more rows...,"Name50",...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 🔐 Security Flow

```
Data Input
    ├─ Client-side validation
    │  └─ Required fields checked
    │
    ├─ Server-side validation
    │  └─ Double-checked in API
    │
    ├─ CSV Escaping
    │  └─ Special chars handled
    │
    └─ File Storage
       └─ Secure local storage
```

## 📊 Backup Flow

```
After Event Ends
         │
         ├─ tributes.csv exists in /data/
         │
         ├─ Copy Command:
         │  copy my-next-app\data\tributes.csv tributes_backup.csv
         │
         ├─ Email:
         │  Attach tributes.csv to family email
         │
         ├─ Cloud:
         │  Upload to Google Drive/OneDrive/Dropbox
         │
         └─ Archive:
            Store for permanent record
```

## 🎊 System Architecture

```
┌─────────────────────────────────────────────┐
│          MEMORIAL WEBSITE                   │
│         (Next.js Frontend)                  │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  Tributes Component                 │   │
│  │  - Form submission                  │   │
│  │  - Display tributes                 │   │
│  │  - Real-time updates                │   │
│  └────────────────┬────────────────────┘   │
└─────────────────────────────────────────────┘
                   │
                   │ POST/GET requests
                   │
┌─────────────────────────────────────────────┐
│          API ENDPOINTS                      │
│       (Next.js API Routes)                  │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  POST /api/tributes                 │   │
│  │  - Accept form data                 │   │
│  │  - Validate input                   │   │
│  │  - Call CSV utilities               │   │
│  └────────────────┬────────────────────┘   │
│                   │                        │
│  ┌────────────────┴────────────────────┐   │
│  │  GET /api/tributes                  │   │
│  │  - Fetch all tributes               │   │
│  │  - Return JSON                      │   │
│  └────────────────┬────────────────────┘   │
└─────────────────────────────────────────────┘
                   │
                   │ File read/write
                   │
┌─────────────────────────────────────────────┐
│          CSV UTILITIES                      │
│       (lib/csv.ts)                          │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  initializeCsv()                    │   │
│  │  addTribute()                       │   │
│  │  getAllTributes()                   │   │
│  └────────────────┬────────────────────┘   │
└─────────────────────────────────────────────┘
                   │
                   │ File system operations
                   │
┌─────────────────────────────────────────────┐
│          DATA STORAGE                       │
│       /data/tributes.csv                    │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  author,relationship,message,date,  │   │
│  │  createdAt                          │   │
│  │  "Name1",...                        │   │
│  │  "Name2",...                        │   │
│  │  "Name3",...                        │   │
│  │  ... (more tributes)                │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

---

**Everything flows automatically and safely!** ✅
