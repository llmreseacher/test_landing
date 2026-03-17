import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = join(__dirname, '../../data/users.json');

interface UserRecord {
  userId: number;
  firstName: string;
  username?: string;
  firstSeen: string;
  lastSeen: string;
  sharedContact: boolean;
}

interface UsersDB {
  users: Record<string, UserRecord>;
}

function loadDB(): UsersDB {
  if (!existsSync(DB_PATH)) return { users: {} };
  try {
    return JSON.parse(readFileSync(DB_PATH, 'utf-8'));
  } catch {
    return { users: {} };
  }
}

function saveDB(db: UsersDB): void {
  const dir = dirname(DB_PATH);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

export function trackStart(userId: number, firstName: string, username?: string): void {
  const db = loadDB();
  const key = String(userId);
  const now = new Date().toISOString();

  if (db.users[key]) {
    db.users[key].lastSeen = now;
    db.users[key].firstName = firstName;
    if (username) db.users[key].username = username;
  } else {
    db.users[key] = {
      userId,
      firstName,
      username,
      firstSeen: now,
      lastSeen: now,
      sharedContact: false,
    };
  }
  saveDB(db);
}

export function trackContact(userId: number): void {
  const db = loadDB();
  const key = String(userId);
  if (db.users[key]) {
    db.users[key].sharedContact = true;
    db.users[key].lastSeen = new Date().toISOString();
    saveDB(db);
  }
}

export function getStats(): { total: number; sharedContact: number; users: UserRecord[] } {
  const db = loadDB();
  const users = Object.values(db.users);
  return {
    total: users.length,
    sharedContact: users.filter((u) => u.sharedContact).length,
    users,
  };
}
