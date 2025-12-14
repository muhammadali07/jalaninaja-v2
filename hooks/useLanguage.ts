import { useState, useEffect } from 'react';
import { Language, Translation } from '../types';
import { TRANSLATIONS } from '../constants';

export const useLanguage = () => {
  // Initialize with a default, but we'll effect update it immediately
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    // 1. Check if user manually selected language previously
    const savedLang = localStorage.getItem('nusatrip_lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
      setLang(savedLang);
      return;
    }

    // 2. Logic: "When in Indonesia"
    // We use Timezone as a proxy for physical location
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const isIndonesiaTimezone = [
      'Asia/Jakarta', 
      'Asia/Pontianak', 
      'Asia/Makassar', 
      'Asia/Jayapura'
    ].some(tz => timeZone.includes(tz) || timeZone === 'Asia/Jakarta');

    // 3. Fallback to browser language setting
    const browserLang = navigator.language.toLowerCase();
    const isIndonesianLang = browserLang.startsWith('id');

    if (isIndonesiaTimezone || isIndonesianLang) {
      setLang('id');
    } else {
      setLang('en');
    }
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('nusatrip_lang', newLang);
  };

  const t: Translation = TRANSLATIONS[lang];

  return { lang, t, changeLanguage };
};