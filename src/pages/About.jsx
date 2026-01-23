import React from 'react';
import SEO from '../components/common/SEO';
import { TEAM_MEMBERS } from '../constants';
import { Check } from 'lucide-react';

const About = () => {
    return (
        <>
            <SEO
                title="About Us | Agrim Education"
                description="Learn about Agrim Education, our mission, vision, and the team of experts guiding students for MBBS in India & Abroad."
            />

            {/* Hero */}
            <div className="bg-primary text-white py-16">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Agrim Education</h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">Empowering aspiring doctors with the right guidance, transparency, and trust.</p>
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="container-custom">
                    {/* Story / Mission */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="prose prose-lg text-gray-600">
                            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                            <p>
                                Agrim Education is your one-stop solution for pursuing a medical degree abroad. As a premier educational consultancy, our mission is to empower aspiring doctors by connecting them with prestigious medical institutions across the globe.
                            </p>
                            <p>
                                We help you to get a thorough details of the best Universities, colleges, courses, etc. related to MBBS and MS. We are responsive and believe in delivering the right solutions to all your queries. For that, we spend our time in clear communication with our clients as well as different overseas entities.
                            </p>
                            <p>
                                We are responsible towards our work and never refuse to the call of duty whenever required to meet your goals and make your dreams come true.
                            </p>

                            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Core Values</h3>
                            <ul className="space-y-2">
                                {["Transparency in Fees & Process", "Student-First Approach", "End-to-End Support", "Honest Counseling"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Check size={20} className="text-green-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent transform rotate-3 rounded-2xl opacity-20"></div>
                            <img
                                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000"
                                alt="Team meeting"
                                className="relative rounded-2xl shadow-lg w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-primary text-center mb-12">Meet Our Team</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {TEAM_MEMBERS.map((member, idx) => (
                                <div key={idx} className="bg-neutral-light rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                                    <div className="h-64 bg-gray-300 overflow-hidden relative">
                                        {/* Placeholder for image since we don't have real assets yet */}
                                        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary/30">
                                            <span className="text-6xl font-serif">{member.name[0]}</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                        <p className="text-accent font-medium mb-4">{member.role}</p>
                                        <p className="text-gray-600 text-sm">{member.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
