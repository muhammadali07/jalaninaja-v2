import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { PACKAGES } from '../constants';
import { PackageCard } from '../components/PackageCard';
import { SEO } from '../components/SEO';

export const PackageList: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(PACKAGES.map(p => p.category)));
    return ['all', ...cats];
  }, []);

  const filteredPackages = useMemo(() => {
    if (activeCategory === 'all') return PACKAGES;
    return PACKAGES.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEO title="Packages" description="Browse our collection of premium Indonesian travel packages." />
      <div className="min-h-screen pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.featuredTitle}</h1>
            <p className="text-gray-500 text-base md:text-lg">
              Find the perfect getaway from our collection of exclusive travel packages.
            </p>
          </div>

          <div className="flex overflow-x-auto no-scrollbar gap-3 mb-8 md:mb-12 pb-2 md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-medium transition-all capitalize whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat === 'all' ? t.filterAll : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard 
                key={pkg.id} 
                pkg={pkg} 
                translatePrice="IDR"
                translatePerson={t.pricePerPerson}
              />
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No packages found in this category.
            </div>
          )}
        </div>
      </div>
    </>
  );
};