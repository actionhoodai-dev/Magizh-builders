'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
    {
        title: "The Ivory Villa",
        location: "Fairlands, Salem",
        image: "/images/projects/project-1.jpg",
        size: "4,500 Sq. Ft.",
        status: "Completed",
        number: "01"
    },
    {
        title: "Geometric Terrace",
        location: "Yercaud Hills",
        image: "/images/projects/project-2.jpg",
        size: "3,200 Sq. Ft.",
        status: "Handed Over",
        number: "02"
    },
    {
        title: "Structural Courtyard",
        location: "Peramanur, Salem",
        image: "/images/projects/project-3.jpg",
        size: "5,800 Sq. Ft.",
        status: "Completed",
        number: "03"
    },
    {
        title: "The Axis Manor",
        location: "Alagapuram",
        image: "/images/projects/project-4.jpg",
        size: "4,000 Sq. Ft.",
        status: "Completed",
        number: "04"
    }
];

import TrianglePattern from '@/components/TrianglePattern';

export default function Projects() {
    return (
        <div className="bg-white min-h-screen">
            {/* Cinematic Header with Architectural Background */}
            <section className="relative pt-40 lg:pt-60 pb-20 lg:pb-32 px-6 lg:px-24 overflow-hidden min-h-[70vh] flex items-center bg-primary">
                <TrianglePattern />

                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-100">
                    <img
                        src="/images/hero/hero-3.jpg"
                        className="w-full h-full object-cover transition-transform duration-[10s]"
                        alt="Project Portfolio Background"
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
                            Our <br />
                            <span className="text-accent italic">Projects.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-white/70 text-base lg:text-2xl max-w-3xl font-sans leading-relaxed tracking-wide font-medium"
                        >
                            A showcase of our most technically advanced and architecturally unique developments in the region.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Project Placeholder Section */}
            <section className="py-32 lg:py-60 px-6 lg:px-24 bg-white relative">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="w-20 h-1 bg-accent mx-auto" />
                        <h2 className="text-3xl lg:text-5xl font-serif text-primary font-bold">Latest Projects <br /><span className="text-accent italic">Coming Soon</span></h2>
                        <p className="text-gray-500 text-lg lg:text-xl font-sans leading-relaxed tracking-wide max-w-2xl mx-auto">
                            We are currently documenting our newest residential and commercial developments. Our full project portfolio will be available here soon.
                        </p>
                        <div className="pt-12">
                            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-primary transition-all duration-300 shadow-xl">
                                Inquire About Projects
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

function ProjectItem({ project }: { project: any }) {
    return (
        <div className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative">
            {/* Image Side - Architectural Focus */}
            <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden shadow-3xl relative bg-gray-50 border-[1px] border-gray-100">
                <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 2 }}
                    className="aspect-[16/9] relative"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-105"
                    />
                    {/* Architectural Overlay Lines */}
                    <div className="absolute inset-0 border-t border-white/30 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-1000 delay-300 pointer-events-none" />
                    <div className="absolute inset-0 border-b border-white/30 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-1000 delay-300 pointer-events-none" />
                </motion.div>
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 order-2 lg:order-1 text-center lg:text-left px-4 lg:px-0 relative">
                {/* Horizontal Accent Line */}
                <div className="absolute -left-12 top-1/2 w-12 h-px bg-accent/30 hidden lg:block" />

                <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-6 lg:mb-8">
                    <span className="text-accent text-lg lg:text-xl font-serif italic">{project.number}</span>
                    <div className="w-12 h-[1px] bg-accent/40" />
                    <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">{project.status}</span>
                </div>
                <h3 className="text-3xl lg:text-6xl font-serif text-primary mb-6 lg:mb-8 tracking-tight">
                    {project.title}
                </h3>
                <div className="grid grid-cols-2 gap-6 lg:gap-12 mb-8 lg:mb-12 py-8 border-y border-gray-100">
                    <div>
                        <p className="text-[8px] lg:text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Location</p>
                        <p className="text-primary font-serif text-base lg:text-lg">{project.location}</p>
                    </div>
                    <div>
                        <p className="text-[8px] lg:text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Structural Area</p>
                        <p className="text-primary font-serif text-base lg:text-lg">{project.size}</p>
                    </div>
                </div>
                <Link href={`/projects/${project.title.toLowerCase().replace(/ /g, '-')}`} className="group/link inline-flex items-center gap-6 text-[9px] lg:text-[10px] uppercase tracking-[0.4em] font-bold bg-primary text-white px-8 py-4 hover:bg-accent transition-all shadow-lg">
                    Analysis
                    <div className="w-6 h-[1px] bg-white group-hover/link:w-12 transition-all" />
                </Link>
            </div>
        </div>
    );
}
