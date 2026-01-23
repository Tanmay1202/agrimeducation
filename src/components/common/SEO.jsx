import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonicalUrl, type = 'website', schema }) => {
    const siteName = "Agrim Education";
    const defaultTitle = "MBBS Admission Consultant in Delhi NCR | Agrim Education";
    const defaultDescription = "Trusted MBBS admission consultants in Delhi NCR. Get free counseling for MBBS in India & Abroad (Russia, Uzbekistan, Kazakhstan). 100% admission assistance.";

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={canonicalUrl || window.location.href} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:url" content={canonicalUrl || window.location.href} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />

            {/* Geo Tags for Local SEO */}
            <meta name="geo.region" content="IN-HR" />
            <meta name="geo.placename" content="Faridabad" />
            <meta name="geo.position" content="28.4089;77.3178" />
            <meta name="ICBM" content="28.4089, 77.3178" />

            {/* Schema.org JSON-LD */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
