"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslations } from "@/contexts/LanguageContext";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const firstLinkRef = useRef<HTMLAnchorElement>(null);
    const t = useTranslations();

    const navLinks = [
        { label: t.nav.home, href: "/" },
        { label: t.nav.about, href: "/about" },
        { label: t.nav.music, href: "/music" },
        { label: t.nav.blog, href: "/blog" },
        { label: t.nav.contact, href: "/contact" },
    ];

    // Header shadow / glass on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close drawer on route change
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // ESC to close + body scroll lock
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        if (open) {
            document.addEventListener("keydown", onKey);
            const { overflow } = document.body.style;
            document.body.style.overflow = "hidden";
            // focus first focusable item for a11y
            setTimeout(() => firstLinkRef.current?.focus(), 0);
            return () => {
                document.removeEventListener("keydown", onKey);
                document.body.style.overflow = overflow;
            };
        }
    }, [open]);

    const isActive = (href: string) =>
        href === "/" ? pathname === href : pathname?.startsWith(href);

    // Animation presets
    const drawer = {
        initial: { x: "-100%", opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { type: "tween", duration: 0.28, ease: [0.2, 0.8, 0.2, 1] } },
        exit: { x: "-100%", opacity: 0, transition: { duration: 0.22 } },
    } as const;

    return (
        <>
            {/* Skip link for a11y */}
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow"
            >
                {t.hero.skip_content}
            </a>

            <header
                className={[
                    "fixed inset-x-0 top-0 z-50 transition-all duration-300",
                    scrolled
                        ? "supports-[backdrop-filter]:bg-white/65 bg-white/90 backdrop-blur-md shadow-sm"
                        : "bg-transparent",
                    "border-b border-zinc-200/60",
                ].join(" ")}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-16 flex items-center justify-between gap-6">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group" aria-label="Desetka – Startseite">
              <span className="relative block w-8 h-8">
                <Image src="/images/favicon.webp" alt="" fill className="object-contain" priority />
              </span>
                            <span className="font-semibold tracking-tight text-zinc-900 text-lg">DESETKA</span>
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden md:flex items-center gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-current={isActive(link.href) ? "page" : undefined}
                                    className={[
                                        "relative rounded-lg px-3 py-2 text-sm font-medium tracking-wide",
                                        "text-zinc-700 hover:text-zinc-900 transition-colors",
                                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                                    ].join(" ")}
                                >
                                    <span>{link.label}</span>
                                    <span
                                        className={[
                                            "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] rounded",
                                            isActive(link.href) ? "bg-primary" : "bg-zinc-900/0 group-hover:bg-zinc-900/0",
                                        ].join(" ")}
                                    />
                                    {!isActive(link.href) && (
                                        <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-[3px] h-[2px] w-0 bg-zinc-900/70 rounded transition-all duration-300 ease-out hover:w-6 md:group-hover:w-8" />
                                    )}
                                </Link>
                            ))}
                        </nav>

                        {/* Language Switcher & CTA (Desktop) */}
                        <div className="hidden md:flex items-center gap-4">
                            <LanguageSwitcher />
                            <a
                                href="https://www.youtube.com/channel/UC9AeInN2ozgSTm8-LLZBDhg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:border-primary/50 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            >
                                10TV
                            </a>
                        </div>

                        {/* Mobile toggle */}
                        <motion.button
                            onClick={() => setOpen((v) => !v)}
                            className="md:hidden p-2 rounded-lg text-zinc-700 hover:bg-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            aria-label={open ? "Menü schließen" : "Menü öffnen"}
                            aria-expanded={open}
                            aria-controls="mobile-drawer"
                            whileTap={{ scale: 0.96 }}
                        >
                            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>
            </header>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop with soft gradient + blur; safe-area aware */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-gradient-to-b from-black/50 to-black/40 supports-[backdrop-filter]:backdrop-blur-[2px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />

                        {/* Sidebar drawer */}
                        <motion.aside
                            id="mobile-drawer"
                            aria-label="Hauptnavigation"
                            role="dialog"
                            aria-modal="true"
                            className="fixed inset-y-0 left-0 z-50 w-[86vw] max-w-[360px] rounded-r-3xl border-r border-zinc-200 shadow-2xl bg-white/90 supports-[backdrop-filter]:bg-white/75 backdrop-blur-md pt-safe pb-safe"
                            variants={drawer}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <div className="px-4 sm:px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                    <span className="relative block w-8 h-8">
                      <Image src="/images/favicon.webp" alt="" fill className="object-contain" />
                    </span>
                                        <span className="font-semibold tracking-tight text-zinc-900">DESETKA</span>
                                    </Link>
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="p-2 rounded-lg text-zinc-700 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                                        aria-label="Menü schließen"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Links */}
                                <nav className="mt-4 grid gap-1">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.04 * i }}
                                        >
                                            <Link
                                                href={link.href}
                                                ref={i === 0 ? firstLinkRef : undefined}
                                                onClick={() => setOpen(false)}
                                                aria-current={isActive(link.href) ? "page" : undefined}
                                                className={[
                                                    "flex items-center justify-between rounded-xl px-4 py-4",
                                                    "text-zinc-800 transition-colors",
                                                    isActive(link.href)
                                                        ? "border border-primary/40 bg-primary/5"
                                                        : "border border-transparent hover:bg-zinc-100",
                                                ].join(" ")}
                                            >
                                                <span className="text-base font-medium">{link.label}</span>
                                                <ChevronRight className="h-4 w-4 opacity-60" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Language Switcher */}
                                <div className="mt-4 flex justify-center">
                                    <LanguageSwitcher />
                                </div>

                                {/* CTA */}
                                <div className="mt-4">
                                    <a
                                        href="https://www.youtube.com/channel/UC9AeInN2ozgSTm8-LLZBDhg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full items-center justify-center rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 hover:border-primary/50 hover:text-primary transition-colors"
                                    >
                                        10TV
                                    </a>
                                </div>

                                {/* Footer */}
                                <p className="mt-6 text-xs text-zinc-500">
                                    © {new Date().getFullYear()} DESETKA — {t.footer.rights_reserved}
                                </p>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Spacer so Content nicht unter Header klebt */}
            <div aria-hidden className="h-16" />
        </>
    );
}
