import type { InlineKeyboardButton } from 'telegraf/types';

interface Question {
  text: string;
  options: [string, string][];
}

const QUESTIONS: Record<string, Question> = {
  q1: {
    text: 'What repetitive tasks take up most of your time?',
    options: [
      ['Email management', 'q1:email'],
      ['Calendar / scheduling', 'q1:calendar'],
      ['Reports & updates', 'q1:reports'],
      ['Data entry & CRM', 'q1:data'],
      ['Research', 'q1:research'],
      ['Other', 'q1:other'],
    ],
  },
  q2: {
    text: 'What tools do you use daily?',
    options: [
      ['Gmail', 'q2:gmail'],
      ['Outlook', 'q2:outlook'],
      ['Google Calendar', 'q2:gcal'],
      ['Slack', 'q2:slack'],
      ['Notion', 'q2:notion'],
      ['Other', 'q2:other'],
    ],
  },
  q3: {
    text: 'Where do you want to talk to your AI agent?',
    options: [
      ['Telegram', 'q3:telegram'],
      ['WhatsApp', 'q3:whatsapp'],
      ['Slack', 'q3:slack'],
      ['Email', 'q3:email'],
    ],
  },
};

export function getQuestion(key: string) {
  const q = QUESTIONS[key];
  if (!q) return null;

  const keyboard: InlineKeyboardButton[][] = q.options.map(([label, data]) => [
    { text: label, callback_data: data },
  ]);

  return { text: q.text, keyboard };
}

export function nextQuestion(current: string): string | null {
  if (current === 'q1') return 'q2';
  if (current === 'q2') return 'q3';
  return null;
}
