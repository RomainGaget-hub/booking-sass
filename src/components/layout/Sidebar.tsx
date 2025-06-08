import type { BaseComponentProps } from '@/types';

export const Sidebar = ({
  className = '',
  children,
}: BaseComponentProps) => {
  return (
    <aside className={`bg-white shadow-sm border-r w-64 ${className}`}>
      <div className="p-4">
        <nav className="space-y-2">
          {/* Navigation items will be added here */}
          {children}
        </nav>
      </div>
    </aside>
  );
};
