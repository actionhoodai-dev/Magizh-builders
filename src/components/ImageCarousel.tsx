'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ImageCarouselProps {
    images: { url: string; publicId: string }[];
    onImageClick: (url: string) => void;
    projectName: string;
}

export default function ImageCarousel({ images, onImageClick, projectName }: ImageCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
        scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    };

    return (
        <div className="relative group">
            {/* Navigation Arrows */}
            {images.length > 4 && (
                <div className="absolute right-0 -top-14 flex gap-2 z-10">
                    <button 
                        onClick={() => scroll('left')} 
                        className="p-2 border border-accent rounded-full text-accent hover:bg-accent hover:text-white transition-all duration-300"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button 
                        onClick={() => scroll('right')} 
                        className="p-2 border border-accent rounded-full text-accent hover:bg-accent hover:text-white transition-all duration-300"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            )}

            {/* Slider Container */}
            <div 
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
            >
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        className="relative flex-none w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] overflow-hidden group cursor-pointer aspect-square bg-gray-100 snap-start"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => onImageClick(img.url)}
                    >
                        <img
                            src={img.url}
                            alt={`${projectName} - Image ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}
