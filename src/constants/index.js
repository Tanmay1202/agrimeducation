import { MapPin, Phone, Mail, Clock, ShieldCheck, GraduationCap, Globe, Users, BookOpen, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const CONTACT_INFO = {
    phone: {
        display: "+91-9999177149",
        value: "919999177149",
        secondary: "+91-9818757325"
    },
    email: "info@agrimeducation.com",
    address: "Sector 15 Market, Faridabad, Haryana, India",
    whatsapp: "919999177149",
    mapLink: "https://maps.google.com/?q=Agrim+Education+Sector+15+Faridabad"
};

export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
        name: 'Services',
        path: '/services',
        subItems: [
            { name: 'Admission Assistance', path: '/services/admission-assistance' },
            { name: 'Guidance & Counseling', path: '/services/guidance-counseling' },
            { name: 'University Selection', path: '/services/university-selection' },
            { name: 'Pre-Departure Guidance', path: '/services/pre-departure-guidance' },
            { name: 'On-Arrival Benefits', path: '/services/on-arrival-benefits' },
            { name: 'FMGE/NEXT Coaching', path: '/services/fmge-next-coaching' },
        ]
    },
    { name: 'Universities', path: '/universities' },
    { name: 'Contact', path: '/contact' },
];

export const TEAM_MEMBERS = [

    {
        name: "Yashpal Rawal",
        role: "Director & Lead Consultant",
        image: "/assets/team/member2.jpg",
        bio: "Expert in international education relations and university placements."
    },
    {
        name: "Kamal Mittal",
        role: "Director & Lead Consultant",
        image: "/assets/team/member2.jpg",
        bio: "Expert in international education relations and university placements."
    }
];
