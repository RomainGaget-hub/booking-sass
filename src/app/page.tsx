import Link from 'next/link';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  ThemeToggle,
} from '@/components/ui';
import {
  CalendarIcon,
  UsersIcon,
  SparklesIcon,
  ArrowRightIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Bookwise</div>
        <ThemeToggle />
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Welcome to <span className="text-primary">Bookwise</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              AI-Powered SaaS Booking Platform for Beauty & Wellness,
              Professional Services, and Events & Activities
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Start Booking
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8"
              asChild
            >
              <Link href="/demo">
                <SparklesIcon className="mr-2 h-5 w-5" />
                View UI Components Demo
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Additional Demo Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/layout-demo">🎨 MainLayout Component Demo</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto mt-20 grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                Smart Scheduling
              </CardTitle>
              <CardDescription>
                AI-powered scheduling engine that optimizes appointments
                and reduces no-shows by 60%
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Intelligent time slot recommendations</li>
                <li>• Automatic conflict resolution</li>
                <li>• Real-time availability updates</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UsersIcon className="h-5 w-5 text-primary" />
                Multi-User Management
              </CardTitle>
              <CardDescription>
                Comprehensive staff and customer management with role-based
                access control
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Individual staff calendars</li>
                <li>• Customer preference tracking</li>
                <li>• Advanced permissions system</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SparklesIcon className="h-5 w-5 text-primary" />
                Beautiful UI Components
              </CardTitle>
              <CardDescription>
                Modern, accessible components built with shadcn/ui and
                Tailwind CSS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• WCAG 2.1 AA compliant</li>
                <li>• Mobile-first responsive design</li>
                <li>• Dark/light theme support</li>
              </ul>
              <div className="mt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/demo">
                    Explore Components
                    <ArrowRightIcon className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-8">
            Trusted by Businesses Worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary">60%</div>
              <div className="text-sm text-muted-foreground">
                Reduction in No-Shows
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">35%</div>
              <div className="text-sm text-muted-foreground">
                Increase in Staff Utilization
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">
                Automated Payments
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">
                &lt;30s
              </div>
              <div className="text-sm text-muted-foreground">
                Booking Completion Time
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Built with{' '}
              <Link href="/demo" className="text-primary hover:underline">
                shadcn/ui
              </Link>
              , Next.js 15, and Tailwind CSS
            </p>
            <p className="mt-2">
              © 2024 Bookwise. Revolutionizing appointment scheduling with
              AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
