import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import {
    Contact,
    Stethoscope,
    Landmark,
    Plane,
    Briefcase,
    Users,
    ArrowRight
} from 'lucide-react';

const SERVICES = [
    {
        slug: 'admission-assistance',
        title: '100% ADMISSION ASSISTANCE',
        desc: 'Complete support for university applications, document verification, and securing admission, making the process hassle-free for students.',
        icon: Contact
    },
    {
        slug: 'guidance-counseling',
        title: 'PERSONALIZED GUIDANCE & COUNSELING',
        desc: 'One-on-one counseling to help students navigate the admission process, understand course structures, and make informed academic decisions.',
        icon: Stethoscope
    },
    {
        slug: 'university-selection',
        title: 'UNIVERSITY SELECTION',
        desc: 'Guidance in selecting the best medical universities based on accreditation, faculty, and affordability. We ensure students enroll in reputable institutions.',
        icon: Landmark
    },
    {
        slug: 'pre-departure-guidance',
        title: 'PRE-DEPARTURE GUIDANCE',
        desc: 'Travel and settlement guidance, including cultural adaptation, documentation, and safety tips, to help students prepare before moving abroad.',
        icon: Plane
    },
    {
        slug: 'on-arrival-benefits',
        title: 'ON-ARRIVAL BENEFITS',
        desc: 'Assistance with airport pickup, accommodation, SIM card activation, and orientation sessions, ensuring a smooth transition into a new country.',
        icon: Briefcase
    },
    {
        slug: 'fmge-next-coaching',
        title: 'FMGE/NEXT COACHING',
        desc: 'Specialized coaching to help students clear their medical licensing exams with ease. Our expert faculty and structured study plans ensure top performance.',
        icon: Users
    },
];

const Services = () => {
    return (
        <>
            <SEO title="Our Services | Agrim Education" description="Comprehensive services for MBBS students: Admission counselling, Visa support, FMGE coaching, and On-arrival assistance." />

            <div className="bg-blue-50/50 min-h-screen py-16">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-500 mb-4 uppercase tracking-wide">
                            Comprehensive Services by Agrim Education: Guiding Your Medical Journey Abroad
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {SERVICES.map((service, idx) => (
                            <div key={idx} className="flex flex-col group">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <service.icon size={28} />
                                    </div>
                                    <h3 className="text-lg font-extrabold text-primary leading-tight pt-1">
                                        {service.title}
                                    </h3>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {service.desc}
                                    </p>
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="inline-flex items-center text-primary font-bold text-sm hover:underline"
                                    >
                                        LEARN MORE <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;

