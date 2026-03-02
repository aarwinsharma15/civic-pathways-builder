import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Eagerly load the homepage since it's the landing page
import Index from "./pages/Index";

// Lazy load all other pages
const OurWork = lazy(() => import("./pages/OurWork"));
const Programs = lazy(() => import("./pages/Programs"));
const Membership = lazy(() => import("./pages/Membership"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const Hiring = lazy(() => import("./pages/Hiring"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CodeOfConduct = lazy(() => import("./pages/CodeOfConduct"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/hiring" element={<Hiring />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
