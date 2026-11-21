# 🎯 CSV Storage - Quick Reference Card

## ⚡ Start in 10 Seconds

```bash
npm run dev
```

Then open: `http://localhost:3000`

## 📊 Data Location

```
my-next-app/data/tributes.csv
```

## 🔄 How Data Flows

```
Form Submit
   ↓
POST /api/tributes
   ↓
CSV Utility (lib/csv.ts)
   ↓
Write to tributes.csv
   ↓
Display in Browser ✅
```

## 📝 CSV File Format

```csv
author,relationship,message,date,createdAt
"Name","Relationship","Message","Date","Timestamp"
```

## 🛠️ CSV Utilities (lib/csv.ts)

| Function | Purpose |
|----------|---------|
| `initializeCsv()` | Create CSV file with headers |
| `addTribute()` | Add new tribute to CSV |
| `getAllTributes()` | Read all tributes from CSV |
| `getCsvPath()` | Get file path for backups |

## 📋 API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/tributes` | POST | Submit new tribute |
| `/api/tributes` | GET | Fetch all tributes |

### POST Example
```json
{
  "author": "John Doe",
  "relationship": "Friend",
  "message": "She was wonderful..."
}
```

### GET Response
```json
[
  {
    "id": "tribute-0",
    "author": "John Doe",
    "relationship": "Friend",
    "message": "She was wonderful...",
    "date": "11/21/2026",
    "createdAt": "2026-11-21T04:35:00.000Z"
  }
]
```

## 🎯 Event Day Steps

```
1. Run:    npm run dev
2. Share:  http://[YOUR_IP]:3000
3. Family: Submit tributes
4. Watch:  Tributes appear live
5. Backup: Copy tributes.csv
6. Share:  Email CSV to family
```

## 📱 For Family Members

1. Open link on phone/browser
2. Scroll to "Tributes & Condolences"
3. Enter: Name, Relationship, Message
4. Click "Share Tribute"
5. ✅ Message appears instantly

## 💾 Backup After Event

```bash
# Copy the file
copy my-next-app\data\tributes.csv tributes_backup.csv

# Or email tributes.csv to family
# Or upload to Google Drive/OneDrive
```

## 🔍 View Tributes

**In Excel/Google Sheets**
- Open `/data/tributes.csv`
- See table with all tributes
- Can print or export to PDF

**In Browser**
- Visit `http://localhost:3000/api/tributes`
- See JSON data
- Newest first

**In Text Editor**
- Open `/data/tributes.csv` with Notepad
- See raw CSV data

## 🆘 Troubleshooting

| Issue | Fix |
|-------|-----|
| "Website won't load" | Run `npm run dev` |
| "Tributes not saving" | Restart: Stop npm, run `npm run dev` |
| "Can't find CSV file" | Check `/data/tributes.csv` exists |
| "CSV won't open in Excel" | Use comma as delimiter when importing |

## 📚 Documentation

| File | Contains |
|------|----------|
| `README_CSV.md` | Complete overview |
| `CSV_GUIDE.md` | Technical details |
| `EVENT_DAY_GUIDE.md` | Event setup |
| `DEPENDENCIES.md` | Package info |

## ✅ Verification Checklist

- [x] Build successful
- [x] API working
- [x] CSV utilities created
- [x] Data directory exists
- [x] CSV file initialized
- [x] Tributes component updated
- [x] Ready for event

## 🚀 Commands

```bash
npm run dev              # Start development
npm run build            # Build for production
npm start                # Start production server
```

## 🎊 Key Features

✅ No setup needed
✅ CSV storage
✅ Instant saving
✅ Data persists
✅ Easy backup
✅ Easy sharing
✅ Works offline
✅ Family-friendly

## 💡 Tips

- Get your IP: `ipconfig` in PowerShell
- Share website via QR code or link
- Keep CSV file for memories
- Email CSV after event
- Can open CSV in Excel anytime

## 📞 Support Commands

```bash
# See all tributes
curl http://localhost:3000/api/tributes

# Submit test tribute
curl -X POST http://localhost:3000/api/tributes \
  -H "Content-Type: application/json" \
  -d '{"author":"Test","message":"Test message"}'
```

---

**Everything is ready. Just run `npm run dev`!** 🎉
