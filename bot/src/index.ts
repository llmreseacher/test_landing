import { Telegraf } from 'telegraf';
import { config } from './config.js';
import { handleStart } from './handlers/start.js';
import { handleContact } from './handlers/contact.js';

const bot = new Telegraf(config.botToken);

bot.start(handleStart);
bot.on('contact', handleContact);

// Fallback for any other message
bot.on('message', (ctx) => {
  ctx.reply(
    'Please share your contact using the button below so we can reach you.',
    {
      reply_markup: {
        keyboard: [[{ text: 'Share My Contact', request_contact: true }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    }
  );
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
