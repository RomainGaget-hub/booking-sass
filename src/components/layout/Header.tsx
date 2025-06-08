import type { BaseComponentProps } from '@/types';

export const Header = ({
  className = '',
  children,
}: BaseComponentProps) => {
  return (
    <header className={`bg-white shadow-sm border-b ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Bookwise</h1>
          </div>
          <nav className="flex items-center space-x-4">
            {/* Navigation items will be added here */}
            {children}
          </nav>
        </div>
      </div>
    </header>
  );
};
