'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X, Instagram, Facebook, Twitter, ChevronDown, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import TrianglePattern from './TrianglePattern';

const navLinks = [
    { href: '/', label: 'Home', number: '01' },
    {
        href: '/services',
        label: 'Services',
        number: '02',
        children: [
            { href: '/services/drawings', label: '2D & 3D Drawings' },
            { href: '/services/approvals', label: 'Blue Prints & Approvals' },
            { href: '/services/construction', label: 'Construction' },
            { href: '/services/interior', label: 'Interior Designing' },
            { href: '/services/consulting', label: 'Consulting' },
        ]
    },
    { href: '/about', label: 'About', number: '03' },
    { href: '/projects', label: 'Projects', number: '04' },
    { href: '/gallery', label: 'Gallery', number: '05' },
    { href: '/contact', label: 'Contact', number: '06' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setMobileServicesOpen(false);
    }, [pathname]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isOpen) setMobileServicesOpen(false);
    };

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 w-full z-[120] transition-all duration-500 px-6 lg:px-12",
                scrolled ? "h-20 bg-white shadow-md" : "h-24 lg:h-32 bg-transparent"
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

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <div key={link.href} className="relative group p-4">
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-[10px] uppercase tracking-[0.4em] font-bold transition-all hover:text-accent flex items-center gap-2",
                                        scrolled
                                            ? (pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href ? "text-primary" : "text-primary/60")
                                            : (pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href ? "text-white" : "text-white/70")
                                    )}
                                >
                                    {link.label}
                                    {link.children && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />}
                                    <span className={cn(
                                        "absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full",
                                        (pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href) && "w-full"
                                    )} />
                                </Link>

                                {/* Dropdown */}
                                {link.children && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                        <div className="bg-white shadow-2xl border border-gray-100 p-6 min-w-[280px]">
                                            <div className="flex flex-col gap-4">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className={cn(
                                                            "text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-accent hover:pl-2",
                                                            pathname === child.href ? "text-accent" : "text-primary/60"
                                                        )}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Minimal Menu Toggle / Explore */}
                    <button
                        onClick={toggleMenu}
                        className="group flex items-center gap-4 z-[130] relative"
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    >
                        <span className={cn(
                            "hidden md:block text-[10px] uppercase tracking-[0.4em] font-bold transition-all",
                            (isOpen || !scrolled) ? "text-white" : "text-primary"
                        )}>
                            {isOpen ? "Exit" : "Menu"}
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

            {/* Minimal Pop-up Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Transparent Backdrop to detect outside clicks */}
                        <div
                            className="fixed inset-0 z-[120]"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="fixed top-24 right-6 lg:right-12 z-[130] w-[320px] bg-white shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden border border-gray-100 py-8 px-8"
                        >
                            {/* Decorative Accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -z-10" />

                            <div className="flex flex-col gap-1">
                                {navLinks.map((link, i) => (
                                    <div key={link.href} className="w-full">
                                        {!link.children ? (
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "group flex items-center justify-between py-3 px-2 rounded-xl transition-all duration-300",
                                                    pathname === link.href ? "bg-primary text-white" : "text-primary/60 hover:text-primary hover:bg-gray-50"
                                                )}
                                            >
                                                <span className="text-xs font-black uppercase tracking-[0.2em]">{link.label}</span>
                                                <span className="text-[10px] font-serif italic text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {link.number}
                                                </span>
                                            </Link>
                                        ) : (
                                            <div className="w-full">
                                                <button
                                                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                    className={cn(
                                                        "w-full flex items-center justify-between py-3 px-2 rounded-xl transition-all duration-300",
                                                        pathname.startsWith(link.href) ? "text-primary font-black" : "text-primary/60 hover:text-primary hover:bg-gray-50"
                                                    )}
                                                >
                                                    <span className="text-xs font-black uppercase tracking-[0.2em]">{link.label}</span>
                                                    <ChevronDown className={cn("transition-transform duration-500", mobileServicesOpen && "rotate-180")} size={14} />
                                                </button>

                                                <AnimatePresence>
                                                    {mobileServicesOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden bg-gray-50/50 rounded-xl mt-1 mb-2"
                                                        >
                                                            {link.children.map((child) => (
                                                                <Link
                                                                    key={child.href}
                                                                    href={child.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className={cn(
                                                                        "block py-3 px-4 text-[10px] uppercase tracking-[0.15em] font-bold border-l-2 transition-all",
                                                                        pathname === child.href ? "text-accent border-accent bg-accent/5" : "text-primary/40 border-transparent hover:text-primary hover:pl-6"
                                                                    )}
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Minimal Footer Support */}
                            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-4">
                                <p className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-300">Fast Inquiries</p>
                                <div className="flex items-center gap-4">
                                    <Link href="tel:+918754764403" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all">
                                        <Phone size={16} />
                                    </Link>
                                    <Link href="mailto:magizhbuilder@gmail.com" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary/40 hover:bg-primary hover:text-white transition-all">
                                        <Mail size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
