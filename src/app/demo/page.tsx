import Link from 'next/link';
import { ComponentDemo } from '@/components/ui';
import { Button } from '@/components/ui';
import { ArrowLeftIcon, HomeIcon } from 'lucide-react';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <div className="hidden sm:block h-6 w-px bg-border" />
              <h1 className="text-xl font-semibold">UI Components Demo</h1>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <HomeIcon className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Demo Content */}
      <ComponentDemo />
    </div>
  );
}
