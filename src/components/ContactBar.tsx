"use client"

import { Phone, Mail, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function ContactBar() {
    return (
        <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="bg-gradient-to-r from-cyan-900 to-slate-900 text-white py-2 px-4"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-6 text-sm">
                    <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                        <Phone className="h-4 w-4" />
                        <span>+1 234 567 890</span>
                    </a>
                    <a
                        href="mailto:info@damjan-savic.com"
                        className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
                    >
                        <Mail className="h-4 w-4" />
                        <span>info@damjan-savic.com</span>
                    </a>
                </div>
                <Link to="/contact" className="flex items-center space-x-1 text-sm hover:text-cyan-400 transition-colors group">
                    <span>Contact Us</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    )
}

