import { NavItem } from '@/types';

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'Data Ingestion',
    href: '/dashboard/data-ingestion',
    icon: 'database'
  },
  {
    title: 'Data Transformation',
    href: '/dashboard/data-transformation',
    icon: 'fileUp'
  },
  {
    title: 'Data Visualization',
    href: '/dashboard/data-visualization',
    icon: 'barChart'
  },
  {
    title: 'Pipeline Management',
    href: '/dashboard/pipeline-management',
    icon: 'settings'
  },
  {
    title: 'Data Security',
    href: '/dashboard/data-security',
    icon: 'shield'
  },
  {
    title: 'Monitoring & Alerts',
    href: '/dashboard/monitoring-alerts',
    icon: 'alertCircle'
  }
];
