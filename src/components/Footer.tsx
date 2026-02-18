'use client';

import Link from 'next/link';
import TrianglePattern from '@/components/TrianglePattern';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-20 pb-10 overflow-hidden relative">
            <TrianglePattern opacity="opacity-[0.12]" />

            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
                <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                    <Link href="/" className="flex items-center gap-4 mb-6">
                        <div className="bg-white p-2 w-12 h-12 flex items-center justify-center overflow-hidden">
                            <img
                                src="/images/mb.jpeg"
                                alt="Magizh Builders Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-serif tracking-[0.2em] uppercase text-white font-bold">Magizh</span>
                            <span className="text-[9px] tracking-[0.5em] uppercase text-accent font-sans -mt-1 font-black">Builders</span>
                        </div>
                    </Link>
                    <p className="max-w-sm text-white/70 font-sans leading-relaxed tracking-wide text-xs">
                        Magizh Builders is a premier <strong>construction company in Salem</strong> dedicated to high-precision engineering and bespoke architectural aesthetics for residential and villa projects.
                    </p>
                </div>

                <div>
                    <h4 className="font-serif text-sm tracking-widest uppercase mb-6 text-accent font-bold">The Company</h4>
                    <ul className="flex flex-col gap-3 text-[9px] tracking-[0.3em] uppercase font-bold text-white/80">
                        <li><Link href="/about" className="hover:text-accent transition-colors">About Company</Link></li>
                        <li><Link href="/projects" className="hover:text-accent transition-colors">Our Projects</Link></li>
                        <li><Link href="/gallery" className="hover:text-accent transition-colors">Project Gallery</Link></li>
                        <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-sm tracking-widest uppercase mb-6 text-accent font-bold">Services</h4>
                    <ul className="flex flex-col gap-3 text-[9px] tracking-[0.3em] uppercase font-bold text-white/80">
                        <li><Link href="/services/drawings" className="hover:text-accent transition-colors">2D & 3D Drawings</Link></li>
                        <li><Link href="/services/approvals" className="hover:text-accent transition-colors">Plan Approvals</Link></li>
                        <li><Link href="/services/construction" className="hover:text-accent transition-colors">Construction</Link></li>
                        <li><Link href="/services/interior" className="hover:text-accent transition-colors">Interior Design</Link></li>
                        <li><Link href="/services/consulting" className="hover:text-accent transition-colors">Consulting</Link></li>
                    </ul>
                </div>

                <div className="sm:col-span-2 lg:col-span-1">
                    <h4 className="font-serif text-sm tracking-widest uppercase mb-6 text-accent font-bold">Contact Us</h4>
                    <ul className="flex flex-col gap-4 text-xs font-light text-white/80">
                        <li className="flex flex-col gap-1">
                            <span className="text-accent text-[8px] uppercase tracking-widest font-bold">Main Office</span>
                            <span className="leading-tight opacity-90">Mayor Nagar, Peramanur, Salem – 636007</span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className="text-accent text-[8px] uppercase tracking-widest font-bold">Project Desk</span>
                            <span className="opacity-90">87547 64403 | 78670 18940</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[8px] uppercase tracking-[0.4em] text-white/50 font-bold relative z-10 text-center sm:text-left">
                <p>© {currentYear} Magizh Builders. Precision Engineering.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white transition-colors">Documentation</Link>
                    <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                </div>
            </div>
        </footer>
    );
}
