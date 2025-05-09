import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Shield, Radio, Activity, Box } from 'lucide-react';
const FireCatProject = () => {
  return
        <ProjectPageLayout
      title="Well Women Health Check"
      subtitle="Advanced motion analysis for optimal performance"
      imageUrl="/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png""
      brandName="FireCat Group"
      darkMode={true}
    >  
    
    
    
    <h2 className="text-3xl font-bold mb-6">Why a Well Women Health Check?</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        
        <p>
          FireCat Group aimed to enhance the safety and operational effectiveness of personnel in high-risk 
          environments such as law enforcement, military operations, and firefighting. They required an advanced, 
          integrated sensor solution that could provide critical real-time data for risk management and decision-making.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Life-saving technology</h4>
            <p>Rapid data acquisition facilitates quicker responses in emergencies.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Technological advancement</h4>
            <p>Machine learning prevents false alarms by adapting to individual behavioral baselines.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Long-lasting and secure</h4>
            <p>Durable hardware with extended lifespan, robust encryption, and full GDPR compliance.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Easy Maintenance</h4>
            <p>Sensors are fully washable and require minimal maintenance.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">User-Friendly</h4>
            <p>Plug & Play installation within minutes, providing hours of continuous operation per charge.</p>
          </div>
        </div>
      </div>
      
     
    </ProjectPageLayout>;
};
export default FireCatProject;
