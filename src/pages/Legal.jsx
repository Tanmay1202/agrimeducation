import React from 'react';
import SEO from '../components/common/SEO';

const Privacy = () => (
    <div className="container-custom py-16">
        <SEO title="Privacy Policy" />
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
            <p>At Agrim Education, we value your privacy. This policy outlines how we collect, use, and protect your personal information.</p>
            <h3>Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you fill out a form, request a consultation, or contact us. This may include your name, phone number, email address, and academic details.</p>
            <h3>How We Use Your Information</h3>
            <p>We use your information to provide counseling services, communicate with you about universities, and assist with the admission process.</p>
            <h3>Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
    </div>
);

export const Terms = () => (
    <div className="container-custom py-16">
        <SEO title="Terms of Service" />
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="prose max-w-none">
            <p>Welcome to Agrim Education. By accessing our website, you agree to these terms.</p>
            <h3>Services</h3>
            <p>We provide educational consultancy services for MBBS admissions. We do not guarantee admission as it depends on university criteria and student performance.</p>
            <h3>Limitation of Liability</h3>
            <p>Agrim Education shall not be liable for any indirect or consequential damages arising from the use of our services.</p>
        </div>
    </div>
);

export default Privacy;
