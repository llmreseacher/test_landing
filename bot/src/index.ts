import { Telegraf } from 'telegraf';
import { config } from './config.js';
import { handleStart } from './handlers/start.js';
import { handleCallback } from './handlers/callback.js';
import { getStats } from './services/tracker.js';

const bot = new Telegraf(config.botToken);

bot.start(handleStart);

bot.command('stats', async (ctx) => {
  if (String(ctx.from.id) !== config.adminChatId && String(ctx.chat.id) !== config.adminChatId) {
    return;
  }
  const stats = getStats();
  await ctx.reply(
    `📊 Bot Stats\n\nTotal users: ${stats.total}\nShared contact: ${stats.sharedContact}`
  );
});

bot.on('callback_query', handleCallback);

bot.on('message', (ctx) => {
  ctx.reply("Want to get your OpenClaw agent? Just type /start to begin!");
});

// Webhook if WEBHOOK_DOMAIN is set, polling otherwise
if (config.webhookDomain) {
  const webhookPath = `/webhook/${config.botToken}`;
  bot.launch({
    webhook: {
      domain: config.webhookDomain,
      port: config.port,
      hookPath: webhookPath,
    },
  });
  console.log(`Bot running in webhook mode on port ${config.port}`);
} else {
  bot.launch();
  console.log('Bot running in polling mode');
}

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
