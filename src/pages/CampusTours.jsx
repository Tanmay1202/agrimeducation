import React from 'react';
import SEO from '../components/common/SEO';
import UNIVERSITIES_DATA from '../data/universities.json';
import { motion } from 'framer-motion';
import { Play, MapPin, Globe } from 'lucide-react';

const CampusTours = () => {
    const tourUniversities = UNIVERSITIES_DATA.filter(uni => uni.embed_id);

    return (
        <>
            <SEO
                title="Virtual Campus Tours | Experience Your Future University | Agrim Education"
                description="Take a virtual tour of top medical universities abroad. Watch campus videos, explore facilities, and get a feel of your future medical college from home."
            />

            {/* Hero Section */}
            <div className="bg-primary pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/10 -skew-x-12 -translate-x-1/4" />
                
                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                            Experience Campus Life
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 leading-tight">
                            Virtual <span className="text-accent">Campus Tours</span>
                        </h1>
                        <p className="text-xl text-blue-100/80 leading-relaxed">
                            Don't just read about it—see it. Explore the world-class facilities, modern labs, and vibrant student life at our partner medical universities.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Video Grid */}
            <div className="bg-neutral-light py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {tourUniversities.map((uni, index) => (
                            <motion.div
                                key={uni.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group"
                            >
                                {/* Video Container */}
                                <div className="relative aspect-video bg-black overflow-hidden">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${uni.embed_id}`}
                                        title={`${uni.name} Campus Tour`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest mb-2">
                                                <Globe size={14} />
                                                {uni.country}
                                            </div>
                                            <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                                                {uni.name}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                                            <MapPin size={16} className="text-primary/40" />
                                            {uni.location}
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                        <div className="flex items-center gap-2 text-primary/60 text-sm">
                                            <Play size={16} className="text-accent" />
                                            <span>Full Campus Tour</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty State if needed */}
                    {tourUniversities.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">More campus tours coming soon...</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom CTA */}
            <section className="bg-white py-24">
                <div className="container-custom">
                    <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                                Ready to start your <br />
                                <span className="text-accent">Medical Journey?</span>
                            </h2>
                            <p className="text-lg text-blue-100/70 mb-12">
                                Our expert counselors are here to help you choose the right university based on your preferences and budget.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button 
                                    onClick={() => window.location.href = '/contact'}
                                    className="px-10 py-5 bg-accent text-primary-dark font-black rounded-2xl shadow-xl hover:scale-105 transition-transform uppercase tracking-widest text-sm"
                                >
                                    Book Free Consultation
                                </button>
                                <button 
                                    onClick={() => window.location.href = '/universities'}
                                    className="px-10 py-5 bg-white/10 text-white font-black rounded-2xl border border-white/20 hover:bg-white/20 transition-all uppercase tracking-widest text-sm"
                                >
                                    Explore Universities
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CampusTours;
