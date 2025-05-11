import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WomensHealthAssessment from "./pages/WomensHealthAssessment";
import MentalHealthAssessment from "./pages/MentalHealthAssessment";
import MenopauseClinic from "./pages/MenopauseClinic";
import MensHealthAssessment from "./pages/MensHealthAssessment";
import GutHealthClinic from "./pages/GutHealthClinic";
import TechDetails from "./pages/TechDetails";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";

// Note: For now these routes still point to the existing project pages
// These should be replaced with actual service pages when they're created
const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/service1" element={<WomensHealthAssessment />} />
            <Route path="/services/service2" element={<MentalHealthAssessment />} />
            <Route path="/services/service3" element={<MenopauseClinic />} />
            <Route path="/services/service4" element={<MensHealthAssessment />} />
            <Route path="/services/service5" element={<GutHealthClinic />} />
            <Route path="/tech-details" element={<TechDetails />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
