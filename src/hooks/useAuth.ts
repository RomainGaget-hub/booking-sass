import { useState, useEffect } from 'react';
import type { AuthState } from '@/types';

export function useAuth(): AuthState & {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;
} {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check for existing session on mount
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // TODO: Implement actual auth check
      // For now, just set loading to false
      setAuthState((prev) => ({ ...prev, isLoading: false }));
    } catch (error) {
      console.error('Auth check failed:', error);
      setAuthState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const login = async (email: string, password: string) => {
    try {
      // TODO: Implement actual login logic
      console.log('Login attempt:', { email, password });
      throw new Error('Login not implemented yet');
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const register = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      // TODO: Implement actual registration logic
      console.log('Register attempt:', { name, email, password });
      throw new Error('Registration not implemented yet');
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  return {
    ...authState,
    login,
    logout,
    register,
  };
}
