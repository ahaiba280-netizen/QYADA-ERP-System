# QYADA - Construction Enterprise Operating System

QYADA is a multi-company, multi-branch, multi-project enterprise platform designed for large construction groups in the UAE. It brings together executive control, project controls, cost management, procurement, contracts, HR, finance, fleet, assets, documents, quality, safety, and AI-driven operational insight into one centralized operating system.

## Product overview

QYADA (قيادة) is built to act as the single source of truth for the entire group:

- Companies and subsidiaries
- Branches and operations hubs
- Projects and sites
- Plants and factories
- Warehouses and inventory
- Fleet and equipment
- Suppliers and subcontractors
- Clients and contracts
- Finance, cost control, and cash flow
- Human resources and payroll
- Quality, HSE, and maintenance
- Documents, workflows, approvals, audits
- AI-powered early-warning analytics

## Core architecture

This repository contains a production-ready foundation for the platform, structured as a monorepo:

- `apps/api` - enterprise backend with TypeScript, Express, Prisma, PostgreSQL, JWT auth, RBAC, and business APIs
- `apps/web` - premium executive dashboard with dark luxury design and expandable navigation tree
- `docker-compose.yml` - PostgreSQL environment for local and staging development

## Core enterprise capabilities

### Multi-company and multi-branch enterprise model

- Company master records
- Branch hierarchy
- Project portfolio by company and branch
- Cost center and work breakdown structure
- Localized currency and tax support
- UAE VAT-ready financial rules

### Governance and controls

- Role-based access control
- Project/branch/company permissions
- Approval workflow engine
- Audit trail and immutable event logs
- Digital signatures and approval records
- Document versioning and attachment control

### Project control and execution

- Bid to handover lifecycle
- BOQ and estimation tracking
- Contracts and change orders
- Procurement and RFQ flows
- Site execution, daily reports, and quality checks
- Progress measurement and earned value tracking
- Delays, risk, and variation analysis

### Financial management

- Budget, commitments, and actuals
- Forecast and cash flow
- Invoices, payments, and collections
- Margin and profitability by project and company
- AP/AR controls and approval gates

### Operations and resources

- Crew and labor productivity
- Equipment and fleet monitoring
- Warehouse stock and material movement
- Maintenance plans and work orders
- Safety incidents and HSE compliance

### Business intelligence and AI

- Executive dashboards
- Department dashboards
- Early-warning alerts for delay, budget overrun, or cash stress
- Supplier and subcontractor risk intelligence
- AI-assisted summaries and recommendations

## Navigation tree included in the platform

The web application includes the requested enterprise navigation tree with expandable/collapsible sections for all core departments, including:

- Executive Dashboard
- Projects
- Finance
- Accounting
- HR & Payroll
- Assets & Equipment
- Fleet Management
- Inventory
- Procurement
- CRM
- Contracts
- Documents
- Quality & Safety
- Maintenance
- Administration
- AI Center
- Settings

## Startup

1. Copy `.env.example` to `.env` and adjust values.
2. Start PostgreSQL via Docker:
   ```bash
   docker compose up -d
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Generate Prisma client:
   ```bash
   npm run db:generate
   ```
5. Push schema to Postgres:
   ```bash
   npm run db:push
   ```
6. Start the app in development mode:
   ```bash
   npm run dev
   ```

## Environment

- Frontend: http://localhost:5173
- API: http://localhost:4000

## Notes

This is the enterprise foundation and operational framework. The repository is intentionally designed to scale toward a complete construction ERP, with architecture, data model, permissions, workflow patterns, and premium dashboard styling matching the requested luxury enterprise standard.

The project is aligned to the quality levels of SAP, Oracle, Microsoft Dynamics, Primavera Unifier, Procore, ACC, and other enterprise construction suites.

## License

This repository is intended for internal enterprise product development and platform prototyping.
