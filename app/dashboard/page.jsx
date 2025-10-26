import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/prisma';
import { Users, FileText, TrendingUp, Activity } from 'lucide-react';

export const metadata = {
  title: 'Overview - Dashboard',
  description: 'Dashboard overview page',
};

async function getStats() {
  const [usersCount, reportsCount] = await Promise.all([
    prisma.user.count(),
    prisma.report.count(),
  ]);

  return {
    usersCount,
    reportsCount,
  };
}

export default async function DashboardPage() {
  const stats = await getStats();

  const statsData = [
    {
      title: 'Total Users',
      value: stats.usersCount,
      icon: Users,
      description: 'Registered users',
    },
    {
      title: 'Total Reports',
      value: stats.reportsCount,
      icon: FileText,
      description: 'Generated reports',
    },
    {
      title: 'Growth',
      value: '+12.5%',
      icon: TrendingUp,
      description: 'From last month',
    },
    {
      title: 'Active Sessions',
      value: '24',
      icon: Activity,
      description: 'Currently online',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-primary" />
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      New report generated
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item} hour{item > 1 ? 's' : ''} ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">User Growth</span>
                <span className="text-sm font-medium">+15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Report Completion</span>
                <span className="text-sm font-medium">87%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">System Health</span>
                <span className="text-sm font-medium text-green-600">Excellent</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
