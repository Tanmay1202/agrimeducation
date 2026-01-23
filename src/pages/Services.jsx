import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { GraduationCap, ArrowRight } from 'lucide-react';

const SERVICES = [
    { slug: 'mbbs-abroad', title: 'MBBS Admission Abroad', desc: 'Direct admission in top universities in Russia, Uzbekistan, etc.' },
    { slug: 'mbbs-india', title: 'MBBS in India', desc: 'Admission guidance for private and deemed universities in India.' },
    { slug: 'visa-predeparture', title: 'Visa & Pre-Departure', desc: 'Complete documentation and travel support.' },
    { slug: 'fmge-next-coaching', title: 'FMGE / NExT Coaching', desc: 'Prepare for licensing exams with expert faculty.' },
    { slug: 'on-arrival', title: 'On-Arrival Support', desc: 'Hostel, food, and settlement assistance in the new country.' },
];

const Services = () => {
    return (
        <>
            <SEO title="Our Services | Agrim Education" description="Comprehensive services for MBBS students: Admission counselling, Visa support, FMGE coaching, and On-arrival assistance." />

            <div className="bg-neutral-light min-h-screen py-16">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
                        <p className="text-lg text-gray-600">End-to-end support for your medical education journey.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((service, idx) => (
                            <Link key={idx} to={`/services/${service.slug}`} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <GraduationCap size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.desc}</p>
                                <div className="flex items-center text-primary font-semibold">
                                    View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
