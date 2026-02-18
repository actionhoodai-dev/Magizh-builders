'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
    return (
        <section className="bg-white py-24 lg:py-32 px-6 lg:px-24 text-center">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="w-12 h-1 bg-accent mx-auto mb-8" />
                    <h2 className="text-3xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
                        Ready to start your <br /><span className="text-accent italic">project in Salem?</span>
                    </h2>
                    <p className="text-gray-500 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-sans">
                        Consult with our expert engineering team for a transparent cost estimation,
                        detailed structural audit, and professional architectural guidance tailored to your vision.
                    </p>
                    <div className="pt-8">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-12 py-5 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-primary transition-all duration-500 shadow-xl"
                        >
                            Request a Quote
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
