import { Router } from 'express';

export const projectRouter = Router();

projectRouter.get('/', (_req, res) => {
  res.json([
    {
      id: 'PRJ-001',
      name: 'Burj Heights Tower',
      company: 'QYADA Contracting',
      branch: 'Dubai',
      status: 'On Track',
      progress: 72,
      budget: 24500000,
      cost: 19800000,
      margin: 19.6,
    },
    {
      id: 'PRJ-002',
      name: 'Ras Al Khaimah Industrial Park',
      company: 'QYADA Development',
      branch: 'RAK',
      status: 'At Risk',
      progress: 58,
      budget: 33000000,
      cost: 28600000,
      margin: 13.3,
    },
    {
      id: 'PRJ-003',
      name: 'Abu Dhabi Logistics Center',
      company: 'QYADA Infra',
      branch: 'Abu Dhabi',
      status: 'Delayed',
      progress: 41,
      budget: 18000000,
      cost: 16740000,
      margin: 7.0,
    },
  ]);
});
