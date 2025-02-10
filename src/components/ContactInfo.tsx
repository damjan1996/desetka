import { Phone, Mail, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="pb-6 px-6 pt-4 bg-zinc-800/30 border border-zinc-800 rounded-lg mx-4 mt-2"
        >
            <div className="space-y-4">
                <h3 className="text-sm font-medium text-white tracking-wider uppercase">
                    Kontakt
                </h3>

                <a
                    href="tel:+1234567890"
                    className="flex items-center space-x-3 text-sm text-zinc-400 hover:text-white transition-colors duration-200 group"
                >
                    <Phone className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors duration-200" />
                    <span>+1 234 567 890</span>
                </a>

                <a
                    href="mailto:info@damjan-savic.com"
                    className="flex items-center space-x-3 text-sm text-zinc-400 hover:text-white transition-colors duration-200 group"
                >
                    <Mail className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors duration-200" />
                    <span>info@damjan-savic.com</span>
                </a>

                <Link
                    to="/contact"
                    className="flex items-center justify-between mt-6 px-4 py-2 bg-zinc-800/50
                             hover:bg-zinc-800 rounded-full text-sm text-zinc-400 hover:text-white
                             transition-all duration-200 group border border-zinc-800 hover:border-zinc-700"
                >
                    <span className="tracking-wide">Kontakt aufnehmen</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
            </div>
        </motion.div>
    )
}