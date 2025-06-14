import type { BaseComponentProps } from '@/types';

export const Footer = ({ className = '' }: BaseComponentProps) => {
  return (
    <footer className={`bg-gray-50 border-t ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600">
          <p>&copy; 2024 Bookwise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
