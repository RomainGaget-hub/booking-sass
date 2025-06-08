# Bookwise - Project Structure

This document outlines the scalable feature-based architecture implemented in the Bookwise application.

## 📁 Directory Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── favicon.ico        # App icon
├── components/            # Reusable UI components
│   ├── ui/                # shadcn/ui components (to be added)
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   ├── books/             # Book-related components
│   │   ├── BookCard.tsx
│   │   └── BookList.tsx
│   └── index.ts           # Barrel exports
├── features/              # Feature-based modules
│   ├── auth/              # Authentication feature
│   ├── books/             # Book management feature
│   ├── profile/           # User profile feature
│   └── [feature]/
│       ├── components/    # Feature-specific components
│       ├── hooks/         # Feature-specific hooks
│       ├── utils/         # Feature-specific utilities
│       └── index.ts       # Feature exports
├── hooks/                 # Global custom hooks
│   ├── useAuth.ts
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   └── index.ts
├── lib/                   # Utility functions and configurations
│   ├── utils.ts           # Common utilities (cn, formatDate, etc.)
│   ├── constants.ts       # App constants
│   ├── validations.ts     # Zod schemas
│   └── index.ts
├── types/                 # TypeScript type definitions
│   └── index.ts           # Global types and interfaces
├── utils/                 # Additional utility functions
├── styles/                # Additional stylesheets
└── db/                    # Database-related files (future)
```

## 🏗️ Architecture Principles

### 1. Feature-Based Organization

- Each major feature has its own directory under `/features`
- Features are self-contained with their own components, hooks, and utilities
- Promotes modularity and easier maintenance

### 2. Separation of Concerns

- **Components**: Reusable UI components organized by purpose
- **Features**: Business logic grouped by domain
- **Hooks**: Custom React hooks for state management and side effects
- **Types**: Centralized TypeScript definitions
- **Utils**: Pure utility functions

### 3. Barrel Exports

- Each directory includes an `index.ts` file for clean imports
- Enables importing multiple items from a single path
- Example: `import { useAuth, useDebounce } from '@/hooks'`

### 4. Path Aliases

- Configured `@/*` alias points to `src/*`
- Enables clean imports: `import { Button } from '@/components/ui'`
- Reduces relative path complexity

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (to be added)
- **Validation**: Zod
- **Utilities**: clsx, tailwind-merge
- **Linting**: ESLint

## 📦 Installed Dependencies

### Production Dependencies

- `clsx` - Conditional className utility
- `tailwind-merge` - Tailwind class merging
- `zod` - Schema validation

### Development Dependencies

- TypeScript and React type definitions
- ESLint configuration
- Tailwind CSS and PostCSS

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   ```

3. **Add shadcn/ui components** (when needed):
   ```bash
   npx shadcn-ui@latest init
   npx shadcn-ui@latest add button
   ```

## 📝 Development Guidelines

### Adding New Features

1. Create a new directory under `/features`
2. Include subdirectories: `components/`, `hooks/`, `utils/`
3. Add barrel export in `index.ts`
4. Update main `/components/index.ts` if needed

### Component Creation

- Use TypeScript interfaces for props
- Extend `BaseComponentProps` for common props
- Include proper className handling with Tailwind
- Add JSDoc comments for complex components

### Hook Development

- Follow React hooks rules
- Include proper TypeScript typing
- Add error handling where appropriate
- Document hook purpose and usage

### Type Definitions

- Add new types to `/types/index.ts`
- Use proper TypeScript conventions
- Include JSDoc comments for complex types
- Export types for external use

## 🔄 Future Enhancements

- [ ] Add shadcn/ui components
- [ ] Implement authentication system
- [ ] Add database integration (Prisma + PostgreSQL)
- [ ] Set up API routes
- [ ] Add testing framework (Jest/Vitest)
- [ ] Implement state management (Zustand/Redux)
- [ ] Add internationalization (i18n)
- [ ] Set up CI/CD pipeline

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Zod Documentation](https://zod.dev/)
