import { MapPin, Phone, Mail, Clock, ShieldCheck, GraduationCap, Globe, Users, BookOpen, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const CONTACT_INFO = {
    phone: {
        yashpalDisplay: "+91-9818599149",
        yashpalValue: "919818599149",
        kamalDisplay: "+91-9217017325",
        kamalValue: "919217017325"
    },
    email: "info@agrimeducation.com",
    address: "Sector 15 Market, Faridabad, Haryana, India",
    whatsapp: {
        yashpal: "919818599149",
        kamal: "919217017325"
    },
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
