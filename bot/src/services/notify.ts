import { Context } from 'telegraf';
import { config } from '../config.js';
import type { LeadData } from '../types.js';

export async function notifyAdmin(ctx: Context, lead: LeadData): Promise<void> {
  const username = lead.telegramUsername ? `@${lead.telegramUsername}` : 'no username';
  const message = [
    'New Telegram Lead',
    '',
    `Name: ${lead.firstName} ${lead.lastName}`.trim(),
    `Telegram: ${username}`,
    `User ID: ${lead.telegramUserId}`,
    '',
    `Tasks: ${lead.q1 || '-'}`,
    `Tools: ${lead.q2 || '-'}`,
    `Channel: ${lead.q3 || '-'}`,
  ].join('\n');

  try {
    await ctx.telegram.sendMessage(config.adminChatId, message);
  } catch (err) {
    console.error('Admin notification failed:', err);
  }
}
