import React from 'react';
import { motion } from 'framer-motion';
import LeadForm from '../components/common/LeadForm';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import { Check, ArrowRight, Star, Globe, Shield, GraduationCap, MapPin, Phone, Users } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Home = () => {
    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Agrim Education",
        "url": "https://agrimeducation.com",
        "logo": "https://agrimeducation.com/logo.png",
        "image": "https://agrimeducation.com/hero-image.jpg",
        "description": "Trusted MBBS admission consultants in Delhi NCR. 100% admission assistance for MBBS in Russia, Uzbekistan, and Kazakhstan.",
        "telephone": "+91-9999177149",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sector 15 Market",
            "addressLocality": "Faridabad",
            "addressRegion": "Haryana",
            "postalCode": "121007",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.4089,
            "longitude": 77.3178
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "10:00",
            "closes": "19:00"
        },
        "sameAs": [
            "https://www.facebook.com/agrimeducation",
            "https://www.instagram.com/agrimeducation",
            "https://www.linkedin.com/company/agrimeducation"
        ]
    };

    return (
        <>
            <SEO
                title="MBBS Admission Consultant in Delhi NCR | Agrim Education"
                description="Agrim Education - Trusted MBBS admission consultants in Delhi NCR. We provide free counselling, university selection, and end-to-end support for MBBS in India & Abroad."
                schema={homeSchema}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="container-custom py-16 lg:py-24 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                        {/* Hero Text */}
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent font-semibold text-sm mb-6">
                                    Trusted by 500+ Students & Parents
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                                    Start Your MBBS Journey with <span className="text-accent">Expert Guidance</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                    Delhi NCR's most trusted admission consultants. Free counseling, verified universities, and end-to-end support from application to on-arrival.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Button variant="secondary" size="lg" onClick={() => document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' })}>
                                        Book Free Counselling
                                    </Button>
                                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                                        <a href={`tel:${CONTACT_INFO.phone.yashpalValue}`} className="w-full sm:w-auto">
                                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary w-full">
                                                Call Yashpal
                                            </Button>
                                        </a>
                                        <a href={`tel:${CONTACT_INFO.phone.kamalValue}`} className="w-full sm:w-auto">
                                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary w-full">
                                                Call Kamal
                                            </Button>
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <Shield className="text-accent" size={20} />
                                        <span>100% Genuine</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Globe className="text-accent" size={20} />
                                        <span>8+ Countries</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <GraduationCap className="text-accent" size={20} />
                                        <span>MCI/WHO Approved</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Hero Form */}
                        <div className="lg:w-1/2 w-full max-w-md" id="lead-form">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <LeadForm />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Band */}
            <div className="bg-neutral-light border-b border-gray-200 py-6">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4 text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-lg">500+</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Students Placed</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-10 bg-gray-300"></div>
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                <Users size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-lg">Expert Counselors</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Professional Guidance</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-10 bg-gray-300"></div>
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                <Globe size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-lg">15+ Universities</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Direct Tie-ups</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-10 bg-gray-300"></div>
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                <Star size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-lg">4.9/5 Rating</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Google Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Comprehensive Admission Support</h2>
                        <p className="text-lg text-gray-600">We don't just help you get admission. We support you throughout your medical journey until you become a doctor. </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Admission Assistance', desc: '100% support for university applications, document verification, and securing admission.', link: '/services/admission-assistance' },
                            { title: 'Guidance & Counseling', desc: 'One-on-one counseling to help students navigate the admission process and make informed decisions.', link: '/services/guidance-counseling' },
                            { title: 'University Selection', desc: 'Guidance in selecting the best medical universities based on accreditation, faculty, and affordability.', link: '/services/university-selection' },
                            { title: 'Pre-Departure Guidance', desc: 'Travel and settlement guidance, safety tips, and documentation support before you fly.', link: '/services/pre-departure-guidance' },
                            { title: 'On-Arrival Benefits', desc: 'Airport pickup, accommodation, SIM card, and orientation sessions in the new country.', link: '/services/on-arrival-benefits' },
                            { title: 'FMGE/NExT Coaching', desc: 'Expert faculty and structured study plans to help you clear licensing exams with ease.', link: '/services/fmge-next-coaching' },
                        ].map((service, idx) => (
                            <Link key={idx} to={service.link} className="group bg-neutral-light p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                                <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <GraduationCap size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.desc}</p>
                                <div className="flex items-center text-primary font-semibold text-sm">
                                    Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* About / Why Choose Us */}
            <section className="section-padding bg-warm-gray-50 bg-neutral-light">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070"
                                alt="Medical students"
                                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Trust Agrim Education?</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We are more than just consultants; we are mentors. Led by education experts, we understand the nuances of medical education better than anyone else.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Transparency First", desc: "No hidden costs. We provide a complete fee structure breakdown before you apply." },
                                    { title: "Personalized Roadmap", desc: "We analyze your NEET score and budget to suggest the perfect university match." },
                                    { title: "Local Presence", desc: "Offices in Delhi NCR and representatives in all partner universities abroad." },
                                    { title: "Lifetime Support", desc: "We are just a call away for your entire 6-year duration." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link to="/about">
                                    <Button variant="primary">Read More About Us</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* City Links for SEO */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <p className="font-semibold text-gray-900 mb-4">We serve students across Delhi NCR:</p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        {['Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'Ghaziabad', 'Greater Noida'].map(city => (
                            <Link to={`/${city.toLowerCase()}-mbbs-consultant`} key={city} className="bg-white border text-gray-700 px-3 py-1 rounded hover:border-primary hover:text-primary transition-colors">
                                MBBS Consultant in {city}
                            </Link>
                        ))}
                        <span className="text-gray-400 px-2 self-center">|</span>
                        <Link to="/services/admission-assistance" className="text-primary hover:underline">MBBS Abroad Consultants</Link>
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="py-16 bg-accent">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold text-primary-dark mb-4">Ready to start your Medical Career?</h2>
                    <p className="text-primary-dark/80 text-lg mb-8 max-w-2xl mx-auto">Book a free consultation call with our expert counselors today. No charges, honest advice.</p>
                    <div className="flex justify-center gap-4">
                        <Button variant="primary" size="lg" className="bg-primary-dark text-white hover:bg-white hover:text-primary-dark" onClick={() => document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' })}>
                            Get Free Counselling
                        </Button>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <a href={`https://wa.me/${CONTACT_INFO.whatsapp.yashpal}`} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-accent"> WhatsApp Yashpal</Button>
                            </a>
                            <a href={`https://wa.me/${CONTACT_INFO.whatsapp.kamal}`} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-accent"> WhatsApp Kamal</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
