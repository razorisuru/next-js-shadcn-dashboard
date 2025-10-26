import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, LayoutDashboard } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-background via-muted/20 to-background">
      <main className="max-w-4xl mx-auto px-4 py-16 text-center space-y-8">
        <div className="space-y-4">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
              <LayoutDashboard className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Modern Dashboard Template
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A production-ready admin dashboard built with Next.js 15, Tailwind CSS, shadcn/ui, and Prisma ORM.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link href="/login">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/register">
            <Button size="lg" variant="outline">
              Create Account
            </Button>
          </Link>
        </div>

        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2">🔐 Authentication</h3>
            <p className="text-sm text-muted-foreground">
              Secure JWT-based authentication with bcrypt password hashing
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2">📊 Dashboard</h3>
            <p className="text-sm text-muted-foreground">
              Beautiful and responsive dashboard with charts and data tables
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2">🎨 Modern UI</h3>
            <p className="text-sm text-muted-foreground">
              Built with shadcn/ui components and Tailwind CSS
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
