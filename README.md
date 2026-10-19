# Wearme

A mobile-first fashion storefront and reusable commerce platform, starting with the Nigerian market.

## Current status

**Stage: initial scaffold / not production-ready.**

Already committed on `main`:
- Next.js App Router, React, TypeScript, Tailwind CSS and ESLint configuration.
- Initial fashion storefront UI with sample product content.
- Preliminary Prisma models for categories, products and orders.
- Environment-variable example for PostgreSQL.

Not yet verified or implemented:
- A successful local production build or automated tests.
- A connected Neon PostgreSQL database or applied migrations.
- Real product catalogue, admin inventory tools or product image uploads.
- Persistent cart, customer authentication, checkout or order history.
- Paystack initialization, signed webhook verification, refunds or reconciliation.
- Production deployment, domain, monitoring and backups.

## Stack

- Next.js App Router + React + TypeScript
- Tailwind CSS
- Neon PostgreSQL + Prisma
- Cloudinary for product media (planned)
- Paystack for NGN payments (planned)

## Local setup

Requirements: Node.js 20 or newer and npm.

```bash
npm install
cp .env.example .env
npx prisma generate
npm run dev
```

Add valid Neon connection strings to `.env` before running database migrations. Do not commit real credentials.

To validate the project:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Build roadmap

1. **Stabilize the foundation:** install dependencies, run lint/typecheck/build, fix all failures and validate the Prisma schema.
2. **Database and catalogue:** Neon setup, migrations, product variants/sizes, stock tracking, categories and seed data.
3. **Shopping experience:** searchable catalogue, product detail pages, size/colour selection, persistent cart and checkout validation.
4. **Customer accounts:** secure authentication, addresses, order history and account settings.
5. **Payments and fulfilment:** Paystack server-side initialization and signature-verified webhooks, idempotent payment updates, order emails and admin-controlled fulfilment.
6. **Store administration:** protected product, inventory, order, discount and customer management.
7. **Launch readiness:** Cloudinary uploads, mobile/accessibility checks, security review, SEO, analytics, backups and deployment smoke tests.

## Security principles

- Prices, stock, discounts and order totals must be calculated and validated on the server.
- A browser redirect is not proof of payment. Confirm payment through Paystack's verified server-side flow before marking an order paid.
- Never expose database credentials, payment secret keys or Cloudinary secrets in client-side code.
- Keep payment and order updates idempotent; record enough audit information to reconcile failures safely.
