'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import scrollama from 'scrollama';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  ThemeToggle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@/components/ui';
import {
  CalendarIcon,
  UsersIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  CreditCardIcon,
  SmartphoneIcon,
  BellIcon,
  XIcon,
  TrendingUpIcon,
  DollarSignIcon,
} from 'lucide-react';

// Product Walkthrough Component
function ProductWalkthrough() {
  const [currentStep, setCurrentStep] = useState(0);
  const scrollerRef = useRef<HTMLElement>(null);
  const scrollamaRef = useRef<unknown>(null);

  const steps = [
    {
      id: 'scheduling',
      title: 'Smart Scheduling',
      subtitle: 'AI-Powered Appointment Management',
      description:
        'Our intelligent scheduling engine automatically optimizes your calendar, prevents conflicts, and maximizes your daily capacity.',
      features: [
        'Real-time availability sync',
        'Automatic conflict prevention',
        'Smart time slot recommendations',
        'Calendar integration',
      ],
      icon: CalendarIcon,
      color: 'blue',
      demo: {
        title: 'Live Calendar View',
        content:
          'Watch appointments flow seamlessly into your optimized schedule',
      },
    },
    {
      id: 'payments',
      title: 'Automated Payments',
      subtitle: 'Secure & Instant Processing',
      description:
        'Accept payments effortlessly with integrated Stripe processing. Handle deposits, tips, and refunds automatically.',
      features: [
        'Stripe integration with tips',
        'Automatic payment collection',
        'Instant refund processing',
        'Multiple payment methods',
      ],
      icon: CreditCardIcon,
      color: 'green',
      demo: {
        title: 'Payment Flow',
        content: 'Secure, one-click payment processing for your customers',
      },
    },
    {
      id: 'automation',
      title: 'Smart Automation',
      subtitle: 'Reduce No-Shows by 60%',
      description:
        'Intelligent reminder sequences and follow-up campaigns keep customers engaged and reduce missed appointments.',
      features: [
        'Multi-channel reminders',
        'Automated follow-ups',
        'Customizable templates',
        'SMS and email sequences',
      ],
      icon: BellIcon,
      color: 'purple',
      demo: {
        title: 'Communication Hub',
        content: 'Automated messages that keep your customers informed',
      },
    },
    {
      id: 'reporting',
      title: 'Business Analytics',
      subtitle: 'Data-Driven Insights',
      description:
        'Comprehensive reporting and analytics help you make informed decisions and grow your business strategically.',
      features: [
        'Real-time dashboards',
        'Revenue forecasting',
        'Customer insights',
        'Performance metrics',
      ],
      icon: TrendingUpIcon,
      color: 'orange',
      demo: {
        title: 'Analytics Dashboard',
        content: 'Visual insights that drive business growth',
      },
    },
  ];

  useEffect(() => {
    const scroller = scrollama();

    scroller
      .setup({
        step: '.step',
        offset: 0.5,
        debug: false,
      })
      .onStepEnter((response) => {
        setCurrentStep(response.index);
      });

    scrollamaRef.current = scroller;

    return () => {
      if (
        scrollamaRef.current &&
        typeof (scrollamaRef.current as any).destroy === 'function'
      ) {
        (scrollamaRef.current as any).destroy();
      }
    };
  }, []);

  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      {
        bg: string;
        text: string;
        border: string;
        bgLight: string;
      }
    > = {
      blue: {
        bg: 'from-blue-500 to-blue-600',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-800',
        bgLight: 'bg-blue-50 dark:bg-blue-900/20',
      },
      green: {
        bg: 'from-green-500 to-green-600',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-800',
        bgLight: 'bg-green-50 dark:bg-green-900/20',
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-800',
        bgLight: 'bg-purple-50 dark:bg-purple-900/20',
      },
      orange: {
        bg: 'from-orange-500 to-orange-600',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-800',
        bgLight: 'bg-orange-50 dark:bg-orange-900/20',
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="relative min-h-screen py-20" ref={scrollerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See Bookwise in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our intelligent platform transforms every aspect
            of your booking business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps Navigation */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = getColorClasses(step.color);
              const isActive = currentStep === index;

              return (
                <motion.div
                  key={step.id}
                  className={`step relative p-8 rounded-2xl border-2 transition-all duration-500 ${
                    isActive
                      ? `${colorClasses.border} shadow-xl scale-105`
                      : 'border-border/50 hover:border-border'
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  role="region"
                  aria-labelledby={`step-${index}-title`}
                  aria-describedby={`step-${index}-description`}
                >
                  {/* Step Number */}
                  <div className="absolute -left-4 top-8">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${colorClasses.bg} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colorClasses.bg} flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        id={`step-${index}-title`}
                        className={`text-xl font-bold mb-2 ${
                          isActive ? colorClasses.text : 'text-foreground'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm font-medium mb-3 ${
                          isActive
                            ? colorClasses.text
                            : 'text-muted-foreground'
                        }`}
                      >
                        {step.subtitle}
                      </p>
                      <p
                        id={`step-${index}-description`}
                        className="text-muted-foreground leading-relaxed mb-4"
                      >
                        {step.description}
                      </p>

                      <ul
                        className="space-y-2"
                        role="list"
                        aria-label={`${step.title} features`}
                      >
                        {step.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckIcon
                              className={`w-4 h-4 ${colorClasses.text} flex-shrink-0`}
                            />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Demo Panel */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="relative"
              >
                <Card className="border-2 hover:border-primary/20 transition-all duration-300 overflow-hidden">
                  <CardHeader
                    className={`${
                      getColorClasses(steps[currentStep].color).bgLight
                    } text-center`}
                  >
                    <CardTitle
                      className={`${
                        getColorClasses(steps[currentStep].color).text
                      } text-xl`}
                    >
                      {steps[currentStep].demo.title}
                    </CardTitle>
                    <CardDescription>
                      {steps[currentStep].demo.content}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    {/* Demo Content Based on Current Step */}
                    {currentStep === 0 && <SchedulingDemo />}
                    {currentStep === 1 && <PaymentsDemo />}
                    {currentStep === 2 && <AutomationDemo />}
                    {currentStep === 3 && <ReportingDemo />}
                  </CardContent>
                </Card>

                {/* Progress Indicator */}
                <div className="mt-6 flex justify-center">
                  <div
                    className="flex space-x-2"
                    role="tablist"
                    aria-label="Walkthrough progress"
                  >
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        role="tab"
                        aria-selected={currentStep === index}
                        aria-label={`Go to step ${index + 1}: ${
                          steps[index].title
                        }`}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentStep === index
                            ? `bg-gradient-to-r ${
                                getColorClasses(steps[index].color).bg
                              } scale-125`
                            : 'bg-muted hover:bg-muted-foreground/50'
                        }`}
                        onClick={() => setCurrentStep(index)}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Step {currentStep + 1} of {steps.length}:{' '}
        {steps[currentStep].title}
      </div>
    </section>
  );
}

// Demo Components for each step
function SchedulingDemo() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-7 gap-2 text-xs">
        <div className="text-center font-medium text-muted-foreground py-2">
          Mon
        </div>
        <div className="text-center font-medium text-muted-foreground py-2">
          Tue
        </div>
        <div className="text-center font-medium text-muted-foreground py-2">
          Wed
        </div>
        <div className="text-center font-medium text-muted-foreground py-2">
          Thu
        </div>
        <div className="text-center font-medium text-muted-foreground py-2">
          Fri
        </div>
        <div className="text-center font-medium text-muted-foreground py-2">
          Sat
        </div>
        <div className="text-center font-medium text-muted-foreground py-2">
          Sun
        </div>

        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`aspect-square rounded-lg border-2 flex items-center justify-center text-sm font-medium ${
              i === 2
                ? 'bg-blue-500 text-white border-blue-500'
                : i === 4
                ? 'bg-green-500 text-white border-green-500'
                : 'bg-muted border-border text-muted-foreground'
            }`}
          >
            {15 + i}
          </motion.div>
        ))}
      </div>
      <div className="text-center text-sm text-muted-foreground mt-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2"
        >
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>Optimal time slots</span>
          <div className="w-3 h-3 bg-green-500 rounded-full ml-4"></div>
          <span>Available slots</span>
        </motion.div>
      </div>
    </div>
  );
}

function PaymentsDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium">Payment Processing</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 dark:text-green-400">
              Secure
            </span>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Service Fee:</span>
            <span>$85.00</span>
          </div>
          <div className="flex justify-between">
            <span>Tip (18%):</span>
            <span>$15.30</span>
          </div>
          <div className="border-t pt-2 font-medium flex justify-between">
            <span>Total:</span>
            <span>$100.30</span>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
          <CheckIcon className="w-4 h-4" />
          Payment Successful
        </div>
      </motion.div>
    </motion.div>
  );
}

function AutomationDemo() {
  const messages = [
    {
      time: '2h before',
      text: 'Reminder: Appointment tomorrow at 2 PM',
      type: 'sms',
    },
    {
      time: '30m before',
      text: 'Your appointment is starting soon!',
      type: 'email',
    },
    {
      time: 'After',
      text: 'Thank you! Rate your experience',
      type: 'follow-up',
    },
  ];

  return (
    <div className="space-y-3">
      {messages.map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.3 }}
          className="flex items-center gap-3 p-3 rounded-lg bg-muted"
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs ${
              message.type === 'sms'
                ? 'bg-blue-500'
                : message.type === 'email'
                ? 'bg-green-500'
                : 'bg-purple-500'
            }`}
          >
            {message.type === 'sms'
              ? 'SMS'
              : message.type === 'email'
              ? '@'
              : '★'}
          </div>
          <div className="flex-1">
            <div className="text-xs text-muted-foreground">
              {message.time}
            </div>
            <div className="text-sm">{message.text}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ReportingDemo() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {[
          {
            label: 'Revenue',
            value: '$12,450',
            change: '+15%',
            color: 'green',
          },
          {
            label: 'Bookings',
            value: '186',
            change: '+22%',
            color: 'blue',
          },
          { label: 'No-shows', value: '12', change: '-60%', color: 'red' },
          {
            label: 'Utilization',
            value: '94%',
            change: '+35%',
            color: 'purple',
          },
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-muted p-3 rounded-lg text-center"
          >
            <div className="text-sm text-muted-foreground">
              {metric.label}
            </div>
            <div className="text-lg font-bold">{metric.value}</div>
            <div
              className={`text-xs ${
                metric.color === 'green'
                  ? 'text-green-600'
                  : metric.color === 'blue'
                  ? 'text-blue-600'
                  : metric.color === 'red'
                  ? 'text-green-600'
                  : 'text-purple-600'
              }`}
            >
              {metric.change}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="h-20 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-end justify-around p-2"
      >
        {[60, 75, 90, 85, 95, 88, 92].map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="w-2 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
          />
        ))}
      </motion.div>
    </div>
  );
}

// Pricing Component
function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for solo practitioners and small businesses',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        '1 staff member',
        'Up to 100 bookings/month',
        'Basic scheduling',
        'Email reminders',
        'Stripe payment processing',
        'Mobile-responsive booking page',
        'Basic analytics',
        'Email support',
      ],
      limitations: [
        'No SMS notifications',
        'No advanced analytics',
        'No integrations',
      ],
      popular: false,
      ctaText: 'Start Free Trial',
      ctaVariant: 'outline' as const,
    },
    {
      name: 'Growth',
      description: 'Ideal for growing businesses with multiple staff',
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        'Up to 5 staff members',
        'Unlimited bookings',
        'AI-powered scheduling',
        'SMS + Email reminders',
        'Advanced payment processing',
        'Custom branding',
        'Advanced analytics & reporting',
        'Calendar integrations',
        'Priority support',
        'Customer management',
        'Automated follow-ups',
      ],
      limitations: [],
      popular: true,
      ctaText: 'Start Free Trial',
      ctaVariant: 'default' as const,
    },
    {
      name: 'Pro',
      description: 'Enterprise-grade features for established businesses',
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        'Unlimited staff members',
        'Unlimited bookings',
        'Full AI automation suite',
        'Multi-channel communications',
        'Advanced payment features',
        'White-label solution',
        'Advanced business intelligence',
        'API access & integrations',
        'Dedicated account manager',
        'Multi-location support',
        'Custom workflows',
        'Advanced security features',
      ],
      limitations: [],
      popular: false,
      ctaText: 'Request Demo',
      ctaVariant: 'outline' as const,
    },
  ];

  const getPrice = (plan: (typeof plans)[0]) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: (typeof plans)[0]) => {
    const monthlyTotal = plan.monthlyPrice * 12;
    const savings = monthlyTotal - plan.annualPrice;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. Start with a 14-day
            free trial, no credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-sm font-medium ${
                !isAnnual ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isAnnual ? 'bg-primary' : 'bg-muted'
              }`}
              role="switch"
              aria-checked={isAnnual}
              aria-label="Toggle annual billing"
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${
                isAnnual ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Annual
            </span>
            {isAnnual && (
              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-200">
                Save up to 25%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-primary shadow-lg scale-105 lg:scale-110'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader
                className={`text-center ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
                    : ''
                }`}
              >
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {plan.description}
                </CardDescription>

                <div className="mt-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl lg:text-5xl font-bold">
                      ${getPrice(plan)}
                    </span>
                    <span className="text-muted-foreground">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  {isAnnual && (
                    <div className="mt-2 text-sm text-green-600 dark:text-green-400">
                      Save {getSavings(plan)}% annually
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <li
                      key={`limitation-${limitationIndex}`}
                      className="flex items-start gap-3 opacity-50"
                    >
                      <XIcon className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground line-through">
                        {limitation}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full text-lg py-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg'
                      : ''
                  }`}
                  variant={plan.ctaVariant}
                  size="lg"
                >
                  {plan.ctaText === 'Start Free Trial' ? (
                    <>
                      <CalendarIcon className="mr-2 h-5 w-5" />
                      {plan.ctaText}
                    </>
                  ) : (
                    <>
                      <SparklesIcon className="mr-2 h-5 w-5" />
                      {plan.ctaText}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <CheckIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">14-Day Free Trial</h3>
              <p className="text-sm text-muted-foreground">
                No credit card required. Cancel anytime.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <UsersIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Migration Support</h3>
              <p className="text-sm text-muted-foreground">
                Free data migration from your current system.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <CreditCardIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">No Setup Fees</h3>
              <p className="text-sm text-muted-foreground">
                Get started immediately with no hidden costs.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">
              Enterprise Solutions
            </h3>
            <p className="text-muted-foreground mb-6">
              Need custom features, multiple locations, or dedicated
              support? We offer tailored solutions for enterprise
              businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  <UsersIcon className="mr-2 h-5 w-5" />
                  Contact Sales
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ROI Calculator Component
function ROICalculator() {
  const [bookingsPerMonth, setBookingsPerMonth] = useState(100);
  const [averageBookingValue, setAverageBookingValue] = useState(75);

  // ROI Calculations based on Bookwise benefits
  const noShowReduction = 0.6; // 60% reduction in no-shows
  const utilizationIncrease = 0.35; // 35% increase in staff utilization
  const monthlyBookwiseCost = 79; // Professional plan

  // Current state calculations (traditional booking)
  const currentNoShowRate = 0.25; // 25% no-show rate
  const currentNoShows = bookingsPerMonth * currentNoShowRate;
  const currentRevenue = bookingsPerMonth * averageBookingValue;
  const currentLostRevenue = currentNoShows * averageBookingValue;

  // With Bookwise calculations
  const newNoShowRate = currentNoShowRate * (1 - noShowReduction);
  const newNoShows = bookingsPerMonth * newNoShowRate;
  const additionalBookings = bookingsPerMonth * utilizationIncrease;
  const totalBookingsWithBookwise = bookingsPerMonth + additionalBookings;
  const newRevenue = totalBookingsWithBookwise * averageBookingValue;
  const revenueFromReducedNoShows =
    (currentNoShows - newNoShows) * averageBookingValue;

  // ROI calculations
  const monthlyRevenueIncrease =
    newRevenue - currentRevenue + revenueFromReducedNoShows;
  const netMonthlyGain = monthlyRevenueIncrease - monthlyBookwiseCost;
  const annualNetGain = netMonthlyGain * 12;
  const roiPercentage =
    ((monthlyRevenueIncrease - monthlyBookwiseCost) /
      monthlyBookwiseCost) *
    100;

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="bookings" className="text-sm font-medium">
            Average Bookings per Month
          </Label>
          <Input
            id="bookings"
            type="number"
            value={bookingsPerMonth}
            onChange={(e) =>
              setBookingsPerMonth(Number(e.target.value) || 0)
            }
            className="text-lg"
            min="1"
            max="10000"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="value" className="text-sm font-medium">
            Average Booking Value ($)
          </Label>
          <Input
            id="value"
            type="number"
            value={averageBookingValue}
            onChange={(e) =>
              setAverageBookingValue(Number(e.target.value) || 0)
            }
            className="text-lg"
            min="1"
            max="10000"
          />
        </div>
      </div>

      {/* Results Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Monthly Revenue Increase */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <TrendingUpIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                Monthly Revenue Increase
              </div>
            </div>
          </div>
          <div className="text-2xl font-bold text-green-800 dark:text-green-200">
            ${monthlyRevenueIncrease.toLocaleString()}
          </div>
          <div className="text-xs text-green-600 dark:text-green-400 mt-1">
            From reduced no-shows + more bookings
          </div>
        </div>

        {/* Net Monthly Profit */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <DollarSignIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                Net Monthly Profit
              </div>
            </div>
          </div>
          <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">
            ${netMonthlyGain.toLocaleString()}
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
            After Bookwise subscription cost
          </div>
        </div>

        {/* ROI Percentage */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <SparklesIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                Monthly ROI
              </div>
            </div>
          </div>
          <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">
            {roiPercentage.toFixed(0)}%
          </div>
          <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">
            Return on investment
          </div>
        </div>
      </div>

      {/* Annual Summary */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">
            Annual Impact
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">
            ${annualNetGain.toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">
            Additional profit per year with Bookwise
          </div>
        </div>
      </div>

      {/* Breakdown Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">
            Current Situation
          </h4>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex justify-between">
              <span>Monthly bookings:</span>
              <span>{bookingsPerMonth.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>No-shows (25%):</span>
              <span>{currentNoShows.toFixed(0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Lost revenue:</span>
              <span>${currentLostRevenue.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">With Bookwise</h4>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex justify-between">
              <span>Total bookings:</span>
              <span>{totalBookingsWithBookwise.toFixed(0)}</span>
            </div>
            <div className="flex justify-between">
              <span>No-shows (10%):</span>
              <span>{newNoShows.toFixed(0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Monthly cost:</span>
              <span>${monthlyBookwiseCost}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-6 border-t border-border">
        <p className="text-muted-foreground mb-4">
          Ready to achieve these results for your business?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="px-8">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" className="px-8" asChild>
            <Link href="/demo">Schedule Demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Animated SVG Product Demo Component
function AnimatedProductDemo() {
  return (
    <div className="relative max-w-2xl mx-auto mt-12 lg:mt-0">
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
        {/* Mobile Phone Frame */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 relative overflow-hidden">
          {/* Animated Background Dots */}
          <div className="absolute inset-0">
            <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-6 left-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-700"></div>
          </div>

          {/* Booking Interface Mockup */}
          <div className="relative z-10 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <CalendarIcon className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Bookwise
                </div>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-150"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-3">
                Select your time
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  '9:00 AM',
                  '11:30 AM',
                  '2:00 PM',
                  '3:30 PM',
                  '5:00 PM',
                  '6:30 PM',
                ].map((time, index) => (
                  <div
                    key={time}
                    className={`text-xs p-2 rounded text-center transition-all duration-500 ${
                      index === 1
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                    style={{
                      animationDelay: `${index * 200}ms`,
                      animation:
                        index === 1 ? 'pulse 2s infinite' : undefined,
                    }}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>

            {/* Service Selection */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-3">
                Service Details
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Premium Haircut
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    60 min • $85
                  </div>
                </div>
                <div className="animate-bounce">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </div>

            {/* Payment Processing */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                    <CreditCardIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-900 dark:text-gray-100">
                      Payment Secured
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Stripe • ••••1234
                    </div>
                  </div>
                </div>
                <div className="text-xs font-semibold text-green-600 dark:text-green-400">
                  $85.00
                </div>
              </div>
            </div>

            {/* Confirmation with animations */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                <div className="text-xs font-semibold text-green-800 dark:text-green-200">
                  Booking Confirmed!
                </div>
              </div>
              <div className="text-xs text-green-700 dark:text-green-300">
                Nov 24, 2024 at 11:30 AM • Confirmation sent
              </div>
            </div>
          </div>

          {/* Floating notification badges */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
            <BellIcon className="w-3 h-3" />
          </div>
          <div className="absolute -bottom-2 -left-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center animate-bounce">
            <SmartphoneIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Floating elements around the demo */}
        <div className="absolute -top-4 left-1/4 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center animate-float">
          <ClockIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="absolute -bottom-4 right-1/4 w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center animate-float-delayed">
          <UsersIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Bookwise</div>
        <div className="flex items-center space-x-4">
          <Link
            href="/demo"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Demo
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="block">Transform Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Booking Business
                </span>
                <span className="block">with AI Power</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl lg:max-w-none">
                Reduce no-shows by{' '}
                <span className="font-semibold text-green-600">60%</span>,
                maximize staff utilization by{' '}
                <span className="font-semibold text-blue-600">35%</span>,
                and automate your entire booking workflow with our
                intelligent platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CalendarIcon className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 hover:bg-muted/50 transition-all duration-300"
                asChild
              >
                <Link href="/demo">
                  <SparklesIcon className="mr-2 h-5 w-5" />
                  Watch Demo
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Trusted by 10,000+ businesses worldwide
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-6 opacity-60">
                <div className="text-xs font-medium">
                  Beauty & Wellness
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <div className="text-xs font-medium">
                  Professional Services
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <div className="text-xs font-medium">
                  Events & Activities
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Product Demo */}
          <div className="order-first lg:order-last">
            <AnimatedProductDemo />
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="border-b bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Client Logo Cloud */}
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-8">
              Trusted by industry leaders and growing businesses worldwide
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-5xl mx-auto">
              {/* Client Logo Placeholders */}
              <div className="flex items-center justify-center h-12 w-24 bg-muted/50 rounded-lg border border-border/50 hover:border-border transition-colors">
                <div className="text-xs font-semibold text-muted-foreground">
                  SalonPro
                </div>
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-muted/50 rounded-lg border border-border/50 hover:border-border transition-colors">
                <div className="text-xs font-semibold text-muted-foreground">
                  FitStudio
                </div>
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-muted/50 rounded-lg border border-border/50 hover:border-border transition-colors">
                <div className="text-xs font-semibold text-muted-foreground">
                  WellnessHub
                </div>
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-muted/50 rounded-lg border border-border/50 hover:border-border transition-colors">
                <div className="text-xs font-semibold text-muted-foreground">
                  TherapyPlus
                </div>
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-muted/50 rounded-lg border border-border/50 hover:border-border transition-colors">
                <div className="text-xs font-semibold text-muted-foreground">
                  EventCo
                </div>
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-muted/50 rounded-lg border border-border/50 hover:border-border transition-colors">
                <div className="text-xs font-semibold text-muted-foreground">
                  CoachSpace
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {/* Security Badge */}
            <div className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-green-800 dark:text-green-200">
                  SOC 2 Compliant
                </div>
                <div className="text-xs text-green-600 dark:text-green-400">
                  Enterprise Security
                </div>
              </div>
            </div>

            {/* Reviews Badge */}
            <div className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
                  4.9/5 Rating
                </div>
                <div className="text-xs text-yellow-600 dark:text-yellow-400">
                  2,500+ Reviews
                </div>
              </div>
            </div>

            {/* Uptime Badge */}
            <div className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                  99.9% Uptime
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400">
                  Always Available
                </div>
              </div>
            </div>

            {/* Support Badge */}
            <div className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-purple-800 dark:text-purple-200">
                  24/7 Support
                </div>
                <div className="text-xs text-purple-600 dark:text-purple-400">
                  Expert Help
                </div>
              </div>
            </div>
          </div>

          {/* Additional Trust Metrics */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">
                  10,000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Active Businesses
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">
                  5M+
                </div>
                <div className="text-sm text-muted-foreground">
                  Bookings Processed
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">
                  $50M+
                </div>
                <div className="text-sm text-muted-foreground">
                  Revenue Facilitated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="container mx-auto px-4 py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline your entire booking workflow with our comprehensive
            suite of intelligent tools
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Smart Scheduling Card */}
          <Card className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <CalendarIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    AI-Powered Smart Scheduling
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Our intelligent scheduling engine learns from your
                    booking patterns to automatically optimize appointment
                    slots, prevent conflicts, and maximize your daily
                    capacity. No more double bookings or wasted time slots.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <CheckIcon className="w-4 h-4" />
                      <span>Automatic conflict detection</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <CheckIcon className="w-4 h-4" />
                      <span>Optimal time recommendations</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <CheckIcon className="w-4 h-4" />
                      <span>Real-time availability sync</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Automated Payments Card */}
          <Card className="border-2 hover:border-green-200 dark:hover:border-green-800 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <CreditCardIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    Seamless Payment Processing
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Accept payments effortlessly with our integrated
                    Stripe-powered system. Handle deposits, full payments,
                    tips, and refunds automatically. Your customers can pay
                    securely online, and you get paid faster.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <CheckIcon className="w-4 h-4" />
                      <span>Automatic payment collection</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <CheckIcon className="w-4 h-4" />
                      <span>Integrated tip handling</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <CheckIcon className="w-4 h-4" />
                      <span>Instant refund processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smart Automations Card */}
          <Card className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <BellIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    Intelligent Communication Hub
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Reduce no-shows by 60% with our smart reminder system.
                    Automated SMS and email sequences keep customers
                    informed, while follow-up campaigns drive rebookings
                    and collect valuable feedback.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                      <CheckIcon className="w-4 h-4" />
                      <span>Multi-channel reminders</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                      <CheckIcon className="w-4 h-4" />
                      <span>Automated follow-ups</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                      <CheckIcon className="w-4 h-4" />
                      <span>Customizable templates</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analytics & Insights Card */}
          <Card className="border-2 hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    Advanced Business Analytics
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Make data-driven decisions with comprehensive insights
                    into your business performance. Track revenue, monitor
                    staff utilization, analyze customer behavior, and
                    forecast demand with precision.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                      <CheckIcon className="w-4 h-4" />
                      <span>Real-time dashboards</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                      <CheckIcon className="w-4 h-4" />
                      <span>Revenue forecasting</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                      <CheckIcon className="w-4 h-4" />
                      <span>Customer insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to experience the future of booking management?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Start Your Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <Link href="/demo">
                <SparklesIcon className="mr-2 h-5 w-5" />
                See Live Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Setting up your intelligent booking system is simple. Follow
              these three easy steps and start accepting bookings today.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Step 1: Setup */}
              <div className="relative">
                {/* Step Number */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg relative">
                    <span className="text-2xl font-bold text-white">
                      1
                    </span>
                    {/* Connector Line - Hidden on mobile, shown on desktop */}
                    <div className="hidden lg:block absolute left-full top-1/2 w-12 h-0.5 bg-border transform -translate-y-1/2 ml-4"></div>
                  </div>
                </div>

                {/* Content Card */}
                <Card className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      Setup Your Business
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Add your services, set your availability, configure
                      pricing, and customize your booking preferences. Our
                      smart setup wizard guides you through every step.
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        ⚡ Takes less than 5 minutes
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2: Share */}
              <div className="relative">
                {/* Step Number */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg relative">
                    <span className="text-2xl font-bold text-white">
                      2
                    </span>
                    {/* Connector Line - Hidden on mobile, shown on desktop */}
                    <div className="hidden lg:block absolute left-full top-1/2 w-12 h-0.5 bg-border transform -translate-y-1/2 ml-4"></div>
                  </div>
                </div>

                {/* Content Card */}
                <Card className="border-2 hover:border-green-200 dark:hover:border-green-800 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-green-600 dark:text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      Share Your Link
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Get your personalized booking link instantly. Share
                      it on your website, social media, email signature, or
                      send it directly to customers. Works perfectly on all
                      devices.
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                        🔗 Custom branded URL available
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3: Manage */}
              <div className="relative">
                {/* Step Number */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      3
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <Card className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-purple-600 dark:text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      Manage Bookings
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Watch bookings flow in automatically. Manage your
                      schedule, process payments, send reminders, and track
                      analytics from one powerful dashboard. Everything is
                      automated.
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                        📱 Mobile app coming soon
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 px-6 py-4 rounded-xl border border-green-200 dark:border-green-800">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-green-800 dark:text-green-200">
                    That&apos;s it! You&apos;re ready to grow your business
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400">
                    Join thousands of businesses already using Bookwise
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="text-center mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  Start Your Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8"
                  asChild
                >
                  <Link href="/demo">
                    <SparklesIcon className="mr-2 h-5 w-5" />
                    See How It Works
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Loved by Thousands of Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Bookwise has transformed booking experiences and
            boosted revenue for businesses just like yours
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;Bookwise reduced our no-shows by 75% and increased
                  our monthly revenue by $12,000. The AI scheduling is
                  incredible - it knows exactly when to fit appointments
                  for maximum efficiency.&rdquo;
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Sarah Martinez
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Owner, Luxe Beauty Salon
                    </div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-4"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Watch Video Testimonial
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>
                        Sarah Martinez - Luxe Beauty Salon
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <svg
                            className="w-16 h-16 mx-auto mb-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p>Video testimonial coming soon</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Results achieved:</strong> 75% reduction in
                        no-shows, $12,000 monthly revenue increase, 40%
                        improvement in staff efficiency
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;As a financial advisor, every minute counts.
                  Bookwise automated my entire scheduling process and freed
                  up 15 hours per week. My clients love the seamless
                  booking experience.&rdquo;
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                    DJ
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      David Johnson
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Senior Financial Advisor
                    </div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-4"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Watch Video Testimonial
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>
                        David Johnson - Senior Financial Advisor
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <svg
                            className="w-16 h-16 mx-auto mb-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p>Video testimonial coming soon</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Results achieved:</strong> 15 hours per
                        week saved, 90% client satisfaction increase, 50%
                        more appointments booked
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;Our yoga studio went from paper schedules to a
                  fully automated system. Class bookings increased 200% and
                  our retention rate improved dramatically with the smart
                  reminder system.&rdquo;
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    ER
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Emily Rodriguez
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Founder, Zen Flow Studio
                    </div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-4"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Watch Video Testimonial
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>
                        Emily Rodriguez - Zen Flow Studio
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <svg
                            className="w-16 h-16 mx-auto mb-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p>Video testimonial coming soon</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Results achieved:</strong> 200% increase in
                        class bookings, 85% improvement in retention rate,
                        60% reduction in administrative time
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;The automated payment processing alone saved us 20
                  hours per month. Our clients love being able to book and
                  pay instantly. Revenue is up 45% since switching to
                  Bookwise.&rdquo;
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                    MT
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Michael Thompson
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Owner, Elite Personal Training
                    </div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-4"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Watch Video Testimonial
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>
                        Michael Thompson - Elite Personal Training
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <svg
                            className="w-16 h-16 mx-auto mb-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p>Video testimonial coming soon</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Results achieved:</strong> 45% revenue
                        increase, 20 hours per month saved, 95% client
                        payment automation
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Testimonial 5 */}
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;We&apos;ve tried other booking systems, but none
                  come close to Bookwise. The AI insights helped us
                  optimize our pricing and increase our average booking
                  value by 30%.&rdquo;
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold">
                    LC
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Lisa Chen
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Director, Serenity Spa
                    </div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-4"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Watch Video Testimonial
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Lisa Chen - Serenity Spa</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <svg
                            className="w-16 h-16 mx-auto mb-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p>Video testimonial coming soon</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Results achieved:</strong> 30% increase in
                        average booking value, 65% improvement in customer
                        satisfaction, AI-driven pricing optimization
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Testimonial 6 */}
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;The integration with our existing systems was
                  seamless. Bookwise handles everything from scheduling to
                  payments to follow-ups. It&apos;s like having a full-time
                  assistant.&rdquo;
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
                    RK
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Robert Kim
                    </div>
                    <div className="text-sm text-muted-foreground">
                      CEO, TechConsult Pro
                    </div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-4"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Watch Video Testimonial
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>
                        Robert Kim - TechConsult Pro
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <svg
                            className="w-16 h-16 mx-auto mb-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p>Video testimonial coming soon</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Results achieved:</strong> Seamless system
                        integration, 100% automation of booking workflow,
                        equivalent to full-time assistant value
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Them?</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Start your free trial today and see why thousands of businesses
            trust Bookwise to grow their revenue and streamline their
            operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <CalendarIcon className="mr-2 h-5 w-5" />
              Start Free Trial - No Credit Card Required
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <Link href="/demo">
                <SparklesIcon className="mr-2 h-5 w-5" />
                Schedule a Personal Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Comparison & ROI Calculator */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Comparison Table */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose AI-Powered Booking?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the clear difference between outdated traditional systems
              and our intelligent booking platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Traditional Booking Column */}
              <Card className="border-2 border-red-200 dark:border-red-800">
                <CardHeader className="text-center bg-red-50 dark:bg-red-900/20">
                  <CardTitle className="flex items-center justify-center gap-3 text-red-700 dark:text-red-300">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <XIcon className="w-5 h-5 text-white" />
                    </div>
                    Traditional Booking
                  </CardTitle>
                  <CardDescription className="text-red-600 dark:text-red-400">
                    Outdated, manual, inefficient
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <XIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Manual phone and email scheduling
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      High no-show rates (20-30%)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Double bookings and conflicts
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Manual payment collection
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Time-consuming administration
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Limited business insights
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Poor customer experience
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* AI-Powered Booking Column */}
              <Card className="border-2 border-green-200 dark:border-green-800 shadow-lg">
                <CardHeader className="text-center bg-green-50 dark:bg-green-900/20">
                  <CardTitle className="flex items-center justify-center gap-3 text-green-700 dark:text-green-300">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <SparklesIcon className="w-5 h-5 text-white" />
                    </div>
                    AI-Powered Booking
                  </CardTitle>
                  <CardDescription className="text-green-600 dark:text-green-400">
                    Smart, automated, profitable
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Intelligent automated scheduling
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      60% reduction in no-shows
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Conflict-free smart scheduling
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Automated payment processing
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      35% increase in staff utilization
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Advanced analytics & insights
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Exceptional customer experience
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Calculate Your ROI
              </h3>
              <p className="text-muted-foreground">
                See how much you could save and earn with Bookwise
              </p>
            </div>

            <Card className="border-2 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-8">
                <ROICalculator />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Proven Results That Drive Growth
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how Bookwise transforms businesses with measurable
              improvements
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                60%
              </div>
              <div className="text-sm lg:text-base text-muted-foreground">
                Reduction in No-Shows
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                35%
              </div>
              <div className="text-sm lg:text-base text-muted-foreground">
                Increase in Staff Utilization
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
                100%
              </div>
              <div className="text-sm lg:text-base text-muted-foreground">
                Automated Payments
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">
                &lt;30s
              </div>
              <div className="text-sm lg:text-base text-muted-foreground">
                Booking Completion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Walkthrough */}
      <ProductWalkthrough />

      {/* Pricing Section */}
      <PricingSection />

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Built with{' '}
              <Link href="/demo" className="text-primary hover:underline">
                shadcn/ui
              </Link>
              , Next.js 15, and Tailwind CSS
            </p>
            <p className="mt-2">
              © 2024 Bookwise. Revolutionizing appointment scheduling with
              AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
