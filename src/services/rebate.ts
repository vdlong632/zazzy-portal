export interface Rebate {
  id: number;
  jurisdiction: 'Federal' | 'Municipal — Paused' | 'ENMAX + ATCO';
  icon: string;
  amount: string;
  title: string;
  description: string;
  impact?: string;
  notify?: string;
}
