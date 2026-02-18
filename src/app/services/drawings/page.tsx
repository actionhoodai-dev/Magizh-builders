'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TrianglePattern from '@/components/TrianglePattern';
import CTA from '@/components/CTA';
import { ChevronLeft, CheckCircle2, DraftingCompass } from 'lucide-react';

export default function DrawingsPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Minimal Header */}
            <section className="relative pt-40 lg:pt-60 pb-20 px-6 lg:px-24 bg-primary overflow-hidden">
                <TrianglePattern opacity="opacity-[0.1]" />

                {/* Background Image */}
                <div className="absolute inset-0 z-0 scale-105">
                    <img
                        src="/images/hero/hero-1.jpg"
                        className="w-full h-full object-cover"
                        alt="Architectural Drawings Background"
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
                        2D & 3D Drawings <br /><span className="text-accent">in Salem</span>
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 lg:py-48 px-6 lg:px-12">
                <div className="max-w-[850px] mx-auto">
                    <div className="space-y-12 text-gray-500 font-sans text-lg lg:text-xl leading-relaxed">
                        <p>
                            At Magizh Builders, we believe that every great structure begins with a mathematically precise and visually compelling draft. Our <strong>2D & 3D drawings in Salem</strong> provide homeowners and developers with a clear architectural roadmap before any ground is broken.
                        </p>

                        <div className="bg-gray-50 p-10 lg:p-16 border-l-4 border-accent">
                            <h2 className="text-primary font-serif text-3xl mb-8 font-bold">Why Technical Drawings Matter</h2>
                            <p className="mb-8">
                                Detailed drawings eliminate ambiguity during construction. By visualizing the structural flow and spatial distribution, we ensure that your dream home is not only aesthetically pleasing but structurally coherent and compliant with local regulations.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "Vastu Compliant Floor Plans",
                                    "3D Elevation Design (Modern/Traditional)",
                                    "Structural Drawings (Pillars/Beams)",
                                    "Electrical & Plumbing Diagrams",
                                    "Joinery (Door/Window) Schedule",
                                    "Future Expansion Planning"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-primary">
                                        <CheckCircle2 size={18} className="text-accent" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <h2 className="text-primary font-serif text-3xl font-bold pt-8">Our Creative Process</h2>
                        <div className="space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-accent/20">
                            {[
                                { title: "Site Analysis", desc: "We study your plot in Salem to understand topography, orientation, and legal boundaries." },
                                { title: "2D Floor Planning", desc: "Drafting the skeleton of your home with focus on Vastu, ventilation, and functional efficiency." },
                                { title: "3D Visualization", desc: "Creating realistic 3D renderings to help you experience the textures, light, and depth of your future home." },
                                { title: "Final Technical Drafts", desc: "Producing the final structural and working drawings required for on-site engineering execution." }
                            ].map((step, i) => (
                                <div key={i} className="pl-12 relative">
                                    <div className="absolute left-0 top-1 w-8 h-8 bg-white border border-accent flex items-center justify-center text-accent text-xs font-bold rounded-full z-10">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-primary font-serif text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-base text-gray-500">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
