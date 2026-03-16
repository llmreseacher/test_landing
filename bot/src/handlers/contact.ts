import { Context } from 'telegraf';
import { notifyAdmin } from '../services/notify.js';
import type { LeadData } from '../types.js';

export async function handleContact(ctx: Context) {
  const contact = ctx.message && 'contact' in ctx.message ? ctx.message.contact : null;

  if (!contact) {
    await ctx.reply('Something went wrong. Please try again.');
    return;
  }

  // Only accept the user's own contact
  if (contact.user_id !== ctx.from?.id) {
    await ctx.reply(
      "Please share your own contact using the button, not someone else's.",
      {
        reply_markup: {
          keyboard: [[{ text: 'Share My Contact', request_contact: true }]],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      }
    );
    return;
  }

  const lead: LeadData = {
    firstName: contact.first_name || '',
    lastName: contact.last_name || '',
    phone: contact.phone_number,
    telegramUsername: ctx.from?.username,
    telegramUserId: ctx.from.id,
  };

  // Send confirmation immediately
  await ctx.reply(
    "Thanks! You're on the waitlist.\n\nWe'll reach out to you soon. In the meantime, check out what OpenClaw can do: https://usereloai.com",
    { reply_markup: { remove_keyboard: true } }
  );

  // Notify admin
  await notifyAdmin(ctx, lead);
}
