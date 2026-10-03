import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const JWT_SECRET = process.env.JWT_SECRET || 'qyada-dev-secret';

export function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function signToken(payload: Record<string, unknown>) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '8h' });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as { sub: string; email: string; role: string };
}
