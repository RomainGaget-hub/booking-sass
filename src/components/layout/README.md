# MainLayout Component

A comprehensive, responsive layout component for the Bookwise application featuring a sticky navigation bar, dark mode toggle, and mobile drawer menu.

## Features

### 🎯 Core Functionality

- **Sticky Navigation Header**: Remains visible during scroll with backdrop blur effect
- **Dark Mode Toggle**: Integrated theme switching with next-themes
- **Mobile Drawer Menu**: Slide-out navigation for mobile devices using Shadcn Sheet
- **Responsive Design**: Mobile-first approach with breakpoint-aware navigation
- **Active Route Detection**: Highlights current page in navigation
- **Keyboard Navigation**: Full accessibility support with proper focus management

### ♿ Accessibility Features

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Semantic HTML**: Proper use of nav, main, header landmarks
- **ARIA Labels**: Comprehensive labeling for screen readers
- **Focus Management**: Visible focus rings and logical tab order
- **Skip Links**: Skip to main content for keyboard users
- **Screen Reader Support**: Optimized for assistive technologies

## Usage

### Basic Implementation

```tsx
import { MainLayout } from '@/components/layout/MainLayout';

export default function MyPage() {
  return (
    <MainLayout>
      <div id="main-content" className="container mx-auto px-4 py-8">
        <h1>Your Page Content</h1>
        {/* Your page content here */}
      </div>
    </MainLayout>
  );
}
```

### With Custom Styling

```tsx
import { MainLayout } from '@/components/layout/MainLayout';

export default function CustomPage() {
  return (
    <MainLayout className="custom-layout-class">
      <div className="custom-content">{/* Your content */}</div>
    </MainLayout>
  );
}
```

## Props

| Prop        | Type              | Default | Description                                     |
| ----------- | ----------------- | ------- | ----------------------------------------------- |
| `children`  | `React.ReactNode` | -       | Content to be rendered in the main area         |
| `className` | `string`          | `''`    | Additional CSS classes for the layout container |

## Navigation Configuration

The navigation items are configured in the `navigationItems` array:

```tsx
const navigationItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon,
    description: 'Overview and quick actions',
  },
  // ... more items
];
```

### Navigation Item Structure

| Property      | Type         | Description                          |
| ------------- | ------------ | ------------------------------------ |
| `name`        | `string`     | Display name for the navigation item |
| `href`        | `string`     | Route path for the navigation link   |
| `icon`        | `LucideIcon` | Icon component from lucide-react     |
| `description` | `string`     | Description shown in mobile menu     |

## Responsive Behavior

### Desktop (md and above)

- Horizontal navigation bar with all items visible
- Theme toggle in top-right corner
- Hover states and focus indicators

### Mobile (below md)

- Hamburger menu button replaces horizontal navigation
- Slide-out drawer from the right side
- Touch-friendly navigation items with descriptions
- Automatic menu closure on navigation

## Theme Integration

The component integrates with `next-themes` for dark mode support:

```tsx
// Theme toggle is automatically included
// Supports light, dark, and system themes
// Persists user preference across sessions
```

## Keyboard Navigation

| Key           | Action                                |
| ------------- | ------------------------------------- |
| `Tab`         | Navigate through interactive elements |
| `Enter/Space` | Activate buttons and links            |
| `Escape`      | Close mobile menu when open           |

## Styling

The component uses Tailwind CSS with design tokens from the Shadcn theme system:

### Key Classes

- `sticky top-0 z-50` - Sticky positioning
- `backdrop-blur` - Background blur effect
- `bg-background/95` - Semi-transparent background
- `container mx-auto` - Responsive container

### Customization

You can customize the appearance by:

1. **Modifying CSS Variables**: Update theme colors in `globals.css`
2. **Extending Tailwind**: Add custom utilities in `tailwind.config.ts`
3. **Component Props**: Pass custom `className` for specific styling

## Dependencies

- `next/link` - Client-side navigation
- `next/navigation` - Route detection
- `@/components/ui` - Shadcn UI components
- `lucide-react` - Icon library
- `next-themes` - Theme management

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Accessibility**: Screen readers, keyboard navigation

## Performance

- **Lazy Loading**: Icons and components load on demand
- **Optimized Rendering**: Minimal re-renders with React state management
- **Bundle Size**: Tree-shaken imports reduce bundle size

## Examples

### Basic Page Layout

```tsx
import { MainLayout } from '@/components/layout/MainLayout';

export default function DashboardPage() {
  return (
    <MainLayout>
      <div id="main-content" className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Dashboard content */}
        </div>
      </div>
    </MainLayout>
  );
}
```

### Custom Navigation Handling

```tsx
import { MainLayout } from '@/components/layout/MainLayout';
import { useRouter } from 'next/navigation';

export default function CustomPage() {
  const router = useRouter();

  const handleCustomNavigation = () => {
    // Custom navigation logic
    router.push('/custom-route');
  };

  return (
    <MainLayout>
      <div className="p-8">
        <button onClick={handleCustomNavigation}>Custom Navigation</button>
      </div>
    </MainLayout>
  );
}
```

## Testing

### Accessibility Testing

```bash
# Run accessibility tests
npm run test:a11y

# Manual testing checklist:
# ✅ Keyboard navigation works
# ✅ Screen reader announces navigation
# ✅ Focus indicators are visible
# ✅ Color contrast meets WCAG standards
```

### Responsive Testing

```bash
# Test responsive breakpoints
# ✅ Mobile menu appears below md breakpoint
# ✅ Desktop navigation shows above md breakpoint
# ✅ Touch targets are appropriately sized
# ✅ Content reflows properly
```

## Troubleshooting

### Common Issues

1. **Navigation not highlighting active route**

   - Ensure route paths match exactly
   - Check for trailing slashes in URLs

2. **Mobile menu not closing**

   - Verify Sheet component is properly imported
   - Check state management in mobile navigation

3. **Theme toggle not working**
   - Ensure ThemeProvider wraps the application
   - Check next-themes configuration

### Debug Mode

```tsx
// Add debug logging for route detection
const isActiveRoute = (href: string) => {
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  console.log(`Route ${href} active:`, isActive); // Debug log
  return isActive;
};
```

## Contributing

When modifying the MainLayout component:

1. Maintain accessibility standards
2. Test across all breakpoints
3. Verify keyboard navigation
4. Update documentation
5. Add appropriate TypeScript types

## Related Components

- [`ThemeToggle`](../ui/ThemeToggle.tsx) - Theme switching functionality
- [`Sheet`](../ui/sheet.tsx) - Mobile drawer implementation
- [`Button`](../ui/button.tsx) - Interactive elements
- [`ThemeProvider`](../providers/ThemeProvider.tsx) - Theme context
