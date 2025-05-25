import React from 'react';
    import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
    import Layout from '@/components/Layout';
    import HomePage from '@/pages/HomePage';
    import CoursesPage from '@/pages/CoursesPage';
    import UpdatesPage from '@/pages/UpdatesPage';
    import AchievementsPage from '@/pages/AchievementsPage';
    import AboutUsPage from '@/pages/AboutUsPage';
    import ContactPage from '@/pages/ContactPage';
    import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
    import TermsOfServicePage from '@/pages/TermsOfServicePage';
    import { Toaster } from '@/components/ui/toaster';
    import { TooltipProvider } from "@/components/ui/tooltip";


    function App() {
      return (
        <TooltipProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/updates" element={<UpdatesPage />} />
                <Route path="/achievements" element={<AchievementsPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
            <Toaster />
          </Router>
        </TooltipProvider>
      );
    }

    export default App;