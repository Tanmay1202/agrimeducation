import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, CheckCircle, Info, DollarSign, MessageCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { CONTACT_INFO } from '../../constants';

const UniversityCard = ({ university, onKnowMore }) => {
    // Dynamically resolve local image if it exists, otherwise use the URL in the data
    const getThumbnail = () => {
        // Map of IDs to their specific filenames/extensions if not [id].webp
        const localOverrides = {
            'siberian-state-medical-university': 'siberian-state-university.jpeg',
            'nepal-manipal-medical-college': 'manipal-college-of-medical-sciences.webp',
            'kathmandu-medical-college': 'kathmandu-medical-college-nepal.webp'
        };

        const localImages = [
            'altai-state-medical-university', 'alte-university-georgia', 'bukhara-state-medical-institute',
            'east-west-university-georgia', 'international-medical-university-kyrgyzstan', 'karaganda-state-medical-university',
            'kazakh-national-medical-university', 'kemerovo-state-medical-university', 'kirov-state-medical-university',
            'mari-state-medical-university', 'orenburg-state-medical-university', 'perm-state-medical-university',
            'pskov-state-medical-university', 'samarkand-state-medical-institute', 'south-kazakhstan-medical-academy',
            'tashkent-medical-academy', 'tbilisi-state-medical-university', 'tver-state-medical-university',
            'ulyanovsk-state-medical-university', 'ural-state-medical-university',
            'siberian-state-medical-university',
            'lumbini-medical-college', 'nepal-manipal-medical-college', 'devdaha-medical-college',
            'kist-medical-college', 'chitwan-medical-college', 'nobel-medical-college', 'kathmandu-medical-college'
        ];

        if (localImages.includes(university.id)) {
            const fileName = localOverrides[university.id] || `${university.id}.webp`;
            return new URL(`../../assets/images/universities/${fileName}`, import.meta.url).href;
        }
        return university.image || 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group h-full flex flex-col"
        >
            {/* Thumbnail Section */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={getThumbnail()}
                    alt={university.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                        {university.country}
                    </span>
                </div>
            </div>

            {/* Header Section - Serif Typography */}
            <div className="p-8 pb-4">
                <div className="flex justify-between items-start mb-2">
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                        <Calendar size={12} />
                        Est. {university.established}
                    </span>
                    <div className="flex items-center gap-1 text-accent font-bold text-xs uppercase tracking-tighter">
                        <MapPin size={12} />
                        {university.location}
                    </div>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                    {university.name}
                </h3>
            </div>


            {/* Bento Content Grid */}
            <div className="p-4 grid grid-cols-2 gap-3 flex-grow">
                {/* Left Bento: Stats & Courses */}
                <div className="col-span-1 bg-neutral-light rounded-2xl p-4 flex flex-col justify-between">
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Programs</p>
                        <div className="flex flex-wrap gap-1.5">
                            {university.courses.map((course, i) => (
                                <span key={i} className="text-xs font-semibold text-gray-700 bg-white px-2 py-1 rounded-md shadow-sm">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200/50">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                                <GraduationCap size={16} />
                            </div>
                            <div className="leading-none">
                                <p className="text-[10px] font-bold text-gray-400 uppercase">Duration</p>
                                <p className="font-bold text-sm text-primary">{university.duration}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Bento: Contact CTA */}
                <div className="col-span-1 bg-primary text-white rounded-2xl p-4 flex flex-col justify-center items-center text-center relative overflow-hidden group/cta">
                    <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300 ease-out" />
                    <div className="relative z-10 w-full flex flex-col items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <MessageCircle size={16} className="text-accent" />
                        </div>
                        <p className="text-xs font-bold leading-tight">Get Detailed<br/>Fee Structure</p>
                        <a
                            href={`https://wa.me/${CONTACT_INFO.whatsapp.yashpal}?text=${encodeURIComponent(`Hello Yashpal, I want to know the fee structure and more details about ${university.name} in ${university.country}.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="w-full py-1.5 text-[10px] uppercase tracking-wider font-bold bg-white text-primary rounded hover:bg-accent hover:text-primary-dark transition-colors">
                                Know More
                            </button>
                        </a>
                    </div>
                </div>

                {/* Bottom Bento: Highlights */}
                <div className="col-span-2 bg-accent/5 rounded-2xl p-5 border border-accent/10">
                    <p className="text-[10px] font-bold text-accent-dark uppercase tracking-widest mb-3 flex items-center gap-1">
                        <Info size={10} /> Key Highlights
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                        {university.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <CheckCircle size={14} className="text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-700 leading-snug">{highlight}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="p-8 pt-0 mt-auto">
                <button
                    onClick={() => onKnowMore(university)}
                    className="w-full py-4 bg-primary text-white rounded-xl font-bold text-sm tracking-wide hover:bg-primary-light transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 group/btn"
                >
                    KNOW MORE
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>

        </motion.div>
    );
};

export default UniversityCard;
