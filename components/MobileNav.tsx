import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, MessageCircleQuestion } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const MobileNav: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const handleHelpClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Admin,%20I%20need%20help%20with...`, '_blank');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-3 pb-6 z-50 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <Link to="/" className={`flex flex-col items-center gap-1.5 transition-colors duration-200 ${isActive('/') ? 'text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}>
        <Home size={26} strokeWidth={isActive('/') ? 2.5 : 2} />
        <span className="text-[10px] font-medium">Home</span>
      </Link>
      
      <Link to="/packages" className={`flex flex-col items-center gap-1.5 transition-colors duration-200 ${isActive('/packages') ? 'text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}>
        <Compass size={26} strokeWidth={isActive('/packages') ? 2.5 : 2} />
        <span className="text-[10px] font-medium">Explore</span>
      </Link>

      <button onClick={handleHelpClick} className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-green-600 transition-colors duration-200 group">
         <MessageCircleQuestion size={26} strokeWidth={2} className="group-hover:text-green-600" />
         <span className="text-[10px] font-medium">Help</span>
      </button>
    </div>
  );
};