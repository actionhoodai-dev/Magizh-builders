'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle, ArrowDown } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import TrianglePattern from '@/components/TrianglePattern';

const fadeInUp: any = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  // Dynamic Hero Backgrounds with Mist Transitions
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1503387762-592cd58cc458?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1600607687940-c52fb0a4539c?auto=format&fit=crop&q=80&w=2000",
  ];

  // Varied Mist Transitions
  const transitionVariants = [
    { initial: { opacity: 0, filter: "blur(20px)", scale: 1.1 }, animate: { opacity: 1, filter: "blur(0px)", scale: 1 } },
    { initial: { opacity: 0, filter: "blur(10px)", x: -20 }, animate: { opacity: 1, filter: "blur(0px)", x: 0 } },
    { initial: { opacity: 0, filter: "blur(40px)", scale: 1.2 }, animate: { opacity: 1, filter: "blur(0px)", scale: 1 } },
    { initial: { opacity: 0, filter: "blur(5px)", y: 10 }, animate: { opacity: 1, filter: "blur(0px)", y: 0 } },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentVariant = transitionVariants[currentImageIndex % transitionVariants.length];

  return (
    <div className="bg-white" ref={containerRef}>

      {/* Cinematic Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-primary">
        <TrianglePattern />

        {/* High-Contrast Overlay for Text Visibility */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/60 pointer-events-none" />

        {/* Architectural Grid Overlay */}
        <div className="absolute inset-0 z-20 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              initial={currentVariant.initial}
              animate={currentVariant.animate}
              exit={{ opacity: 0, filter: "blur(20px)" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </AnimatePresence>
        </motion.div>

        <div className="relative z-30 container mx-auto px-6 lg:px-24 text-center lg:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-white text-5xl sm:text-7xl lg:text-[140px] font-serif leading-[1.1] lg:leading-[0.9] mb-8 lg:mb-12 drop-shadow-2xl font-bold"
            >
              The Art of <br />
              <span className="italic pl-0 lg:pl-32 text-accent">Engineering.</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-8 items-center justify-center lg:justify-start">
              <Link href="/projects" className="group flex items-center gap-4 text-white text-[10px] lg:text-xs uppercase tracking-[0.5em] font-bold">
                View Portfolios
                <div className="w-8 lg:w-16 h-[1px] bg-accent group-hover:w-24 transition-all duration-500" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Clean Scroll Indicator */}
        <div className="absolute bottom-12 right-6 lg:right-12 z-20">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="w-[1px] h-12 lg:h-20 bg-accent/40 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1/2 bg-accent" />
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Geometric Architecture Focused */}
      <section className="py-24 lg:py-48 px-6 lg:px-24 overflow-hidden relative bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="col-span-1 lg:col-span-1 hidden lg:block" />
          <div className="col-span-1 lg:col-span-6 text-center lg:text-left">
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-serif text-primary mb-10 lg:mb-14 leading-tight font-bold">
              Precision is <br />
              our primary <br />
              <span className="text-accent italic">foundation.</span>
            </h2>
            <div className="w-20 lg:w-32 h-[2px] bg-accent mb-10 lg:mb-14 mx-auto lg:mx-0" />
            <p className="text-lg lg:text-xl text-primary/60 font-sans mb-10 lg:mb-14 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              We translate abstract concepts into tangible structural masterpieces, where every line served a purpose and every angle defines a legacy.
            </p>
            <Link href="/about" className="inline-block px-12 lg:px-16 py-5 lg:py-6 bg-primary text-white text-[10px] lg:text-xs uppercase tracking-[0.4em] font-bold hover:bg-accent transition-all shadow-2xl">
              The Studio
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-5 relative px-4 lg:px-0">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="aspect-[4/5] overflow-hidden bg-gray-100 relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1503387762-592cd58cc458?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Minimalist Concrete Architecture"
              />
            </motion.div>
            <div className="absolute -bottom-8 lg:-bottom-16 -right-8 lg:-right-16 w-32 lg:w-64 h-32 lg:h-64 border-[1px] border-accent/20 -z-10" />
          </div>
        </div>
      </section>

      {/* Projects Spotlight - Geometric Dark Side */}
      <section className="py-24 lg:py-48 bg-primary px-6 lg:px-24 relative overflow-hidden">
        <TrianglePattern />

        <div className="max-w-7xl mx-auto mb-20 lg:mb-32 flex flex-col md:row justify-between items-center md:items-end gap-12 relative z-10">
          <div className="text-center md:text-left">
            <p className="text-accent text-[10px] lg:text-xs uppercase tracking-[0.6em] font-bold mb-6">Selected Porfolio</p>
            <h3 className="text-white text-5xl lg:text-8xl font-serif font-bold">Defined by <span className="italic">Angles.</span></h3>
          </div>
          <Link href="/projects" className="text-white hover:text-accent text-[10px] lg:text-xs uppercase tracking-[0.4em] font-bold pb-2 border-b border-accent transition-colors">
            All Works
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 relative z-10">
          <ProjectCard
            title="The Geometric Villa"
            category="Minimalist Living"
            img="https://images.unsplash.com/photo-1600607687940-c52fb0a4539c?auto=format&fit=crop&q=80&w=1200"
          />
          <ProjectCard
            title="Structural Grace"
            category="Modern Concept"
            img="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200"
            className="lg:mt-40"
          />
        </div>
      </section>

      {/* CTA Section - Architectural Contact */}
      <section className="py-32 lg:py-60 px-6 lg:px-24 flex flex-col items-center text-center relative bg-[#FDFCFB]">
        <h4 className="text-primary text-4xl sm:text-6xl lg:text-9xl font-serif mb-16 lg:mb-24 leading-tight relative z-10 font-bold">
          Begin your <br />
          <span className="italic text-accent">journey.</span>
        </h4>
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 w-full sm:w-auto relative z-10">
          <Link href="tel:+918754764403" className="w-full sm:w-auto flex items-center justify-center gap-6 px-12 lg:px-18 py-6 lg:py-8 bg-primary text-white text-[10px] lg:text-xs uppercase tracking-[0.5em] font-bold shadow-3xl hover:bg-accent transition-all hover:-translate-y-2">
            <Phone size={18} />
            Consultation
          </Link>
          <Link href="https://wa.me/918754764403" className="w-full sm:w-auto flex items-center justify-center gap-6 px-12 lg:px-18 py-6 lg:py-8 border-2 border-primary text-primary text-[10px] lg:text-xs uppercase tracking-[0.5em] font-bold hover:bg-primary hover:text-white transition-all">
            <MessageCircle size={18} />
            WhatsApp
          </Link>
        </div>
      </section>

    </div>
  );
}

function ProjectCard({ title, category, img, className }: { title: string, category: string, img: string, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("group cursor-pointer", className)}
    >
      <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-gray-100">
        <img
          src={img}
          className="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.2, 1, 0.3, 1) group-hover:scale-110"
          alt={title}
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
      <div className="flex justify-between items-end border-b border-gray-100 lg:border-white/10 pb-6">
        <div>
          <p className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-2">{category}</p>
          <h4 className="text-primary lg:text-white text-3xl font-serif group-hover:pl-4 transition-all duration-500">{title}</h4>
        </div>
        <ArrowRight className="text-accent group-hover:translate-x-2 transition-transform" />
      </div>
    </motion.div>
  );
}
