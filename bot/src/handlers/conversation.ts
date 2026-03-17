import { Context } from 'telegraf';
import { getSession, clearSession } from '../services/session.js';
import { trackContact } from '../services/tracker.js';
import { notifyAdmin } from '../services/notify.js';
import type { LeadData } from '../types.js';

export async function handleMessage(ctx: Context) {
  if (!ctx.from || !ctx.message || !('text' in ctx.message)) return;

  const session = getSession(ctx.from.id);
  const text = ctx.message.text.trim();

  switch (session.step) {
    case 'awaiting_name':
      session.firstName = text;
      session.step = 'awaiting_lastname';
      await ctx.reply(`Nice to meet you, ${text}! What's your last name?`);
      break;

    case 'awaiting_lastname':
      session.lastName = text;
      session.step = 'awaiting_phone';
      await ctx.reply(
        `Thanks ${session.firstName}! Last one — what's your phone number?\n\nYou can also type "skip" if you'd rather not share it.`
      );
      break;

    case 'awaiting_phone': {
      const phone = text.toLowerCase() === 'skip' ? '' : text;

      const lead: LeadData = {
        firstName: session.firstName || '',
        lastName: session.lastName || '',
        phone,
        telegramUsername: ctx.from.username,
        telegramUserId: ctx.from.id,
      };

      clearSession(ctx.from.id);
      trackContact(ctx.from.id);

      await ctx.reply(
        "Thanks! You're on the waitlist.\n\nWe'll reach out to you soon. In the meantime, check out what OpenClaw can do: https://usereloai.com"
      );

      await notifyAdmin(ctx, lead);
      break;
    }

    default:
      await ctx.reply(
        "Want to join our waitlist? Just type /start to begin!"
      );
      break;
  }
}
