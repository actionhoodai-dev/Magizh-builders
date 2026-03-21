'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TrianglePattern from '@/components/TrianglePattern';
import { useBusinessDetails } from '@/hooks/useBusinessDetails';
import Logo from '@/components/Logo';

export default function Footer() {
    const pathname = usePathname();
    const { details } = useBusinessDetails();
    const currentYear = new Date().getFullYear();

    if (pathname && pathname.startsWith('/admin')) return null;

    return (
        <footer className="bg-primary text-white pt-20 pb-10 overflow-hidden relative">
            <TrianglePattern opacity="opacity-[0.12]" />

            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
                <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                    <Link href="/" className="inline-block mb-6">
                        <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center p-0 shadow-xl overflow-hidden">
                            <Logo size={65} animated={false} className="scale-150" />
                        </div>
                    </Link>
                    <p className="max-w-sm text-white/70 font-sans leading-relaxed tracking-wide text-sm">
                        MAGIZH BUILDERS is a premier <strong>construction company</strong> dedicated to high-precision engineering and bespoke architectural aesthetics for residential and villa projects.
                    </p>
                </div>

                <div>
                    <h4 className="font-serif text-sm tracking-widest uppercase mb-6 text-accent font-bold">The Company</h4>
                    <ul className="flex flex-col gap-3 text-xs tracking-wider uppercase font-bold text-white/80">
                        <li><Link href="/about" className="hover:text-accent transition-colors">About Company</Link></li>
                        <li><Link href="/projects" className="hover:text-accent transition-colors">Our Projects</Link></li>
                        <li><Link href="/gallery" className="hover:text-accent transition-colors">Project Gallery</Link></li>
                        <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-sm tracking-widest uppercase mb-6 text-accent font-bold">Services</h4>
                    <ul className="flex flex-col gap-3 text-xs tracking-wider uppercase font-bold text-white/80">
                        <li><Link href="/services/drawings" className="hover:text-accent transition-colors">2D & 3D Drawings</Link></li>
                        <li><Link href="/services/approvals" className="hover:text-accent transition-colors">Plan Approvals</Link></li>
                        <li><Link href="/services/construction" className="hover:text-accent transition-colors">Construction</Link></li>
                        <li><Link href="/services/interior" className="hover:text-accent transition-colors">Interior Design</Link></li>
                        <li><Link href="/services/consulting" className="hover:text-accent transition-colors">Consulting</Link></li>
                    </ul>
                </div>

                <div className="sm:col-span-2 lg:col-span-1">
                    <h4 className="font-serif text-sm tracking-widest uppercase mb-6 text-accent font-bold">Contact Us</h4>
                    <ul className="flex flex-col gap-4 text-sm font-light text-white/80">
                        <li className="flex flex-col gap-1">
                            <span className="text-accent text-[10px] uppercase tracking-widest font-bold">Main Office</span>
                            <span className="leading-tight opacity-90">{details.address}</span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className="text-accent text-[10px] uppercase tracking-widest font-bold">Project Desk</span>
                            <span className="opacity-90">{details.phone1} | {details.phone2}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold relative z-10 text-center sm:text-left">
                <p>© {currentYear} MAGIZH BUILDERS. Precision Engineering.</p>
                {/* Removed Documentation and Privacy Links */}
            </div>
        </footer>
    );
}
