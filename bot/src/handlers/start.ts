import { Context } from 'telegraf';

export async function handleStart(ctx: Context) {
  const firstName = ctx.from?.first_name || 'there';

  await ctx.reply(
    `Hey ${firstName}!\n\nWelcome to OpenClaw — your AI assistant that handles emails, calendar, and tasks.\n\nTo join the waitlist, just share your contact with us using the button below.`,
    {
      reply_markup: {
        keyboard: [[{ text: 'Share My Contact', request_contact: true }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    }
  );
}
