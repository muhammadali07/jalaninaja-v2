import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, CheckCircle2, ChevronLeft, Share2, Heart, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { PACKAGES } from '../constants';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';

export const PackageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const pkg = PACKAGES.find(p => p.id === id);

  if (!pkg) return <Navigate to="/packages" replace />;

  return (
    <>
      <SEO 
        title={pkg.title} 
        description={pkg.description} 
        image={pkg.image}
      />
      
      <div className="min-h-screen bg-white pb-24 md:pb-12">
        {/* Mobile Navbar Overlay */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center pointer-events-none">
           <Link to="/packages" className="w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 pointer-events-auto shadow-sm">
             <ChevronLeft size={24} />
           </Link>
           <div className="flex gap-3 pointer-events-auto">
             <button className="w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-sm">
               <Share2 size={20} />
             </button>
             <button className="w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-sm">
               <Heart size={20} />
             </button>
           </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
          
          {/* Mobile Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden text-white">
             <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-xs font-medium mb-2 inline-block border border-white/30">
                {pkg.category}
             </span>
             <h1 className="text-3xl font-bold leading-tight mb-2">{pkg.title}</h1>
             <div className="flex items-center gap-4 text-sm text-white/90">
                <div className="flex items-center gap-1"><MapPin size={14} /> {pkg.location}</div>
                <div className="flex items-center gap-1"><Clock size={14} /> {pkg.duration}</div>
             </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 md:-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 bg-white md:rounded-3xl md:p-8 md:shadow-xl md:border md:border-gray-100 pt-6 md:pt-8"
            >
              {/* Desktop Header */}
              <div className="hidden md:block mb-6">
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium capitalize">{pkg.category}</span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm"><MapPin size={16} /> {pkg.location}</div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm"><Clock size={16} /> {pkg.duration}</div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{pkg.title}</h1>
              </div>

              <div className="prose prose-blue max-w-none">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-base">{pkg.description}</p>
              </div>

              <div className="border-t border-gray-100 pt-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t.facilities}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {pkg.facilities.map((facility, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                      <CheckCircle2 size={16} className="text-primary-600 flex-shrink-0" />
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{t.itinerary}</h3>
                <div className="space-y-6 relative pl-2 md:pl-0">
                  <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gray-100 md:left-4"></div>
                  {pkg.itinerary.map((item, idx) => (
                    <div key={idx} className="relative flex gap-4">
                      <div className="absolute left-0 w-4 h-4 rounded-full bg-white border-4 border-primary-500 z-10 md:left-2"></div>
                      <div className="pl-6 md:pl-8">
                        <span className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-1 block">Day {item.day}</span>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Desktop Sidebar Booking */}
            <div className="hidden lg:block lg:col-span-1">
               <div className="sticky top-24 bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-1">Price starts from</p>
                    <div className="flex items-baseline gap-1">
                       <span className="text-3xl font-bold text-gray-900">
                          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(pkg.price)}
                       </span>
                       <span className="text-gray-500">{t.pricePerPerson}</span>
                    </div>
                  </div>
                  <Link to={`/book/${pkg.id}`} className="w-full">
                    <Button size="lg" className="w-full mb-4">
                      {t.checkoutButton}
                    </Button>
                  </Link>
                  <div className="flex items-center gap-2 justify-center text-xs text-gray-400">
                    <ShieldCheck size={14} />
                    Secure Booking via WhatsApp
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Mobile Sticky Booking Footer */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-50 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] safe-area-pb">
            <div>
               <p className="text-xs text-gray-500">Total Price</p>
               <p className="text-lg font-bold text-primary-600">
                 {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(pkg.price)}
               </p>
            </div>
            <Link to={`/book/${pkg.id}`}>
               <Button className="px-8 shadow-primary-500/30">
                  {t.checkoutButton}
               </Button>
            </Link>
        </div>
      </div>
    </>
  );
};