'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Home,
  Building2,
  FileText,
  Compass,
  Zap,
  Star,
  ShieldCheck,
  Clock,
  Award,
  Users
} from 'lucide-react';
import CTA from '@/components/CTA';
import Counter from '@/components/Counter';
import TrianglePattern from '@/components/TrianglePattern';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 🏠 SECTION 1 – HERO SECTION (Cinematic Entry) */}
      <section className="relative min-h-screen flex items-center pt-40 lg:pt-60 pb-24 lg:pb-32 overflow-hidden bg-primary">
        {/* Background Image with Parallax-like effect via framer */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/hero/hero-1.jpg"
            alt="Construction Company in Salem - Professional Building Site"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary/90" />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl pt-12"
          >
            <div className="flex flex-col gap-6 mb-8">
              <span className="text-accent text-xs font-black uppercase tracking-[0.5em] bg-accent/10 w-fit px-4 py-2 border-l-2 border-accent">Architectural Excellence</span>
              <h1 className="text-white text-6xl sm:text-8xl lg:text-9xl font-serif font-black leading-tight tracking-tighter">
                Magizh <br /><span className="text-accent italic">Builders</span>
              </h1>
            </div>

            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-10 leading-snug max-w-3xl">
              Engineering <span className="text-accent italic">Salem's</span> Civil Legacy With Mathematical Precision.
            </h2>

            <p className="text-white/60 text-lg lg:text-2xl font-sans mb-12 max-w-2xl leading-relaxed">
              As a premier <strong>construction company in Salem</strong>, Magizh Builders bridges the gap between creative architectural visions and
              mathematically perfect structural execution. Built by <strong>Er. S. P. Hari Baaskar</strong>, we deliver homes that stand the test of time.
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-12 py-6 bg-accent text-primary font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all duration-500 shadow-2xl"
              >
                Start Your Evolution
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-12 py-6 border-2 border-white/20 text-white font-bold uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-primary transition-all duration-500 backdrop-blur-sm"
              >
                View Our Mastery
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 z-10 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </section>

      {/* 🏛️ BRANDING SHOWCASE SECTION */}
      <section className="py-24 bg-white overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <img
                src="/images/logo-full.png"
                alt="Magizh Builders - Official Brand Identity"
                className="w-full max-w-[500px] h-auto mx-auto lg:mx-0 drop-shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 max-w-2xl"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-accent" />
                  <span className="text-accent text-xs font-black uppercase tracking-[0.3em]">Corporate Identity</span>
                </div>
                <h2 className="text-primary text-4xl lg:text-5xl font-serif font-bold leading-tight">
                  The Mark of <br /><span className="text-accent italic">Technical Authority</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Our symbol represents the synergy of traditional wisdom and modern civil engineering.
                  Every project we undertake carries this seal as a guarantee of structural integrity,
                  Vastu compliance, and mathematical perfection.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div>
                    <p className="text-primary font-black uppercase text-[10px] tracking-[0.2em] mb-1">Lead Engineer</p>
                    <p className="text-accent font-serif italic text-sm">Er. S. P. Hari Baaskar</p>
                  </div>
                  <div>
                    <p className="text-primary font-black uppercase text-[10px] tracking-[0.2em] mb-1">Registration</p>
                    <p className="text-accent font-serif italic text-sm">A1 Class Contractor</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 📊 SECTION 2 – TRUST METRICS (Impact at a Glance) */}
      <section className="py-20 lg:py-40 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {[
              { label: "Villas Handed Over", val: 50, suffix: "+", icon: Home },
              { label: "Years of Precision", val: 15, suffix: "+", icon: Clock },
              { label: "Structural Audits", val: 200, suffix: "+", icon: ShieldCheck },
              { label: "Family Smiles", val: 120, suffix: "+", icon: Users },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <item.icon className="mx-auto mb-6 text-accent opacity-20 group-hover:opacity-100 transition-opacity" size={32} />
                <h3 className="text-4xl lg:text-7xl font-serif font-bold text-primary mb-2">
                  <Counter value={item.val} suffix={item.suffix} />
                </h3>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.5em] font-black">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏗 SECTION 3 – ABOUT & VISION (The Engineering Narrative) */}
      <section className="py-24 lg:py-56 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-4 block">Our Cultural DNA</span>
              <h2 className="text-primary text-4xl lg:text-7xl font-serif font-bold mb-10 leading-[1.1]">
                Precision. <br /><span className="text-accent italic">Integrity.</span> <br />Legacy.
              </h2>
              <div className="w-24 h-1.5 bg-accent mb-12" />
              <div className="space-y-8 text-gray-500 text-lg lg:text-xl font-sans leading-relaxed">
                <p>
                  Magizh Builders is not just a <strong>construction company in Salem</strong>; we are technical guardians of your architectural dreams. Led by
                  <strong>Er. S. P. Hari Baaskar, M.E.</strong>, our firm operates on the intersection of deep engineering traditions and modern
                  smart-home technologies.
                </p>
                <p>
                  In a City where average construction is common, we pursue excellence through rigorous <strong>structural audits</strong>, premium
                  material sourcing (Double-Washed M-Sand, Grade 53 Cement), and a commitment to 100% Vastu-compliant layouts.
                </p>
                <div className="pt-8">
                  <Link href="/about" className="inline-flex items-center gap-4 text-accent text-xs font-black uppercase tracking-[0.3em] border-b border-accent/20 pb-2 hover:gap-6 transition-all hover:border-accent">
                    Learn the Engineering Behind Our Name <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 p-6 lg:p-12 bg-gray-50 border border-gray-100"
              >
                <img
                  src="/images/about/about-1.jpg"
                  alt="Magizh Builders Engineering Site Supervision"
                  className="w-full h-auto transition-all duration-1000"
                />
              </motion.div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ⚙️ SECTION 4 – THE BLUEPRINT (Interactive-style Process) */}
      <section className="py-24 lg:py-48 bg-primary text-white relative overflow-hidden">
        <TrianglePattern opacity="opacity-[0.05]" />
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-32">
            <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-black mb-6 block">The Magizh Methodology</span>
            <h2 className="text-4xl lg:text-7xl font-serif font-bold mb-10">How We Build Your <br /><span className="text-accent italic">Structural Legacy</span></h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { id: '01', title: 'Calculated planning', desc: 'Vastu-compliant 2D defaults and immersive 3D visualizations.', icon: Compass },
              { id: '02', title: 'Legal fortification', desc: 'Seamless blueprint sanctions and legal approvals from Salem Corporation.', icon: FileText },
              { id: '03', title: 'Engineering phase', desc: 'Rigorous structural casting with premium steel and grade-A concrete.', icon: Zap },
              { id: '04', title: 'Aesthetic delivery', desc: 'Luxury finishing, custom interiors, and professional handover.', icon: Award },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 bg-white/5 border border-white/10 hover:bg-white hover:text-primary transition-all duration-700"
              >
                <span className="text-accent text-5xl font-serif font-bold opacity-30 block mb-10 group-hover:opacity-100 transition-opacity">{step.id}</span>
                <step.icon className="text-accent mb-8" size={32} />
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{step.title}</h3>
                <p className="text-white/40 group-hover:text-primary/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🖼 SECTION 5 – PROJECT EXCELLENCE (Visual Showcase) */}
      <section className="py-24 lg:py-56 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl text-left">
              <span className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-4 block">The Portfolio</span>
              <h2 className="text-primary text-4xl lg:text-7xl font-serif font-bold leading-tight">Salem's Finest <br /><span className="text-accent italic">Architectural Footprints</span></h2>
            </div>
            <Link href="/projects" className="px-10 py-5 bg-primary text-white text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-accent hover:text-primary transition-all duration-500 shadow-xl">
              Launch Full Portfolio
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 overflow-hidden group">
              <img src="/images/projects/project-1.jpg" className="w-full h-[600px] object-cover group-hover:scale-105 transition-all duration-[2s]" alt="Premium Villa in Salem" />
            </div>
            <div className="lg:col-span-4 grid grid-rows-2 gap-8">
              <div className="overflow-hidden group">
                <img src="/images/gallery/gallery-4.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2s]" alt="Modern Interior Salem" />
              </div>
              <div className="bg-accent p-12 flex flex-col justify-center text-primary group hover:bg-primary transition-all duration-500">
                <Star className="mb-6 group-hover:text-accent" size={32} />
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-white">Award-Winning Aesthetics</h3>
                <p className="text-primary/60 group-hover:text-white/60 mb-8 font-serif italic text-lg line-clamp-2">"Their attention to the mathematical flow of rooms changed how we live."</p>
                <p className="text-xs uppercase font-black tracking-[0.2em] group-hover:text-accent">— Mr. Selvam, Fairlands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💎 SECTION 6 – THE MAGIZH ADVANTAGE (Checklist) */}
      <section className="py-24 lg:py-48 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <img src="/images/hero/hero-3.jpg" className="w-full h-auto" alt="Engineering Excellence" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/90 backdrop-blur-md rounded-full flex items-center justify-center p-8 text-center border-8 border-white">
                <p className="text-primary font-serif font-black text-sm uppercase leading-tight tracking-widest">Salem's Number One Choice</p>
              </div>
            </div>
            <div>
              <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-black mb-6 block">Why We Are Different</span>
              <h2 className="text-primary text-3xl lg:text-5xl font-serif font-bold mb-12">The Engineering Standard <br /><span className="text-accent italic">in Salem</span></h2>
              <ul className="space-y-8">
                {[
                  { t: "Registered engineering oversight", d: "Every brick laid is supervised by qualified structural engineers." },
                  { t: "100% Vastu compliance", d: "Merging ancient wisdom with modern structural logic seamlessly." },
                  { t: "Transparent material sourcing", d: "We provide full invoices and quality certificates for all materials used." },
                  { t: "Fixed timeline guarantee", d: "We value your time as much as your investment. No endless delays." },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="w-12 h-12 bg-white flex items-center justify-center border border-gray-100 group-hover:bg-accent transition-colors shrink-0">
                      <CheckCircle2 className="text-accent group-hover:text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-primary font-bold text-lg mb-1 uppercase tracking-tighter">{item.t}</h4>
                      <p className="text-gray-400 text-sm">{item.d}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🏡 SECTION 7 – GEOGRAPHIC FOOTPRINT */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-primary text-3xl lg:text-6xl font-serif font-bold mb-10 leading-tight">
              A Geographic Legacy <span className="text-accent">Across Salem</span>
            </h2>
            <p className="text-gray-500 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
              We focus our precision-building services in Salem's most established residential and development zones, ensuring
              we are always on-site when the concrete pours.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['Peramanur', 'Hasthampatti', 'Fairlands', 'Alagapuram', 'Steel Plant Road', 'Salem Corporation'].map((area) => (
                <div key={area} className="px-6 py-6 bg-gray-50 border border-gray-100 text-primary text-[9px] uppercase font-black tracking-[0.2em] hover:bg-accent hover:border-accent hover:text-white transition-all cursor-default">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📞 SECTION 8 – CALL TO ACTION */}
      <CTA />
    </div>
  );
}
