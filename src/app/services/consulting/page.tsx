'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TrianglePattern from '@/components/TrianglePattern';
import CTA from '@/components/CTA';
import { ChevronLeft, CheckCircle2, Zap } from 'lucide-react';

export default function ConsultingPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Minimal Header */}
            <section className="relative pt-40 lg:pt-60 pb-20 px-6 lg:px-24 bg-primary overflow-hidden">
                <TrianglePattern opacity="opacity-[0.1]" />

                {/* Background Image */}
                <div className="absolute inset-0 z-0 scale-105">
                    <img
                        src="/images/hero/hero-4.jpg"
                        className="w-full h-full object-cover"
                        alt="Technical Consulting Background"
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
                        Construction <br /><span className="text-accent underline decoration-accent/30 underline-offset-8">Consulting</span> <br /><span className="text-accent italic">in Salem</span>
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 lg:py-48 px-6 lg:px-12">
                <div className="max-w-[850px] mx-auto">
                    <div className="space-y-12 text-gray-500 font-sans text-lg lg:text-xl leading-relaxed">
                        <p>
                            Knowledge is the foundation of structural safety. Our <strong>construction consulting in Salem</strong> provides independent homeowners and builders with expert technical advice, structural audits, and realistic cost estimations based on current Salem market trends.
                        </p>

                        <div className="bg-[#F9F9F9] p-10 lg:p-16 border-t-8 border-primary">
                            <div className="flex flex-col lg:flex-row gap-12 items-center">
                                <div className="lg:w-1/3">
                                    <div className="w-24 h-24 bg-accent flex items-center justify-center rounded-full shadow-lg">
                                        <Zap size={40} className="text-primary" />
                                    </div>
                                </div>
                                <div className="lg:w-2/3 text-left">
                                    <h2 className="text-primary font-serif text-3xl mb-6 font-bold">Structural Intelligence</h2>
                                    <p className="text-base text-gray-400 mb-8 italic">
                                        "A second opinion from a Registered Civil Engineer can save millions in future repairs and legal overheads."
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "Detailed BOQ & Material List",
                                            "Bank Loan Estimation Reports",
                                            "Rain Water Harvesting Plan",
                                            "Soil Testing & Foundation Advice",
                                            "Crack Identification & Repair",
                                            "Renovation Feasibility Study"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary">
                                                <CheckCircle2 size={16} className="text-accent" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-primary font-serif text-3xl font-bold pt-8 text-center lg:text-left">Strategic Advisory Services</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                                {[
                                    { title: "Structural Audit", desc: "Independent assessment of ongoing or completed construction to ensure structural stability and load-bearing accuracy." },
                                    { title: "Economic Planning", desc: "Detailed bill of quantities (BOQ) and cost forecasting to prevent budget overruns in Salem construction projects." },
                                    { title: "Legal & Regulatory", desc: "Navigating Salem Corporation guidelines and ensuring your building's technical compliance with DTCP rules." },
                                    { title: "Technical Supervision", desc: "Periodic site visits by our expertise to verify material ratios and engineering adherence during critical phases." }
                                ].map((service, i) => (
                                    <div key={i} className="group">
                                        <h3 className="text-primary font-serif text-xl font-bold mb-4 group-hover:text-accent transition-colors">/ {service.title}</h3>
                                        <p className="text-base text-gray-500">{service.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="relative overflow-hidden group">
                                <img
                                    src="/images/hero/hero-4.jpg"
                                    alt="Structural Advisory Consultation"
                                    className="w-full h-auto object-cover transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
