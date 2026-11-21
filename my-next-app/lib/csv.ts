import { promises as fs } from 'fs';
import path from 'path';

// Determine data directory based on environment
// Use /tmp for serverless/read-only environments, otherwise use project data directory
const getDataDir = () => {
  const isServerless = process.env.AWS_LAMBDA_FUNCTION_NAME || 
                       process.env.VERCEL || 
                       process.env.NODE_ENV === 'production';
  
  if (isServerless) {
    return '/tmp';
  }
  return path.join(process.cwd(), 'data');
};

const DATA_DIR = getDataDir();
const TRIBUTES_FILE = path.join(DATA_DIR, 'tributes.csv');

// Ensure data directory exists
export async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    // Silently ignore if directory already exists or is read-only
    const err = error as NodeJS.ErrnoException;
    if (error && err.code !== 'EEXIST') {
      console.error('Error creating data directory:', error);
    }
  }
}

// CSV Headers
const CSV_HEADERS = 'author,relationship,message,date,createdAt\n';

// Initialize CSV file if it doesn't exist
export async function initializeCsv() {
  await ensureDataDir();
  try {
    await fs.access(TRIBUTES_FILE);
  } catch {
    // File doesn't exist, try to create it
    try {
      await fs.writeFile(TRIBUTES_FILE, CSV_HEADERS, 'utf-8');
    } catch (writeError) {
      // If write fails (read-only filesystem), just log and continue
      // The file might already exist or we're in a read-only environment
      console.warn('Could not write tributes file (read-only filesystem):', writeError);
    }
  }
}

// Escape CSV values (handle commas and quotes)
function escapeCsvValue(value: string): string {
  if (!value) return '';
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

// Parse CSV line
function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        current += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current);
  return result;
}

// Add tribute to CSV
export async function addTribute(tribute: {
  author: string;
  relationship: string;
  message: string;
}): Promise<any> {
  await initializeCsv();

  const now = new Date().toISOString();
  const date = new Date().toLocaleDateString();

  const csvLine = [
    escapeCsvValue(tribute.author),
    escapeCsvValue(tribute.relationship),
    escapeCsvValue(tribute.message),
    escapeCsvValue(date),
    escapeCsvValue(now),
  ].join(',');

  try {
    const content = await fs.readFile(TRIBUTES_FILE, 'utf-8');
    await fs.writeFile(TRIBUTES_FILE, content + csvLine + '\n', 'utf-8');
  } catch (error) {
    // If file doesn't exist yet, create it with headers + first tribute
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      try {
        await fs.writeFile(TRIBUTES_FILE, CSV_HEADERS + csvLine + '\n', 'utf-8');
      } catch (writeError) {
        console.error('Error creating tributes file:', writeError);
        // Even if we can't write, return success for user experience
        // In production, consider logging to external service
      }
    } else if ((error as NodeJS.ErrnoException).code === 'EROFS') {
      console.warn('File system is read-only. Tributes cannot be persisted:', error);
      // Return success anyway so user gets feedback
    } else {
      console.error('Error adding tribute:', error);
      throw error;
    }
  }

  // Return the tribute with metadata regardless of persistence
  return {
    author: tribute.author,
    relationship: tribute.relationship,
    message: tribute.message,
    date,
    createdAt: now,
  };
}

// Read all tributes from CSV
export async function getAllTributes(): Promise<any[]> {
  await initializeCsv();

  try {
    const content = await fs.readFile(TRIBUTES_FILE, 'utf-8');
    const lines = content.trim().split('\n');

    // Skip header line
    const tributes = lines.slice(1).map((line, index) => {
      const values = parseCsvLine(line);
      return {
        id: `tribute-${index}`,
        author: values[0] || '',
        relationship: values[1] || '',
        message: values[2] || '',
        date: values[3] || '',
        createdAt: values[4] || '',
      };
    });

    // Filter out empty lines and return in reverse order (newest first)
    return tributes.filter(t => t.author || t.message).reverse();
  } catch (error) {
    console.error('Error reading tributes:', error);
    return [];
  }
}

// Get CSV file path (useful for downloads/backups)
export function getCsvPath(): string {
  return TRIBUTES_FILE;
}
