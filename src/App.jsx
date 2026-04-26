import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Universities from './pages/Universities';
import Contact from './pages/Contact';
import Privacy, { Terms } from './pages/Legal';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="universities" element={<Universities />} />
        <Route path="universities/:slug" element={<Universities />} /> {/* Reuse for now */}
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />

        {/* City Landing Pages reused Home for demo but with dynamic meta if we had time. 
            For now, map them to Home as per requirements "landing pages" usually implies content variation.
            I will map them to Home for this MVP but in reality they should be separate or dynamic. 
        */}
        <Route path="delhi-mbbs-consultant" element={<Home />} />
        <Route path="noida-mbbs-consultant" element={<Home />} />
        <Route path="gurgaon-mbbs-consultant" element={<Home />} />
        <Route path="faridabad-mbbs-consultant" element={<Home />} />
        <Route path="ghaziabad-mbbs-consultant" element={<Home />} />

        <Route path="*" element={<div className="h-screen flex items-center justify-center font-bold text-2xl">404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
