import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Star, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { PACKAGES } from '../constants';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const featuredPackages = PACKAGES.slice(0, 4);

  return (
    <>
      <SEO title="Home" description={t.heroSubtitle} />
      
      <div className="min-h-screen bg-gray-50">
        {/* Mobile Hero (App Style) */}
        <div className="md:hidden px-4 py-6 space-y-6">
          <div className="bg-primary-600 rounded-3xl p-6 text-white shadow-lg shadow-primary-600/30 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
             <div className="relative z-10">
               <h1 className="text-2xl font-bold mb-2 leading-tight">Where do you want to go today?</h1>
               <p className="text-primary-100 text-sm mb-4">Discover Indonesia's hidden gems.</p>
               <Link to="/packages">
                 <button className="bg-white text-primary-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                   Explore Now
                 </button>
               </Link>
             </div>
          </div>

          {/* Categories Horizontal Scroll */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Categories</h3>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
               {['All', 'Beach', 'Mountain', 'City', 'Culture'].map((cat, i) => (
                 <button key={i} className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium ${i === 0 ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border border-gray-100'}`}>
                   {cat}
                 </button>
               ))}
            </div>
          </div>

          {/* Featured Vertical List for Mobile (App Style) */}
          <div>
            <div className="flex justify-between items-end mb-3">
               <h3 className="font-bold text-gray-900 text-lg">Popular</h3>
               <Link to="/packages" className="text-primary-600 text-xs font-semibold">View All</Link>
            </div>
            <div className="space-y-4">
              {featuredPackages.map((pkg) => (
                <Link to={`/package/${pkg.id}`} key={pkg.id} className="flex bg-white p-3 rounded-2xl shadow-sm border border-gray-100 gap-3">
                  <img src={pkg.image} className="w-24 h-24 rounded-xl object-cover" alt={pkg.title} />
                  <div className="flex-1 py-1 flex flex-col justify-between">
                     <div>
                       <div className="flex items-center gap-1 text-[10px] text-gray-500 mb-1">
                         <MapPin size={10} /> {pkg.location}
                       </div>
                       <h4 className="font-bold text-gray-900 text-sm line-clamp-2">{pkg.title}</h4>
                     </div>
                     <div className="flex items-center justify-between mt-2">
                       <span className="text-primary-600 font-bold text-sm">
                         {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 1 }).format(pkg.price)}
                       </span>
                       <div className="flex items-center gap-1">
                         <Star size={12} className="text-yellow-400 fill-yellow-400" />
                         <span className="text-xs text-gray-500">4.8</span>
                       </div>
                     </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Hero (Original Web Style) */}
        <section className="hidden md:flex relative h-[90vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/id/1015/1920/1080" 
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
                {t.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                {t.heroSubtitle}
              </p>
              <Link to="/packages">
                <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-white text-primary-600 hover:bg-gray-100 border-none">
                  {t.heroCta}
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Desktop Featured Section */}
        <div className="hidden md:block">
           {/* Reusing content from original but keeping it cleaner for XML brevity, assuming desktop is mostly fine */}
           <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.featuredTitle}</h2>
                  <p className="text-gray-500">Handpicked for you by our experts</p>
                </div>
                <Link to="/packages" className="flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700">
                  {t.viewAll} <ArrowRight size={20} />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-8">
                {featuredPackages.slice(0,3).map((pkg) => (
                    <div key={pkg.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-4">
                            <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                        <p className="text-gray-500 text-sm mb-2">{pkg.location}</p>
                        <p className="text-primary-600 font-bold">
                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(pkg.price)}
                        </p>
                    </div>
                ))}
              </div>
            </div>
           </section>
        </div>
      </div>
    </>
  );
};