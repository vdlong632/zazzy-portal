import { Rebate } from 'services/rebate';

export const MOCK_REBATES: Rebate[] = [
  {
    id: 1,
    jurisdiction: 'Federal',
    icon: '🔥',
    amount: '$10,000',
    title: 'Oil-to-Heat-Pump Affordability Program',
    description:
      'Federal grant for switching from oil or gas to a certified cold-climate heat pump. Active 2026.',
    impact: '🌱 Avoids 2–4 tCO₂e/yr'
  },
  {
    id: 2,
    jurisdiction: 'Federal',
    icon: '⚡',
    amount: '30% ITC',
    title: 'Clean Energy Investment Tax Credit',
    description:
      'Refundable 30% federal tax credit on solar, heat pumps, and battery storage. Active until 2034.',
    impact: '🌱 Avoids 1–3 tCO₂e/yr'
  },
  {
    id: 3,
    jurisdiction: 'Federal',
    icon: '🏠',
    amount: '25% Refund',
    title: 'CMHC Eco Improvement',
    description:
      'Mortgage insurance premium refund for completing $20,000+ in qualifying energy retrofits on an insured mortgage.'
  },
  {
    id: 4,
    jurisdiction: 'Federal',
    icon: '🌿',
    amount: 'No-Cost',
    title: 'Canada Greener Homes Affordability',
    description:
      'Full retrofit cost covered for low-to-median income households. Launched 2026 through provincial delivery partners.'
  },
  {
    id: 5,
    jurisdiction: 'Municipal — Paused',
    icon: '🏙️',
    amount: 'Up to $50K',
    title: 'Calgary CEIP Residential',
    description:
      'Property-tax financing for insulation, heat pumps, solar, and windows. Currently paused.',
    notify: '⚠ Reopening spring 2026. We notify you the moment it does.'
  },
  {
    id: 6,
    jurisdiction: 'ENMAX + ATCO',
    icon: '🌡️',
    amount: '$500–$2,500',
    title: 'ENMAX and ATCO Utility amounts',
    description:
      'Utility amounts for heat pumps, smart thermostats, and insulation. Stackable with federal programmes. Confirmed monthly.'
  }
];

export const MOCK_RESULT = [
  {
    id: 1,
    badge: 'Federal — Active',
    heading: 'Oil-to-Heat-Pump Affordability Program',
    budget: '$10,000',
    label:
      'Federal grant for your gas furnace to cold-climate heat pump conversion. EnerGuide audit required before installation. Your matched contractor coordinates this directly.',
    rebate: '🌱 Avoids 3.2 tCO₂e/yr'
  },
  {
    id: 2,
    badge: 'ENMAX — Active',
    heading: 'ENMAX Heat Pump Rebate',
    budget: 'Est. $1,200',
    label:
      'ENMAX utility rebate for cold-climate heat pump installation. Stackable with the federal programme. Amount confirmed monthly with ENMAX (310-2010).',
    rebate: '🌱 Stackable with federal grant'
  }
];
