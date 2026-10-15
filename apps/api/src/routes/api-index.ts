import { Router } from 'express';
import { approvalRouter } from './approvals';
import { financeRouter } from './finance';
import { procurementRouter } from './procurement';
import { inventoryRouter } from './inventory';
import { hrRouter } from './hr';
import { assetsRouter } from './assets';

export const apiRouter = Router();

apiRouter.use('/approvals', approvalRouter);
apiRouter.use('/finance', financeRouter);
apiRouter.use('/procurement', procurementRouter);
apiRouter.use('/inventory', inventoryRouter);
apiRouter.use('/hr', hrRouter);
apiRouter.use('/assets', assetsRouter);
