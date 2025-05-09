
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Wellsphere',
  description = 'Wellsphere: Holistic health and wellbeing clinic offering comprehensive services for mind, body, and spirit.',
  type = 'website',
  name = 'Wellsphere',
  imageUrl = '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png'
}) => {
  const location = useLocation();
  const currentUrl = `https://wellsphere.com${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://wellsphere.com${imageUrl}`;

  // Create JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Wellsphere',
    url: 'https://wellsphere.com',
    logo: 'https://wellsphere.com/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png',
    description: 'Holistic health and wellbeing clinic',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@wellsphere.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/wellsphere',
      'https://twitter.com/wellsphere'
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={name} />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
