import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import LeadForm from '../components/common/LeadForm';
import { Check, ArrowLeft } from 'lucide-react';

const SERVICES_CONTENT = {
    'admission-assistance': {
        title: '100% Admission Assistance',
        subtitle: 'Complete support for university applications and securing admission',
        description: 'We help you secure admission in WHO/NMC approved universities abroad (Russia, Uzbekistan, etc.) with a 100% success rate.',
        content: [
            {
                heading: 'Admission Process',
                body: 'Our team handles the entire application process, ensuring all documents are verified and submitted correctly to secure your seat.',
                points: ['Document Verification & Translation', 'University Application Filing', 'Offer Letter Procurement', 'Admission Letter Confirmation', 'Hassle-free Processing']
            }
        ]
    },
    'guidance-counseling': {
        title: 'Personalized Guidance & Counseling',
        subtitle: 'One-on-one counseling for your medical career',
        description: 'Expert counseling for students and parents to navigate the complex admission process and make informed decisions.',
        content: [
            {
                heading: 'Career Counseling',
                body: 'We provide personalized sessions to understand student goals and financial requirements, offering the best-fit options.',
                points: ['One-on-one Counseling Sessions', 'Course Structure Explanation', 'Budget Planning', 'Country & University Comparison']
            }
        ]
    },
    'university-selection': {
        title: 'University Selection Guidance',
        subtitle: 'Find the best medical university for your budget and goals',
        description: 'Guidance in selecting the best medical universities based on accreditation, faculty, and affordability.',
        content: [
            {
                heading: 'Selection Criteria',
                body: 'We ensure students enroll in reputable institutions that meet global standards and Indian licensing requirements.',
                points: ['NMC/WHO Approved Universities', 'English Medium Education', 'A-Class Infrastructure & Labs', 'Affordable Fee Structures', 'Indian Food & Hostel Availability']
            }
        ]
    },
    'pre-departure-guidance': {
        title: 'Pre-Departure Guidance',
        subtitle: 'Everything you need to know before you fly',
        description: 'Complete travel and settlement guidance, including cultural adaptation and safety tips.',
        content: [
            {
                heading: 'Travel Assistance',
                body: 'We handle your visa process and ensure you are fully prepared for life in a new country.',
                points: ['Visa Application Filing', 'Document Apostille Support', 'Travel Insurance & Forex', 'Cultural Orientation Briefing']
            }
        ]
    },
    'on-arrival-benefits': {
        title: 'On-Arrival Benefits',
        subtitle: 'End-to-end support in the new country',
        description: 'Assistance with airport pickup, accommodation, and orientation sessions.',
        content: [
            {
                heading: 'Settlement Support',
                body: 'Our team receives you at the airport and helps you settle in comfortably without any stress.',
                points: ['Airport Pickup & Transport', 'Hostel Allotment & Registration', 'SIM Card & Bank Account Setup', 'University Campus Tour']
            }
        ]
    },
    'fmge-next-coaching': {
        title: 'FMGE/NEXT Coaching',
        subtitle: 'Expert faculty and structured study plans',
        description: 'Specialized coaching to help students clear their medical licensing exams with ease from Day 1.',
        content: [
            {
                heading: 'Coaching Highlights',
                body: 'We provide integrated coaching through top Indian partners to ensure students are prepared for licensing exams.',
                points: ['Live & Recorded Classes', 'Mock Test Series', 'Study Material Provided', 'Special Doubt Clearing Sessions']
            }
        ]
    }
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = SERVICES_CONTENT[slug];

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
                <Link to="/services" className="text-primary hover:underline">Back to Services</Link>
            </div>
        );
    }

    return (
        <>
            <SEO title={`${service.title} | Agrim Education`} description={service.description} />

            <div className="bg-neutral-light py-12 lg:py-16">
                <div className="container-custom">
                    <Link to="/services" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-6">
                        <ArrowLeft size={16} className="mr-1" /> Back to Services
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-12 text-left">
                        <div className="lg:w-2/3">
                            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{service.title}</h1>
                            <p className="text-xl text-accent font-medium mb-8">{service.subtitle}</p>

                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="mb-8 leading-relaxed">{service.description}</p>

                                {service.content.map((section, idx) => (
                                    <div key={idx} className="mb-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{section.heading}</h3>
                                        <p className="mb-4">{section.body}</p>
                                        {section.points && (
                                            <ul className="space-y-2">
                                                {section.points.map((point, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/3">
                            <div className="sticky top-28">
                                <LeadForm title={`Enquire for ${service.title}`} className="shadow-2xl border-t-0" />

                                <div className="mt-8 bg-primary text-white p-6 rounded-xl">
                                    <h4 className="font-bold text-lg mb-2">Need immediate help?</h4>
                                    <p className="text-blue-200 text-sm mb-4">Call our expert counselors directly.</p>
                                    <Button variant="secondary" size="sm" className="w-full">Call Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetail;
