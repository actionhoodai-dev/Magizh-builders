'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TrianglePattern from '@/components/TrianglePattern';
import Counter from '@/components/Counter';
import CTA from '@/components/CTA';

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
                <div className="absolute inset-0 z-0 opacity-100">
                    <img
                        src="/images/hero/hero-2.jpg"
                        className="w-full h-full object-cover"
                        alt="Architectural Legacy"
                    />
                    <div className="absolute inset-0 bg-black/40" />
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

            {/* Leading Section - Centered Single Column Layout */}
            <section className="py-24 lg:py-48 px-6 lg:px-12 bg-white">
                <div className="max-w-[850px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {/* Header Branding */}
                        <div className="mb-16">
                            <h2 className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-6">The Company</h2>
                            <h2 className="text-3xl lg:text-5xl font-serif text-primary leading-tight font-bold">
                                About Magizh Builders – Leading <br />
                                <span className="text-accent italic">Construction Company</span> in Salem
                            </h2>
                            <div className="w-20 h-1 bg-accent mt-8" />
                        </div>

                        {/* Feature Narrative Image */}
                        <div className="mb-16 relative aspect-[16/9] lg:aspect-[21/9] bg-gray-100 overflow-hidden">
                            <img
                                src="/images/about/about-1.jpg"
                                className="w-full h-full object-cover transition-all duration-1000"
                                alt="Construction Company in Salem - Project Site"
                            />
                            {/* Structural Frame Overlay */}
                            <div className="absolute inset-6 border border-white/20 pointer-events-none" />
                        </div>

                        {/* Text Content */}
                        <div className="space-y-10 text-gray-500 font-sans leading-relaxed text-lg lg:text-xl text-left">
                            <p>
                                Magizh Builders stands as a premier <strong>construction company in Salem</strong>, dedicated to building high-quality residential homes and premium villas for families throughout the city and surrounding districts. With a strong commitment to architectural elegance and localized expertise, we have established a significant portfolio in Salem's most sought-after residential neighborhoods, including Peramanur, Fairlands, Hasthampatti, Alagapuram, and Meyyanur. Our team focuses on delivering bespoke independent houses that seamlessly merge modern aesthetics with engineering precision, ensuring every client in the Salem city region receives a living space tailored to their lifestyle.
                            </p>
                            <p>
                                Our firm is led by the distinguished <strong>Er. S. P. Hari Baaskar, M.E.</strong>, a Registered Civil Engineer in Salem with a deep commitment to structural integrity and safety. By choosing Magizh Builders, you benefit from professional engineering-based supervision that prioritizes structural longevity above all else. We possess an in-depth understanding of the unique soil conditions and climate variations unique to the Salem district, allowing us to implement foundation designs specifically optimized for local ground stability. Every project we undertake strictly adheres to the latest Salem municipal corporation approval norms, providing you with a completely transparent and legally compliant construction journey.
                            </p>
                            <p>
                                We provide an extensive range of professional services designed to simplify the building process for homeowners. Whether you need specialized <strong>villa builders in Salem</strong> or comprehensive residential construction management, our services cover everything from initial 2D and 3D house plans to securing complex building plan approvals from the local authorities. We pride ourselves on our transparent construction cost planning and our refusal to compromise on the quality of raw materials used. Our turnkey construction solutions are designed to take the stress out of home building, allowing you to focus on the joy of creating a new legacy for your family in the heart of Salem.
                            </p>

                            <div className="py-12 border-t border-b border-gray-100 my-16 bg-[#FDFCFB] px-8 lg:px-12 -mx-8 lg:-mx-12">
                                <h4 className="text-primary font-serif text-2xl mb-8 font-bold">Why Salem Homeowners Choose Magizh Builders:</h4>
                                <ul className="space-y-6">
                                    {[
                                        "Extensive localized experience in Salem residential and villa projects",
                                        "Scientific understanding of the specific Salem soil profiles and weather patterns",
                                        "Comprehensive and transparent construction cost estimation and planning",
                                        "Guaranteed compliance with all current Salem Corporation building regulations",
                                        "Reliable end-to-end residential construction and project management services"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-accent rounded-full mt-2.5 shrink-0" />
                                            <span className="text-gray-600 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="italic text-primary font-medium text-xl leading-relaxed">
                                If you are searching for a reliable partner to transform your vision into reality, we encourage you to consult with us today for planning your dream home. Our engineering team is ready to guide you through every structural and design phase with professional expertise. Contact Magizh Builders today to find out why we are the most trusted <strong>construction company in Salem</strong> for homeowners who value global quality standards with a local touch.
                            </p>
                        </div>
                    </motion.div>
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

            <CTA />
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
