'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Music2, Home, User, BookOpen, Mail, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
    isOpen: boolean;
    onClose?: () => void;
}

const menuLinks = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'About Me', href: '/about', icon: User },
    { label: 'Music', href: '/music', icon: Music2 },
    { label: 'Blog', href: '/blog', icon: BookOpen },
    { label: 'Contact', href: '/contact', icon: Mail },
    { label: 'LinkTree', href: '/linktree', icon: ExternalLink },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                        onClick={() => onClose?.()}
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-zinc-950 z-50 overflow-y-auto"
                    >
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
                                <span className="text-xl font-bold text-white">Menu</span>
                                <button
                                    onClick={() => onClose?.()}
                                    className="p-2 text-zinc-400 hover:text-white transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Top Links - YouTube Music & SoundCloud */}
                            <div className="p-6 space-y-3">
                                <a
                                    href="https://www.youtube.com/channel/UC9AeInN2ozgSTm8-LLZBDhg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                                    onClick={() => onClose?.()}
                                >
                                    <span className="font-semibold">10TV</span>
                                    <span className="text-sm">YouTube Music</span>
                                </a>

                                {/* SoundCloud Logo/Link - Center */}
                                <a
                                    href="https://soundcloud.com/desetka"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
                                    onClick={() => onClose?.()}
                                >
                                    <div className="relative w-12 h-12">
                                        <Image
                                            src="/images/favicon.png"
                                            alt="10KA Logo"
                                            fill
                                            className="object-contain group-hover:scale-110 transition-transform"
                                        />
                                    </div>
                                    <span className="text-zinc-400 group-hover:text-white transition-colors">
                    SoundCloud
                  </span>
                                </a>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex-1 px-6 py-4">
                                <ul className="space-y-2">
                                    {menuLinks.map((link) => {
                                        const Icon = link.icon;
                                        return (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    onClick={() => onClose?.()}
                                                    className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-300 group"
                                                >
                                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                    <span className="font-medium">{link.label}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>

                            {/* Bottom - Social Links */}
                            <div className="p-6 border-t border-zinc-800">
                                <p className="text-zinc-500 text-sm mb-3">Follow Desetka</p>
                                <div className="flex gap-3">
                                    <a
                                        href="https://www.instagram.com/desetkanakvadrat/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2 px-3 bg-zinc-800/50 text-zinc-400 rounded-lg hover:bg-zinc-800 hover:text-white transition-all text-center text-sm"
                                        onClick={() => onClose?.()}
                                    >
                                        Instagram
                                    </a>
                                    <a
                                        href="https://www.tiktok.com/@desetkanakvadrat"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2 px-3 bg-zinc-800/50 text-zinc-400 rounded-lg hover:bg-zinc-800 hover:text-white transition-all text-center text-sm"
                                        onClick={() => onClose?.()}
                                    >
                                        TikTok
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}