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
                <div className="absolute inset-0 z-0 opacity-100">
                    <img
                        src="/images/hero/hero-4.jpg"
                        className="w-full h-full object-cover"
                        alt="Contact Interface Background"
                    />
                    <div className="absolute inset-0 bg-black/40" />
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

                    {/* Right: Enquiry Form - Architectural Interface */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="w-full lg:w-2/5 bg-gray-50 p-8 lg:p-16 border border-gray-100 relative group shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-[1px] border-r-[1px] border-accent/20 -translate-x-2 translate-y-2 pointer-events-none" />

                        <div className="mb-10 text-center lg:text-left">
                            <h3 className="text-2xl lg:text-3xl font-serif text-primary font-bold mb-4 italic">Project Enquiry</h3>
                            <p className="text-sm text-gray-500 font-medium">Send us your structural requirements for a technical audit.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white border border-gray-200 px-6 py-4 text-sm font-sans focus:outline-none focus:border-accent transition-all placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-white border border-gray-200 px-6 py-4 text-sm font-sans focus:outline-none focus:border-accent transition-all placeholder:text-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white border border-gray-200 px-6 py-4 text-sm font-sans focus:outline-none focus:border-accent transition-all placeholder:text-gray-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">Inquiry Type</label>
                                <select className="w-full bg-white border border-gray-200 px-6 py-4 text-sm font-sans focus:outline-none focus:border-accent transition-all text-gray-500 appearance-none">
                                    <option>Select Service</option>
                                    <option>Bespoke Villa Construction</option>
                                    <option>2D & 3D Architectural Drawings</option>
                                    <option>Building Approvals & Sanctions</option>
                                    <option>Luxury Interior Designing</option>
                                    <option>Structural Consulting</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">Message / Requirements</label>
                                <textarea
                                    rows={4}
                                    placeholder="Briefly describe your dream project..."
                                    className="w-full bg-white border border-gray-200 px-6 py-4 text-sm font-sans focus:outline-none focus:border-accent transition-all placeholder:text-gray-300 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-6 text-[10px] tracking-[0.4em] font-black uppercase hover:bg-accent transition-all shadow-2xl relative overflow-hidden group"
                            >
                                <span className="relative z-10">Initialize Proposal</span>
                                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            </button>
                        </form>

                        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-gray-400">
                            <div>Mon-Sat: 09AM-07PM</div>
                            <div className="text-accent italic">Salem, TN</div>
                        </div>
                    </motion.div>

                </div>
            </section>

        </div>
    );
}
