import { Context } from 'telegraf';
import { getSession, clearSession } from '../services/session.js';
import { trackContact } from '../services/tracker.js';
import { notifyAdmin } from '../services/notify.js';
import { getQuestion, nextQuestion } from './questions.js';
import type { LeadData } from '../types.js';

export async function handleCallback(ctx: Context) {
  if (!ctx.callbackQuery || !('data' in ctx.callbackQuery)) return;

  const from = ctx.callbackQuery.from;
  const data = ctx.callbackQuery.data;
  const [qKey, answer] = data.split(':');
  const session = getSession(from.id);

  // Store the answer
  if (qKey === 'q1') session.q1 = answer;
  if (qKey === 'q2') session.q2 = answer;
  if (qKey === 'q3') session.q3 = answer;

  await ctx.answerCbQuery();

  // Remove inline keyboard from answered question
  await ctx.editMessageReplyMarkup(undefined);

  const next = nextQuestion(qKey);

  if (next) {
    const q = getQuestion(next)!;
    await ctx.reply(q.text, {
      reply_markup: { inline_keyboard: q.keyboard },
    });
  } else {
    // All questions answered — save lead
    const lead: LeadData = {
      firstName: from.first_name || '',
      lastName: from.last_name || '',
      telegramUsername: from.username,
      telegramUserId: from.id,
      q1: session.q1,
      q2: session.q2,
      q3: session.q3,
    };

    trackContact(from.id);
    clearSession(from.id);

    await ctx.reply(
      "You're all set! Your OpenClaw agent is being configured now — expect it live within 24 hours. We'll ping you right here!"
    );

    await notifyAdmin(ctx, lead);
  }
}
