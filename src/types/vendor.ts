import { Vendor } from 'services/vendor';

export const MOCK_VENDORS: Vendor[] = [
  {
    id: 1,
    logo: 'PA',
    name: 'Peak Aire Systems',
    category: 'Heat Pumps · HVAC',
    area: 'NW and SW Calgary',
    responseTime: '1.5 hrs',
    rating: {
      stars: 5,
      average: 4.9,
      totalReviews: 214
    },
    badges: ['NRCan ✓', 'ENMAX Partner'],
    certifications: ['NRCan', 'ENMAX Partner', 'CMHC']
  },
  {
    id: 2,
    logo: 'CE',
    name: 'ClearHome Energy',
    category: 'Heat Pumps · Insulation · Solar',
    area: 'City-wide Calgary',
    responseTime: '2 hrs',
    rating: {
      stars: 5,
      average: 4.8,
      totalReviews: 187
    },
    badges: ['NRCan ✓', 'CMHC Approved'],
    certifications: ['NRCan', 'CMHC', 'EnerGuide Auditor']
  },
  {
    id: 3,
    logo: 'AG',
    name: 'Alberta Green HVAC',
    category: 'Heat Pumps · HVAC',
    area: 'City-wide Calgary',
    responseTime: '3 hrs',
    rating: {
      stars: 5,
      average: 4.7,
      totalReviews: 156
    },
    badges: ['NRCan ✓', 'ATCO Partner'],
    certifications: ['NRCan', 'ATCO Partner', 'Rebate Expert']
  },
  {
    id: 4,
    logo: 'SS',
    name: 'Sunny Side Solar',
    category: 'Solar · Battery Storage',
    area: 'All Calgary',
    responseTime: '2.5 hrs',
    rating: {
      stars: 5,
      average: 4.9,
      totalReviews: 201
    },
    badges: ['Solar Partner', 'ITC Specialist'],
    certifications: ['Solar PV', 'Battery Storage', 'ITC Specialist']
  }
];
