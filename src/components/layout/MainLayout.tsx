'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  ThemeToggle,
} from '@/components/ui';
import {
  MenuIcon,
  CalendarIcon,
  UsersIcon,
  SettingsIcon,
  BarChart3Icon,
  HomeIcon,
  BookOpenIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Navigation items configuration
const navigationItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon,
    description: 'Overview and quick actions',
  },
  {
    name: 'Bookings',
    href: '/bookings',
    icon: CalendarIcon,
    description: 'Manage appointments and schedules',
  },
  {
    name: 'Customers',
    href: '/customers',
    icon: UsersIcon,
    description: 'Customer management and profiles',
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: BarChart3Icon,
    description: 'Business insights and reports',
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: SettingsIcon,
    description: 'Configure your business settings',
  },
];

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when navigation occurs
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Check if current path is active
  const isActiveRoute = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className={cn('min-h-screen bg-background', className)}>
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav
          className="container mx-auto flex h-16 items-center justify-between px-4"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-2 rounded-md p-2 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Bookwise Home"
            >
              <BookOpenIcon
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />
              <span className="text-xl font-bold">Bookwise</span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex md:items-center md:space-x-1"
              role="navigation"
              aria-label="Desktop navigation"
            >
              {navigationItems.map((item) => {
                const isActive = isActiveRoute(item.href);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      'hover:bg-accent hover:text-accent-foreground',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      isActive
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <Sheet
                open={isMobileMenuOpen}
                onOpenChange={setIsMobileMenuOpen}
              >
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9"
                    aria-label="Open mobile menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                  >
                    <MenuIcon className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] p-0"
                  id="mobile-menu"
                >
                  <SheetHeader className="border-b p-4">
                    <SheetTitle className="flex items-center space-x-2">
                      <BookOpenIcon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                      <span>Bookwise</span>
                    </SheetTitle>
                  </SheetHeader>

                  {/* Mobile Navigation */}
                  <nav
                    className="flex flex-col p-4"
                    role="navigation"
                    aria-label="Mobile navigation"
                  >
                    <div className="space-y-1">
                      {navigationItems.map((item) => {
                        const isActive = isActiveRoute(item.href);
                        const Icon = item.icon;

                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={handleNavClick}
                            className={cn(
                              'flex items-start space-x-3 rounded-md p-3 transition-colors',
                              'hover:bg-accent hover:text-accent-foreground',
                              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                              isActive
                                ? 'bg-accent text-accent-foreground'
                                : 'text-muted-foreground'
                            )}
                            aria-current={isActive ? 'page' : undefined}
                          >
                            <Icon
                              className="h-5 w-5 mt-0.5 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <div className="flex flex-col space-y-1">
                              <span className="font-medium">
                                {item.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {item.description}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Mobile Menu Footer */}
                    <div className="mt-8 pt-4 border-t">
                      <p className="text-xs text-muted-foreground px-3">
                        Bookwise v1.0 - AI-Powered Booking Platform
                      </p>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full" role="main">
        {children}
      </main>

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md"
      >
        Skip to main content
      </a>
    </div>
  );
}

// Export for convenience
export default MainLayout;
