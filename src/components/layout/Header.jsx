import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import { NAV_LINKS, CONTACT_INFO } from '../../constants';
import { cn } from '../../utils/cn';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header className={cn(
            "fixed w-full z-50 transition-all duration-300",
            isScrolled ? "bg-white shadow-lg py-2" : "bg-white/95 backdrop-blur-sm py-4"
        )}>
            {/* Top Bar */}
            <div className="hidden lg:block border-b border-gray-100 pb-2 mb-2">
                <div className="container-custom flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-6">
                        <a href={`tel:${CONTACT_INFO.phone.value}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Phone size={16} />
                            <span>{CONTACT_INFO.phone.display}</span>
                        </a>
                        <span className="hidden xl:flex items-center gap-2">
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">100% Admission Assistance</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-3">
                            <a href="#" className="hover:text-primary"><Facebook size={16} /></a>
                            <a href="#" className="hover:text-primary"><Instagram size={16} /></a>
                            <a href="#" className="hover:text-primary"><Linkedin size={16} /></a>
                        </div>
                        <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-600 font-medium hover:underline">
                            <MessageCircle size={16} />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 z-50">
                    <div className="bg-primary text-white p-2 rounded-lg">
                        <span className="font-serif font-bold text-2xl">A</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif font-bold text-xl text-primary leading-none">Agrim</span>
                        <span className="text-xs tracking-wider text-gray-500 uppercase">Education</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                to={link.path}
                                className={cn(
                                    "font-medium text-gray-700 hover:text-primary transition-colors py-2 flex items-center gap-1",
                                    location.pathname === link.path && "text-primary font-bold"
                                )}
                            >
                                {link.name}
                                {link.subItems && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                            </Link>

                            {/* Dropdown */}
                            {link.subItems && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg p-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 border border-gray-100">
                                    {link.subItems.map(subItem => (
                                        <Link
                                            key={subItem.path}
                                            to={subItem.path}
                                            className="block px-4 py-3 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button variant="primary" size="sm" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
                        Free Counselling
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden z-50 text-gray-700 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-white z-40 lg:hidden pt-24 px-4 overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <div key={link.name} className="border-b border-gray-100 pb-2">
                                    <Link
                                        to={link.path}
                                        className="text-xl font-medium text-gray-800 block py-2"
                                    >
                                        {link.name}
                                    </Link>
                                    {link.subItems && (
                                        <div className="pl-4 flex flex-col gap-2 mt-2">
                                            {link.subItems.map(subItem => (
                                                <Link
                                                    key={subItem.path}
                                                    to={subItem.path}
                                                    className="text-gray-600 py-1"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="mt-4 flex flex-col gap-3">
                                <Button variant="primary" className="w-full" onClick={() => {
                                    setIsOpen(false);
                                    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    Book Free Counselling
                                </Button>
                                <a href={`tel:${CONTACT_INFO.phone.value}`} className="w-full">
                                    <Button variant="outline" className="w-full" icon={<Phone size={18} />}>
                                        Call Now
                                    </Button>
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
