import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="bg-gradient-to-b from-white to-black text-white relative py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contact Us Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have any questions about our services? Reach out to our team and let’s discuss how we can support your wellbeing.
          </p>
        </div>

        {/* Single, centered contact card */}
        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-700 max-w-md w-full">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/images/Wellsphere_Logo.jpg" 
                alt="Wellsphere Logo" 
                className="w-32 h-32 rounded-full mb-4 object-cover" 
              />
              <h3 className="text-xl font-bold text-gray-900">General Contact</h3>
              <p className="text-gray-600 mb-4">We're here to help</p>
              <div className="flex flex-col space-y-3">
                <a 
                  href="mailto:contactwellsphere@gmail.com" 
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  contactwellsphere@gmail.com
                </a>
                <a 
                  href="https://www.linkedin.com/company/wellsphere-wellbody-wellmind-livewell/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
