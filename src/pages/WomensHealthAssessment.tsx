import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Shield, Radio, Activity, Box } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FireCatProject = () => {
  return (
    <ProjectPageLayout 
      title="Women's Health Assessment" 
      subtitle="Comprehensive health assessment for women" 
      imageUrl="/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png" 
      brandName="Women's Health" 
      darkMode={true}
    >  
      <SEO 
        title="Women's Health Assessment - Wellsphere" 
        description="Comprehensive health assessment for women"
        type="service"
      />
      
      <h2 className="text-3xl font-bold mb-6">Why a Women's Health Assessment?</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <p>
          Our Women's Health Assessment provides a comprehensive evaluation of your health status, 
          focusing on women-specific health concerns and preventive care. This thorough check-up 
          helps identify potential health issues early and provides personalized recommendations 
          for maintaining optimal health.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Early Detection of Health Issues</h4>
            <p>Identify potential health conditions before symptoms appear, allowing for early intervention and better outcomes.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Personalised Health Insights</h4>
            <p>Gain a clear understanding of your current health status and risk factors based on your age, lifestyle, and medical history.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Prevention Over Cure</h4>
            <p>Take proactive steps to prevent future illnesses through tailored advice, lifestyle changes, and regular monitoring</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Peace of Mind</h4>
            <p>Reassure yourself with a thorough check-up, reducing anxiety and uncertainty about your health</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Improved Long-Term Health Outcomes</h4>
            <p>Detecting conditions early can lead to more effective treatment and better long-term health management.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Personalised Wellness Guidance</h4>
            <p>Receive expert advice and tailored recommendations to help you achieve your health goals, whether it's improving fitness, nutrition, stress management, or overall wellbeing.</p>
          </div>
        </div>
      </div>
      
      {/* Packages Section */}
      <h2 className="text-3xl font-bold mb-8 mt-16">Packages</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Bronze Package */}
        <Card className="flex flex-col h-full border-t-4 border-t-amber-700 hover:shadow-lg transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-center">Bronze</CardTitle>
            <p className="text-3xl font-bold text-center mt-2">£150</p>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-amber-700">✓</div>
                <span>Blood pressure check</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-amber-700">✓</div>
                <span>BMI</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-amber-700">✓</div>
                <span>Cervical smear test</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-amber-700">✓</div>
                <span>Urine analysis</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button className="w-full">Book Now</Button>
          </CardFooter>
        </Card>
        
        {/* Silver Package */}
        <Card className="flex flex-col h-full border-t-4 border-t-gray-400 hover:shadow-lg transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-center">Silver</CardTitle>
            <p className="text-3xl font-bold text-center mt-2">£250</p>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              <li className="flex items-start font-medium">
                <div className="mr-2 mt-1 text-gray-500">✓</div>
                <span>Includes everything in Bronze</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-gray-500">✓</div>
                <span>Breast exam</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-gray-500">✓</div>
                <span>Hormonal blood work</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button className="w-full" variant="secondary">Book Now</Button>
          </CardFooter>
        </Card>
        
        {/* Gold Package */}
        <Card className="flex flex-col h-full border-t-4 border-t-yellow-500 hover:shadow-lg transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-center">Gold</CardTitle>
            <p className="text-3xl font-bold text-center mt-2">£350</p>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              <li className="flex items-start font-medium">
                <div className="mr-2 mt-1 text-yellow-500">✓</div>
                <span>Includes everything in Silver</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-yellow-500">✓</div>
                <span>GP consultation</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-yellow-500">✓</div>
                <span>Lifestyle health plan</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Book Now</Button>
          </CardFooter>
        </Card>
      </div>
    </ProjectPageLayout>
  );
};

export default FireCatProject;
