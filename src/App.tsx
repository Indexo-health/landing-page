/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurMission from './pages/OurMission';
import HowItWorks from './pages/HowItWorks';
import GetStarted from './pages/GetStarted';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './contexts/LanguageContext';

function AppLayout() {
  const location = useLocation();
  const isGetStarted = location.pathname === '/get-started';

  return (
    <div className="min-h-screen flex flex-col">
      {!isGetStarted && <Header />}
      <main className="flex-grow bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<OurMission />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isGetStarted && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <AppLayout />
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}
