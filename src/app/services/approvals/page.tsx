'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TrianglePattern from '@/components/TrianglePattern';
import CTA from '@/components/CTA';
import { ChevronLeft, CheckCircle2, FileCheck } from 'lucide-react';

export default function ApprovalsPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Minimal Header */}
            <section className="relative pt-40 lg:pt-60 pb-20 px-6 lg:px-24 bg-primary overflow-hidden">
                <TrianglePattern opacity="opacity-[0.1]" />

                {/* Background Image */}
                <div className="absolute inset-0 z-0 scale-105">
                    <img
                        src="/images/hero/hero-2.jpg"
                        className="w-full h-full object-cover"
                        alt="Building Approvals Background"
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
                        Blue Prints & <span className="text-accent underline decoration-accent/30 underline-offset-8">Approvals</span> <br /><span className="text-accent italic">in Salem</span>
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 lg:py-48 px-6 lg:px-12">
                <div className="max-w-[850px] mx-auto">
                    <div className="space-y-12 text-gray-500 font-sans text-lg lg:text-xl leading-relaxed">
                        <p>
                            Navigating the legal landscape of construction can be complex. Magizh Builders specializes in securing <strong>building plan approvals in Salem</strong>, ensuring that your blueprints comply with all municipal corporation regulations and safety standards.
                        </p>

                        <div className="bg-[#1F3A2E] text-white p-10 lg:p-16 relative overflow-hidden group">
                            <div className="relative z-10">
                                <h2 className="text-accent font-serif text-3xl mb-8 font-bold">Comprehensive Approval Support</h2>
                                <p className="mb-10 text-white/70">
                                    We handle the entire documentation process for builders and individual homeowners in Salem, from initial blueprint preparation to final government sanctions.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        "DTCP & LPA Approvals",
                                        "Corporation/Panchayat Plan Sanction",
                                        "Structural Stability Certificates",
                                        "Patta, Chitta, Adangal Verification",
                                        "Field Measurement Sketch (FMS) Study",
                                        "Bank Valuation Reports"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/90">
                                            <CheckCircle2 size={18} className="text-accent" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute -bottom-10 -right-10 opacity-[0.05] group-hover:scale-110 transition-transform duration-1000">
                                <FileCheck size={280} />
                            </div>
                        </div>

                        <h2 className="text-primary font-serif text-3xl font-bold pt-8">The Approval Journey</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-12 relative border-l border-accent/20 pl-8 lg:pl-16">
                                {[
                                    { title: "Document Collection", desc: "Gathering land records, patta, and identity proofs for Salem Corporation requirements." },
                                    { title: "Blueprint Preparation", desc: "Developing technical drawings that meet DTCP and LPA guidelines." },
                                    { title: "Online Submission", desc: "Uploading and tracking the application through official government portals." },
                                    { title: "Sanction Receipt", desc: "Final verification and obtaining the official build-permit for your project." }
                                ].map((step, i) => (
                                    <div key={i} className="relative">
                                        <div className="absolute -left-[41px] lg:-left-[73px] top-1 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm" />
                                        <h3 className="text-primary font-serif text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-base text-gray-500">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="relative overflow-hidden group">
                                <img
                                    src="/images/hero/hero-2.jpg"
                                    alt="Building Approval Documentation"
                                    className="w-full h-auto object-cover transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
