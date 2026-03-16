import { config } from '../config.js';
import type { LeadData } from '../types.js';

const HUBSPOT_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${config.hubspotPortalId}/${config.hubspotFormId}`;

export async function submitToHubSpot(lead: LeadData): Promise<void> {
  // HubSpot requires email — use telegram username or user ID as synthetic email
  const emailHandle = lead.telegramUsername || `tg_${lead.telegramUserId}`;
  const fields = [
    { name: 'firstname', value: lead.firstName },
    { name: 'lastname', value: lead.lastName },
    { name: 'email', value: `${emailHandle}@telegram.openclaw.io` },
    { name: 'phone', value: lead.phone },
    { name: 'telegram_username', value: lead.telegramUsername || '' },
  ];

  const payload = {
    fields,
    context: {
      pageUri: 'https://usereloai.com/telegram-bot',
      pageName: 'Telegram Bot Waitlist',
    },
  };

  try {
    const res = await fetch(HUBSPOT_SUBMIT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error('HubSpot submission failed:', res.status, body);
    } else {
      console.log('HubSpot submission OK');
    }
  } catch (err) {
    console.error('HubSpot submission error:', err);
  }
}
