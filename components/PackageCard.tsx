import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { TravelPackage } from '../types';
import { motion } from 'framer-motion';

interface PackageCardProps {
  pkg: TravelPackage;
  translatePrice: string;
  translatePerson: string;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, translatePrice, translatePerson }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 uppercase tracking-wide">
            {pkg.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
              {pkg.title}
            </h3>
            <div className="flex items-center text-gray-500 text-sm gap-1">
              <MapPin size={14} />
              {pkg.location}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg">
            <Clock size={14} className="text-primary-600" />
            {pkg.duration}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
          <div>
            <span className="block text-xs text-gray-400 uppercase font-medium">Start from</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-primary-600">
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(pkg.price)}
              </span>
              <span className="text-xs text-gray-400">{translatePerson}</span>
            </div>
          </div>
          <Link to={`/package/${pkg.id}`} className="bg-gray-900 text-white p-2.5 rounded-full hover:bg-primary-600 transition-colors">
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};