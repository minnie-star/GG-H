# 🎯 Event Day Quick Start - CSV Storage

## ⏰ Before the Event

### Setup (2 minutes)
```bash
npm run dev
```

That's it! 🎉

### Verify It Works
1. Open http://localhost:3000
2. Scroll to "Tributes & Condolences"
3. Submit a test tribute with your name
4. Click "Share Tribute"
5. ✅ Should appear instantly in the list
6. Refresh page - should still be there!

## 📱 During the Event

### Family Members Can:
1. **Access website** at: `http://[YOUR_IP]:3000`
   - On same WiFi network, or
   - Via shared link/QR code
2. **Scroll to Tributes section**
3. **Fill in form**:
   - Your Name (required)
   - Relationship to deceased (optional)
   - Your memory/message (required)
4. **Click "Share Tribute"**
5. **See tribute appear instantly!**

### You Can:
- Monitor submissions in real-time
- Watch tributes appear on screen
- Help family members with form
- Verify data is being saved

## 💾 After the Event (Backup)

### Step 1: Locate File
```
my-next-app/data/tributes.csv
```

### Step 2: Backup (Choose One)

**Option A: Copy File**
```bash
# Windows
copy my-next-app\data\tributes.csv tributes_backup_[DATE].csv
```

**Option B: Email**
- Attach `/data/tributes.csv` to email
- Send to family members
- They can open in Excel/Google Sheets

**Option C: Cloud Backup**
- Upload to Google Drive
- Upload to OneDrive
- Upload to Dropbox

### Step 3: View Tributes

**In Excel/Google Sheets**
1. Open `tributes.csv`
2. See all tributes in table
3. Can print or export to PDF

**In Notepad**
1. Right-click `tributes.csv`
2. Open with Notepad
3. See raw data

## 🔗 Sharing Website Access

### Option A: Local Network (Fastest)
1. Run app on your computer
2. Find your computer IP:
   ```bash
   ipconfig
   # Look for IPv4 Address (e.g., 192.168.1.100)
   ```
3. Share with family: `http://[YOUR_IP]:3000`
4. Family connects on same WiFi

### Option B: Share via QR Code
1. Generate QR code linking to `http://[YOUR_IP]:3000`
2. Display on screen
3. Family scans with phone

### Option C: Remote (If not together)
- Use ngrok or similar tunneling service
- Share public URL with family
- Requires setup (more complex)

## 📊 CSV File Structure

What gets saved:

```csv
author,relationship,message,date,createdAt
"Name","Relationship","Message here","11/21/2026","2026-11-21T04:35:00.000Z"
```

✅ All fields automatically filled
✅ Handles special characters
✅ Date/time automatically recorded

## 🆘 Troubleshooting

### Website won't load
- Run: `npm run dev`
- Check: http://localhost:3000 works first
- Verify firewall allows port 3000

### Tributes not saving
- Check browser console (F12) for errors
- Verify `/data` folder exists
- Restart npm dev server

### Family can't access website
- Verify they're on same WiFi
- Use correct IP address
- Check firewall settings
- Restart router

### Tributes disappeared
- Check `/data/tributes.csv` file exists
- File might be corrupted - check backup

## 📋 Checklist for Event Day

- [ ] Run `npm run dev` morning of event
- [ ] Test submit one tribute
- [ ] Get your computer's IP address
- [ ] Share link with family
- [ ] Monitor tributes coming in
- [ ] After event: Backup CSV file
- [ ] Email CSV to family or upload to cloud

## 📞 Contact Support

If issues occur:
1. Check browser console (F12) for errors
2. Check terminal for server errors
3. Restart: Stop npm, run `npm run dev` again
4. Check `/data/tributes.csv` exists

## 🎉 That's It!

Your memorial website with CSV storage is ready for event day.

**Simple. Reliable. No Setup Needed.**

---

**Have a beautiful memorial event!** 💐
