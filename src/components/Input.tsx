// Input.tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', error, ...props }, ref) => {
        return (
            <div className="w-full">
                <input
                    className={`w-full h-12 bg-zinc-900/50 border border-white/10 rounded-lg px-4 text-white 
            placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all
            disabled:opacity-50 disabled:cursor-not-allowed ${error ? 'border-red-500' : ''} ${className}`}
                    ref={ref}
                    {...props}
                />
                {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input';