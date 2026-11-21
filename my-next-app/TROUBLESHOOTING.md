# Troubleshooting Guide - EROFS Fix

## Common Issues & Solutions

### Issue 1: Still Getting EROFS Error
**Symptoms:** Error message shows `EROFS: read-only file system`

**Solution:**
1. Verify you're running the latest code (with environment detection)
   ```bash
   grep "getDataDir" lib/csv.ts
   ```
   Should show the new `getDataDir()` function

2. Check environment variables in serverless console:
   - AWS Lambda: Look for `AWS_LAMBDA_FUNCTION_NAME` env var
   - Vercel: Look for `VERCEL` env var
   - Other: Ensure `NODE_ENV=production` is set

3. Check server logs for error messages:
   ```
   Error creating data directory: ...
   Could not write tributes file (read-only filesystem): ...
   ```
   These warnings are normal and expected!

---

### Issue 2: Tributes Not Saving
**Symptoms:** Users submit tributes but they don't appear on page refresh

**Local Development:**
1. Check if `./data/tributes.csv` file exists:
   ```bash
   ls -la ./data/tributes.csv
   ```

2. Check file permissions:
   ```bash
   chmod 644 ./data/tributes.csv
   ```

3. Verify API response with curl:
   ```bash
   curl -X GET http://localhost:3000/api/tributes
   ```

**Serverless Deployment:**
1. This is **expected behavior** - tributes are stored in `/tmp`
2. Data persists for event duration (hours)
3. Data is lost when server instances terminate
4. Solution: Export tributes at event end
   ```bash
   curl http://your-domain/api/tributes > tributes.json
   ```

---

### Issue 3: 500 Error on Tribute Submission
**Symptoms:** User submits tribute, gets 500 error

**Solution:**

1. Check server logs for the actual error:
   ```
   POST /api/tributes
   Error: ...
   ```

2. Common causes:
   - Missing required fields (author or message)
     → Fix: Ensure form validation
   - Malformed JSON in request
     → Fix: Check Content-Type header
   - Filesystem permissions
     → Fix: Check error handling logs

3. If still failing, check:
   ```bash
   curl -X POST http://localhost:3000/api/tributes \
     -H "Content-Type: application/json" \
     -d '{"author":"Test","relationship":"Family","message":"Test tribute"}'
   ```

---

### Issue 4: Empty Tributes List
**Symptoms:** Page shows "No tributes yet" even after submissions

**Solution:**

1. Check if CSV file exists:
   ```bash
   # Local
   cat ./data/tributes.csv
   
   # Serverless
   ls -la /tmp/tributes.csv
   ```

2. Verify file has headers and content:
   ```bash
   head -5 tributes.csv
   ```
   Should show:
   ```
   author,relationship,message,date,createdAt
   John Doe,Family,"A tribute",11/21/2026,2026-11-21T...
   ```

3. Check GET API endpoint:
   ```bash
   curl http://localhost:3000/api/tributes
   ```
   Should return JSON array with tributes

---

### Issue 5: Special Characters Breaking CSV
**Symptoms:** Tributes with quotes or commas don't save properly

**Solution:**

This should be automatically handled! The fix includes CSV escaping:
```typescript
function escapeCsvValue(value: string): string {
  if (!value) return '';
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}
```

If still having issues:
1. Test with simple tribute first (no special chars)
2. Check CSV file for proper escaping
3. Report issue if escaping isn't working

---

### Issue 6: Vercel Deployment - Data Lost
**Symptoms:** Tributes appear during event, gone after restart

**Expected Behavior:** ✅ This is normal in serverless!

**Explanation:**
- Tributes stored in `/tmp/tributes.csv` (temporary)
- Data persists while Vercel function instance is active
- Instance can be reused (data persists) or replaced (data lost)
- After 24 hours or on deployment, instance terminates and `/tmp` is cleared

**Solution:**
1. Export tributes to permanent storage:
   ```bash
   curl https://your-domain/api/tributes > tributes-backup.json
   ```

