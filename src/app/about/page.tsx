'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TrianglePattern from '@/components/TrianglePattern';
import Counter from '@/components/Counter';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function About() {
    return (
        <div className="bg-white min-h-screen">

            {/* Cinematic Header with Architectural Background */}
            <section className="relative pt-40 lg:pt-60 pb-20 lg:pb-32 px-6 lg:px-24 overflow-hidden min-h-[70vh] flex items-center bg-primary">
                <TrianglePattern />

                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover grayscale"
                        alt="Architectural Legacy"
                    />
                    <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
                </div>

                {/* Architectural Grid */}
                <div className="absolute inset-0 z-10 opacity-[0.15] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

                <div className="max-w-[1400px] mx-auto relative z-20">
                    <div className="relative z-10">
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-5xl sm:text-7xl lg:text-[120px] font-serif text-white leading-tight mb-10 font-bold"
                        >
                            Foundation of <br />
                            <span className="text-accent italic">Excellence.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-white/70 text-base lg:text-2xl max-w-3xl font-sans leading-relaxed tracking-wide font-medium"
                        >
                            For over two decades, Magizh Builders has been the silent force behind Tamil Nadu's most prestigious architectural landmarks, merging precision engineering with mathematical grace.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Our Story - Detail Driven */}
            <section className="py-32 lg:py-60 px-6 lg:px-24">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-8">The Philosophy</h2>
                            <h3 className="text-3xl lg:text-5xl font-serif text-primary leading-tight mb-12 font-bold italic">
                                We don't just build structures; we draft <span className="italic text-accent">legacies.</span>
                            </h3>
                            <div className="space-y-8 text-gray-500 font-sans leading-relaxed">
                                <p>
                                    At Magizh Builders, we believe that architecture is the intersection of logic and beauty. Every project begins with a deep understanding of structural integrity, followed by the pursuit of aesthetic perfection.
                                </p>
                                <p>
                                    Our approach is rooted in transparency and precision. We use advanced engineering simulations to ensure that every villa and residential space we create is not only stunning but fundamentally superior in its construction.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="relative aspect-square bg-gray-100 overflow-hidden"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1200"
                                className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-105"
                                alt="Architectural Planning"
                            />
                            {/* Structural Frame Overlay */}
                            <div className="absolute inset-8 border border-white/20 pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Expert Statistics - Engineering Focus */}
            <section className="py-32 lg:py-48 bg-primary relative overflow-hidden">
                <TrianglePattern />

                {/* Background Design Decor */}
                <div className="absolute top-0 right-0 w-[40%] h-full bg-accent/5 skew-x-[-20deg] translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
                        <StatItem label="Years of Precision" value={12} suffix="+" />
                        <StatItem label="Structural Works" value={250} suffix="+" />
                        <StatItem label="Expert Engineers" value={45} suffix="+" />
                        <StatItem label="Safety Rating" value={100} suffix="%" />
                    </div>
                </div>
            </section>

            {/* Mission & Values - Geometric Layout */}
            <section className="py-32 lg:py-60 px-6 lg:px-24 bg-[#FDFCFB]">
                <div className="max-w-[1400px] mx-auto text-center mb-24 lg:mb-40">
                    <motion.h4
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        className="text-primary text-4xl lg:text-7xl font-serif max-w-4xl mx-auto leading-tight font-bold"
                    >
                        Our mission is to engineer the <span className="italic text-accent">extraordinary.</span>
                    </motion.h4>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
                    <ValueItem
                        number="01"
                        title="Integrity"
                        desc="Absolute transparency in material selection and structural methodology."
                    />
                    <ValueItem
                        number="02"
                        title="Innovation"
                        desc="Utilizing cutting-edge BIM and architectural technologies for every drafted line."
                    />
                    <ValueItem
                        number="03"
                        title="Excellence"
                        desc="A relentless pursuit of perfection in the final finishing and aesthetic flow."
                    />
                </div>
            </section>
        </div>
    );
}

function StatItem({ label, value, suffix }: { label: string, value: number, suffix: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
        >
            <h5 className="text-accent text-5xl lg:text-8xl font-serif mb-4 font-bold">
                <Counter value={value} suffix={suffix} />
            </h5>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-bold">{label}</p>
        </motion.div>
    );
}

function ValueItem({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="group border-t border-gray-100 pt-12 hover:border-accent transition-colors duration-700">
            <span className="text-accent text-xs font-bold tracking-[0.5em] mb-6 block">{number}</span>
            <h5 className="text-primary text-2xl lg:text-3xl font-serif mb-6">{title}</h5>
            <p className="text-gray-500 font-sans leading-relaxed tracking-wide text-sm">{desc}</p>
        </div>
    );
}
