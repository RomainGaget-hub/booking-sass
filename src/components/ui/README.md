# Shadcn/UI Components Documentation

This directory contains the core UI components for Bookwise, built using [shadcn/ui](https://ui.shadcn.com/) - a collection of beautiful, accessible, and reusable components built with Radix UI primitives and styled with Tailwind CSS.

## 🎯 Core Principles

All components in this directory follow these principles:

- **Accessibility First**: Built with ARIA attributes and keyboard navigation support
- **Responsive Design**: Mobile-first approach with breakpoint-aware styling
- **Type Safety**: Full TypeScript support with proper type definitions
- **Customizable**: Easy to customize with Tailwind classes and CSS custom properties
- **Composable**: Components can be combined to create complex UI patterns

## 📦 Available Components

### Button Component

**File**: `button.tsx`  
**Description**: A versatile button component with multiple variants and sizes.

**Variants:**

- `default` - Primary button with brand colors
- `destructive` - For dangerous actions (delete, remove)
- `outline` - Subtle button with border
- `secondary` - Less prominent actions
- `ghost` - Minimal button for tertiary actions
- `link` - Text button with underline effect

**Sizes:**

- `default` - Standard button (h-9)
- `sm` - Small button (h-8)
- `lg` - Large button (h-10)
- `icon` - Square button for icons (size-9)

**Usage Example:**

```tsx
import { Button } from '@/components/ui/button';

// Primary button
<Button>Book Appointment</Button>

// Destructive button
<Button variant="destructive">Cancel Booking</Button>

// Icon button
<Button variant="ghost" size="icon">
  <CalendarIcon />
</Button>

// As child (polymorphic)
<Button asChild>
  <Link href="/booking">Book Now</Link>
</Button>
```

**Accessibility Features:**

- Focus ring with proper contrast ratios
- Disabled state handling
- ARIA attributes for screen readers
- Keyboard navigation support

### Input Component

**File**: `input.tsx`  
**Description**: A styled input field with built-in validation states and focus management.

**Features:**

- Auto-responsive text sizing (base on mobile, sm on desktop)
- Built-in file input styling
- Selection highlighting with brand colors
- Error state indicators
- Focus ring with proper contrast

**Usage Example:**

```tsx
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Basic input
<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input
    id="email"
    type="email"
    placeholder="Enter your email"
    aria-describedby="email-description"
  />
</div>

// Input with validation error
<Input
  type="text"
  aria-invalid="true"
  className="border-destructive"
/>
```

**Accessibility Features:**

- Proper focus management
- ARIA invalid state support
- High contrast focus indicators
- Screen reader friendly

### Label Component

**File**: `label.tsx`  
**Description**: Accessible label component built on Radix UI Label primitive.

**Features:**

- Automatic association with form controls
- Disabled state propagation
- Flexible content support (text, icons, etc.)
- Keyboard navigation

**Usage Example:**

```tsx
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

// Basic label
<Label htmlFor="username">Username</Label>

// Label with icon
<Label htmlFor="notifications">
  <BellIcon className="h-4 w-4" />
  Enable Notifications
</Label>

// Label with checkbox
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>
```

**Accessibility Features:**

- Native label association for screen readers
- Proper focus management
- Disabled state handling
- Keyboard interaction support

### Card Component

**File**: `card.tsx`  
**Description**: Flexible card container with multiple sub-components for structured content.

**Sub-components:**

- `Card` - Main container
- `CardHeader` - Header section with title and actions
- `CardTitle` - Main heading
- `CardDescription` - Subtitle or description
- `CardAction` - Action buttons (positioned top-right)
- `CardContent` - Main content area
- `CardFooter` - Footer with actions or metadata

**Usage Example:**

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Booking card example
<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Hair Cut & Style</CardTitle>
    <CardDescription>45 minutes • $85.00</CardDescription>
    <CardAction>
      <Button variant="ghost" size="icon">
        <MoreVerticalIcon />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">
        Thursday, March 15 at 2:00 PM
      </p>
      <p className="text-sm">with Sarah Johnson</p>
    </div>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Reschedule</Button>
    <Button>Confirm</Button>
  </CardFooter>
</Card>;
```

**Responsive Features:**

- Container queries for adaptive layouts
- Flexible grid system for header actions
- Mobile-optimized spacing and typography

### Alert Component

**File**: `alert.tsx`  
**Description**: Alert component for displaying important messages with optional icons.

**Variants:**

- `default` - Neutral informational alerts
- `destructive` - Error or warning alerts

**Sub-components:**

- `Alert` - Main container with ARIA role
- `AlertTitle` - Alert heading
- `AlertDescription` - Detailed message content

**Usage Example:**

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertCircleIcon, CheckCircleIcon } from 'lucide-react';

// Success alert
<Alert>
  <CheckCircleIcon />
  <AlertTitle>Booking Confirmed!</AlertTitle>
  <AlertDescription>
    Your appointment has been scheduled for March 15 at 2:00 PM.
    You'll receive a confirmation email shortly.
  </AlertDescription>
</Alert>

// Error alert
<Alert variant="destructive">
  <AlertCircleIcon />
  <AlertTitle>Booking Failed</AlertTitle>
  <AlertDescription>
    This time slot is no longer available. Please select a different time.
  </AlertDescription>
</Alert>
```

**Accessibility Features:**

- ARIA role="alert" for screen readers
- Proper semantic structure
- High contrast error states
- Icon and text content support

## 🎨 Styling and Customization

### CSS Custom Properties

The components use CSS custom properties defined in `globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #2563eb;
  --primary-foreground: #ffffff;
  /* ... and many more */
}
```

### Tailwind Classes

All components use Tailwind CSS classes with the `cn()` utility function for conditional styling:

```tsx
import { cn } from '@/lib/utils';

// Conditional styling example
<Button
  className={cn(
    'custom-class',
    isLoading && 'opacity-50 cursor-not-allowed'
  )}
>
  {isLoading ? 'Loading...' : 'Submit'}
</Button>;
```

### Component Composition

Components are designed to be composable and can be extended:

```tsx
// Custom booking button
const BookingButton = ({ isBooked, ...props }) => (
  <Button
    variant={isBooked ? 'outline' : 'default'}
    className={cn('w-full', isBooked && 'border-green-500 text-green-600')}
    {...props}
  >
    {isBooked ? 'Booked ✓' : 'Book Now'}
  </Button>
);
```

## 🔧 Development Guidelines

### Adding New Components

1. Use the shadcn/ui CLI to add new components:

   ```bash
   npx shadcn@latest add [component-name]
   ```

2. Update the `index.ts` file to export the new component
3. Add documentation to this README

### Customizing Components

1. **Prefer composition over modification** - Create wrapper components instead of modifying the base components
2. **Use the `className` prop** for styling overrides
3. **Leverage CSS custom properties** for theme consistency
4. **Follow the existing patterns** for variants and sizes

### Testing Components

All components should be tested for:

- Accessibility (screen readers, keyboard navigation)
- Responsive behavior across breakpoints
- Visual consistency across themes
- Proper TypeScript types

## 🚀 Best Practices

### Accessibility

- Always use semantic HTML elements
- Provide proper ARIA labels and descriptions
- Ensure keyboard navigation works correctly
- Test with screen readers
- Maintain proper color contrast ratios

### Performance

- Use React.memo() for expensive components
- Implement proper key props for lists
- Avoid unnecessary re-renders
- Lazy load heavy components when possible

### Responsiveness

- Design mobile-first
- Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
- Test on multiple screen sizes
- Consider touch targets for mobile devices

### Type Safety

- Use proper TypeScript types for all props
- Extend HTML element types when appropriate
- Provide default values for optional props
- Document complex prop interfaces

## 📚 Additional Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React TypeScript Best Practices](https://github.com/typescript-cheatsheets/react)

---

## 🤝 Contributing

When adding or modifying components:

1. Follow the existing code style and patterns
2. Add proper TypeScript types and documentation
3. Test accessibility with screen readers
4. Ensure responsive design works across all breakpoints
5. Update this README with usage examples
6. Add the component to the main export in `index.ts`
