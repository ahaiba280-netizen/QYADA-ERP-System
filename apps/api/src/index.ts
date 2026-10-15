import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authRouter } from './routes/auth';
import { dashboardRouter } from './routes/dashboard';
import { projectRouter } from './routes/projects';
import { moduleRouter } from './routes/modules';
import { apiRouter } from './routes/api-index';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    app: process.env.APP_NAME || 'QYADA',
    timestamp: new Date().toISOString(),
    environment: process.env.APP_ENV || 'development',
  });
});

// public auth and modules
app.use('/api/auth', authRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/projects', projectRouter);
app.use('/api/modules', moduleRouter);

// secured enterprise APIs
app.use('/api/v1', apiRouter);

app.listen(port, () => {
  console.log(`QYADA API running on http://localhost:${port}`);
});
