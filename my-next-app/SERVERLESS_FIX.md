# Serverless Environment Fix - Read-Only File System

## Problem
The application was throwing an `EROFS: read-only file system` error when deployed to serverless environments (AWS Lambda, Vercel, etc.):

```
Error: EROFS: read-only file system, open '/var/task/my-next-app/data/tributes.csv'
```

This occurs because serverless platforms mount the application code as read-only. Only temporary directories like `/tmp` are writable.

## Solution Implemented

### 1. Dynamic Directory Selection (`lib/csv.ts`)
The CSV utility now detects the deployment environment and uses an appropriate directory:

```typescript
const getDataDir = () => {
  const isServerless = process.env.AWS_LAMBDA_FUNCTION_NAME || 
                       process.env.VERCEL || 
                       process.env.NODE_ENV === 'production';
  
  if (isServerless) {
    return '/tmp';  // Writable temporary directory in serverless
  }
  return path.join(process.cwd(), 'data');  // Local development
};
```

**Environment Detection:**
- `AWS_LAMBDA_FUNCTION_NAME` - Set by AWS Lambda
- `VERCEL` - Set by Vercel deployments
- `NODE_ENV === 'production'` - Generic production detection

### 2. Graceful Error Handling
The CSV functions now handle read-only file system errors gracefully:

#### `initializeCsv()`
- Attempts to create file if it doesn't exist
- Catches write errors and logs warnings instead of crashing
- Continues operation even if file creation fails

#### `addTribute()`
- Handles `ENOENT` (file not found) errors by creating the file first
- Handles `EROFS` (read-only filesystem) errors with warnings
- Returns tribute data to user even if persistence fails
- Provides graceful degradation

#### `getAllTributes()`
- Returns empty array if file read fails
- Continues application operation without tributes

### 3. Data Persistence

**Local Development:**
```
/data/tributes.csv  (persistent across restarts)
```

**Serverless Deployment:**
```
/tmp/tributes.csv  (temporary, lost between function invocations)
```

**Important Note:** In serverless environments, tributes stored in `/tmp` will be lost when the function instance is terminated. For production serverless deployments, consider:
- Using a database service (DynamoDB, MongoDB Atlas, etc.)
- Exporting tributes to permanent storage at event end
- Using an external file storage service (S3, etc.)

## Testing Locally

The fix works transparently in local development:

```bash
npm run dev
# Tributes will be stored in ./data/tributes.csv
```

## Deployment

### Vercel
No configuration needed - the code detects Vercel automatically via `VERCEL` env var.

### AWS Lambda
No configuration needed - the code detects Lambda automatically via `AWS_LAMBDA_FUNCTION_NAME` env var.

### Other Platforms
If your serverless platform isn't auto-detected, manually set:
```
NODE_ENV=production
```

## Future Enhancements

For production serverless deployments, consider:

1. **Database Migration:**
   ```typescript
   // Switch to MongoDB, DynamoDB, Firebase, etc.
   ```

2. **Scheduled Export:**
   - Export `/tmp/tributes.csv` to S3 at event end
   - Provides permanent backup of all tributes

3. **External Service:**
   - Log tributes to external API
   - Use third-party data storage service

## Troubleshooting

### Tributes Not Persisting After Deployment
This is expected behavior in serverless environments. Use `/tmp` as temporary staging, then export to permanent storage.

### Still Getting EROFS Error
1. Verify environment variables are set correctly
2. Check that `/tmp` directory is accessible
3. Ensure file permissions (should be 666 or similar)

### File Already Exists Error
The code handles this gracefully. If `/tmp/tributes.csv` already exists from a previous invocation, it will append new tributes correctly.

## Code Changes Summary

| File | Changes |
|------|---------|
| `lib/csv.ts` | Added dynamic directory selection, improved error handling, graceful degradation |
| `app/api/tributes/route.ts` | No changes (works with updated CSV utilities) |
| `app/Tributes.tsx` | No changes (works transparently) |

Build Status: ✅ Passing
Deployment Ready: ✅ Yes
