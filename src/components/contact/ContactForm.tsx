'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send, Check } from 'lucide-react';
import { useTranslations } from '@/contexts/LanguageContext';

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
        <section className="min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
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
                                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.051 0-.09.04-.099.099l-.135 1.26.135 1.223c0 .058.048.098.099.098.05 0 .093-.04.101-.098l.15-1.223-.15-1.26c0-.057-.045-.099-.1-.099m1.792-1.167c-.06 0-.107.041-.114.099l-.217 2.419.217 2.36c.008.057.054.098.114.098.057 0 .107-.041.114-.098l.241-2.36-.241-2.419c-.007-.058-.057-.099-.114-.099m.898.656c-.065 0-.115.045-.123.098l-.202 1.763.202 1.717c.008.053.058.097.123.097.058 0 .112-.044.12-.097l.225-1.717-.225-1.763c-.008-.053-.062-.098-.12-.098m.899-.077c-.068 0-.124.048-.134.104l-.189 1.84.189 1.797c.01.057.066.104.134.104.061 0 .118-.047.128-.104l.21-1.797-.21-1.84c-.01-.057-.067-.104-.128-.104m.899-.333c-.076 0-.137.055-.144.109l-.172 2.173.172 2.116c.007.053.068.108.144.108.069 0 .131-.055.139-.108l.192-2.116-.192-2.173c-.008-.054-.07-.109-.139-.109m.899.137c-.075 0-.137.058-.145.112l-.157 2.036.157 1.99c.008.054.07.112.145.112.074 0 .136-.058.143-.112l.175-1.99-.175-2.036c-.007-.054-.069-.112-.143-.112m.899.405c-.07 0-.133.062-.142.116l-.138 1.631.138 1.591c.009.054.072.115.142.115.074 0 .136-.061.145-.115l.154-1.591-.154-1.631c-.009-.054-.071-.116-.145-.116m.898.318c-.081 0-.144.066-.153.121l-.124 1.313.124 1.283c.009.054.072.12.153.12.076 0 .14-.066.15-.12l.138-1.283-.138-1.313c-.01-.055-.074-.121-.15-.121m.9.299c-.078 0-.145.069-.154.125l-.109 1.014.109.991c.009.056.076.125.154.125.081 0 .147-.069.156-.125l.121-.991-.121-1.014c-.009-.056-.075-.125-.156-.125zm8.954-.387c-.065 0-.119.042-.127.099l-.21 2.36.21 2.297c.008.057.062.099.127.099.066 0 .123-.042.13-.099l.233-2.297-.233-2.36c-.007-.057-.064-.099-.13-.099m-.9-1.277c-.062 0-.113.045-.121.104l-.229 3.637.229 3.542c.008.058.059.103.121.103.064 0 .116-.045.124-.103l.255-3.542-.255-3.637c-.008-.059-.06-.104-.124-.104m.9 6.469c-.066 0-.123.042-.13.099l-.205 2.003.205 1.952c.007.057.064.098.13.098.065 0 .119-.041.127-.098l.228-1.952-.228-2.003c-.008-.057-.062-.099-.127-.099m-1.8-7.897c-.059 0-.109.047-.116.103l-.251 5.055.251 4.922c.007.057.057.104.116.104.062 0 .113-.047.12-.104l.28-4.922-.28-5.055c-.007-.056-.058-.103-.12-.103m.9 8.03c-.062 0-.114.045-.121.104l-.233 1.971.233 1.918c.007.058.059.103.121.103.064 0 .116-.045.124-.103l.26-1.918-.26-1.971c-.008-.059-.06-.104-.124-.104m-.9-6.173c-.062 0-.114.045-.121.104l-.241 3.181.241 3.102c.007.058.059.103.121.103.063 0 .115-.045.123-.103l.268-3.102-.268-3.181c-.008-.059-.06-.104-.123-.104m-1.8-2.455c-.058 0-.107.047-.113.103l-.271 7.636.271 7.437c.006.057.055.104.113.104.06 0 .11-.047.117-.104l.3-7.437-.3-7.636c-.007-.056-.057-.103-.117-.103m.899 13.977c-.059 0-.109.047-.116.104l-.259 1.907.259 1.856c.007.057.057.103.116.103.062 0 .113-.046.12-.103l.287-1.856-.287-1.907c-.007-.057-.058-.104-.12-.104m-1.799-15.228c-.053 0-.099.049-.106.106l-.283 9.091.283 8.862c.007.057.053.106.106.106.057 0 .105-.049.112-.106l.315-8.862-.315-9.091c-.007-.057-.055-.106-.112-.106zm-10.773 15.66c-.055 0-.099.042-.106.098l-.207 1.813.207 1.77c.007.057.051.098.106.098.056 0 .102-.041.108-.098l.23-1.77-.23-1.813c-.006-.056-.052-.098-.108-.098m1.799-.83c-.058 0-.108.048-.115.104l-.228 2.643.228 2.577c.007.057.057.104.115.104.061 0 .112-.047.119-.104l.254-2.577-.254-2.643c-.007-.056-.058-.104-.119-.104m.9-2.267c-.062 0-.114.048-.121.105l-.214 4.91.214 4.786c.007.057.059.105.121.105.063 0 .116-.048.123-.105l.238-4.786-.238-4.91c-.007-.057-.06-.105-.123-.105m.899.176c-.065 0-.119.052-.127.109l-.199 4.734.199 4.619c.008.057.062.109.127.109.066 0 .123-.052.131-.109l.222-4.619-.222-4.734c-.008-.057-.065-.109-.131-.109m.9.568c-.069 0-.127.056-.135.114l-.184 4.166.184 4.062c.008.058.066.113.135.113.068 0 .126-.055.134-.113l.205-4.062-.205-4.166c-.008-.058-.066-.114-.134-.114m.899.421c-.072 0-.133.06-.141.119l-.169 3.745.169 3.648c.008.059.069.118.141.118.071 0 .132-.059.14-.118l.188-3.648-.188-3.745c-.008-.059-.069-.119-.14-.119m.9.547c-.075 0-.139.063-.146.122l-.154 3.198.154 3.114c.007.059.071.121.146.121.075 0 .138-.062.145-.121l.172-3.114-.172-3.198c-.007-.059-.07-.122-.145-.122m.899.554c-.079 0-.144.067-.151.126l-.139 2.644.139 2.577c.007.059.072.126.151.126.078 0 .143-.067.151-.126l.155-2.577-.155-2.644c-.008-.059-.073-.126-.151-.126m10.774-3.005c-.073 0-.134.064-.141.123l-.164 3.245.164 3.162c.007.058.068.122.141.122.074 0 .135-.064.143-.122l.182-3.162-.182-3.245c-.008-.059-.069-.123-.143-.123m.9-.633c-.076 0-.14.067-.147.126l-.145 3.878.145 3.777c.007.058.071.126.147.126.078 0 .143-.068.15-.126l.162-3.777-.162-3.878c-.007-.059-.072-.126-.15-.126m.899-.653c-.081 0-.149.072-.157.134l-.131 4.531.131 4.415c.008.062.076.134.157.134.082 0 .15-.072.158-.134l.146-4.415-.146-4.531c-.008-.062-.076-.134-.158-.134m.9-.676c-.085 0-.156.076-.164.141l-.116 5.207.116 5.076c.008.065.079.141.164.141.086 0 .157-.076.165-.141l.129-5.076-.129-5.207c-.008-.065-.079-.141-.165-.141m.899-.711c-.089 0-.164.08-.172.148l-.101 5.918.101 5.77c.008.068.083.148.172.148.089 0 .164-.08.173-.148l.112-5.77-.112-5.918c-.009-.068-.084-.148-.173-.148m.9-.746c-.094 0-.172.084-.18.155l-.086 6.664.086 6.495c.008.071.086.155.18.155.093 0 .171-.084.179-.155l.096-6.495-.096-6.664c-.008-.071-.086-.155-.179-.155m.899-.78c-.098 0-.179.089-.187.163l-.071 7.444.071 7.253c.008.074.089.163.187.163.098 0 .179-.089.188-.163l.079-7.253-.079-7.444c-.009-.074-.09-.163-.188-.163m.899-.817c-.103 0-.187.093-.195.171l-.056 8.261.056 8.047c.008.078.092.171.195.171.103 0 .187-.093.195-.171l.063-8.047-.063-8.261c-.008-.078-.092-.171-.195-.171" />
                                    </svg>
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
