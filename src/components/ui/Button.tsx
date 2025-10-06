import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    'disabled:pointer-events-none disabled:opacity-50',
                    {
                        // Variants
                        'bg-gray-700 text-gray-100 hover:bg-gray-600': variant === 'default',
                        'bg-primary text-white hover:bg-primary/90': variant === 'primary',
                        'bg-gray-800 text-gray-200 hover:bg-gray-700': variant === 'secondary',
                        'border-2 border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800':
                            variant === 'outline',
                        'bg-transparent text-gray-400 hover:bg-gray-800 hover:text-gray-200':
                            variant === 'ghost',
                        // Sizes
                        'h-9 px-3 text-sm': size === 'sm',
                        'h-11 px-6 text-base': size === 'md',
                        'h-14 px-8 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button };
export default Button;