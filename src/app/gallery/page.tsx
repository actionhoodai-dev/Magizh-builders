'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const galleryImages = [
    { src: "/images/gallery/gallery-1.jpg", size: "tall" },
    { src: "/images/gallery/gallery-2.jpg", size: "small" },
    { src: "/images/gallery/gallery-3.jpg", size: "wide" },
    { src: "/images/gallery/gallery-4.jpg", size: "tall" },
    { src: "/images/gallery/gallery-5.jpg", size: "small" },
    { src: "/images/gallery/gallery-6.jpg", size: "wide" },
    { src: "/images/gallery/gallery-7.jpg", size: "tall" },
    { src: "/images/gallery/gallery-8.jpg", size: "small" },
];

import TrianglePattern from '@/components/TrianglePattern';

export default function Gallery() {
    return (
        <div className="bg-white min-h-screen">

            {/* Cinematic Header with Architectural Background */}
            <section className="relative pt-40 lg:pt-60 pb-20 lg:pb-32 px-6 lg:px-24 overflow-hidden min-h-[70vh] flex items-center bg-primary">
                <TrianglePattern />

                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-100">
                    <img
                        src="/images/gallery/gallery-1.jpg"
                        className="w-full h-full object-cover"
                        alt="Gallery Exhibition Background"
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
                            Visual <br />
                            <span className="text-accent italic">Gallery.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-white/70 text-base lg:text-2xl max-w-3xl font-sans leading-relaxed tracking-wide font-medium"
                        >
                            A visual study of our structural work, material details, and finished architectural aesthetics.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Gallery Placeholder Section */}
            <section className="py-32 lg:py-60 px-6 lg:px-24 bg-white relative">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="w-20 h-1 bg-accent mx-auto" />
                        <h2 className="text-3xl lg:text-5xl font-serif text-primary font-bold">Gallery <br /><span className="text-accent italic">Updating Soon</span></h2>
                        <p className="text-gray-500 text-lg lg:text-xl font-sans leading-relaxed tracking-wide max-w-2xl mx-auto">
                            We are currently compiling high-resolution imagery of our finished projects. Our architectural gallery will be updated with new visual content soon.
                        </p>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
