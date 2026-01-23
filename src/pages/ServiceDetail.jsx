import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import LeadForm from '../components/common/LeadForm';
import { Check, ArrowLeft } from 'lucide-react';

const SERVICES_CONTENT = {
    'mbbs-abroad': {
        title: 'MBBS Admission Abroad',
        subtitle: 'Study in Top Government Universities in Russia, Uzbekistan, Kazakhstan & More',
        description: 'We help you secure admission in WHO/NMC approved universities with affordable tuition fees and English medium instruction.',
        content: [
            {
                heading: 'Why Study MBBS Abroad?',
                body: 'For many Indian students, studying MBBS abroad is a better option than private colleges in India due to lower costs and high quality of education. Our partner universities offer:',
                points: ['Low Tuition Fees (Starting ₹3.5 Lakh/Year)', 'English Medium Instruction', 'Global Recognition (WHO, NMC, ECFMG)', 'No Donation / Capitation Fee', 'Modern Infrastructure & Clinical Exposure']
            },
            {
                heading: 'Top Destinations',
                body: 'We guide you to the best countries based on your budget and preference:',
                points: ['Russia: Known for high academic standards and old universities.', 'Uzbekistan: Nearest to India, safe, and very affordable.', 'Kazakhstan: 5-year course duration and modern facilities.', 'Georgia & Kyrgyzstan: Emerging hubs for medical education.']
            }
        ]
    },
    'mbbs-india': {
        title: 'MBBS Admission Guidance in India',
        subtitle: 'Navigate the complex counselling process for Deemed & Private Colleges',
        description: 'Expert counselling for NEET qualified students to get admission in top private and deemed medical colleges in India.',
        content: [
            {
                heading: 'Counselling Support',
                body: 'The counselling process in India (MCC All India Quota & State Quotas) can be confusing. We help you with:',
                points: ['Choice Filling Strategy', 'Documentation Support', 'Budget Planning & Negotiation (where applicable)', 'Last Round / Mop-Up Round Guidance']
            },
            {
                heading: 'Management & NRI Quota',
                body: 'If you have a lower NEET score but a flexible budget, we can help you secure seats in reputed private medical colleges through legitimate Management or NRI quotas.'
            }
        ]
    },
    'visa-predeparture': {
        title: 'Visa & Pre-Departure Support',
        subtitle: 'Hassle-free documentation and travel arrangements',
        description: 'We handle your entire visa process and ensure you are fully prepared for life in a new country.',
        content: [
            {
                heading: 'Visa Services',
                body: 'Our visa success rate is 100%. We manage:',
                points: ['Invitation Letter Procurement', 'Visa Application Filing', 'Document Apostille & Translation', 'Embassy Interview Preparation']
            },
            {
                heading: 'Pre-Departure Briefing',
                body: 'Before you fly, we conduct a detailed briefing session covering:',
                points: ['Packing List & Essentials', 'Forex & Travel Cards', 'Sim Cards & Communication', 'Cultural Do’s and Don’ts']
            }
        ]
    },
    'fmge-next-coaching': {
        title: 'FMGE / NExT Coaching',
        subtitle: 'Start preparing for your licensure exam from Day 1',
        description: 'Don’t wait until you graduate. Our integrated coaching program helps you clear the Indian licensing exam in the first attempt.',
        content: [
            {
                heading: 'Our Coaching Partner',
                body: 'We have tied up with India’s leading FMGE coaching institutes to provide online and offline classes for our students abroad.',
                points: ['Live Interactive Classes', 'Recorded Video Lectures', 'Regular Mock Tests', 'Special Doubt Clearing Sessions']
            }
        ]
    },
    'on-arrival': {
        title: 'On-Arrival Support',
        subtitle: 'We are with you even after you land',
        description: 'Our team receives you at the airport and helps you settle in comfortably.',
        content: [
            {
                heading: 'Services Included',
                body: 'We ensure you feel at home in the new country without worrying about logistics.',
                points: ['Airport Pickup & Transport to University', 'Hostel Allotment Assistance', 'Bank Account Opening', 'Local Sim Card Activation', 'Police Registration & Medical Checkup Support']
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
