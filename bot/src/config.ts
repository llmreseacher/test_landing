function required(name: string): string {
  const val = process.env[name];
  if (!val) throw new Error(`Missing required env var: ${name}`);
  return val;
}

export const config = {
  botToken: required('BOT_TOKEN'),
  webhookDomain: process.env.WEBHOOK_DOMAIN || '',
  port: parseInt(process.env.PORT || '3000', 10),
  adminChatId: required('ADMIN_CHAT_ID'),
  hubspotPortalId: '41836896',
  hubspotFormId: '6ab84485-2e42-4b43-8e82-5e1931738527',
};