2. Consider upgrading to permanent storage:
   - MongoDB Atlas (free tier available)
   - Firebase Realtime Database
   - Supabase PostgreSQL
   - See `EROFS_DEBUG_RESOLUTION.md` → Future Enhancements

---

### Issue 7: AWS Lambda - Timeout or High Memory
**Symptoms:** Lambda times out or uses too much memory

**Solution:**

1. Check if file initialization is running on every request:
   ```bash
   # In logs, should see:
   # First request: "Creating data directory"
   # Subsequent: No directory creation messages
   ```

2. If seeing repeated initialization:
   - Lambda container may be reusing function instances ✅ (expected)
   - Each new container will reinitialize `/tmp` ✅ (expected)

3. Optimize by:
   - Increase Lambda timeout to 30+ seconds
   - Set memory to 1024MB or higher
   - Use Lambda provisioned concurrency for fast cold starts

---

### Issue 8: Git Workflow Issues
**Symptoms:** Can't commit or push due to large data files

**Solution:**

1. Add to `.gitignore` (if not already there):
   ```bash
   echo "/data/" >> .gitignore
   echo "/tmp/" >> .gitignore
   ```

2. Don't commit local tributes to git:
   ```bash
   git status
   # Should NOT show ./data/tributes.csv
   ```

3. Keep git repository clean:
   ```bash
   git rm -r --cached data/
   git commit -m "Remove data directory from git"
   ```

---

### Issue 9: Attribute Type Mismatch
**Symptoms:** TypeScript error about property types

**Solution:**

The fix includes proper type casting:
```typescript
const err = error as NodeJS.ErrnoException;
if (error && err.code !== 'EEXIST') {
  // Handle error
}
```

This should resolve automatically - just rebuild:
```bash
npm run build
```

---

### Issue 10: Testing in Different Environments
**Symptoms:** Works locally but fails in production

**Solution:**

1. Test environment detection locally:
   ```bash
   # Simulate serverless
   NODE_ENV=production npm run dev
   
   # Check logs for:
   # "Serverless environment detected - using /tmp"
   ```

2. Test on staging before production:
   ```bash
   # Deploy to staging environment
   # Verify tributes are stored in /tmp
   # Test export functionality
   ```

3. Create export script for production:
   ```bash
   # Schedule or run manually before shutdown
   curl https://production-domain/api/tributes > \
     tributes-backup-$(date +%Y%m%d-%H%M%S).json
   ```

---

## Debug Logs to Check

### Expected Warnings (Normal)
```
Could not write tributes file (read-only filesystem): ...
File system is read-only. Tributes cannot be persisted: ...
```
✅ These are expected in serverless - app continues working

### Actual Errors (Investigate)
```
Error creating tributes file: PERMISSION_DENIED
Error reading tributes: ENOENT (No such file or directory)
Error adding tribute: ...
```
⚠️ These indicate real problems - check file permissions

### Environment Detection (Verify on Startup)
```
Serverless environment detected - using /tmp
Local development detected - using ./data
```
✅ Check logs during startup to verify correct location

---

## Quick Checklist

- [ ] Code includes `getDataDir()` function
- [ ] Build passes without errors
- [ ] No `EROFS` errors in logs
- [ ] Tributes can be submitted via API
- [ ] GET `/api/tributes` returns JSON array
- [ ] Environment correctly detected (check logs)
- [ ] File exists at correct location:
  - Local: `./data/tributes.csv`
  - Serverless: `/tmp/tributes.csv`

---

## Still Having Issues?

1. **Check logs** - Most information is in server console/logs
2. **Review documentation** - See `EROFS_DEBUG_RESOLUTION.md`
3. **Verify deployment** - Ensure latest code is deployed
4. **Test API directly** - Use curl to test endpoints
5. **Check environment** - Verify environment variables are set
6. **Enable debug mode** - Add `console.log()` statements

---

## Contact Support

If none of the above solutions work:
1. Collect server logs (last 50 lines)
2. Note exact error message
3. Describe when error occurs
4. Include environment details (Node version, platform, etc.)
5. Report with reproduction steps
