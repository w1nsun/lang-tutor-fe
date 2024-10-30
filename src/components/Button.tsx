import './Button.css';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const buttonVariants = cva(
  'btn inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-blue-700 text-white hover:bg-blue-600',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline:
          'bg-transparent text-blue-700 border-2 border-blue-700 hover:bg-blue-100',
        subtle: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
        ghost: 'bg-transparent hover:bg-slate-100',
        link: 'bg-transparent underline-offset-4 hover:underline text-blue-700 hover:bg-transparent',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          to={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
