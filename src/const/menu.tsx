import { ReactNode } from 'react';
import { DashboardIcon, ProceduresIcon, ProductIcon, SettingIcon, UserIcon } from 'assets/index';

export type MenuItem = {
  label: string;
  link: string;
  icon?: ReactNode;
  activeUrls?: string[];
};

export const ROUTE_MENU: MenuItem[] = [
  {
    label: 'How It Works',
    link: '/#how-it-works',
    activeUrls: ['/#how-it-works']
  },
  {
    label: '2026 Rebates',
    link: '/#rebate',
    activeUrls: ['/#rebate']
  },
  {
    label: 'Vendors',
    link: '/marketplace',
    activeUrls: ['/marketplace']
  },
  {
    label: 'Impact',
    link: '/impact',
    activeUrls: ['/impact']
  }
];

export const TOGGLE_MENU: MenuItem[] = [
  { label: 'How It Works', link: '/#how-it-works' },
  { label: '2026 Rebates', link: '/#rebate' },
  { label: 'Vendor Directory', link: '/marketplace' },
  { label: 'Vendor Login', link: '/vendor-login' },
  { label: 'Find My Rebates →', link: '/quiz' }
];
