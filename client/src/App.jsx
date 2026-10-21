import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import shopFrontBg from './assets/Shop front map.jpg';

// Scroll to top (or hash anchor) on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Fixed Faded Storefront Background (Layered with Heavy Dark Overlay) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-fixed bg-cover bg-center select-none"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.88), rgba(18, 18, 18, 0.90)), url("${shopFrontBg}")`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Routes>
          {/* Public brochure pages */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
