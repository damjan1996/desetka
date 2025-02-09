import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className = '', error, ...props }, ref) => {
        return (
            <div className="w-full">
                <textarea
                    className={`w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 
                    text-white placeholder-white/40 focus:outline-none focus:ring-2 
                    focus:ring-primary transition-all resize-none
                    disabled:opacity-50 disabled:cursor-not-allowed 
                    ${error ? 'border-red-500' : ''} 
                    ${className}`}
                    ref={ref}
                    {...props}
                />
                {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export default Textarea;