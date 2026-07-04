# Digital Dhiren

Premium creative agency and service portfolio website for Digital Dhiren.

## Stack

- Next.js App Router
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form + Zod
- Prisma + PostgreSQL
- NextAuth credentials login
- Resend or Nodemailer email delivery
- Vercel-ready SEO with metadata, OpenGraph, Twitter cards, sitemap, and robots

## Pages

- Home
- About
- Services
- Portfolio
- Blog
- Contact
- Book Free Consultation
- Admin Dashboard

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` and fill in:

```bash
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
ADMIN_EMAIL=
ADMIN_PASSWORD_HASH=
RESEND_API_KEY=
```

3. Generate Prisma client and run migrations:

```bash
npm run prisma:generate
npm run prisma:migrate
```

4. Start development:

```bash
npm run dev
```

## Admin Password Hash

Generate a bcrypt hash for the admin password:

```bash
node -e "const bcrypt=require('bcryptjs'); bcrypt.hash('your-password', 12).then(console.log)"
```

## Gmail Inquiry Delivery

To receive website form submissions in `digitaldhiren011@gmail.com`, create a Gmail App Password and add these values to `.env`:

```bash
GMAIL_USER="digitaldhiren011@gmail.com"
GMAIL_APP_PASSWORD="your-16-character-gmail-app-password"
EMAIL_FROM="Digital Dhiren Website <digitaldhiren011@gmail.com>"
```

Gmail App Passwords are created from your Google Account security settings after 2-step verification is enabled.

## Deployment

1. Create a Vercel project from this repository.
2. Add the environment variables from `.env.example`.
3. Connect a PostgreSQL database such as Vercel Postgres, Neon, Supabase, or Railway.
4. Run Prisma migration during setup or from your local machine.
5. Deploy.

## Contact

- Phone / WhatsApp: +977 9746600564
- Email: digitaldhiren011@gmail.com
- Location: Kupandol, Lalitpur, Kathmandu
