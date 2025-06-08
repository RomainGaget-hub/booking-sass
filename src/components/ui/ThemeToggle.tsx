'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun, Computer } from 'lucide-react';
import { Button } from './button';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" aria-label="Toggle theme">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <Computer className="h-[1.2rem] w-[1.2rem]" />;
    }
    if (resolvedTheme === 'dark') {
      return <Moon className="h-[1.2rem] w-[1.2rem]" />;
    }
    return <Sun className="h-[1.2rem] w-[1.2rem]" />;
  };

  const getLabel = () => {
    if (theme === 'system') {
      return 'System theme';
    }
    if (resolvedTheme === 'dark') {
      return 'Dark theme';
    }
    return 'Light theme';
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={cycleTheme}
      aria-label={`Switch from ${getLabel()} to ${
        theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
      } theme`}
      title={getLabel()}
    >
      {getIcon()}
    </Button>
  );
}
