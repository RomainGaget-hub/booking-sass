# Bookwise - Recommended App Structure

## 🎯 Aligned Structure for SaaS Booking Platform

Based on PROJECT_OVERVIEW.md requirements and Next.js 15 App Router best practices:

```
bookwise/
├── app/                              # Next.js 15 App Router (root level)
│   ├── (auth)/                       # Authentication route group
│   │   ├── login/
│   │   │   └── page.tsx              # Login page
│   │   ├── register/
│   │   │   └── page.tsx              # Registration page
│   │   ├── forgot-password/
│   │   │   └── page.tsx              # Password reset
│   │   └── layout.tsx                # Auth layout wrapper
│   ├── (dashboard)/                  # Main application route group
│   │   ├── dashboard/
│   │   │   └── page.tsx              # Business dashboard
│   │   ├── bookings/
│   │   │   ├── page.tsx              # Bookings list
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx          # Booking details
│   │   │   └── new/
│   │   │       └── page.tsx          # Create booking
│   │   ├── customers/
│   │   │   ├── page.tsx              # Customer management
│   │   │   └── [id]/
│   │   │       └── page.tsx          # Customer profile
│   │   ├── staff/
│   │   │   ├── page.tsx              # Staff management
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx          # Staff profile
│   │   │   └── availability/
│   │   │       └── page.tsx          # Staff availability
│   │   ├── services/
│   │   │   ├── page.tsx              # Service configuration
│   │   │   └── [id]/
│   │   │       └── page.tsx          # Service details
│   │   ├── analytics/
│   │   │   ├── page.tsx              # Analytics dashboard
│   │   │   ├── revenue/
│   │   │   │   └── page.tsx          # Revenue analytics
│   │   │   └── customers/
│   │   │       └── page.tsx          # Customer insights
│   │   ├── settings/
│   │   │   ├── page.tsx              # Business settings
│   │   │   ├── integrations/
│   │   │   │   └── page.tsx          # Third-party integrations
│   │   │   └── notifications/
│   │   │       └── page.tsx          # Notification settings
│   │   ├── billing/
│   │   │   ├── page.tsx              # Subscription & billing
│   │   │   └── invoices/
│   │   │       └── page.tsx          # Invoice management
│   │   └── layout.tsx                # Dashboard layout with navigation
│   ├── booking/                      # Public booking interface
│   │   ├── [businessId]/
│   │   │   ├── page.tsx              # Business booking page
│   │   │   └── [serviceId]/
│   │   │       └── page.tsx          # Service booking flow
│   │   └── confirmation/
│   │       └── page.tsx              # Booking confirmation
│   ├── api/                          # API routes
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── route.ts          # Login endpoint
│   │   │   ├── register/
│   │   │   │   └── route.ts          # Registration endpoint
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts          # NextAuth.js handler
│   │   ├── bookings/
│   │   │   ├── route.ts              # CRUD bookings
│   │   │   ├── [id]/
│   │   │   │   └── route.ts          # Individual booking
│   │   │   ├── availability/
│   │   │   │   └── route.ts          # Availability checking
│   │   │   └── conflicts/
│   │   │       └── route.ts          # Conflict detection
│   │   ├── payments/
│   │   │   ├── route.ts              # Payment processing
│   │   │   ├── stripe/
│   │   │   │   └── route.ts          # Stripe integration
│   │   │   └── refunds/
│   │   │       └── route.ts          # Refund handling
│   │   ├── webhooks/
│   │   │   ├── stripe/
│   │   │   │   └── route.ts          # Stripe webhooks
│   │   │   ├── calendar/
│   │   │   │   └── route.ts          # Calendar sync webhooks
│   │   │   └── notifications/
│   │   │       └── route.ts          # SMS/Email webhooks
│   │   ├── integrations/
│   │   │   ├── google-calendar/
│   │   │   │   └── route.ts          # Google Calendar API
│   │   │   ├── outlook/
│   │   │   │   └── route.ts          # Outlook integration
│   │   │   └── sms/
│   │   │       └── route.ts          # SMS service integration
│   │   ├── analytics/
│   │   │   ├── revenue/
│   │   │   │   └── route.ts          # Revenue analytics
│   │   │   ├── bookings/
│   │   │   │   └── route.ts          # Booking analytics
│   │   │   └── customers/
│   │   │       └── route.ts          # Customer analytics
│   │   └── ai/
│   │       ├── scheduling/
│   │       │   └── route.ts          # AI scheduling suggestions
│   │       └── recommendations/
│   │           └── route.ts          # AI recommendations
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Landing page
│   ├── globals.css                   # Global styles
│   └── not-found.tsx                 # 404 page
├── components/                       # Reusable UI components
│   ├── ui/                           # Shadcn UI base components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── calendar.tsx
│   │   ├── dialog.tsx
│   │   ├── table.tsx
│   │   └── index.ts
│   ├── forms/                        # Form-specific components
│   │   ├── BookingForm.tsx
│   │   ├── CustomerForm.tsx
│   │   ├── ServiceForm.tsx
│   │   ├── StaffForm.tsx
│   │   └── index.ts
│   ├── charts/                       # Analytics visualizations
│   │   ├── RevenueChart.tsx
│   │   ├── BookingChart.tsx
│   │   ├── UtilizationChart.tsx
│   │   └── index.ts
│   ├── booking/                      # Booking interface components
│   │   ├── BookingCalendar.tsx
│   │   ├── TimeSlotPicker.tsx
│   │   ├── ServiceSelector.tsx
│   │   ├── StaffSelector.tsx
│   │   ├── BookingConfirmation.tsx
│   │   └── index.ts
│   ├── calendar/                     # Calendar components
│   │   ├── CalendarView.tsx
│   │   ├── DayView.tsx
│   │   ├── WeekView.tsx
│   │   ├── MonthView.tsx
│   │   └── index.ts
│   ├── staff/                        # Staff management components
│   │   ├── StaffList.tsx
│   │   ├── StaffCard.tsx
│   │   ├── AvailabilityEditor.tsx
│   │   ├── StaffSchedule.tsx
│   │   └── index.ts
│   ├── layout/                       # Layout and navigation
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── BreadcrumbNav.tsx
│   │   └── index.ts
│   ├── analytics/                    # Analytics components
│   │   ├── KPICard.tsx
│   │   ├── MetricsDashboard.tsx
│   │   ├── ReportsTable.tsx
│   │   └── index.ts
│   └── index.ts                      # Barrel exports
├── lib/                              # Utility functions & configs
│   ├── auth.ts                       # Auth.js configuration
│   ├── db.ts                         # Database connection & helpers
│   ├── stripe.ts                     # Stripe configuration
│   ├── notifications.ts              # SMS/Email service configs
│   ├── calendar.ts                   # Calendar integration helpers
│   ├── ai.ts                         # AI/ML service integrations
│   ├── utils.ts                      # General utility functions
│   ├── constants.ts                  # App constants
│   ├── validations.ts                # Zod schemas
│   └── index.ts
├── prisma/                           # Database management
│   ├── schema.prisma                 # Database schema definition
│   ├── migrations/                   # Database migration files
│   └── seed.ts                       # Database seeding script
├── services/                         # Business logic services
│   ├── booking/                      # Booking business logic
│   │   ├── availability.ts           # Availability calculations
│   │   ├── scheduling.ts             # Scheduling algorithms
│   │   ├── validation.ts             # Booking validation rules
│   │   ├── conflicts.ts              # Conflict resolution
│   │   └── index.ts
│   ├── payment/                      # Payment processing logic
│   │   ├── stripe.ts                 # Stripe operations
│   │   ├── billing.ts                # Billing calculations
│   │   ├── refunds.ts                # Refund processing
│   │   └── index.ts
│   ├── notification/                 # Communication services
│   │   ├── email.ts                  # Email notifications
│   │   ├── sms.ts                    # SMS notifications
│   │   ├── templates.ts              # Message templates
│   │   └── index.ts
│   ├── analytics/                    # Data analysis services
│   │   ├── revenue.ts                # Revenue calculations
│   │   ├── bookings.ts               # Booking analytics
│   │   ├── customers.ts              # Customer insights
│   │   └── index.ts
│   ├── ai/                           # AI/ML services
│   │   ├── scheduling.ts             # AI scheduling optimization
│   │   ├── recommendations.ts        # Recommendation engine
│   │   ├── predictions.ts            # Predictive analytics
│   │   └── index.ts
│   └── integrations/                 # External service integrations
│       ├── google-calendar.ts        # Google Calendar sync
│       ├── outlook.ts                # Outlook integration
│       ├── twilio.ts                 # SMS integration
│       └── index.ts
├── types/                            # TypeScript type definitions
│   ├── booking.ts                    # Booking-related types
│   ├── user.ts                       # User and authentication types
│   ├── payment.ts                    # Payment and billing types
│   ├── staff.ts                      # Staff management types
│   ├── service.ts                    # Service configuration types
│   ├── analytics.ts                  # Analytics data types
│   ├── api.ts                        # API response types
│   └── index.ts                      # Global types export
├── hooks/                            # Custom React hooks
│   ├── useBookings.ts                # Booking management hooks
│   ├── useAuth.ts                    # Authentication hooks
│   ├── usePayments.ts                # Payment processing hooks
│   ├── useAnalytics.ts               # Analytics data hooks
│   ├── useStaff.ts                   # Staff management hooks
│   ├── useServices.ts                # Service configuration hooks
│   ├── useCalendar.ts                # Calendar integration hooks
│   ├── useNotifications.ts           # Notification hooks
│   └── index.ts                      # Hooks barrel export
├── middleware.ts                     # Next.js middleware (auth, RBAC)
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── package.json                      # Dependencies and scripts
└── tsconfig.json                     # TypeScript configuration
```

