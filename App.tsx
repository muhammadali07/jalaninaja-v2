import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { PackageList } from './pages/PackageList';
import { PackageDetail } from './pages/PackageDetail';
import { BookingWizard } from './pages/BookingWizard';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const location = useLocation();
  // Hide bottom nav on booking wizard for more screen real estate
  const showMobileNav = !location.pathname.includes('/book/');

  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-primary-100 selection:text-primary-900 bg-gray-50/50 min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="md:pt-0 pt-14 pb-20 md:pb-0"> {/* Mobile padding for top header and bottom nav */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<PackageList />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="/book/:id" element={<BookingWizard />} />
        </Routes>
      </main>
      {showMobileNav && <MobileNav />}
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default App;