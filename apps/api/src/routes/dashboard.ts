import { Router } from 'express';

export const dashboardRouter = Router();

dashboardRouter.get('/summary', (_req, res) => {
  res.json({
    company: 'QYADA Group',
    currency: 'AED',
    revenue: 58420000,
    profit: 10860000,
    cash: 14690000,
    receivables: 4213000,
    payables: 2987000,
    activeProjects: 124,
    delayedProjects: 17,
    atRiskProjects: 8,
    approvalsPending: 42,
    alerts: [
      'Budget variance detected in Project WEB-014',
      'Supplier delay risk in steel supply chain',
      'Cash forecast below threshold in Q4',
      'RFIs pending approval in Dubai branch',
    ],
    trend: {
      revenue: 18.4,
      profit: 12.1,
      cash: 9.3,
      receivables: -2.8,
    },
  });
});
