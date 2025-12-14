import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Map, Bell } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On Mobile, we show a simplified header or rely on MobileNav. 
  // This component will primarily serve Desktop now, or the top simplified bar for Mobile.
  
  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary-600 p-2 rounded-xl text-white group-hover:bg-primary-700 transition-colors">
              <Map size={24} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'}`}>
              NusaTrip
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium hover:text-primary-600 transition-colors ${isScrolled || location.pathname !== '/' ? 'text-gray-600' : 'text-white/90'}`}>Home</Link>
            <Link to="/packages" className={`text-sm font-medium hover:text-primary-600 transition-colors ${isScrolled || location.pathname !== '/' ? 'text-gray-600' : 'text-white/90'}`}>Packages</Link>
            <Link to="/packages">
               <Button variant={isScrolled || location.pathname !== '/' ? 'primary' : 'secondary'} size="sm">Book Now</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Header (App Style) */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 z-40 bg-white px-4 py-3 flex items-center justify-between shadow-sm transition-transform duration-300 ${isScrolled ? 'translate-y-0' : 'translate-y-0'}`}>
        <Link to="/" className="flex items-center gap-2">
           <div className="bg-primary-600 p-1.5 rounded-lg text-white">
             <Map size={18} />
           </div>
           <span className="text-lg font-bold text-gray-900 tracking-tight">NusaTrip</span>
        </Link>
        <button className="text-gray-500 relative">
          <Bell size={22} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
      </nav>
    </>
  );
};