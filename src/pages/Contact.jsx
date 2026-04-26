import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
    // Similar form logic as LeadForm but specific to contact page layout
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <>
            <SEO
                title="Contact Us | Agrim Education"
                description="Visit our office in Faridabad or book a free consultation call. Contact Agrim Education for MBBS admission guidance."
            />

            <div className="bg-neutral-light py-16">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold text-center text-primary mb-12">Get In Touch</h1>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Micro Office</h3>
                                <p className="text-gray-600 text-sm">
                                    {CONTACT_INFO.address}
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <Phone size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Phone numbers</h3>
                                <p className="text-gray-600 text-sm mb-1">Yashpal: {CONTACT_INFO.phone.yashpalDisplay}</p>
                                <p className="text-gray-600 text-sm">Kamal: {CONTACT_INFO.phone.kamalDisplay}</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <Clock size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Working Hours</h3>
                                <p className="text-gray-600 text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p>
                                <p className="text-gray-600 text-sm">Sunday: By Appointment</p>
                            </div>
                        </div>

                        {/* Large Form */}
                        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4"><CheckCircle size={32} /></div>
                                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-gray-500">We'll get back to you shortly.</p>
                                    <button onClick={() => setSubmitted(false)} className="text-primary font-medium mt-4 hover:underline">Send another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                            <input required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Phone</label>
                                            <input required type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="+91 9999999999" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white">
                                            <option>General Inquiry</option>
                                            <option>MBBS Abroad</option>
                                            <option>MBBS India</option>
                                            <option>FMGE Coaching</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea required rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="How can we help you?"></textarea>
                                    </div>
                                    <Button type="submit" variant="primary" className="w-full md:w-auto" isLoading={isSubmitting} icon={<Send size={18} />}>Send Message</Button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="mt-12 w-full h-80 bg-gray-200 rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14032.776602987627!2d77.3094895!3d28.4014909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc71f6e9f557%3A0x6a2c3a3b0b0b0b0b!2sSector%2015%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
