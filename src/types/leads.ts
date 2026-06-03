import { Leads } from 'services/leads';

export const MOCK_LEADS: Leads[] = [
  {
    id: '1',
    name: 'Sandra K.',
    postalCode: 'T2G 3T8',
    yearBuilt: 1977,
    homeType: 'Detached',
    neighborhood: 'Ramsay',
    heatingSystem: 'Gas furnace',
    estimatedCost: 18000,
    tags: ['Heat Pump', 'Insulation'],
    status: 'New Lead',
    statusDetail: 'Received 2 hrs ago'
  },
  {
    id: '2',
    name: 'Marcus A.',
    postalCode: 'T3B 2K4',
    yearBuilt: 1968,
    homeType: 'Detached',
    neighborhood: 'Bowness',
    heatingSystem: 'Oil boiler',
    estimatedCost: 22000,
    tags: ['Heat Pump'],
    status: 'Claimed',
    statusDetail: 'Claimed yesterday · Quote sent ✓'
  },
  {
    id: '3',
    name: 'James W.',
    postalCode: 'T2L 1N2',
    yearBuilt: 1972,
    homeType: 'Detached',
    neighborhood: 'Brentwood',
    heatingSystem: 'Gas furnace',
    estimatedCost: 22000,
    tags: ['Heat Pump', 'Solar'],
    status: 'Closed ✓',
    statusDetail: 'Closed May 3 · $2,200 commission'
  },
  {
    id: '4',
    name: 'Priya S.',
    postalCode: 'T2V 2M5',
    yearBuilt: 1985,
    homeType: 'Semi',
    neighborhood: 'Killarney',
    heatingSystem: 'Gas furnace',
    estimatedCost: 16500,
    tags: ['Heat Pump', 'Windows'],
    status: 'New Lead',
    statusDetail: 'Received 5 hrs ago'
  }
];
