
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="Wellsphere - Health and Wellbeing Clinic" 
        description="Wellsphere: Holistic health and wellbeing clinic offering comprehensive services for mind, body, and spirit."
        imageUrl="/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
    </PageLayout>
  );
};

export default Index;
