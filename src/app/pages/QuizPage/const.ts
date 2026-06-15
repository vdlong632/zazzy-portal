const intake = (label: string) => ({ label, value: label });

export const STEP_FORM = [
  { label: 'What type of building do you own?', value: 1 },
  { label: 'When was your building constructed?', value: 2 },
  { label: 'What is your primary heating system?', value: 3 },
  { label: 'Average monthly energy bill?', value: 4 },
  { label: 'Which upgrades interest you?', value: 5 },
  { label: 'Building size?', value: 6 }
];

export const STEP_FORM_DESC = [
  { label: 'Helps us target rebates specific to your property type.', value: 1 },
  {
    label:
      'Older buildings typically qualify for the largest rebates — especially pre-1990 Calgary communities.',
    value: 2
  },
  {
    label: 'Most Calgary buildings run on natural gas — switching carries major 2026 rebates.',
    value: 3
  },
  {
    label:
      'Combined ENMAX electricity and ATCO gas. Used to calculate your potential annual savings.',
    value: 4
  },
  {
    label: 'Select all that apply — we prioritise by ROI and rebate availability for your home.',
    value: 5
  },
  {
    label: 'Used to calculate insulation costs and savings accurately for your property.',
    value: 6
  }
];

export const OPTION_BUILDING_TYPE = [
  { id: 'Detached House', icon: '🏠', title: 'Detached House', desc: 'Single-family standalone' },
  { id: 'Semi-Detached', icon: '🏘️', title: 'Semi-Detached', desc: 'Shares one wall' },
  { id: 'Townhouse', icon: '🏙️', title: 'Townhouse', desc: 'Row or end unit' },
  { id: 'Condo / Apartment', icon: '🏢', title: 'Condo / Apartment', desc: 'Strata unit' },
  {
    id: 'Commercial Building',
    icon: '🏬',
    title: 'Commercial Building',
    desc: 'Office, retail, industrial'
  },
  { id: 'Multi-Family', icon: '🏗️', title: 'Multi-Family', desc: 'Duplex, triplex, 4-plex' }
];

export const OPTION_BUILDING_CONTRUCTED = [
  { id: 'Before 1980', icon: '🧱', title: 'Before 1980', desc: 'Highest upgrade potential' },
  { id: '1980 – 2000', icon: '🔩', title: '1980 – 2000', desc: 'Common rebate sweet spot' },
  { id: '2000 – 2015', icon: '🏗️', title: '2000 – 2015', desc: 'Moderate options' },
  { id: 'After 2015', icon: '✨', title: 'After 2015', desc: 'Newer build' }
];

export const OPTION_HEATING_SYSTEM = [
  {
    id: 'Natural Gas Furnace',
    icon: '🔥',
    title: 'Natural Gas Furnace',
    desc: 'Most common in Calgary'
  },
  { id: 'Heat Pump', icon: '🌬️', title: 'Heat Pump', desc: 'Already upgraded' },
  {
    id: 'Electric Baseboard',
    icon: '⚡',
    title: 'Electric Baseboard',
    desc: 'Older condo or home'
  },
  { id: 'Oil or Boiler', icon: '🛢️', title: 'Oil or Boiler', desc: 'Qualifies for maximum rebate' }
];

export const OTPION_UPGRADES_INTEREST = [
  {
    id: 'Cold-Climate Heat Pump',
    icon: '🌡️',
    title: 'Cold-Climate Heat Pump',
    desc: 'Up to $10,000 federal + ENMAX rebate — designed for Calgary winters'
  },
  {
    id: 'Insulation and Air Sealing',
    icon: '🧊',
    title: 'Insulation and Air Sealing',
    desc: 'ENMAX/ATCO rebates + CEIP financing when open'
  },
  {
    id: 'Solar and Battery Storage',
    icon: '☀️',
    title: 'Solar and Battery Storage',
    desc: '30% federal Clean Energy ITC + ENMAX net metering'
  },
  {
    id: 'Windows and Doors',
    icon: '🪟',
    title: 'Windows and Doors',
    desc: 'ENERGY STAR rated for Alberta climate zones'
  },
  {
    id: 'Heat Pump Water Heater',
    icon: '🚿',
    title: 'Heat Pump Water Heater',
    desc: 'Up to $1,500 ENMAX/ATCO rebate'
  }
];

export const OPTION_BUILDING_SIZE = [
  { id: 'Under 1,200 sq ft', icon: '🏡', title: 'Under 1,200 sq ft' },
  { id: '1,200 – 2,000 sq ft', icon: '🏠', title: '1,200 – 2,000 sq ft' },
  { id: '2,000 – 3,000 sq ft', icon: '🏘️', title: '2,000 – 3,000 sq ft' },
  { id: 'Over 3,000 sq ft', icon: '🏰', title: 'Over 3,000 sq ft' }
];
