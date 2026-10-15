import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware } from '../middleware/auth';

export const hrRouter = Router();
hrRouter.use(authMiddleware);

hrRouter.get('/employees', async (req, res) => {
  const emps = await prisma.employee.findMany({ where: { companyId: req.user.companyId } });
  res.json(emps);
});
