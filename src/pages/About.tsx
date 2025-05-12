import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About Wellsphere Clinic
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                Our clinic delivers personalised healthcare services for individuals, families, and corporate executives. We offer in-depth consultations, comprehensive health assessments, and tailored health packages designed to meet your specific needs. With a focus on prevention, lifestyle optimisation, and long-term wellbeing, we ensure your care is as unique as you are.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    At Wellsphere Clinic, we are committed to delivering personalised, patient-focused care that puts your health and wellbeing at the centre of everything we do. We take the time to listen to your concerns, offer tailored clinical advice, and provide access to the most effective treatments available.
                  </p>
                  <p className="text-gray-600">
                    Our experienced team ensures you never feel rushed, and we're here to guide you through your healthcare journey with compassion and clarity. Should you require specialist input, we have an extensive network of trusted consultants and external providers to whom we can refer with confidence.
                  </p>
                  <p className="text-gray-600">
                    We believe in empowering our clients through education, proactive risk assessment, and early disease detection. Whether you're managing a chronic condition or simply looking to optimise your health, we offer the guidance and support you need to make informed decisions.
                  </p>
                  <p className="text-gray-600">
                    Whether you're a regular client or visiting, Wellsphere Clinic is here to provide expert, responsive, and compassionate care tailored to your needs.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Personalisation:</strong> We recognise that each individual is unique. We tailor our care, advice, and support to suit your personal health and lifestyle needs.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Excellence:</strong> We are committed to the highest standards in clinical care, service delivery, and client experience.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Empowerment:</strong> We believe in educating and guiding our clients, so they feel confident in making informed decisions about their health and wellbeing.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Compassion:</strong> We treat every client with respect, empathy, and understanding—because genuine care is at the heart of what we do.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Collaboration:</strong> We work closely with clients, families, and trusted specialists to deliver holistic, joined-up care that supports long-term wellness.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    As a GP with years of experience in both NHS and private healthcare, I've had the privilege of caring for people from all walks of life. Over time, I began to see a clear pattern: while medicine can treat illness, what truly transforms health is <b>prevention, personalisation, and patient empowerment</b>.
                  </p>
                  <p className="text-gray-600 mb-4">
                    I founded Wellsphere Clinic with a simple but powerful mission—to provide a space where people feel heard, cared for, and supported in all aspects of their health. Here, we don't just treat symptoms; we look at the whole person: lifestyle, stress, nutrition, sleep, movement, and mindset.
                  </p>
                  <p className="text-gray-600 mb-4">
                    My own journey into health and lifestyle medicine began with my patients. I listened to their stories—about burnout, weight struggles, menopause, and chronic conditions—and I realised they needed more than quick fixes. They needed time. They needed options. And most of all, they needed someone to help them make sense of their health in a way that was <b>scientific, practical, and compassionate</b>.
                  </p>
                  <p className="text-gray-600 mb-4">
                    At Wellsphere, our approach combines clinical excellence with holistic insight. Whether it's a comprehensive health check, support with lifestyle change, or guidance through complex health decisions, we are here to walk that journey with you.
                  </p>
                  <p className="text-gray-600 mb-4">
                    This is more than a clinic—it's a commitment to <b>better health, for real life</b>.
                  </p>
                  <div className="text-right italic text-gray-600">
                    Dr. Raina Mittal<br />
                    <span className="text-sm">Founder & Medical Director</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                <p className="text-gray-600 mb-8">
                  Our diverse team combines expertise in textile engineering, electronics, software development, 
                  artificial intelligence, and industry-specific knowledge to deliver holistic solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Dr. Raina Mittal",
                      role: "Founder & Medical Director",
                      bio: "Leading Wellsphere Clinic with a vision to transform healthcare through personalised, patient-focused care.",
                      image: "/images/Raina_Mittal_Headshot.jpg",
                      linkedin: "https://www.linkedin.com/in/raina-mittal"
                    },
                    {
                      name: "Dr. Shailendra Allen",
                      role: "Co-Founder",
                      bio: "Bringing extensive medical expertise and a shared vision for patient-centered healthcare.",
                      image: "/lovable-uploads/e502f601-c519-43a8-86f5-5fa89ae50d2f.png",
                      linkedin: "https://www.linkedin.com/in/shailendra-allen"
                    },
                    /* Commented out team members
                    {
                      name: "Chengjie Li",
                      role: "Hardware Lead",
                      bio: "Expert in embedded systems engineering, leading our hardware development efforts.",
                      image: "/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png"
                    },
                    {
                      name: "Love",
                      role: "COO",
                      bio: "Overseeing daily operations and ensuring business objectives are met effectively.",
                      image: "/lovable-uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png"
                    }
                    */
                  ].map((member, i) => (
                    <Card key={i} className="bg-gray-50 border border-gray-100 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-gray-500 text-sm mb-2">{member.role}</p>
                          <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                          {member.linkedin && (
                            <a 
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                              LinkedIn Profile
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/careers" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Join Our Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
