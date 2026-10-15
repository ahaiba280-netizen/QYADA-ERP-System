import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware } from '../middleware/auth';

export const procurementRouter = Router();
procurementRouter.use(authMiddleware);

procurementRouter.post('/po', async (req, res) => {
  const payload = req.body;
  const po = await prisma.purchaseOrder.create({ data: { ...payload, companyId: req.user.companyId } });
  res.json(po);
});

procurementRouter.get('/po', async (req, res) => {
  const list = await prisma.purchaseOrder.findMany({ where: { companyId: req.user.companyId }, include: { vendor: true } });
  res.json(list);
});
