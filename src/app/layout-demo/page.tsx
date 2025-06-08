import { MainLayout } from '@/components/layout/MainLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { CalendarIcon, UsersIcon, BarChart3Icon } from 'lucide-react';

export default function LayoutDemoPage() {
  return (
    <MainLayout>
      <div id="main-content" className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            MainLayout Component Demo
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the responsive navigation with sticky header, dark
            mode toggle, and mobile drawer menu. Try resizing your browser
            or switching themes!
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                Responsive Design
              </CardTitle>
              <CardDescription>
                Adapts seamlessly from mobile to desktop
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Mobile-first approach</li>
                <li>• Collapsible navigation</li>
                <li>• Touch-friendly interactions</li>
                <li>• Accessible on all devices</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UsersIcon className="h-5 w-5 text-primary" />
                Accessibility Features
              </CardTitle>
              <CardDescription>
                Built with WCAG 2.1 AA compliance in mind
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Keyboard navigation support</li>
                <li>• Screen reader optimized</li>
                <li>• Focus management</li>
                <li>• ARIA labels and landmarks</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3Icon className="h-5 w-5 text-primary" />
                Modern UX Patterns
              </CardTitle>
              <CardDescription>
                Contemporary design patterns and interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Sticky navigation header</li>
                <li>• Smooth transitions</li>
                <li>• Backdrop blur effects</li>
                <li>• Dark/light theme support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Test Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Navigation Testing</CardTitle>
              <CardDescription>
                Test the navigation functionality with these sample
                sections
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold">Desktop Navigation</h3>
                  <p className="text-sm text-muted-foreground">
                    On larger screens, use the horizontal navigation bar to
                    switch between sections. Notice how the active state is
                    maintained and focus rings are visible.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Mobile Navigation</h3>
                  <p className="text-sm text-muted-foreground">
                    On smaller screens, use the hamburger menu button to
                    access the slide-out drawer. The navigation closes
                    automatically when you select an item.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
                <div className="grid gap-2 md:grid-cols-2 text-sm text-muted-foreground">
                  <div>
                    <strong>Tab:</strong> Navigate through interactive
                    elements
                  </div>
                  <div>
                    <strong>Enter/Space:</strong> Activate buttons and
                    links
                  </div>
                  <div>
                    <strong>Escape:</strong> Close mobile menu when open
                  </div>
                  <div>
                    <strong>Arrow Keys:</strong> Navigate within menus
                    (when applicable)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Theme Demo Section */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Theme Toggle Demo</CardTitle>
              <CardDescription>
                Test the dark mode toggle in the navigation bar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 rounded-lg bg-background border">
                  <h4 className="font-semibold mb-2">Light Theme</h4>
                  <p className="text-sm text-muted-foreground">
                    Clean, bright interface perfect for daytime use
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <h4 className="font-semibold mb-2">Dark Theme</h4>
                  <p className="text-sm text-muted-foreground">
                    Easy on the eyes for extended use or low-light
                    environments
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-accent">
                  <h4 className="font-semibold mb-2">System Theme</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatically matches your device&apos;s theme
                    preference
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
