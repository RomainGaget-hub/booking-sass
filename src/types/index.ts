// Base types
export interface User {
  id: string;
  name: string;
  email: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  genre?: string;
  description?: string;
  publishedYear?: number;
  status: 'want_to_read' | 'currently_reading' | 'read';
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReadingProgress {
  id: string;
  bookId: string;
  userId: string;
  currentPage: number;
  totalPages: number;
  notes?: string;
  startedAt?: Date;
  finishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// Form types
export interface FormErrors {
  [key: string]: string | undefined;
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Auth types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Feature-specific types
export interface BookFilters {
  status?: Book['status'];
  genre?: string;
  author?: string;
  search?: string;
}

export interface BookFormData {
  title: string;
  author: string;
  isbn?: string;
  genre?: string;
  description?: string;
  publishedYear?: number;
  status: Book['status'];
}
