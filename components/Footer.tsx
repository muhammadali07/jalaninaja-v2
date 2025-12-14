import React from 'react';
import { Map, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary-600 p-1.5 rounded-lg text-white">
                <Map size={20} />
              </div>
              <span className="text-lg font-bold text-gray-900">NusaTrip</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Making your dream Indonesian vacation a reality with curated premium packages and seamless booking.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary-600">About Us</a></li>
              <li><a href="#" className="hover:text-primary-600">Careers</a></li>
              <li><a href="#" className="hover:text-primary-600">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary-600">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-600">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-primary-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary-600 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 NusaTrip Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};