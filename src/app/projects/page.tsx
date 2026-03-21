'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import TrianglePattern from '@/components/TrianglePattern';
import ImageCarousel from '@/components/ImageCarousel';

interface Project {
    id: string;
    projectName: string;
    location: string;
    description?: string;
    status: string;
    images: { url: string; publicId: string }[];
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
                const snapshot = await getDocs(q);
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Project[];
                setProjects(data);
            } catch (err) {
                console.error('Error fetching projects:', err);
            }
            setLoading(false);
        };
        fetchProjects();
    }, []);

    return (
        <div className="bg-white min-h-screen">

            {/* Cinematic Header */}
            <section className="relative pt-40 lg:pt-60 pb-20 lg:pb-32 px-6 lg:px-24 overflow-hidden min-h-[70vh] flex items-center bg-primary">
                <TrianglePattern />
                <div className="absolute inset-0 z-0 opacity-100">
                    <img
                        src="/images/hero/hero-3.jpg"
                        className="w-full h-full object-cover transition-transform duration-[10s]"
                        alt="Project Portfolio Background"
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

            {/* Projects Content */}
            <section className="py-20 lg:py-32 px-6 lg:px-24 bg-white relative">
                <div className="max-w-7xl mx-auto">

                    {loading ? (
                        <div className="text-center py-32">
                            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                            <p className="text-gray-400 text-sm">Loading projects...</p>
                        </div>
                    ) : projects.length === 0 ? (
                        <div className="text-center py-32">
                            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
                            <h2 className="text-3xl lg:text-5xl font-serif text-primary font-bold">
                                Latest Projects <br /><span className="text-accent italic">Coming Soon</span>
                            </h2>
                            <p className="text-gray-500 text-lg lg:text-xl font-sans leading-relaxed tracking-wide max-w-2xl mx-auto mt-6">
                                We are currently documenting our newest residential and commercial developments. Our full project portfolio will be available here soon.
                            </p>
                            <div className="pt-12">
                                <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-primary transition-all duration-300 shadow-xl">
                                    Inquire About Projects
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-24">
                            {projects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    className="group"
                                >
                                    {/* Project Header */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                                        <div>
                                            <h2 className="text-3xl lg:text-4xl font-serif text-primary font-bold mb-3">{project.projectName}</h2>
                                            {project.description && <p className="text-gray-500 text-base mb-5 max-w-2xl text-justify font-sans leading-relaxed">{project.description}</p>}
                                            <div className="flex items-center gap-4">
                                                <span className="text-gray-400 text-sm flex items-center gap-1">
                                                    <MapPin size={14} /> {project.location}
                                                </span>
                                                <span className={`text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 ${
                                                    project.status === 'Ongoing' ? 'bg-yellow-50 text-yellow-600 border border-yellow-200' :
                                                    project.status === 'Completed' ? 'bg-green-50 text-green-600 border border-green-200' :
                                                    'bg-blue-50 text-blue-600 border border-blue-200'
                                                }`}>
                                                    {project.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Images */}
                                    {project.images.length > 0 ? (
                                        <ImageCarousel 
                                            images={project.images} 
                                            onImageClick={setSelectedImage} 
                                            projectName={project.projectName} 
                                        />
                                    ) : (
                                        <div className="bg-gray-50 border border-gray-100 py-16 text-center">
                                            <p className="text-gray-400 italic">Project images will be added soon</p>
                                        </div>
                                    )}
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
                        alt="Project Preview"
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
