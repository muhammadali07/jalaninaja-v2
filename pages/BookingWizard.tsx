import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Smartphone, Mail, User, Info, CheckCircle2, Calendar, Users, Loader2, MessageSquare, Receipt, Lock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { PACKAGES, WHATSAPP_NUMBER } from '../constants';
import { BookingDetails } from '../types';
import { Button } from '../components/ui/Button';

export const BookingWizard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const pkg = PACKAGES.find(p => p.id === id);
  
  const [step, setStep] = useState<1 | 2>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<BookingDetails>>({
    passengers: 1,
    date: '',
    specialRequest: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  if (!pkg) return <div className="p-10 text-center">Package not found</div>;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const total = (pkg.price * (Number(formData.passengers) || 1));
      const formattedTotal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total);
      
      const message = `
*BOOKING REQUEST* 🎫
------------------------
*Package:* ${pkg.title}
*Date:* ${formData.date}
*Travelers:* ${formData.passengers} PAX

*Guest Details:*
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || '-'}

*Notes:*
${formData.specialRequest || '-'}

------------------------
*Total Estimate:* ${formattedTotal}
------------------------
Please confirm my reservation availability. Thank you!`.trim();

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.location.href = url;
      setIsLoading(false);
    }, 1500); // Slightly longer delay for "processing" feel
  };

  const totalPrice = pkg.price * (Number(formData.passengers) || 1);

  return (
    <div className="min-h-screen bg-gray-50 md:pt-24 md:pb-20 flex flex-col">
      {/* Mobile Top Bar */}
      <div className="md:hidden sticky top-0 z-40 bg-white border-b border-gray-100 px-4 h-14 flex items-center gap-4 shadow-sm">
        <button onClick={() => step === 1 ? navigate(-1) : setStep(1)} className="p-2 -ml-2 text-gray-900">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">
          {step === 1 ? t.stepDetails : t.stepSummary}
        </h1>
      </div>

      <div className="flex-1 container mx-auto px-0 md:px-4 max-w-2xl">
        <div className="hidden md:block mb-8">
           <button onClick={() => step === 1 ? navigate(-1) : setStep(1)} className="flex items-center text-gray-500 hover:text-gray-900 mb-6 transition-colors">
            <ChevronLeft size={20} /> {t.backButton}
           </button>
           
           <div className="flex items-center justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
              <div className={`flex items-center gap-2 bg-gray-50 pr-4 ${step >= 1 ? 'text-primary-600 font-bold' : 'text-gray-400'}`}>
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}>1</div>
                 <span>{t.stepDetails}</span>
              </div>
              <div className={`flex items-center gap-2 bg-gray-50 pl-4 ${step >= 2 ? 'text-primary-600 font-bold' : 'text-gray-400'}`}>
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}>2</div>
                 <span>{t.stepSummary}</span>
              </div>
           </div>
        </div>

        <div className={`md:rounded-3xl md:shadow-xl md:border md:border-gray-100 overflow-hidden flex flex-col h-full md:h-auto relative transition-colors duration-500 ${step === 2 ? 'bg-gray-50 md:bg-white' : 'bg-white'}`}>
           
           {/* Step 1: Form Content */}
           <AnimatePresence mode="wait">
             {step === 1 && (
               <motion.div
                 key="step1"
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: 10 }}
                 className="bg-white flex-1"
               >
                 {/* Package Summary Mini Header for Step 1 */}
                 <div className="bg-primary-50 p-6 flex items-center gap-4 border-b border-primary-100">
                   <img src={pkg.image} alt="" className="w-16 h-16 rounded-xl object-cover shadow-sm flex-shrink-0" />
                   <div className="flex-1 min-w-0">
                     <p className="text-xs font-bold text-primary-600 uppercase tracking-wide mb-1">{pkg.category}</p>
                     <h3 className="font-bold text-gray-900 truncate">{pkg.title}</h3>
                     <p className="text-sm text-gray-500">{pkg.duration}</p>
                   </div>
                 </div>

                 <form onSubmit={handleStep1Submit} className="p-6 md:p-8 space-y-6 pb-32">
                   <div className="space-y-4">
                     <div className="space-y-1">
                       <label className="text-sm font-medium text-gray-700 ml-1">{t.formName} <span className="text-red-500">*</span></label>
                       <div className="relative">
                         <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                         <input
                           type="text"
                           name="fullName"
                           required
                           value={formData.fullName || ''}
                           onChange={handleInputChange}
                           className="w-full h-14 pl-12 pr-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none font-medium"
                           placeholder="Ex: John Doe"
                         />
                       </div>
                     </div>

                     <div className="space-y-1">
                       <label className="text-sm font-medium text-gray-700 ml-1">{t.formPhone} <span className="text-red-500">*</span></label>
                       <div className="relative">
                         <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                         <input
                           type="tel"
                           name="phone"
                           required
                           value={formData.phone || ''}
                           onChange={handleInputChange}
                           className="w-full h-14 pl-12 pr-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none font-medium"
                           placeholder="Ex: 08123456789"
                         />
                       </div>
                     </div>

                     <div className="space-y-1">
                       <label className="text-sm font-medium text-gray-700 ml-1">{t.formEmail}</label>
                       <div className="relative">
                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                         <input
                           type="email"
                           name="email"
                           value={formData.email || ''}
                           onChange={handleInputChange}
                           className="w-full h-14 pl-12 pr-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none font-medium"
                           placeholder="Optional"
                         />
                       </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                           <label className="text-sm font-medium text-gray-700 ml-1">{t.formDate} <span className="text-red-500">*</span></label>
                           <div className="relative">
                             <input
                               type="date"
                               name="date"
                               required
                               min={new Date().toISOString().split('T')[0]}
                               value={formData.date || ''}
                               onChange={handleInputChange}
                               className="w-full h-14 px-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none font-medium text-sm"
                             />
                           </div>
                        </div>
                        <div className="space-y-1">
                           <label className="text-sm font-medium text-gray-700 ml-1">{t.formPassengers}</label>
                           <div className="relative">
                             <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                             <input
                               type="number"
                               name="passengers"
                               min="1"
                               max="20"
                               required
                               value={formData.passengers || 1}
                               onChange={handleInputChange}
                               className="w-full h-14 pl-12 pr-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none font-medium"
                             />
                           </div>
                        </div>
                     </div>

                     <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 ml-1">{t.formSpecialRequest}</label>
                        <div className="relative">
                           <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                           <textarea
                              name="specialRequest"
                              rows={3}
                              value={formData.specialRequest || ''}
                              onChange={handleInputChange}
                              className="w-full p-4 pl-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none font-medium resize-none"
                              placeholder="Dietary requirements, pickup location, etc."
                           />
                        </div>
                     </div>
                   </div>
                 </form>
               </motion.div>
             )}

             {step === 2 && (
               <motion.div
                 key="step2"
                 initial={{ opacity: 0, x: 10 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -10 }}
                 className="p-4 md:p-8 space-y-6 flex-1 bg-gray-50 md:bg-white pb-32"
               >
                 {/* Ticket Style Receipt */}
                 <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden relative">
                    {/* Top Decorative Border */}
                    <div className="h-2 bg-primary-600 w-full"></div>
                    
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-6">
                           <div>
                              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Package</p>
                              <h3 className="font-bold text-xl text-gray-900 leading-tight">{pkg.title}</h3>
                           </div>
                           <Receipt className="text-primary-100" size={40} />
                        </div>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm mb-6">
                           <div>
                              <p className="text-gray-400 text-xs mb-0.5">Check-in</p>
                              <p className="font-semibold text-gray-900">{formData.date}</p>
                           </div>
                           <div>
                              <p className="text-gray-400 text-xs mb-0.5">Duration</p>
                              <p className="font-semibold text-gray-900">{pkg.duration}</p>
                           </div>
                           <div>
                              <p className="text-gray-400 text-xs mb-0.5">Traveler</p>
                              <p className="font-semibold text-gray-900">{formData.fullName}</p>
                           </div>
                           <div>
                              <p className="text-gray-400 text-xs mb-0.5">Guests</p>
                              <p className="font-semibold text-gray-900">{formData.passengers} Pax</p>
                           </div>
                        </div>

                        {formData.specialRequest && (
                           <div className="mb-6 bg-yellow-50 p-3 rounded-xl border border-yellow-100">
                              <p className="text-xs text-yellow-700 font-bold mb-1">Note:</p>
                              <p className="text-xs text-yellow-800 italic">"{formData.specialRequest}"</p>
                           </div>
                        )}
                    </div>

                    {/* Dashed Divider with Circles */}
                    <div className="relative h-6 bg-white flex items-center">
                        <div className="absolute left-0 w-3 h-6 bg-gray-50 rounded-r-full"></div>
                        <div className="w-full border-t-2 border-dashed border-gray-200 mx-4"></div>
                        <div className="absolute right-0 w-3 h-6 bg-gray-50 rounded-l-full"></div>
                    </div>

                    <div className="p-6 bg-primary-50/50">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-gray-500 text-sm">Price per person</span>
                           <span className="text-gray-900 font-medium">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(pkg.price)}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                           <span className="text-gray-500 text-sm">Passengers</span>
                           <span className="text-gray-900 font-medium">x {formData.passengers}</span>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t border-primary-100">
                           <span className="text-gray-900 font-bold">Total Payment</span>
                           <span className="text-2xl font-bold text-primary-600">
                              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(totalPrice)}
                           </span>
                        </div>
                    </div>
                 </div>

                 <div className="flex gap-2 items-center justify-center text-xs text-gray-400 mt-4">
                     <Lock size={12} />
                     <span>Your data is secure. Payment is settled via WhatsApp.</span>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>

           {/* Sticky Bottom Action Bar */}
           <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 md:absolute md:bottom-0 md:border-t-0 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between gap-4 container mx-auto px-0">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium">Total Estimate</span>
                  <span className="text-xl font-bold text-primary-600">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(totalPrice)}
                  </span>
                </div>
                {step === 1 ? (
                  <Button 
                    onClick={() => {
                        // Manual validation check for footer button
                        if (formData.fullName && formData.phone && formData.date) {
                             setStep(2);
                        } else {
                            // Trigger HTML5 validation by finding the form and requesting submit
                            const form = document.querySelector('form');
                            if (form) form.requestSubmit();
                        }
                    }} 
                    className="px-8 h-12 rounded-xl text-base shadow-lg shadow-primary-500/20"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button 
                    onClick={handleConfirm} 
                    disabled={isLoading}
                    className="px-6 h-12 rounded-xl text-base bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-green-500/20 flex items-center gap-2"
                  >
                    {isLoading ? (
                        <Loader2 className="animate-spin" size={20} />
                    ) : (
                        <Smartphone size={20} />
                    )}
                    {t.confirmButton}
                  </Button>
                )}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};