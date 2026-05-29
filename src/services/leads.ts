export type LeadStatus = 'New Lead' | 'Claimed' | 'Closed';

export interface Leads {
  id: string;
  name: string;
  postalCode: string;
  yearBuilt: number;
  homeType: string;
  neighborhood: string;
  heatingSystem: string;
  estimatedCost: number;
  tags: string[];
  status: LeadStatus;
  statusDetail?: string;
}
