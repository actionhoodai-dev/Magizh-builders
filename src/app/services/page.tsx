'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TrianglePattern from '@/components/TrianglePattern';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import CTA from '@/components/CTA';

const services = [
    {
        id: 'drawings',
        title: '2D & 3D Drawings',
        slug: 'drawings',
        image: '/images/hero/hero-1.jpg',
        desc: 'Professional architectural visualizations and detailed technical drawings for precise project planning in Salem.',
        seoTitle: '2D & 3D Drawings in Salem'
    },
    {
        id: 'approvals',
        title: 'Blue Prints & Approvals',
        slug: 'approvals',
        image: '/images/hero/hero-2.jpg',
        desc: 'Expert assistance with building plan approvals and legally compliant blueprints for Salem Corporation norms.',
        seoTitle: 'Building Plan Approvals in Salem'
    },
    {
        id: 'construction',
        title: 'Construction',
        slug: 'construction',
        image: '/images/projects/project-1.jpg',
        desc: 'Turnkey residential and villa construction services in Salem delivered with engineering precision.',
        seoTitle: 'Construction Company in Salem'
    },
    {
        id: 'interior',
        title: 'Interior Designing',
        slug: 'interior',
        image: '/images/gallery/gallery-4.jpg',
        desc: 'Bespoke interior solutions that merge functional aesthetics with premium structural finishes in Salem.',
        seoTitle: 'Interior Designing in Salem'
    },
    {
        id: 'consulting',
        title: 'Consulting',
        slug: 'consulting',
        image: '/images/projects/project-4.jpg',
        desc: 'Structural guidance, cost estimation, and technical consulting by registered civil engineers in Salem.',
        seoTitle: 'Construction Consulting in Salem'
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="relative pt-40 lg:pt-60 pb-20 lg:pb-32 px-6 lg:px-24 overflow-hidden bg-primary text-white">
                <TrianglePattern />
                <div className="absolute inset-0 z-0 opacity-100">
                    <img src="/images/hero/hero-1.jpg" className="w-full h-full object-cover opacity-80" alt="Services Background" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="max-w-7xl mx-auto relative z-20 text-center">
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-white text-5xl lg:text-8xl font-serif font-bold mb-8"
                    >
                        Construction Services in <span className="text-accent italic">Salem</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-lg lg:text-2xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Magizh Builders provides a comprehensive suite of structural and architectural services,
                        ensuring engineering excellence from initial draft to final interior finishing.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 lg:py-32 px-6 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white border border-gray-100 flex flex-col hover:border-accent transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden"
                            >
                                {/* Cover Image */}
                                <div className="relative h-64 lg:h-72 overflow-hidden bg-gray-100">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                                    />
                                    {/* Standard subtle overlay for text/badge readability */}
                                    <div className="absolute inset-0 bg-black/10 transition-colors duration-500" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[8px] uppercase tracking-[0.3em] font-black text-primary">
                                        Service 0{i + 1}
                                    </div>
                                </div>

                                <div className="p-8 lg:p-10 flex flex-col flex-1">
                                    <h2 className="text-primary text-2xl font-serif font-bold mb-4">{service.title}</h2>
                                    <p className="text-gray-500 font-sans leading-relaxed mb-auto text-sm">
                                        {service.desc}
                                    </p>
                                    <div className="mt-10">
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center gap-2 text-accent text-[10px] uppercase tracking-[0.3em] font-bold hover:gap-4 transition-all pb-1 border-b border-accent/20 hover:border-accent"
                                        >
                                            Explore Service <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Substantial SEO Content Section */}
            <section className="py-24 lg:py-40 px-6 lg:px-24 bg-gray-50 overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg max-w-none text-gray-600 font-sans"
                    >
                        <h2 className="text-4xl lg:text-6xl font-serif text-primary font-bold mb-12 leading-tight">
                            Premier <span className="text-accent italic">Construction & Engineering</span> <br />Solutions in Salem City
                        </h2>

                        <div className="space-y-12">
                            <p className="text-xl leading-relaxed">
                                Magizh Builders stands at the forefront of the construction industry in Salem, delivering
                                exceptional residential and commercial structural solutions. Led by <strong>Er. S. P. Hari Baaskar, M.E.</strong>,
                                our firm prides itself on a legacy of precision engineering, transparent execution, and
                                architectural innovation. Whether you are looking for the best <strong>construction company in Salem</strong>
                                to build your family home or need expert assistance with building plan approvals, our
                                integrated approach ensures every brick laid is a testament to quality.
                            </p>

                            <div className="grid md:grid-cols-2 gap-12 pt-12">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-serif text-primary font-bold border-l-4 border-accent pl-6">Professional 2D & 3D Architectural Drawings</h3>
                                    <p>
                                        In the modern era of construction, visualization is the key to structural success. Our <strong>2D & 3D drawing services in Salem</strong>
                                        allow clients to experience their dream properties before the foundation is even poured. Using advanced CAD and 3D modeling
                                        software, we provide Vastu-compliant floor plans, realistic 3D elevations, and detailed technical drafts.
                                    </p>
                                    <p>
                                        These drawings are not just artistic renderings; they serve as a critical technical roadmap for our engineers. From electrical
                                        circuit layouts to plumbing diagrams and structural column placement, our drafts eliminate ambiguity, ensuring the final
                                        build is exactly as imagined.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-serif text-primary font-bold border-l-4 border-accent pl-6">Legal Blueprints & Plan Approvals</h3>
                                    <p>
                                        Navigating the complex landscape of <strong>building plan approvals in Salem</strong> can be overwhelming for homeowners.
                                        Magizh Builders simplifies this process by handling all government compliance procedures. We specialize in preparing
                                        blueprints that strictly adhere to DTCP (Directorate of Town and Country Planning), LPA (Local Planning Authority),
                                        and Salem Corporation norms.
                                    </p>
                                    <p>
                                        Our expertise includes Patta verification, Chitta/Adangal documentation study, and Field Measurement Sketch (FMS) analysis.
                                        By ensuring 100% legal compliance from the start, we protect your investment and ensure a smooth, worry-free construction journey.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-10 lg:p-20 shadow-2xl border border-gray-100 my-24 relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -z-10 rounded-full blur-3xl" />
                                <h3 className="text-3xl lg:text-4xl font-serif text-primary font-bold mb-10 text-center">Engineering Standards & Material Excellence</h3>
                                <p className="text-center mb-12">
                                    As a registered <strong>Civil Engineering firm in Salem</strong>, we do not compromise on structural integrity.
                                    Our construction sites follow a rigorous "Material Quality Charter" which includes:
                                </p>
                                <ul className="grid md:grid-cols-2 gap-8 list-none p-0">
                                    {[
                                        { t: "Premium Red Bricks", d: "Sourced for maximum thermal insulation and structural longevity." },
                                        { t: "Grade 53 Cement", d: "Ensures the highest compressive strength for pillars and beams." },
                                        { t: "Double Washed M-Sand", d: "Superior bonding compared to river sand with zero impurities." },
                                        { t: "Structural Steel", d: "Using only certified TMT bars (FE 500/550D) for earthquake resistance." },
                                        { t: "Anti-Termite Treatment", d: "Carried out at the foundation level for all our Salem villa projects." },
                                        { t: "21-Day Curing Protocol", d: "Strictly monitored curing schedules to ensure concrete reaches full strength." }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-4">
                                            <CheckCircle2 className="text-accent shrink-0" size={20} />
                                            <div>
                                                <strong className="text-primary block mb-1">{item.t}</strong>
                                                <span className="text-sm opacity-80">{item.d}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-4xl font-serif text-primary font-bold">Turnkey Residential & Villa Construction</h3>
                                <p>
                                    Are you looking for <strong>villa builders in Salem</strong> who handle everything from earthwork to the final coat of paint?
                                    Magizh Builders offers complete turnkey solutions. Our residential projects range from compact independent houses
                                    to sprawling luxury G+2 villas. We focus on "Bespoke Architecture," meaning your home is tailored to the specific
                                    topography of your plot, whether it's in the bustling heart of Salem City or the serene outskirts of Yercaud foothills.
                                </p>
                                <p>
                                    Our construction process is divided into logical phases, providing clients with regular updates and structural reports.
                                    We manage site labor, material procurement, and technical supervision under a single window of contact, ensuring
                                    that your project stays on schedule and within budget.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 py-12 items-center">
                                <div className="order-2 md:order-1">
                                    <h3 className="text-3xl font-serif text-primary font-bold mb-6">Interior Designing & Aesthetic Finishes</h3>
                                    <p className="mb-6">
                                        Proper construction is only half the battle; the "soul" of a home lies in its interiors. Our <strong>interior designers in Salem</strong>
                                        bridge the gap between structural geometry and daily comfort. We specialize in modular kitchen layouts, false ceiling
                                        engineering with Gypsum/LED integration, and custom cabinetry.
                                    </p>
                                    <p>
                                        We take immense pride in our woodwork, using premium Teak wood carvings for main doors and water-resistant plywood
                                        for wardrobes. Every interior detail—from the choice of Italian marble flooring to the placement of ambient lighting—is
                                        designed to create a premium living experience.
                                    </p>
                                </div>
                                <div className="order-1 md:order-2 bg-primary p-1">
                                    <img src="/images/gallery/gallery-3.jpg" className="w-full h-auto transition-all duration-700" alt="Interior Design Excellence" />
                                </div>
                            </div>

                            <div className="space-y-8 py-12">
                                <h3 className="text-3xl font-serif text-primary font-bold">Civil Engineering Consulting & Structural Audits</h3>
                                <p>
                                    Beyond building, we act as technical guardians for your structure. Our <strong>consulting services in Salem</strong>
                                    include site feasibility studies, soil stability testing, and detailed bill of quantities (BOQ) preparation.
                                    Registered civil engineers at Magizh Builders also provide structural stability certificates for commercial
                                    complexes and bank loan estimation reports for residential projects.
                                </p>
                                <p>
                                    If you have an existing structure that needs renovation or a structural health check, our audit team can identify
                                    load-bearing issues, crack patterns, and provide remediation strategies. We believe in "Engineering with Ethics,"
                                    ensuring our clients receive honest, data-driven advice at every stage of their project.
                                </p>
                            </div>

                            <div className="bg-[#FDFCFB] border-l-8 border-primary p-10 lg:p-16 my-24">
                                <h3 className="text-2xl font-serif text-primary font-bold mb-6 italic">Empowering Salem's Urban Growth</h3>
                                <p className="text-lg">
                                    Since our inception, Magizh Builders has been more than just a <strong>construction company</strong>. We are active contributors
                                    to the modernization of Salem's residential landscape. From the narrow streets of Shevapet to the premium colonies of
                                    Fairlands and Peramanur, our buildings stand as landmarks of safety and style. We stay updated with the latest
                                    Real Estate Regulatory Authority (RERA) guidelines and green building practices to ensure your home is future-proof.
                                </p>
                            </div>

                            <div className="text-center space-y-6 max-w-3xl mx-auto py-12">
                                <h3 className="text-3xl font-serif text-primary font-bold">Join the Magizh Builders Legacy</h3>
                                <p>
                                    Building a home is a once-in-a-lifetime milestone. Don't leave it to chance. Choose the <strong>engineering experts in Salem</strong>
                                    who value your vision as much as you do. With over a decade of experience and hundreds of happy families served,
                                    Magizh Builders is ready to turn your "Plan" into a "Home."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
