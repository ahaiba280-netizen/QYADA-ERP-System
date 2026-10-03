import { Router } from 'express';

export const rootRouter = Router();

rootRouter.get('/', (_req, res) => {
  res.json({ app: 'QYADA', message: 'Enterprise ERP system API is running.' });
});
