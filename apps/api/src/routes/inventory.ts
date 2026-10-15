import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware } from '../middleware/auth';

export const inventoryRouter = Router();
inventoryRouter.use(authMiddleware);

inventoryRouter.get('/warehouses', async (req, res) => {
  const wh = await prisma.warehouse.findMany({ where: { companyId: req.user.companyId } });
  res.json(wh);
});

inventoryRouter.post('/stock-move', async (req, res) => {
  const payload = req.body;
  const mv = await prisma.stockMovement.create({ data: { ...payload, companyId: req.user.companyId } });
  res.json(mv);
});
