import type { UserSession } from '../types.js';

const sessions = new Map<number, UserSession>();

export function getSession(userId: number): UserSession {
  if (!sessions.has(userId)) {
    sessions.set(userId, {});
  }
  return sessions.get(userId)!;
}

export function clearSession(userId: number): void {
  sessions.delete(userId);
}
