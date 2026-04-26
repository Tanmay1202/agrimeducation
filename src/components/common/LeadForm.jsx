import React, { useState } from 'react';

import Button from './Button';
import { Send, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

const LeadForm = ({ className, title = "Book Free Counselling" }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitTarget, setSubmitTarget] = useState('yashpal');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Using simple state to avoid dependency issues if react-hook-form isn't installed
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
        neetScore: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(submitTarget);

        try {
            const message = `*New Lead from Agrim Education*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*City:* ${formData.city}%0A*NEET Status:* ${formData.neetScore}%0A*Message:* ${formData.message || 'N/A'}`;
            const targetNumber = submitTarget === 'yashpal' ? CONTACT_INFO.whatsapp.yashpal : CONTACT_INFO.whatsapp.kamal;
            window.open(`https://wa.me/${targetNumber}?text=${message}`, '_blank');
            setIsSubmitted(true);
        } catch (error) {
            console.error("Submission failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className={`bg-white p-8 rounded-xl shadow-xl flex flex-col items-center justify-center text-center h-full min-h-[400px] ${className}`}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">We have received your details. Our counselor will call you within 24 hours.</p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">Send Another Response</Button>
            </div>
        );
    }

    return (
        <div className={`bg-white p-6 md:p-8 rounded-xl shadow-xl border-t-4 border-accent ${className}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{title}</h3>
            <p className="text-gray-500 text-center mb-6 text-sm">Get expert guidance for your MBBS journey.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Student Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        placeholder="10-digit Mobile Number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            required
                            placeholder="e.g. Delhi"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="neetScore" className="block text-sm font-medium text-gray-700 mb-1">NEET Status</label>
                        <select
                            id="neetScore"
                            name="neetScore"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white text-gray-900"
                            value={formData.neetScore}
                            onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="Qualified">Qualified</option>
                            <option value="Not Qualified">Not Qualified</option>
                            <option value="Appearing 2026">Appearing 2026</option>
                            <option value="Just Inquiring">Just Inquiring</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="2"
                        placeholder="Tell us about your requirements..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-gray-900 placeholder-gray-400"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="pt-2">
                    <div className="flex items-center gap-2 mb-4">
                        <input type="checkbox" id="consent" required className="accent-primary w-4 h-4" />
                        <label htmlFor="consent" className="text-xs text-gray-500">I agree to receive updates on WhatsApp/Call.</label>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <Button type="submit" onClick={() => setSubmitTarget('yashpal')} variant="primary" className="w-full text-sm sm:text-base px-2" isLoading={isSubmitting === 'yashpal'} icon={<Send size={16} />}>
                            Send to Yashpal
                        </Button>
                        <Button type="submit" onClick={() => setSubmitTarget('kamal')} variant="primary" className="w-full text-sm sm:text-base px-2" isLoading={isSubmitting === 'kamal'} icon={<Send size={16} />}>
                            Send to Kamal
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LeadForm;