## 🔄 Migration Steps from Current Structure

### 1. **Move App Directory**

```bash
# Move from src/app to root-level app
mv src/app ./app
```

### 2. **Create Route Groups**

```bash
# Create authentication route group
mkdir -p app/(auth)/{login,register,forgot-password}

# Create dashboard route group
mkdir -p app/(dashboard)/{dashboard,bookings,customers,staff,services,analytics,settings,billing}

# Create public booking interface
mkdir -p app/booking
```

### 3. **Restructure API Routes**

```bash
# Create comprehensive API structure
mkdir -p app/api/{auth,bookings,payments,webhooks,integrations,analytics,ai}
```

### 4. **Add Missing Directories**

```bash
# Add business logic services
mkdir -p services/{booking,payment,notification,analytics,ai,integrations}

# Add Prisma for database management
mkdir prisma

# Move components from src
mv src/components ./components
```

### 5. **Update Import Paths**

Update all imports to reflect new structure:

```typescript
// Old: import { Button } from '@/components/ui'
// New: import { Button } from '@/components/ui'
```

## 🎯 Key Benefits of This Structure

### **1. SaaS-Optimized Organization**

- Clear separation between public booking interface and dashboard
- Dedicated billing and subscription management
- Comprehensive API structure for third-party integrations

### **2. Scalable Architecture**

- Route groups for logical organization
- Business logic separated in services layer
- Modular component structure

### **3. AI-Ready Infrastructure**

- Dedicated AI services directory
- API endpoints for AI features
- Hooks for AI-powered functionality

### **4. Multi-Tenant Support**

- Business-specific routing in booking interface
- Role-based access control structure
- Separated customer and staff interfaces

### **5. Integration-Friendly**

- Webhook handling structure
- External service integration layer
- Calendar sync capabilities

## 🚀 Implementation Priority

### **Phase 1: Core Structure**

1. Migrate app directory to root level
2. Set up route groups (auth, dashboard)
3. Create basic API structure

### **Phase 2: Business Logic**

1. Implement services layer
2. Set up Prisma database schema
3. Create booking and payment services

### **Phase 3: Advanced Features**

1. Add AI services integration
2. Implement webhook handlers
3. Set up analytics pipeline

### **Phase 4: Optimization**

1. Add comprehensive middleware
2. Implement caching strategies
3. Set up monitoring and logging

This structure aligns perfectly with the PROJECT_OVERVIEW.md vision while providing a scalable foundation for the Bookwise AI-powered SaaS booking platform.
