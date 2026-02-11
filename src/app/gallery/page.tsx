'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1518005020473-194950949682?q=80&w=1200&auto=format&fit=crop", size: "tall" },
    { src: "https://images.unsplash.com/photo-1621871146757-1249787e9154?q=80&w=1200&auto=format&fit=crop", size: "small" },
    { src: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1200&auto=format&fit=crop", size: "wide" },
    { src: "https://images.unsplash.com/photo-1503387762-592cd58cc458?q=80&w=1200&auto=format&fit=crop", size: "tall" },
    { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop", size: "small" },
    { src: "https://images.unsplash.com/photo-1511143314474-3bb703da993f?q=80&w=1200&auto=format&fit=crop", size: "wide" },
    { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop", size: "tall" },
    { src: "https://images.unsplash.com/photo-1541829070764-84a7d30dee62?q=80&w=1200&auto=format&fit=crop", size: "small" },
];

import TrianglePattern from '@/components/TrianglePattern';

export default function Gallery() {
    return (
        <div className="bg-white min-h-screen">

            {/* Cinematic Header with Architectural Background */}
            <section className="relative pt-40 lg:pt-60 pb-20 lg:pb-32 px-6 lg:px-24 overflow-hidden min-h-[70vh] flex items-center bg-primary">
                <TrianglePattern />

                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1518005020473-194950949682?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover grayscale"
                        alt="Gallery Exhibition Background"
                    />
                    <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
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
                            Forms in <br />
                            <span className="text-accent italic">Equilibrium.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-white/70 text-base lg:text-2xl max-w-3xl font-sans leading-relaxed tracking-wide font-medium"
                        >
                            A visual study of structural integrity, material textures, and the interplay between natural light and architectural shadows.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Asymmetric Gallery Grid - Structural Focus */}
            <section className="pb-32 lg:pb-60 px-6 lg:px-24 relative pt-20">
                <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {galleryImages.map((image, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 1 }}
                            className={cn(
                                "group relative overflow-hidden bg-gray-50 border-[1px] border-gray-100",
                                image.size === "tall" ? "md:row-span-2 aspect-[3/5]" :
                                    image.size === "wide" ? "md:col-span-2 aspect-[16/10]" :
                                        "aspect-square"
                            )}
                        >
                            <img
                                src={image.src}
                                alt={`Architectural Study ${idx}`}
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Geometric Frame Overlay */}
                            <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-700 pointer-events-none" />

                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center p-8">
                                <span className="text-white text-[9px] uppercase tracking-[0.4em] font-bold border-b border-accent pb-2">
                                    Analysis 0{idx + 1}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}
