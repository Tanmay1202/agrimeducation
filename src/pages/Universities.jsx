import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import UniversityCard from '../components/common/UniversityCard';
import Modal from '../components/common/Modal';
import UNIVERSITIES_DATA from '../data/universities.json';
import { Search, Download, Filter, CheckCircle, Globe, GraduationCap, MapPin, Calendar, Clock, BookOpen, FileText, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const Universities = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("All");
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleKnowMore = (university) => {
        setSelectedUniversity(university);
        setIsModalOpen(true);
    };

    const filteredUniversities = UNIVERSITIES_DATA.filter(uni => {
        const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCountry = selectedCountry === "All" || uni.country === selectedCountry;
        return matchesSearch && matchesCountry;
    });

    const countries = ["All", ...new Set(UNIVERSITIES_DATA.map(u => u.country))];

    return (
        <>
            <SEO
                title="Top Medical Universities Abroad | Agrim Education"
                description="Explore top MCI/WHO approved medical universities in Russia, Uzbekistan, Kazakhstan & Kyrgyzstan. 100% genuine admission assistance and fee guidance."
            />

            {/* Header Section */}
            <div className="bg-neutral-light pt-24 pb-16 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full transform translate-x-1/2 -skew-x-12" />

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <span className="w-12 h-px bg-accent" />
                            <span className="text-accent font-bold tracking-widest text-xs uppercase">Elite Medical Education</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-primary leading-tight mb-6"
                        >
                            Global Universities, <br />
                            <span className="text-gray-400">Personalized Success.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl"
                        >
                            We partner with the world's most prestigious medical institutions to ensure your degree is recognized globally. Explore over 50 accredited universities.
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className="bg-white min-h-screen pb-24">
                <div className="container-custom">
                    {/* Filter Bar - Premium Glass Effect */}
                    <div className="sticky top-20 z-30 -mt-8 mb-16">
                        <div className="bg-white/80 backdrop-blur-md p-4 lg:p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-6 justify-between items-center">
                            <div className="relative w-full lg:w-96 group">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search by university name..."
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-hide">
                                <span className="text-gray-400 mr-2 flex items-center gap-1 shrink-0">
                                    <Globe size={16} /> <span className="text-xs font-bold uppercase tracking-tighter">Region</span>
                                </span>
                                {countries.map(country => (
                                    <button
                                        key={country}
                                        onClick={() => setSelectedCountry(country)}
                                        className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${selectedCountry === country
                                            ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200 active:scale-95'
                                            }`}
                                    >
                                        {country}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Universities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {filteredUniversities.length > 0 ? (
                            filteredUniversities.map(uni => (
                                <UniversityCard
                                    key={uni.id}
                                    university={uni}
                                    onKnowMore={handleKnowMore}
                                />
                            ))
                        ) : (
                            <div className="col-span-full py-24 text-center">
                                <div className="bg-gray-50 inline-block p-8 rounded-full mb-6">
                                    <Search size={48} className="text-gray-300 mx-auto" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Universities Found</h3>
                                <p className="text-gray-500">We couldn't find any results matching your search or filters.</p>
                                <button
                                    onClick={() => { setSearchTerm(""); setSelectedCountry("All") }}
                                    className="mt-6 text-primary font-bold hover:underline"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Bottom CTA Section */}
                    <section className="relative rounded-3xl overflow-hidden bg-primary py-16 px-8 md:px-16 text-center md:text-left">
                        {/* Background Accents */}
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/10 -skew-x-12 -translate-x-1/2" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="max-w-xl">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                                    Don't Navigate This Journey <span className="text-accent">Alone.</span>
                                </h2>
                                <p className="text-blue-100/80 text-lg leading-relaxed">
                                    Our experts have guided over 5,000 students to their dream medical careers. Download our 2025 Scholarship & Fee Guide.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                <Button variant="secondary" size="lg" className="shadow-2xl hover:scale-105 transition-transform" icon={<Download size={20} />}>
                                    Download Fee Guide
                                </Button>
                                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-primary transition-all">
                                    Talk to Expert
                                </Button>
                            </div>
                        </div>
                    </section>
                    {/* Know More Modal */}
                    {selectedUniversity && (
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            title={selectedUniversity.name}
                        >
                            <div className="space-y-12">
                                {/* Top Banner */}
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={new URL(`../assets/images/universities/${selectedUniversity.id === 'siberian-state-medical-university' ? 'siberian-state-university.jpeg' : selectedUniversity.id + '.webp'}`, import.meta.url).href}
                                        alt={selectedUniversity.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = selectedUniversity.image || 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                                    <div className="absolute bottom-6 left-8 text-white">
                                        <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-80 mb-2">
                                            <span className="flex items-center gap-1"><MapPin size={14} /> {selectedUniversity.location}</span>
                                            <span className="flex items-center gap-1"><Globe size={14} /> {selectedUniversity.country}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-serif font-bold">{selectedUniversity.name}</h2>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Left Content: Stats & Highlights */}
                                    <div className="lg:col-span-2 space-y-8">
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {[
                                                { icon: Calendar, label: 'Established', value: selectedUniversity.established },
                                                { icon: Clock, label: 'Duration', value: selectedUniversity.duration },
                                                { icon: GraduationCap, label: 'Medium', value: selectedUniversity.medium },
                                                { icon: BookOpen, label: 'Intake', value: 'September' },
                                            ].map((stat, i) => (
                                                <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                                                    <stat.icon size={20} className="text-accent mb-2" />
                                                    <p className="text-[10px] uppercase font-bold text-gray-400">{stat.label}</p>
                                                    <p className="text-sm font-bold text-primary">{stat.value}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                            <h4 className="text-xl font-serif font-bold text-primary mb-6 flex items-center gap-2">
                                                <CheckCircle className="text-accent" /> Key Features & Recognition
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {selectedUniversity.highlights.map((h, i) => (
                                                    <div key={i} className="flex items-start gap-3 p-3 bg-neutral-light rounded-xl">
                                                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                                            <CheckCircle size={14} className="text-accent-dark" />
                                                        </div>
                                                        <span className="text-sm text-gray-700 font-medium">{h}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Admission & Documents */}
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                                <h4 className="text-lg font-serif font-bold text-primary mb-4 flex items-center gap-2">
                                                    < GraduationCap className="text-accent" /> Eligibility
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed italic">
                                                    {selectedUniversity.details?.eligibility || 'Min 50% in Physics, Chemistry, Biology and NEET Qualified as per NMC guidelines.'}
                                                </p>
                                            </div>
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                                <h4 className="text-lg font-serif font-bold text-primary mb-4 flex items-center gap-2">
                                                    <FileText className="text-accent" /> Documents Required
                                                </h4>
                                                <ul className="text-xs text-gray-600 space-y-2">
                                                    {(selectedUniversity.details?.documents || ['10th/12th Marksheet', 'Original Passport', 'NEET Scorecard', 'Passport Photos', 'Birth Certificate']).map((doc, i) => (
                                                        <li key={i} className="flex items-center gap-2">
                                                            <div className="w-1 h-1 rounded-full bg-accent" /> {doc}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Content: Fee Table */}
                                    <div className="lg:col-span-1">
                                        <div className="bg-primary text-white p-8 rounded-3xl shadow-xl sticky top-8">
                                            <h4 className="text-xl font-serif font-bold mb-6 flex items-center gap-2">
                                                <DollarSign className="text-accent" /> Fee Structure
                                            </h4>
                                            <div className="space-y-4">
                                                {Object.entries(selectedUniversity.fees).map(([key, value], i) => (
                                                    <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                                                        <span className="text-sm text-blue-200 capitalize">{key.replace('_', ' ')}</span>
                                                        <span className="text-sm font-bold text-right">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-8">
                                                <Button variant="secondary" className="w-full">Apply Now</Button>
                                                <p className="text-[10px] text-center mt-4 text-blue-200 opacity-60">
                                                    *Calculated as per current market value of USD/INR.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    )}
                </div>
            </div>
        </>
    );
};

export default Universities;

