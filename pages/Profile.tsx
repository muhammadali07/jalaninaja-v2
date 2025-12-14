import React from 'react';
import { User, Settings, CreditCard, LogOut, ChevronRight, Bell, Shield, HelpCircle, Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';

export const Profile: React.FC = () => {
  const menuItems = [
    { icon: <User size={20} />, label: 'Edit Profile' },
    { icon: <CreditCard size={20} />, label: 'Payment Methods' },
    { icon: <Bell size={20} />, label: 'Notifications' },
    { icon: <Heart size={20} />, label: 'Saved Trips' },
    { icon: <Shield size={20} />, label: 'Privacy & Security' },
    { icon: <HelpCircle size={20} />, label: 'Help & Support' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <>
      <SEO title="My Account" />
      <div className="min-h-screen bg-gray-50 pb-24 pt-20">
        <div className="container mx-auto px-4 max-w-md">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-2xl font-bold border-4 border-white shadow-sm">
              JD
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
              <p className="text-gray-500 text-sm">Traveler Member</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-4 bg-primary-600 text-white flex justify-between items-center">
              <div>
                <p className="text-primary-100 text-xs uppercase font-semibold tracking-wider">NusaPoints</p>
                <p className="text-2xl font-bold">2,450</p>
              </div>
              <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
                Redeem
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {menuItems.map((item, index) => (
              <button 
                key={index}
                className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                  index !== menuItems.length - 1 ? 'border-b border-gray-50' : ''
                }`}
              >
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-gray-400">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
                <ChevronRight size={18} className="text-gray-300" />
              </button>
            ))}
          </div>

          <div className="mt-8">
            <Button variant="outline" className="w-full border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600">
              <LogOut size={18} className="mr-2" />
              Log Out
            </Button>
            <p className="text-center text-gray-400 text-xs mt-4">
              Version 1.0.0
            </p>
          </div>
        </div>
      </div>
    </>
  );
};