import { Router } from 'express';
import { comparePassword, signToken } from '../lib/auth';
import { prisma } from '../lib/prisma';

export const authRouter = Router();

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const valid = await comparePassword(password, user.passwordHash);

  if (!valid) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const token = signToken({ sub: user.id, email: user.email, role: user.role });

  return res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      isActive: user.isActive,
    },
  });
});

