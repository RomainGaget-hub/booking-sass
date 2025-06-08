'use client';

import React from 'react';
import {
  Button,
  Input,
  Label,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  Alert,
  AlertTitle,
  AlertDescription,
} from './index';
import {
  CalendarIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  MoreVerticalIcon,
} from 'lucide-react';

/**
 * Demo component showcasing all shadcn/ui components
 * This component demonstrates proper usage, accessibility features, and responsive design
 */
export function ComponentDemo() {
  const [inputValue, setInputValue] = React.useState('');
  const [showAlert, setShowAlert] = React.useState(false);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Shadcn/UI Components Demo
          </h1>
          <p className="text-muted-foreground">
            Showcasing accessible, responsive components for Bookwise
          </p>
        </div>

        {/* Button Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Button Component</CardTitle>
            <CardDescription>
              Various button styles and sizes with accessibility features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Button Variants */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Variants</h4>
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            {/* Button Sizes */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Sizes</h4>
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <CalendarIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Button States */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">States</h4>
              <div className="flex flex-wrap gap-2">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button className="opacity-50 cursor-not-allowed">
                  Loading...
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Components */}
        <Card>
          <CardHeader>
            <CardTitle>Form Components</CardTitle>
            <CardDescription>
              Input fields and labels with validation states
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Form */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Error State */}
            <div className="space-y-2">
              <Label htmlFor="error-input">Input with Error</Label>
              <Input
                id="error-input"
                type="text"
                placeholder="This field has an error"
                aria-invalid="true"
                className="border-destructive focus-visible:ring-destructive/20"
              />
              <p className="text-sm text-destructive">
                This field is required
              </p>
            </div>

            {/* File Input */}
            <div className="space-y-2">
              <Label htmlFor="file">Upload File</Label>
              <Input id="file" type="file" accept="image/*" />
            </div>
          </CardContent>
        </Card>

        {/* Card Variations */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Booking Card Example */}
          <Card>
            <CardHeader>
              <CardTitle>Hair Cut & Style</CardTitle>
              <CardDescription>45 minutes • $85.00</CardDescription>
              <CardAction>
                <Button variant="ghost" size="icon">
                  <MoreVerticalIcon className="h-4 w-4" />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Thursday, March 15 at 2:00 PM
                </p>
                <p className="text-sm font-medium">with Sarah Johnson</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="h-3 w-3" />
                  Salon Downtown
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                Reschedule
              </Button>
              <Button size="sm">Confirm</Button>
            </CardFooter>
          </Card>

          {/* Stats Card Example */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Bookings</CardTitle>
              <CardDescription>Your booking statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Total Bookings
                  </span>
                  <span className="text-2xl font-bold">127</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Revenue
                  </span>
                  <span className="text-2xl font-bold">$3,420</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    No-shows
                  </span>
                  <span className="text-lg font-semibold text-destructive">
                    8
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alert Components */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Alert Components</h3>

          {/* Success Alert */}
          <Alert>
            <CheckCircleIcon className="h-4 w-4" />
            <AlertTitle>Booking Confirmed!</AlertTitle>
            <AlertDescription>
              Your appointment has been scheduled for March 15 at 2:00 PM.
              You&apos;ll receive a confirmation email shortly.
            </AlertDescription>
          </Alert>

          {/* Error Alert */}
          <Alert variant="destructive">
            <AlertCircleIcon className="h-4 w-4" />
            <AlertTitle>Booking Failed</AlertTitle>
            <AlertDescription>
              This time slot is no longer available. Please select a
              different time or contact us for assistance.
            </AlertDescription>
          </Alert>

          {/* Interactive Alert */}
          <div className="space-y-2">
            <Button
              onClick={() => setShowAlert(!showAlert)}
              variant="outline"
            >
              Toggle Alert
            </Button>
            {showAlert && (
              <Alert>
                <AlertTitle>Dynamic Alert</AlertTitle>
                <AlertDescription>
                  This alert was triggered by user interaction and
                  demonstrates conditional rendering.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>

        {/* Responsive Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Responsive Design</CardTitle>
            <CardDescription>
              Components adapt to different screen sizes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Button className="w-full">Mobile First</Button>
              <Button className="w-full" variant="outline">
                Responsive
              </Button>
              <Button className="w-full" variant="secondary">
                Design
              </Button>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>
                Resize your browser window to see how components adapt to
                different screen sizes. All components follow mobile-first
                responsive design principles.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Accessibility Features</CardTitle>
            <CardDescription>
              Built-in accessibility support for all users
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Keyboard Navigation</h4>
              <p className="text-sm text-muted-foreground">
                Try using Tab, Enter, and Space keys to navigate through
                the components.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">
                Screen Reader Support
              </h4>
              <p className="text-sm text-muted-foreground">
                All components include proper ARIA labels and semantic
                HTML.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Focus Management</h4>
              <p className="text-sm text-muted-foreground">
                Focus rings are visible and meet WCAG contrast
                requirements.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Built with shadcn/ui, Radix UI, and Tailwind CSS for Bookwise
          </p>
        </div>
      </div>
    </div>
  );
}
