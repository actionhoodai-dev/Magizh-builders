'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TrianglePattern from '@/components/TrianglePattern';
import CTA from '@/components/CTA';
import { ChevronLeft, CheckCircle2, Building2, ChevronRight } from 'lucide-react';

export default function ConstructionPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Minimal Header */}
            <section className="relative pt-40 lg:pt-60 pb-20 px-6 lg:px-24 bg-primary overflow-hidden">
                <TrianglePattern opacity="opacity-[0.1]" />

                {/* Background Image */}
                <div className="absolute inset-0 z-0 scale-105">
                    <img
                        src="/images/hero/hero-3.jpg"
                        className="w-full h-full object-cover"
                        alt="Construction Site Background"
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
                        Construction <br /><span className="text-accent underline decoration-accent/30 underline-offset-8">Company</span> <br /><span className="text-white/40">in Salem</span>
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 lg:py-48 px-6 lg:px-12">
                <div className="max-w-[850px] mx-auto">
                    <div className="space-y-12 text-gray-500 font-sans text-lg lg:text-xl leading-relaxed">
                        <p>
                            As a premier <strong>construction company in Salem</strong>, Magizh Builders transforms architectural dreams into concrete reality. We specialize in turnkey residential building and luxury villa construction, merging high-grade materials with rigorous engineering supervision.
                        </p>

                        <div className="bg-gray-50 border-y-2 border-accent/20 py-20 px-8 lg:px-16 text-center">
                            <h2 className="text-primary font-serif text-3xl lg:text-4xl mb-6 font-bold uppercase tracking-tight italic">Engineering-Led execution</h2>
                            <p className="max-w-2xl mx-auto mb-12 text-gray-400">
                                Guided by the expertise of <strong>Er. S. P. Hari Baaskar</strong>, every site we manage in Salem undergoes multi-point structural quality audits.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                {[
                                    { t: "Residential Villas", d: "Luxury G+1 and G+2 structures with premium teak finishing." },
                                    { t: "Commercial Complexes", d: "Wait-bearing structures for showrooms and rental properties." },
                                    { t: "Material Specs", d: "Using only Red Bricks, M-Sand (Double Washed), and Grade 53 Cement." },
                                    { t: "Durability Focus", d: "Proper curing for 21 days and anti-termite foundation treatment." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-6 shadow-sm border border-gray-100">
                                        <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-2">{item.t}</h4>
                                        <p className="text-sm text-gray-500">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h2 className="text-primary font-serif text-3xl font-bold pt-8">The Building Lifecycle</h2>
                        <div className="space-y-10">
                            {[
                                { title: "Phase 01: Groundwork", desc: "Soil testing, site clearing, and marking according to authorized blueprints." },
                                { title: "Phase 02: Structural Frame", desc: "Foundation casting, beam reinforcement, and roofing with premium grade steel & cement." },
                                { title: "Phase 03: Finishing", desc: "Walls, plumbing, electrical synthesis, and plastering with meticulous detail." },
                                { title: "Phase 04: Delivery", desc: "Rigorous cleaning, final technical audit, and official handover of your Salem home." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <div className="text-accent font-serif text-3xl opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                                    <div className="pt-2">
                                        <h3 className="text-primary font-serif text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-base text-gray-500">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-24 border-t border-gray-100 mt-24 text-center">
                            <p className="text-gray-400 text-sm uppercase tracking-[0.3em] font-bold mb-4">Portfolio Documentation</p>
                            <h3 className="text-2xl lg:text-3xl font-serif text-primary mb-8 font-bold">Explore Our Full Portfolio</h3>
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-4 text-accent text-xs font-bold uppercase tracking-widest border-b border-accent/30 pb-2 hover:gap-6 transition-all"
                            >
                                View Projects Portfolio <ChevronRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
