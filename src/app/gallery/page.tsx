'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import TrianglePattern from '@/components/TrianglePattern';
import ImageCarousel from '@/components/ImageCarousel';

interface GalleryProject {
  id: string;
  projectName: string;
  category?: 'Construction' | 'Interior Designing';
  images: { url: string; publicId: string }[];
}

export default function Gallery() {
    const [galleryProjects, setGalleryProjects] = useState<GalleryProject[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<'Construction' | 'Interior'>('Construction');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'));
                const snapshot = await getDocs(q);
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as GalleryProject[];
                setGalleryProjects(data);
            } catch (err) {
                console.error('Error fetching gallery:', err);
            }
            setLoading(false);
        };
        fetchGallery();
    }, []);

    return (
        <div className="bg-white min-h-screen">

            {/* Cinematic Header */}
            <section className="relative pt-40 lg:pt-60 pb-20 lg:pb-32 px-6 lg:px-24 overflow-hidden min-h-[70vh] flex items-center bg-primary">
                <TrianglePattern />
                <div className="absolute inset-0 z-0 opacity-100">
                    <img
                        src="/images/gallery/gallery-1.jpg"
                        className="w-full h-full object-cover"
                        alt="Gallery Exhibition Background"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>


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

            {/* Gallery Content */}
            <section className="py-20 lg:py-32 px-6 lg:px-24 bg-white relative">
                <div className="max-w-7xl mx-auto">

                    {/* Category Filter Tabs */}
                    <div className="flex justify-center gap-6 mb-16 border-b border-gray-100 pb-4">
                        {[
                            { id: 'Construction', label: 'Construction' },
                            { id: 'Interior', label: 'Interior Designing' }
                        ].map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id as 'Construction' | 'Interior')}
                                className={`text-sm lg:text-base font-serif font-bold uppercase tracking-widest px-6 py-2 border-b-2 transition-all ${selectedCategory === cat.id ? 'border-accent text-accent' : 'border-transparent text-gray-400 hover:text-primary'}`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {loading ? (
                        <div className="text-center py-32">
                            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                            <p className="text-gray-400 text-sm">Loading gallery...</p>
                        </div>
                    ) : galleryProjects.filter(p => selectedCategory === 'Interior' ? p.category === 'Interior Designing' : (!p.category || p.category === 'Construction')).length === 0 ? (
                        <div className="text-center py-32">
                            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
                            <h2 className="text-3xl lg:text-5xl font-serif text-primary font-bold">
                                Category <br /><span className="text-accent italic">Updating Soon</span>
                            </h2>
                            <p className="text-gray-500 text-lg lg:text-xl font-sans leading-relaxed tracking-wide max-w-2xl mx-auto mt-6">
                                We are currently compiling imagery for this category. It will be updated soon.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-20">
                            {galleryProjects.filter(p => selectedCategory === 'Interior' ? p.category === 'Interior Designing' : (!p.category || p.category === 'Construction')).map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                >
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-[2px] bg-accent" />
                                        <h2 className="text-2xl lg:text-3xl font-serif text-primary font-bold">
                                            {project.projectName}
                                        </h2>
                                    </div>

                                    <ImageCarousel 
                                        images={project.images} 
                                        onImageClick={setSelectedImage} 
                                        projectName={project.projectName} 
                                    />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6 cursor-pointer"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={selectedImage}
                        alt="Gallery Preview"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />
                    <button className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl font-light">
                        ×
                    </button>
                </div>
            )}
        </div>
    );
}
