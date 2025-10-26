# Modern Dashboard Template

A **production-ready admin dashboard** built with **Next.js 15**, **Tailwind CSS**, **shadcn/ui**, and **Prisma ORM**.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)
![Prisma](https://img.shields.io/badge/Prisma-latest-2d3748)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-000000)

## ✨ Features

- 🔐 **Authentication** - JWT-based auth with bcrypt password hashing
- 📊 **Dashboard Pages** - Overview, Users, Reports, and Settings
- 🎨 **Modern UI** - Clean interface with shadcn/ui components
- 🌓 **Dark Mode** - Full dark/light theme support with next-themes
- 📱 **Responsive** - Mobile-first design, works on all devices
- 🎭 **Animations** - Smooth transitions with Framer Motion
- 📈 **Charts** - Data visualization with Recharts
- ✅ **Form Validation** - React Hook Form + Zod validation
- 🗃️ **Database** - Prisma ORM with SQLite (PostgreSQL ready)
- 🔒 **Protected Routes** - Middleware-based route protection
- 🚀 **Production Ready** - Error handling, loading states, and SEO

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** JavaScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Database:** Prisma ORM (SQLite/PostgreSQL)
- **Authentication:** Custom JWT auth with bcryptjs
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts
- **Icons:** Lucide React
- **Animations:** Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment variables are already configured in `.env`**

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### First Time Usage

1. Go to [http://localhost:3000](http://localhost:3000)
2. Click "Create Account" to register
3. Fill in your name, email, and password
4. You'll be automatically logged in to the dashboard

## 📁 Project Structure

```
├── app/
│   ├── api/              # API routes (auth, users, reports)
│   ├── dashboard/        # Dashboard pages
│   ├── login/            # Login page
│   ├── register/         # Register page
│   └── ...               # Root pages and layouts
├── components/
│   ├── ui/               # shadcn/ui components
│   └── layout/           # Layout components
├── lib/
│   ├── auth.js           # Authentication utilities
│   ├── prisma.js         # Prisma client
│   └── utils.js          # Utility functions
├── prisma/
│   └── schema.prisma     # Database schema
└── middleware.js         # Route protection
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open database GUI

## 🗄️ Database

The project uses SQLite by default. To switch to PostgreSQL:

1. Update `DATABASE_URL` in `.env`:
   ```
   DATABASE_URL="postgresql://user:password@host:port/database"
   ```

2. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

3. Run migrations:
   ```bash
   npx prisma migrate dev
   ```

## 🔐 Security

- JWT authentication with HTTP-only cookies
- Bcrypt password hashing
- Protected API routes
- Zod validation
- Middleware-based route protection

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Prisma](https://www.prisma.io/docs)

## 📄 License

MIT License - Feel free to use this template for your projects!

---

Built with ❤️ using GitHub Copilot
