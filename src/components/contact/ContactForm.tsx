'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send, Check } from 'lucide-react';
import { useTranslations } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function ContactForm() {
    const t = useTranslations();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <section className="min-h-screen pt-6 pb-12 sm:pt-8 sm:pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-bold text-zinc-900 mb-4">{t.contact.title}</h1>
                    <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                        {t.contact.subtitle}
                    </p>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-zinc-900 mb-4">{t.contact.connect_title}</h2>
                            <p className="text-zinc-700 leading-relaxed">
                                {t.contact.connect_description}
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-6">
                            <a
                                href="mailto:info@desetka.net"
                                className="flex items-center gap-4 p-4 bg-white/80 rounded-xl border border-zinc-200 hover:border-neon-green/30 transition-all group shadow-sm hover:shadow-md"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-zinc-900 font-medium">Email</p>
                                    <p className="text-zinc-600 text-sm">info@desetka.net</p>
                                </div>
                            </a>

                            <a
                                href="https://instagram.com/desetkanakvadrat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-white/80 rounded-xl border border-zinc-200 hover:border-neon-green/30 transition-all group shadow-sm hover:shadow-md"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-zinc-900 font-medium">Instagram</p>
                                    <p className="text-zinc-600 text-sm">@desetkanakvadrat</p>
                                </div>
                            </a>

                            <a
                                href="https://soundcloud.com/desetka"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-white/80 rounded-xl border border-zinc-200 hover:border-neon-green/30 transition-all group shadow-sm hover:shadow-md"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <div className="w-6 h-6 relative">
                                        <Image
                                            src="/images/soundcloud.webp"
                                            alt="SoundCloud"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-zinc-900 font-medium">SoundCloud</p>
                                    <p className="text-zinc-600 text-sm">@desetka</p>
                                </div>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 border-t border-zinc-200">
                            <p className="text-zinc-600 text-sm mb-4">{t.contact.follow_me}</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://tiktok.com/@desetkanakvadrat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/80 rounded-xl border border-zinc-200 hover:border-neon-green/30 text-zinc-700 hover:text-zinc-900 transition-all shadow-sm hover:shadow-md"
                                >
                                    TikTok
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UC9AeInN2ozgSTm8-LLZBDhg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/80 rounded-xl border border-zinc-200 hover:border-neon-green/30 text-zinc-700 hover:text-zinc-900 transition-all shadow-sm hover:shadow-md"
                                >
                                    YouTube
                                </a>
                                <a
                                    href="https://spotify.com/artist/desetka"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/80 rounded-xl border border-zinc-200 hover:border-neon-green/30 text-zinc-700 hover:text-zinc-900 transition-all shadow-sm hover:shadow-md"
                                >
                                    Spotify
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-zinc-900 font-medium mb-2">
                                    {t.contact.name}
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-900 placeholder:text-zinc-400 focus:border-primary focus:outline-none transition-colors shadow-sm"
                                        placeholder={t.contact.name_placeholder}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-zinc-900 font-medium mb-2">
                                    {t.contact.email}
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-900 placeholder:text-zinc-400 focus:border-primary focus:outline-none transition-colors shadow-sm"
                                        placeholder={t.contact.email_placeholder}
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-zinc-900 font-medium mb-2">
                                    {t.contact.subject}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-900 placeholder:text-zinc-400 focus:border-primary focus:outline-none transition-colors shadow-sm"
                                    placeholder={t.contact.subject_placeholder}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-zinc-900 font-medium mb-2">
                                    {t.contact.message}
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-zinc-400" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full pl-12 pr-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-900 placeholder:text-zinc-400 focus:border-primary focus:outline-none transition-colors resize-none shadow-sm"
                                        placeholder={t.contact.message_placeholder}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting || isSubmitted}
                                className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                                    isSubmitted ? 'bg-green-600 text-white' : 'bg-primary hover:bg-primary/90 text-white'
                                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>{t.contact.sending}</span>
                                    </>
                                ) : isSubmitted ? (
                                    <>
                                        <Check className="w-5 h-5" />
                                        <span>{t.contact.sent}</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>{t.contact.send}</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
