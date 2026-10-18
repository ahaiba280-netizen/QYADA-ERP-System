# QYADA ERD (High-level)

This file documents the high-level Entity Relationship Diagram (ERD) for the QYADA Construction Enterprise Operating System. The diagram below is in Mermaid syntax and captures the key entities and relationships used during the first migration phase.

```mermaid
erDiagram
  COMPANY ||--o{ BRANCH : has
  COMPANY ||--o{ USER : employs
  COMPANY ||--o{ PROJECT : owns
  PROJECT ||--o{ BOQITEM : contains
  PROJECT ||--o{ WORKORDER : has
  PROJECT ||--o{ INVOICE : issues
  PROJECT ||--o{ APPROVAL : uses
  COMPANY ||--o{ VENDOR : supplies
  VENDOR ||--o{ PURCHASEORDER : issues
  PURCHASEORDER ||--o{ POITEM : contains
  PURCHASEORDER ||--o{ GRN : receives
  COMPANY ||--o{ WAREHOUSE : stores
  WAREHOUSE ||--o{ STOCKMOVEMENT : records
  EQUIPMENT ||--o{ MAINTENANCE : schedules
  EMPLOYEE ||--o{ ATTENDANCE : records
  EMPLOYEE ||--o{ PAYROLL : receives
  USER ||--o{ USERROLE : assigned
  ROLE ||--o{ ROLEPERMISSION : grants
  APPROVAL ||--o{ APPROVALSTEP : steps
  AUDITLOG }o--|| USER : performed_by

  COMPANY {
    String id PK
    String name
    String code
    String country
    String currency
  }
  BRANCH {
    String id PK
    String companyId FK
    String name
    String code
  }
  USER {
    String id PK
    String email
    String passwordHash
    String firstName
    String lastName
  }
  PROJECT {
    String id PK
    String companyId FK
    String name
    String code
    Float budget
    Float contractValue
  }
  BOQITEM { String id PK String projectId FK String description Float qty Float unitRate }
  PURCHASEORDER { String id PK String companyId FK String vendorId FK String number Float total }
  POITEM { String id PK String poId FK String description Float qty Float unitPrice }
  WAREHOUSE { String id PK String companyId FK String name }
  STOCKMOVEMENT { String id PK String companyId FK String type }
  EQUIPMENT { String id PK String companyId FK String tag String status }
  EMPLOYEE { String id PK String companyId FK String employeeNo String firstName String lastName }
  ATTENDANCE { String id PK String employeeId FK DateTime date DateTime? checkIn DateTime? checkOut }
  ROLE { String id PK String name }
  PERMISSION { String id PK String name }
  AUDITLOG { String id PK String userId FK String entity String action DateTime createdAt }

```

Notes:
- This diagram intentionally focuses on the primary entities used for the initial ERD/migration phase.
- Additional specialized tables (LedgerAccount, JournalEntry, JournalLine, Invoice, GRN, Maintenance, Workflow, IntegrationLog, etc.) exist in prisma/schema.prisma and will be realized by running prisma db push / migrations.

Recommended next step to apply the schema locally:
1. Start Postgres (docker compose up -d)
2. Install dependencies (npm install)
3. From apps/api: run `npx prisma generate` then `npx prisma db push --accept-data-loss` (or use migrate dev in development)
4. Run seed: `npm run db:seed` from apps/api

