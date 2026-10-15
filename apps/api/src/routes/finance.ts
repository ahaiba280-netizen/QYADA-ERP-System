import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware } from '../middleware/auth';

export const financeRouter = Router();

financeRouter.use(authMiddleware);

financeRouter.get('/ledger', async (req, res) => {
  const accounts = await prisma.ledgerAccount.findMany({ where: { companyId: req.user.companyId } });
  res.json(accounts);
});

financeRouter.post('/journal', async (req, res) => {
  const data = req.body;
  // Basic validation omitted for brevity
  const entry = await prisma.journalEntry.create({ data: { ...data, companyId: req.user.companyId } });
  res.json(entry);
});
