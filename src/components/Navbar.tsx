'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
    { href: '/', label: 'Home', number: '01' },
    { href: '/about', label: 'About', number: '02' },
    { href: '/projects', label: 'Projects', number: '03' },
    { href: '/gallery', label: 'Gallery', number: '04' },
    { href: '/contact', label: 'Contact', number: '05' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 w-full z-[120] transition-all duration-500 px-6 lg:px-12",
                scrolled ? "h-20 bg-white/95 backdrop-blur-md shadow-sm" : "h-24 lg:h-32 bg-transparent"
            )}>
                <div className="max-w-[1800px] mx-auto h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 z-[130]">
                        <img
                            src="/images/mb.jpeg"
                            alt="Logo"
                            className={cn("transition-all duration-500", scrolled ? "w-8 h-8 lg:w-10 lg:h-10" : "w-12 h-12 lg:w-14 lg:h-14")}
                        />
                        <div className="flex flex-col">
                            <span className={cn(
                                "font-serif tracking-[0.2em] uppercase transition-all",
                                (isOpen || !scrolled) ? "text-white" : "text-primary",
                                scrolled ? "text-base lg:text-lg" : "text-lg lg:text-xl"
                            )}>
                                Magizh
                            </span>
                            <span className={cn(
                                "text-[9px] lg:text-[11px] tracking-[0.4em] uppercase font-black -mt-0.5 lg:-mt-1 transition-colors",
                                scrolled ? "text-accent" : "text-accent/90"
                            )}>Builders</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links - Dynamic Contrast */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-[10px] uppercase tracking-[0.4em] font-bold transition-all hover:text-accent relative group",
                                    scrolled
                                        ? (pathname === link.href ? "text-primary" : "text-primary/60")
                                        : (pathname === link.href ? "text-white" : "text-white/70")
                                )}
                            >
                                {link.label}
                                <span className={cn(
                                    "absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full",
                                    pathname === link.href && "w-full"
                                )} />
                            </Link>
                        ))}
                    </div>

                    {/* Minimal Menu Toggle / Explore */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="group flex items-center gap-4 z-[130] relative"
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    >
                        <span className={cn(
                            "hidden md:block text-[10px] uppercase tracking-[0.4em] font-bold transition-all",
                            (isOpen || !scrolled) ? "text-white" : "text-primary"
                        )}>
                            {isOpen ? "Exit" : "Perspective"}
                        </span>
                        <div className={cn(
                            "w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg",
                            isOpen ? "bg-white text-primary" : "bg-primary text-white"
                        )}>
                            {isOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
                        </div>
                    </button>
                </div>
            </nav>

            {/* Drawer Style Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-[125] bg-black/60 backdrop-blur-sm lg:backdrop-blur-none"
                        />

                        {/* Side Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 z-[130] w-full max-w-[400px] h-screen bg-primary shadow-2xl flex flex-col pt-24 pb-12 px-8 lg:px-12"
                        >
                            {/* Geometric Accent Line */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-accent/20" />

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors z-20"
                            >
                                <X size={20} />
                            </button>

                            {/* Links Container - No Scroll, Fits Viewport */}
                            <div className="flex flex-col justify-center flex-1 py-4">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ x: 30, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="group flex items-center gap-4 py-3 lg:py-4 border-b border-white/5"
                                        >
                                            <span className="text-accent text-[10px] font-bold tracking-[0.2em] w-8">
                                                {link.number}
                                            </span>
                                            <span className={cn(
                                                "text-2xl lg:text-4xl font-serif tracking-tight transition-all duration-300",
                                                pathname === link.href ? "text-white" : "text-white/40 hover:text-white group-hover:pl-2"
                                            )}>
                                                {link.label}
                                            </span>
                                            {pathname === link.href && (
                                                <motion.div
                                                    layoutId="activeNav"
                                                    className="w-8 h-[1px] bg-accent ml-auto"
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Section: Compact Socials */}
                            <div className="mt-auto pt-8 border-t border-accent/20">
                                <div className="space-y-6">
                                    <div className="flex gap-6">
                                        <Instagram size={18} className="text-white/40 hover:text-accent transition-colors cursor-pointer" />
                                        <Facebook size={18} className="text-white/40 hover:text-accent transition-colors cursor-pointer" />
                                        <Twitter size={18} className="text-white/40 hover:text-accent transition-colors cursor-pointer" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/20">
                                            Salem | Tamil Nadu
                                        </p>
                                        <Link href="tel:+918754764403" className="block text-accent text-xs font-serif tracking-widest hover:text-white transition-colors">
                                            +91 87547 64403
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
