import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../../constants';
import logo from '../../assets/images/logo.png';
import Button from '../common/Button';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-dark text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & About */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <img src={logo} alt="Agrim Education Logo" className="h-10 w-auto object-contain brightness-0 invert" />
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-xl leading-none">Agrim</span>
                                <span className="text-[10px] tracking-wider text-gray-400 uppercase">Education</span>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your trusted partner for MBBS admissions in India and abroad. We guide you from university selection to settled practice.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Linkedin size={18} /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-accent inline-block pb-2">Quick Links</h3>
                        <ul className="space-y-3">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full text-[10px]" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-accent inline-block pb-2">Our Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services/admission-assistance" className="text-gray-400 hover:text-accent transition-colors">100% Admission Assistance</Link></li>
                            <li><Link to="/services/guidance-counseling" className="text-gray-400 hover:text-accent transition-colors">Personalized Guidance</Link></li>
                            <li><Link to="/services/university-selection" className="text-gray-400 hover:text-accent transition-colors">University Selection</Link></li>
                            <li><Link to="/services/pre-departure-guidance" className="text-gray-400 hover:text-accent transition-colors">Pre-Departure Guidance</Link></li>
                            <li><Link to="/services/fmge-next-coaching" className="text-gray-400 hover:text-accent transition-colors">FMGE/NEXT Coaching</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-accent inline-block pb-2">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <Phone className="text-accent mt-1 flex-shrink-0" size={20} />
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-500 uppercase font-bold">Yashpal Rawal</span>
                                        <a href={`tel:${CONTACT_INFO.phone.yashpalValue}`} className="text-gray-400 hover:text-accent transition-colors text-sm">
                                            {CONTACT_INFO.phone.yashpalDisplay}
                                        </a>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-500 uppercase font-bold">Kamal Mittal</span>
                                        <a href={`tel:${CONTACT_INFO.phone.kamalValue}`} className="text-gray-400 hover:text-accent transition-colors text-sm">
                                            {CONTACT_INFO.phone.kamalDisplay}
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-accent flex-shrink-0" size={20} />
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-accent transition-colors text-sm">
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-4">
                                <MapPin className="text-accent mt-1 flex-shrink-0" size={20} />
                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm leading-relaxed">{CONTACT_INFO.address}</span>
                                    <a 
                                        href={CONTACT_INFO.mapLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-accent hover:underline text-xs flex items-center gap-1 font-bold"
                                    >
                                        <ExternalLink size={12} /> Get Directions
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Admission Support Bar */}
                <div className="border-t border-gray-800 py-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            100% Admission Assistance
                        </span>
                        <span className="text-gray-500 text-xs hidden md:block">|</span>
                        <span className="text-gray-400 text-xs italic">Securing your medical future since 2012</span>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest mr-2">WhatsApp Support:</span>
                        <a href={`https://wa.me/${CONTACT_INFO.whatsapp.yashpal}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-500 font-bold hover:text-green-400 transition-colors text-sm" aria-label="WhatsApp Yashpal">
                            <MessageCircle size={18} />
                            <span>Yashpal</span>
                        </a>
                        <a href={`https://wa.me/${CONTACT_INFO.whatsapp.kamal}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-500 font-bold hover:text-green-400 transition-colors text-sm" aria-label="WhatsApp Kamal">
                            <MessageCircle size={18} />
                            <span>Kamal</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {currentYear} Agrim Education. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                        <Link to="/sitemap.xml" className="hover:text-white">Sitemap</Link>
                    </div>
                </div>

                <div className="text-center mt-8 text-xs text-gray-600 flex justify-center items-center gap-1">
                    Made with <Heart size={10} className="text-red-500 fill-current" /> for Future Doctors
                </div>
            </div>
        </footer>
    );
};

export default Footer;
