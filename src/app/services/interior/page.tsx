'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TrianglePattern from '@/components/TrianglePattern';
import CTA from '@/components/CTA';
import { ChevronLeft, CheckCircle2, Paintbrush, ChevronRight } from 'lucide-react';

export default function InteriorPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Minimal Header */}
            <section className="relative pt-40 lg:pt-60 pb-20 px-6 lg:px-24 bg-primary overflow-hidden">
                <TrianglePattern opacity="opacity-[0.1]" />

                {/* Background Image */}
                <div className="absolute inset-0 z-0 scale-105">
                    <img
                        src="/images/gallery/gallery-3.jpg"
                        className="w-full h-full object-cover"
                        alt="Interior Design Background"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="max-w-[850px] mx-auto relative z-20">
                    <Link href="/services" className="inline-flex items-center gap-2 text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-12 hover:-translate-x-2 transition-transform">
                        <ChevronLeft size={16} /> Back to Services
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-4xl lg:text-7xl font-serif font-bold leading-tight"
                    >
                        Interior <br /><span className="text-accent underline decoration-accent/30 underline-offset-8">Designing</span> <br /><span className="text-accent italic">Services</span>
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 lg:py-48 px-6 lg:px-12">
                <div className="max-w-[850px] mx-auto">
                    <div className="space-y-12 text-gray-500 font-sans text-lg lg:text-xl leading-relaxed">
                        <p className="text-justify">
                            Beyond structural integrity, we focus on the soul of your home. Our <strong>interior designing</strong> services merge functional ergonomics with premium architectural aesthetics, creating living spaces that reflect your personality and prestige.
                        </p>

                        <div className="pt-8 mb-16">
                            <h2 className="text-primary font-serif text-3xl font-bold mb-8">Design Philosophy</h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Functional Ergonomics", desc: "Designing layouts that prioritize ease of movement and furniture utility within typical residential footprints." },
                                    { title: "Material Excellence", desc: "Sourcing premium veneers, marbles, and finishes that offer both visual luxury and long-term durability." },
                                    { title: "Lighting Synthesis", desc: "Expert placement of natural and artificial light sources to enhance structural depth and daily mood." }
                                ].map((value, i) => (
                                    <div key={i} className="group border-l-2 border-transparent hover:border-accent pl-8 transition-all duration-500">
                                        <h3 className="text-primary font-serif text-xl font-bold mb-2 group-hover:text-accent transition-colors">{value.title}</h3>
                                        <p className="text-base text-gray-500 text-justify">{value.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-8">
                            <div className="bg-[#FDFCFB] p-10 border border-gray-100 flex flex-col justify-center">
                                <h2 className="text-primary font-serif text-3xl mb-6 font-bold italic">We are specialized in</h2>

                                <ul className="space-y-4">
                                    {[
                                        "Teak Wood Main Door Carving",
                                        "Modular Kitchen",
                                        "Gypsum False Ceiling & LED",
                                        "Marble & Granite Flooring",
                                        "Custom Wardrobes (Plywood/Veneer)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary/80">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gray-100 relative overflow-hidden group">
                                <img
                                    src="/images/gallery/gallery-3.jpg"
                                    alt="Interior Design"
                                    className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                            </div>
                        </div>

                        <div className="pt-24 border-t border-gray-100 mt-24 text-center">

                            <h3 className="text-2xl lg:text-3xl font-serif text-primary mb-8 font-bold">Experience Our Work</h3>
                            <Link
                                href="/gallery"
                                className="inline-flex items-center gap-4 text-accent text-xs font-bold uppercase tracking-widest border-b border-accent/30 pb-2 hover:gap-6 transition-all"
                            >
                                View Visual Gallery <ChevronRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
