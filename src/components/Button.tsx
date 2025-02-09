// Button.tsx
import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
         className = '',
         variant = 'default',
         size = 'md',
         isLoading,
         leftIcon,
         rightIcon,
         children,
         disabled,
         ...props
     }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            default: 'bg-primary text-white hover:bg-primary/90',
            outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
            ghost: 'text-primary hover:bg-primary/10'
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-12 px-6 text-base',
            lg: 'h-14 px-8 text-lg'
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                disabled={isLoading || disabled}
                {...props}
            >
                {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                    <>
                        {leftIcon && <span className="mr-2">{leftIcon}</span>}
                        {children}
                        {rightIcon && <span className="ml-2">{rightIcon}</span>}
                    </>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';