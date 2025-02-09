// Alert.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

interface AlertProps {
    variant?: 'success' | 'error';
    children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ variant = 'success', children }) => {
    const variants = {
        success: {
            bg: 'bg-primary/10',
            border: 'border-primary',
            text: 'text-primary',
            icon: <CheckCircle2 className="h-5 w-5" />
        },
        error: {
            bg: 'bg-red-500/10',
            border: 'border-red-500',
            text: 'text-red-400',
            icon: <XCircle className="h-5 w-5" />
        }
    };

    const style = variants[variant];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${style.bg} ${style.border} ${style.text} border rounded-lg p-4 flex items-start space-x-3`}
        >
            <span className="flex-shrink-0">{style.icon}</span>
            <div className="flex-1">{children}</div>
        </motion.div>
    );
};

export const AlertDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="text-sm">{children}</div>;
};