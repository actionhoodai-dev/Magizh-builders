'use client';

import Link from 'next/link';
import TrianglePattern from '@/components/TrianglePattern';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-32 pb-12 overflow-hidden relative">
            <TrianglePattern opacity="opacity-[0.12]" />

            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="flex items-center gap-4 mb-8">
                        <div className="bg-white p-3 rounded-sm w-16 h-16 flex items-center justify-center shadow-2xl overflow-hidden">
                            <img
                                src="/images/mb.jpeg"
                                alt="Magizh Builders Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-serif tracking-[0.2em] uppercase text-white font-bold">Magizh</span>
                            <span className="text-[10px] tracking-[0.5em] uppercase text-accent font-sans -mt-1 font-bold">Builders</span>
                        </div>
                    </Link>
                    <p className="max-w-md text-white font-sans leading-relaxed tracking-wide text-sm lg:text-base opacity-90">
                        Dedicated to the science of structure and the art of living. Magizh Builders merges technical rigor with bespoke architectural aesthetics.
                    </p>
                </div>

                <div>
                    <h4 className="font-serif text-lg tracking-widest uppercase mb-8 text-accent font-bold">The Studio</h4>
                    <ul className="flex flex-col gap-4 text-[10px] tracking-[0.3em] uppercase font-bold text-white">
                        <li><Link href="/about" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">The Heritage</Link></li>
                        <li><Link href="/projects" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">The Portfolio</Link></li>
                        <li><Link href="/gallery" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Visual Archives</Link></li>
                        <li><Link href="/contact" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Direct Inquiry</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-lg tracking-widest uppercase mb-8 text-accent font-bold">Dialogue</h4>
                    <ul className="flex flex-col gap-4 text-sm font-light text-white">
                        <li className="flex flex-col gap-1">
                            <span className="text-accent text-[9px] uppercase tracking-widest font-bold">Registered Studio</span>
                            <span className="opacity-90">Salem, Tamil Nadu, 636 007</span>
                        </li>
                        <li className="flex flex-col gap-1 mt-2">
                            <span className="text-accent text-[9px] uppercase tracking-widest font-bold">Project Desk</span>
                            <span className="opacity-90">+91 87547 64403</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.5em] text-white font-bold relative z-10">
                <p className="opacity-60">© {currentYear} Magizh Builders. Precision Engineering & Architecture.</p>
                <div className="flex gap-8 opacity-60">
                    <Link href="#" className="hover:text-white transition-colors">Documentation</Link>
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}
