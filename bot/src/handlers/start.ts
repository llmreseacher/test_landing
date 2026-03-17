import { Context } from 'telegraf';
import { trackStart } from '../services/tracker.js';
import { getSession } from '../services/session.js';
import { getQuestion } from './questions.js';

export async function handleStart(ctx: Context) {
  const firstName = ctx.from?.first_name || 'there';

  if (ctx.from) {
    trackStart(ctx.from.id, firstName, ctx.from.username);
    // Reset session for fresh start
    const session = getSession(ctx.from.id);
    session.q1 = undefined;
    session.q2 = undefined;
    session.q3 = undefined;
  }

  await ctx.reply(
    `Hey ${firstName}!\n\nWelcome to OpenClaw, your AI assistant that handles emails, calendar, and tasks.\n\nJust answer a few quick questions and your OpenClaw agent will be configured for you.`
  );

  const q = getQuestion('q1')!;
  await ctx.reply(q.text, {
    reply_markup: { inline_keyboard: q.keyboard },
  });
}
