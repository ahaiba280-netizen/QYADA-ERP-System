import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';

// Simple RBAC check middleware
export function requireRole(roleName: string) {
  return async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user) return res.status(401).json({ message: 'Unauthorized' });

    const roles = await prisma.userRole.findMany({ where: { userId: user.id }, include: { role: true } });
    const has = roles.some((r) => r.role.name === roleName);
    if (!has) return res.status(403).json({ message: 'Forbidden - missing role' });
    next();
  };
}
