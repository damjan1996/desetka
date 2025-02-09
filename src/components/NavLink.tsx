// components/NavLink.tsx
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import React from 'react'

interface NavLinkProps {
    to: string
    icon: React.ReactNode
    label: string
    onClick?: () => void
    className?: string
}

export function NavLink({ to, icon, label, onClick, className }: NavLinkProps) {
    const location = useLocation()
    const isActive = location.pathname === to

    return (
        <Link
            to={to}
            onClick={onClick}
            className={`
        relative flex items-center gap-2 rounded-full py-2 px-4
        transition-all duration-200 ease-in-out
        ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-800/30'}
        ${className}
      `}
        >
            {icon}
            <span className="text-sm tracking-wide">{label}</span>
            {isActive && (
                <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full bg-zinc-800/50 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    }}
                />
            )}
        </Link>
    )
}