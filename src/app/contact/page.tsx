'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import TrianglePattern from '@/components/TrianglePattern';

export default function Contact() {
    return (
        <div className="bg-[#FDFCFB] min-h-screen">

            {/* Cinematic Header with Architectural Background */}
            <section className="relative pt-40 lg:pt-60 pb-20 lg:pb-32 px-6 lg:px-24 overflow-hidden min-h-[70vh] flex items-center bg-primary">
                <TrianglePattern />

                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover grayscale"
                        alt="Contact Interface Background"
                    />
                    <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
                </div>

                {/* Architectural Grid */}
                <div className="absolute inset-0 z-10 opacity-[0.15] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

                <div className="max-w-[1400px] mx-auto relative z-20">
                    <div className="relative z-10 text-center lg:text-left">
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-5xl sm:text-7xl lg:text-[120px] font-serif text-white leading-tight mb-10 font-bold"
                        >
                            Global <br />
                            <span className="text-accent italic">Connection.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-white/70 text-base lg:text-2xl max-w-3xl font-sans leading-relaxed tracking-wide font-medium"
                        >
                            Bridge the gap between vision and structural reality. Let's start the dialogue about your next architectural legacy.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Main Content - Structural Layout */}
            <section className="py-20 lg:py-40 px-6 lg:px-24 bg-white relative">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 relative z-10">

                    {/* Left: Contact Info - Architectural Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="w-full lg:w-3/5 bg-white shadow-3xl p-8 lg:p-20 relative border border-gray-100 overflow-hidden group"
                    >
                        {/* Accent Lines */}
                        <div className="absolute top-0 right-0 w-24 h-[1px] bg-accent/20 group-hover:w-full transition-all duration-1000" />

                        <div className="mb-12 lg:mb-20">
                            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-2 font-bold italic">Er. S. P. Hari Baaskar</h2>
                            <p className="text-[9px] tracking-[0.4em] uppercase text-accent font-bold">Registered Structural Engineer</p>
                        </div>

                        <div className="space-y-12 lg:space-y-16">
                            <div className="flex gap-8 lg:gap-12 items-start">
                                <MapPin size={24} className="text-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-4">Central Studios</h4>
                                    <p className="text-lg lg:text-xl text-primary font-serif leading-relaxed">
                                        46/2, 1st Floor, Swamy Towers, <br />
                                        Mayor Nagar, Peramanur, <br />
                                        Salem, Tamil Nadu - 636 007.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 lg:gap-12 items-start">
                                <Phone size={24} className="text-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-4">Project Synthesis</h4>
                                    <p className="text-lg lg:text-2xl text-primary font-serif tracking-tighter">
                                        +91 87547 64403 <br />
                                        +91 78670 18940
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 lg:gap-12 items-start">
                                <Mail size={24} className="text-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-4">Digital Archives</h4>
                                    <p className="text-lg lg:text-xl text-primary font-serif italic border-b border-accent/20 pb-1">magizhbuilder@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-16 lg:mt-24 flex flex-col sm:flex-row gap-6">
                            <Link
                                href="https://wa.me/918754764403"
                                className="flex-1 bg-primary text-white py-5 text-center text-[10px] tracking-[0.3em] uppercase font-bold flex items-center justify-center gap-4 hover:bg-accent transition-all shadow-xl"
                            >
                                <MessageCircle size={16} /> WhatsApp
                            </Link>
                            <Link
                                href="tel:+918754764403"
                                className="flex-1 border-2 border-primary text-primary py-5 text-center text-[10px] tracking-[0.3em] uppercase font-bold flex items-center justify-center gap-4 hover:bg-primary hover:text-white transition-all underline decoration-accent underline-offset-8"
                            >
                                <Phone size={16} /> Direct Audio
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Narrative CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="w-full lg:w-1/3 flex flex-col justify-center text-center lg:text-left"
                    >
                        <h3 className="text-3xl lg:text-5xl font-serif text-primary leading-tight mb-8 lg:mb-12">
                            Transforming <br />
                            abstract concepts <br />
                            into <span className="italic text-accent">reality.</span>
                        </h3>
                        <p className="text-gray-500 font-sans leading-relaxed text-base lg:text-lg mb-12">
                            We are currently accepting new commissions for premium residential projects. Let's discuss your architectural requirements with structural precision.
                        </p>
                        <div className="w-20 lg:w-32 h-[1px] bg-accent mb-12 mx-auto lg:mx-0" />
                        <div>
                            <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-4">Availability</p>
                            <p className="text-xs lg:text-sm font-sans text-gray-400 uppercase tracking-[0.2em] leading-loose">
                                Monday — Saturday <br />
                                09:00 AM — 07:00 PM IST
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>

        </div>
    );
}
