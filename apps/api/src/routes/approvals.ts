import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware } from '../middleware/auth';

export const approvalRouter = Router();
approvalRouter.use(authMiddleware);

approvalRouter.post('/', async (req, res) => {
  const payload = req.body;
  const approval = await prisma.approval.create({ data: { ...payload, projectId: payload.projectId || null } });
  res.json(approval);
});

approvalRouter.get('/pending', async (req, res) => {
  const list = await prisma.approval.findMany({ where: { status: 'PENDING' } });
  res.json(list);
});
