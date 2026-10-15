import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware } from '../middleware/auth';

export const assetsRouter = Router();
assetsRouter.use(authMiddleware);

assetsRouter.get('/equipment', async (req, res) => {
  const eq = await prisma.equipment.findMany({ where: { companyId: req.user.companyId } });
  res.json(eq);
});
