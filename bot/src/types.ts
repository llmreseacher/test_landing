export interface LeadData {
  firstName: string;
  lastName: string;
  telegramUsername: string | undefined;
  telegramUserId: number;
  q1?: string;
  q2?: string;
  q3?: string;
}

export interface UserSession {
  q1?: string;
  q2?: string;
  q3?: string;
}
