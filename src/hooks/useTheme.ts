import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export interface UseThemeReturn {
  theme?: string;
  setTheme: (theme: string) => void;
  resolvedTheme?: string;
  themes: string[];
  systemTheme?: 'light' | 'dark';
  isClient: boolean;
  forcedTheme?: string;
}

export function useTheme(): UseThemeReturn {
  const [isClient, setIsClient] = useState(false);
  const themeState = useNextTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return {
    ...themeState,
    isClient,
  };
}
