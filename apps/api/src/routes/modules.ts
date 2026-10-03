import { Router } from 'express';

export const moduleRouter = Router();

const navigationTree = [
  {
    id: 'executive',
    label: 'Executive Dashboard',
    icon: 'dashboard',
    children: ['Overview', 'Portfolio', 'Cash & Profit', 'Risk Monitor'],
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: 'construction',
    children: ['Portfolio', 'Project Controls', 'Schedules', 'Cost & Budget', 'Site Execution', 'Quality & HSE'],
  },
  {
    id: 'finance',
    label: 'Finance',
    icon: 'finance',
    children: ['Budget', 'Forecast', 'Treasury', 'AR/AP', 'Cash Flow', 'Margin Analysis'],
  },
  {
    id: 'accounting',
    label: 'Accounting',
    icon: 'accounting',
    children: ['General Ledger', 'Bank Reconciliation', 'VAT', 'Assets', 'Journals', 'Reports'],
  },
  {
    id: 'hr',
    label: 'HR & Payroll',
    icon: 'people',
    children: ['Employees', 'Attendance', 'Payroll', 'Leaves', 'Recruitment', 'Performance'],
  },
  {
    id: 'assets',
    label: 'Assets & Equipment',
    icon: 'equipment',
    children: ['Assets Register', 'Depreciation', 'Maintenance', 'Utilization', 'Warranty', 'Inspections'],
  },
  {
    id: 'fleet',
    label: 'Fleet Management',
    icon: 'truck',
    children: ['Vehicles', 'Fuel', 'Trips', 'Service', 'Driver Records', 'Safety'],
  },
  {
    id: 'inventory',
    label: 'Inventory',
    icon: 'inventory',
    children: ['Stock Cards', 'Materials', 'Warehouse', 'Transfers', 'Stock Counts', 'Returns'],
  },
  {
    id: 'procurement',
    label: 'Procurement',
    icon: 'procure',
    children: ['RFQ', 'POs', 'Suppliers', 'Subcontractors', 'Evaluations', 'Delivery Tracking'],
  },
  {
    id: 'crm',
    label: 'CRM',
    icon: 'crm',
    children: ['Leads', 'Clients', 'Opportunities', 'Proposal', 'Contracts', 'After Sales'],
  },
  {
    id: 'contracts',
    label: 'Contracts',
    icon: 'contract',
    children: ['Contract Register', 'Claims', 'Variation Orders', 'Claims Tracking', 'Compliance'],
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: 'doc',
    children: ['Document Center', 'Approval Matrix', 'Templates', 'Versions', 'Retention'],
  },
  {
    id: 'quality',
    label: 'Quality & Safety',
    icon: 'safety',
    children: ['QA Plans', 'Inspections', 'Safety Incidents', 'Permits', 'Training', 'HSE Reports'],
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    icon: 'repair',
    children: ['Work Orders', 'Preventive', 'Breakdowns', 'Spare Parts', 'Teams', 'Schedules'],
  },
  {
    id: 'administration',
    label: 'Administration',
    icon: 'admin',
    children: ['Companies', 'Branches', 'Users', 'Roles', 'Permissions', 'Settings'],
  },
  {
    id: 'ai',
    label: 'AI Center',
    icon: 'ai',
    children: ['Project Risk', 'Cash Forecast', 'Delay Prediction', 'Supplier Analytics', 'AI Assistant'],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
    children: ['System Config', 'Integrations', 'Audit Logs', 'Localization', 'Backups'],
  },
];

moduleRouter.get('/navigation', (_req, res) => {
  res.json({ tree: navigationTree });
});
