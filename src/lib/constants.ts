// Application Constants
export const APP_NAME = 'Bookwise';
export const APP_DESCRIPTION = 'Your personal book management companion';

// API Routes
export const API_ROUTES = {
  BOOKS: '/api/books',
  AUTH: '/api/auth',
  PROFILE: '/api/profile',
} as const;

// Navigation Routes
export const ROUTES = {
  HOME: '/',
  BOOKS: '/books',
  PROFILE: '/profile',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;

// Book Status
export const BOOK_STATUS = {
  WANT_TO_READ: 'want_to_read',
  CURRENTLY_READING: 'currently_reading',
  READ: 'read',
} as const;

export type BookStatus = (typeof BOOK_STATUS)[keyof typeof BOOK_STATUS];
