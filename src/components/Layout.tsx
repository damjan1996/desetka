// components/Layout.tsx
import { useEffect, useState, ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, BookOpen, Phone, LayoutDashboard } from "lucide-react";
import { supabase } from "../utils/supabaseClient";
import { ContactInfo } from "./ContactInfo";
import { NavLink } from "./NavLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Memoized toggle function
  const toggleMenu = useCallback((force?: boolean) => {
    setIsOpen(prev => typeof force === 'boolean' ? force : !prev);
  }, []);

  // Route change handler
  useEffect(() => {
    toggleMenu(false);
  }, [location.pathname, toggleMenu]);

  // Scroll lock effect
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      const scrollY = window.scrollY;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
      body.style.overflow = 'hidden';
    } else {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const checkAdmin = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error checking admin status:", error);
        return;
      }
      if (data.session) {
        const { user } = data.session;
        const { data: adminData, error: adminError } = await supabase
            .from("profiles")
            .select("isAdmin")
            .eq("id", user.id)
            .single();
        if (adminError) {
          console.error("Error checking admin role:", adminError);
          return;
        }
        setIsAdmin(adminData.isAdmin);
      }
    };
    checkAdmin();

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { path: "/", label: t("navigation.main.home"), icon: <Home className="h-5 w-5" /> },
    { path: "/about", label: t("navigation.main.about"), icon: <User className="h-5 w-5" /> },
    { path: "/portfolio", label: t("navigation.main.portfolio"), icon: <Briefcase className="h-5 w-5" /> },
    { path: "/blog", label: t("navigation.main.blog"), icon: <BookOpen className="h-5 w-5" /> },
    { path: "/contact", label: t("navigation.main.contact"), icon: <Phone className="h-5 w-5" /> },
    ...(isAdmin
        ? [
          {
            path: "/dashboard",
            label: t("navigation.admin.dashboard"),
            icon: <LayoutDashboard className="h-5 w-5" />,
          },
        ]
        : []),
  ];

  return (
      <div className="min-h-screen bg-zinc-900 flex flex-col">
        <nav
            className={`
          fixed w-full z-[80] transition-all duration-300
          ${scrolled
                ? "bg-zinc-900/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/80"
                : "bg-transparent"
            }
        `}
            role="navigation"
            aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2 group shrink-0">
                <motion.img
                    src="/logo.png"
                    alt=""
                    className="h-8 w-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </Link>
              <div className="hidden md:flex items-center gap-2">
                {navigationLinks.map(({ path, label, icon }) => (
                    <NavLink key={path} to={path} icon={icon} label={label} className="text-sm" />
                ))}
                <div className="ml-4 text-zinc-400 pl-2 border-l border-zinc-700">
                  <LanguageSwitcher />
                </div>
              </div>
              <motion.button
                  className="md:hidden relative z-[85] p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                  onClick={() => toggleMenu()}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
                <>
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="fixed inset-0 bg-black/50 md:hidden z-[75]"
                      onClick={() => toggleMenu(false)}
                  />
                  <motion.div
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="fixed right-0 top-0 h-full w-80 bg-zinc-900 shadow-xl md:hidden overflow-y-auto border-l border-zinc-800 z-[75]"
                  >
                    <div className="flex flex-col h-full pt-16">
                      <div className="flex-1 overflow-y-auto">
                        <ContactInfo />
                        <div className="py-4 px-4">
                          {navigationLinks.map(({ path, label, icon }) => (
                              <NavLink
                                  key={path}
                                  to={path}
                                  icon={icon}
                                  label={label}
                                  onClick={() => toggleMenu(false)}
                                  className="flex items-center w-full mb-1"
                              />
                          ))}
                        </div>
                      </div>
                      <div className="border-t border-zinc-800 p-6 mt-auto">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-500">Sprache ändern</span>
                          <LanguageSwitcher />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </>
            )}
          </AnimatePresence>
        </nav>
        {children}
      </div>
  );
};

export default Layout;