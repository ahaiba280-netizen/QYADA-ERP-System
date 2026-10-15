import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

const prisma = new PrismaClient();

async function seed() {
  console.log('Seeding database...');

  const company = await prisma.company.upsert({
    where: { code: 'QYADA-GROUP' },
    update: {},
    create: {
      name: 'QYADA Group',
      code: 'QYADA-GROUP',
      country: 'UAE',
      currency: 'AED',
    },
  });

  const branch = await prisma.branch.upsert({
    where: { code: 'QYADA-DXB' },
    update: {},
    create: {
      name: 'Dubai HQ',
      code: 'QYADA-DXB',
      companyId: company.id,
      city: 'Dubai',
    },
  });

  const adminPass = await bcrypt.hash('Admin@1234', 10);

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@qyada.local' },
    update: {},
    create: {
      email: 'admin@qyada.local',
      passwordHash: adminPass,
      firstName: 'Platform',
      lastName: 'Admin',
      phone: '+971500000000',
      companyId: company.id,
      branchId: branch.id,
      isActive: true,
    },
  });

  const roleAdmin = await prisma.role.upsert({
    where: { name: 'ADMIN' },
    update: {},
    create: { name: 'ADMIN', description: 'Enterprise administrator with full access' },
  });

  const userRole = await prisma.userRole.create({
    data: { userId: adminUser.id, roleId: roleAdmin.id, scope: `company:${company.id}` },
  });

  console.log('Seed completed');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
